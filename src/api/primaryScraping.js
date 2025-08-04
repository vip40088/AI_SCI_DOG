import axios from 'axios';
import { API_ENDPOINTS } from '../config/apiConfig';

// Primary Scraping API 配置 - 根据环境动态配置
const BASE_URL = API_ENDPOINTS.PRIMARY_SEARCH;

// 创建 axios 实例
const createApiInstance = () => {
  return axios.create({
    timeout: 30000, // 30秒超时
    // 禁用代理，直接连接
    proxy: false,
    // 添加更详细的错误处理
    validateStatus: function (status) {
      return status < 500; // 只有5xx错误才被认为是错误
    }
  });
};

/**
 * 解析 displayed_link 字段获取作者、期刊、年份等信息
 * 格式: "E Eichten, I Hinchliffe, K Lane, C Quigg - Reviews of Modern Physics, 1984 - APS"
 */
const parseDisplayedLink = (displayedLink) => {
  if (!displayedLink) return { authors: [], venue: '', year: null, publisher: '' };
  
  // 尝试匹配标准格式
  const match = displayedLink.match(/^(.+?)\s-\s(.+?),\s(\d{4})\s-\s(.+)$/);
  if (match) {
    return {
      authors: match[1].split(',').map(name => ({ name: name.trim() })),
      venue: match[2].trim(),
      year: parseInt(match[3]),
      publisher: match[4].trim()
    };
  }
  
  // 尝试匹配简化格式 (只有作者和期刊)
  const simpleMatch = displayedLink.match(/^(.+?)\s-\s(.+)$/);
  if (simpleMatch) {
    const parts = simpleMatch[2].split(',');
    const yearMatch = displayedLink.match(/(\d{4})/);
    
    return {
      authors: simpleMatch[1].split(',').map(name => ({ name: name.trim() })),
      venue: parts[0]?.trim() || '',
      year: yearMatch ? parseInt(yearMatch[1]) : null,
      publisher: parts[parts.length - 1]?.trim() || ''
    };
  }
  
  // 如果都不匹配，返回默认值
  return {
    authors: [{ name: displayedLink }],
    venue: '',
    year: null,
    publisher: ''
  };
};

/**
 * 提取引用数量
 */
const extractCitationCount = (citedByText) => {
  if (!citedByText) return 0;
  
  // 支持中文和英文格式
  const chineseMatch = citedByText.match(/被引用次数:(\d+)/);
  const englishMatch = citedByText.match(/Cited by (\d+)/);
  
  return chineseMatch ? parseInt(chineseMatch[1]) : 
         englishMatch ? parseInt(englishMatch[1]) : 0;
};

/**
 * 将Primary Scraping数据转换为统一格式
 */
const transformPrimaryScrapingData = (scholarData) => {
  const parsedInfo = parseDisplayedLink(scholarData.displayed_link);
  
  return {
    // 基础信息
    paperId: scholarData.id,
    title: scholarData.title,
    abstract: scholarData.snippet, // 使用snippet作为摘要
    year: parsedInfo.year,
    authors: parsedInfo.authors,
    citationCount: extractCitationCount(scholarData.inline_links?.cited_by?.total),
    url: scholarData.title_link,
    venue: parsedInfo.venue,
    
    // Primary Scraping 特有字段
    source: 'primaryScraping',
    clusterId: scholarData.inline_links?.versions?.cluster_id,
    citesId: scholarData.inline_links?.cited_by?.cites_id,
    resources: scholarData.resources || [],
    publisher: parsedInfo.publisher,
    type: scholarData.type || 'ARTICLE',
    
    // 兼容字段
    publicationTypes: [scholarData.type || 'JournalArticle'],
    fieldsOfStudy: [], // Primary Scraping 不直接提供
    isOpenAccess: scholarData.resources && scholarData.resources.length > 0,
    openAccessPdf: scholarData.resources && scholarData.resources.length > 0 ? 
      { url: scholarData.resources[0].link } : null,
    
    // 添加内部链接信息
    inlineLinks: scholarData.inline_links
  };
};

/**
 * 单次 API 请求的辅助函数
 * @param {object} params - 请求参数
 * @param {number} maxRetries - 最大重试次数
 */
