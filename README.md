# ZLXB Scholar Search 3.0

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)

> 🎓 一个功能强大的学术论文搜索与AI分析平台

## 项目简介

ZLXB Scholar Search 3.0 是一个现代化的学术论文搜索平台，集成了多个数据源和AI分析功能。该平台旨在为研究人员、学者和学生提供高效、智能的学术资源检索和分析工具。

### 核心特色
- 🔍 **多源整合搜索** - 整合 Semantic Scholar、Google Scholar 等多个学术数据库
- 🤖 **AI智能分析** - 基于 GPT-4 和 DeepSeek 的论文分析和研究报告生成
- 📊 **可视化展示** - 直观的数据图表和研究演化树
- 🌐 **多语言支持** - 支持中英文界面和内容翻译
- ⚡ **实时搜索** - 快速响应的搜索体验
- 🛡️ **安全可靠** - 完善的错误处理和日志系统

## 主要功能

### 🔍 多源学术搜索
- **Semantic Scholar API** - 获取高质量的学术论文数据
- **Google Scholar 爬取** - 扩大搜索覆盖范围
- **Primary Scraping** - 自定义数据源爬取
- **智能筛选** - 按年份、期刊、引用数等条件筛选
- **排序优化** - 支持相关性、时间、引用数排序

### 🤖 AI智能分析
- **批量论文分析** - 一键分析多篇论文的核心内容
- **研究报告生成** - 自动生成结构化的研究综述报告
- **内容翻译** - 支持论文标题和摘要的中英文翻译
- **多模型支持** - 集成 GPT-4o-mini、DeepSeek-V3 等先进模型
- **智能摘要** - 提取论文关键信息和研究亮点

### 📊 数据可视化
- **研究演化树** - 展示学术领域的发展脉络
- **统计图表** - 可视化搜索结果和分析数据
- **交互式界面** - 现代化的用户体验设计
- **响应式布局** - 适配各种设备屏幕

### 🌐 多语言支持
- **中英文界面** - 完整的国际化支持
- **内容翻译** - AI驱动的学术内容翻译
- **本地化配置** - 灵活的语言切换机制

## 技术栈

### 前端技术
- **React 18.2.0** - 现代化的用户界面框架
- **Styled Components** - CSS-in-JS 样式解决方案
- **React Router** - 单页应用路由管理
- **React Hot Toast** - 优雅的消息提示组件
- **React Icons** - 丰富的图标库
- **Axios** - HTTP 请求库

### 后端技术
- **Node.js** - JavaScript 运行时环境
- **Express.js** - 轻量级 Web 应用框架
- **CORS** - 跨域资源共享中间件
- **dotenv** - 环境变量管理
- **Lockfile** - 进程锁管理

### AI集成
- **OpenAI GPT-4o-mini** - 主要的AI分析模型
- **DeepSeek-V3** - 备选AI分析模型
- **自定义AI代理** - 智能论文分析和报告生成

### 数据源
- **Semantic Scholar API** - 学术论文数据库
- **Google Scholar** - 网页爬取学术内容
- **ScrapingDog** - 专业爬取服务

## 快速开始

### 环境要求
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 或 **yarn** >= 1.22.0
- **Git** 版本控制工具

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/your-username/zlxb-scholar-search-3.0.git
cd zlxb-scholar-search-3.0
```

2. **安装依赖**
```bash
npm install
# 或使用 yarn
yarn install
```

3. **环境配置**
```bash
# 复制环境变量模板
cp .env.example .env

# 复制API密钥配置模板
cp config/api_keys.example.json config/api_keys.json
```

### 配置说明

#### 环境变量配置 (.env)
```bash
# AI API 配置
REACT_APP_AI_API_KEY=your_openai_api_key_here

# 管理员密码
REACT_APP_ADMIN_PASSWORD_1=your_admin_password
REACT_APP_ADMIN_PASSWORD_2=your_backup_password

# 日志访问密钥
REACT_APP_LOGS_ACCESS_KEY=your_logs_access_key
```

#### API密钥配置 (config/api_keys.json)
```json
{
  "aiApiKey": "your_openai_api_key_here",
  "semanticScholarKey": "your_semantic_scholar_key",
  "scrapingDogKey": "your_scrapingdog_key"
}
```

### 运行项目

#### 开发模式
```bash
# 启动完整开发环境（前端+后端）
npm run dev

