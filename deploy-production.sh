#!/bin/bash

# 生产环境部署脚本
# 部署到生产服务器: 46.8.127.16
# 使用方法: ./deploy-production.sh

echo "🚀 部署到生产环境..."
echo "=================================="
echo "🖥️  生产服务器: 46.8.127.16"
echo "📁 部署路径: /root/zlxb_scholar_search_production"
echo ""

# 服务器配置 - 请设置环境变量或修改这些值
PROD_SERVER_IP="${PROD_SERVER_IP:-your_production_server_ip}"
SERVER_USER="${SERVER_USER:-root}"
PROD_PATH="${PROD_PATH:-/root/zlxb_scholar_search_production}"

# 检查当前分支
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📋 当前分支: $CURRENT_BRANCH"

# 检查工作目录状态
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  工作目录有未提交的更改:"
    git status --porcelain
    echo ""
    read -p "是否继续部署? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ 部署已取消"
        exit 1
    fi
fi

# 确保项目已构建
echo "🔨 检查构建产物..."
if [ ! -d "build" ]; then
    echo "📦 构建产物不存在，正在构建项目..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ 构建失败"
        exit 1
    fi
fi

# 询问是否继续部署
echo ""
read -p "🚀 确认部署到生产环境 (46.8.127.16)? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 部署已取消"
    exit 1
fi

# 同步代码到生产服务器
echo "📤 同步代码到生产服务器..."
rsync -av --progress \
    --exclude node_modules \
    --exclude logs \
    --exclude .git \
    --exclude .DS_Store \
    --exclude "*.log" \
    --exclude src \
    --exclude public \
    --exclude "test-*.js" \
    --exclude "*.md" \
    --exclude DEV_SYNC_README.md \
    --exclude PRODUCTION_FIX_GUIDE.md \
    --exclude deploy-setup.sh \
    --exclude sync-to-server.sh \
    --exclude start-dev.sh \
    ./ ${SERVER_USER}@${PROD_SERVER_IP}:${PROD_PATH}/

if [ $? -eq 0 ]; then
    echo "✅ 代码同步成功!"
    
    # 在生产服务器上安装依赖并重启服务
    echo "🔄 在生产服务器上更新服务..."
    ssh ${SERVER_USER}@${PROD_SERVER_IP} << EOF
cd ${PROD_PATH}

echo "📦 安装/更新依赖..."
npm install --production

echo "🛑 停止当前生产服务..."
pkill -f "node server/server.js" || echo "没有运行的服务需要停止"
sleep 3

echo "🚀 启动生产服务..."
nohup node server/server.js > production.log 2>&1 &

sleep 5

echo "🔍 检查服务状态..."
if pgrep -f "node server/server.js" > /dev/null; then
    echo "✅ 生产服务启动成功"
    echo "📊 服务进程:"
    ps aux | grep "node server/server.js" | grep -v grep
else
    echo "❌ 生产服务启动失败"
    echo "📋 查看错误日志:"
    tail -20 production.log
    exit 1
fi

echo ""
echo "🌐 生产环境信息:"
echo "  访问地址: http://46.8.127.16:3000"
echo "  服务器: 46.8.127.16"
echo "  日志文件: ${PROD_PATH}/production.log"
EOF

    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 生产环境部署成功!"
        echo "🌐 访问地址: http://46.8.127.16:3000"
        echo "📊 可以通过以下命令查看日志:"
        echo "   ssh root@46.8.127.16 'tail -f ${PROD_PATH}/production.log'"
    else
        echo "❌ 生产服务器配置失败"
        exit 1
    fi
else
    echo "❌ 同步到生产服务器失败"
    exit 1
fi