// 统一搜索接口 - 整合多个数据源

import * as semanticScholar from './semanticScholar.js';
import * as googleScholar from './googleScholar.js';
import * as primaryScraping from './primaryScraping.js';
import { convertFiltersToApiParams } from '../config/filterConfigs.js';
import apiLogger from '../utils/apiLogger.js';
import ToastUtils from '../utils/toastUtils.js';

/**
 * 统一搜索论文接口
 * @param {string} query - 搜索查询
 * @param {number} offset - 偏移量
 * @param {number} limit - 限制数量
 * @param {string} sort - 排序方式
 * @param {object} filters - 筛选条件
 * @param {string} dataSource - 数据源 ('semantic' | 'googleScholar' | 'primaryScraping')
 */
export const searchPapers = async (query, offset = 0, limit = 20, sort = 'relevance', filters = {}, dataSource = 'primaryScraping') => {
  const startTime = Date.now();

  
  try {
    let result;
    switch (dataSource) {
      case 'semantic':
        // 转换参数格式
        const semanticFilters = convertFiltersToApiParams(filters, 'semantic');
        result = await semanticScholar.searchPapers(query, limit, offset, 'paperId,title,abstract,authors,year,venue,citationCount,referenceCount,influentialCitationCount,fieldsOfStudy,isOpenAccess,openAccessPdf,tldr,journal', semanticFilters);
        // 为所有论文添加数据源标识
        result.papers = result.papers.map(paper => ({
          ...paper,
          source: 'semantic'
        }));
        break;
      
      case 'googleScholar':
        // Google Scholar 使用不同的分页方式
        const page = Math.floor(offset / limit);
        const scholarFilters = convertFiltersToApiParams(filters, 'googleScholar');
        result = await googleScholar.searchPapers(query, page, limit, scholarFilters);
        break;
      
      case 'primaryScraping':
        // Primary Scraping 使用类似Google Scholar的分页方式
        const primaryPage = Math.floor(offset / limit);
        const primaryFilters = convertFiltersToApiParams(filters, 'primaryScraping');
        result = await primaryScraping.searchPapers(query, primaryPage, limit, primaryFilters);
        break;
      
      default:
        throw new Error(`不支持的数据源: ${dataSource}`);
    }
    
    // 记录成功日志
    const responseTime = Date.now() - startTime;
    
    // 判断结果状态
    let resultStatus = null;
    if (!result || !result.papers || result.papers.length === 0) {
      resultStatus = 'empty';
    }
    
    apiLogger.logApiCall(
      'searchPapers',
      dataSource,
      true,
      responseTime,
      null,
      { query, offset, limit, sort },
      resultStatus
    );
    
    return result;
  } catch (error) {
    // 记录失败日志
    const responseTime = Date.now() - startTime;
    apiLogger.logApiCall(
      'searchPapers',
      dataSource,
      false,
      responseTime,
      error.message,
      { query, offset, limit, sort }
    );
    
    console.error(`搜索失败 (${dataSource}):`, error);
    
    // 显示用户友好的错误提示
    ToastUtils.apiError(dataSource, '搜索论文', error);
    
    throw error;
  }
};

/**
 * 获取论文详情
 * @param {string} paperId - 论文ID
 * @param {string} dataSource - 数据源
 */