# 或分别启动
npm run dev:frontend  # 启动前端开发服务器
npm run dev:backend   # 启动后端API服务器
```

#### 生产模式
```bash
# 构建项目
npm run build

# 启动生产服务器
npm run server
```

访问 `http://localhost:3000` 查看应用

## 部署指南

### 开发环境部署

#### 本地开发
```bash
# 快速启动开发环境
./quick-dev.sh

# 或使用npm脚本
npm run dev:full
```

#### 开发工具
```bash
# 查看开发服务状态
npm run dev:status

# 停止所有开发服务
npm run dev:stop

# 清理端口占用
npm run kill-ports
```

### 生产环境部署

#### 使用部署脚本
```bash
# 生产环境部署
./deploy-production.sh

# 测试环境部署
./deploy-testing.sh
```

#### 手动部署
```bash
# 1. 构建项目
npm run build

# 2. 配置生产环境变量
cp .env.production .env

# 3. 启动生产服务器
PORT=3001 node server.js
```

#### Docker 部署（推荐）
```dockerfile
# Dockerfile 示例
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["node", "server.js"]
```

### 环境变量配置

| 环境 | 配置文件 | 说明 |
|------|----------|------|
| 开发 | `.env` | 本地开发配置 |
| 生产 | `.env.production` | 生产环境配置 |
| 本地覆盖 | `.env.local` | 本地覆盖配置（优先级最高）|

## API文档

### 搜索接口

#### 统一搜索 API
```http
POST /api/search
Content-Type: application/json

{
  "query": "machine learning",
  "dataSource": "semantic",
  "offset": 0,
  "limit": 20,
  "sort": "relevance",
  "filters": {
    "year": "2020-2024",
    "venue": "ICML"
  }
}
```

#### 响应格式
```json
{
  "success": true,
  "data": {
    "papers": [...],
    "total": 1000,
    "offset": 0,
    "limit": 20
  },
  "message": "搜索成功"
}
```

### AI分析接口

#### 批量论文分析
```http
POST /api/ai/analyze-papers
Content-Type: application/json

{
  "papers": [...],
  "model": "gpt-4o-mini",
  "analysisType": "summary"
}
```

#### 研究报告生成
```http
POST /api/ai/generate-report
Content-Type: application/json

{
  "papers": [...],
  "reportType": "comprehensive",
  "model": "gpt-4o-mini"
}
```

### 管理接口

#### 系统状态
```http
GET /api/admin/status
Authorization: Bearer <admin_token>
```

#### API日志查看
```http
GET /api/admin/logs
Authorization: Bearer <logs_access_key>
```

## 功能特性

### 搜索功能
- ✅ **多数据源整合** - Semantic Scholar、Google Scholar、Primary Scraping
- ✅ **智能筛选** - 年份、期刊、作者、引用数等多维度筛选
- ✅ **排序优化** - 相关性、时间、引用数、影响因子排序
- ✅ **实时搜索** - 快速响应的搜索体验
- ✅ **搜索历史** - 保存和管理搜索记录
- ✅ **导出功能** - 支持多种格式的结果导出

### 分析功能
- ✅ **AI论文分析** - 智能提取论文核心内容和创新点
- ✅ **研究报告生成** - 自动生成结构化的文献综述
- ✅ **内容翻译** - 中英文论文内容翻译
- ✅ **关键词提取** - 自动识别研究领域关键词
- ✅ **相似论文推荐** - 基于内容相似性的论文推荐
- ✅ **研究趋势分析** - 分析学术领域发展趋势

### 管理功能
- ✅ **用户认证** - 安全的管理员登录系统
- ✅ **API监控** - 实时监控API调用状态和性能
- ✅ **日志管理** - 详细的操作日志和错误追踪
- ✅ **系统配置** - 灵活的系统参数配置
- ✅ **数据统计** - 使用情况和性能统计
- ✅ **错误处理** - 完善的错误处理和恢复机制

## 项目结构

