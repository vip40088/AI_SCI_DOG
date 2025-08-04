import axios from 'axios';
import { API_ENDPOINTS } from '../config/apiConfig';

// 数据源名称映射函数
const getDataSourceDisplayName = (dataSource) => {
  const nameMap = {
    'semantic': '3rd api',
    'googleScholar': 'Google Scholar',
    'primaryScraping': 'Primary Scraping Scholar'
  };
  return nameMap[dataSource] || dataSource;
};

// 日志缓冲管理器
class LogBuffer {
  constructor(maxSize = 50, flushInterval = 2000) {
    this.buffer = [];
    this.maxSize = maxSize;
    this.flushInterval = flushInterval;
    this.isProcessing = false;
    this.retryQueue = [];
    
    // 定期刷新缓冲区
    this.intervalId = setInterval(() => {
      this.flush();
    }, this.flushInterval);
  }

  // 添加日志到缓冲区
  add(logEntry) {
    this.buffer.push(logEntry);
    
    // 如果缓冲区满了，立即刷新
    if (this.buffer.length >= this.maxSize) {
      this.flush();
    }
  }

  // 刷新缓冲区到服务器
  async flush() {
    if (this.buffer.length === 0 || this.isProcessing) return;
    
    this.isProcessing = true;
    const logsToSend = [...this.buffer];
    this.buffer = [];

    try {
      await axios.post(API_ENDPOINTS.LOGS_BATCH, {
        logs: logsToSend
      }, {
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // 如果有重试队列，也一起发送
      if (this.retryQueue.length > 0) {
        await this.processRetryQueue();
      }
    } catch (error) {
      // 发送失败，将日志加入重试队列
      this.retryQueue.push(...logsToSend);
      
      // 限制重试队列大小，避免内存泄漏
      if (this.retryQueue.length > 500) {
        this.retryQueue = this.retryQueue.slice(-200);
        console.warn('日志重试队列已清理，保留最新200条');
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.warn('批量日志发送失败:', error.message);
      }
    } finally {
      this.isProcessing = false;
    }
  }

  // 处理重试队列
  async processRetryQueue() {
    if (this.retryQueue.length === 0) return;
    
    const retryLogs = [...this.retryQueue];
    this.retryQueue = [];
    
    try {
      await axios.post(API_ENDPOINTS.LOGS_BATCH, {
        logs: retryLogs
      }, {
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      // 重试失败，重新加入队列（但不无限重试）
      if (retryLogs.length < 100) {
        this.retryQueue.push(...retryLogs);
      }
    }
  }

  // 立即刷新所有日志（用于页面卸载时）
  async forceFlush() {
    await this.flush();
    
    // 如果还有重试队列，再次尝试
    if (this.retryQueue.length > 0) {
      await this.processRetryQueue();
    }
  }

  // 清理资源
  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.forceFlush(); // 最后一次刷新
  }

  // 获取缓冲区状态（用于监控）
  getBufferStatus() {
    return {
      bufferSize: this.buffer.length,
      retryQueueSize: this.retryQueue.length,
      isProcessing: this.isProcessing,
      maxSize: this.maxSize
    };
  }
}

class ApiLogger {
  constructor() {
    this.userIP = null;
    this.logBuffer = new LogBuffer();
    this.initIP();
    
    // 页面卸载时强制刷新日志
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.logBuffer.forceFlush();
      });
    }
  }

  // 初始化获取用户IP地址
  async initIP() {
    try {
      // IP获取API配置 - 获取用户外网IP地址
      // 可对接: httpbin.org、ifconfig.me、ipify.org等IP查询服务
      // 官方地址: https://httpbin.org/ip
      const response = await axios.get('https://api.example-ip-query.com/ip', {
        timeout: 5000
      });
      this.userIP = response.data.origin;
    } catch (error) {
      // 降级方案：使用其他可用的IP服务
      // 官方地址: https://ifconfig.me/ip
      try {
        const response = await axios.get('https://api.example-ip-fallback.com/ip', {
          timeout: 5000
        });
        this.userIP = response.data.trim();
      } catch (fallbackError) {
        // 最终降级：使用本地IP标识
        this.userIP = 'local_user';
        console.warn('无法获取外网IP，使用本地标识');
      }
    }
  }

