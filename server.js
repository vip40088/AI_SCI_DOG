const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

// 加载环境变量
require('dotenv').config();

const app = express();

// 解析命令行参数
const args = process.argv.slice(2);
let PORT = process.env.SERVER_PORT || 3001; // 明确使用SERVER_PORT或默认3001

// 检查命令行参数中的端口
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--port' && args[i + 1]) {
    PORT = parseInt(args[i + 1]);
    break;
  }
}

// 启用CORS
app.use(cors());

// Body parser for JSON
app.use(express.json({ limit: '10mb' }));

// 密钥存储文件路径
const keysFilePath = path.join(process.cwd(), 'config', 'api_keys.json');

// 系统设置文件路径
const settingsFilePath = path.join(process.cwd(), 'config', 'system_settings.json');

// 确保配置目录存在
const configDir = path.join(process.cwd(), 'config');
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// 初始化密钥文件
if (!fs.existsSync(keysFilePath)) {
  const defaultKeys = {
    aiApiKey: process.env.AI_API_KEY || '',
    semanticScholarKey: process.env.REACT_APP_SEMANTIC_KEY || '',
    scrapingDogKey: '67b52cb3c1d7e6ede243aa88' // 默认值
  };
  fs.writeFileSync(keysFilePath, JSON.stringify(defaultKeys, null, 2));
}

// 初始化系统设置文件
if (!fs.existsSync(settingsFilePath)) {
  const defaultSettings = {
    // 数据管理设置
    logRetentionDays: 30,
    maxLogSize: 5000,
    autoCleanup: true,
    // 系统信息
    lastUpdated: new Date().toISOString(),
    version: '2.0'
  };
  fs.writeFileSync(settingsFilePath, JSON.stringify(defaultSettings, null, 2));
}

// 密钥管理函数
const loadApiKeys = () => {
  try {
    if (fs.existsSync(keysFilePath)) {
      const data = fs.readFileSync(keysFilePath, 'utf8');
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    console.error('加载密钥配置失败:', error);
    return {};
  }
};

const saveApiKeys = (keys) => {
  try {
    fs.writeFileSync(keysFilePath, JSON.stringify(keys, null, 2));
    return true;
  } catch (error) {
    console.error('保存密钥配置失败:', error);
    return false;
  }
};

// 动态获取当前密钥
const getCurrentApiKeys = () => {
  return loadApiKeys();
};

// 系统设置管理函数
const loadSystemSettings = () => {
  try {
    if (fs.existsSync(settingsFilePath)) {
      const data = fs.readFileSync(settingsFilePath, 'utf8');
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    console.error('加载系统设置失败:', error);
    return {};
  }
};

const saveSystemSettings = (settings) => {
  try {
    const settingsToSave = {
      ...settings,
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync(settingsFilePath, JSON.stringify(settingsToSave, null, 2));
    return true;
  } catch (error) {
    console.error('保存系统设置失败:', error);
    return false;
  }
};

// 动态获取当前系统设置
const getCurrentSystemSettings = () => {
  return loadSystemSettings();
};

// AI API 配置 - 动态从配置文件读取
let cachedKeys = loadApiKeys();
// AI API 配置 - 支持多种AI服务提供商
// 可对接: OpenAI、DeepSeek、Claude、国产大模型等兼容OpenAI格式的API
// 示例: https://api.openai.com/v1/chat/completions (OpenAI官方)
// 示例: https://api.deepseek.com/v1/chat/completions (DeepSeek)
// 示例: https://api.example-ai-provider.com/v1/chat/completions (其他AI服务商)
const AI_API_BASE_URL = 'https://api.example-ai-provider.com/v1/chat/completions';

// 管理员认证中间件（简单实现）
const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: '需要管理员认证' });
  }
  
  // 这里可以实现更复杂的token验证逻辑
  // 目前简单验证token存在即可
  const token = authHeader.substring(7);
  if (token && token.length > 0) {
    next();
  } else {
    res.status(401).json({ error: '无效的认证token' });
  }
};