### 目录说明
```
zlxb-scholar-search-3.0/
├── public/                 # 静态资源文件
│   ├── index.html         # HTML模板
│   └── favicon.ico        # 网站图标
├── src/                   # 前端源代码
│   ├── components/        # React组件
│   │   ├── SearchForm.js  # 搜索表单组件
│   │   ├── PaperCard.js   # 论文卡片组件
│   │   └── Pagination.js  # 分页组件
│   ├── api/              # API服务层
│   │   ├── unifiedSearch.js  # 统一搜索API
│   │   └── aiService.js      # AI服务API
│   ├── utils/            # 工具函数
│   ├── styles/           # 样式文件
│   └── App.js            # 主应用组件
├── config/               # 配置文件
│   ├── api_keys.json     # API密钥配置
│   └── system_settings.json # 系统设置
├── logs/                 # 日志文件目录
├── scripts/              # 部署和工具脚本
│   ├── deploy-production.sh
│   ├── deploy-testing.sh
│   └── quick-dev.sh
├── server.js             # Express后端服务器
├── package.json          # 项目依赖配置
├── .env.example          # 环境变量模板
├── SETUP.md             # 安装配置指南
└── DEPLOYMENT.md        # 部署说明文档
```

### 核心文件

| 文件 | 说明 |
|------|------|
| `src/App.js` | 主应用组件，包含路由和全局状态管理 |
| `src/api/unifiedSearch.js` | 统一搜索API，整合多个数据源 |
| `src/api/aiService.js` | AI服务API，处理论文分析和报告生成 |
| `server.js` | Express后端服务器，提供API接口 |
| `config/api_keys.json` | API密钥配置文件 |
| `config/system_settings.json` | 系统设置配置文件 |

## 开发指南

### 开发环境搭建

### 代码规范

#### JavaScript/React 规范
- 使用 ES6+ 语法
- 组件使用函数式组件和 Hooks
- 使用 Styled Components 进行样式管理
- 遵循 ESLint 配置的代码规范

#### 命名规范
```javascript
// 组件名使用 PascalCase
const SearchForm = () => { ... }

// 函数名使用 camelCase
const searchPapers = async () => { ... }

// 常量使用 UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'

// 文件名使用 camelCase
// unifiedSearch.js, aiService.js
```

#### 注释规范
```javascript
/**
 * 统一搜索论文函数
 * @param {string} query - 搜索关键词
 * @param {Object} options - 搜索选项
 * @returns {Promise<Object>} 搜索结果
 */
const searchPapers = async (query, options) => {
  // 实现逻辑
}
```

### 开发流程

#### 1. 功能开发
```bash
# 创建功能分支
git checkout -b feature/new-feature

# 开发和测试
npm run dev

# 提交代码
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

#### 2. 代码审查
- 创建 Pull Request
- 代码审查和讨论
- 修复反馈问题
- 合并到主分支

#### 3. 部署流程
```bash
# 测试环境部署
./scripts/deploy-testing.sh

# 生产环境部署
./scripts/deploy-production.sh
```

### 调试指南

#### 前端调试
```bash
# 启动开发服务器（包含热重载）
npm run dev:frontend

# 使用浏览器开发者工具
# - Console 查看日志
# - Network 监控API请求
# - React DevTools 调试组件状态
```

#### 后端调试
```bash
# 启动后端服务（包含调试模式）
npm run dev:backend

# 查看服务器日志
tail -f logs/server.log

# API测试
curl -X POST http://localhost:3001/api/search \
  -H "Content-Type: application/json" \
  -d '{"query":"test"}'
```

#### 常用调试命令
```bash
# 检查端口占用
lsof -i :3000
lsof -i :3001

# 清理端口
npm run kill-ports

# 查看进程状态
ps aux | grep node

# 查看系统资源
top -p $(pgrep node)
```

### 贡献指南

我们欢迎所有形式的贡献！请遵循以下指南：

#### 提交 Issue
- 使用清晰的标题描述问题
- 提供详细的问题复现步骤
- 包含相关的错误日志和截图
- 标明您的操作系统和浏览器版本

#### 提交 Pull Request
1. Fork 项目到您的 GitHub 账户
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交您的更改：`git commit -m 'Add some amazing feature'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 创建 Pull Request

#### 代码贡献规范
- 遵循项目的代码风格
- 添加适当的测试用例
- 更新相关文档
- 确保所有测试通过

## 常见问题

### 安装问题

#### Q: npm install 失败
**A:** 尝试以下解决方案：
```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules 重新安装
rm -rf node_modules package-lock.json
npm install

# 使用 yarn 替代
yarn install
```

#### Q: Node.js 版本不兼容
**A:** 确保使用 Node.js 16+ 版本：
```bash
# 检查版本
node --version

# 使用 nvm 管理版本
nvm install 16
nvm use 16
```

### 配置问题