export const getPaperDetails = async (paperId, dataSource = 'semantic') => {
  const startTime = Date.now();
  
  try {
    let result;
    switch (dataSource) {
      case 'semantic':
        result = await semanticScholar.getPaperDetails(paperId);
        break;
      
      case 'googleScholar':
        // Google Scholar 没有直接的详情接口，通过搜索获取
        const scholarResults = await googleScholar.searchPapers(`info:${paperId}`, 0, 1);
        if (scholarResults.papers.length > 0) {
          result = scholarResults.papers[0];
        } else {
          throw new Error('未找到论文详情');
        }
        break;
      
      case 'primaryScraping':
        // Primary Scraping 没有直接的详情接口，通过搜索获取
        const primaryResults = await primaryScraping.searchPapers(`info:${paperId}`, 0, 1);
        if (primaryResults.papers.length > 0) {
          result = primaryResults.papers[0];
        } else {
          throw new Error('未找到论文详情');
        }
        break;
      
      default:
        throw new Error(`不支持的数据源: ${dataSource}`);
    }
    
    // 记录成功日志  
    const responseTime = Date.now() - startTime;
    
    // 判断结果状态
    let resultStatus = null;
    if (!result) {
      resultStatus = 'empty';
    }
    
    apiLogger.logApiCall(
      'getPaperDetails',
      dataSource,
      true,
      responseTime,
      null,
      { paperId },
      resultStatus
    );
    
    return result;
  } catch (error) {
    // 记录失败日志
    const responseTime = Date.now() - startTime;
    apiLogger.logApiCall(
      'getPaperDetails',
      dataSource,
      false,
      responseTime,
      error.message,
      { paperId }
    );
    
    console.error(`获取论文详情失败 (${dataSource}):`, error);
    
    // 显示用户友好的错误提示
    ToastUtils.apiError(dataSource, '获取论文详情', error);
    
    throw error;
  }
};

/**
 * 获取论文引用
 * @param {string} paperId - 论文ID
 * @param {number} limit - 限制数量
 * @param {string} dataSource - 数据源
 */
export const getPaperCitations = async (paperId, limit = 10, dataSource = 'semantic') => {
  try {
    let result;
    switch (dataSource) {
      case 'semantic':
        result = await semanticScholar.getPaperCitations(paperId, limit);
        return result.citations || [];
      
      case 'googleScholar':
        // Google Scholar 现在使用getCitationInfo
        const citationInfo = await googleScholar.getCitationInfo(paperId);
        return citationInfo.citationInfo || [];
      
      case 'primaryScraping':
        // Primary Scraping 可能需要通过搜索实现
        try {
          result = await primaryScraping.searchPapers(`cites:${paperId}`, 0, limit);
          return result.papers || [];
        } catch (error) {
          console.warn('Primary Scraping 不支持引用搜索');
          return [];
        }
      
      default:
        throw new Error(`不支持的数据源: ${dataSource}`);
    }
  } catch (error) {
    console.error(`获取论文引用失败 (${dataSource}):`, error);
    ToastUtils.apiError(dataSource, '获取论文引用', error);
    throw error;
  }
};

/**
 * 获取论文参考文献
 * @param {string} paperId - 论文ID
 * @param {number} limit - 限制数量
 * @param {string} dataSource - 数据源
 */
export const getPaperReferences = async (paperId, limit = 10, dataSource = 'semantic') => {
  try {
    let result;
    switch (dataSource) {
      case 'semantic':
        result = await semanticScholar.getPaperReferences(paperId, limit);
        return result.references || [];
      
      case 'googleScholar':
        // Google Scholar 没有直接的参考文献接口
        console.warn('Google Scholar 不支持参考文献查询');
        return [];
      
      case 'primaryScraping':
        // Primary Scraping 可能需要通过搜索实现
        console.warn('Primary Scraping 不支持参考文献查询');
        return [];
      
      default:
        throw new Error(`不支持的数据源: ${dataSource}`);
    }
  } catch (error) {
    console.error(`获取论文参考文献失败 (${dataSource}):`, error);
    ToastUtils.apiError(dataSource, '获取论文参考文献', error);
    throw error;
  }
};

/**
 * 搜索作者（降级实现）
 * @param {string} query - 作者姓名
 * @param {number} limit - 限制数量
 * @param {string} dataSource - 数据源
 */