// 密钥管理API接口

// 获取当前密钥配置（脱敏显示）- 用于列表展示
app.get('/api/admin/keys', adminAuth, (req, res) => {
  try {
    const keys = getCurrentApiKeys();
    // 只返回密钥是否存在的信息，不返回实际值
    const maskedKeys = {};
    Object.keys(keys).forEach(key => {
      if (keys[key] && keys[key].length > 0) {
        // 显示前4位和后4位，中间用*代替
        const keyValue = keys[key];
        if (keyValue.length > 8) {
          maskedKeys[key] = keyValue.substring(0, 4) + '*'.repeat(keyValue.length - 8) + keyValue.substring(keyValue.length - 4);
        } else {
          maskedKeys[key] = '*'.repeat(keyValue.length);
        }
      } else {
        maskedKeys[key] = '';
      }
    });
    
    res.json(maskedKeys);
  } catch (error) {
    res.status(500).json({ error: '获取密钥配置失败' });
  }
});

// 获取原始密钥配置（用于编辑）
app.get('/api/admin/keys/edit', adminAuth, (req, res) => {
  try {
    const keys = getCurrentApiKeys();
    // 返回实际密钥值用于编辑（仅在编辑时使用）
    res.json(keys);
  } catch (error) {
    res.status(500).json({ error: '获取密钥配置失败' });
  }
});

// 更新密钥配置
app.post('/api/admin/keys', adminAuth, (req, res) => {
  try {
    const newKeys = req.body;
    
    // 验证必要的字段
    const requiredKeys = ['aiApiKey', 'semanticScholarKey', 'scrapingDogKey'];
    for (const key of requiredKeys) {
      if (!(key in newKeys)) {
        return res.status(400).json({ error: `缺少必要的密钥字段: ${key}` });
      }
    }
    
    // 检查是否包含脱敏密钥（防止保存脱敏值）
    const currentKeys = getCurrentApiKeys();
    Object.keys(newKeys).forEach(key => {
      const newValue = newKeys[key];
      const currentValue = currentKeys[key];
      
      // 如果新值包含星号且长度匹配脱敏格式，使用原值
      if (newValue && newValue.includes('*') && currentValue) {
        const expectedMasked = currentValue.length > 8 
          ? currentValue.substring(0, 4) + '*'.repeat(currentValue.length - 8) + currentValue.substring(currentValue.length - 4)
          : '*'.repeat(currentValue.length);
        
        if (newValue === expectedMasked) {
          console.log(`检测到脱敏密钥 ${key}，使用原始值`);
          newKeys[key] = currentValue; // 保持原值不变
        }
      }
    });
    
    // 保存密钥
    if (saveApiKeys(newKeys)) {
      // 更新缓存
      cachedKeys = newKeys;
      
      console.log('密钥配置已更新');
      res.json({ message: '密钥配置保存成功' });
    } else {
      res.status(500).json({ error: '保存密钥配置失败' });
    }
  } catch (error) {
    console.error('更新密钥配置失败:', error);
    res.status(500).json({ error: '更新密钥配置失败' });
  }
});

