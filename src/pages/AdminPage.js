import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX, FiHome, FiUsers, FiSettings, FiBarChart, FiLogOut, FiShield, FiBell, FiSearch } from 'react-icons/fi';
import AdminLogin from '../components/AdminLogin';
import LogsModule from '../components/admin/LogsModule';
import DashboardModule from '../components/admin/DashboardModule';
import UsersModule from '../components/admin/UsersModule';
import SettingsModule from '../components/admin/SettingsModule';

// 主容器 - 使用 flexbox 水平布局
const AdminContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #f8fafc;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
`;

// 左侧边栏
const Sidebar = styled.div`
  width: ${props => props.$collapsed ? '70px' : '280px'};
  min-width: ${props => props.$collapsed ? '70px' : '280px'};
  background: linear-gradient(180deg, #1e293b 0%, #334155 100%);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  border-right: 1px solid #374151;

  @media (max-width: 768px) {
    position: absolute;
    left: ${props => props.$mobileOpen ? '0' : '-280px'};
    width: 280px;
    min-width: 280px;
    height: 100vh;
    z-index: 2000;
    box-shadow: 8px 0 25px rgba(0, 0, 0, 0.15);
  }
`;

const SidebarHeader = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  flex-shrink: 0;
`;

const SidebarTitle = styled.h1`
  margin: 0;
  font-size: ${props => props.$collapsed ? '0' : '22px'};
  font-weight: 700;
  opacity: ${props => props.$collapsed ? '0' : '1'};
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: ${props => props.$collapsed ? '0' : '12px'};
`;

const CollapseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 2001;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 14px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SidebarNav = styled.nav`
  flex: 1;
  padding: 24px 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  margin: 4px 16px;
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  border-radius: 12px;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: translateX(4px);
  }

  ${props => props.$active && `
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(52, 211, 153, 0.2) 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: linear-gradient(180deg, #60a5fa 0%, #34d399 100%);
      border-radius: 0 2px 2px 0;
    }
  `}

  .nav-text {
    opacity: ${props => props.$collapsed ? '0' : '1'};
    transition: opacity 0.3s ease;
    white-space: nowrap;
    font-size: 15px;
  }

  .nav-icon {
    min-width: 22px;
    font-size: 18px;
    flex-shrink: 0;
  }
`;

const SidebarFooter = styled.div`
  padding: 24px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
`;

const LogoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: white;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  .logout-text {
    opacity: ${props => props.$collapsed ? '0' : '1'};
    transition: opacity 0.3s ease;
  }
`;

// 右侧主内容区域
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f8fafc;
  min-width: 0; /* 防止flex item过度收缩 */
`;

// 顶部导航条
const TopNavBar = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 32px;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  backdrop-filter: blur(10px);
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 20px 24px 20px 80px;
  }
`;

const TopNavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContentTitle = styled.h2`
  margin: 0;
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;

  .breadcrumb-item {
    &:not(:last-child)::after {
      content: '/';
      margin-left: 8px;
      color: #cbd5e1;
    }
  }

  .breadcrumb-current {
    color: #3b82f6;
    font-weight: 500;
  }
`;

const TopNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  padding: 10px 16px 10px 40px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  width: 240px;
  background: #f8fafc;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: white;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 12px;
  color: #94a3b8;
  font-size: 16px;
`;

const NotificationButton = styled.button`
  background: #f1f5f9;
  border: none;
  color: #64748b;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #e2e8f0;
    color: #334155;
    transform: translateY(-1px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 14px;
  padding: 8px 16px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 14px;
    flex-shrink: 0;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
`;

// 主内容区域
const ContentBody = styled.div`
  flex: 1;
  padding: 32px;
  overflow-y: auto;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  /* 自定义滚动条 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    display: ${props => props.$show ? 'block' : 'none'};
  }
`;