export const searchAuthors = async (query, limit = 10, dataSource = 'semantic') => {
  try {
    // 由于API更新，通过论文搜索来模拟作者搜索
    const authorQuery = `author:"${query}"`;
    const result = await searchPapers(authorQuery, 0, limit, 'relevance', {}, dataSource);
    
    // 从搜索结果中提取作者信息
    const authors = new Map();
    (result.papers || []).forEach(paper => {
      (paper.authors || []).forEach(author => {
        if (author.name && author.name.toLowerCase().includes(query.toLowerCase())) {
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
    console.error(`搜索作者失败 (${dataSource}):`, error);
    ToastUtils.apiError(dataSource, '搜索作者', error);
    throw error;
  }
};

/**
 * 获取推荐论文（降级实现）
 * @param {string} paperId - 种子论文ID
 * @param {number} limit - 限制数量
 * @param {string} dataSource - 数据源
 */
export const getRecommendations = async (paperId, limit = 10, dataSource = 'semantic') => {
  try {
    // 先获取论文详情
    const paper = await getPaperDetails(paperId, dataSource);
    if (!paper || !paper.title) {
      throw new Error('无法获取论文信息');
    }
    
    // 使用论文标题的关键词进行相关搜索
    const keywords = paper.title.split(' ').slice(0, 5).join(' ');
    const result = await searchPapers(keywords, 0, limit + 5, 'relevance', {}, dataSource);
    
    // 排除原始论文，返回推荐结果
    const recommendations = (result.papers || [])
      .filter(p => p.paperId !== paperId && p.title !== paper.title)
      .slice(0, limit);
    
    return recommendations;
  } catch (error) {
    console.error(`获取推荐论文失败 (${dataSource}):`, error);
    ToastUtils.apiError(dataSource, '获取推荐论文', error);
    throw error;
  }
};

/**
 * 获取论文引用格式（仅Google Scholar支持）
 * @param {string} paperId - 论文ID
 */
export const getPaperCitation = async (paperId) => {
  try {
    // 使用新的函数名
    return await googleScholar.getCitationInfo(paperId);
  } catch (error) {
    console.error('获取论文引用格式失败:', error);
    ToastUtils.apiError('googleScholar', '获取引用格式', error);
    throw error;
  }
};

/**
 * 获取论文的所有版本（仅Google Scholar支持）
 * @param {string} clusterId - 论文cluster ID
 * @param {number} limit - 限制数量
 */
export const getPaperVersions = async (clusterId, limit = 10) => {
  try {
    // 使用新的函数名
    const result = await googleScholar.getRelatedPapers(clusterId, limit);
    return result.papers || [];
  } catch (error) {
    console.error('获取论文版本失败:', error);
    ToastUtils.apiError('googleScholar', '获取论文版本', error);
    throw error;
  }
};

/**
 * 批量搜索论文
 * @param {Array} queries - 查询数组
 * @param {Object} options - 搜索选项
 */
export const batchSearchPapers = async (queries, options = {}) => {
  const {
    limit = 10,
    offset = 0,
    sort = 'relevance',
    filters = {},
    dataSource = 'primaryScraping',
    maxConcurrent = 3
  } = options;
  
  // 分批处理查询以控制并发
  const results = [];
  for (let i = 0; i < queries.length; i += maxConcurrent) {
    const batch = queries.slice(i, i + maxConcurrent);
    
    const batchPromises = batch.map(query => 
      searchPapers(query, offset, limit, sort, filters, dataSource)
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

/**
 * 合并多个数据源的搜索结果
 * @param {object} multiSourceResults - 多数据源结果
 * @param {object} options - 合并选项
 */
export const mergeSearchResults = (multiSourceResults, options = {}) => {
  const { removeDuplicates = true, maxResults = 40 } = options;
  
  let allPapers = [];
  let totalCount = 0;
  
  // 收集所有论文
  Object.entries(multiSourceResults).forEach(([source, result]) => {
    if (result && result.papers) {
      allPapers = allPapers.concat(result.papers);
      totalCount += result.total || 0;
    }
  });
  
  // 去重逻辑 (基于标题相似度)
  if (removeDuplicates) {
    const uniquePapers = [];
    const seenTitles = new Set();
    
    allPapers.forEach(paper => {
      const normalizedTitle = paper.title.toLowerCase().replace(/[^\w\s]/g, '').trim();
      if (!seenTitles.has(normalizedTitle)) {
        seenTitles.add(normalizedTitle);
        uniquePapers.push(paper);
      }
    });
    
    allPapers = uniquePapers;
  }
  
  // 按引用数排序 (可以根据需要调整排序逻辑)
  allPapers.sort((a, b) => (b.citationCount || 0) - (a.citationCount || 0));
  
  // 限制结果数量
  if (allPapers.length > maxResults) {
    allPapers = allPapers.slice(0, maxResults);
  }
  
  return {
    papers: allPapers,
    total: allPapers.length,
    sources: Object.keys(multiSourceResults),
    originalTotal: totalCount
  };
}; 