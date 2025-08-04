import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiEdit, FiTrash2, FiUser, FiMail, FiKey, FiClock } from 'react-icons/fi';

const UsersContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  overflow: hidden;
`;

const UsersHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
`;

const UsersTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddButton = styled.button`
  background: #28a745;
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
    background: #218838;
    transform: translateY(-1px);
  }
`;

const UsersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background: #f8f9fa;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #e5e5e5;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  color: #495057;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const UserDetails = styled.div`
  .username {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 2px;
  }
  
  .email {
    font-size: 13px;
    color: #6c757d;
  }
`;

const RoleBadge = styled.span`
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => {
    switch (props.role) {
      case '超级管理员': return '#dc3545';
      case '管理员': return '#007bff';
      case '操作员': return '#28a745';
      default: return '#6c757d';
    }
  }};
  color: white;
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.$active ? '#d4edda' : '#f8d7da'};
  color: ${props => props.$active ? '#155724' : '#721c24'};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: ${props => props.$danger ? '#dc3545' : '#667eea'};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$danger ? '#c82333' : '#5a6acf'};
    transform: translateY(-1px);
  }
`;

const DevelopmentNotice = styled.div`
  padding: 40px;
  text-align: center;
  color: #6c757d;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

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

// 示例用户数据
const DEMO_USERS = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    role: '超级管理员',
    status: 'active',
    lastLogin: '2024-01-15 10:30:25',
    created: '2024-01-01 09:00:00'
  },
  {
    id: 2,
    username: 'manager',
    email: 'manager@example.com',
    role: '管理员',
    status: 'active',
    lastLogin: '2024-01-14 16:45:12',
    created: '2024-01-02 14:20:00'
  },
  {
    id: 3,
    username: 'operator',
    email: 'operator@example.com',
    role: '操作员',
    status: 'inactive',
    lastLogin: '2024-01-10 08:15:33',
    created: '2024-01-05 11:30:00'
  }
];

const UsersModule = () => {
  const [users] = useState(DEMO_USERS);

  const handleAddUser = () => {
    alert('添加用户功能开发中...');
  };

  const handleEditUser = (userId) => {
    alert(`编辑用户 ${userId} 功能开发中...`);
  };

  const handleDeleteUser = (userId) => {
    alert(`删除用户 ${userId} 功能开发中...`);
  };

  return (
    <UsersContainer>
      <UsersHeader>
        <UsersTitle>
          <FiUser size={20} />
          用户管理
        </UsersTitle>
        <AddButton onClick={handleAddUser}>
          <FiPlus size={16} />
          添加用户
        </AddButton>
      </UsersHeader>

      <DevelopmentNotice>
        <div className="notice-icon">👥</div>
        <div className="notice-title">用户管理模块</div>
        <div className="notice-text">
          此功能正在开发中，预计包含以下功能：
          <br />
          • 用户创建、编辑、删除
          <br />
          • 角色权限管理
          <br />
          • 用户状态监控
          <br />
          • 登录历史记录
        </div>
      </DevelopmentNotice>

      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 16px 0', color: '#495057' }}>示例用户数据：</h4>
        <UsersTable>
          <thead>
            <tr>
              <TableHeader>用户信息</TableHeader>
              <TableHeader>角色</TableHeader>
              <TableHeader>状态</TableHeader>
              <TableHeader>最后登录</TableHeader>
              <TableHeader>操作</TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <UserInfo>
                    <UserAvatar>
                      {user.username.charAt(0).toUpperCase()}
                    </UserAvatar>
                    <UserDetails>
                      <div className="username">{user.username}</div>
                      <div className="email">{user.email}</div>
                    </UserDetails>
                  </UserInfo>
                </TableCell>
                <TableCell>
                  <RoleBadge role={user.role}>{user.role}</RoleBadge>
                </TableCell>
                <TableCell>
                  <StatusBadge $active={user.status === 'active'}>
                    {user.status === 'active' ? '活跃' : '未活跃'}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <div style={{ fontSize: '13px' }}>
                    <div>{user.lastLogin.split(' ')[0]}</div>
                    <div style={{ color: '#6c757d', fontSize: '12px' }}>
                      {user.lastLogin.split(' ')[1]}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <ActionButtons>
                    <ActionButton onClick={() => handleEditUser(user.id)}>
                      <FiEdit size={12} />
                    </ActionButton>
                    <ActionButton $danger onClick={() => handleDeleteUser(user.id)}>
                      <FiTrash2 size={12} />
                    </ActionButton>
                  </ActionButtons>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </UsersTable>
      </div>
    </UsersContainer>
  );
};

export default UsersModule; 