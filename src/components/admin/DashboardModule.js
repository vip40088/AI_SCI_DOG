import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiActivity, FiUsers, FiBarChart, FiServer, FiDatabase, FiClock, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';

const DashboardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const StatsGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)'};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${props => props.color || 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
`;

const StatTitle = styled.h3`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1;
`;

const StatChange = styled.div`
  font-size: 14px;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.positive ? '#10b981' : '#ef4444'};
  }
`;

const ChartCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  grid-column: span 2;

  @media (max-width: 1024px) {
    grid-column: span 1;
  }
`;

const ChartTitle = styled.h3`
  margin: 0 0 24px 0;
  color: #1e293b;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ActivityList = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:hover {
    background: #f8fafc;
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 12px;
  }
`;

const ActivityIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${props => props.color || '#f1f5f9'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color ? 'white' : '#64748b'};
  box-shadow: ${props => props.color ? '0 2px 8px rgba(59, 130, 246, 0.3)' : 'none'};
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityText = styled.div`
  color: #1e293b;
  font-size: 15px;
  margin-bottom: 4px;
  font-weight: 500;
`;

const ActivityTime = styled.div`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
`;

const SimpleChart = styled.div`
  height: 240px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 16px;
  border: 2px dashed #e2e8f0;
  text-align: center;
  gap: 12px;

  .chart-icon {
    font-size: 48px;
    opacity: 0.5;
  }

  .chart-text {
    font-weight: 600;
    line-height: 1.5;
  }
`;

const WelcomeCard = styled.div`
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 40px;
  color: white;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  }

  .welcome-title {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .welcome-subtitle {
    font-size: 16px;
    opacity: 0.9;
    line-height: 1.5;
  }
`;

const DashboardModule = () => {
  const [stats, setStats] = useState({
    totalRequests: 0,
    successRate: 0,
    avgResponseTime: 0,
    activeUsers: 0,
  });

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // 模拟加载统计数据
    const loadStats = async () => {
      // 这里可以调用实际的API
      setStats({
        totalRequests: 12847,
        successRate: 98.5,
        avgResponseTime: 245,
        activeUsers: 156,
      });
    };

    // 模拟加载活动日志
    const loadActivities = async () => {
      setActivities([
        {
          id: 1,
          type: 'success',
          icon: FiActivity,
          color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          text: '用户 admin 登录系统',
          time: '2分钟前'
        },
        {
          id: 2,
          type: 'info',
          icon: FiDatabase,
          color: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
          text: '日志清理任务完成',
          time: '15分钟前'
        },
        {
          id: 3,
          type: 'warning',
          icon: FiAlertCircle,
          color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          text: 'API响应时间较慢',
          time: '1小时前'
        },
        {
          id: 4,
          type: 'success',
          icon: FiServer,
          color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          text: '系统健康检查通过',
          time: '2小时前'
        },
        {
          id: 5,
          type: 'info',
          icon: FiUsers,
          color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          text: '新用户注册',
          time: '3小时前'
        }
      ]);
    };

    loadStats();
    loadActivities();
  }, []);

  return (
    <div>
      <WelcomeCard>
        <div className="welcome-title">欢迎回来，管理员！</div>
        <div className="welcome-subtitle">
          系统运行正常，今日已处理 {stats.totalRequests.toLocaleString()} 个请求，成功率保持在 {stats.successRate}%
        </div>
      </WelcomeCard>

      <StatsGrid>
        <StatCard gradient="linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)">
          <StatHeader>
            <div>
              <StatTitle>总请求数</StatTitle>
              <StatValue>{stats.totalRequests.toLocaleString()}</StatValue>
              <StatChange positive>
                <FiTrendingUp size={16} />
                +12.5% 与昨日对比
              </StatChange>
            </div>
            <StatIcon color="linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)">
              <FiActivity size={24} />
            </StatIcon>
          </StatHeader>
        </StatCard>

        <StatCard gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)">
          <StatHeader>
            <div>
              <StatTitle>成功率</StatTitle>
              <StatValue>{stats.successRate}%</StatValue>
              <StatChange positive>
                <FiTrendingUp size={16} />
                +0.8% 与昨日对比
              </StatChange>
            </div>
            <StatIcon color="linear-gradient(135deg, #10b981 0%, #059669 100%)">
              <FiBarChart size={24} />
            </StatIcon>
          </StatHeader>
        </StatCard>

        <StatCard gradient="linear-gradient(90deg, #06b6d4 0%, #0891b2 100%)">
          <StatHeader>
            <div>
              <StatTitle>平均响应时间</StatTitle>
              <StatValue>{stats.avgResponseTime}ms</StatValue>
              <StatChange>
                <FiClock size={16} />
                -15ms 与昨日对比
              </StatChange>
            </div>
            <StatIcon color="linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)">
              <FiClock size={24} />
            </StatIcon>
          </StatHeader>
        </StatCard>

        <StatCard gradient="linear-gradient(90deg, #f59e0b 0%, #d97706 100%)">
          <StatHeader>
            <div>
              <StatTitle>活跃用户</StatTitle>
              <StatValue>{stats.activeUsers}</StatValue>
              <StatChange positive>
                <FiTrendingUp size={16} />
                +23 与昨日对比
              </StatChange>
            </div>
            <StatIcon color="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)">
              <FiUsers size={24} />
            </StatIcon>
          </StatHeader>
        </StatCard>
      </StatsGrid>

      <DashboardContainer>
        <ChartCard>
          <ChartTitle>
            <FiBarChart size={20} />
            请求趋势分析
          </ChartTitle>
          <SimpleChart>
            <div className="chart-icon">📊</div>
            <div className="chart-text">
              图表功能开发中...
              <br />
              将显示过去7天的API请求趋势分析
            </div>
          </SimpleChart>
        </ChartCard>

        <ActivityList>
          <ChartTitle>
            <FiActivity size={20} />
            系统活动
          </ChartTitle>
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <ActivityItem key={activity.id}>
                <ActivityIcon color={activity.color}>
                  <IconComponent size={18} />
                </ActivityIcon>
                <ActivityContent>
                  <ActivityText>{activity.text}</ActivityText>
                  <ActivityTime>{activity.time}</ActivityTime>
                </ActivityContent>
              </ActivityItem>
            );
          })}
        </ActivityList>
      </DashboardContainer>
    </div>
  );
};

export default DashboardModule; 