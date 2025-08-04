import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiDownload, FiTrash2, FiRefreshCw, FiEye, FiEyeOff, FiInfo, FiAlertCircle } from 'react-icons/fi';
import apiLogger from '../../utils/apiLogger';
import IPLocationDisplay from '../IPLocationDisplay';
import ipGeoService from '../../utils/ipGeoService';

const LogsContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  overflow: hidden;
  height: calc(100vh - 200px); /* 适应屏幕高度，减去顶部导航和边距 */
  display: flex;
  flex-direction: column;
`;

const LogsHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  flex-shrink: 0; /* 防止头部被压缩 */
`;

const LogsTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const LogsActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  background: ${props => props.$danger ? '#dc3545' : '#667eea'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$danger ? '#c82333' : '#5a6fd8'};
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorAlert = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .error-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .close-button {
    background: none;
    border: none;
    color: #721c24;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background: rgba(114, 28, 36, 0.1);
    }
  }
`;

const StatsContainer = styled.div`
  padding: 20px 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  flex-shrink: 0; /* 防止统计区域被压缩 */
`;

const StatCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.$color || '#2c3e50'};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FiltersContainer = styled.div`
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0; /* 防止过滤器被压缩 */
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #495057;
  font-weight: 500;
`;

const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  min-width: 200px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const LogsTable = styled.div`
  flex: 1; /* 占用剩余空间 */
  overflow-y: auto;
  min-height: 0; /* 允许容器缩小 */
  
  /* 自定义滚动条 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

const LogTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const LogTableHeader = styled.th`
  background: #f8f9fa;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const LogTableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const LogTableCell = styled.td`
  padding: 12px 16px;
  font-size: 13px;
  color: #495057;
  vertical-align: top;
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  cursor: help;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
  font-size: 16px;
`;

const LogsModule = () => {
  const [logs, setLogs] = useState([]);
  const [filterDataSource, setFilterDataSource] = useState('');
  const [filterSuccess, setFilterSuccess] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 自动清除错误提示
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // 加载日志数据
  const loadLogs = async () => {
    setLoading(true);
    try {
      const allLogs = await apiLogger.getServerLogs();
      setLogs(allLogs);
      setError('');
      
      // 预加载IP地理位置信息
      if (allLogs.length > 0) {
        const ips = allLogs.map(log => log.ip).filter(ip => ip);
        ipGeoService.preloadIPs(ips);
      }
    } catch (error) {
      console.error('加载日志失败:', error);
      setLogs([]);
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
    
    // 搜索过滤：在API名称、错误信息、额外信息中搜索
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const matchesApi = log.api?.toLowerCase().includes(searchLower);
      const matchesError = log.errorMessage?.toLowerCase().includes(searchLower);
      const matchesExtra = JSON.stringify(log.extra || {}).toLowerCase().includes(searchLower);
      const matchesIP = log.ip?.toLowerCase().includes(searchLower);
      
      if (!matchesApi && !matchesError && !matchesExtra && !matchesIP) {
        return false;
      }
    }
    
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
    if (!window.confirm('⚠️ 危险操作：确定要清空所有日志吗？此操作不可撤销。')) {
      return;
    }
    
    const confirmCode = window.prompt(
      '🔐 安全验证：请输入确认码 "DELETE_ALL_LOGS" 来确认清空操作：\n\n' +
      '注意：此操作将永久删除所有API调用日志，无法恢复！'
    );
    
    if (confirmCode !== 'DELETE_ALL_LOGS') {
      alert('❌ 确认码错误，操作已取消。');
      return;
    }
    
    if (!window.confirm('🚨 最终确认：您即将删除所有日志数据，确定继续吗？')) {
      return;
    }

    setLoading(true);
    setError('');
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

  // 获取数据源显示名称
  const getDataSourceDisplayName = (source) => {
    const displayNames = {
      'primaryScraping': 'Primary Scraping',
      'semanticScholar': 'Semantic Scholar',
      'googleScholar': 'Google Scholar',
      'ai': 'AI服务'
    };
    return displayNames[source] || source;
  };

  return (
    <LogsContainer>
      <LogsHeader>
        <LogsTitle>
          <FiInfo size={20} />
          API调用日志
        </LogsTitle>
        <LogsActions>
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
          <ActionButton onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            {showDetails ? '隐藏详情' : '显示详情'}
          </ActionButton>
          <ActionButton $danger onClick={handleClearLogs} disabled={loading}>
            <FiTrash2 size={16} />
            清空日志
          </ActionButton>
        </LogsActions>
      </LogsHeader>

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
            <FiAlertCircle size={16} />
          </button>
        </ErrorAlert>
      )}

      <StatsContainer>
        <StatCard>
          <StatNumber>{filteredStats.totalRequests || 0}</StatNumber>
          <StatLabel>总请求数</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber $color="#28a745">{filteredStats.successfulRequests || 0}</StatNumber>
          <StatLabel>成功请求</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber $color="#dc3545">{filteredStats.failedRequests || 0}</StatNumber>
          <StatLabel>失败请求</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber $color="#ffc107">{filteredStats.emptyRequests || 0}</StatNumber>
          <StatLabel>空响应</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{filteredStats.averageResponseTime || 0}ms</StatNumber>
          <StatLabel>平均响应时间</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber $color="#17a2b8">
            {filteredStats.totalRequests ? ((filteredStats.successfulRequests / filteredStats.totalRequests) * 100).toFixed(1) : 0}%
          </StatNumber>
          <StatLabel>成功率</StatLabel>
        </StatCard>
      </StatsContainer>

      <FiltersContainer>
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
        <SearchInput
          placeholder="搜索API或错误信息..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span style={{ color: '#666', fontSize: '14px' }}>
          显示 {filteredLogs.length} / {logs.length} 条记录
        </span>
      </FiltersContainer>

      <LogsTable>
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
                  <div style={{ fontSize: '11px', color: '#6c757d' }}>{log.time}</div>
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
                    <div style={{ fontSize: '11px', color: '#6c757d' }}>
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
          <EmptyState>
            {loading ? '正在加载日志...' : '暂无日志记录'}
          </EmptyState>
        )}
      </LogsTable>
    </LogsContainer>
  );
};

export default LogsModule; 