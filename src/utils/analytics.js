// Google Analytics 事件跟踪工具

// 检查 gtag 是否可用
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// 通用事件跟踪函数
export const trackEvent = (eventName, parameters = {}) => {
  if (!isGtagAvailable()) {
    // 只在开发环境显示调试信息
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics not available:', eventName, parameters);
    }
    return;
  }
  
  try {
    window.gtag('event', eventName, {
      custom_map: {
        'custom_parameter': 'cp1'
      },
      ...parameters
    });
    
    // 只在开发环境显示详细日志
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics event tracked:', eventName, parameters);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// 搜索相关事件
export const trackSearch = (query, dataSource, resultsCount = 0, searchTime = 0, filters = {}) => {
  // 计算过滤器信息
  const activeFilters = Object.entries(filters).filter(([key, value]) => 
    value && value !== '' && value !== 'relevance'
  );
  const filterInfo = activeFilters.map(([key, value]) => `${key}:${value}`).join(',');
  
  trackEvent('search', {
    search_term: query,
    data_source: dataSource,
    results_count: resultsCount,
    search_time_ms: searchTime,
    filters_used: filterInfo || 'none',
    filter_count: activeFilters.length,
    event_category: 'search',
    event_label: `${dataSource}_search`,
    // 添加自定义维度
    custom_parameter_1: dataSource,
    custom_parameter_2: query.length,
    custom_parameter_3: resultsCount
  });
};

// 专门的数据源搜索事件（更详细）
export const trackDataSourceSearch = (dataSource, query, resultsCount, searchTime, filters = {}) => {
  const activeFilters = Object.entries(filters).filter(([key, value]) => 
    value && value !== '' && value !== 'relevance'
  );
  
  trackEvent('datasource_search', {
    search_term: query,
    data_source: dataSource,
    results_count: resultsCount,
    search_duration: searchTime,
    query_length: query.length,
    has_filters: activeFilters.length > 0,
    filter_count: activeFilters.length,
    event_category: 'datasource',
    event_label: `${dataSource}_detailed_search`,
    // 数据源特定信息
    source_type: dataSource,
    success: resultsCount > 0 ? 'true' : 'false'
  });
  
  // 分别记录每个数据源的使用频率
  trackEvent(`${dataSource}_usage`, {
    action: 'search_executed',
    query: query,
    results: resultsCount,
    time_ms: searchTime,
    event_category: 'datasource_usage',
    event_label: dataSource
  });
};

// AI 优化搜索事件
export const trackAISearch = (originalQuery, optimizedQuery, model) => {
  trackEvent('ai_search_optimization', {
    original_query: originalQuery,
    optimized_query: optimizedQuery,
    ai_model: model,
    event_category: 'ai',
    event_label: 'query_optimization'
  });
};

// 过滤器使用事件
export const trackFilterUsage = (filterType, filterValue, totalFilters) => {
  trackEvent('filter_usage', {
    filter_type: filterType,
    filter_value: filterValue,
    total_filters: totalFilters,
    event_category: 'filters',
    event_label: `${filterType}_filter`
  });
};

// 数据源切换事件
export const trackDataSourceChange = (fromSource, toSource) => {
  trackEvent('data_source_change', {
    from_source: fromSource,
    to_source: toSource,
    event_category: 'navigation',
    event_label: `${fromSource}_to_${toSource}`
  });
};

// 论文卡片点击事件
export const trackPaperClick = (paperId, paperTitle, position, source) => {
  trackEvent('paper_click', {
    paper_id: paperId,
    paper_title: paperTitle?.substring(0, 100) || 'Unknown', // 限制长度
    position: position,
    source: source,
    event_category: 'engagement',
    event_label: `paper_click_${source}`
  });
};

// 外部链接点击事件
export const trackExternalLinkClick = (url, linkType) => {
  trackEvent('external_link_click', {
    url: url,
    link_type: linkType,
    event_category: 'external',
    event_label: linkType
  });
};

// 页面浏览时间事件
export const trackPageTime = (timeSpent) => {
  trackEvent('page_time', {
    time_spent: timeSpent,
    event_category: 'engagement',
    event_label: 'page_duration'
  });
};

// 错误事件跟踪
export const trackError = (errorType, errorMessage, context = '') => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage?.substring(0, 100) || 'Unknown error',
    context: context,
    event_category: 'error',
    event_label: errorType
  });
};

// 用户行为跟踪
export const trackUserBehavior = (action, details = {}) => {
  trackEvent('user_behavior', {
    action: action,
    ...details,
    event_category: 'behavior',
    event_label: action
  });
};

// 性能指标跟踪
export const trackPerformance = (metric, value, context = '') => {
  trackEvent('performance', {
    metric: metric,
    value: value,
    context: context,
    event_category: 'performance',
    event_label: metric
  });
};

// 功能使用跟踪
export const trackFeatureUsage = (feature, action, value = null) => {
  trackEvent('feature_usage', {
    feature: feature,
    action: action,
    value: value,
    event_category: 'feature',
    event_label: `${feature}_${action}`
  });
};

// 转化事件跟踪
export const trackConversion = (conversionType, value = null) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    event_category: 'conversion',
    event_label: conversionType
  });
};

// 页面加载完成事件
export const trackPageLoad = (loadTime) => {
  trackEvent('page_view', {
    page_load_time: loadTime,
    event_category: 'navigation',
    event_label: 'page_load'
  });
};

// 防止重复初始化
let isPageTrackingInitialized = false;

// 初始化页面跟踪
export const initPageTracking = () => {
  if (typeof window === 'undefined' || isPageTrackingInitialized) return;
  
  isPageTrackingInitialized = true;
  
  // 跟踪页面加载时间
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    trackPageLoad(Math.round(loadTime));
  });
  
  // 跟踪页面离开时间
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackPageTime(timeSpent);
  });
  
  // 跟踪滚动深度
  let maxScrollDepth = 0;
  let scrollMilestones = {
    25: false,
    50: false,
    75: false,
    100: false
  };
  
  // 节流函数来减少滚动事件的频率
  let scrollTimeout;
  const handleScroll = () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // 每25%记录一次滚动深度，但只记录一次
        if (scrollDepth >= 25 && !scrollMilestones[25]) {
          scrollMilestones[25] = true;
          trackUserBehavior('scroll_25');
        } else if (scrollDepth >= 50 && !scrollMilestones[50]) {
          scrollMilestones[50] = true;
          trackUserBehavior('scroll_50');
        } else if (scrollDepth >= 75 && !scrollMilestones[75]) {
          scrollMilestones[75] = true;
          trackUserBehavior('scroll_75');
        } else if (scrollDepth >= 100 && !scrollMilestones[100]) {
          scrollMilestones[100] = true;
          trackUserBehavior('scroll_100');
        }
      }
      
      scrollTimeout = null;
    }, 100); // 100ms 节流
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
}; 