  // 记录API调用日志（主要方法）- 使用缓冲机制
  logApiCall(apiName, dataSource, success, responseTime, errorMessage = null, additionalInfo = {}, resultStatus = null) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('zh-CN'),
      time: new Date().toLocaleTimeString('zh-CN'),
      ip: this.userIP || 'unknown',
      api: apiName,
      dataSource: dataSource,
      success: success,
      responseTime: responseTime,
      errorMessage: errorMessage,
      additionalInfo: additionalInfo,
      resultStatus: resultStatus, // 'empty' 表示空响应, 'no_results' 表示无结果, null 表示正常
      userAgent: navigator.userAgent.substring(0, 200), // 限制长度
      url: window.location.href
    };

    // 添加到缓冲区而不是立即发送
    this.logBuffer.add(logEntry);
  }

  // 批量记录日志（用于批量操作优化）
  logBatchOperation(operationType, totalCount, successCount, failedCount, averageResponseTime, errors = []) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('zh-CN'),
      time: new Date().toLocaleTimeString('zh-CN'),
      ip: this.userIP || 'unknown',
      api: `batch_${operationType}`,
      dataSource: 'ai',
      success: failedCount === 0,
      responseTime: averageResponseTime,
      errorMessage: errors.length > 0 ? `${errors.length} errors: ${errors.slice(0, 3).join('; ')}` : null,
      additionalInfo: {
        totalCount,
        successCount,
        failedCount,
        batchType: operationType,
        errorSample: errors.slice(0, 5), // 保存前5个错误样本
        bufferStatus: this.logBuffer.getBufferStatus() // 添加缓冲区状态
      },
      resultStatus: null,
      userAgent: navigator.userAgent.substring(0, 200),
      url: window.location.href
    };

    this.logBuffer.add(logEntry);
  }

  // 强制刷新日志缓冲区（用于关键操作后）
  async flushLogs() {
    await this.logBuffer.forceFlush();
  }

  // 获取日志缓冲区状态
  getLoggerStatus() {
    return {
      userIP: this.userIP,
      bufferStatus: this.logBuffer.getBufferStatus()
    };
  }

  // 发送日志到服务器（保留作为降级方案）
  sendToServer(logEntry) {
    // 使用 fire-and-forget 模式，不阻塞用户操作
    axios.post(API_ENDPOINTS.LOGS, logEntry, {
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => {
      // 静默处理错误，不影响用户体验
      if (process.env.NODE_ENV === 'development') {
        console.warn('日志发送失败:', error.message);
      }
    });
  }

  // 管理员获取服务器日志
  async getServerLogs() {
    try {
      const response = await axios.get(API_ENDPOINTS.LOGS, {
        timeout: 20000, // 增加到20秒
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
      
      // 检查响应格式
      if (response.data && typeof response.data === 'object') {
        return response.data.success ? response.data.data : response.data;
      }
      return [];
    } catch (error) {
      console.error('获取服务器日志失败:', error);
      
      // 提供更详细的错误信息
      if (error.code === 'ECONNABORTED') {
        throw new Error('请求超时，请检查网络连接或联系管理员');
      } else if (error.response) {
        throw new Error(`服务器错误 (${error.response.status}): ${error.response.statusText}`);
      } else if (error.request) {
        throw new Error('无法连接到服务器，请检查网络连接');
      } else {
        throw new Error('获取日志时发生未知错误');
      }
    }
  }

  // 管理员清空服务器日志
  async clearServerLogs() {
    try {
      const response = await axios.delete(API_ENDPOINTS.LOGS, {
        timeout: 10000, // 增加到10秒
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      // 检查响应格式
      if (response.data && typeof response.data === 'object') {
        return response.data.success;
      }
      return true; // 如果没有明确的success字段，假设成功
    } catch (error) {
      console.error('清空服务器日志失败:', error);
      
      // 提供更详细的错误信息
      if (error.code === 'ECONNABORTED') {
        throw new Error('清空日志请求超时，请检查网络连接');
      } else if (error.response) {
        throw new Error(`服务器错误 (${error.response.status}): ${error.response.statusText}`);
      } else if (error.request) {
        throw new Error('无法连接到服务器，请检查网络连接');
      } else {
        throw new Error('清空日志时发生未知错误');
      }
    }
  }

  // 导出日志为JSON文件
  exportLogsAsJSON(logs) {
    try {
      const dataStr = JSON.stringify(logs, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataBlob);
      link.download = `api_logs_${new Date().toISOString().split('T')[0]}.json`;
      link.click();
    } catch (error) {
      console.error('导出日志失败:', error);
    }
  }

  // 导出日志为CSV文件
  exportLogsAsCSV(logs) {
    try {
      if (logs.length === 0) {
        alert('没有日志数据可导出');
        return;
      }

      const headers = ['时间戳', 'IP地址', '数据源', 'API接口', '是否成功', '响应时间(ms)', '错误信息'];
      const csvContent = [
        headers.join(','),
        ...logs.map(log => [
          log.timestamp,
          log.ip,
          getDataSourceDisplayName(log.dataSource), // 使用映射后的名称
          log.api,
          log.success ? '成功' : '失败',
          log.responseTime,
          log.errorMessage || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
      ].join('\n');

      const dataBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataBlob);
      link.download = `api_logs_${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
    } catch (error) {
      console.error('导出CSV日志失败:', error);
    }
  }

  // 获取统计信息
  getStatistics(logs) {
    const stats = {
      totalRequests: logs.length,
      successfulRequests: logs.filter(log => log.success && log.resultStatus !== 'empty').length,
      failedRequests: logs.filter(log => !log.success).length,
      emptyRequests: logs.filter(log => log.success && log.resultStatus === 'empty').length, // 成功但空响应
      averageResponseTime: 0,
      dataSourceStats: {},
      apiStats: {},
      hourlyStats: {},
      dailyStats: {}
    };

    if (logs.length > 0) {
      // 计算平均响应时间
      const totalResponseTime = logs.reduce((sum, log) => sum + log.responseTime, 0);
      stats.averageResponseTime = Math.round(totalResponseTime / logs.length);

      // 按数据源统计
      logs.forEach(log => {
        if (!stats.dataSourceStats[log.dataSource]) {
          stats.dataSourceStats[log.dataSource] = { total: 0, success: 0, failed: 0 };
        }
        stats.dataSourceStats[log.dataSource].total++;
        if (log.success) {
          stats.dataSourceStats[log.dataSource].success++;
        } else {
          stats.dataSourceStats[log.dataSource].failed++;
        }
      });

      // 按API接口统计
      logs.forEach(log => {
        if (!stats.apiStats[log.api]) {
          stats.apiStats[log.api] = { total: 0, success: 0, failed: 0 };
        }
        stats.apiStats[log.api].total++;
        if (log.success) {
          stats.apiStats[log.api].success++;
        } else {
          stats.apiStats[log.api].failed++;
        }
      });

      // 按小时统计
      logs.forEach(log => {
        const hour = new Date(log.timestamp).getHours();
        if (!stats.hourlyStats[hour]) {
          stats.hourlyStats[hour] = { total: 0, success: 0, failed: 0 };
        }
        stats.hourlyStats[hour].total++;
        if (log.success) {
          stats.hourlyStats[hour].success++;
        } else {
          stats.hourlyStats[hour].failed++;
        }
      });

      // 按日期统计
      logs.forEach(log => {
        const date = log.date;
        if (!stats.dailyStats[date]) {
          stats.dailyStats[date] = { total: 0, success: 0, failed: 0 };
        }
        stats.dailyStats[date].total++;
        if (log.success) {
          stats.dailyStats[date].success++;
        } else {
          stats.dailyStats[date].failed++;
        }
      });
    }

    return stats;
  }
}

// 创建全局单例
const apiLogger = new ApiLogger();

export default apiLogger;