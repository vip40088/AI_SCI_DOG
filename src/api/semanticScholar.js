import axios from 'axios';

// Semantic Scholar API配置 - 学术论文数据库API
// 可对接: Semantic Scholar官方API、其他学术数据库API、自建论文数据服务等
// 官方地址: https://api.semanticscholar.org/graph/v1
// 示例: https://api.example-academic-db.com/v1
const BASE_URL = 'https://api.example-academic-db.com/v1';

// 创建 axios 实例 - 支持有/无 API key 的请求
const createApiInstance = (withApiKey = true, apiKey = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (withApiKey && apiKey) {
    headers['x-api-key'] = apiKey;
  }
  
  return axios.create({
    baseURL: BASE_URL,
    headers,
    timeout: 15000, // 减少到15秒超时
  });
};

// 从后端获取API密钥的函数  
const getApiKey = async () => {
  // 简化逻辑：Semantic Scholar公开API不需要密钥也能使用
  // 如果需要更高的速率限制，可以在后端管理密钥
  try {
    console.log('尝试获取Semantic Scholar API密钥...');
    return null; // 暂时使用公开API，无需密钥
  } catch (error) {
    console.warn('获取Semantic Scholar密钥失败，使用公开API模式:', error.message);
    return null;
  }
};

/**
 * 搜索论文
 * @param {string} query - 搜索查询
 * @param {number} limit - 返回结果数量
 * @param {number} offset - 偏移量
 * @param {string} fields - 返回字段
 * @param {Object} filters - 筛选条件
 * @returns {Promise<Object>} - 搜索结果
 */
export const searchPapers = async (query, limit = 10, offset = 0, fields = 'paperId,title,abstract,authors,year,venue,citationCount,referenceCount,influentialCitationCount,fieldsOfStudy,isOpenAccess,openAccessPdf,tldr,journal', filters = {}) => {
  let retryCount = 0;
  const maxRetries = 2;
  
  const performSearch = async (useApiKey = true) => {
    try {
      const apiKey = await getApiKey();
      const api = createApiInstance(useApiKey, apiKey);
      
      // 构建查询参数
      const params = {
        query,
        limit,
        offset,
        fields
      };
      
      // 添加筛选条件
      if (filters.year) params.year = filters.year;
      if (filters.minCitationCount) params.minCitationCount = filters.minCitationCount;
      if (filters.fieldsOfStudy) params.fieldsOfStudy = filters.fieldsOfStudy;
      if (filters.venue) params.venue = filters.venue;
      if (filters.openAccessPdf !== undefined) params.openAccessPdf = filters.openAccessPdf;
      
      console.log('Semantic Scholar 搜索参数:', params);
      
      const response = await api.get('/paper/search', { params });
      
      console.log('Semantic Scholar 搜索成功:', {
        query,
        total: response.data.total,
        returned: response.data.data?.length || 0,
        hasApiKey: !!apiKey
      });
      
      return {
        papers: response.data.data || [],
        total: response.data.total || 0,
        next: response.data.next || null,
        hasMore: !!response.data.next
      };
    } catch (error) {
      console.error(`Semantic Scholar 搜索失败 (${useApiKey ? '有密钥' : '无密钥'}模式):`, error.message);
      
      // 处理不同类型的错误
      if (error.response?.status === 429) {
        // 速率限制错误
        if (useApiKey && retryCount < maxRetries) {
          console.log(`遇到速率限制，尝试不使用API密钥重试... (${retryCount + 1}/${maxRetries + 1})`);
          retryCount++;
          return performSearch(false); // 尝试不使用API密钥
        } else {
          throw new Error('Semantic Scholar API请求频率过高，请稍后再试或使用其他数据源');
        }
      } else if (error.response?.status === 403) {
        // 权限错误
        if (useApiKey && retryCount < maxRetries) {
          console.log(`API密钥权限错误，尝试不使用密钥重试... (${retryCount + 1}/${maxRetries + 1})`);
          retryCount++;
          return performSearch(false);
        } else {
          throw new Error('Semantic Scholar API访问被拒绝，请检查密钥配置或使用其他数据源');
        }
      } else if (error.code === 'ECONNABORTED') {
        // 超时错误
        throw new Error('Semantic Scholar API请求超时，请检查网络连接或使用其他数据源');
      } else if (error.code === 'ENOTFOUND' || error.message.includes('Network Error')) {
        // 网络错误
        throw new Error('无法连接到Semantic Scholar，请检查网络连接或使用其他数据源');
      } else {
        // 其他错误
        throw new Error(`Semantic Scholar搜索失败: ${error.response?.data?.message || error.message}`);
      }
    }
  };
  
  return performSearch();
};

