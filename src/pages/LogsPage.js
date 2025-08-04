import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiLock, FiUnlock, FiEye, FiEyeOff, FiShield, FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import ApiLogViewer from '../components/ApiLogViewer';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const AuthContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const LogsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const AuthTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 24px;
`;

const AuthSubtitle = styled.p`
  color: #7f8c8d;
  margin-bottom: 32px;
  font-size: 14px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 16px 50px 16px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: #495057;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const BackButton = styled.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  color: #6c757d;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #f8f9fa;
    border-color: #dee2e6;
  }
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const LogoutButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  z-index: 10001;

  &:hover {
    background: #dc3545;
    color: white;
  }
`;

// 密钥配置（从环境变量读取，开发环境提供默认值）
const ACCESS_KEYS = [
  process.env.REACT_APP_LOGS_ACCESS_KEY_1 || 'admin2024',
  process.env.REACT_APP_LOGS_ACCESS_KEY_2 || 'logs_access_key',
  process.env.REACT_APP_LOGS_ACCESS_KEY_3 || 'semantic_admin',
  process.env.REACT_APP_LOGS_ACCESS_KEY // 主要访问密钥
].filter(Boolean); // 过滤掉空值

const LogsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 检查是否已经认证过（使用sessionStorage）
  useEffect(() => {
    const isAuth = sessionStorage.getItem('logs_authenticated');
    const authTime = sessionStorage.getItem('logs_auth_time');
    const currentTime = Date.now();
    
    // 认证有效期：8小时
    if (isAuth === 'true' && authTime && (currentTime - parseInt(authTime)) < 8 * 60 * 60 * 1000) {
      setIsAuthenticated(true);
    } else {
      // 清除过期的认证
      sessionStorage.removeItem('logs_authenticated');
      sessionStorage.removeItem('logs_auth_time');
    }
  }, []);

  // 处理密钥验证
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // 模拟验证延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    if (ACCESS_KEYS.includes(password.trim())) {
      setSuccess('验证成功！正在加载日志界面...');
      
      // 保存认证状态到sessionStorage
      sessionStorage.setItem('logs_authenticated', 'true');
      sessionStorage.setItem('logs_auth_time', Date.now().toString());
      
      setTimeout(() => {
        setIsAuthenticated(true);
        setPassword(''); // 清空密码
      }, 1000);
    } else {
      setError('访问密钥无效，请检查后重试');
    }
    
    setIsLoading(false);
  };

  // 处理登出
  const handleLogout = () => {
    sessionStorage.removeItem('logs_authenticated');
    sessionStorage.removeItem('logs_auth_time');
    setIsAuthenticated(false);
    setPassword('');
    setError('');
    setSuccess('');
  };

  // 返回主页
  const handleBackToHome = () => {
    navigate('/');
  };

  // 关闭日志查看器（实际上就是登出）
  const handleCloseLogViewer = () => {
    handleLogout();
  };

  // 如果已认证，显示日志查看器
  if (isAuthenticated) {
    return (
      <LogsContainer>
        <LogoutButton onClick={handleLogout}>
          <FiLock size={16} />
          退出登录
        </LogoutButton>
        <ApiLogViewer onClose={handleCloseLogViewer} />
      </LogsContainer>
    );
  }

  // 显示认证界面
  return (
    <PageContainer>
      <AuthContainer>
        <AuthTitle>
          <FiShield size={28} />
          API日志访问
        </AuthTitle>
        <AuthSubtitle>
          此页面受密钥保护，仅限管理员访问
        </AuthSubtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <form onSubmit={handleLogin}>
          <InputGroup>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="请输入访问密钥"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoComplete="off"
            />
            <ToggleButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </ToggleButton>
          </InputGroup>

          <LoginButton type="submit" disabled={!password.trim() || isLoading}>
            {isLoading ? (
              <>
                <FiUnlock size={16} />
                验证中...
              </>
            ) : (
              <>
                <FiUnlock size={16} />
                验证访问
              </>
            )}
          </LoginButton>
        </form>

        <BackButton onClick={handleBackToHome}>
          <FiArrowLeft size={16} />
          返回主页
        </BackButton>

        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          fontSize: '12px',
          color: '#6c757d',
          textAlign: 'left'
        }}>
          <strong>安全说明：</strong>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '16px' }}>
            <li>认证有效期：8小时</li>
            <li>仅当前浏览器会话有效</li>
            <li>关闭浏览器后需重新认证</li>
            <li>日志数据仅存储在本地</li>
          </ul>
        </div>
      </AuthContainer>
    </PageContainer>
  );
};

export default LogsPage;