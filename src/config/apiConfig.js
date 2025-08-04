/**
 * API配置管理
 * 根据环境变量动态决定使用直连还是代理模式
 */

import { getApiBaseUrl, isDevelopment } from './env';

/**
 * 构建API端点URL
 * @param {string} endpoint - API端点路径，如 '/api/ai/chat'
 * @returns {string} - 完整的API URL
 */
const buildApiUrl = (endpoint) => {
  // 确保endpoint以/开头
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const baseUrl = getApiBaseUrl();
  
  // 如果没有基础URL，使用相对路径（代理模式）
  if (!baseUrl) {
    return normalizedEndpoint;
  }
  
  // 否则返回完整URL（直连模式）
  return `${baseUrl}${normalizedEndpoint}`;
};

// API端点配置
export const API_ENDPOINTS = {
  // AI服务相关
  AI_CHAT: buildApiUrl('/api/ai/chat'),
  
  // 搜索服务相关
  PRIMARY_SEARCH: buildApiUrl('/api/primary/search'),
  GOOGLE_SCHOLAR_SEARCH: buildApiUrl('/api/google-scholar/search'),
  GOOGLE_SCHOLAR_CITE: buildApiUrl('/api/google-scholar/cite'),
  GOOGLE_SCHOLAR_RELATED: buildApiUrl('/api/google-scholar/related'),
  
  // 日志服务相关
  LOGS: buildApiUrl('/api/logs'),
  LOGS_BATCH: buildApiUrl('/api/logs/batch'),
  LOGS_STATUS: buildApiUrl('/api/logs/status'),
  
  // 管理员接口
  ADMIN_KEYS: buildApiUrl('/api/admin/keys'),
  ADMIN_KEYS_EDIT: buildApiUrl('/api/admin/keys/edit'),
  ADMIN_KEYS_TEST: buildApiUrl('/api/admin/keys/test'),
  ADMIN_SETTINGS: buildApiUrl('/api/admin/settings'),
  ADMIN_CLEANUP_LOGS: buildApiUrl('/api/admin/cleanup-logs'),
};

// 导出配置信息
export const API_CONFIG = {
  BASE_URL: getApiBaseUrl(),
  ENDPOINTS: API_ENDPOINTS
};

// 调试信息
if (isDevelopment() && process.env.REACT_APP_DEBUG === 'true') {
  console.log('🔧 API配置信息:', {
    NODE_ENV: process.env.NODE_ENV,
    baseUrl: getApiBaseUrl() || '代理模式',
    '示例AI端点': API_ENDPOINTS.AI_CHAT,
    '示例搜索端点': API_ENDPOINTS.PRIMARY_SEARCH
  });
}

export default API_CONFIG;