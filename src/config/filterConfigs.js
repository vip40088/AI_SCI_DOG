// 筛选配置文件 - 定义不同数据源的筛选字段

export const FILTER_CONFIGS = {
  semantic: {
    name: '3rd api',
    fields: [
      {
        key: 'year',
        label: '发表年份',
        type: 'text',
        placeholder: '例如：2020-2024 或 2023',
        icon: 'calendar',
        category: 'basic'
      },
      {
        key: 'minCitationCount',
        label: '最小引用数',
        type: 'number',
        placeholder: '例如：10',
        icon: 'trending-up',
        category: 'basic'
      },
      {
        key: 'fieldsOfStudy',
        label: '研究领域',
        type: 'select',
        options: [
          { value: '', label: '所有领域' },
          { value: 'Computer Science', label: '计算机科学' },
          { value: 'Medicine', label: '医学' },
          { value: 'Biology', label: '生物学' },
          { value: 'Physics', label: '物理学' },
          { value: 'Mathematics', label: '数学' },
          { value: 'Chemistry', label: '化学' },
          { value: 'Economics', label: '经济学' },
          { value: 'Psychology', label: '心理学' },
          { value: 'Engineering', label: '工程学' },
          { value: 'Materials Science', label: '材料科学' },
          { value: 'Environmental Science', label: '环境科学' },
          { value: 'Political Science', label: '政治学' },
          { value: 'Sociology', label: '社会学' },
          { value: 'Philosophy', label: '哲学' }
        ],
        icon: 'book',
        category: 'advanced'
      },
      {
        key: 'venue',
        label: '期刊/会议',
        type: 'text',
        placeholder: '例如：Nature, Science, ICML',
        icon: 'briefcase',
        category: 'advanced'
      },
      {
        key: 'openAccessPdf',
        label: '开放获取',
        type: 'select',
        options: [
          { value: '', label: '全部' },
          { value: 'true', label: '仅开放获取' },
          { value: 'false', label: '仅非开放获取' }
        ],
        icon: 'lock',
        category: 'advanced'
      },
      {
        key: 'sort',
        label: '排序方式',
        type: 'select',
        options: [
          { value: 'relevance', label: '相关性' },
          { value: 'citationCount', label: '引用数' },
          { value: 'publicationDate', label: '发表日期' }
        ],
        icon: 'sort',
        category: 'basic'
      }
    ]
  },
  
  googleScholar: {
    name: 'Google Scholar',
    fields: [
      {
        key: 'as_ylo',
        label: '起始年份',
        type: 'number',
        placeholder: '例如：2020',
        icon: 'calendar',
        category: 'basic'
      },
      {
        key: 'as_yhi',
        label: '结束年份',
        type: 'number',
        placeholder: '例如：2024',
        icon: 'calendar',
        category: 'basic'
      },
      {
        key: 'language',
        label: '语言',
        type: 'select',
        options: [
          { value: 'en', label: '英语' },
          { value: 'zh', label: '中文' },
          { value: 'es', label: '西班牙语' },
          { value: 'fr', label: '法语' },
          { value: 'de', label: '德语' },
          { value: 'ja', label: '日语' },
          { value: 'ko', label: '韩语' },
          { value: 'pt', label: '葡萄牙语' },
          { value: 'ru', label: '俄语' },
          { value: 'it', label: '意大利语' }
        ],
        icon: 'globe',
        category: 'basic'
      },
      {
        key: 'as_sdt',
        label: '搜索类型',
        type: 'select',
        options: [
          { value: '0', label: '学术文章（排除专利）' },
          { value: '7', label: '包含专利' },
          { value: '4', label: '案例法（仅美国法院）' }
        ],
        icon: 'file-text',
        category: 'advanced'
      },
      {
        key: 'safe',
        label: '安全搜索',
        type: 'select',
        options: [
          { value: 'off', label: '关闭' },
          { value: 'active', label: '开启' }
        ],
        icon: 'shield',
        category: 'advanced'
      },
      {
        key: 'filter',
        label: '结果过滤',
        type: 'select',
        options: [
          { value: '1', label: '启用（过滤相似和省略结果）' },
          { value: '0', label: '禁用' }
        ],
        icon: 'filter',
        category: 'advanced'
      },
      {
        key: 'as_vis',
        label: '引用显示',
        type: 'select',
        options: [
          { value: '0', label: '包含引用' },
          { value: '1', label: '排除引用' }
        ],
        icon: 'quote',
        category: 'advanced'
      },
      {
        key: 'as_rr',
        label: '文章类型',
        type: 'select',
        options: [
          { value: '0', label: '所有文章' },
          { value: '1', label: '仅综述文章' }
        ],
        icon: 'layers',
        category: 'advanced'
      }
    ]
  },
  
  primaryScraping: {
    name: 'Primary Scraping Scholar',
    fields: [
      {
        key: 'start_year',
        label: '起始年份',
        type: 'number',
        placeholder: '例如：2020',
        icon: 'calendar',
        category: 'basic'
      },
      {
        key: 'end_year',
        label: '结束年份',
        type: 'number',
        placeholder: '例如：2024',
        icon: 'calendar',
        category: 'basic'
      },
      {
        key: 'language',
        label: '语言',
        type: 'select',
        options: [
          { value: 'en', label: '英语' },
          { value: 'zh-CN', label: '中文简体' },
          { value: 'zh-TW', label: '中文繁体' },
          { value: 'es', label: '西班牙语' },
          { value: 'fr', label: '法语' },
          { value: 'de', label: '德语' },
          { value: 'ja', label: '日语' },
          { value: 'ko', label: '韩语' },
          { value: 'pt', label: '葡萄牙语' },
          { value: 'ru', label: '俄语' },
          { value: 'it', label: '意大利语' }
        ],
        icon: 'globe',
        category: 'basic'
      },
      {
        key: 'sort_by',
        label: '排序方式',
        type: 'select',
        options: [
          { value: 'relevance', label: '相关性' },
          { value: 'date', label: '发表日期' },
          { value: 'cited_by', label: '引用数' }
        ],
        icon: 'sort',
        category: 'basic'
      }
    ]
  },
  
  pubmed: {
    name: 'PubMed',
    disabled: true, // 标记为禁用状态
    fields: [
      // 预留字段，将来对接时使用
      {
        key: 'publication_date',
        label: '发表日期',
        type: 'text',
        placeholder: '例如：2020-2024',
        icon: 'calendar',
        category: 'basic'
      },
      {
        key: 'article_type',
        label: '文章类型',
        type: 'select',
        options: [
          { value: '', label: '所有类型' },
          { value: 'research', label: '研究文章' },
          { value: 'review', label: '综述' },
          { value: 'meta-analysis', label: '荟萃分析' }
        ],
        icon: 'file-text',
        category: 'basic'
      }
    ]
  }
};

