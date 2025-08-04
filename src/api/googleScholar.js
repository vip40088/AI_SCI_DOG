import axios from 'axios';
import { API_ENDPOINTS } from '../config/apiConfig';

// 后端代理接口，现在所有Google Scholar请求都通过后端处理
// 这样可以统一管理API密钥，无需在前端暴露密钥
const BACKEND_PROXY_URL = API_ENDPOINTS.GOOGLE_SCHOLAR_SEARCH;

// 创建 axios 实例
const createApiInstance = () => {
  return axios.create({
    timeout: 30000, // 30秒超时
    headers: {
      'Content-Type': 'application/json',
    }
  });
};

/**
 * 搜索学术论文
 * @param {string} query - 搜索关键词
 * @param {number} page - 页码，从0开始
 * @param {number} results - 每页结果数量
 * @param {Object} filters - 筛选条件
 * @returns {Promise<Object>} - 搜索结果
 */
export const searchPapers = async (query, page = 0, results = 10, filters = {}) => {
  try {
    const api = createApiInstance();
    
    const params = {
      query,
      page,
      results,
      language: 'en'
    };

    // 添加筛选条件
    if (filters.as_ylo) params.as_ylo = filters.as_ylo;
    if (filters.as_yhi) params.as_yhi = filters.as_yhi;
    if (filters.language) params.language = filters.language;
    if (filters.as_sdt) params.as_sdt = filters.as_sdt;
    if (filters.safe) params.safe = filters.safe;

    console.log('Google Scholar 搜索参数:', params);

    const response = await api.get(API_ENDPOINTS.GOOGLE_SCHOLAR_SEARCH + '/search', { params });
    
    console.log('Google Scholar 搜索成功:', {
      query,
      page,
      resultsCount: response.data.scholar_results?.length || 0
    });

    return {
      papers: response.data.scholar_results || [],
      searchInfo: response.data.search_information || {},
      pagination: response.data.pagination || {},
      serpapi_pagination: response.data.serpapi_pagination || {},
      total: response.data.search_information?.total_results || null
    };

  } catch (error) {
    console.error('Google Scholar 搜索失败:', error.message);
    
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      
      if (status === 429) {
        throw new Error('API请求频率过高，请稍后再试');
      } else if (status === 403) {
        throw new Error('API访问被拒绝，请检查密钥配置');
      } else if (status === 500 && data?.error?.includes('密钥')) {
        throw new Error('API密钥配置错误，请在管理后台检查设置');
      } else {
        throw new Error(`搜索失败: ${data?.error || error.message}`);
      }
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('请求超时，请检查网络连接');
    } else {
      throw new Error(`网络错误: ${error.message}`);
    }
  }
};

/**
 * 获取论文引用信息
 * @param {string} paperId - 论文ID或标题
 * @returns {Promise<Object>} - 引用信息
 */
export const getCitationInfo = async (paperId) => {
  try {
    const api = createApiInstance();
    
    const params = {
      query: paperId,
      language: 'en'
    };

    console.log('获取Google Scholar引用信息:', paperId);

    const response = await api.get(API_ENDPOINTS.GOOGLE_SCHOLAR_CITE, { params });
    
    console.log('Google Scholar引用信息获取成功');

    return {
      citationInfo: response.data.citations || [],
      searchInfo: response.data.search_information || {}
    };

  } catch (error) {
    console.error('获取引用信息失败:', error.message);
    throw new Error(`获取引用信息失败: ${error.message}`);
  }
};

/**
 * 获取相关论文
 * @param {string} clusterId - 集群ID
 * @param {number} limit - 结果限制
 * @returns {Promise<Object>} - 相关论文
 */
export const getRelatedPapers = async (clusterId, limit = 10) => {
  try {
    const api = createApiInstance();
    
    const params = {
      cluster: clusterId,
      results: limit,
      language: 'en'
    };

    console.log('获取Google Scholar相关论文:', clusterId);

    const response = await api.get(API_ENDPOINTS.GOOGLE_SCHOLAR_RELATED, { params });
    
    console.log('Google Scholar相关论文获取成功');

    return {
      papers: response.data.scholar_results || [],
      searchInfo: response.data.search_information || {}
    };

  } catch (error) {
    console.error('获取相关论文失败:', error.message);
    throw new Error(`获取相关论文失败: ${error.message}`);
  }
};

/**
 * 批量搜索论文
 * @param {Array} queries - 查询数组
 * @param {Object} options - 搜索选项
 * @returns {Promise<Array>} - 搜索结果数组
 */
export const batchSearchPapers = async (queries, options = {}) => {
  const {
    page = 0,
    results = 10,
    filters = {},
    maxConcurrent = 2 // 限制并发数量以避免速率限制
  } = options;
  
  // 分批处理查询以控制并发
  const searchResults = [];
  for (let i = 0; i < queries.length; i += maxConcurrent) {
    const batch = queries.slice(i, i + maxConcurrent);
    
    const batchPromises = batch.map(query => 
      searchPapers(query, page, results, filters)
        .catch(error => {
          console.error(`批量搜索失败 - 查询: ${query}:`, error.message);
          return { papers: [], error: error.message };
        })
    );
    
    const batchResults = await Promise.all(batchPromises);
    searchResults.push(...batchResults);
    
    // 在批次之间添加延迟以避免速率限制
    if (i + maxConcurrent < queries.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  return searchResults;
};

/**
 * 高级搜索
 * @param {Object} searchParams - 高级搜索参数
 * @returns {Promise<Object>} - 搜索结果
 */
export const advancedSearch = async (searchParams) => {
  const {
    query = '',
    exactPhrase = '',
    anyWords = '',
    excludeWords = '',
    author = '',
    publication = '',
    yearLow = '',
    yearHigh = '',
    page = 0,
    results = 10
  } = searchParams;
  
  // 构建高级查询字符串
  let advancedQuery = query;
  
  if (exactPhrase) {
    advancedQuery += ` "${exactPhrase}"`;
  }
  
  if (anyWords) {
    const words = anyWords.split(' ').filter(word => word.trim());
    if (words.length > 0) {
      advancedQuery += ` (${words.join(' OR ')})`;
    }
  }
  
  if (excludeWords) {
    const words = excludeWords.split(' ').filter(word => word.trim());
    words.forEach(word => {
      advancedQuery += ` -${word}`;
    });
  }
  
  if (author) {
    advancedQuery += ` author:"${author}"`;
  }
  
  const filters = {};
  if (yearLow) filters.as_ylo = yearLow;
  if (yearHigh) filters.as_yhi = yearHigh;
  if (publication) {
    // 在查询中添加发表地点限制
    advancedQuery += ` source:"${publication}"`;
  }
  
  return searchPapers(advancedQuery.trim(), page, results, filters);
};

// 导出默认配置
export const config = {
  maxRetries: 3,
  retryDelay: 1000,
  timeout: 30000,
  rateLimit: {
    requestsPerMinute: 30,
    burstLimit: 10
  }
}; 