const makeApiRequest = async (params, maxRetries = 2) => {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const api = createApiInstance();
      const response = await api.get(BASE_URL, { params });
      
      console.log('Primary Scraping API 响应成功:', {
        page: params.page,
        resultsCount: response.data.scholar_results?.length,
        pagination: response.data.pagination,
        attempt: attempt + 1
      });

      return response.data;
    } catch (error) {
      lastError = error;
      console.error(`Primary Scraping 搜索失败 (尝试 ${attempt + 1}/${maxRetries + 1}):`, error.message);
      
      if (error.response) {
        console.error('响应状态:', error.response.status);
        console.error('响应数据:', error.response.data);
      }
      
      // 如果是网络错误且还有重试机会，等待后重试
      if (attempt < maxRetries && (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND' || error.message.includes('Network Error'))) {
        const waitTime = Math.pow(2, attempt) * 1000; // 指数退避
        console.log(`等待 ${waitTime}ms 后重试...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      // 如果不是网络错误或已达最大重试次数，直接抛出错误
      break;
    }
  }
  
  throw lastError;
};

/**
 * 搜索论文 - 支持双请求逻辑获取更多结果
 * @param {string} query - 搜索查询
 * @param {number} page - 页码 (0开始)
 * @param {number} results_per_page - 每页结果数 (支持20篇时使用双请求)
 * @param {object} filters - 筛选条件
 */
export const searchPapers = async (query, page = 0, results_per_page = 10, filters = {}) => {
  console.log('Primary Scraping 搜索开始:', { query, page, results_per_page, filters });
  
  // 检查是否需要使用双请求逻辑（当请求20篇时）
  const useDoubleRequest = results_per_page === 20;
  
  if (useDoubleRequest) {
    console.log('使用双请求逻辑获取20篇文章');
    
    // 计算实际的API页码：用户第1页 = API第0页+第1页，用户第2页 = API第2页+第3页
    const firstApiPage = page * 2;
    const secondApiPage = firstApiPage + 1;
    
    // 准备两次请求的参数
    const baseParams = {
      query,
      results_per_page: 10, // 固定每次请求10篇
      sort_by: 'relevance'
    };

    // 添加筛选条件
    if (filters.start_year) baseParams.start_year = filters.start_year;
    if (filters.end_year) baseParams.end_year = filters.end_year;
    if (filters.language) baseParams.language = filters.language;
    if (filters.sort_by) baseParams.sort_by = filters.sort_by;

    const firstParams = { ...baseParams, page: firstApiPage };
    const secondParams = { ...baseParams, page: secondApiPage };

    console.log('双请求参数:', { firstParams, secondParams });

    try {
      // 发起第一次请求
      const firstResponse = await makeApiRequest(firstParams);
      
      // 立即发起第二次请求（懒加载）
      const secondResponse = await makeApiRequest(secondParams);
      
      // 合并结果
      const firstPapers = (firstResponse.scholar_results || []).map(transformPrimaryScrapingData);
      const secondPapers = (secondResponse.scholar_results || []).map(transformPrimaryScrapingData);
      const allPapers = [...firstPapers, ...secondPapers];
      
      console.log('双请求结果合并:', {
        firstPageResults: firstPapers.length,
        secondPageResults: secondPapers.length,
        totalResults: allPapers.length
      });

      // 判断返回结果状态
      let resultStatus = null;
      if (allPapers.length === 0) {
        resultStatus = 'empty';
      }
      
      // 计算总数 - 基于第一次请求的分页信息，但需要调整为双请求逻辑
      const firstPaginationData = firstResponse.pagination;
      
      // 优先使用API返回的真实总数
      let actualTotal = null;
      if (firstResponse.total !== undefined && firstResponse.total !== null) {
        actualTotal = firstResponse.total;
      } else if (firstResponse.search_metadata?.total_results !== undefined) {
        actualTotal = parseInt(firstResponse.search_metadata.total_results);
      } else if (firstResponse.search_information?.total_results !== undefined) {
        actualTotal = parseInt(firstResponse.search_information.total_results);
      }
      
      // 如果没有真实总数，使用分页信息估算
      let totalResults = actualTotal;
      if (totalResults === null) {
        // 获取实际的最大页码，然后转换为用户页码
        const pageNumbers = firstPaginationData?.page_no ? Object.keys(firstPaginationData.page_no).map(Number) : [];
        const maxApiPage = pageNumbers.length > 0 ? Math.max(...pageNumbers) : firstApiPage + 1;
        // 转换为用户页码：API页码除以2（因为我们每个用户页面对应2个API页面）
        const maxUserPage = Math.ceil((maxApiPage + 1) / 2);
        totalResults = maxUserPage * 20; // 每个用户页面20篇
      }
      
      // 判断是否有下一页 - 基于双请求逻辑
      let hasNextPage = false;
      if (actualTotal !== null) {
        // 如果有真实总数，基于真实总数判断
        hasNextPage = (page + 1) * 20 < totalResults;
      } else {
        // 如果没有真实总数，基于分页信息判断
        // 检查第二次请求是否还有下一页
        const secondPaginationData = secondResponse.pagination;
        const secondPageNumbers = secondPaginationData?.page_no ? Object.keys(secondPaginationData.page_no).map(Number) : [];
        const maxSecondApiPage = secondPageNumbers.length > 0 ? Math.max(...secondPageNumbers) : secondApiPage;
        hasNextPage = secondApiPage < maxSecondApiPage;
      }
      
      console.log('双请求分页计算结果:', {
        userPage: page,
        firstApiPage,
        secondApiPage,
        actualTotal,
        totalResults,
        hasNextPage,
        isUsingActualTotal: actualTotal !== null
      });

      return {
        papers: allPapers,
        total: totalResults,
        offset: page * 20, // 用户页面偏移量
        next: hasNextPage ? page + 1 : null,
        pagination: firstResponse.pagination, // 返回第一次请求的分页信息作为参考
        relatedSearches: firstResponse.related_searches || [],
        resultStatus: resultStatus,
        // 添加双请求标识
        isDoubleRequest: true,
        requestDetails: {
          firstRequest: { page: firstApiPage, results: firstPapers.length },
          secondRequest: { page: secondApiPage, results: secondPapers.length }
        }
      };
      
    } catch (error) {
      // 提供更友好的错误信息
      let errorMessage = 'Primary Scraping 双请求搜索失败';
      if (error.code === 'ECONNABORTED') {
        errorMessage += ': 请求超时，请检查网络连接';
      } else if (error.code === 'ENOTFOUND') {
        errorMessage += ': 无法连接到服务器，请检查网络配置';
      } else if (error.message && error.message.includes('ERR_PROXY_CONNECTION_FAILED')) {
        errorMessage += ': 代理连接失败，请检查网络代理设置';
      } else {
        errorMessage += `: ${error.response?.data?.message || error.message}`;
      }
      
      throw new Error(errorMessage);
    }
  } else {
    // 原有的单请求逻辑保持不变
    const params = {
      query,
      page,
      results_per_page,
      sort_by: 'relevance'
    };

    // 添加筛选条件
    if (filters.start_year) params.start_year = filters.start_year;
    if (filters.end_year) params.end_year = filters.end_year;
    if (filters.language) params.language = filters.language;
    if (filters.sort_by) params.sort_by = filters.sort_by;

    console.log('Primary Scraping 单请求参数:', params);

    try {
      const responseData = await makeApiRequest(params);
      
      const transformedPapers = (responseData.scholar_results || []).map(transformPrimaryScrapingData);
      
      // 判断返回结果状态，为日志记录提供状态信息
      let resultStatus = null;
      if (!responseData || !responseData.scholar_results || responseData.scholar_results.length === 0) {
        resultStatus = 'empty'; // 接口返回空或空数组都标记为空响应
      }
      
      // 计算总数 - 优先使用API返回的真实总数，否则使用分页信息估算
      const currentPage = responseData.page || 0;
      
      // 获取分页信息
      const paginationData = responseData.pagination;
      
      // 优先使用API返回的真实总数
      let actualTotal = null;
      if (responseData.total !== undefined && responseData.total !== null) {
        actualTotal = responseData.total;
      } else if (responseData.search_metadata?.total_results !== undefined) {
        actualTotal = parseInt(responseData.search_metadata.total_results);
      } else if (responseData.search_information?.total_results !== undefined) {
        actualTotal = parseInt(responseData.search_information.total_results);
      }
      
      // 如果没有真实总数，使用分页信息估算
      let totalResults = actualTotal;
      if (totalResults === null) {
        // 获取实际的最大页码
        const pageNumbers = paginationData?.page_no ? Object.keys(paginationData.page_no).map(Number) : [];
        const maxAvailablePage = pageNumbers.length > 0 ? Math.max(...pageNumbers) : currentPage + 1;
        totalResults = maxAvailablePage * results_per_page;
      }
      
      // 判断是否有下一页 - 需要重新计算maxAvailablePage以用于判断下一页
      let hasNextPage = false;
      if (actualTotal !== null) {
        // 如果有真实总数，基于真实总数判断
        hasNextPage = (currentPage + 1) * results_per_page < totalResults;
      } else {
        // 如果没有真实总数，基于分页信息判断
        const pageNumbers = paginationData?.page_no ? Object.keys(paginationData.page_no).map(Number) : [];
        const maxAvailablePage = pageNumbers.length > 0 ? Math.max(...pageNumbers) : currentPage + 1;
        hasNextPage = currentPage < maxAvailablePage - 1;
      }
      
      console.log('Primary Scraping 单请求分页计算结果:', {
        currentPage,
        actualTotal,
        totalResults,
        hasNextPage,
        isUsingActualTotal: actualTotal !== null
      });

      return {
        papers: transformedPapers,
        total: totalResults,
        offset: page * results_per_page,
        next: hasNextPage ? page + 1 : null,
        pagination: responseData.pagination,
        relatedSearches: responseData.related_searches || [],
        resultStatus: resultStatus, // 添加结果状态
        isDoubleRequest: false
      };
      
    } catch (error) {
      // 提供更友好的错误信息
      let errorMessage = 'Primary Scraping 搜索失败';
      if (error.code === 'ECONNABORTED') {
        errorMessage += ': 请求超时，请检查网络连接';
      } else if (error.code === 'ENOTFOUND') {
        errorMessage += ': 无法连接到服务器，请检查网络配置';
      } else if (error.message && error.message.includes('ERR_PROXY_CONNECTION_FAILED')) {
        errorMessage += ': 代理连接失败，请检查网络代理设置';
      } else {
        errorMessage += `: ${error.response?.data?.message || error.message}`;
      }
      
      throw new Error(errorMessage);
    }
  }
};

/**
 * 根据论文ID获取被引用论文列表
 * @param {string} paperId - 论文ID
 * @param {number} limit - 限制数量
 */
export const getPaperCitations = async (paperId, limit = 10) => {
  try {
    // 通过引用搜索实现 (如果API支持cites参数)
    const response = await searchPapers('', 0, limit, { cites: paperId });
    return response.papers;
  } catch (error) {
    console.error('Primary Scraping 获取被引用论文失败:', error);
    throw new Error(`获取被引用论文失败: ${error.message}`);
  }
};

/**
 * 搜索作者 (通过查询实现)
 * @param {string} query - 作者姓名
 * @param {number} limit - 限制数量
 */
export const searchAuthors = async (query, limit = 10) => {
  try {
    const authorQuery = `author:"${query}"`;
    const response = await searchPapers(authorQuery, 0, limit);
    
    // 从搜索结果中提取作者信息
    const authors = new Map();
    response.papers.forEach(paper => {
      paper.authors.forEach(author => {
        if (author.name.toLowerCase().includes(query.toLowerCase())) {
          if (!authors.has(author.name)) {
            authors.set(author.name, {
              authorId: `author_${author.name.replace(/\s+/g, '_')}`,
              name: author.name,
              paperCount: 1,
              papers: [paper]
            });
          } else {
            const existingAuthor = authors.get(author.name);
            existingAuthor.paperCount++;
            existingAuthor.papers.push(paper);
          }
        }
      });
    });
    
    return Array.from(authors.values()).slice(0, limit);
  } catch (error) {
    console.error('Primary Scraping 搜索作者失败:', error);
    throw new Error(`搜索作者失败: ${error.message}`);
  }
};

/**
 * 获取推荐论文 (基于相关搜索实现)
 * @param {string} paperId - 种子论文ID
 * @param {number} limit - 限制数量
 */
export const getRecommendations = async (paperId, limit = 10) => {
  try {
    // 首先搜索该论文获取标题
    const paperResults = await searchPapers(`info:${paperId}`, 0, 1);
    if (paperResults.papers.length === 0) {
      throw new Error('未找到指定论文');
    }
    
    const paper = paperResults.papers[0];
    
    // 使用论文标题的关键词搜索相关论文
    const keywords = paper.title.split(' ').slice(0, 3).join(' ');
    const recommendations = await searchPapers(keywords, 0, limit + 1);
    
    // 排除原始论文
    return recommendations.papers.filter(p => p.paperId !== paperId).slice(0, limit);
  } catch (error) {
    console.error('Primary Scraping 获取推荐论文失败:', error);
    throw new Error(`获取推荐论文失败: ${error.message}`);
  }
}; 