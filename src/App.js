import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiAlignLeft, FiBriefcase, FiActivity, FiBarChart2, FiCheckCircle, FiRefreshCw, FiZap, FiCpu, FiGlobe, FiTrendingUp, FiUser, FiMessageCircle, FiMail, FiX, FiCopy, FiHeadphones } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';

// 组件导入
import SearchForm from './components/SearchForm';
import PaperCard from './components/PaperCard';
import { SkeletonList } from './components/LoadingSpinner';
import Pagination from './components/Pagination';

import ApiLogViewer from './components/ApiLogViewer';
import CustomerServiceModal from './components/CustomerServiceModal';
import ResearchReportCard from './components/ResearchReportCard';
import ConfirmDialog from './components/ConfirmDialog';
// import FloatingController from './components/FloatingController';


import FloatingSideStepper from './components/FloatingSideStepper';
import UsageInstructions from './components/UsageInstructions';
import EvolutionTree from './components/EvolutionTree';

// API 导入
import { searchPapers } from './api/unifiedSearch';
import { batchAnalyzePapers, generateResearchReport, AI_MODELS, batchTranslatePapers } from './api/aiService';

// 配置导入
import { FILTER_CONFIGS } from './config/filterConfigs';

// 分析工具导入
import { initPageTracking, trackSearch, trackDataSourceSearch, trackError, trackDataSourceChange, trackUserBehavior } from './utils/analytics';

// 旋转动画
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 旋转图标组件
const SpinningIcon = styled(FiRefreshCw)`
  margin-right: 4px;
  animation: ${spin} 1s linear infinite;
`;