/**
 * 根据论文ID获取详细信息
 * @param {string} paperId - 论文ID
 * @param {string} fields - 返回字段
 * @returns {Promise<Object>} - 论文详细信息
 */
export const getPaperDetails = async (paperId, fields = 'paperId,title,abstract,authors,year,venue,citationCount,referenceCount,influentialCitationCount,fieldsOfStudy,isOpenAccess,openAccessPdf,tldr,citations,references') => {
  try {
    const apiKey = await getApiKey();
    const api = createApiInstance(true, apiKey);
    
    const response = await api.get(`/paper/${paperId}`, {
      params: { fields }
    });
    
    console.log('Semantic Scholar 论文详情获取成功:', {
      paperId,
      title: response.data.title
    });
    
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('获取论文详情失败:', error.response.status, error.response.statusText);
      
      if (error.response.status === 404) {
        throw new Error('论文不存在');
      } else if (error.response.status === 429) {
        throw new Error('API请求频率过高，请稍后再试');
      }
      
      throw new Error(`获取论文详情失败: ${error.response.status}`);
    } else {
      console.error('获取论文详情网络错误:', error.message);
      throw new Error(`网络错误: ${error.message}`);
    }
  }
};

/**
 * 获取论文的引用信息
 * @param {string} paperId - 论文ID
 * @param {number} limit - 返回结果数量
 * @param {number} offset - 偏移量
 * @returns {Promise<Object>} - 引用信息
 */
export const getPaperCitations = async (paperId, limit = 10, offset = 0) => {
  try {
    const apiKey = await getApiKey();
    const api = createApiInstance(true, apiKey);
    
    const response = await api.get(`/paper/${paperId}/citations`, {
      params: {
        limit,
        offset,
        fields: 'paperId,title,authors,year,venue,citationCount'
      }
    });
    
    return {
      citations: response.data.data || [],
      total: response.data.total || 0,
      hasMore: !!response.data.next
    };
  } catch (error) {
    console.error('获取论文引用失败:', error.message);
    throw new Error(`获取引用信息失败: ${error.message}`);
  }
};

/**
 * 获取论文的参考文献
 * @param {string} paperId - 论文ID
 * @param {number} limit - 返回结果数量
 * @param {number} offset - 偏移量
 * @returns {Promise<Object>} - 参考文献信息
 */
export const getPaperReferences = async (paperId, limit = 10, offset = 0) => {
  try {
    const apiKey = await getApiKey();
    const api = createApiInstance(true, apiKey);
    
    const response = await api.get(`/paper/${paperId}/references`, {
      params: {
        limit,
        offset,
        fields: 'paperId,title,authors,year,venue,citationCount'
      }
    });
    
    return {
      references: response.data.data || [],
      total: response.data.total || 0,
      hasMore: !!response.data.next
    };
  } catch (error) {
    console.error('获取论文参考文献失败:', error.message);
    throw new Error(`获取参考文献失败: ${error.message}`);
  }
};

/**
 * 批量搜索论文（用于处理大量查询）
 * @param {Array} queries - 查询数组
 * @param {Object} options - 搜索选项
 * @returns {Promise<Array>} - 搜索结果数组
 */
export const batchSearchPapers = async (queries, options = {}) => {
  const {
    limit = 10,
    offset = 0,
    fields = 'paperId,title,abstract,authors,year,venue,citationCount,fieldsOfStudy,tldr',
    maxConcurrent = 3 // 限制并发数量以避免速率限制
  } = options;
  
  // 分批处理查询以控制并发
  const results = [];
  for (let i = 0; i < queries.length; i += maxConcurrent) {
    const batch = queries.slice(i, i + maxConcurrent);
    
    const batchPromises = batch.map(query => 
      searchPapers(query, limit, offset, fields)
        .catch(error => {
          console.error(`批量搜索失败 - 查询: ${query}:`, error.message);
          return { papers: [], total: 0, error: error.message };
        })
    );
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    // 在批次之间添加延迟以避免速率限制
    if (i + maxConcurrent < queries.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
};