// 测试密钥有效性
app.post('/api/admin/keys/test', adminAuth, async (req, res) => {
  try {
    const { keyType, apiKey } = req.body;
    
    if (!keyType || !apiKey) {
      return res.status(400).json({ 
        success: false, 
        message: '缺少必要参数' 
      });
    }
    
    let testResult = { success: false, message: '未知的密钥类型' };
    
    switch (keyType) {
      case 'aiApiKey':
        try {
          const response = await axios.post(AI_API_BASE_URL, {
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: 'Hello, this is a test.' }],
            max_tokens: 10
          }, {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            },
            timeout: 10000
          });
          
          testResult = { 
            success: true, 
            message: 'AI API密钥验证成功' 
          };
        } catch (error) {
          testResult = { 
            success: false, 
            message: `AI API密钥验证失败: ${error.response?.data?.error?.message || error.message}` 
          };
        }
        break;
        
      case 'semanticScholarKey':
        try {
          // Semantic Scholar API测试 - 学术论文数据库API
          // 可对接: Semantic Scholar官方API、其他学术数据库API
          // 官方地址: https://api.semanticscholar.org/graph/v1/paper/search
          const response = await axios.get('https://api.example-academic-db.com/v1/paper/search', {
            params: { query: 'test', limit: 1 },
            headers: {
              'x-api-key': apiKey
            },
            timeout: 10000
          });
          
          testResult = { 
            success: true, 
            message: 'Semantic Scholar API密钥验证成功' 
          };
        } catch (error) {
          if (error.response?.status === 429) {
            testResult = { 
              success: true, 
              message: 'Semantic Scholar API密钥有效（达到速率限制）' 
            };
          } else {
            testResult = { 
              success: false, 
              message: `Semantic Scholar API密钥验证失败: ${error.message}` 
            };
          }
        }
        break;
        
      case 'scrapingDogKey':
        try {
          // ScrapingDog API测试 - Google Scholar爬虫服务
          // 可对接: ScrapingDog、SerpAPI、其他Google Scholar代理服务
          // 官方地址: https://api.scrapingdog.com/google_scholar
          const response = await axios.get('https://api.example-scraping-service.com/google_scholar', {
            params: { 
              api_key: apiKey,
              query: 'test',
              results: 1
            },
            timeout: 15000
          });
          
          testResult = { 
            success: true, 
            message: 'ScrapingDog API密钥验证成功' 
          };
        } catch (error) {
          testResult = { 
            success: false, 
            message: `ScrapingDog API密钥验证失败: ${error.message}` 
          };
        }
        break;
        
      default:
        testResult = { 
          success: false, 
          message: '不支持的密钥类型' 
        };
    }
    
    res.json(testResult);
  } catch (error) {
    console.error('测试密钥失败:', error);
    res.status(500).json({ 
      success: false, 
      message: '密钥测试过程中发生错误' 
    });
  }
});

// 系统设置管理API接口

// 获取当前系统设置
app.get('/api/admin/settings', adminAuth, (req, res) => {
  try {
    const settings = getCurrentSystemSettings();
    res.json(settings);
  } catch (error) {
    console.error('获取系统设置失败:', error);
    res.status(500).json({ error: '获取系统设置失败' });
  }
});

// 更新系统设置
app.post('/api/admin/settings', adminAuth, (req, res) => {
  try {
    const newSettings = req.body;
    
    // 验证必要的字段
    const requiredFields = ['logRetentionDays', 'maxLogSize', 'autoCleanup'];
    for (const field of requiredFields) {
      if (!(field in newSettings)) {
        return res.status(400).json({ error: `缺少必要的设置字段: ${field}` });
      }
    }
    
    // 验证数据类型和范围
    if (typeof newSettings.logRetentionDays !== 'number' || newSettings.logRetentionDays < 1 || newSettings.logRetentionDays > 365) {
      return res.status(400).json({ error: '日志保留天数必须在1-365天之间' });
    }
    
    if (typeof newSettings.maxLogSize !== 'number' || newSettings.maxLogSize < 1000 || newSettings.maxLogSize > 50000) {
      return res.status(400).json({ error: '最大日志数量必须在1000-50000之间' });
    }
    
    if (typeof newSettings.autoCleanup !== 'boolean') {
      return res.status(400).json({ error: '自动清理设置必须是布尔值' });
    }
    
    // 保存设置
    if (saveSystemSettings(newSettings)) {
      console.log('系统设置已更新:', newSettings);
      res.json({ message: '系统设置保存成功', settings: newSettings });
    } else {
      res.status(500).json({ error: '保存系统设置失败' });
    }
  } catch (error) {
    console.error('更新系统设置失败:', error);
    res.status(500).json({ error: '更新系统设置失败' });
  }
});

