# 项目配置指南

## 环境变量配置

### 1. 复制环境变量模板
```bash
cp .env.example .env
```

### 2. 配置API密钥
编辑 `.env` 文件，设置以下变量：

#### AI API配置
```
REACT_APP_AI_API_KEY=your_openai_api_key_here
```

#### 日志访问密钥
```
REACT_APP_LOGS_ACCESS_KEY=your_main_logs_access_key
REACT_APP_LOGS_ACCESS_KEY_1=your_backup_key_1
REACT_APP_LOGS_ACCESS_KEY_2=your_backup_key_2
REACT_APP_LOGS_ACCESS_KEY_3=your_backup_key_3
```

#### 管理员密码
```
REACT_APP_ADMIN_PASSWORD_1=your_admin_password_1
REACT_APP_ADMIN_PASSWORD_2=your_admin_password_2
REACT_APP_ADMIN_PASSWORD_3=your_admin_password_3
REACT_APP_ADMIN_PASSWORD_4=your_admin_password_4
```

### 3. 配置API密钥文件
```bash
cp config/api_keys.example.json config/api_keys.json
```

编辑 `config/api_keys.json`：
```json
{
  "aiApiKey": "your_openai_api_key_here",
  "semanticScholarKey": "your_semantic_scholar_api_key_here",
  "scrapingDogKey": "your_scrapingdog_api_key_here"
}
```

## 部署配置

### 服务器部署环境变量
如果需要使用部署脚本，请设置以下环境变量：

```bash
export SERVER_IP="your_server_ip"
export SERVER_USER="root"
export SERVER_PASSWORD="your_server_password"
export DEPLOY_PATH="/your/deploy/path"
export PROD_SERVER_IP="your_production_server_ip"
export PROD_PATH="/your/production/path"
```

或者直接修改部署脚本中的相应变量。

## 安全注意事项

1. **永远不要提交包含真实密钥的文件到版本控制**
2. **定期更换API密钥和密码**
3. **在生产环境中使用强密码**
4. **限制服务器访问权限**

## 获取API密钥

<!-- 可对接: OpenAI、DeepSeek、通义千问等AI服务提供商 -->
- **OpenAI API**: https://platform.example-ai-service.com/api-keys
  <!-- 官方地址: https://platform.openai.com/api-keys -->

<!-- 可对接: Semantic Scholar、其他学术数据库API -->
- **Semantic Scholar API**: https://api.example-academic-db.com/product/api
  <!-- 官方地址: https://www.semanticscholar.org/product/api -->

<!-- 可对接: ScrapingDog、SerpAPI等网页抓取服务 -->
- **ScrapingDog API**: https://www.example-scraping-service.com/
  <!-- 官方地址: https://scrapingdog.com/ -->

## 故障排除

如果遇到API密钥相关错误：
1. 检查 `.env` 文件是否正确配置
2. 检查 `config/api_keys.json` 文件是否存在且格式正确
3. 确认API密钥有效且有足够的配额
4. 检查网络连接和防火墙设置