// 样式组件
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 更柔和低调的中性背景 */
  background: linear-gradient(135deg, 
    #fafbfc 0%, 
    #f5f6f7 25%, 
    #f0f1f2 50%, 
    #f5f6f7 75%, 
    #fafbfc 100%
  );
  background-attachment: fixed;
  background-size: 400% 400%;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  flex: 1 0 auto;
  scroll-behavior: smooth;
  
  /* 添加微妙的动画效果 */
  animation: backgroundShift 25s ease-in-out infinite;
  
  @keyframes backgroundShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 12px 0;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  img {
    height: 50px;
    width: auto;
    transition: inherit;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const HeaderLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  /* 添加微妙的边框 */
  border: 1px solid transparent;
  
  /* 悬停效果 */
  &:hover {
    color: #007acc;
    background-color: rgba(0, 122, 204, 0.08);
    border-color: rgba(0, 122, 204, 0.15);
    text-decoration: none;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 122, 204, 0.1);
  }
  
  /* 激活效果 */
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0, 122, 204, 0.15);
  }
  
  /* 光波扫过效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  /* 邮件链接特殊样式 */
  &[href^="mailto:"] {
    &:hover {
      color: #28a745;
      background-color: rgba(40, 167, 69, 0.08);
      border-color: rgba(40, 167, 69, 0.15);
      box-shadow: 0 2px 8px rgba(40, 167, 69, 0.1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 8px;
  }
  
  @media (max-width: 600px) {
    padding: 4px 6px;
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    /* 在小屏幕上隐藏部分链接，只保留最重要的 */
    &.hide-mobile {
      display: none;
    }
  }
`;

const HeaderDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #e9ecef;
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
  position: relative; /* 添加相对定位 */
  
  /* Set max-width based on viewport */
  @media (min-width: 768px) {
    max-width: 90%;
  }
  
  @media (min-width: 992px) {
    max-width: 85%;
  }
  
  @media (min-width: 1200px) {
    max-width: 1240px;
  }
  
  @media (min-width: 1600px) {
    max-width: 1440px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1840px;
  }
`;



const ResultsContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible; /* 确保容器不会截断内容 */
  
  /* Container for all cards */
  .cards-scroll-container {
    width: 100%;
    margin-bottom: 16px;
    overflow: visible; /* 确保容器不会截断内容 */
    
    /* 确保所有卡片的分析区域水平滚动时保持一致 */
    .analysis-cards {
      scroll-behavior: smooth;
      /* 在非移动设备上保持水平滚动 */
      @media (min-width: 993px) {
        overflow-x: auto; /* 改为auto以支持水平滚动 */
        overflow-y: hidden; /* 禁止垂直滚动 */
        flex-wrap: nowrap;
        
        /* 隐藏滚动条但保留滚动功能 */
        &::-webkit-scrollbar {
          height: 0;
          width: 0;
          display: none;
        }
        
        /* Firefox 隐藏滚动条 */
        scrollbar-width: none;
        -ms-overflow-style: none;
        
        /* 添加触摸滚动支持 */
        touch-action: pan-x; /* 允许水平平移 */
        -webkit-overflow-scrolling: touch; /* 在iOS上启用惯性滚动 */
      }
    }
  }
  
  @media (max-width: 768px) {
    .cards-scroll-container {
      overflow: visible;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const SearchStats = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;



// 数据源切换提示文案 - 左侧显示
const DataSourceSwitchHint = styled.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1; /* 占据左侧空间 */
  
  .switch-link {
    color: #007acc;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 3px;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(0, 122, 204, 0.1);
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
`;

// 搜索结果统计信息 - 右侧显示
const SearchResultStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0; /* 不压缩 */
  
  .result-count {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
  
  .search-time {
    font-size: 12px;
    color: #999;
  }
  
  @media (max-width: 768px) {
    align-items: flex-start;
    
    .result-count {
      font-size: 13px;
    }
    
    .search-time {
      font-size: 11px;
    }
  }
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 24px 20px;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin: 0 0 8px 0;
  opacity: 0.8;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
`;

const FooterLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: white;
  }
`;

const VisibilityToolbar = styled.div`
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 12px;
  margin-bottom: 16px;
  padding: 0;
  background: transparent;
  border-radius: 8px;
  position: sticky;
  top: 0;
  z-index: 100;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  /* 多重过渡效果 */
  transition: 
    all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.5s ease,
    border-radius 0.3s ease;
  
  /* 微妙的初始变换效果 */
  transform: translateY(0) scale(1);
  
  /* 初始渐现动画 */
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* 当滚动时增强样式 */
  &.scrolled {
    /* 当吸顶时扩展到全宽度 */
    position: fixed;
    top: 10px; /* 添加10px的顶部边距 */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    max-width: 1240px; /* 与MainContent保持一致 */
    
    /* 在大屏幕上保持合适的宽度 */
    @media (min-width: 768px) {
      max-width: 90%;
    }
    
    @media (min-width: 992px) {
      max-width: 85%;
    }
    
    @media (min-width: 1200px) {
      max-width: 1240px;
    }
    
    @media (min-width: 1600px) {
      max-width: 1440px;
    }
    
    @media (min-width: 1920px) {
      max-width: 1840px;
    }
  }
  
  /* 定义关键帧动画 */
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-10px) scale(0.98);
      opacity: 0.8;
    }
    50% {
      transform: translateY(2px) scale(1.02);
    }
    100% {
      transform: translateY(0) scale(1.01);
      opacity: 1;
    }
  }
  
  /* 退出动画 */
  &:not(.scrolled) {
    animation: slideOutToTop 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes slideOutToTop {
    0% {
      transform: translateY(0) scale(1.01);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }
  
  /* 确保在所有设备上都能正确吸顶 */
  @supports (position: sticky) {
    position: sticky;
  }
  
  /* 移动设备优化 */
  @media (max-width: 768px) {
    margin-bottom: 12px;
    
    &.scrolled {
      max-width: calc(100% - 40px); /* 保持侧边距 */
      transform: translateY(0) scale(1); /* 移动设备上不进行缩放 */
    }
  }
`;

// 左侧工具栏部分 - AI模型选择
const LeftToolbarSection = styled.div`
  grid-column: 1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);
  
  .scrolled & {
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.15),
      0 8px 32px rgba(0, 122, 204, 0.1);
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    border: 1px solid rgba(0, 122, 204, 0.15);
    animation: slideInFromTop 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  @media (max-width: 992px) {
    grid-column: 1;
    width: 100%;
  }
`;

// 右侧工具栏部分 - 显示选项和批量分析
const RightToolbarSection = styled.div`
  grid-column: 2;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
  position: relative;
  
  .scrolled & {
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.15),
      0 8px 32px rgba(0, 122, 204, 0.1);
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    border: 1px solid rgba(0, 122, 204, 0.15);
    animation: slideInFromTop 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  @media (max-width: 992px) {
    grid-column: 1;
    width: 100%;
    gap: 6px;
    padding: 10px 12px;
  }
  
  /* 响应式隐藏策略 */
  .scroll-controls-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  /* 步进器和横向滚动条在1500px以下隐藏 */
  @media (max-width: 1500px) {
    .scroll-controls-container {
      display: none !important;
    }
  }
  
  @media (max-width: 900px) {
    .hide-on-medium {
      display: none !important;
    }
  }
  
  @media (max-width: 600px) {
    .hide-on-small {
      display: none !important;
    }
    gap: 4px;
    padding: 8px 10px;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
  
  /* 移除了悬停提示气泡 */
`;

// eslint-disable-next-line no-unused-vars
const ToolbarTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-right: 8px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 添加微妙的下划线效果 */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #1890ff, #40a9ff);
    border-radius: 1px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* 在父容器滚动时显示下划线 */
  .scrolled & {
    color: #1890ff;
    
    &::after {
      width: 100%;
    }
  }
`;

// 翻译控制器样式 - 始终显示，不受响应式隐藏影响
const TranslationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  
  /* 1600px以下隐藏图标 */
  @media (max-width: 1600px) {
    svg {
      display: none;
    }
    gap: 4px;
  }
`;

// AI模型选择器样式 - 响应式隐藏
const ModelSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  
  /* 响应式隐藏策略 - AI模型选择器优先隐藏 */
  @media (max-width: 1500px) {
    display: none;
  }
  
  /* 在更大屏幕上仍然显示，但调整flex */
  @media (min-width: 1501px) {
    flex: 0 0 auto;
    min-width: 200px;
  }
`;

const ModelSelectLabel = styled.label`
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ModelSelect = styled.select`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  outline: none;
  
  &:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }
`;

// 新的按钮式切换组件 - 响应式优化
const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: ${props => props.$active ? '#e6f7ff' : 'white'};
  color: ${props => props.$active ? '#1890ff' : '#666'};
  border: 1px solid ${props => props.$active ? '#1890ff' : '#e0e0e0'};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* 响应式策略 - 渐进式隐藏非核心按钮 */
  @media (max-width: 1600px) {
    /* 1600px以下隐藏所有图标 */
    svg {
      display: none;
    }
    gap: 4px;
  }
  
  @media (max-width: 992px) {
    padding: 6px 8px;
    font-size: 13px;
    gap: 4px;
  }
  
  @media (max-width: 768px) {
    padding: 4px 6px;
    font-size: 12px;
    
    /* 在移动设备上只显示图标，隐藏文字 */
    span {
      display: none;
    }
    /* 移动设备上重新显示图标（因为隐藏了文字） */
    svg {
      display: block !important;
    }
  }
  
  /* 增强的过渡动画 */
  transition: 
    all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s ease,
    box-shadow 0.3s ease;
  
  /* 微妙的初始效果 */
  transform: translateY(0) scale(1);
  
  /* 添加微光效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }
  
  /* 添加悬停发光效果 */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(24, 144, 255, 0.2), 
      rgba(64, 169, 255, 0.2), 
      rgba(24, 144, 255, 0.2)
    );
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    background: ${props => props.$active ? '#e6f7ff' : '#f0f8ff'};
    border-color: ${props => props.$active ? '#1890ff' : '#1890ff'};
    color: ${props => props.$active ? '#1890ff' : '#1890ff'};
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.25);
    
    /* 触发微光效果 */
    &::before {
      left: 100%;
    }
    
    /* 显示发光效果 */
    &::after {
      opacity: 1;
      animation: highlight-glow 2s ease-in-out infinite;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* 激活状态的额外效果 */
  ${props => props.$active && `
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    
    &:hover {
      box-shadow: 
        0 0 0 2px rgba(24, 144, 255, 0.3),
        0 4px 12px rgba(24, 144, 255, 0.3);
    }
  `}
  
  @keyframes highlight-glow {
    0%, 100% {
      background: linear-gradient(45deg, 
        rgba(24, 144, 255, 0.1), 
        rgba(64, 169, 255, 0.1), 
        rgba(24, 144, 255, 0.1)
      );
    }
    50% {
      background: linear-gradient(45deg, 
        rgba(24, 144, 255, 0.3), 
        rgba(64, 169, 255, 0.3), 
        rgba(24, 144, 255, 0.3)
      );
    }
  }
`;

const BatchAnalysisButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${props => {
    if (props.$cancel) return 'white';
    return props.$loading ? '#f1f8ff' : '#1890ff';
  }};
  color: ${props => {
    if (props.$cancel) return '#ff4d4f';
    return props.$loading ? '#1890ff' : 'white';
  }};
  border: 1px solid ${props => props.$cancel ? '#ff4d4f' : '#1890ff'};
  border-radius: 4px;
  font-size: 14px;
  cursor: ${props => props.$loading ? 'not-allowed' : 'pointer'};
  margin-left: ${props => props.$cancel ? '8px' : '0'};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* 响应式文字显示策略 */
  .batch-icon-text {
    display: none;
  }
  
  /* 响应式优化 */
  @media (max-width: 1600px) {
    /* 1600px以下隐藏所有图标 */
    svg {
      display: none;
    }
    gap: 4px;
  }
  
  @media (max-width: 992px) {
    padding: 5px 10px;
    font-size: 13px;
    gap: 4px;
  }
  
  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
    
    /* 在移动设备上简化文字 */
    .batch-text {
      display: none;
    }
    .batch-icon-text {
      display: inline;
    }
    /* 移动设备上重新显示图标（因为隐藏了文字） */
    svg {
      display: block !important;
    }
  }
  
  @media (max-width: 480px) {
    padding: 4px 6px;
    margin-left: ${props => props.$cancel ? '4px' : '0'};
    
    /* 超小屏幕只显示图标 */
    .batch-icon-text {
      display: none;
    }
  }
  
  /* 增强的过渡动画 */
  transition: 
    all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s ease,
    box-shadow 0.3s ease;
  
  transform: translateY(0) scale(1);
  
  /* 添加脉动效果（加载时） */
  ${props => props.$loading && `
    animation: pulse 2s ease-in-out infinite;
    
    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.7);
      }
      50% {
        box-shadow: 0 0 0 4px rgba(24, 144, 255, 0);
      }
    }
  `}
  
  /* 添加波纹效果 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }
  
  &:active::after {
    width: 120%;
    height: 120%;
  }
  
  &:hover:not(:disabled) {
    background: ${props => {
      if (props.$cancel) return '#fff1f0';
      return props.$loading ? '#f1f8ff' : '#40a9ff';
    }};
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* 取消按钮的特殊效果 */
  ${props => props.$cancel && `
    &:hover {
      box-shadow: 0 2px 8px rgba(255, 77, 79, 0.3);
    }
  `}
  
  svg {
    animation: ${props => props.$loading ? 'spin 1s linear infinite' : 'none'};
    transition: transform 0.3s ease;
  }
  
  &:hover svg:not(.spinning) {
    transform: scale(1.1);
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

// eslint-disable-next-line no-unused-vars
const AILoadingText = styled.div`
  color: #666;
  font-size: 14px;
`;

// 移除了AI功能提示气泡相关的样式组件

// 弹窗样式组件
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  opacity: 0;
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  padding: 20px;
  box-sizing: border-box;
  
  /* 防止背景滚动 */
  overflow: hidden;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  /* 点击背景关闭弹窗 */
  &[data-overlay] {
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: ${props => props.$isResearchReport ? '1000px' : '650px'};
  width: 100%;
  max-height: min(90vh, 800px);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: translateY(30px) scale(0.95);
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: default;
  
  /* 防止内容溢出 */
  overflow: hidden;
  
  @keyframes slideUp {
    to {
      transform: translateY(0) scale(1);
    }
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    max-width: 95%;
    max-height: min(95vh, 700px);
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    max-width: 98%;
    max-height: min(98vh, 600px);
    border-radius: 12px;
  }
  
  /* 研究报告弹窗特殊样式 */
  ${props => props.$isResearchReport && `
    @media (min-width: 1200px) {
      max-width: 1100px;
    }
  `}
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 32px 20px 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px 20px 0 0;
  flex-shrink: 0;
  position: relative;
  
  /* 添加微妙的阴影 */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 24px 24px 16px 24px;
    border-radius: 16px 16px 0 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 20px 14px 20px;
    border-radius: 12px 12px 0 0;
  }
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: #2c3e50;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    gap: 8px;
  }
`;

const ModalCloseButton = styled.button`
  background: rgba(0, 0, 0, 0.05);
  border: none;
  font-size: 24px;
  color: #7f8c8d;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  /* 悬停效果 */
  &:hover {
    background: rgba(231, 76, 60, 0.1);
    color: #e74c3c;
    transform: scale(1.05);
  }
  
  /* 点击效果 */
  &:active {
    transform: scale(0.95);
  }
  
  /* 波纹效果 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(231, 76, 60, 0.2);
    transition: width 0.3s, height 0.3s;
    transform: translate(-50%, -50%);
  }
  
  &:active::before {
    width: 60px;
    height: 60px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
  }
`;

const ModalBody = styled.div`
  padding: 24px 32px 32px 32px;
  line-height: 1.7;
  color: #2c3e50;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  
  /* 自定义滚动条样式 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  
  /* Firefox 滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 20px 24px 24px 24px;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 16px 20px 20px 20px;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

const BusinessSection = styled.div`
  margin-bottom: 36px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  
  /* 微妙的内阴影 */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  
  h3 {
    color: #2c3e50;
    margin-bottom: 18px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: -0.3px;
    
    /* 图标样式 */
    &::before {
      content: '';
      width: 4px;
      height: 20px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 2px;
    }
  }
  
  p {
    margin-bottom: 14px;
    color: #4a5568;
    line-height: 1.6;
    font-size: 15px;
  }
  
  ul {
    margin: 18px 0;
    padding-left: 24px;
    
    li {
      margin-bottom: 10px;
      color: #4a5568;
      line-height: 1.6;
      position: relative;
      
      &::marker {
        color: #3498db;
      }
      
      /* 自定义列表项样式 */
      &::before {
        content: '▸';
        color: #3498db;
        font-weight: bold;
        position: absolute;
        left: -18px;
      }
      
      list-style: none;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 28px;
    padding: 20px;
    border-radius: 12px;
    
    h3 {
      font-size: 18px;
      margin-bottom: 16px;
    }
    
    p {
      font-size: 14px;
      margin-bottom: 12px;
    }
    
    ul {
      padding-left: 20px;
      margin: 16px 0;
      
      li {
        margin-bottom: 8px;
        
        &::before {
          left: -16px;
        }
      }
    }
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-right: 16px;
  margin-bottom: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  
  /* 光泽效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(52, 152, 219, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(52, 152, 219, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
    margin-right: 12px;
    margin-bottom: 12px;
    border-radius: 10px;
  }
`;

const QQButton = styled(ContactButton)`
  background: linear-gradient(135deg, #12b7f5 0%, #0e9de8 100%);
  
  &:hover {
    box-shadow: 0 12px 32px rgba(18, 183, 245, 0.4);
  }
  
  &:active {
    box-shadow: 0 6px 16px rgba(18, 183, 245, 0.3);
  }
`;

const WeChatButton = styled(ContactButton)`
  background: linear-gradient(135deg, #07c160 0%, #06ad56 100%);
  
  &:hover {
    box-shadow: 0 12px 32px rgba(7, 193, 96, 0.4);
  }
  
  &:active {
    box-shadow: 0 6px 16px rgba(7, 193, 96, 0.3);
  }
`;



// 批量分析选择弹窗样式
const BatchAnalysisOption = styled.div`
  padding: 24px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
  
  /* 装饰性元素 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #007acc, #00a8e6);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    border-color: #007acc;
    background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 122, 204, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 122, 204, 0.12);
  }
  
  h3 {
    margin: 0 0 12px 0;
    color: #2c3e50;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.3px;
    
    /* 图标样式 */
    &::before {
      content: '🔍';
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(0, 122, 204, 0.1);
      border-radius: 12px;
    }
  }
  
  p {
    margin: 0;
    color: #5a6c7d;
    font-size: 15px;
    line-height: 1.6;
    padding-left: 52px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 16px;
    border-radius: 12px;
    
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
      gap: 10px;
      
      &::before {
        width: 36px;
        height: 36px;
        font-size: 20px;
        border-radius: 10px;
      }
    }
    
    p {
      font-size: 14px;
      padding-left: 46px;
    }
  }
`;

const ReportContent = styled.div`
  line-height: 1.6;
  color: #2c3e50;
  font-size: 16px;
  max-width: none;
  
  /* 一级标题样式 */
  h1 {
    color: #1a202c;
    font-size: 26px;
    font-weight: 700;
    margin: 28px 0 20px 0;
    padding: 16px 0 12px 0;
    border-bottom: 4px solid #007acc;
    position: relative;
    letter-spacing: -0.5px;
    
    &:first-child {
      margin-top: 0;
    }
    
    /* 添加装饰性元素 */
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 二级标题样式 */
  h2 {
    color: #1a202c;
    font-size: 24px;
    font-weight: 700;
    margin: 26px 0 16px 0;
    padding: 14px 0 10px 0;
    position: relative;
    letter-spacing: -0.5px;
    
    &:first-child {
      margin-top: 0;
    }
    
    /* 主标题装饰 */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, #007acc 0%, rgba(0, 122, 204, 0.3) 70%, transparent 100%);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 三级标题样式 */
  h3 {
    color: #2d3748;
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0 12px 0;
    padding: 10px 0 6px 16px;
    border-left: 4px solid #007acc;
    background: linear-gradient(90deg, rgba(0, 122, 204, 0.05) 0%, transparent 100%);
    border-radius: 0 8px 8px 0;
    letter-spacing: -0.3px;
    position: relative;
    
    /* 左侧装饰 */
    &::before {
      content: '';
      position: absolute;
      left: -4px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(135deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 段落样式 - 减少间距 */
  p {
    margin: 12px 0;
    text-align: justify;
    line-height: 1.6;
    color: #4a5568;
    text-indent: 0;
    
    /* 首段特殊样式 */
    &:first-of-type {
      font-size: 17px;
      color: #2d3748;
      font-weight: 500;
    }
  }
  
  ul {
    margin: 14px 0;
    padding-left: 0;
    list-style: none;
    
    li {
      margin-bottom: 8px;
      line-height: 1.6;
      position: relative;
      padding-left: 28px;
      color: #4a5568;
      
      /* 自定义列表项图标 */
      &::before {
        content: '▶';
        position: absolute;
        left: 0;
        top: 0;
        color: #007acc;
        font-weight: bold;
        width: 20px;
        height: 20px;
        background: rgba(0, 122, 204, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        margin-top: 2px;
      }
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  strong {
    color: #1a202c;
    font-weight: 700;
    background: rgba(0, 122, 204, 0.08);
    padding: 2px 4px;
    border-radius: 4px;
  }
  
  /* 斜体文本样式 */
  em {
    font-style: italic;
    color: #4a5568;
  }
  
  /* 代码样式 */
  code {
    background: #f7fafc;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 14px;
    color: #e53e3e;
  }
  
  /* 引用样式 */
  blockquote {
    margin: 14px 0;
    padding: 12px 16px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-left: 4px solid #007acc;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #495057;
  }
  
  /* 响应式优化 */
  @media (max-width: 768px) {
    font-size: 15px;
    
    h1 {
      font-size: 22px;
      margin: 24px 0 16px 0;
      padding: 12px 0 8px 0;
      
      &::after {
        width: 80px;
        height: 3px;
      }
    }
    
    h2 {
      font-size: 20px;
      margin: 22px 0 14px 0;
      padding: 12px 0 8px 0;
      
      &::after {
        width: 60px;
        height: 2px;
      }
    }
    
    h3 {
      font-size: 18px;
      margin: 18px 0 10px 0;
      padding: 8px 0 4px 14px;
    }
    
    p {
      margin: 10px 0;
      
      &:first-of-type {
        font-size: 16px;
      }
    }
    
    ul {
      margin: 12px 0;
      
      li {
        margin-bottom: 6px;
        padding-left: 24px;
        
        &::before {
          width: 18px;
          height: 18px;
          font-size: 9px;
        }
      }
    }
    
    blockquote {
      margin: 12px 0;
      padding: 10px 14px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    
    h1 {
      font-size: 20px;
      margin: 20px 0 14px 0;
      
      &::after {
        width: 60px;
        height: 2px;
      }
    }
    
    h2 {
      font-size: 18px;
      margin: 18px 0 12px 0;
    }
    
    h3 {
      font-size: 16px;
      margin: 16px 0 10px 0;
      padding: 6px 0 2px 12px;
    }
    
    ul li {
      padding-left: 20px;
      
      &::before {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const ReportFooter = styled.div`
  margin-top: 32px;
  padding: 24px 0 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 0 0 16px 16px;
  position: relative;
  
  /* 顶部装饰线 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 122, 204, 0.2), transparent);
  }
  
  p {
    color: #6c757d;
    font-size: 14px;
    margin: 0;
    flex: 1;
    line-height: 1.5;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    margin-top: 28px;
    padding: 20px 0 0 0;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    
    p {
      text-align: center;
      font-size: 13px;
    }
  }
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #007acc 0%, #005a9a 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0, 122, 204, 0.2);
  
  /* 光泽效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #005a9a 0%, #004080 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 122, 204, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #adb5bd 0%, #868e96 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &::before {
      display: none;
    }
  }
  
  /* 成功状态 */
  &.success {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    
    &:hover {
      background: linear-gradient(135deg, #218838 0%, #1e7e34 100%);
      box-shadow: 0 8px 24px rgba(40, 167, 69, 0.4);
    }
  }
  
  /* 点击波纹效果 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%);
    transition: width 0.4s, height 0.4s;
    pointer-events: none;
  }
  
  &:active::after {
    width: 140px;
    height: 140px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 13px;
    gap: 8px;
    border-radius: 10px;
    
    &::after {
      transition: width 0.3s, height 0.3s;
    }
    
    &:active::after {
      width: 100px;
      height: 100px;
    }
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  
  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(0, 122, 204, 0.1);
    border-top: 4px solid #007acc;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    position: relative;
    
    /* 内部装饰圆圈 */
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 6px;
      right: 6px;
      bottom: 6px;
      border: 2px solid rgba(0, 168, 230, 0.2);
      border-top: 2px solid #00a8e6;
      border-radius: 50%;
      animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  p {
    margin-top: 24px;
    color: #6c757d;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.3px;
    
    /* 文字淡入淡出动画 */
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    padding: 50px 30px;
    
    .spinner {
      width: 42px;
      height: 42px;
      border-width: 3px;
      
      &::before {
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-width: 2px;
      }
    }
    
    p {
      margin-top: 20px;
      font-size: 14px;
    }
  }
`;

const TypingCursor = styled.div`
  display: inline-block;
  width: 3px;
  height: 22px;
  background: linear-gradient(135deg, #007acc, #00a8e6);
  margin-left: 4px;
  border-radius: 2px;
  animation: blink 1.2s ease-in-out infinite;
  
  @keyframes blink {
    0%, 45% { 
      opacity: 1; 
      transform: scaleY(1);
    }
    50%, 95% { 
      opacity: 0.3; 
      transform: scaleY(0.8);
    }
    100% { 
      opacity: 1; 
      transform: scaleY(1);
    }
  }
  
  @media (max-width: 768px) {
    width: 2px;
    height: 20px;
    margin-left: 3px;
  }
`;

  // 主应用组件
const App = () => {
  // 状态管理
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // 处理文本格式化（加粗、斜体等）- 与 ResearchReportCard 保持一致
  const renderTextWithFormatting = useCallback((text) => {
    if (!text) return '';
    
    // 处理加粗文本 *text* 或 **text**
    let formattedText = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
    
    // 处理斜体文本 _text_
    formattedText = formattedText.replace(/_([^_]+)_/g, '<em>$1</em>');
    
    // 处理行内代码 `code`
    formattedText = formattedText.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  }, []);

  const [currentQuery, setCurrentQuery] = useState('');
  const [currentFilters, setCurrentFilters] = useState({});
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalResults: 0,
    resultsPerPage: 20,
  });
  const [searchTime, setSearchTime] = useState(null);
  
  // 弹窗状态管理 - 必须在useEffect之前定义
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showLogViewer, setShowLogViewer] = useState(false);
  const [showBatchAnalysisModal, setShowBatchAnalysisModal] = useState(false);
  const [showResearchReportModal, setShowResearchReportModal] = useState(false);
  const [showCustomerServiceModal, setShowCustomerServiceModal] = useState(false);
  const [researchReport, setResearchReport] = useState('');
  const [generatingReport, setGeneratingReport] = useState(false);
  
  // 研究报告开关状态
  const [isReportSwitchEnabled, setIsReportSwitchEnabled] = useState(true);
  const [triggerReportGeneration, setTriggerReportGeneration] = useState(0);
  
  // 研究领域状态
  const [currentResearchDomain, setCurrentResearchDomain] = useState(null);
  
  // 重复搜索确认对话框状态
  const [showDuplicateSearchDialog, setShowDuplicateSearchDialog] = useState(false);
  const [pendingSearchParams, setPendingSearchParams] = useState(null);
  
  // AI搜索继续执行的参数
  const [continueAISearchParams, setContinueAISearchParams] = useState(null);
  
  // 初始化分析工具
  useEffect(() => {
    initPageTracking();
    // 记录应用启动事件
    trackUserBehavior('app_start', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    });
  }, []);

  // 防止弹窗打开时背景滚动
  useEffect(() => {
    const isAnyModalOpen = showBusinessModal || showFeedbackModal || 
                          showBatchAnalysisModal || showResearchReportModal || showLogViewer;
    
    if (isAnyModalOpen) {
      // 保存当前滚动位置
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // 恢复滚动
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    
    // 清理函数
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [showBusinessModal, showFeedbackModal, showBatchAnalysisModal, showResearchReportModal, showLogViewer]);
  
  // ESC键关闭弹窗
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (showLogViewer) {
          setShowLogViewer(false);
        } else if (showResearchReportModal) {
          setShowResearchReportModal(false);
        } else if (showBatchAnalysisModal) {
          setShowBatchAnalysisModal(false);

        } else if (showFeedbackModal) {
          setShowFeedbackModal(false);
        } else if (showBusinessModal) {
          setShowBusinessModal(false);
        } else if (showCustomerServiceModal) {
          setShowCustomerServiceModal(false);
        }
      }
      // 开发者快捷键：Ctrl+Shift+L 打开API日志查看器
      if (event.ctrlKey && event.shiftKey && event.key === 'L' && process.env.NODE_ENV === 'development') {
        event.preventDefault();
        setShowLogViewer(!showLogViewer);
      }
    };
    
    const isAnyModalOpen = showBusinessModal || showFeedbackModal || 
                          showBatchAnalysisModal || showResearchReportModal || showLogViewer || showCustomerServiceModal;
    
    if (isAnyModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showBusinessModal, showFeedbackModal, showBatchAnalysisModal, showResearchReportModal, showLogViewer, showCustomerServiceModal]);
  
  // 数据源选择 - 从localStorage读取或默认使用Primary Scraping
  const [dataSource, setDataSource] = useState(() => {
    try {
      const savedDataSource = localStorage.getItem('selectedDataSource');
      // 验证保存的数据源是否有效
      if (savedDataSource && FILTER_CONFIGS[savedDataSource]) {
            return savedDataSource;
      }
    } catch (error) {
      console.warn('读取localStorage数据源失败:', error);
    }
    // 默认返回Primary Scraping
    return 'primaryScraping';
  });
  
  // 数据源切换处理函数
  const handleDataSourceChange = useCallback((newDataSource) => {
    // 跟踪数据源切换事件
    trackDataSourceChange(dataSource, newDataSource);
    
    // 保存数据源选择到localStorage
    try {
      localStorage.setItem('selectedDataSource', newDataSource);
    } catch (error) {
      console.warn('保存数据源到localStorage失败:', error);
    }
    
    // 清空搜索结果和相关状态，但保留查询内容
    setSearchResults([]);
    // 注释掉清空查询的逻辑，让用户的搜索内容保持不变
    // setCurrentQuery('');
    setCurrentFilters({});
    setPagination({
      currentPage: 1,
      totalResults: 0,
      resultsPerPage: 20,
    });
    setSearchTime(null);
    
    // 清空AI分析结果
    setAnalysisResults({});
    setBatchAnalyzing(false);
    setAnalysisDimensions([]);
    setAnalysisProgress(0);
    setAnalysisTotal(0);
    setAnalysisCurrentPaper('');
    setAnalysisCancelled(false);
    
    // 清空翻译结果
    setTranslationResults({});
    setBatchTranslating(false);
    setTranslationProgress(0);
    setTranslationTotal(0);
    setShowTranslations(false);
    
    // 重置滚动状态
    setScrollPosition(0);
    setMaxScroll(100);
    setIsToolbarScrolled(false);
    setToolbarOriginalTop(0);
    
    // 清空上次搜索记录，避免不同数据源间的重复搜索误判
    lastSearchRef.current = { query: '', filters: {}, dataSource: '' };
    
    // 最后设置新的数据源
    setDataSource(newDataSource);
  }, [dataSource]);

  // 数据源切换并重新搜索函数
  const handleDataSourceSwitchAndSearch = useCallback(async (newDataSource) => {
    if (!currentQuery.trim() || newDataSource === dataSource) return;
    
    // 保存数据源选择到localStorage
    try {
      localStorage.setItem('selectedDataSource', newDataSource);
    } catch (error) {
      console.warn('保存数据源到localStorage失败:', error);
    }
    
    // 首先切换数据源
    setDataSource(newDataSource);
    
    // 清空当前结果
    setSearchResults([]);
    setLoading(true);
    
    try {
      const startTime = Date.now();
      
      // 使用与主搜索函数相同的参数调用方式
      const resultsPerPage = 20;
      const offset = 0; // 第一页
      const results = await searchPapers(
        currentQuery.trim(),
        offset,
        resultsPerPage,
        'relevance', // 默认按相关性排序
        {}, // 不带筛选条件
        newDataSource
      );
      
      const endTime = Date.now();
      const searchDuration = endTime - startTime;
      
      setSearchResults(results.papers || []);
      setPagination({
        currentPage: 1,
        totalResults: results.total || 0, // 注意这里是 total 不是 totalResults
        resultsPerPage: resultsPerPage,
      });
      setSearchTime(searchDuration);
      setCurrentFilters({}); // 清空筛选条件
      
      // 跟踪数据源切换后的搜索事件
      trackSearch(currentQuery, newDataSource, results.papers?.length || 0, searchDuration, {});
      trackDataSourceSearch(newDataSource, currentQuery, results.papers?.length || 0, searchDuration, {});
      
    } catch (err) {
      console.error('数据源切换搜索失败:', err);
      trackError('datasource_switch_search_error', err.message, `switching to ${newDataSource}`);
    } finally {
      setLoading(false);
    }
  }, [currentQuery, dataSource]);

  // 获取其他可用数据源（排除禁用的数据源）
  const getAlternativeDataSources = useCallback(() => {
    return Object.keys(FILTER_CONFIGS).filter(source => 
      source !== dataSource && !FILTER_CONFIGS[source].disabled
    );
  }, [dataSource]);

  // 获取下一个数据源（按固定顺序循环）
  const getNextDataSource = useCallback(() => {
    // 定义数据源的循环顺序
    const dataSourceOrder = ['primaryScraping', 'googleScholar', 'semantic'];
    
    // 过滤掉禁用的数据源
    const availableSources = dataSourceOrder.filter(source => 
      FILTER_CONFIGS[source] && !FILTER_CONFIGS[source].disabled
    );
    
    // 找到当前数据源在可用列表中的索引
    const currentIndex = availableSources.findIndex(source => source === dataSource);
    
    // 如果找到当前数据源，返回下一个；否则返回第一个
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % availableSources.length;
      return availableSources[nextIndex];
    } else {
      // 如果当前数据源不在可用列表中，返回第一个可用的
      return availableSources[0] || dataSource;
    }
  }, [dataSource]);

  // 移除了不再使用的 getAvailableDataSourceNames 函数


  
  // 全局可见性控制
  const [showInfo] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const setShowInfo = useState(true)[1];
  const [showSummary, setShowSummary] = useState(false); // 默认内嵌在左侧信息卡片中
  const [showPurpose, setShowPurpose] = useState(true); // 默认显示研究目的卡片
  const [showMethods, setShowMethods] = useState(true); // 默认显示研究方法卡片
  const [showMetrics, setShowMetrics] = useState(true); // 默认显示测量指标卡片
  const [showResults, setShowResults] = useState(true); // 默认显示研究结果卡片
  
  // 保留这些状态以向下兼容，但不再直接在UI中使用
  // 任一为 true 时，Summary 独立显示；两者都为 false 时，Summary 内嵌在左侧
  const [showAbstract, setShowAbstract] = useState(false); // 默认内嵌在左侧
  const [showSnippet, setShowSnippet] = useState(false);
  
  // AI分析状态
  const [analysisResults, setAnalysisResults] = useState({});
  const [batchAnalyzing, setBatchAnalyzing] = useState(false);
  const [analysisDimensions, setAnalysisDimensions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [analysisProgress, setAnalysisProgress] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [analysisTotal, setAnalysisTotal] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [analysisCurrentPaper, setAnalysisCurrentPaper] = useState('');
  const [analysisCancelled, setAnalysisCancelled] = useState(false);
  

  
  // 批量翻译状态
  const [translationResults, setTranslationResults] = useState({});
  const [batchTranslating, setBatchTranslating] = useState(false);
  const [translationProgress, setTranslationProgress] = useState(0);
  const [translationTotal, setTranslationTotal] = useState(0);
  const [showTranslations, setShowTranslations] = useState(false);

  // AI模型选择
  const [selectedModel, setSelectedModel] = useState(AI_MODELS.GPT_4O_2024);
  const modelOptions = [
    { value: AI_MODELS.GPT_4O_2024, label: 'GPT-4o' },
    { value: AI_MODELS.DEEPSEEK_V3, label: 'DeepSeek' },
    { value: AI_MODELS.GPT_4O_MINI, label: 'GPT-4o Mini' }
  ];
  
  // 滚动控制状态
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(100); // 给一个初始默认值
  // eslint-disable-next-line no-unused-vars
  const [showController, setShowController] = useState(true); // 始终显示控制器
  // eslint-disable-next-line no-unused-vars
  const cardGridsRef = useRef([]);
  const resultsContainerRef = useRef(null);
  
  // 工具栏滚动状态
  const [isToolbarScrolled, setIsToolbarScrolled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [toolbarHeight, setToolbarHeight] = useState(0);
  const [toolbarOriginalTop, setToolbarOriginalTop] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [toolbarBottom, setToolbarBottom] = useState(0);
  const toolbarRef = useRef(null);
  
  // 移除了AI提示气泡相关的状态和逻辑


  
  // 输入框聚焦状态
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);

    // changelogData已迁移到EvolutionTree组件中
  
  // 当 Summary 状态改变时，同步更新 abstract 和 snippet 状态
  useEffect(() => {
    setShowAbstract(showSummary);
    setShowSnippet(showSummary);
  }, [showSummary]);
  
  // 当搜索结果变化时，重置滚动位置和翻译状态
  useEffect(() => {
    setScrollPosition(0);
    // 重置工具栏状态
    setIsToolbarScrolled(false);
    setToolbarOriginalTop(0);
    // 重置翻译状态
    setTranslationResults({});
    setShowTranslations(false);
    // 延迟计算最大滚动距离，等待DOM渲染完成
    setTimeout(() => updateMaxScroll(), 300);
  }, [searchResults]);
  
  // 当分析结果变化时，更新最大滚动距离
  useEffect(() => {
    // 延迟计算最大滚动距离，等待DOM渲染完成
    const timer = setTimeout(() => updateMaxScroll(), 300);
    return () => clearTimeout(timer);
  }, [analysisResults, showPurpose, showMethods, showMetrics, showResults]);
  
  // 添加全局wheel事件监听，处理所有卡片区域的同步滚动
  useEffect(() => {
    // 为滚动添加防抖机制
    let lastWheelTime = 0;
    let accumulatedDelta = 0;
    let animationFrameId = null;
    
    const handleGlobalWheel = (e) => {
      // 检查是否按下了Shift键或者是触摸板的横向滚动
      if ((e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) && searchResults.length > 0) {
        e.preventDefault(); // 阻止默认滚动行为
        
        const now = Date.now();
        
        // 计算滚动增量
        const scrollDelta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        
        // 在短时间内累积滚动增量，实现平滑滚动效果
        accumulatedDelta += scrollDelta;
        
        // 防抖：限制滚动更新频率，提高性能
        if (now - lastWheelTime > 20 || Math.abs(accumulatedDelta) > 50) {
          // 取消之前的动画帧请求
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
          
          // 在下一动画帧更新滚动位置
          animationFrameId = requestAnimationFrame(() => {
            // 获取所有卡片区域
            const cardGrids = document.querySelectorAll('.analysis-cards');
            if (cardGrids.length > 0) {
              // 计算新的滚动位置
              let newPosition = scrollPosition + accumulatedDelta;
              
              // 限制在有效范围内
              newPosition = Math.max(0, Math.min(maxScroll, newPosition));
              
              // 只有当新位置与当前位置有明显差异时才更新
              if (Math.abs(newPosition - scrollPosition) > 1) {
                // 同步所有卡片区域的滚动位置
                cardGrids.forEach(grid => {
                  grid.scrollLeft = newPosition;
                });
                
                // 更新全局滚动状态
                setScrollPosition(newPosition);
              }
              
              // 重置累积增量
              accumulatedDelta = 0;
              animationFrameId = null;
            }
          });
          
          lastWheelTime = now;
        }
      }
    };
    
    // 添加全局wheel事件监听
    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [searchResults.length, scrollPosition, maxScroll]);
  
  // 确保组件挂载时也更新滚动距离
  useEffect(() => {
    // 立即执行一次
    updateMaxScroll();
    
    // 然后延迟执行，确保DOM完全渲染
    const timer = setTimeout(() => updateMaxScroll(), 500);
    return () => clearTimeout(timer);
  }, []);
  
  // 处理窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      updateMaxScroll();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 监听页面滚动，检测工具栏是否应该显示滚动样式
  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      // 清除之前的定时器
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // 防抖处理
      timeoutId = setTimeout(() => {
        if (toolbarRef.current) {
          const rect = toolbarRef.current.getBoundingClientRect();
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
          
          // 如果还没有记录原始位置且工具栏可见，记录一下
          if (toolbarOriginalTop === 0 && !isToolbarScrolled && rect.height > 0) {
            const toolbarOffsetTop = rect.top + currentScrollY;
            setToolbarOriginalTop(toolbarOffsetTop);
          }
          
          // 判断是否应该吸顶
          // 当滚动位置超过工具栏原始位置时，启用吸顶模式
          if (toolbarOriginalTop > 0) {
            const shouldStick = currentScrollY >= toolbarOriginalTop - 10; // 10px 容差
            
            if (shouldStick !== isToolbarScrolled) {
              setIsToolbarScrolled(shouldStick);
            }
            
            // 计算工具栏底部位置（用于放置横向滚动条）
            if (shouldStick && rect.height > 0) {
              setToolbarBottom(window.innerHeight - rect.height);
            } else {
              setToolbarBottom(0);
            }
          }
        }
      }, 10); // 10ms 防抖
    };
    
    // 初始化时也检查一次
    setTimeout(() => handleScroll(), 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [searchResults.length, toolbarOriginalTop, isToolbarScrolled]); // 添加依赖
  
  // 计算最大滚动距离
  const updateMaxScroll = () => {
    const cardGrids = document.querySelectorAll('.analysis-cards');
    if (cardGrids.length > 0) {
      // 找到所有卡片网格中最大的滚动宽度
      let maxScrollValue = 0;
      cardGrids.forEach((grid, index) => {
        const scrollWidth = grid.scrollWidth - grid.clientWidth;
        maxScrollValue = Math.max(maxScrollValue, scrollWidth);
      });
      // 确保最小值为100，防止滚动控制器显示不正确
      const finalMaxScroll = Math.max(maxScrollValue, 100);
      setMaxScroll(finalMaxScroll);
      return finalMaxScroll;
    } else {
      setMaxScroll(100); // 设置一个默认值
      return 100;
    }
  };
  
  // 处理滚动
  const handleScroll = (direction, step, verticalStep = 0) => {
    // 处理水平滚动
    const cardGrids = document.querySelectorAll('.analysis-cards');
    if (cardGrids.length > 0) {
      let newPosition = scrollPosition;
      
      if (direction === 'left') {
        newPosition = Math.max(0, scrollPosition - step);
      } else if (direction === 'right') {
        newPosition = Math.min(maxScroll, scrollPosition + step);
      } else if (direction === 'set') {
        // 横向滚动条直接设置位置
        newPosition = Math.max(0, Math.min(maxScroll, step));
      }
      
      // 更新所有卡片网格的滚动位置
      cardGrids.forEach(grid => {
        grid.scrollLeft = newPosition;
      });
      
      // 更新状态中的滚动位置
      setScrollPosition(newPosition);
    }
    
    // 处理垂直滚动
    if (verticalStep !== 0) {
      // 获取当前滚动位置和最大可滚动高度
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - window.innerHeight;
      
      // 计算新的滚动位置
      const newVerticalPosition = direction === 'up'
        ? Math.max(0, currentScrollY - verticalStep)
        : Math.min(maxScroll, currentScrollY + verticalStep);
      
      // 尝试多种滚动方法
      try {
        // 方法1: window.scroll
        window.scroll({
          top: newVerticalPosition,
          behavior: 'smooth'
        });
        
        // 方法2: 如果方法1失败，使用 scrollTo
        setTimeout(() => {
          if (Math.abs(window.pageYOffset - newVerticalPosition) > 1) {
            window.scrollTo({
              top: newVerticalPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
        
        // 方法3: 如果前两种方法都失败，使用 document.documentElement
        setTimeout(() => {
          if (Math.abs(window.pageYOffset - newVerticalPosition) > 1) {
            document.documentElement.scrollTo({
              top: newVerticalPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
              } catch (error) {
          // 降级方案：直接设置 scrollTop
          document.documentElement.scrollTop = newVerticalPosition;
        }
    }
  };
  
  // 处理滚动位置更新
  const handleScrollPositionUpdate = (position) => {
    // 如果新位置与当前位置相同或非常接近，不执行更新以避免抖动
    if (Math.abs(position - scrollPosition) < 2) {
      return;
    }
    
    // 更新全局滚动位置状态
    setScrollPosition(position);
    
    // 优化：使用requestAnimationFrame确保滚动同步在下一帧渲染前执行
    requestAnimationFrame(() => {
      // 同步更新所有卡片的滚动位置
      const cardGrids = document.querySelectorAll('.analysis-cards');
      if (cardGrids.length > 0) {
        // 防止重复同步导致的抖动
        const threshold = 5; // 5像素的阈值，减少不必要的同步
        
        cardGrids.forEach((grid, index) => {
          // 只有当滚动位置差异超过阈值时才同步
          if (Math.abs(grid.scrollLeft - position) > threshold) {
            grid.scrollLeft = position;
          }
        });
      }
    });
  };
  
  // 上次搜索参数的引用，用于检测重复搜索
  const lastSearchRef = useRef({ query: '', filters: {}, dataSource: '' });
  
  // 实际执行搜索的函数（不包含重复检测）
  const executeSearch = useCallback(async (query, filters = {}, page = 1, shouldGenerateReport = false) => {
    console.log('执行实际搜索:', { query, filters, page, shouldGenerateReport });
    
    setLoading(true);
    const startTime = Date.now();
    
    try {
      const resultsPerPage = 20;
      const offset = (page - 1) * resultsPerPage;
      const result = await searchPapers(
        query,
        offset,
        resultsPerPage,
        filters.sort || 'relevance',
        filters,
        dataSource
      );

      setSearchResults(result.papers || []);
      setPagination(prev => ({
        currentPage: page,
        totalResults: result.total || 0,
        resultsPerPage: resultsPerPage,
      }));
      setCurrentQuery(query);
      setCurrentFilters(filters);
      const searchDuration = Date.now() - startTime;
      setSearchTime(searchDuration);

      // 记录本次搜索参数
      if (page === 1) {
        lastSearchRef.current = {
          query: query.trim(),
          filters: { ...filters },
          dataSource
        };
        
        // 清空之前的研究报告生成状态
        setTriggerReportGeneration(0);
      }

      // 跟踪搜索事件
      trackSearch(query, dataSource, result.papers?.length || 0, searchDuration, filters);
      trackDataSourceSearch(dataSource, query, result.papers?.length || 0, searchDuration, filters);

      // 滚动到结果顶部
      if (page === 1) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const resultElement = document.querySelector('[data-results-container]');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // 如果启用了研究报告生成
      if (shouldGenerateReport && page === 1 && result.papers && result.papers.length > 0 && isReportSwitchEnabled) {
        console.log('Triggering research report generation for', result.papers.length, 'papers');
        setTimeout(() => {
          setTriggerReportGeneration(prev => prev + 1);
        }, 1000);
      }

    } catch (err) {
      console.error('搜索失败:', err);
      trackError('search_error', err.message, `query: ${query}, dataSource: ${dataSource}`);
      setSearchResults([]);
      setPagination(prev => ({ ...prev, totalResults: 0 }));
    } finally {
      setLoading(false);
    }
  }, [dataSource, isReportSwitchEnabled]);
  
  // 处理搜索确认
  const handleDuplicateSearchConfirm = useCallback(() => {
    setShowDuplicateSearchDialog(false);
    
    if (pendingSearchParams) {
      const { query, filters, page, shouldGenerateReport } = pendingSearchParams;
      
      // 检查是否是AI搜索
      const isAISearch = filters && filters._isAISearch;
      
      // 移除特殊标记，获取真实的filters
      let realFilters = { ...filters };
      if (isAISearch) {
        delete realFilters._isAISearch;
      }
      
      // 再次检查是否为重复搜索（因为用户可能在弹窗期间修改了搜索内容）
      const currentSearchKey = JSON.stringify({ 
        query: query.trim(), 
        filters: realFilters, 
        dataSource
      });
      const lastSearchKey = JSON.stringify({ 
        query: lastSearchRef.current.query, 
        filters: lastSearchRef.current.filters, 
        dataSource: lastSearchRef.current.dataSource
      });
      
      const isRepeatSearch = currentSearchKey === lastSearchKey;
      
      if (isRepeatSearch) {
        // 重复搜索：执行假加载
        console.log('用户确认后检测到重复搜索，执行假加载');
        setLoading(true);
        
        // 模拟加载时间（500-800ms的随机延迟）
        const fakeLoadingTime = 500 + Math.random() * 300;
        
        setTimeout(() => {
          setLoading(false);
          // 滚动到结果顶部，给用户一种重新搜索的感觉
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, fakeLoadingTime);
      } else {
        // 非重复搜索：清空数据并执行真实搜索
        console.log('用户确认，执行真实搜索');
        
        if (isAISearch) {
          // AI搜索：只清空搜索结果，保持UI状态，让SearchForm处理
          console.log('AI搜索：清空结果并触发AI搜索');
          setSearchResults([]);
          setPagination(prev => ({ ...prev, totalResults: 0 }));
          setCurrentResearchDomain(null);
          setTriggerReportGeneration(0);
          
          // 清空重复搜索检测缓存，强制执行新搜索
          lastSearchRef.current = { query: '', filters: {}, dataSource: '' };
          
          // 设置一个状态来触发AI搜索
          setContinueAISearchParams({ query, filters: realFilters, page, shouldGenerateReport });
        } else {
          // 普通搜索：完全清空状态
          console.log('普通搜索：完全清空状态并执行搜索');
          setSearchResults([]);
          setPagination(prev => ({ ...prev, totalResults: 0 }));
          setCurrentQuery('');
          setCurrentFilters({});
          setCurrentResearchDomain(null);
          setTriggerReportGeneration(0);
          
          // 清空重复搜索检测缓存，强制执行新搜索
          lastSearchRef.current = { query: '', filters: {}, dataSource: '' };
          
          // 执行普通搜索
          executeSearch(query, filters, page, shouldGenerateReport);
        }
      }
      
      setPendingSearchParams(null);
    }
  }, [pendingSearchParams, executeSearch, dataSource]);
  
  // 处理重复搜索取消
  const handleDuplicateSearchCancel = useCallback(() => {
    setShowDuplicateSearchDialog(false);
    setPendingSearchParams(null);
  }, []);
  
  // 搜索函数
  const handleSearch = useCallback(async (query, filters = {}, page = 1, shouldGenerateReport = false) => {
    if (!query.trim()) return;

    // 如果是新的搜索（第一页），重置研究领域状态
    if (page === 1) {
      setCurrentResearchDomain(null);
    }

    // 只在第一页搜索且页面有数据时处理
    if (page === 1 && searchResults.length > 0) {
      // 检测是否为重复搜索
      const currentSearchKey = JSON.stringify({ 
        query: query.trim(), 
        filters, 
        dataSource
      });
      const lastSearchKey = JSON.stringify({ 
        query: lastSearchRef.current.query, 
        filters: lastSearchRef.current.filters, 
        dataSource: lastSearchRef.current.dataSource
      });
      
      const isRepeatSearch = currentSearchKey === lastSearchKey;
      
      if (isRepeatSearch) {
        // 重复搜索：直接执行假加载，不弹窗
        console.log('检测到重复搜索，自动执行假加载');
        setLoading(true);
        
        // 模拟加载时间（500-800ms的随机延迟）
        const fakeLoadingTime = 500 + Math.random() * 300;
        
        setTimeout(() => {
          setLoading(false);
          // 滚动到结果顶部，给用户一种重新搜索的感觉
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, fakeLoadingTime);
        
        return; // 直接返回，不执行真实搜索
      } else {
        // 非重复搜索：弹窗确认
        console.log('页面已有数据，显示确认对话框');
        
        // 保存当前搜索参数，等待用户确认
        setPendingSearchParams({ 
          query, 
          filters, 
          page, 
          shouldGenerateReport
        });
        setShowDuplicateSearchDialog(true);
        
        return; // 直接返回，等待用户确认
      }
    }
    
    // 如果是分页或页面没有数据，直接执行搜索
    executeSearch(query, filters, page, shouldGenerateReport);
  }, [dataSource, searchResults.length, executeSearch]);



  // 分页处理
  const handlePageChange = useCallback((page) => {
    handleSearch(currentQuery, currentFilters, page, false); // 分页时不自动生成报告
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuery, currentFilters, handleSearch]);

  // 论文点击处理 - 跳转到出版商官方链接
  const handlePaperClick = useCallback((paper) => {

    
    // 获取出版商官方链接的辅助函数
    const getOfficialPublisherUrl = (paper) => {
      if (!paper.externalIds) return null;
      
      // 优先级：DOI > ArXiv > PubMed > 其他
      // 可对接: DOI官方解析服务、ArXiv预印本服务器、PubMed医学文献数据库等
      if (paper.externalIds.DOI) {
        // 官方地址: https://doi.org/
        return `https://doi.example-resolver.com/${paper.externalIds.DOI}`;
      }
      
      if (paper.externalIds.ArXiv) {
        // 官方地址: https://arxiv.org/abs/
        return `https://preprint.example-archive.com/abs/${paper.externalIds.ArXiv}`;
      }
      
      if (paper.externalIds.PubMed) {
        // 官方地址: https://pubmed.ncbi.nlm.nih.gov/
        return `https://medical.example-database.com/${paper.externalIds.PubMed}/`;
      }
      
      if (paper.externalIds.ACL) {
        // 官方地址: https://aclanthology.org/
        return `https://acl.example-anthology.com/${paper.externalIds.ACL}`;
      }
      
      if (paper.externalIds.DBLP) {
        // 官方地址: https://dblp.org/rec/
        return `https://cs.example-bibliography.com/rec/${paper.externalIds.DBLP}`;
      }
      
      return null;
    };
    
    // 优先跳转到出版商官方链接
    const officialUrl = getOfficialPublisherUrl(paper);
    if (officialUrl) {
      window.open(officialUrl, '_blank');
    } else if (paper.url) {
      // 备选：跳转到 Semantic Scholar 页面
      window.open(paper.url, '_blank');
    }
  }, []);

  // 作者点击处理
  const handleAuthorClick = useCallback((author) => {

    // 这里可以扩展为搜索该作者的论文
    if (author.name) {
      handleSearch(`author:"${author.name}"`, {}, 1);
    }
  }, [handleSearch]);



  // 检查是否有活跃的筛选条件
  const hasActiveFilters = Object.values(currentFilters).some(value => 
    value !== '' && value !== 'relevance'
  );

  // 格式化搜索时间
  const formatSearchTime = (timeMs) => {
    if (timeMs < 1000) return `${timeMs}ms`;
    return `${(timeMs / 1000).toFixed(2)}s`;
  };

  // 初始化效果
  useEffect(() => {
    // 初始化时记录加载信息

  }, []);



  // 分析结果处理
  const handleAnalysisComplete = useCallback((paperId, dimension, result) => {
    setAnalysisResults(prev => {
      const newResults = { ...prev };
      if (!newResults[paperId]) {
        newResults[paperId] = {};
      }
      newResults[paperId][dimension] = result;
      return newResults;
    });
    
    // 更新进度
    setAnalysisProgress(prev => prev + 1);
  }, []);

  // 执行传统批量分析（获取当前所有分析卡片）
  const handleTraditionalBatchAnalysis = useCallback(async () => {
    // 确定要分析的维度
    const dimensions = [];
    if (showPurpose) dimensions.push('research_purpose');
    if (showMethods) dimensions.push('research_methods');
    if (showMetrics) dimensions.push('metrics');
    if (showResults) dimensions.push('research_results');
    
    if (dimensions.length === 0) {
      alert('请至少选择一个分析维度');
      return;
    }
    
    // 不再需要关闭弹窗，因为直接调用
    
    // 设置分析状态
    setBatchAnalyzing(true);
    setAnalysisDimensions(dimensions);
    setAnalysisProgress(0);
    setAnalysisTotal(searchResults.length * dimensions.length);
    setAnalysisCancelled(false);
    
    try {
      // 批量分析
      // 使用自定义进度回调
      const onProgress = (paperIndex, dimensionIndex, result) => {
        if (analysisCancelled) return;
        
        // 设置当前处理的论文标题
        const paperTitle = searchResults[paperIndex]?.title || '';
        if (paperTitle) {
          setAnalysisCurrentPaper(paperTitle);
        }
        
        // 更新分析结果
        handleAnalysisComplete(
          result.paperId,
          result.dimension,
          result.result
        );
      };
      
      await batchAnalyzePapers(searchResults, dimensions, onProgress, selectedModel);
    } catch (error) {
      console.error('批量分析失败:', error);
      alert(`批量分析失败: ${error.message}`);
    } finally {
      setBatchAnalyzing(false);
      // 重置分析状态
      setAnalysisProgress(0);
      setAnalysisTotal(0);
      setAnalysisCurrentPaper('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults, showPurpose, showMethods, showMetrics, showResults, analysisCancelled, handleAnalysisComplete, selectedModel]);

  // 批量分析处理 - 直接执行传统批量分析
  const handleBatchAnalysis = useCallback(() => {
    if (searchResults.length === 0) {
      alert('没有论文可供分析');
      return;
    }
    
    if (batchAnalyzing) {
      return;
    }
    
    // 直接执行传统批量分析
    handleTraditionalBatchAnalysis();
  }, [searchResults.length, batchAnalyzing, handleTraditionalBatchAnalysis]);

  // 生成研究报告（支持流式传输）- 主要功能已移至 ResearchReportCard 组件


  // 复制研究报告到剪贴板
  const handleCopyReport = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(researchReport);
      // 可以添加一个临时的成功提示
      const originalText = researchReport;
      setResearchReport(originalText + '\n\n✅ 已复制到剪贴板');
      setTimeout(() => {
        setResearchReport(originalText);
      }, 2000);
    } catch (error) {
      console.error('复制失败:', error);
      // 降级方案：使用传统的选择文本方法
      const textArea = document.createElement('textarea');
      textArea.value = researchReport;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      // 显示成功提示
      const originalText = researchReport;
      setResearchReport(originalText + '\n\n✅ 已复制到剪贴板');
      setTimeout(() => {
        setResearchReport(originalText);
      }, 2000);
    }
  }, [researchReport]);

  // 处理搜索输入框聚焦状态变化
  const handleSearchInputFocusChange = useCallback((focused) => {
    setIsSearchInputFocused(focused);
  }, []);

  // 处理筛选器状态变化
  const [showFilters, setShowFilters] = useState(false);
  const handleFiltersChange = useCallback((isFiltersOpen) => {
    setShowFilters(isFiltersOpen);
  }, []);
  
  // 处理研究领域变化
  const handleResearchDomainChange = useCallback((researchDomain, domainInfo) => {
    // 延迟设置研究领域，确保搜索结果和加载状态已经更新完成
    setTimeout(() => {
      // 如果当前检测到的是医学领域，立即设置
      if (researchDomain === 'medicine') {
        setCurrentResearchDomain('medicine');
      } else if (!currentResearchDomain || currentResearchDomain !== 'medicine') {
        // 只有在当前没有医学领域或当前不是医学领域时，才设置其他领域
        setCurrentResearchDomain(researchDomain);
      }
    }, 200); // 延迟200ms确保其他状态更新完成
  }, [currentResearchDomain]);
  
  // 处理研究报告开关状态变化
  const handleReportSwitchChange = useCallback((enabled) => {
    setIsReportSwitchEnabled(enabled);
  }, []);
  
  // 处理搜索查询变化，清空重复搜索检测缓存
  const handleQueryChange = useCallback((newQuery) => {
    // 当用户修改搜索内容时，清空上次搜索记录，确保下次搜索不会被误判为重复
    if (newQuery !== lastSearchRef.current.query) {
      lastSearchRef.current = { query: '', filters: {}, dataSource: '' };
    }
  }, []);

  // 取消批量分析
  const handleCancelAnalysis = useCallback(() => {
    setAnalysisCancelled(true);
    setBatchAnalyzing(false);
  }, []);

  // 批量翻译处理函数
  const handleBatchTranslation = useCallback(async (shouldTranslate) => {
    if (batchTranslating || searchResults.length === 0) return;
    
    if (shouldTranslate) {
      // 检查哪些论文需要翻译（没有缓存的翻译结果）
      const papersNeedingTranslation = searchResults.filter(paper => 
        !translationResults[paper.paperId]
      );
      
      // 如果所有论文都已有翻译缓存，直接显示
      if (papersNeedingTranslation.length === 0) {
  
        setShowTranslations(true);
        return;
      }
      
      // 开始批量翻译未缓存的论文
      setBatchTranslating(true);
      setTranslationProgress(searchResults.length - papersNeedingTranslation.length); // 从已缓存的数量开始
      setTranslationTotal(searchResults.length);
      setShowTranslations(true);
      

      
      try {
        const onProgress = (paperIndex, result) => {
          if (result.error) {
            console.error(`翻译失败: ${result.translatedTitle}`);
          } else {
            // 更新翻译结果 - 支持完整内容翻译
            setTranslationResults(prev => ({
              ...prev,
              [result.paperId]: {
                originalTitle: result.originalTitle,
                translatedTitle: result.translatedTitle,
                originalAbstract: result.originalAbstract,
                translatedAbstract: result.translatedAbstract,
                originalSnippet: result.originalSnippet,
                translatedSnippet: result.translatedSnippet,
                model: result.model
              }
            }));
          }
          
          // 更新进度
          setTranslationProgress(prev => prev + 1);
        };
        
        await batchTranslatePapers(papersNeedingTranslation, onProgress, selectedModel);
  
      } catch (error) {
        console.error('批量翻译失败:', error);
      } finally {
        setBatchTranslating(false);
      }
    } else {
      // 还原所有翻译
      setShowTranslations(false);
      // 保留翻译结果缓存，不清空
      // setTranslationResults({});
    }
  }, [batchTranslating, searchResults, selectedModel, translationResults]);

  // 单个论文翻译完成处理 - 支持完整内容翻译
  const handleTranslationComplete = useCallback((paperId, translationData) => {
    setTranslationResults(prev => ({
      ...prev,
      [paperId]: translationData
    }));
  }, []);

  // 计算翻译统计信息
  const translatedCount = Object.keys(translationResults).filter(paperId => 
    searchResults.some(paper => paper.paperId === paperId)
  ).length;
  const allTranslated = translatedCount === searchResults.length && searchResults.length > 0;

  // 悬停高亮状态
  const [hoveredCardType, setHoveredCardType] = useState(null);
  // 移除了悬停提示相关的状态

  // 自动滚动到高亮卡片的函数
  const scrollToHighlightedCard = useCallback((cardType) => {
    if (!cardType) return;
    
    // 获取所有的分析卡片容器
    const cardGrids = document.querySelectorAll('.analysis-cards');
    if (cardGrids.length === 0) return;
    
    // 使用第一个卡片容器作为参考来计算位置
    const referenceGrid = cardGrids[0];
    
    // 卡片类型到索引的映射 (基于显示顺序)
    const getCardIndex = (type) => {
      const visibleCards = [];
      
      // 按照PaperCard中的显示顺序添加可见的卡片
      if (showSummary) visibleCards.push('summary');
      if (showPurpose) visibleCards.push('purpose');
      if (showMethods) visibleCards.push('methods');
      if (showMetrics) visibleCards.push('metrics');
      if (showResults) visibleCards.push('results');
      
      return visibleCards.indexOf(type);
    };
    
    const cardIndex = getCardIndex(cardType);
    if (cardIndex === -1) return; // 卡片未显示
    
    // 计算目标卡片的位置
    const cardWidth = 350; // 每个卡片的宽度
    const cardGap = 12; // 卡片之间的间距
    const targetPosition = cardIndex * (cardWidth + cardGap);
    
    // 检查目标位置是否在可视区域内
    const containerWidth = referenceGrid.clientWidth;
    const currentScrollLeft = referenceGrid.scrollLeft;
    const isVisible = targetPosition >= currentScrollLeft && 
                     targetPosition + cardWidth <= currentScrollLeft + containerWidth;
    
    if (!isVisible) {
      // 计算最佳滚动位置 - 让卡片居中显示
      const optimalScrollPosition = Math.max(0, 
        targetPosition - (containerWidth - cardWidth) / 2
      );
      
      // 限制在有效滚动范围内
      const maxScrollPosition = Math.max(0, referenceGrid.scrollWidth - containerWidth);
      const finalScrollPosition = Math.min(optimalScrollPosition, maxScrollPosition);
      
      // 同步滚动所有卡片容器
      cardGrids.forEach(grid => {
        grid.scrollTo({
          left: finalScrollPosition,
          behavior: 'smooth'
        });
      });
      
      // 更新全局滚动状态
      setScrollPosition(finalScrollPosition);
    }
  }, [showSummary, showPurpose, showMethods, showMetrics, showResults]);

  // 重置到首屏初始状态
  const handleResetToInitialState = useCallback(() => {
    // 重置搜索相关状态
    setSearchResults([]);
    setCurrentQuery('');
    setCurrentFilters({});
    setPagination({
      currentPage: 1,
      totalResults: 0,
      resultsPerPage: 20,
    });
    setSearchTime(null);
    setLoading(false);
    
    // 重置所有弹窗状态
    setShowBusinessModal(false);
    setShowFeedbackModal(false);
    setShowLogViewer(false);
    setShowBatchAnalysisModal(false);
    setShowResearchReportModal(false);
    setShowCustomerServiceModal(false);
    setResearchReport('');
    setGeneratingReport(false);
    
    // 重置显示状态 - 保持拓展卡片的默认显示状态
    setShowSummary(false);
    setShowPurpose(true); // 保持默认显示
    setShowMethods(true); // 保持默认显示
    setShowMetrics(true); // 保持默认显示
    setShowResults(true); // 保持默认显示
    setShowAbstract(false);
    setShowSnippet(false);
    
    // 重置AI分析状态
    setAnalysisResults({});
    setBatchAnalyzing(false);
    setAnalysisDimensions([]);
    setAnalysisProgress(0);
    setAnalysisTotal(0);
    setAnalysisCurrentPaper('');
    setAnalysisCancelled(false);
    
    // 重置翻译状态
    setTranslationResults({});
    setBatchTranslating(false);
    setTranslationProgress(0);
    setTranslationTotal(0);
    setShowTranslations(false);
    
    // 重置滚动状态
    setScrollPosition(0);
    setMaxScroll(100);
    setIsToolbarScrolled(false);
    setToolbarOriginalTop(0);
    
    // 重置输入框聚焦状态
    setIsSearchInputFocused(false);
    
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 跟踪用户行为
    trackUserBehavior('logo_click_reset', {
      timestamp: new Date().toISOString(),
      action: 'reset_to_initial_state'
    });
  }, []);

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <Logo onClick={handleResetToInitialState} title="点击回到首屏">
            <img src="/logo.svg" alt="AI科研狗智能文献搜索" height="50" />
          </Logo>
          <HeaderLinks>
            <HeaderLink 
              as="button"
              onClick={() => setShowBusinessModal(true)}
              title="商业合作洽谈"
              className="hide-mobile"
            >
              商业合作
            </HeaderLink>
            <HeaderLink 
              as="button"
              onClick={() => setShowFeedbackModal(true)}
              title="使用反馈和建议"
            >
              使用反馈
            </HeaderLink>
            <HeaderLink 
              as="button"
              title="产品使用文档"
              className="hide-mobile"
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
              disabled
            >
              产品文档
            </HeaderLink>
            <HeaderDivider className="hide-mobile" />
            <HeaderLink 
              as="button"
              onClick={() => setShowCustomerServiceModal(true)}
              title="客服反馈"
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <FiHeadphones size={16} style={{ marginRight: '6px' }} />
              客服
            </HeaderLink>
          </HeaderLinks>
        </HeaderContent>
      </Header>

      <MainContent>

        {/* 集成搜索表单的使用说明 - 在未搜索状态下显示 */}
        {!loading && searchResults.length === 0 && !currentQuery && (
          <UsageInstructions 
            visible={true} 
            searchInputFocused={isSearchInputFocused}
            showFilters={showFilters}
            onSearch={handleSearch}
            loading={loading}
            initialQuery={currentQuery}
            dataSource={dataSource}
            onDataSourceChange={handleDataSourceChange}
            onFocusChange={handleSearchInputFocusChange}
            onFiltersChange={handleFiltersChange}
            onReportSwitchChange={handleReportSwitchChange}
            onQueryChange={handleQueryChange}
            onResearchDomainChange={handleResearchDomainChange}
            isHomePage={true}
          />
        )}

        {/* 进化树组件 - 只在首屏显示 */}
        <EvolutionTree visible={!loading && searchResults.length === 0 && !currentQuery} />

        {/* 独立搜索表单 - 在有搜索结果或加载中时显示 */}
        {(loading || searchResults.length > 0 || currentQuery) && (
                  <SearchForm 
          onSearch={handleSearch} 
          onExecuteSearch={executeSearch}
          loading={loading} 
          initialQuery={currentQuery}
          dataSource={dataSource}
          onDataSourceChange={handleDataSourceChange}
          onFocusChange={handleSearchInputFocusChange}
          onFiltersChange={handleFiltersChange}
          onReportSwitchChange={handleReportSwitchChange}
          onQueryChange={handleQueryChange}
          onResearchDomainChange={handleResearchDomainChange}
          isHomePage={false}
          hasResults={searchResults.length > 0}
          continueAISearchParams={continueAISearchParams}
          onContinueAISearchComplete={() => setContinueAISearchParams(null)}
        />
        )}

        {/* 搜索统计信息 */}
        {!loading && currentQuery && (
          <SearchStats>
            {/* 左侧：数据源切换提示或无结果提示 */}
            {searchResults.length > 0 ? (
              /* 有搜索结果：显示数据源切换提示 */
              getAlternativeDataSources().length > 0 ? (
                <DataSourceSwitchHint>
                  <span>搜索到的文章是否满意？可以点击</span>
                  <span 
                    className="switch-link"
                    onClick={() => {
                      // 切换到下一个数据源（按固定顺序循环）
                      const nextSource = getNextDataSource();
                      if (nextSource && nextSource !== dataSource) {
                        handleDataSourceSwitchAndSearch(nextSource);
                      }
                    }}
                    title="切换到其他数据源重新检索"
                  >
                    这里
                  </span>
                  <span>切换数据源</span>
                </DataSourceSwitchHint>
              ) : (
                <div style={{ flex: 1 }}></div> /* 占位符，保持右侧对齐 */
              )
            ) : (
              /* 无搜索结果：显示无结果提示 */
              <DataSourceSwitchHint>
                <span>没有找到匹配 "{currentQuery}" 的论文。</span>
                {hasActiveFilters && (
                  <span>可以尝试清除筛选条件或</span>
                )}
                {getAlternativeDataSources().length > 0 ? (
                  <>
                    <span 
                      className="switch-link"
                      onClick={() => {
                        const nextSource = getNextDataSource();
                        if (nextSource && nextSource !== dataSource) {
                          handleDataSourceSwitchAndSearch(nextSource);
                        }
                      }}
                      title="切换到其他数据源重新检索"
                    >
                      切换到其他数据源
                    </span>
                    <span>重新搜索。</span>
                  </>
                ) : (
                  <span>尝试使用不同的关键词。</span>
                )}
              </DataSourceSwitchHint>
            )}
            
            {/* 右侧：搜索结果统计或无结果统计 */}
            <SearchResultStats>
              {searchResults.length > 0 ? (
                <>
                  <div className="result-count">
                    {`找到 ${pagination.totalResults.toLocaleString()} 篇与 "${currentQuery}" 相关的论文`}
                  </div>
                  {searchTime && (
                    <div className="search-time">
                      搜索耗时: {formatSearchTime(searchTime)}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="result-count">
                    未找到相关论文
                  </div>
                  {searchTime && (
                    <div className="search-time">
                      搜索耗时: {formatSearchTime(searchTime)}
                    </div>
                  )}
                </>
              )}
            </SearchResultStats>
          </SearchStats>
        )}

        {/* 研究报告生成器卡片 - 放在工具栏上方 */}
        {searchResults.length > 0 && !loading && (
          <ResearchReportCard
            papers={searchResults}
            selectedModel={selectedModel}
            visible={true}
            autoGenerate={isReportSwitchEnabled}
            triggerGenerate={triggerReportGeneration}
            onGenerateComplete={() => console.log('Research report generation completed')}
          />
        )}

        {/* 医学信息展示卡片 - 只在医学相关领域时显示 */}
        {searchResults.length > 0 && !loading && currentResearchDomain === 'medicine' && (
          <div style={{
            width: '100%',
            marginBottom: '20px',
            overflow: 'hidden',
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* 响应式医学信息图片 */}
            <picture>
              {/* 桌面端 - 大屏幕 (1200px以上) */}
              <source 
                media="(min-width: 1200px)" 
                srcSet="/1440.png"
              />
              {/* 平板端 - 中等屏幕 (768px-1199px) */}
              <source 
                media="(min-width: 768px) and (max-width: 1199px)" 
                srcSet="/1024.png"
              />
              {/* 手机端 - 小屏幕 (767px以下) */}
              <source 
                media="(max-width: 767px)" 
                srcSet="/375.png"
              />
              {/* 默认图片 - 桌面端 */}
              <img 
                src="/1440.png"
                alt="医学相关信息展示"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px'
                }}
                onError={(e) => {
                  // 图片加载失败时的备用显示
                  e.target.style.display = 'none';
                  const fallbackDiv = e.target.parentNode.querySelector('.content-fallback');
                  if (fallbackDiv) {
                    fallbackDiv.style.display = 'flex';
                  }
                }}
                onLoad={(e) => {
                  // 图片加载成功时隐藏备用内容
                  const fallbackDiv = e.target.parentNode.querySelector('.content-fallback');
                  if (fallbackDiv) {
                    fallbackDiv.style.display = 'none';
                  }
                }}
              />
            </picture>
            
            {/* 备用内容 - 当图片加载失败时显示 */}
            <div 
              className="content-fallback"
              style={{
                display: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '180px',
                padding: '16px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '14px',
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '12px'
              }}
            >
              🏥 医学相关信息展示 - 检测到医学领域搜索
            </div>
          </div>
        )}

        {/* 全局可见性控制工具栏 */}
        {searchResults.length > 0 && !loading && (
          <VisibilityToolbar 
            ref={toolbarRef}
            className={isToolbarScrolled ? 'scrolled' : ''}
          >
            {/* 左侧部分 - 翻译控制 */}
            <LeftToolbarSection>
              <TranslationContainer>
                <ModelSelectLabel htmlFor="batch-translation">
                  <FiGlobe size={14} />
                  批量翻译:
                </ModelSelectLabel>
                <ToggleButton 
                  $active={batchTranslating || (showTranslations && translatedCount > 0)} 
                  onClick={() => handleBatchTranslation(!showTranslations)}
                  disabled={batchTranslating}
                  style={{ 
                    marginRight: '8px',
                    opacity: batchTranslating ? 0.7 : 1,
                    cursor: batchTranslating ? 'not-allowed' : 'pointer'
                  }}
                >
                  {batchTranslating ? (
                    <>
                      <SpinningIcon size={12} />
                      翻译中...
                    </>
                  ) : showTranslations ? (
                    '还原'
                  ) : allTranslated ? (
                    '显示翻译'
                  ) : translatedCount > 0 ? (
                    '继续翻译'
                  ) : (
                    '开始翻译'
                  )}
                </ToggleButton>
                {(batchTranslating || translatedCount > 0) && (
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#666', 
                    marginLeft: '8px',
                    whiteSpace: 'nowrap'
                  }}>
                    {batchTranslating ? `${translationProgress}/${translationTotal}` : `已翻译 ${translatedCount}`}
                  </span>
                )}
              </TranslationContainer>
            </LeftToolbarSection>
            
            {/* 右侧部分 - AI模型选择、显示选项和批量分析 */}
            <RightToolbarSection className="right-toolbar-section">
              {/* AI模型选择 */}
              <ModelSelectContainer style={{ marginRight: '16px' }}>
                <ModelSelectLabel htmlFor="ai-model-select">
                  <FiCpu size={14} />
                  AI模型:
                </ModelSelectLabel>
                <ModelSelect 
                  id="ai-model-select"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={batchAnalyzing}
                >
                  {modelOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </ModelSelect>
              </ModelSelectContainer>
              <ToggleButton 
                $active={showSummary} 
                onClick={() => setShowSummary(!showSummary)}
                onMouseEnter={() => {
                  setHoveredCardType('summary');
                  // 延迟执行滚动，确保高亮效果先显示
                  setTimeout(() => scrollToHighlightedCard('summary'), 100);
                }}
                onMouseLeave={() => setHoveredCardType(null)}
                title="Summary"
              style={{
                  // Summary在小屏幕上隐藏（优先级较低）
                  display: 'flex'
                }}
                className="hide-on-small"
              >
                <FiAlignLeft size={14} />
                <span>Summary</span>
              </ToggleButton>
              <ToggleButton 
                $active={showPurpose} 
                onClick={() => setShowPurpose(!showPurpose)}
                onMouseEnter={() => {
                  setHoveredCardType('purpose');
                  setTimeout(() => scrollToHighlightedCard('purpose'), 100);
                }}
                onMouseLeave={() => setHoveredCardType(null)}
                title="研究目的"
              >
                <FiBriefcase size={14} />
                <span>研究目的</span>
              </ToggleButton>
              <ToggleButton 
                $active={showMethods} 
                onClick={() => setShowMethods(!showMethods)}
                onMouseEnter={() => {
                  setHoveredCardType('methods');
                  setTimeout(() => scrollToHighlightedCard('methods'), 100);
                }}
                onMouseLeave={() => setHoveredCardType(null)}
                title="研究方法"
              >
                <FiActivity size={14} />
                <span>研究方法</span>
              </ToggleButton>
              <ToggleButton 
                $active={showMetrics} 
                onClick={() => setShowMetrics(!showMetrics)}
                onMouseEnter={() => {
                  setHoveredCardType('metrics');
                  setTimeout(() => scrollToHighlightedCard('metrics'), 100);
                }}
                onMouseLeave={() => setHoveredCardType(null)}
                title="测量指标"
                className="hide-on-medium"
              >
                <FiBarChart2 size={14} />
                <span>测量指标</span>
              </ToggleButton>
              <ToggleButton 
                $active={showResults} 
                onClick={() => setShowResults(!showResults)}
                onMouseEnter={() => {
                  setHoveredCardType('results');
                  setTimeout(() => scrollToHighlightedCard('results'), 100);
                }}
                onMouseLeave={() => setHoveredCardType(null)}
                title="研究结果"
              >
                <FiCheckCircle size={14} />
                <span>研究结果</span>
              </ToggleButton>
              
              {/* 分隔器，将批量分析按钮和步进器推到右侧 */}
              <div style={{ marginLeft: 'auto' }}></div>
              

              
              {(showPurpose || showMethods || showMetrics || showResults) && (
                <>
                  <BatchAnalysisButton 
                    onClick={handleBatchAnalysis}
                    $loading={batchAnalyzing}
                    $cancel={false}
                    disabled={batchAnalyzing}
                    title={batchAnalyzing ? "分析中..." : "批量分析"}
                  >
                    {batchAnalyzing ? (
                      <>
                        <FiRefreshCw size={16} />
                        <span className="batch-text">分析中...</span>
                        <span className="batch-icon-text"></span>
                      </>
                    ) : (
                      <>
                        <FiZap size={16} />
                        <span className="batch-text">批量分析</span>
                        <span className="batch-icon-text"></span>
                      </>
                    )}
                  </BatchAnalysisButton>
                  
                  {batchAnalyzing && (
                    <BatchAnalysisButton 
                      onClick={handleCancelAnalysis}
                      $loading={false}
                      $cancel={true}
                      title="取消分析"
                    >
                      <span className="batch-text">取消分析</span>
                      <span className="batch-icon-text">取消</span>
                    </BatchAnalysisButton>
                  )}
                </>
              )}
            </RightToolbarSection>
          </VisibilityToolbar>
        )}



        {/* 主要内容区域 */}
        <ResultsContainer data-results-container ref={resultsContainerRef}>
          <div className="cards-scroll-container">
            {loading && <SkeletonList count={5} />}
            
            {!loading && searchResults.length > 0 && (
              <>
                {searchResults.map((paper, index) => (
                  <PaperCard
                    key={`paper-${paper.paperId || index}-${index}`}
                    paper={paper}
                    onPaperClick={handlePaperClick}
                    onAuthorClick={handleAuthorClick}
                    showInfo={showInfo}
                    showAbstract={showAbstract}
                    showSnippet={showSnippet}
                    showPurpose={showPurpose}
                    showMethods={showMethods}
                    showMetrics={showMetrics}
                    showResults={showResults}
                    globalControls={true}
                    onAnalysisComplete={handleAnalysisComplete}
                    // 如果有缓存的分析结果，传递给组件
                    purposeAnalysis={analysisResults[paper.paperId]?.research_purpose}
                    methodsAnalysis={analysisResults[paper.paperId]?.research_methods}
                    metricsAnalysis={analysisResults[paper.paperId]?.metrics}
                    resultsAnalysis={analysisResults[paper.paperId]?.research_results}
                    selectedModel={selectedModel}
                    batchAnalyzing={batchAnalyzing}
                    batchDimensions={analysisDimensions}
                    onScroll={handleScrollPositionUpdate}
                    hoveredCardType={hoveredCardType}
                    // 翻译相关props - 更新为支持完整内容翻译
                    translationData={showTranslations ? translationResults[paper.paperId] : null}
                    onTranslationComplete={handleTranslationComplete}
                    batchTranslating={batchTranslating}
                  />
                ))}
              </>
            )}
          </div>
          
          {!loading && searchResults.length > 0 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalResults={pagination.totalResults}
              resultsPerPage={pagination.resultsPerPage}
              onPageChange={handlePageChange}
            />
          )}
        </ResultsContainer>
      </MainContent>





      {/* 悬浮侧边步进器 */}
      <FloatingSideStepper
        visible={searchResults.length > 0 && !loading && maxScroll > 0}
        onStepLeft={() => handleScroll('left', 350)}
        onStepRight={() => handleScroll('right', 350)}
        canStepLeft={scrollPosition > 0}
        canStepRight={scrollPosition < maxScroll}
        disabled={false}
        isFloating={isToolbarScrolled} /* 与工具栏状态同步 - false为底部固定，true为屏幕中央悬浮 */
      />

      {/* 商业合作弹窗 */}
      {showBusinessModal && (
        <ModalOverlay 
          data-overlay 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowBusinessModal(false);
            }
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                <FiUser size={24} />
                商业合作
              </ModalTitle>
              <ModalCloseButton onClick={() => setShowBusinessModal(false)}>
                <FiX size={20} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <BusinessSection>
                <h3>
                  <FiZap size={18} />
                  学术类广告投放
                </h3>
                <p>我们为学术机构、期刊出版社、科研工具等提供精准的广告投放服务：</p>
                <ul>
                  <li>精准用户群体：主要面向科研工作者、学者、研究生等学术用户</li>
                  <li>多样化展示形式：横幅广告、内容推荐、赞助搜索结果等</li>
                  <li>高转化率：用户具有明确的学术需求，转化意向强烈</li>
                  <li>数据透明：提供详细的投放报告和效果分析</li>
                </ul>
              </BusinessSection>

              <BusinessSection>
                <h3>
                  <FiActivity size={18} />
                  定制开发服务
                </h3>
                <p>基于我们的技术积累，为您提供专业的学术搜索解决方案：</p>
                <ul>
                  <li>企业级学术搜索系统定制开发</li>
                  <li>AI智能文献分析工具集成</li>
                  <li>多语言翻译和本地化服务</li>
                  <li>API接口定制和系统集成</li>
                  <li>用户界面设计和用户体验优化</li>
                </ul>
              </BusinessSection>

              <BusinessSection>
                <h3>
                  <FiGlobe size={18} />
                  学术API数据供给
                </h3>
                <p>高质量的学术数据API服务，为您的应用提供强大支撑：</p>
                <ul>
                  <li>海量文献数据：覆盖多个主流学术数据库</li>
                  <li>实时更新：确保数据的时效性和准确性</li>
                  <li>高并发支持：稳定可靠的服务保障</li>
                  <li>灵活定价：根据调用量提供多种套餐选择</li>
                  <li>技术支持：专业团队提供全方位技术保障</li>
                </ul>
              </BusinessSection>

              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <div style={{ 
                  padding: '16px', 
                  background: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                    <FiMail size={16} color="#3498db" />
                    <span style={{ fontWeight: '600', color: '#2c3e50' }}>商务邮箱</span>
                  </div>
                  <div style={{ 
                    fontSize: '16px', 
                    color: '#2c3e50', 
                    fontFamily: 'monospace',
                    fontWeight: '500'
                  }}>
                    your-business@example.com
                  </div>
                </div>
                <p style={{ marginTop: '16px', color: '#7f8c8d', fontSize: '14px' }}>
                  期待与您的合作，共同推动学术研究的发展！
                </p>
              </div>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* 使用反馈弹窗 */}
      {showFeedbackModal && (
        <ModalOverlay 
          data-overlay 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowFeedbackModal(false);
            }
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                <FiMessageCircle size={24} />
                使用反馈
              </ModalTitle>
              <ModalCloseButton onClick={() => setShowFeedbackModal(false)}>
                <FiX size={20} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <BusinessSection>
                <p style={{ fontSize: '16px', marginBottom: '24px' }}>
                  感谢您使用AI科研狗！您的反馈对我们非常宝贵，请通过以下方式联系我们：
                </p>
                
                <div style={{ textAlign: 'center' }}>
                  {/* 可对接的社群平台类型：QQ群、微信群、Discord、Telegram、钉钉群等 */}
                  <QQButton 
                    as="a" 
                    href="https://example-community.com/join/your-group-id" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📱</span>
                    加入社群：学术交流群
                  </QQButton>
                  
                  <div style={{ margin: '20px 0' }}>
                    {/* 可对接的即时通讯平台：QQ、微信、Telegram、WhatsApp、钉钉等 */}
                    <ContactButton style={{ marginRight: '8px' }}>
                      <span>🐧</span>
                      QQ: your-qq-number
                    </ContactButton>
                    
                    <WeChatButton>
                      <span>💬</span>
                      微信: your-wechat-id
                    </WeChatButton>
                  </div>
                  
                  <div style={{ 
                    padding: '12px 16px', 
                    background: '#f8f9fa', 
                    borderRadius: '8px',
                    border: '1px solid #e9ecef',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FiMail size={16} color="#3498db" />
                    <span style={{ fontWeight: '500', color: '#2c3e50' }}>反馈邮箱：</span>
                    <span style={{ 
                      fontFamily: 'monospace',
                      fontWeight: '500',
                      color: '#2c3e50'
                    }}>
                      your-feedback@example.com
                    </span>
                  </div>
                </div>
                
                <div style={{ marginTop: '32px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <h4 style={{ color: '#2c3e50', marginBottom: '12px' }}>我们特别关注：</h4>
                  <ul style={{ margin: '0', paddingLeft: '20px' }}>
                    <li>功能建议和改进意见</li>
                    <li>使用过程中遇到的问题</li>
                    <li>界面体验和操作建议</li>
                    <li>新功能需求和创意想法</li>
                  </ul>
                </div>
              </BusinessSection>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}



      {/* 批量分析选择弹窗 */}
      {showBatchAnalysisModal && (
        <ModalOverlay 
          data-overlay 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowBatchAnalysisModal(false);
            }
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                <FiZap size={24} />
                批量分析选择
              </ModalTitle>
              <ModalCloseButton onClick={() => setShowBatchAnalysisModal(false)}>
                <FiX size={20} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <BatchAnalysisOption onClick={handleTraditionalBatchAnalysis}>
                <h3>
                  <FiActivity size={20} />
                  批量分析所有论文
                </h3>
                <p>对当前页面显示的所有论文进行AI分析，获取研究目的、研究方法、测量指标和研究结果等维度的分析结果。</p>
                <div style={{ 
                  marginTop: '12px', 
                  padding: '8px 12px', 
                  background: '#f0f9ff', 
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#0369a1',
                  border: '1px solid #e0f2fe'
                }}>
                  💡 提示：如需生成研究报告，请使用页面上方的"研究报告生成器"卡片
                </div>
              </BatchAnalysisOption>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* 研究报告弹窗 */}
      {showResearchReportModal && (
        <ModalOverlay 
          data-overlay 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowResearchReportModal(false);
            }
          }}
        >
          <ModalContent $isResearchReport={true} onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                <FiTrendingUp size={24} />
                研究报告
              </ModalTitle>
              <ModalCloseButton onClick={() => setShowResearchReportModal(false)}>
                <FiX size={20} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              {generatingReport && !researchReport ? (
                <LoadingSpinner>
                  <div className="spinner"></div>
                  <p>正在生成研究报告，请稍候...</p>
                </LoadingSpinner>
              ) : (
                <>
                  <ReportContent>
                    {researchReport.split('\n').map((line, index) => {
                      if (line.startsWith('# ')) {
                        return <h1 key={index}>{renderTextWithFormatting(line.substring(2))}</h1>;
                      } else if (line.startsWith('## ')) {
                        return <h2 key={index}>{renderTextWithFormatting(line.substring(3))}</h2>;
                      } else if (line.startsWith('### ')) {
                        return <h3 key={index}>{renderTextWithFormatting(line.substring(4))}</h3>;
                      } else if (line.startsWith('- ') || line.startsWith('* ')) {
                        return <li key={index}>{renderTextWithFormatting(line.substring(2))}</li>;
                      } else if (line.trim() === '') {
                        return <br key={index} />;
                      } else if (line.trim() !== '') {
                        return <p key={index}>{renderTextWithFormatting(line)}</p>;
                      }
                      return null;
                    })}
                    {generatingReport && <TypingCursor />}
                  </ReportContent>
                  {researchReport && (
                    <ReportFooter>
                      <p>如果需要保存此报告，请使用右侧的复制按钮。</p>
                      <CopyButton 
                        onClick={handleCopyReport}
                        disabled={!researchReport || generatingReport}
                      >
                        <FiCopy size={16} />
                        复制报告
                      </CopyButton>
                    </ReportFooter>
                  )}
                </>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* API日志查看器 */}
      {showLogViewer && (
        <ApiLogViewer onClose={() => setShowLogViewer(false)} />
      )}

      <Footer>
        <FooterContent>
          <FooterText>AIsciresgo 学术搜索 - 高效获取研究文献</FooterText>
          <FooterText>© {new Date().getFullYear()} AIsciresgo. 保留所有权利。</FooterText>
          <FooterLinks>
            {/* 可对接的法律文档平台：自建页面、第三方法律服务平台等 */}
            <FooterLink href="https://example-legal.com/terms" target="_blank">
              使用条款
            </FooterLink>
            <FooterLink href="https://example-legal.com/privacy" target="_blank">
              隐私政策
            </FooterLink>
            {/* API 文档链接已移除 */}
          </FooterLinks>
        </FooterContent>
      </Footer>

      {/* 客服反馈弹窗 */}
      {showCustomerServiceModal && (
        <CustomerServiceModal onClose={() => setShowCustomerServiceModal(false)} />
      )}

      {/* Toast 通知容器 */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            maxWidth: '420px',
          },
          success: {
            style: {
              background: '#10b981',
              color: '#fff',
            },
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 6000,
            style: {
              background: '#ef4444',
              color: '#fff',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* 重复搜索确认对话框 */}
      <ConfirmDialog
        isOpen={showDuplicateSearchDialog}
        title="重新搜索"
        message="清空当前页面数据重新搜索？"
        confirmText="确认"
        cancelText="取消"
        onConfirm={handleDuplicateSearchConfirm}
        onCancel={handleDuplicateSearchCancel}
      />

      {/* 不再需要悬浮控制球 */}
    </AppContainer>
  );
};

export default App;