// 手动触发日志清理
app.post('/api/admin/cleanup-logs', adminAuth, (req, res) => {
  try {
    const currentSettings = getCurrentSystemSettings();
    const maxLogSize = currentSettings.maxLogSize || 5000;
    const cleanupThreshold = Math.floor(maxLogSize * 0.8);
    
    // 读取现有日志
    let logs = [];
    if (fs.existsSync(logFilePath)) {
      const data = fs.readFileSync(logFilePath, 'utf8');
      logs = JSON.parse(data);
    }
    
    const originalCount = logs.length;
    
    if (logs.length > cleanupThreshold) {
      logs = logs.slice(-cleanupThreshold);
      
      // 保存清理后的日志
      fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
      
      const cleanedCount = originalCount - logs.length;
      console.log(`🧹 手动日志清理完成：删除 ${cleanedCount} 条，保留 ${logs.length} 条`);
      
      res.json({ 
        message: '日志清理完成', 
        originalCount, 
        currentCount: logs.length, 
        cleanedCount,
        maxLogSize,
        cleanupThreshold
      });
    } else {
      res.json({ 
        message: '无需清理，日志数量在正常范围内', 
        currentCount: logs.length,
        maxLogSize,
        cleanupThreshold
      });
    }
  } catch (error) {
    console.error('手动日志清理失败:', error);
    res.status(500).json({ error: '日志清理失败' });
  }
});

// Primary Scraping API 配置
// Primary Scraping API 配置 - 学术搜索爬虫服务
// 可对接: 自建爬虫服务、第三方学术搜索API、Google Scholar代理服务等
// 示例: http://your-scraping-server.com:8000/api/v1
// 示例: https://api.example-academic-search.com/v1
const PRIMARY_API_BASE_URL = 'http://your-scraping-server.com:8000/api/v1';

// 模型名称映射：前端显示名称 -> 后端实际API名称
const MODEL_NAME_MAPPING = {
  'gpt-4o-mini': 'gpt-4o-mini-2024-07-18',
  'gpt-4o-2024': 'gpt-4o-mini-2024-07-18',
  'deepseek-v3': 'deepseek-v3',
  'grok-3-deepsearch': 'grok-3-deepsearch'  // 使用官方正确的模型名称
};

// 获取实际的API模型名称
const getActualModelName = (frontendModelName) => {
  return MODEL_NAME_MAPPING[frontendModelName] || frontendModelName;
};

// 日志文件路径
const logsDir = path.join(process.cwd(), 'logs');
const logFilePath = path.join(logsDir, 'api_logs.json');

// 确保日志目录存在
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// 确保日志文件存在
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, JSON.stringify([]));
}

// ==================== Primary Scraping 双请求实现 ====================

// 单次 API 请求的辅助函数
const makeApiRequest = async (params, maxRetries = 2) => {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${PRIMARY_API_BASE_URL}/search`,
        params: params,
        timeout: 30000,
        headers: {
          'User-Agent': 'Scholar-Search-Proxy/1.0'
        }
      });
      
      console.log('Primary Scraping API 响应成功:', {
        page: params.page,
        resultsCount: response.data.scholar_results?.length,
        attempt: attempt + 1
      });

      return response.data;
    } catch (error) {
      lastError = error;
      console.error(`Primary Scraping 搜索失败 (尝试 ${attempt + 1}/${maxRetries + 1}):`, error.message);
      
      // 如果是网络错误且还有重试机会，等待后重试
      if (attempt < maxRetries && (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND' || error.message.includes('Network Error'))) {
        const waitTime = Math.pow(2, attempt) * 1000; // 指数退避
        console.log(`等待 ${waitTime}ms 后重试...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      break;
    }
  }
  
  throw lastError;
};

