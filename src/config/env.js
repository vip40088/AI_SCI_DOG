/**
 * 环境配置管理
 * 统一管理所有环境相关的配置
 */

// 获取环境变量并提供默认值
export const ENV_CONFIG = {
  // 基础环境信息
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // API配置
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '',
  USE_PROXY: process.env.REACT_APP_USE_PROXY === 'true',
  
  // 调试配置
  DEBUG: process.env.REACT_APP_DEBUG === 'true',
  
  // 默认后端地址（开发环境）
  DEFAULT_BACKEND_URL: 'http://localhost:3001'
};

// 环境判断工具
export const isProduction = () => ENV_CONFIG.NODE_ENV === 'production';
export const isDevelopment = () => ENV_CONFIG.NODE_ENV === 'development';

// API基础URL决策逻辑
export const getApiBaseUrl = () => {
  // 生产环境强制使用代理
  if (isProduction()) {
    return '';  // 相对路径，通过代理
  }
  
  // 开发环境根据配置决定
  if (ENV_CONFIG.USE_PROXY || !ENV_CONFIG.API_BASE_URL) {
    return '';  // 使用代理
  }
  
  return ENV_CONFIG.API_BASE_URL;  // 直连后端
};

// 日志输出（仅开发环境）
if (isDevelopment() && ENV_CONFIG.DEBUG) {
  console.log('🔧 环境配置:', ENV_CONFIG);
  console.log('📡 API基础URL:', getApiBaseUrl() || '代理模式');
}

export default ENV_CONFIG;