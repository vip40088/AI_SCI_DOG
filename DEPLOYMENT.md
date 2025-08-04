# 部署配置说明

## 环境配置系统

项目使用环境变量来管理不同环境的配置，支持开发环境和生产环境的不同设置。

### 配置文件

- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置  
- `.env.local` - 本地覆盖配置（优先级最高，git忽略）

### 环境变量说明

| 变量名 | 说明 | 开发环境默认值 | 生产环境默认值 |
|--------|------|----------------|----------------|
| `REACT_APP_API_BASE_URL` | API服务器基础地址 | `http://localhost:3001` | `` (空，使用代理) |
| `REACT_APP_USE_PROXY` | 是否强制使用代理 | `false` | `true` |
| `REACT_APP_DEBUG` | 是否开启调试模式 | `true` | `false` |

## 工作模式

### 开发环境

**模式1：直连模式（默认）**
- 前端直接连接到 `http://localhost:3001`
- 适合本地开发，配置简单
- 绕过代理，减少调试复杂度

**模式2：代理模式**
- 设置 `REACT_APP_USE_PROXY=true`
- 前端通过代理访问后端
- 模拟生产环境行为

### 生产环境

**强制代理模式**
- 所有API请求使用相对路径
- 通过Nginx等代理服务器转发
- 避免跨域问题，提高安全性

## 使用方法

### 开发环境启动

```bash
# 使用默认配置（直连模式）
npm start

# 使用代理模式
REACT_APP_USE_PROXY=true npm start

# 使用自定义后端地址
REACT_APP_API_BASE_URL=http://localhost:8080 npm start
```

### 生产环境部署

1. **构建应用**
```bash
npm run build
```

2. **Nginx配置示例**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # 前端静态文件
    location / {
        root /path/to/build;
        try_files $uri $uri/ /index.html;
    }
    
    # API代理
    location /api {
        proxy_pass http://backend-server:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 自定义配置

创建 `.env.local` 文件覆盖默认配置：

```bash
# .env.local
REACT_APP_API_BASE_URL=http://custom-backend:3001
REACT_APP_DEBUG=true
```

## 故障排除

### 开发环境API 404错误

1. 检查后端是否在3001端口运行
2. 尝试设置 `REACT_APP_USE_PROXY=true` 使用代理模式
3. 检查 `src/setupProxy.js` 代理配置

### 生产环境跨域错误

1. 确保使用代理模式（默认配置）
2. 检查代理服务器配置
3. 验证API路径配置正确

### 调试模式

开启调试模式查看配置信息：
```bash
REACT_APP_DEBUG=true npm start
```

在浏览器控制台查看 "🔧 API配置信息" 和 "🔧 环境配置" 日志。