// Primary Scraping 搜索接口 - 支持双请求逻辑
app.get('/api/primary/search', async (req, res) => {
  try {
    console.log('Primary Scraping 搜索开始:', req.query);
    
    const { query, page = 0, results_per_page = 10, sort_by = 'relevance', ...filters } = req.query;
    const pageNum = parseInt(page);
    const resultsPerPage = parseInt(results_per_page);
    
    // 检查是否需要使用双请求逻辑（当请求20篇时）
    const useDoubleRequest = resultsPerPage === 20;
    
    if (useDoubleRequest) {
      console.log('使用双请求逻辑获取20篇文章');
      
      // 计算实际的API页码：用户第1页 = API第0页+第1页，用户第2页 = API第2页+第3页
      const firstApiPage = pageNum * 2;
      const secondApiPage = firstApiPage + 1;
      
      // 准备两次请求的参数
      const baseParams = {
        query,
        results_per_page: 10, // 固定每次请求10篇
        sort_by,
        ...filters
      };

      const firstParams = { ...baseParams, page: firstApiPage };
      const secondParams = { ...baseParams, page: secondApiPage };

      console.log('双请求参数:', { firstParams, secondParams });

      // 发起第一次请求
      const firstResponse = await makeApiRequest(firstParams);
      
      // 立即发起第二次请求（懒加载）
      const secondResponse = await makeApiRequest(secondParams);
      
      // 合并结果
      const firstPapers = firstResponse.scholar_results || [];
      const secondPapers = secondResponse.scholar_results || [];
      const allPapers = [...firstPapers, ...secondPapers];
      
      console.log('双请求结果合并:', {
        firstPageResults: firstPapers.length,
        secondPageResults: secondPapers.length,
        totalResults: allPapers.length
      });

      // 计算总数和下一页
      let totalResults = firstResponse.total || null;
      let hasNextPage = false;
      
      if (totalResults !== null) {
        hasNextPage = (pageNum + 1) * 20 < totalResults;
      } else {
        // 基于分页信息判断
        const secondPaginationData = secondResponse.pagination;
        const secondPageNumbers = secondPaginationData?.page_no ? Object.keys(secondPaginationData.page_no).map(Number) : [];
        const maxSecondApiPage = secondPageNumbers.length > 0 ? Math.max(...secondPageNumbers) : secondApiPage;
        hasNextPage = secondApiPage < maxSecondApiPage;
      }

      // 返回合并后的结果
      const result = {
        ...firstResponse,
        scholar_results: allPapers,
        page: pageNum,
        results_per_page: 20,
        total: totalResults,
        next: hasNextPage ? pageNum + 1 : null,
        // 添加双请求标识
        isDoubleRequest: true,
        requestDetails: {
          firstRequest: { page: firstApiPage, results: firstPapers.length },
          secondRequest: { page: secondApiPage, results: secondPapers.length }
        }
      };
      
      console.log('双请求完成，返回结果');
      res.json(result);
      
    } else {
      // 原有的单请求逻辑
      const params = { query, page: pageNum, results_per_page: resultsPerPage, sort_by, ...filters };
      console.log('使用单请求逻辑:', params);
      
      const responseData = await makeApiRequest(params);
      
      const result = {
        ...responseData,
        isDoubleRequest: false
      };
      
      res.json(result);
    }
    
  } catch (error) {
    console.error('Primary Scraping 搜索失败:', error.message);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
      res.status(error.response.status).json({
        error: error.response.data?.error || error.message
      });
    } else {
      res.status(500).json({
        error: `Primary Scraping 搜索失败: ${error.message}`
      });
    }
  }
});

