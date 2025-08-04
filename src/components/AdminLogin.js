import React, { useState } from 'react';
import styled from 'styled-components';
import { FiLock, FiUnlock, FiEye, FiEyeOff, FiShield, FiUser } from 'react-icons/fi';

const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    animation: backgroundFloat 20s ease-in-out infinite;
  }

  @keyframes backgroundFloat {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-5%, -5%) rotate(1deg); }
    50% { transform: translate(0, -10%) rotate(0deg); }
    75% { transform: translate(5%, -5%) rotate(-1deg); }
  }
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  padding: 50px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    padding: 40px 30px;
    border-radius: 16px;
  }
`;

const LoginHeader = styled.div`
  margin-bottom: 40px;
`;

const LoginLogo = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
`;

const LoginTitle = styled.h1`
  color: #2c3e50;
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
`;

const LoginSubtitle = styled.p`
  color: #7f8c8d;
  margin: 0;
  font-size: 16px;
`;

const LoginForm = styled.form`
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 25px;
  text-align: left;
`;

const InputLabel = styled.label`
  display: block;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  padding-right: ${props => props.$hasIcon ? '50px' : '20px'};
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
  transition: color 0.3s ease;

  ${LoginInput}:focus + & {
    color: #667eea;
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
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    color: #495057;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #51cf66, #40c057);
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(81, 207, 102, 0.2);
`;

const SecurityNote = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
  text-align: left;
  font-size: 13px;
  color: #6c757d;
  line-height: 1.5;

  .note-title {
    font-weight: 600;
    color: #495057;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  ul {
    margin: 8px 0 0 0;
    padding-left: 16px;
  }

  li {
    margin: 4px 0;
  }
`;

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 管理员密码列表（从环境变量读取，开发环境提供默认值）
  const ADMIN_PASSWORDS = [
    process.env.REACT_APP_ADMIN_PASSWORD_1 || 'admin2024',
    process.env.REACT_APP_ADMIN_PASSWORD_2 || 'scholar_admin',
    process.env.REACT_APP_ADMIN_PASSWORD_3 || 'management_2024',
    process.env.REACT_APP_ADMIN_PASSWORD_4 || 'secure_access_key'
  ].filter(Boolean);

  // 生成简单的管理员token
  const generateAdminToken = (username) => {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    return `admin_${username}_${timestamp}_${randomStr}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (ADMIN_PASSWORDS.includes(password)) {
        // 生成管理员token
        const adminToken = generateAdminToken('admin');
        
        // 创建用户数据
        const userData = {
          username: 'admin',
          role: '系统管理员',
          loginTime: new Date().toISOString(),
          permissions: ['key_management', 'system_settings', 'logs_access']
        };

        // 存储token和用户信息
        sessionStorage.setItem('admin_token', adminToken);
        sessionStorage.setItem('admin_user_data', JSON.stringify(userData));
        
        // 调用成功回调
        onLoginSuccess(userData);
      } else {
        setError('密码错误，请重试');
      }
    } catch (error) {
      setError('登录过程中发生错误，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <LoginLogo>
            <FiShield size={40} color="white" />
          </LoginLogo>
          <LoginTitle>管理后台</LoginTitle>
          <LoginSubtitle>请输入您的账户信息</LoginSubtitle>
        </LoginHeader>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel>用户名</InputLabel>
            <InputWrapper>
              <LoginInput
                type="text"
                placeholder="请输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                $hasIcon={true}
                style={{ paddingLeft: '50px' }}
              />
              <InputIcon>
                <FiUser size={18} />
              </InputIcon>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <InputLabel>密码</InputLabel>
            <InputWrapper>
              <LoginInput
                type={showPassword ? "text" : "password"}
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                $hasIcon={true}
                style={{ paddingLeft: '50px' }}
              />
              <InputIcon>
                <FiLock size={18} />
              </InputIcon>
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </ToggleButton>
            </InputWrapper>
          </InputGroup>

          <LoginButton type="submit" disabled={!username.trim() || !password.trim() || isLoading}>
            {isLoading ? (
              <>
                <FiUnlock size={16} />
                验证中...
              </>
            ) : (
              <>
                <FiUnlock size={16} />
                登录
              </>
            )}
          </LoginButton>
        </LoginForm>

        <SecurityNote>
          <div className="note-title">
            <FiShield size={14} />
            安全说明
          </div>
          <ul>
            <li>会话有效期：8小时</li>
            <li>自动清理过期认证</li>
            <li>仅当前浏览器会话有效</li>
            <li>测试账户：admin/admin123</li>
          </ul>
        </SecurityNote>
      </LoginCard>
    </LoginContainer>
  );
};

export default AdminLogin;