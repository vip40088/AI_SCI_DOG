import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiDownload, FiTrash2, FiRefreshCw, FiEye, FiEyeOff, FiInfo, FiAlertCircle, FiX } from 'react-icons/fi';
import apiLogger from '../utils/apiLogger';
import IPLocationDisplay from './IPLocationDisplay';
import ipGeoService from '../utils/ipGeoService';

const LogViewerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LogViewerContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  height: 85%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LogViewerHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogViewerTitle = styled.h2`
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogViewerActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: ${props => props.$danger ? '#dc3545' : '#007acc'};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.$danger ? '#c82333' : '#005fa3'};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  &:hover {
    background: #5a6268;
  }
`;

const LogViewerStats = styled.div`
  padding: 15px 20px;
  background: #f8f9fa;
  border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color || '#333'};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const LogViewerTable = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const LogTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const LogTableHeader = styled.th`
  background: #f8f9fa;
  padding: 12px 8px;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  color: #495057;
  position: sticky;
  top: 0;
`;

const LogTableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }

  &:hover {
    background: #e9ecef;
  }
`;

const LogTableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #dee2e6;
  vertical-align: top;
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.$success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.$success ? '#155724' : '#721c24'};
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FilterSection = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterLabel = styled.label`
  font-size: 14px;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FilterSelect = styled.select`
  padding: 6px 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
`;

const ErrorAlert = styled.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 12px 20px;
  margin: 0 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  
  .error-content {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
  }
  
  .alert-icon {
    color: #dc3545;
    flex-shrink: 0;
  }
  
  .close-button {
    background: none;
    border: none;
    color: #721c24;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;
    
    &:hover {
      background: rgba(114, 28, 36, 0.1);
    }
  }
`;

// 数据源名称映射函数
const getDataSourceDisplayName = (dataSource) => {
  const nameMap = {
    'semantic': '3rd api',
    'googleScholar': 'Google Scholar',
    'primaryScraping': 'Primary Scraping Scholar'
  };
  return nameMap[dataSource] || dataSource;
};