// AI API 代理接口 - 使用动态密钥
app.post('/api/ai/chat', async (req, res) => {
  try {
    // 动态获取最新的AI API密钥
    const currentKeys = getCurrentApiKeys();
    const AI_API_KEY = currentKeys.aiApiKey;

    if (!AI_API_KEY) {
      return res.status(500).json({
        error: 'AI API密钥未配置，请在管理后台设置密钥'
      });
    }

    console.log('AI API 请求开始:', {
      model: req.body.model,
      hasMessages: !!req.body.messages,
      messageCount: req.body.messages?.length,
      stream: req.body.stream
    });

    const response = await axios.post(AI_API_BASE_URL, req.body, {
      headers: {
        'Authorization': `Bearer ${AI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 60000, // 60秒超时
      responseType: req.body.stream ? 'stream' : 'json'
    });

    // 如果是流式响应，直接转发
    if (req.body.stream) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      
      response.data.pipe(res);
    } else {
      // 非流式响应
      res.json(response.data);
    }

  } catch (error) {
    console.error('AI API 代理失败:', error.message);
    if (error.response) {
      console.error('AI API 响应状态:', error.response.status);
      console.error('AI API 响应数据:', error.response.data);
      res.status(error.response.status).json({
        error: error.response.data?.error || error.message
      });
    } else {
      res.status(500).json({
        error: `AI API 请求失败: ${error.message}`
      });
    }
  }
});

// Google Scholar API 代理接口
app.get('/api/google-scholar/search', async (req, res) => {
  try {
    // 动态获取最新的ScrapingDog API密钥
    const currentKeys = getCurrentApiKeys();
    const SCRAPING_DOG_KEY = currentKeys.scrapingDogKey;

    if (!SCRAPING_DOG_KEY) {
      return res.status(500).json({
        error: 'ScrapingDog API密钥未配置，请在管理后台设置密钥'
      });
    }

    console.log('Google Scholar 搜索开始:', req.query);

    const params = {
      api_key: SCRAPING_DOG_KEY,
      ...req.query
    };

    const response = await axios.get('https://api.scrapingdog.com/google_scholar', {
      params,
      timeout: 15000, // 优化超时时间，提升响应速度
      headers: {
        'User-Agent': 'Scholar-Search-Proxy/1.0'
      }
    });

    console.log('Google Scholar 搜索成功:', {
      query: req.query.query,
      resultsCount: response.data.scholar_results?.length || 0
    });

    res.json(response.data);

  } catch (error) {
    console.error('Google Scholar 代理失败:', error.message);
    if (error.response) {
      console.error('Google Scholar 响应状态:', error.response.status);
      console.error('Google Scholar 响应数据:', error.response.data);
      res.status(error.response.status).json({
        error: error.response.data?.error || error.message
      });
    } else {
      res.status(500).json({
        error: `Google Scholar 请求失败: ${error.message}`
      });
    }
  }
});

// Google Scholar 引用信息代理接口
app.get('/api/google-scholar/cite', async (req, res) => {
  try {
    const currentKeys = getCurrentApiKeys();
    const SCRAPING_DOG_KEY = currentKeys.scrapingDogKey;

    if (!SCRAPING_DOG_KEY) {
      return res.status(500).json({
        error: 'ScrapingDog API密钥未配置，请在管理后台设置密钥'
      });
    }

    console.log('Google Scholar 引用信息请求:', req.query);

    const params = {
      api_key: SCRAPING_DOG_KEY,
      ...req.query
    };

    // Google Scholar引用信息API - 获取论文引用格式
    // 可对接: ScrapingDog、SerpAPI、自建引用解析服务等
    // 示例地址: https://api.example-scraping-service.com/google_scholar/cite
    const response = await axios.get('https://api.example-scraping-service.com/google_scholar/cite', {
      params,
      timeout: 30000,
      headers: {
        'User-Agent': 'Scholar-Search-Proxy/1.0'
      }
    });

    console.log('Google Scholar 引用信息获取成功');
    res.json(response.data);

  } catch (error) {
    console.error('Google Scholar 引用信息代理失败:', error.message);
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data?.error || error.message
      });
    } else {
      res.status(500).json({
        error: `获取引用信息失败: ${error.message}`
      });
    }
  }
});

// Google Scholar 相关论文代理接口
app.get('/api/google-scholar/related', async (req, res) => {
  try {
    const currentKeys = getCurrentApiKeys();
    const SCRAPING_DOG_KEY = currentKeys.scrapingDogKey;

    if (!SCRAPING_DOG_KEY) {
      return res.status(500).json({
        error: 'ScrapingDog API密钥未配置，请在管理后台设置密钥'
      });
    }

    console.log('Google Scholar 相关论文请求:', req.query);

    const params = {
      api_key: SCRAPING_DOG_KEY,
      ...req.query
    };

    // Google Scholar相关论文API - 获取相关学术论文推荐
    // 可对接: ScrapingDog、SerpAPI、自建相关论文推荐服务等
    // 示例地址: https://api.example-scraping-service.com/google_scholar
    const response = await axios.get('https://api.example-scraping-service.com/google_scholar', {
      params,
      timeout: 30000,
      headers: {
        'User-Agent': 'Scholar-Search-Proxy/1.0'
      }
    });

    console.log('Google Scholar 相关论文获取成功');
    res.json(response.data);

  } catch (error) {
    console.error('Google Scholar 相关论文代理失败:', error.message);
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data?.error || error.message
      });
    } else {
      res.status(500).json({
        error: `获取相关论文失败: ${error.message}`
      });
    }
  }
});

// 日志管理接口
app.get('/api/logs', async (req, res) => {
  try {
    if (fs.existsSync(logFilePath)) {
      const logs = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
      res.json(logs.slice(-1000)); // 返回最新1000条日志
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error('读取日志失败:', error);
    res.status(500).json({ error: '读取日志失败' });
  }
});

// 日志状态监控接口
app.get('/api/logs/status', (req, res) => {
  try {
    const logFileSize = fs.existsSync(logFilePath) ? fs.statSync(logFilePath).size : 0;
    const logCount = fs.existsSync(logFilePath) ? 
      JSON.parse(fs.readFileSync(logFilePath, 'utf8')).length : 0;
    
    res.json({
      logFileSize,
      logCount,
      queueSize: logWriteQueue.length,
      isProcessing: isWritingLogs,
      lastModified: fs.existsSync(logFilePath) ? 
        fs.statSync(logFilePath).mtime : null
    });
  } catch (error) {
    console.error('获取日志状态失败:', error);
    res.status(500).json({ error: '获取日志状态失败' });
  }
});

// 清空日志接口
app.delete('/api/logs', (req, res) => {
  try {
    fs.writeFileSync(logFilePath, JSON.stringify([]));
    // 同时清空队列
    logWriteQueue = [];
    res.json({ message: '日志清空成功' });
  } catch (error) {
    console.error('清空日志失败:', error);
    res.status(500).json({ error: '清空日志失败' });
  }
});

// 日志写入队列，避免并发写入冲突
let logWriteQueue = [];
let isWritingLogs = false;

// 队列处理函数
async function processLogQueue() {
  if (isWritingLogs || logWriteQueue.length === 0) return;
  
  isWritingLogs = true;
  const pendingLogs = [...logWriteQueue];
  logWriteQueue = [];
  
  try {
    // 读取现有日志
    let logs = [];
    try {
      if (fs.existsSync(logFilePath)) {
        const data = await fs.promises.readFile(logFilePath, 'utf8');
        logs = JSON.parse(data);
      }
    } catch (parseError) {
      console.warn('解析日志文件失败，重新初始化:', parseError.message);
      // 备份损坏的日志文件
      if (fs.existsSync(logFilePath)) {
        const backupPath = logFilePath + '.corrupted.' + Date.now();
        await fs.promises.copyFile(logFilePath, backupPath);
        console.log(`已备份损坏的日志文件到: ${backupPath}`);
      }
      logs = [];
    }
    
    // 添加所有待处理的日志
    logs.push(...pendingLogs);
    
    // 根据配置动态控制日志数量
    const currentSettings = getCurrentSystemSettings();
    const maxLogSize = currentSettings.maxLogSize || 5000;
    const cleanupThreshold = Math.floor(maxLogSize * 0.8); // 清理到80%
    
    if (logs.length > maxLogSize) {
      logs = logs.slice(-cleanupThreshold);
      console.log(`📝 日志自动清理：保留最新 ${logs.length} 条记录（配置限制：${maxLogSize}）`);
    }
    
    // 保存日志
    await fs.promises.writeFile(logFilePath, JSON.stringify(logs, null, 2));
    
  } catch (error) {
    console.error('处理日志队列失败:', error);
    // 如果写入失败，将日志重新加入队列
    logWriteQueue.unshift(...pendingLogs);
  } finally {
    isWritingLogs = false;
    
    // 如果还有待处理的日志，继续处理
    if (logWriteQueue.length > 0) {
      setTimeout(processLogQueue, 100);
    }
  }
}

// 批量添加日志接口（优化版本）
app.post('/api/logs/batch', async (req, res) => {
  try {
    const { logs: newLogs } = req.body;
    
    if (!Array.isArray(newLogs) || newLogs.length === 0) {
      return res.status(400).json({ error: '无效的日志数据' });
    }
    
    // 验证日志数量限制
    if (newLogs.length > 100) {
      return res.status(400).json({ error: '单次提交日志数量过多，最多100条' });
    }
    
    // 添加服务器时间戳并加入队列
    const timestampedLogs = newLogs.map(log => ({
      ...log,
      serverTimestamp: new Date().toISOString()
    }));
    
    logWriteQueue.push(...timestampedLogs);
    
    // 触发队列处理
    processLogQueue();
    
    res.json({ 
      message: '批量日志已加入处理队列',
      count: newLogs.length,
      queueSize: logWriteQueue.length
    });
  } catch (error) {
    console.error('批量添加日志失败:', error);
    res.status(500).json({ error: '批量添加日志失败' });
  }
});

// 添加日志接口（保留向后兼容）
app.post('/api/logs', (req, res) => {
  try {
    const newLog = req.body;
    
    // 读取现有日志
    let logs = [];
    if (fs.existsSync(logFilePath)) {
      logs = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
    }
    
    // 添加新日志
    logs.push({
      ...newLog,
      timestamp: new Date().toISOString()
    });
    
    // 根据配置动态控制日志数量
    const currentSettings = getCurrentSystemSettings();
    const maxLogSize = currentSettings.maxLogSize || 3000;
    
    if (logs.length > maxLogSize) {
      logs = logs.slice(-maxLogSize);
    }
    
    // 保存日志
    fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
    res.json({ message: '日志添加成功' });
  } catch (error) {
    console.error('添加日志失败:', error);
    res.status(500).json({ error: '添加日志失败' });
  }
});

// 服务静态文件
app.use(express.static(path.join(__dirname, 'build')));

// 处理根路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 处理所有其他路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 服务器运行在端口 ${PORT}`);
  console.log(`🌐 访问地址: http://localhost:${PORT}`);
  console.log('✅ 包含完整的API功能：');
  console.log('  - Primary Scraping 双请求功能');
  console.log('  - AI API 代理功能（动态密钥）');
  console.log('  - 密钥管理功能');
  console.log('  - 日志管理功能');
  
  // 检查密钥配置状态
  const currentKeys = getCurrentApiKeys();
  if (currentKeys.aiApiKey) {
    console.log('✅ AI API密钥已配置');
  } else {
    console.log('⚠️  AI API密钥未配置，请在管理后台设置密钥');
  }
  
  console.log('🔧 密钥配置文件:', keysFilePath);
});