// 获取图标组件的函数
export const getIcon = (iconName) => {
  const iconMap = {
    'calendar': '📅',
    'trending-up': '📈',
    'book': '📚',
    'briefcase': '💼',
    'lock': '🔒',
    'sort': '🔄',
    'globe': '🌐',
    'file-text': '📄',
    'shield': '🛡️',
    'filter': '🔍',
    'quote': '💬',
    'layers': '📑'
  };
  
  return iconMap[iconName] || '⚙️';
};

// 参数转换函数
export const convertFiltersToApiParams = (filters, dataSource) => {
  const cleanedFilters = {};
  
  switch (dataSource) {
    case 'semantic':
      if (filters.year) cleanedFilters.year = filters.year;
      if (filters.minCitationCount && filters.minCitationCount !== '') {
        cleanedFilters.minCitationCount = parseInt(filters.minCitationCount);
      }
      if (filters.fieldsOfStudy) cleanedFilters.fieldsOfStudy = filters.fieldsOfStudy;
      if (filters.venue) cleanedFilters.venue = filters.venue;
      if (filters.openAccessPdf !== undefined && filters.openAccessPdf !== '') {
        cleanedFilters.openAccessPdf = filters.openAccessPdf === 'true';
      }
      if (filters.sort) cleanedFilters.sort = filters.sort;
      break;
    
    case 'googleScholar':
      if (filters.as_ylo) cleanedFilters.as_ylo = filters.as_ylo;
      if (filters.as_yhi) cleanedFilters.as_yhi = filters.as_yhi;
      if (filters.language) cleanedFilters.language = filters.language;
      if (filters.as_sdt) cleanedFilters.as_sdt = filters.as_sdt;
      if (filters.safe) cleanedFilters.safe = filters.safe;
      if (filters.filter) cleanedFilters.filter = filters.filter;
      if (filters.as_vis) cleanedFilters.as_vis = filters.as_vis;
      if (filters.as_rr) cleanedFilters.as_rr = filters.as_rr;
      break;
    
    case 'primaryScraping':
      if (filters.start_year) cleanedFilters.start_year = filters.start_year;
      if (filters.end_year) cleanedFilters.end_year = filters.end_year;
      if (filters.language) cleanedFilters.language = filters.language;
      if (filters.sort_by) cleanedFilters.sort_by = filters.sort_by;
      break;
    
    default:
      return {};
  }
  
  return cleanedFilters;
};

