import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiSave, FiDatabase, FiKey, FiEye, FiEyeOff, FiCheck, FiX } from 'react-icons/fi';

const SettingsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const SettingsCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e5e5e5;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
`;

const CardBody = styled.div`
  padding: 24px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`;

const SettingLabel = styled.div`
  .title {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 4px;
  }
  
  .description {
    font-size: 13px;
    color: #6c757d;
    line-height: 1.4;
  }
`;

const SettingControl = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToggleSwitch = styled.button`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: ${props => props.$active ? '#28a745' : '#e9ecef'};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: ${props => props.$active ? '26px' : '2px'};
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    opacity: 0.8;
  }
`;

const InputField = styled.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  width: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;



const SaveButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #218838;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

const DevelopmentNotice = styled.div`
  grid-column: 1 / -1;
  padding: 30px;
  text-align: center;
  color: #6c757d;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  border: 1px solid #e5e5e5;

  .notice-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  .notice-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #495057;
  }

  .notice-text {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const PasswordInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
`;

const PasswordField = styled.input`
  padding: 8px 40px 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &.success {
    border-color: #28a745;
  }

  &.error {
    border-color: #dc3545;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #495057;
  }
`;

const StatusIcon = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  color: ${props => props.$status === 'success' ? '#28a745' : props.$status === 'error' ? '#dc3545' : '#6c757d'};
`;

const TestButton = styled.button`
  background: #17a2b8;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
  margin-left: 8px;

  &:hover {
    background: #138496;
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 8px;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 8px;
`;

const SettingsModule = () => {
  const [settings, setSettings] = useState({
    // 数据管理
    logRetentionDays: 30,
    maxLogSize: 3000,
    autoCleanup: true,
  });

  // 密钥管理状态
  const [apiKeys, setApiKeys] = useState({
    aiApiKey: '',
    semanticScholarKey: '',
    scrapingDogKey: ''
  });

  // 用于编辑的原始密钥（不脱敏）
  const [editingKeys, setEditingKeys] = useState({
    aiApiKey: '',
    semanticScholarKey: '',
    scrapingDogKey: ''
  });

  // 编辑模式状态
  const [editingMode, setEditingMode] = useState({
    aiApiKey: false,
    semanticScholarKey: false,
    scrapingDogKey: false
  });

  const [keyVisibility, setKeyVisibility] = useState({
    aiApiKey: false,
    semanticScholarKey: false,
    scrapingDogKey: false
  });

  const [keyStatus, setKeyStatus] = useState({
    aiApiKey: 'unknown',
    semanticScholarKey: 'unknown',
    scrapingDogKey: 'unknown'
  });

  const [testingKeys, setTestingKeys] = useState({
    aiApiKey: false,
    semanticScholarKey: false,
    scrapingDogKey: false
  });

  const [keyMessages, setKeyMessages] = useState({
    aiApiKey: '',
    semanticScholarKey: '',
    scrapingDogKey: ''
  });

  // 加载现有密钥配置和系统设置
  useEffect(() => {
    loadApiKeys();
    loadSystemSettings();
  }, []);

  const loadApiKeys = async () => {
    try {
      const token = sessionStorage.getItem('admin_token');
      const headers = {
        'Content-Type': 'application/json'
      };
      
      // 只有当token存在且不太长时才添加Authorization头
      if (token && token.length < 1000) {
        headers['Authorization'] = `Bearer ${token}`;
      } else if (token && token.length >= 1000) {
        console.warn('Token太长，可能导致请求头过大，生成新token');
        // 生成一个简单的token
        const newToken = 'admin_' + Date.now();
        sessionStorage.setItem('admin_token', newToken);
        headers['Authorization'] = `Bearer ${newToken}`;
      }
      
      // 获取脱敏密钥用于显示
      const response = await fetch('/api/admin/keys', {
        method: 'GET',
        headers
      });

      if (response.ok) {
        const maskedData = await response.json();
        setApiKeys(maskedData);
        
        // 对于已有的密钥，初始状态显示为成功
        Object.keys(maskedData).forEach(key => {
          if (maskedData[key]) {
            setKeyStatus(prev => ({ ...prev, [key]: 'success' }));
          }
        });
      }
    } catch (error) {
      console.error('加载密钥配置失败:', error);
    }
  };

  // 加载原始密钥用于编辑
  const loadEditingKeys = async () => {
    try {
      const token = sessionStorage.getItem('admin_token');
      const headers = {
        'Content-Type': 'application/json'
      };
      
      if (token && token.length < 1000) {
        headers['Authorization'] = `Bearer ${token}`;
      } else if (token && token.length >= 1000) {
        const newToken = 'admin_' + Date.now();
        sessionStorage.setItem('admin_token', newToken);
        headers['Authorization'] = `Bearer ${newToken}`;
      }
      
      // 获取原始密钥用于编辑
      const response = await fetch('/api/admin/keys/edit', {
        method: 'GET',
        headers
      });

      if (response.ok) {
        const originalData = await response.json();
        setEditingKeys(originalData);
      }
    } catch (error) {
      console.error('加载编辑密钥失败:', error);
    }
  };

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleInputChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 开始编辑密钥
  const startEditingKey = async (keyType) => {
    // 加载原始密钥
    await loadEditingKeys();
    
    setEditingMode(prev => ({
      ...prev,
      [keyType]: true
    }));
    
    // 重置状态
    setKeyStatus(prev => ({ ...prev, [keyType]: 'unknown' }));
    setKeyMessages(prev => ({ ...prev, [keyType]: '' }));
  };

  // 取消编辑
  const cancelEditingKey = (keyType) => {
    setEditingMode(prev => ({
      ...prev,
      [keyType]: false
    }));
    
    // 恢复显示状态
    loadApiKeys();
  };

  const handleKeyChange = (keyType, value) => {
    setEditingKeys(prev => ({
      ...prev,
      [keyType]: value
    }));

    // 重置状态
    setKeyStatus(prev => ({ ...prev, [keyType]: 'unknown' }));
    setKeyMessages(prev => ({ ...prev, [keyType]: '' }));
  };

  const toggleKeyVisibility = (keyType) => {
    setKeyVisibility(prev => ({
      ...prev,
      [keyType]: !prev[keyType]
    }));
  };

  const testApiKey = async (keyType) => {
    const keyToTest = editingMode[keyType] ? editingKeys[keyType] : editingKeys[keyType];
    
    if (!keyToTest || keyToTest.trim() === '') {
      setKeyStatus(prev => ({ ...prev, [keyType]: 'error' }));
      setKeyMessages(prev => ({ ...prev, [keyType]: '请先输入密钥' }));
      return;
    }

    setTestingKeys(prev => ({ ...prev, [keyType]: true }));
    setKeyMessages(prev => ({ ...prev, [keyType]: '' }));

    try {
      const token = sessionStorage.getItem('admin_token') || 'admin_' + Date.now();
      const response = await fetch('/api/admin/keys/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          keyType: keyType,
          apiKey: keyToTest
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setKeyStatus(prev => ({ ...prev, [keyType]: 'success' }));
        setKeyMessages(prev => ({ ...prev, [keyType]: result.message || '密钥验证成功' }));
      } else {
        setKeyStatus(prev => ({ ...prev, [keyType]: 'error' }));
        setKeyMessages(prev => ({ ...prev, [keyType]: result.message || '密钥验证失败' }));
      }
    } catch (error) {
      setKeyStatus(prev => ({ ...prev, [keyType]: 'error' }));
      setKeyMessages(prev => ({ ...prev, [keyType]: `验证失败: ${error.message}` }));
    } finally {
      setTestingKeys(prev => ({ ...prev, [keyType]: false }));
    }
  };

  const saveApiKeys = async () => {
    try {
      const token = sessionStorage.getItem('admin_token') || 'admin_' + Date.now();
      const response = await fetch('/api/admin/keys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingKeys)
      });

      if (response.ok) {
        alert('密钥配置保存成功！');
        
        // 退出所有编辑模式
        setEditingMode({
          aiApiKey: false,
          semanticScholarKey: false,
          scrapingDogKey: false
        });
        
        // 刷新显示状态
        loadApiKeys();
      } else {
        const error = await response.json();
        alert(`保存失败: ${error.message}`);
      }
    } catch (error) {
      alert(`保存失败: ${error.message}`);
    }
  };

  // 加载系统设置
  const loadSystemSettings = async () => {
    try {
      const token = sessionStorage.getItem('admin_token');
      const headers = {
        'Content-Type': 'application/json'
      };
      
      if (token && token.length < 1000) {
        headers['Authorization'] = `Bearer ${token}`;
      } else if (token && token.length >= 1000) {
        const newToken = 'admin_' + Date.now();
        sessionStorage.setItem('admin_token', newToken);
        headers['Authorization'] = `Bearer ${newToken}`;
      }
      
      const response = await fetch('/api/admin/settings', {
        method: 'GET',
        headers
      });

      if (response.ok) {
        const serverSettings = await response.json();
        // 更新本地设置状态
        setSettings(prev => ({
          ...prev,
          ...serverSettings
        }));
      }
    } catch (error) {
      console.error('加载系统设置失败:', error);
    }
  };

  const handleSave = async () => {
    try {
      const token = sessionStorage.getItem('admin_token') || 'admin_' + Date.now();
      const response = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        const result = await response.json();
        alert('✅ 数据管理设置保存成功！\n\n新设置已生效，日志管理将按新配置运行。');
        console.log('设置保存成功:', result);
      } else {
        const error = await response.json();
        alert(`❌ 保存失败: ${error.error}`);
      }
    } catch (error) {
      alert(`❌ 保存失败: ${error.message}`);
      console.error('保存设置失败:', error);
    }
  };

  // 手动清理日志
  const handleCleanupLogs = async () => {
    if (!window.confirm('确定要清理多余的日志吗？\n\n这将删除超出配置数量的旧日志，保留最新的日志记录。')) {
      return;
    }

    try {
      const token = sessionStorage.getItem('admin_token') || 'admin_' + Date.now();
      const response = await fetch('/api/admin/cleanup-logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        if (result.cleanedCount > 0) {
          alert(`✅ 日志清理完成！\n\n原有日志：${result.originalCount} 条\n清理掉：${result.cleanedCount} 条\n保留：${result.currentCount} 条`);
        } else {
          alert(`ℹ️ ${result.message}\n\n当前日志：${result.currentCount} 条\n配置上限：${result.maxLogSize} 条`);
        }
      } else {
        const error = await response.json();
        alert(`❌ 清理失败: ${error.error}`);
      }
    } catch (error) {
      alert(`❌ 清理失败: ${error.message}`);
      console.error('清理日志失败:', error);
    }
  };

  return (
    <div>
      <DevelopmentNotice>
        <div className="notice-icon">⚙️</div>
        <div className="notice-title">系统设置模块 v2.0</div>
        <div className="notice-text">
          提供基础的系统配置管理功能
          <br />
          密钥管理功能已完全实现，数据管理功能开发中
        </div>
      </DevelopmentNotice>

      <SettingsContainer>
        {/* 密钥管理 */}
        <SettingsCard>
          <CardHeader>
            <FiKey size={18} />
            <CardTitle>密钥管理</CardTitle>
          </CardHeader>
          <CardBody>
            <SettingItem>
              <SettingLabel>
                <div className="title">AI API 密钥</div>
                <div className="description">用于调用AI服务的API密钥 (DeerAPI)</div>
              </SettingLabel>
              <SettingControl>
                {editingMode.aiApiKey ? (
                  // 编辑模式
                  <>
                    <PasswordInput>
                      <PasswordField
                        type={keyVisibility.aiApiKey ? 'text' : 'password'}
                        value={editingKeys.aiApiKey}
                        onChange={(e) => handleKeyChange('aiApiKey', e.target.value)}
                        placeholder="请输入AI API密钥"
                        className={keyStatus.aiApiKey !== 'unknown' ? keyStatus.aiApiKey : ''}
                      />
                      <PasswordToggle onClick={() => toggleKeyVisibility('aiApiKey')}>
                        {keyVisibility.aiApiKey ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </PasswordToggle>
                    </PasswordInput>
                    <StatusIcon $status={keyStatus.aiApiKey}>
                      {keyStatus.aiApiKey === 'success' && <FiCheck size={16} />}
                      {keyStatus.aiApiKey === 'error' && <FiX size={16} />}
                    </StatusIcon>
                    <TestButton 
                      onClick={() => testApiKey('aiApiKey')}
                      disabled={testingKeys.aiApiKey}
                    >
                      {testingKeys.aiApiKey ? '测试中...' : '测试'}
                    </TestButton>
                    <TestButton 
                      onClick={() => cancelEditingKey('aiApiKey')}
                      style={{ marginLeft: '8px', background: '#6c757d' }}
                    >
                      取消
                    </TestButton>
                  </>
                ) : (
                  // 显示模式
                  <>
                    <PasswordInput>
                      <PasswordField
                        type="text"
                        value={apiKeys.aiApiKey || '未设置'}
                        readOnly
                        style={{ background: '#f8f9fa', cursor: 'default' }}
                      />
                    </PasswordInput>
                    <StatusIcon $status={keyStatus.aiApiKey}>
                      {keyStatus.aiApiKey === 'success' && <FiCheck size={16} />}
                      {keyStatus.aiApiKey === 'error' && <FiX size={16} />}
                    </StatusIcon>
                    <TestButton 
                      onClick={() => startEditingKey('aiApiKey')}
                      style={{ background: '#007bff' }}
                    >
                      编辑
                    </TestButton>
                  </>
                )}
              </SettingControl>
            </SettingItem>

            {keyMessages.aiApiKey && (
              <div style={{ marginTop: '8px' }}>
                {keyStatus.aiApiKey === 'success' ? (
                  <SuccessMessage>{keyMessages.aiApiKey}</SuccessMessage>
                ) : (
                  <ErrorMessage>{keyMessages.aiApiKey}</ErrorMessage>
                )}
              </div>
            )}

            <SettingItem>
              <SettingLabel>
                <div className="title">Semantic Scholar API 密钥</div>
                <div className="description">用于访问Semantic Scholar学术搜索API</div>
              </SettingLabel>
              <SettingControl>
                {editingMode.semanticScholarKey ? (
                  // 编辑模式
                  <>
                    <PasswordInput>
                      <PasswordField
                        type={keyVisibility.semanticScholarKey ? 'text' : 'password'}
                        value={editingKeys.semanticScholarKey}
                        onChange={(e) => handleKeyChange('semanticScholarKey', e.target.value)}
                        placeholder="请输入Semantic Scholar密钥"
                        className={keyStatus.semanticScholarKey !== 'unknown' ? keyStatus.semanticScholarKey : ''}
                      />
                      <PasswordToggle onClick={() => toggleKeyVisibility('semanticScholarKey')}>
                        {keyVisibility.semanticScholarKey ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </PasswordToggle>
                    </PasswordInput>
                    <StatusIcon $status={keyStatus.semanticScholarKey}>
                      {keyStatus.semanticScholarKey === 'success' && <FiCheck size={16} />}
                      {keyStatus.semanticScholarKey === 'error' && <FiX size={16} />}
                    </StatusIcon>
                    <TestButton 
                      onClick={() => testApiKey('semanticScholarKey')}
                      disabled={testingKeys.semanticScholarKey}
                    >
                      {testingKeys.semanticScholarKey ? '测试中...' : '测试'}
                    </TestButton>
                    <TestButton 
                      onClick={() => cancelEditingKey('semanticScholarKey')}
                      style={{ marginLeft: '8px', background: '#6c757d' }}
                    >
                      取消
                    </TestButton>
                  </>
                ) : (
                  // 显示模式
                  <>
                    <PasswordInput>
                      <PasswordField
                        type="text"
                        value={apiKeys.semanticScholarKey || '未设置'}
                        readOnly
                        style={{ background: '#f8f9fa', cursor: 'default' }}
                      />
                    </PasswordInput>
                    <StatusIcon $status={keyStatus.semanticScholarKey}>
                      {keyStatus.semanticScholarKey === 'success' && <FiCheck size={16} />}
                      {keyStatus.semanticScholarKey === 'error' && <FiX size={16} />}
                    </StatusIcon>
                    <TestButton 
                      onClick={() => startEditingKey('semanticScholarKey')}
                      style={{ background: '#007bff' }}
                    >
                      编辑
                    </TestButton>
                  </>
                )}
              </SettingControl>
            </SettingItem>

            {keyMessages.semanticScholarKey && (
              <div style={{ marginTop: '8px' }}>
                {keyStatus.semanticScholarKey === 'success' ? (
                  <SuccessMessage>{keyMessages.semanticScholarKey}</SuccessMessage>
                ) : (
                  <ErrorMessage>{keyMessages.semanticScholarKey}</ErrorMessage>
                )}
              </div>
            )}

            <SettingItem>
              <SettingLabel>
                <div className="title">ScrapingDog API 密钥</div>
                <div className="description">用于Google Scholar搜索代理服务</div>
              </SettingLabel>
              <SettingControl>
                {editingMode.scrapingDogKey ? (
                  // 编辑模式
                  <>
                    <PasswordInput>
                      <PasswordField
                        type={keyVisibility.scrapingDogKey ? 'text' : 'password'}
                        value={editingKeys.scrapingDogKey}
                        onChange={(e) => handleKeyChange('scrapingDogKey', e.target.value)}
                        placeholder="请输入ScrapingDog密钥"
                        className={keyStatus.scrapingDogKey !== 'unknown' ? keyStatus.scrapingDogKey : ''}
                      />
                      <PasswordToggle onClick={() => toggleKeyVisibility('scrapingDogKey')}>
                        {keyVisibility.scrapingDogKey ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </PasswordToggle>
                    </PasswordInput>
                    <StatusIcon $status={keyStatus.scrapingDogKey}>
                      {keyStatus.scrapingDogKey === 'success' && <FiCheck size={16} />}
                      {keyStatus.scrapingDogKey === 'error' && <FiX size={16} />}
                    </StatusIcon>
                    <TestButton 
                      onClick={() => testApiKey('scrapingDogKey')}
                      disabled={testingKeys.scrapingDogKey}
                    >
                      {testingKeys.scrapingDogKey ? '测试中...' : '测试'}
                    </TestButton>
                    <TestButton 
                      onClick={() => cancelEditingKey('scrapingDogKey')}
                      style={{ marginLeft: '8px', background: '#6c757d' }}
                    >
                      取消
                    </TestButton>
                  </>
                ) : (
                  // 显示模式
                  <>
                    <PasswordInput>
                      <PasswordField
                        type="text"
                        value={apiKeys.scrapingDogKey || '未设置'}
                        readOnly
                        style={{ background: '#f8f9fa', cursor: 'default' }}
                      />
                    </PasswordInput>
                    <StatusIcon $status={keyStatus.scrapingDogKey}>
                      {keyStatus.scrapingDogKey === 'success' && <FiCheck size={16} />}
                      {keyStatus.scrapingDogKey === 'error' && <FiX size={16} />}
                    </StatusIcon>
                    <TestButton 
                      onClick={() => startEditingKey('scrapingDogKey')}
                      style={{ background: '#007bff' }}
                    >
                      编辑
                    </TestButton>
                  </>
                )}
              </SettingControl>
            </SettingItem>

            {keyMessages.scrapingDogKey && (
              <div style={{ marginTop: '8px' }}>
                {keyStatus.scrapingDogKey === 'success' ? (
                  <SuccessMessage>{keyMessages.scrapingDogKey}</SuccessMessage>
                ) : (
                  <ErrorMessage>{keyMessages.scrapingDogKey}</ErrorMessage>
                )}
              </div>
            )}

            <SaveButton onClick={saveApiKeys}>
              <FiSave size={16} />
              保存密钥配置
            </SaveButton>
          </CardBody>
        </SettingsCard>



        {/* 数据管理设置 */}
        <SettingsCard>
          <CardHeader>
            <FiDatabase size={18} />
            <CardTitle>数据管理</CardTitle>
          </CardHeader>
          <CardBody>
            <SettingItem>
              <SettingLabel>
                <div className="title">日志保留天数</div>
                <div className="description">系统日志文件的保留时间（暂未实现，当前基于数量管理）</div>
              </SettingLabel>
              <SettingControl>
                <InputField
                  type="number"
                  value={settings.logRetentionDays}
                  onChange={(e) => handleInputChange('logRetentionDays', parseInt(e.target.value))}
                  min="7"
                  max="365"
                />
                <span style={{ fontSize: '13px', color: '#6c757d' }}>天</span>
              </SettingControl>
            </SettingItem>

            <SettingItem>
              <SettingLabel>
                <div className="title">最大日志数量</div>
                <div className="description">日志文件中保留的最大日志条数，超出时自动清理</div>
              </SettingLabel>
              <SettingControl>
                <InputField
                  type="number"
                  value={settings.maxLogSize}
                  onChange={(e) => handleInputChange('maxLogSize', parseInt(e.target.value))}
                  min="1000"
                  max="10000"
                />
                <span style={{ fontSize: '13px', color: '#6c757d' }}>条</span>
              </SettingControl>
            </SettingItem>

            <SettingItem>
              <SettingLabel>
                <div className="title">自动清理</div>
                <div className="description">启用日志数量自动清理功能（已实现）</div>
              </SettingLabel>
              <SettingControl>
                <ToggleSwitch
                  $active={settings.autoCleanup}
                  onClick={() => handleToggle('autoCleanup')}
                />
              </SettingControl>
            </SettingItem>

            <div style={{ display: 'flex', gap: '12px' }}>
            <SaveButton onClick={handleSave}>
              <FiSave size={16} />
              保存设置
            </SaveButton>
              
              <SaveButton 
                onClick={handleCleanupLogs}
                style={{ background: '#fd7e14' }}
              >
                🧹 清理日志
              </SaveButton>
            </div>
          </CardBody>
        </SettingsCard>
      </SettingsContainer>
    </div>
  );
};

export default SettingsModule; 