const ApiLogViewer = ({ onClose }) => {
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({});
  const [filterDataSource, setFilterDataSource] = useState('');
  const [filterSuccess, setFilterSuccess] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // 自动清除错误提示
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 8000); // 8秒后自动关闭
      return () => clearTimeout(timer);
    }
  }, [error]);

  // 加载日志数据
  const loadLogs = async () => {
    setLoading(true);
    try {
      const allLogs = await apiLogger.getServerLogs();
      setLogs(allLogs);
      setError(''); // 清除之前的错误
      
      // 预加载IP地理位置信息
      if (allLogs.length > 0) {
        const ips = allLogs.map(log => log.ip).filter(ip => ip);
        ipGeoService.preloadIPs(ips);
      }
    } catch (error) {
      console.error('加载日志失败:', error);
      setLogs([]);
      setStats({});
      setError(error.message || '加载日志失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  // 过滤日志
  const filteredLogs = logs.filter(log => {
    if (filterDataSource && log.dataSource !== filterDataSource) return false;
    if (filterSuccess === 'success' && !log.success) return false;
    if (filterSuccess === 'failed' && log.success) return false;
    if (filterSuccess === 'empty' && log.resultStatus !== 'empty') return false;
    return true;
  });

  // 基于筛选后的日志计算统计数据
  const filteredStats = apiLogger.getStatistics(filteredLogs);

  // 导出为JSON
  const handleExportJSON = () => {
    apiLogger.exportLogsAsJSON(logs);
  };

  // 导出为CSV
  const handleExportCSV = () => {
    apiLogger.exportLogsAsCSV(logs);
  };

  // 清空日志 - 增强安全验证
  const handleClearLogs = async () => {
    // 第一步：基础确认
    if (!window.confirm('⚠️ 危险操作：确定要清空所有日志吗？此操作不可撤销。')) {
      return;
    }
    
    // 第二步：二次验证 - 要求输入特殊确认码
    const confirmCode = window.prompt(
      '🔐 安全验证：请输入确认码 "DELETE_ALL_LOGS" 来确认清空操作：\n\n' +
      '注意：此操作将永久删除所有API调用日志，无法恢复！'
    );
    
    if (confirmCode !== 'DELETE_ALL_LOGS') {
      alert('❌ 确认码错误，操作已取消。');
      return;
    }
    
    // 第三步：最终确认
    if (!window.confirm('🚨 最终确认：您即将删除所有日志数据，确定继续吗？')) {
      return;
    }

    setLoading(true);
    setError(''); // 清除之前的错误
    try {
      console.warn('🗑️ 管理员执行日志清空操作:', new Date().toISOString());
      const success = await apiLogger.clearServerLogs();
      if (success) {
        console.log('✅ 日志清空成功');
        await loadLogs();
        alert('✅ 日志已清空完成');
      } else {
        setError('清空日志失败，请稍后重试');
      }
    } catch (error) {
      console.error('清空日志失败:', error);
      setError(error.message || '清空日志失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  // 刷新日志
  const handleRefreshLogs = () => {
    loadLogs();
  };

  // 获取数据源列表
  const dataSources = [...new Set(logs.map(log => log.dataSource))].sort();

  return (
    <LogViewerContainer onClick={(e) => e.target === e.currentTarget && onClose()}>
      <LogViewerContent onClick={(e) => e.stopPropagation()}>
        <LogViewerHeader>
          <LogViewerTitle>
            <FiInfo size={24} />
            API调用日志 (服务器)
          </LogViewerTitle>
          <LogViewerActions>
            <ActionButton onClick={handleRefreshLogs} disabled={loading}>
              <FiRefreshCw size={16} />
              {loading ? '加载中...' : '刷新'}
            </ActionButton>
            <ActionButton onClick={handleExportJSON}>
              <FiDownload size={16} />
              导出JSON
            </ActionButton>
            <ActionButton onClick={handleExportCSV}>
              <FiDownload size={16} />
              导出CSV
            </ActionButton>
            <ActionButton 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              {showDetails ? '隐藏详情' : '显示详情'}
            </ActionButton>
            {/* 清空日志按钮 - 仅在开发环境或特殊配置下显示 */}
            {(process.env.NODE_ENV === 'development' || 
              process.env.REACT_APP_ENABLE_LOG_DELETE === 'true' ||
              window.location.hostname === 'localhost') && (
              <ActionButton $danger onClick={handleClearLogs} disabled={loading}>
                <FiTrash2 size={16} />
                🗑️ 危险：清空日志
              </ActionButton>
            )}
            <CloseButton onClick={onClose}>
              关闭
            </CloseButton>
          </LogViewerActions>
        </LogViewerHeader>

        {error && (
          <ErrorAlert>
            <div className="error-content">
              <FiAlertCircle size={16} className="alert-icon" />
              <span>{error}</span>
            </div>
            <button 
              className="close-button" 
              onClick={() => setError('')}
              title="关闭错误提示"
            >
              <FiX size={16} />
            </button>
          </ErrorAlert>
        )}

        <LogViewerStats>
          <StatItem>
            <StatValue>{filteredStats.totalRequests || 0}</StatValue>
            <StatLabel>总请求数</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue color="#28a745">{filteredStats.successfulRequests || 0}</StatValue>
            <StatLabel>成功请求</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue color="#dc3545">{filteredStats.failedRequests || 0}</StatValue>
            <StatLabel>失败请求</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue color="#ffc107">{filteredStats.emptyRequests || 0}</StatValue>
            <StatLabel>空响应</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{filteredStats.averageResponseTime || 0}ms</StatValue>
            <StatLabel>平均响应时间</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue color="#17a2b8">{filteredStats.totalRequests ? ((filteredStats.successfulRequests / filteredStats.totalRequests) * 100).toFixed(1) : 0}%</StatValue>
            <StatLabel>成功率</StatLabel>
          </StatItem>
        </LogViewerStats>

        <FilterSection>
          <FilterLabel>
            数据源筛选:
            <FilterSelect 
              value={filterDataSource} 
              onChange={(e) => setFilterDataSource(e.target.value)}
            >
              <option value="">全部数据源</option>
              {dataSources.map(source => (
                <option key={source} value={source}>{getDataSourceDisplayName(source)}</option>
              ))}
            </FilterSelect>
          </FilterLabel>
          <FilterLabel>
            状态筛选:
            <FilterSelect 
              value={filterSuccess} 
              onChange={(e) => setFilterSuccess(e.target.value)}
            >
              <option value="">全部状态</option>
              <option value="success">成功</option>
              <option value="failed">失败</option>
              <option value="empty">空响应</option>
            </FilterSelect>
          </FilterLabel>
          <span style={{ color: '#666', fontSize: '14px' }}>
            显示 {filteredLogs.length} / {logs.length} 条记录
          </span>
        </FilterSection>

        <LogViewerTable>
          <LogTable>
            <thead>
              <tr>
                <LogTableHeader>时间</LogTableHeader>
                <LogTableHeader>地理位置</LogTableHeader>
                <LogTableHeader>数据源</LogTableHeader>
                <LogTableHeader>API</LogTableHeader>
                <LogTableHeader>状态</LogTableHeader>
                <LogTableHeader>响应时间</LogTableHeader>
                {showDetails && <LogTableHeader>错误信息</LogTableHeader>}
                {showDetails && <LogTableHeader>额外信息</LogTableHeader>}
              </tr>
            </thead>
            <tbody>
              {filteredLogs.slice().reverse().map((log, index) => (
                <LogTableRow key={index}>
                  <LogTableCell>
                    <div>{log.date}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{log.time}</div>
                  </LogTableCell>
                  <LogTableCell>
                    <IPLocationDisplay ip={log.ip} />
                  </LogTableCell>
                  <LogTableCell>{getDataSourceDisplayName(log.dataSource)}</LogTableCell>
                  <LogTableCell>{log.api}</LogTableCell>
                  <LogTableCell>
                    {log.resultStatus === 'empty' ? (
                      <StatusBadge style={{ background: '#fff3cd', color: '#856404' }}>
                        空响应
                      </StatusBadge>
                    ) : (
                      <StatusBadge $success={log.success}>
                        {log.success ? '成功' : '失败'}
                      </StatusBadge>
                    )}
                  </LogTableCell>
                  <LogTableCell>{log.responseTime}ms</LogTableCell>
                  {showDetails && (
                    <LogTableCell>
                      {log.errorMessage && (
                        <ErrorMessage title={log.errorMessage}>
                          {log.errorMessage}
                        </ErrorMessage>
                      )}
                    </LogTableCell>
                  )}
                  {showDetails && (
                    <LogTableCell>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {Object.entries(log.additionalInfo || {}).map(([key, value]) => (
                          <div key={key}>
                            <strong>{key}:</strong> {String(value).substring(0, 50)}
                            {String(value).length > 50 ? '...' : ''}
                          </div>
                        ))}
                      </div>
                    </LogTableCell>
                  )}
                </LogTableRow>
              ))}
            </tbody>
          </LogTable>
          {filteredLogs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              暂无日志记录
            </div>
          )}
        </LogViewerTable>
      </LogViewerContent>
    </LogViewerContainer>
  );
};

export default ApiLogViewer; 