import toast from 'react-hot-toast';

/**
 * Toast工具类 - 提供统一的用户提示功能
 */
class ToastUtils {
  
  // 默认配置
  static defaultConfig = {
    duration: 4000,
    position: 'top-right',
    style: {
      borderRadius: '8px',
      background: '#333',
      color: '#fff',
      fontSize: '14px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      maxWidth: '420px',
    },
  };

  /**
   * 成功提示
   * @param {string} message - 提示消息
   * @param {object} options - 配置选项
   */
  static success(message, options = {}) {
    return toast.success(message, {
      ...this.defaultConfig,
      style: {
        ...this.defaultConfig.style,
        background: '#10b981',
        color: '#fff',
      },
      iconTheme: {
        primary: '#10b981',
        secondary: '#fff',
      },
      ...options
    });
  }

  /**
   * 错误提示
   * @param {string} message - 错误消息
   * @param {object} options - 配置选项
   */
  static error(message, options = {}) {
    return toast.error(message, {
      ...this.defaultConfig,
      duration: 6000, // 错误信息显示时间稍长
      style: {
        ...this.defaultConfig.style,
        background: '#ef4444',
        color: '#fff',
      },
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fff',
      },
      ...options
    });
  }

  /**
   * 警告提示
   * @param {string} message - 警告消息
   * @param {object} options - 配置选项
   */
  static warning(message, options = {}) {
    return toast(message, {
      ...this.defaultConfig,
      icon: '⚠️',
      style: {
        ...this.defaultConfig.style,
        background: '#f59e0b',
        color: '#fff',
      },
      ...options
    });
  }

  /**
   * 信息提示
   * @param {string} message - 信息消息
   * @param {object} options - 配置选项
   */
  static info(message, options = {}) {
    return toast(message, {
      ...this.defaultConfig,
      icon: 'ℹ️',
      style: {
        ...this.defaultConfig.style,
        background: '#3b82f6',
        color: '#fff',
      },
      ...options
    });
  }

  /**
   * 加载中提示
   * @param {string} message - 加载消息
   * @param {object} options - 配置选项
   */
  static loading(message, options = {}) {
    return toast.loading(message, {
      ...this.defaultConfig,
      style: {
        ...this.defaultConfig.style,
        background: '#6b7280',
        color: '#fff',
      },
      ...options
    });
  }

  /**
   * 网络错误提示
   * @param {string} dataSource - 数据源名称
   * @param {string} operation - 操作类型
   * @param {string} errorDetails - 错误详情
   */
  static networkError(dataSource, operation = '搜索', errorDetails = '') {
    const sourceNames = {
      'primaryScraping': 'Primary Scraping',
      'googleScholar': 'Google Scholar',
      'semantic': 'Semantic Scholar'
    };
    
    const sourceName = sourceNames[dataSource] || dataSource;
    let message = `${sourceName} ${operation}失败`;
    
    if (errorDetails.includes('timeout') || errorDetails.includes('超时')) {
      message = `${sourceName} 请求超时，请检查网络连接`;
    } else if (errorDetails.includes('ENOTFOUND') || errorDetails.includes('网络')) {
      message = `无法连接到 ${sourceName}，请检查网络设置`;
    } else if (errorDetails.includes('429')) {
      message = `${sourceName} 请求过于频繁，请稍后再试`;
    } else if (errorDetails.includes('403')) {
      message = `${sourceName} 访问被拒绝，可能是API配置问题`;
    } else if (errorDetails.includes('500') || errorDetails.includes('502') || errorDetails.includes('503')) {
      message = `${sourceName} 服务暂时不可用，请稍后重试`;
    } else if (errorDetails) {
      message = `${sourceName} ${operation}失败: ${errorDetails}`;
    }
    
    return this.error(message, {
      duration: 8000, // 网络错误显示时间更长
    });
  }

  /**
   * API异常提示
   * @param {string} dataSource - 数据源名称
   * @param {string} operation - 操作类型
   * @param {Error} error - 错误对象
   */
  static apiError(dataSource, operation = '搜索', error) {
    console.error(`${dataSource} ${operation} API异常:`, error);
    
    // 提取有用的错误信息
    let errorMessage = error.message || error.toString();
    
    // 简化技术错误信息，让用户更容易理解
    if (errorMessage.includes('ERR_PROXY_CONNECTION_FAILED')) {
      errorMessage = '代理连接失败';
    } else if (errorMessage.includes('ECONNREFUSED')) {
      errorMessage = '服务连接被拒绝';
    } else if (errorMessage.includes('ETIMEDOUT')) {
      errorMessage = '连接超时';
    }
    
    return this.networkError(dataSource, operation, errorMessage);
  }

  /**
   * 数据源切换建议
   * @param {string} currentSource - 当前数据源
   * @param {Array} availableSources - 可用数据源列表
   */
  static suggestAlternativeSource(currentSource, availableSources = []) {
    const sourceNames = {
      'primaryScraping': 'Primary Scraping',
      'googleScholar': 'Google Scholar',
      'semantic': 'Semantic Scholar'
    };
    
    const currentSourceName = sourceNames[currentSource] || currentSource;
    
    // 检查是否有其他可用数据源
    const hasAlternatives = availableSources.filter(source => source !== currentSource).length > 0;
    
    if (hasAlternatives) {
      return this.info(
        `${currentSourceName} 暂时不可用，建议尝试切换到其他数据源`,
        { duration: 6000 }
      );
    }
  }

  /**
   * 自定义提示
   * @param {string} message - 提示消息
   * @param {object} options - 配置选项
   */
  static custom(message, options = {}) {
    return toast(message, {
      ...this.defaultConfig,
      ...options
    });
  }

  /**
   * 关闭所有toast
   */
  static dismiss() {
    toast.dismiss();
  }

  /**
   * 关闭指定toast
   * @param {string} toastId - toast ID
   */
  static dismissById(toastId) {
    toast.dismiss(toastId);
  }
}

export default ToastUtils; 