// 菜单配置
const MENU_ITEMS = [
  { key: 'dashboard', label: '仪表板', icon: FiHome, description: '系统概览' },
  { key: 'analytics', label: '数据分析', icon: FiBarChart, description: 'API调用记录与分析' },
  { key: 'users', label: '用户管理', icon: FiUsers, description: '用户权限管理' },
  { key: 'settings', label: '系统设置', icon: FiSettings, description: '密钥管理和数据配置' },
];

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 检查认证状态
  useEffect(() => {
    const checkAuth = () => {
      const authData = sessionStorage.getItem('admin_authenticated');
      const authTime = sessionStorage.getItem('admin_auth_time');
      const currentTime = Date.now();
      
      // 认证有效期：8小时
      if (authData === 'true' && authTime && (currentTime - parseInt(authTime)) < 8 * 60 * 60 * 1000) {
        setIsAuthenticated(true);
        const userData = JSON.parse(sessionStorage.getItem('admin_user_data') || '{}');
        setCurrentUser(userData);
      } else {
        // 清除过期认证
        handleLogout();
      }
    };

    checkAuth();
  }, []);

  // 处理登录成功
  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    sessionStorage.setItem('admin_authenticated', 'true');
    sessionStorage.setItem('admin_auth_time', Date.now().toString());
    sessionStorage.setItem('admin_user_data', JSON.stringify(userData));
  };

  // 处理登出
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_auth_time');
    sessionStorage.removeItem('admin_user_data');
  };

  // 切换模块
  const handleModuleChange = (moduleKey) => {
    setActiveModule(moduleKey);
    setMobileMenuOpen(false); // 移动端关闭菜单
  };

  // 切换侧边栏
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // 渲染当前模块
  const renderCurrentModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardModule />;
      case 'analytics':
        return <LogsModule />;
      case 'users':
        return <UsersModule />;
      case 'settings':
        return <SettingsModule key="settings-module" />;
      default:
        return <DashboardModule />;
    }
  };

  // 获取当前模块信息
  const getCurrentModuleInfo = () => {
    const currentItem = MENU_ITEMS.find(item => item.key === activeModule);
    return currentItem || MENU_ITEMS[0];
  };

  // 如果未认证，显示登录页面
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  const currentModuleInfo = getCurrentModuleInfo();
  const IconComponent = currentModuleInfo.icon;

  return (
    <AdminContainer data-admin-layout>
      {/* 移动端菜单按钮 */}
      <MobileMenuButton onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </MobileMenuButton>

      {/* 移动端遮罩 */}
      <Overlay $show={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />

      {/* 左侧边栏 */}
      <Sidebar $collapsed={sidebarCollapsed} $mobileOpen={mobileMenuOpen}>
        <SidebarHeader>
          <SidebarTitle $collapsed={sidebarCollapsed}>
            <FiShield size={28} />
            {!sidebarCollapsed && '学者搜索管理'}
          </SidebarTitle>
          <CollapseButton onClick={toggleSidebar}>
            {sidebarCollapsed ? <FiMenu size={18} /> : <FiX size={18} />}
          </CollapseButton>
        </SidebarHeader>

        <SidebarNav>
          {MENU_ITEMS.map((item) => {
            const ItemIcon = item.icon;
            return (
              <NavItem
                key={item.key}
                $active={activeModule === item.key}
                $collapsed={sidebarCollapsed}
                onClick={() => handleModuleChange(item.key)}
                title={sidebarCollapsed ? `${item.label} - ${item.description}` : ''}
              >
                <ItemIcon size={18} className="nav-icon" />
                <span className="nav-text">{item.label}</span>
              </NavItem>
            );
          })}
        </SidebarNav>

        <SidebarFooter>
          <LogoutButton $collapsed={sidebarCollapsed} onClick={handleLogout}>
            <FiLogOut size={18} />
            <span className="logout-text">退出登录</span>
          </LogoutButton>
        </SidebarFooter>
      </Sidebar>

      {/* 右侧主内容区域 */}
      <MainContent>
        {/* 顶部导航条 */}
        <TopNavBar>
          <TopNavLeft>
            <TitleSection>
              <ContentTitle>
                <IconComponent size={24} />
                {currentModuleInfo.label}
              </ContentTitle>
              <BreadcrumbNav>
                <span className="breadcrumb-item">管理后台</span>
                <span className="breadcrumb-item breadcrumb-current">{currentModuleInfo.label}</span>
              </BreadcrumbNav>
            </TitleSection>
          </TopNavLeft>

          <TopNavRight>
            <SearchBox>
              <SearchIcon />
              <SearchInput
                placeholder="搜索功能、用户或日志..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBox>

            <NotificationButton title="通知">
              <FiBell size={18} />
            </NotificationButton>

            <UserInfo>
              <div className="user-avatar">
                {currentUser?.username?.charAt(0).toUpperCase() || 'A'}
              </div>
              <div className="user-details">
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>
                  {currentUser?.username || 'Admin'}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  {currentUser?.role || '系统管理员'}
                </div>
              </div>
            </UserInfo>
          </TopNavRight>
        </TopNavBar>

        {/* 主内容区域 */}
        <ContentBody>
          {renderCurrentModule()}
        </ContentBody>
      </MainContent>
    </AdminContainer>
  );
};

export default AdminPage; 