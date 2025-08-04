import React, { useState } from 'react';
import styled from 'styled-components';
import { FiClock, FiZap, FiTool, FiAlertCircle, FiStar } from 'react-icons/fi';

const TreeContainer = styled.div`
  position: fixed;
  right: 30px;
  top: 120px;
  bottom: 120px;
  width: 60px;
  z-index: 100;
  pointer-events: none;
  
  @media (max-width: 1200px) {
    right: 20px;
    width: 50px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TreeLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    to bottom,
    #3498db 0%,
    #2980b9 25%,
    #27ae60 50%,
    #e67e22 75%,
    #e74c3c 100%
  );
  border-radius: 2px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
`;

const TreeNode = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => {
    switch (props.type) {
      case 'major': return 'linear-gradient(135deg, #e74c3c, #c0392b)';
      case 'feature': return 'linear-gradient(135deg, #3498db, #2980b9)';
      case 'improve': return 'linear-gradient(135deg, #f39c12, #e67e22)';
      case 'fix': return 'linear-gradient(135deg, #27ae60, #229954)';
      default: return 'linear-gradient(135deg, #95a5a6, #7f8c8d)';
    }
  }};
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateX(-50%) scale(1.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${props => {
      switch (props.type) {
        case 'major': return 'rgba(231, 76, 60, 0.2)';
        case 'feature': return 'rgba(52, 152, 219, 0.2)';
        case 'improve': return 'rgba(243, 156, 18, 0.2)';
        case 'fix': return 'rgba(39, 174, 96, 0.2)';
        default: return 'rgba(149, 165, 166, 0.2)';
      }
    }};
    animation: pulse 2s infinite;
    opacity: 0;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.3;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
    
    &:hover {
      transform: translateX(-50%) scale(1.2);
    }
  }
`;

const NodeIcon = styled.div`
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1200px) {
    font-size: 8px;
  }
`;

const NodeTooltip = styled.div`
  position: fixed;
  right: ${props => props.right || 100}px;
  top: ${props => props.top !== null ? `${props.top}px` : 'auto'};
  bottom: ${props => props.bottom !== null ? `${props.bottom}px` : 'auto'};
  width: 350px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 0;
  z-index: 1000;
  opacity: 0;
  transform: translateX(30px);
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  pointer-events: none;
  max-height: 500px;
  overflow: hidden;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @media (max-width: 1400px) {
    right: ${props => Math.min(props.right || 80, 80)}px;
    width: 320px;
  }
  
  @media (max-width: 1200px) {
    right: ${props => Math.min(props.right || 70, 70)}px;
    width: 280px;
    max-height: 400px;
  }
  
  /* 确保不会超出屏幕左边界 */
  ${props => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const tooltipWidth = screenWidth > 1400 ? 350 : screenWidth > 1200 ? 320 : 280;
    const rightMargin = screenWidth > 1400 ? 100 : screenWidth > 1200 ? 80 : 70;
    
    if (rightMargin + tooltipWidth > screenWidth - 20) {
      return `
        right: auto;
        left: 20px;
        transform: translateX(-30px);
        
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `;
    }
    return '';
  }}
`;

const TooltipHeader = styled.div`
  padding: 20px 24px 16px;
  background: ${props => {
    switch (props.type) {
      case 'major': return 'linear-gradient(135deg, #e74c3c, #c0392b)';
      case 'feature': return 'linear-gradient(135deg, #3498db, #2980b9)';
      case 'improve': return 'linear-gradient(135deg, #f39c12, #e67e22)';
      case 'fix': return 'linear-gradient(135deg, #27ae60, #229954)';
      default: return 'linear-gradient(135deg, #95a5a6, #7f8c8d)';
    }
  }};
  color: white;
  border-radius: 16px 16px 0 0;
`;

const TooltipTitle = styled.h4`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

const TooltipDate = styled.div`
  font-size: 13px;
  opacity: 0.9;
  font-weight: 500;
  
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const TooltipContent = styled.div`
  padding: 20px 24px;
  max-height: 350px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  @media (max-width: 1200px) {
    padding: 16px 20px;
    max-height: 280px;
  }
`;

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FeatureItem = styled.li`
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  color: #4a5568;
  line-height: 1.5;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '${props => {
      switch (props.type) {
        case 'new': return '✨';
        case 'improve': return '🔧';
        case 'fix': return '🐛';
        default: return '📝';
      }
    }}';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: ${props => {
      switch (props.type) {
        case 'new': return 'rgba(39, 174, 96, 0.1)';
        case 'improve': return 'rgba(243, 156, 18, 0.1)';
        case 'fix': return 'rgba(231, 76, 60, 0.1)';
        default: return 'rgba(52, 152, 219, 0.1)';
      }
    }};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
  
  @media (max-width: 1200px) {
    font-size: 13px;
    margin-bottom: 10px;
    padding-left: 24px;
    
    &::before {
      width: 18px;
      height: 18px;
      font-size: 9px;
    }
  }