// 获取可迁移的筛选条件
export const getMigratableFilters = (filters, fromSource, toSource) => {
  const migratable = [];
  
  // 年份筛选的迁移逻辑
  if (fromSource === 'semantic' && toSource === 'googleScholar' && filters.year) {
    const yearMatch = filters.year.match(/(\d{4})-(\d{4})/);
    if (yearMatch) {
      migratable.push('年份范围');
    } else if (filters.year.match(/\d{4}/)) {
      migratable.push('年份');
    }
  }
  
  if (fromSource === 'googleScholar' && toSource === 'semantic') {
    if (filters.as_ylo || filters.as_yhi) {
      migratable.push('年份范围');
    }
  }
  
  // Primary Scraping 与其他数据源的迁移
  if ((fromSource === 'primaryScraping' && (toSource === 'googleScholar' || toSource === 'semantic')) ||
      ((fromSource === 'googleScholar' || fromSource === 'semantic') && toSource === 'primaryScraping')) {
    if ((fromSource === 'primaryScraping' && (filters.start_year || filters.end_year)) ||
        (fromSource === 'googleScholar' && (filters.as_ylo || filters.as_yhi)) ||
        (fromSource === 'semantic' && filters.year)) {
      migratable.push('年份范围');
    }
  }
  
  return migratable;
};

// 执行筛选条件迁移
export const migrateFilters = (filters, fromSource, toSource) => {
  const migratedFilters = {};
  
  if (fromSource === 'semantic' && toSource === 'googleScholar') {
    // 迁移年份
    if (filters.year) {
      const yearMatch = filters.year.match(/(\d{4})-(\d{4})/);
      if (yearMatch) {
        migratedFilters.as_ylo = yearMatch[1];
        migratedFilters.as_yhi = yearMatch[2];
      } else {
        const singleYear = filters.year.match(/\d{4}/);
        if (singleYear) {
          migratedFilters.as_ylo = singleYear[0];
          migratedFilters.as_yhi = singleYear[0];
        }
      }
    }
  }
  
  if (fromSource === 'googleScholar' && toSource === 'semantic') {
    // 迁移年份
    if (filters.as_ylo && filters.as_yhi) {
      if (filters.as_ylo === filters.as_yhi) {
        migratedFilters.year = filters.as_ylo;
      } else {
        migratedFilters.year = `${filters.as_ylo}-${filters.as_yhi}`;
      }
    } else if (filters.as_ylo) {
      migratedFilters.year = `${filters.as_ylo}-${new Date().getFullYear()}`;
    } else if (filters.as_yhi) {
      migratedFilters.year = `2000-${filters.as_yhi}`;
    }
  }
  
  // Primary Scraping 到其他数据源的迁移
  if (fromSource === 'primaryScraping' && toSource === 'googleScholar') {
    if (filters.start_year) migratedFilters.as_ylo = filters.start_year;
    if (filters.end_year) migratedFilters.as_yhi = filters.end_year;
    if (filters.language) migratedFilters.language = filters.language;
  }
  
  if (fromSource === 'primaryScraping' && toSource === 'semantic') {
    if (filters.start_year && filters.end_year) {
      if (filters.start_year === filters.end_year) {
        migratedFilters.year = filters.start_year;
      } else {
        migratedFilters.year = `${filters.start_year}-${filters.end_year}`;
      }
    } else if (filters.start_year) {
      migratedFilters.year = `${filters.start_year}-${new Date().getFullYear()}`;
    } else if (filters.end_year) {
      migratedFilters.year = `2000-${filters.end_year}`;
    }
  }
  
  // 从其他数据源到 Primary Scraping 的迁移
  if (fromSource === 'googleScholar' && toSource === 'primaryScraping') {
    if (filters.as_ylo) migratedFilters.start_year = filters.as_ylo;
    if (filters.as_yhi) migratedFilters.end_year = filters.as_yhi;
    if (filters.language) migratedFilters.language = filters.language;
  }
  
  if (fromSource === 'semantic' && toSource === 'primaryScraping') {
    if (filters.year) {
      const yearMatch = filters.year.match(/(\d{4})-(\d{4})/);
      if (yearMatch) {
        migratedFilters.start_year = yearMatch[1];
        migratedFilters.end_year = yearMatch[2];
      } else {
        const singleYear = filters.year.match(/\d{4}/);
        if (singleYear) {
          migratedFilters.start_year = singleYear[0];
          migratedFilters.end_year = singleYear[0];
        }
      }
    }
  }
  
  return migratedFilters;
}; 