#### Q: API密钥配置错误
**A:** 检查配置文件格式：
```bash
# 验证 JSON 格式
node -e "console.log(JSON.parse(require('fs').readFileSync('config/api_keys.json')))"

# 检查环境变量
echo $REACT_APP_AI_API_KEY
```

#### Q: 环境变量不生效
**A:** 确保环境变量正确配置：
```bash
# 检查 .env 文件
cat .env

# 重启开发服务器
npm run dev
```

### 运行问题

#### Q: 端口被占用
**A:** 清理端口占用：
```bash
# 查找占用进程
lsof -i :3000

# 杀死进程
kill -9 <PID>

# 或使用脚本
npm run kill-ports
```

#### Q: API请求失败
**A:** 检查网络和配置：
```bash
# 测试网络连接
ping api.semanticscholar.org

# 检查API密钥
curl -H "Authorization: Bearer $API_KEY" https://api.openai.com/v1/models

# 查看详细错误日志
tail -f logs/error.log
```

#### Q: 前端页面空白
**A:** 检查控制台错误：
1. 打开浏览器开发者工具
2. 查看 Console 标签页的错误信息
3. 检查 Network 标签页的请求状态
4. 确认后端服务是否正常运行

## 更新日志

### v3.0.0 (2024-01-15)
#### 🎉 重大更新
- 全新的 React 18 前端架构
- 重构的统一搜索API系统
- 集成多个AI模型支持
- 现代化的UI/UX设计

#### ✨ 新功能
- 多数据源整合搜索（Semantic Scholar、Google Scholar）
- AI驱动的论文分析和报告生成
- 实时搜索和智能筛选
- 响应式设计和移动端适配
- 完善的错误处理和日志系统

#### 🔧 技术改进
- 使用 Styled Components 进行样式管理
- 优化的API请求和缓存机制
- 改进的部署和开发工具
- 增强的安全性和性能

#### 🐛 问题修复
- 修复搜索结果分页问题
- 解决API请求超时问题
- 优化内存使用和性能

### v2.x.x
- 历史版本功能和改进
- 基础搜索功能实现
- 初始AI集成

## 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。

```
MIT License

Copyright (c) 2024 ZLXB Scholar Search

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 联系方式

### 项目维护者
<!-- 可对接的代码托管平台：GitHub、GitLab、Gitee、Bitbucket等 -->
- **项目主页**: [GitHub Repository](https://github.com/your-organization/your-project-name)
- **问题反馈**: [GitHub Issues](https://github.com/your-organization/your-project-name/issues)
- **功能建议**: [GitHub Discussions](https://github.com/your-organization/your-project-name/discussions)

### 技术支持
- **文档**: 查看项目 [Wiki](https://github.com/your-organization/your-project-name/wiki)
- **常见问题**: 参考本文档的 [常见问题](#常见问题) 部分
<!-- 可对接的社区平台：Discord、Slack、QQ群、微信群、Telegram等 -->
- **社区讨论**: 加入我们的 [Discord 社区](https://discord.gg/your-community-invite)

### 商业合作
<!-- 替换为您的实际联系方式 -->
- **邮箱**: contact@your-domain.com
- **官网**: https://www.your-domain.com

## 致谢

感谢以下开源项目和服务提供商的支持：

### 核心技术
- [React](https://reactjs.org/) - 用户界面构建框架
- [Express.js](https://expressjs.com/) - Node.js Web应用框架
- [Styled Components](https://styled-components.com/) - CSS-in-JS样式库

### 数据源和API
<!-- 可对接的学术数据库：Semantic Scholar、arXiv、PubMed、IEEE Xplore、ACM Digital Library等 -->
- [Semantic Scholar](https://www.example-academic-db.com/) - 学术论文数据库
<!-- 可对接的AI服务：OpenAI、DeepSeek、通义千问、文心一言、Claude、Gemini等 -->
- [OpenAI](https://api.example-ai-provider.com/) - AI模型和API服务
- [DeepSeek](https://api.example-ai-service.com/) - AI模型服务

### 开发工具
- [GitHub](https://github.com/) - 代码托管和协作平台
- [npm](https://www.npmjs.com/) - JavaScript包管理器
- [React DevTools](https://react.dev/learn/react-developer-tools) - React开发调试工具

### 特别感谢
- 所有贡献代码和反馈的开发者
- 学术研究社区的支持和建议
- 开源社区的无私奉献

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！**

[🏠 返回顶部](#zlxb-scholar-search-30)

</div>