`;

const EvolutionTree = ({ visible = true }) => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: null, bottom: null, right: 100 });

  // 基于实际git历史的进化数据，从用户视角编写
  const evolutionData = [
    {
      id: 'v3.2.0',
      version: 'v3.2.0',
      date: '2025-07-23',
      type: 'feature',
      position: 10,
      features: [
        { type: 'new', text: '🌟 全新进化树展示：产品发展历程一目了然，右侧优雅展示更新日志' },
        { type: 'new', text: '🎛️ 统一后台管理：新增管理员页面，集中管理日志、用户和系统设置' },
        { type: 'new', text: '🧪 AI模型测试：集成Grok模型测试，为用户提供更多AI选择' },
        { type: 'improve', text: '🚀 性能优化：清理冗余代码，提升页面响应速度和稳定性' }
      ]
    },
    {
      id: 'v3.1.0',
      version: 'v3.1.0', 
      date: '2025-07-21',
      type: 'major',
      position: 20,
      features: [
        { type: 'new', text: '⚡ 双请求技术：Primary Scraping支持20篇并发获取，搜索速度翻倍' },
        { type: 'new', text: '🌐 生产环境部署：完整的部署脚本和环境分离，服务更稳定' },
        { type: 'improve', text: '🎯 搜索优化：改进分页机制，结果获取更准确更快速' },
        { type: 'improve', text: '🔧 代码重构：优化模块导入和样式一致性，开发体验更好' }
      ]
    },
    {
      id: 'v3.0.0',
      version: 'v3.0.0',
      date: '2025-07-08', 
      type: 'major',
      position: 30,
      features: [
        { type: 'new', text: '🍞 智能错误提示：React Hot Toast集成，友好的错误反馈和操作指引' },
        { type: 'new', text: '📊 增强API日志：详细记录响应状态，支持空响应统计和筛选' },
        { type: 'new', text: '🔄 数据源智能切换：统一文案设计，隐藏技术细节专注用户体验' },
        { type: 'improve', text: '⏰ 超时优化：API超时时间延长至20秒，减少网络异常影响' },
        { type: 'fix', text: '🎨 界面修复：更新学术主题favicon，修复React警告和显示问题' }
      ]
    },
    {
      id: 'v2.9.0',
      version: 'v2.9.0',
      date: '2025-07-07',
      type: 'feature', 
      position: 40,
      features: [
        { type: 'new', text: '📊 用户行为分析：集成Google Analytics和Microsoft Clarity，持续优化体验' },
        { type: 'new', text: '🔍 搜索体验升级：改进筛选器切换逻辑和UI组件响应性' },
        { type: 'improve', text: '🎯 SEO增强：完善meta标签，提升搜索引擎排名和分享效果' },
        { type: 'improve', text: '🧹 代码清理：移除调试日志，代码更简洁维护性更好' }
      ]
    },
    {
      id: 'v2.8.0',
      version: 'v2.8.0',
      date: '2025-06-27',
      type: 'feature',
      position: 50,
      features: [
        { type: 'new', text: '🔐 安全升级：API密钥后端代理，移除前端暴露提升安全性' },
        { type: 'new', text: '💬 客服系统：全新客户服务反馈弹窗，用户问题及时响应' },
        { type: 'new', text: '🎨 圆形按钮设计：FloatingSideStepper采用更美观的圆形设计' },
        { type: 'improve', text: '🤖 AI模型优化：简化模型选择选项，标签更清晰一致' },
        { type: 'improve', text: '📱 路由增强：React Router集成，页面导航更流畅' }
      ]
    },
    {
      id: 'v2.7.0', 
      version: 'v2.7.0',
      date: '2025-06-26',
      type: 'feature',
      position: 60,
      features: [
        { type: 'new', text: '🎮 悬浮导航控制器：FloatingSideStepper侧边导航，论文浏览更便捷' },
        { type: 'new', text: '🌍 完整内容翻译：支持论文标题、摘要、AI总结完整翻译' },
        { type: 'new', text: '🔗 优先官方链接：智能识别并优先显示官方发布者链接' },
        { type: 'improve', text: '📊 翻译体验优化：批量翻译逻辑升级，状态管理更完善' },
        { type: 'improve', text: '🎯 UI布局改进：PaperCard样式重构，信息展示更清晰' }
      ]
    },
    {
      id: 'v2.6.0',
      version: 'v2.6.0', 
      date: '2025-06-24',
      type: 'feature',
      position: 70,
      features: [
        { type: 'new', text: '🎛️ 数据源选择：支持多数据源切换，localStorage保存用户偏好' },
        { type: 'new', text: '💡 智能输入提示：AI搜索提示组件，Enter和Shift键可视化指导' },
        { type: 'new', text: '📱 响应式模态框：全新模态框设计，动画效果和背景处理优化' },
        { type: 'improve', text: '⌨️ 键盘交互：ESC关闭弹窗，键盘操作更直观便捷' },
        { type: 'improve', text: '🎨 视觉体验：搜索框padding调整，占位符文本优化' }
      ]
    },
    {
      id: 'v2.5.0',
      version: 'v2.5.0',
      date: '2025-06-24',
      type: 'major',
      position: 80,
      features: [
        { type: 'new', text: '📊 批量翻译功能：一键翻译所有论文标题，进度实时显示' },
        { type: 'new', text: '📈 AI研究报告：基于多篇论文生成深度研究趋势分析' },
        { type: 'new', text: '🔍 搜索焦点管理：输入框聚焦状态智能处理，使用说明动态显示' },
        { type: 'new', text: '📝 使用指南组件：首次访问时显示详细使用说明' },
        { type: 'improve', text: '🎯 批量分析升级：选择分析维度，支持多篇论文同时分析' }
      ]
    },
    {
      id: 'v2.4.0',
      version: 'v2.4.0',
      date: '2025-06-23',
      type: 'feature', 
      position: 87,
      features: [
        { type: 'new', text: '💼 商务合作弹窗：业务洽谈、用户反馈、更新日志模态框' },
        { type: 'new', text: '🎨 动态工具提示：AI功能提示框智能定位，响应式设计' },
        { type: 'improve', text: '🌈 视觉效果升级：渐变动画tagline，响应式设计优化' },
        { type: 'improve', text: '🔄 数据源切换：重置相关状态，搜索功能更稳定' }
      ]
    },
    {
      id: 'v2.0.0',
      version: 'v2.0.0',
      date: '2025-06-20',
      type: 'major',
      position: 95,
      features: [
        { type: 'new', text: '🚀 项目重命名：从"semantic-scholar-search"升级为"aisciresgo-search"' },
        { type: 'new', text: '🎯 英雄区域：全新Hero section设计，响应式logo和标语' },
        { type: 'new', text: '🌟 AI功能卡片：展示AI增强、多语言翻译、深度分析等核心能力' },
        { type: 'new', text: '🔍 搜索表单集成：高级筛选和数据源选择统一整合' },
        { type: 'improve', text: '📱 品牌升级：更新为"科研狗智能文献搜索"，提升品牌形象' }
      ]
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'major': return <FiStar />;
      case 'feature': return <FiZap />;
      case 'improve': return <FiTool />;
      case 'fix': return <FiAlertCircle />;
      default: return <FiClock />;
    }
  };

  const handleNodeHover = (node, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const tooltipHeight = 500;
    const tooltipWidth = windowWidth > 1400 ? 350 : windowWidth > 1200 ? 320 : 280;
    const rightMargin = windowWidth > 1400 ? 100 : windowWidth > 1200 ? 80 : 70;
    
    let top = rect.top - 50;
    let bottom = null;
    let right = rightMargin;
    
    if (top + tooltipHeight > windowHeight - 20) {
      bottom = windowHeight - rect.bottom - 50;
      top = null;
    }
    
    if (top !== null && top < 20) {
      top = 20;
    }
    
    if (rightMargin + tooltipWidth > windowWidth - 20) {
      right = Math.max(20, windowWidth - tooltipWidth - 20);
    }
    
    setTooltipPosition({ top, bottom, right });
    setHoveredNode(node);
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  if (!visible) return null;

  return (
    <TreeContainer>
      <TreeLine />
      {evolutionData.map((node) => (
        <TreeNode
          key={node.id}
          type={node.type}
          style={{ top: `${node.position}%` }}
          onMouseEnter={(e) => handleNodeHover(node, e)}
          onMouseLeave={handleNodeLeave}
        >
          <NodeIcon>
            {getIcon(node.type)}
          </NodeIcon>
        </TreeNode>
      ))}
      
      {hoveredNode && (
        <NodeTooltip 
          top={tooltipPosition.top} 
          bottom={tooltipPosition.bottom}
          right={tooltipPosition.right}
        >
          <TooltipHeader type={hoveredNode.type}>
            <TooltipTitle>
              {getIcon(hoveredNode.type)}
              {hoveredNode.version}
            </TooltipTitle>
            <TooltipDate>{hoveredNode.date}</TooltipDate>
          </TooltipHeader>
          <TooltipContent>
            <FeatureList>
              {hoveredNode.features.map((feature, index) => (
                <FeatureItem key={index} type={feature.type}>
                  {feature.text}
                </FeatureItem>
              ))}
            </FeatureList>
          </TooltipContent>
        </NodeTooltip>
      )}
    </TreeContainer>
  );
};

export default EvolutionTree; 