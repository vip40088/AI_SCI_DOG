import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { FiExternalLink, FiCalendar, FiUsers, FiBookmark, FiFileText, FiTrendingUp, FiChevronDown, FiChevronUp, FiRefreshCw, FiAlertCircle, FiGlobe } from 'react-icons/fi';
import { analyzePaperDimension, AI_MODELS, translatePaperContent } from '../api/aiService';
import { trackPaperClick, trackExternalLinkClick, trackFeatureUsage } from '../utils/analytics';

const PaperContainer = styled.div`
  margin-bottom: 12px;
  width: 100%;
  overflow: visible;
`;

const VisibilityToolbar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#007acc' : 'white'};
  border: 1px solid ${props => props.checked ? '#007acc' : '#ccc'};
  border-radius: 3px;
  transition: all 0.2s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: ${props => props.checked ? 'block' : 'none'};
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 12px;
  width: 100%;
  overflow: visible;
  
  .info-column {
    grid-column: 1;
    width: 520px;
  }
  
  .analysis-cards {
    grid-column: 2;
    display: flex;
    padding: 0;
    gap: 12px;
    scroll-behavior: smooth;
    position: relative;
    height: 280px;
    
    /* 默认情况下的overflow设置 */
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
      display: none;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    touch-action: auto;
    pointer-events: auto;
  }
  
  /* 独立的遮罩容器，固定在可视区域 */
  .analysis-cards-wrapper {
    grid-column: 2;
    position: relative;
    height: 280px;
    overflow: hidden; /* 关键：隐藏超出的内容 */
    
    /* 左侧遮罩 - 半透明渐变，匹配应用背景色 */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 40px;
      /* 使用与应用背景渐变中间色调相近的颜色 */
      background: linear-gradient(to right, 
        rgba(220, 225, 232, 0.95), 
        rgba(220, 225, 232, 0.7), 
        rgba(220, 225, 232, 0.3), 
        transparent
      );
      z-index: 10;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    /* 右侧遮罩 - 半透明渐变，匹配应用背景色 */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40px;
      /* 使用与应用背景渐变中间色调相近的颜色 */
      background: linear-gradient(to left, 
        rgba(220, 225, 232, 0.95), 
        rgba(220, 225, 232, 0.7), 
        rgba(220, 225, 232, 0.3), 
        transparent
      );
      z-index: 10;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    /* 左侧遮罩层控制 */
    &.no-left-overflow::before {
      opacity: 0;
      pointer-events: none;
    }
    
    /* 右侧遮罩层控制 */
    &.no-right-overflow::after {
      opacity: 0;
      pointer-events: none;
    }
    
    /* 当没有任何溢出时隐藏所有遮罩层 */
    &.no-overflow {
      &::before,
      &::after {
        opacity: 0;
        pointer-events: none;
      }
    }
    
    .analysis-cards {
      grid-column: unset;
      width: 100%;
      height: 100%;
      overflow-x: auto; /* 确保可以水平滚动 */
      overflow-y: hidden; /* 隐藏垂直溢出 */
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 10px;
    
    .info-column, .analysis-cards-wrapper {
      grid-column: 1;
      width: 100%;
    }
    
    .analysis-cards-wrapper {
      height: auto;
      overflow: visible; /* 移动端恢复可见性 */
      
      /* 移动端移除遮罩效果 */
      &::before,
      &::after {
        display: none;
      }
      
      .analysis-cards {
        flex-direction: column;
        overflow: visible; /* 移动端垂直布局，需要显示所有内容 */
        overflow-x: visible;
        overflow-y: visible;
        height: auto;
        gap: 10px;
        touch-action: auto;
        pointer-events: auto;
      }
    }
  }
`;

const BaseCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 280px; /* 减少卡片高度 */
  display: flex;
  flex-direction: column;
  overflow: visible;
  border: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  
  /* Analysis cards need fixed width in the scrollable row */
  .analysis-cards & {
    width: 350px;
    max-width: 350px;
    flex-shrink: 0;
    flex: none;
  }
  
  /* Content area that can scroll */
  .card-content {
    flex: 1;
    overflow: visible;
    padding-right: 0;
    margin-bottom: 8px; /* 为底部按钮留出空间 */
    
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  @media (max-width: 768px) {
    height: 280px;
    width: 100%;
    max-width: none;
  }
  
  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
  
  /* 高亮效果 - 减弱版本，无缩放 */
  &.highlighted {
    box-shadow: 
      0 0 0 2px rgba(24, 144, 255, 0.25), 
      0 2px 8px rgba(24, 144, 255, 0.15);
    background: rgba(24, 144, 255, 0.02);
    z-index: 20;
    border-color: rgba(24, 144, 255, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: rgba(24, 144, 255, 0.08);
      border-radius: 9px;
      z-index: -1;
      animation: highlight-pulse 4s ease-in-out infinite;
    }
    
    @keyframes highlight-pulse {
      0%, 100% {
        opacity: 0.3;
        background: rgba(24, 144, 255, 0.05);
      }
      50% {
        opacity: 0.6;
        background: rgba(24, 144, 255, 0.12);
      }
    }
  }
`;

const MainInfoCard = styled(BaseCard)`
  border-left: 3px solid #007acc;
  display: flex;
  flex-direction: column;
  width: 520px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// eslint-disable-next-line no-unused-vars
const SnippetCard = styled(BaseCard)`
  border-left: 4px solid #28a745;
  display: ${props => props.$isVisible ? 'block' : 'none'};
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`;

const AbstractCard = styled(BaseCard)`
  border-left: 4px solid #fd7e14;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`;

// eslint-disable-next-line no-unused-vars
const PurposeCard = styled(BaseCard)`
  border-left: 4px solid #007bff;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`;

// eslint-disable-next-line no-unused-vars
const MethodsCard = styled(BaseCard)`
  border-left: 4px solid #6f42c1;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`;

// eslint-disable-next-line no-unused-vars
const MetricsCard = styled(BaseCard)`
  border-left: 4px solid #fd7e14;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`;

// eslint-disable-next-line no-unused-vars
const ResultsCard = styled(BaseCard)`
  border-left: 4px solid #20c997;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`;

// 数据源徽章样式 (暂时未使用)
// eslint-disable-next-line no-unused-vars
const SourceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.$expanded ? '5px' : '4px'};
  padding: ${props => props.$expanded ? '5px 10px' : '4px 8px'};
  border-radius: ${props => props.$expanded ? '14px' : '12px'};
  font-size: ${props => props.$expanded ? '12px' : '11px'};
  font-weight: 500;
  margin-left: ${props => props.$expanded ? '10px' : '8px'};
  transition: all 0.2s ease;
  
  ${props => props.$source === 'semantic' && `
    background: rgba(40, 167, 69, 0.1);
    color: #28a745;
    border: 1px solid rgba(40, 167, 69, 0.2);
  `}
  
  ${props => props.$source === 'googleScholar' && `
    background: rgba(0, 122, 204, 0.1);
    color: #007acc;
    border: 1px solid rgba(0, 122, 204, 0.2);
  `}
  
  ${props => props.$source === 'primaryScraping' && `
    background: rgba(138, 43, 226, 0.1);
    color: #8a2be2;
    border: 1px solid rgba(138, 43, 226, 0.2);
  `}
  
  ${props => !props.$source && `
    background: rgba(108, 117, 125, 0.1);
    color: #6c757d;
    border: 1px solid rgba(108, 117, 125, 0.2);
  `}
`;

const CardHeader = styled.div`
  margin-bottom: 10px; /* 减少底部边距 */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 6px; /* 减少底部内边距 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const CardTitle = styled.h4`
  color: #2c3e50;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const SourceIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
  cursor: help;
  transition: all 0.2s ease;
  position: relative;
  
  ${props => props.$source === 'semantic' && `
    background: rgba(40, 167, 69, 0.1);
    border: 1px solid rgba(40, 167, 69, 0.2);
  `}
  
  ${props => props.$source === 'googleScholar' && `
    background: rgba(0, 122, 204, 0.1);
    border: 1px solid rgba(0, 122, 204, 0.2);
  `}
  
  ${props => props.$source === 'primaryScraping' && `
    background: rgba(138, 43, 226, 0.1);
    border: 1px solid rgba(138, 43, 226, 0.2);
  `}
  
  ${props => !props.$source && `
    background: rgba(108, 117, 125, 0.1);
    border: 1px solid rgba(108, 117, 125, 0.2);
  `}
  
  &:hover {
    transform: scale(1.1);
    ${props => props.$source === 'semantic' && `
      background: rgba(40, 167, 69, 0.2);
      box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);
    `}
    
    ${props => props.$source === 'googleScholar' && `
      background: rgba(0, 122, 204, 0.2);
      box-shadow: 0 2px 4px rgba(0, 122, 204, 0.2);
    `}
    
    ${props => props.$source === 'primaryScraping' && `
      background: rgba(138, 43, 226, 0.2);
      box-shadow: 0 2px 4px rgba(138, 43, 226, 0.2);
    `}
    
    ${props => !props.$source && `
      background: rgba(108, 117, 125, 0.2);
      box-shadow: 0 2px 4px rgba(108, 117, 125, 0.2);
    `}
  }
  
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 1000;
    margin-bottom: 4px;
    opacity: 1;
    pointer-events: none;
  }
  
  &:hover::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    margin-bottom: -4px;
    opacity: 1;
    pointer-events: none;
  }
`;

const PaperTitle = styled.h3`
  color: #2c3e50;
  font-size: ${props => props.$expanded ? '18px' : '16px'};
  font-weight: ${props => props.$expanded ? '700' : '600'};
  line-height: 1.3;
  margin-bottom: ${props => props.$expanded ? '8px' : '6px'};
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  margin: 0;

  &:hover {
    color: #1976d2;
  }
`;

const PrimaryMetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.$expanded ? '10px' : '6px'};
  margin-bottom: ${props => props.$expanded ? '10px' : '6px'};
  padding: ${props => props.$expanded ? '8px 0' : '4px 0'};
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  align-items: center;
`;

const PrimaryMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.$expanded ? '4px' : '3px'};
  color: #555;
  font-size: ${props => props.$expanded ? '13px' : '11px'};
  font-weight: ${props => props.$expanded ? '500' : '400'};
  
  svg {
    color: #007acc;
    flex-shrink: 0;
  }
  
  strong {
    color: #007acc;
    font-weight: ${props => props.$expanded ? '600' : '500'};
  }
`;

const AuthorText = styled.span`
  color: #555;
  font-size: ${props => props.$expanded ? '13px' : '11px'};
  max-width: ${props => props.$expanded ? '300px' : '200px'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;



const AuthorLink = styled.span`
  color: #007acc;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005fa3;
    text-decoration: underline;
  }
`;

const ContentText = styled.div`
  color: #444;
  line-height: 1.4;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 200px;
  letter-spacing: 0.2px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #007acc;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 122, 204, 0.1);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.$expanded ? '5px' : '3px'};
  margin-top: ${props => props.$expanded ? '8px' : '4px'};
  margin-bottom: ${props => props.$expanded ? '4px' : '2px'};
`;

const Tag = styled.span`
  background: #f8f9fa;
  color: #495057;
  padding: ${props => props.$expanded ? '3px 8px' : '1px 6px'};
  border-radius: ${props => props.$expanded ? '10px' : '8px'};
  font-size: ${props => props.$expanded ? '11px' : '9px'};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.$expanded ? '3px' : '2px'};
  border: 1px solid rgba(0, 0, 0, 0.08);
  line-height: 1.2;
  transition: all 0.2s ease;
  max-width: ${props => props.$expanded ? '150px' : '120px'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FieldTag = styled(Tag)`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #6a1b9a;
  border-color: rgba(106, 27, 154, 0.2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(106, 27, 154, 0.2);
  }
`;

const VenueTag = styled(Tag)`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  color: #1976d2;
  border-color: rgba(25, 118, 210, 0.2);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: linear-gradient(135deg, #bbdefb, #90caf9);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(25, 118, 210, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const OpenAccessTag = styled(Tag)`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  color: #2e7d32;
  border-color: rgba(46, 125, 50, 0.2);
  font-weight: 600;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(46, 125, 50, 0.2);
  }
`;

const TypeTag = styled(Tag)`
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  color: #e65100;
  border-color: rgba(230, 81, 0, 0.2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(230, 81, 0, 0.2);
  }
`;

const ExtraTag = styled(Tag)`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #7b1fa2;
  border-color: rgba(123, 31, 162, 0.2);
  font-size: ${props => props.$expanded ? '10px' : '8px'};
  padding: ${props => props.$expanded ? '2px 6px' : '1px 4px'};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(123, 31, 162, 0.2);
  }
`;

const ActionButtons = styled.div`
  display: flex !important;
  gap: 8px !important;
  margin-top: auto !important;
  padding-top: 8px !important;
  border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
  position: relative !important;
  z-index: 50 !important;
  background: white !important;
  width: 100% !important;
  bottom: 0 !important;
  left: 0 !important;
  box-sizing: border-box !important;
  justify-content: flex-start !important;
`;

const IconButton = styled.button`
  background: ${props => props.$primary ? '#1976d2 !important' : 'white !important'};
  color: ${props => props.$primary ? 'white !important' : '#555 !important'};
  border: 1px solid ${props => props.$primary ? '#1976d2 !important' : 'rgba(0, 0, 0, 0.12) !important'};
  border-radius: 4px !important;
  height: 28px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: ${props => props.disabled ? 'not-allowed !important' : 'pointer !important'};
  transition: all 0.2s !important;
  position: relative !important;
  padding: 0 12px !important;
  flex: 0 0 auto !important;
  z-index: 60 !important;
  overflow: visible !important;
  font-weight: 500 !important;
  font-size: 13px !important;
  text-align: center !important;
  width: 100px !important;
  opacity: ${props => props.disabled ? '0.6 !important' : '1 !important'};
  
  svg {
    margin-right: ${props => props.$hasText ? '4px !important' : '0 !important'}; /* 减少图标右边距 */
    min-width: 14px !important; /* 减少图标最小宽度 */
    width: 14px !important; /* 减少图标大小 */
    height: 14px !important; /* 减少图标大小 */
  }
  
  span {
    white-space: nowrap !important;
    display: inline-block !important;
  }
  
  &:hover {
    background: ${props => props.disabled ? (props.$primary ? '#1976d2 !important' : 'white !important') : (props.$primary ? '#1565c0 !important' : '#f5f7fa !important')};
    border-color: ${props => props.disabled ? (props.$primary ? '#1976d2 !important' : 'rgba(0, 0, 0, 0.12) !important') : (props.$primary ? '#1565c0 !important' : 'rgba(0, 0, 0, 0.2) !important')};
    transform: ${props => props.disabled ? 'none !important' : 'translateY(-1px) !important'};
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none !important' : 'translateY(1px) !important'};
  }
`;

// eslint-disable-next-line no-unused-vars
const IconTooltip = styled.span`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 6px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  
  ${IconButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`;

const EmptyCardPlaceholder = styled.div`
  color: #aaa;
  font-style: italic;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const EmptyCardIcon = styled.div`
  color: #ddd;
  font-size: 24px;
  margin-bottom: 8px;
`;

const EmptyCardMessage = styled.div`
  font-size: 14px;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px; /* 固定加载区域高度 */
  width: 100%;
`;

const AICardContainer = styled(BaseCard)`
  border-left: 3px solid ${props => {
    switch(props.$type) {
      case 'purpose': return '#1976d2';
      case 'methods': return '#6f42c1';
      case 'metrics': return '#f57c00';
      case 'results': return '#00897b';
      default: return '#1976d2';
    }
  }};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const AICardTitle = styled(CardTitle)`
  color: ${props => {
    switch(props.$type) {
      case 'purpose': return '#1976d2';
      case 'methods': return '#6f42c1';
      case 'metrics': return '#f57c00';
      case 'results': return '#00897b';
      default: return '#1976d2';
    }
  }};
`;

const AICardContent = styled.div`
  flex: 1;
  color: #444;
  line-height: 1.4;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  max-height: 200px;
  letter-spacing: 0.2px;
`;

const AIPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 12px;
  color: #666;
  text-align: center;
  padding: 16px;
  font-size: 13px;
  line-height: 1.3;
`;

const AIButton = styled.button`
  background: ${props => props.$loading ? '#f5f7fa' : '#1976d2'};
  color: ${props => props.$loading ? '#1976d2' : 'white'};
  border: 1px solid ${props => props.$loading ? '#1976d2' : 'transparent'};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: ${props => props.$loading ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.$loading ? '#f5f7fa' : '#1565c0'};
    transform: ${props => props.$loading ? 'none' : 'translateY(-1px)'};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  svg {
    animation: ${props => props.$loading ? 'spin 1s linear infinite' : 'none'};
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const AILoadingOverlay = styled(LoadingWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.92);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px; /* 减少间距 */
  backdrop-filter: blur(2px);
  
  svg {
    animation: spin 1s linear infinite;
    color: #1976d2;
    width: 20px; /* 减少加载图标大小 */
    height: 20px; /* 减少加载图标大小 */
  }
`;

const AILoadingText = styled.div`
  color: #555;
  font-size: 13px;
  line-height: 1.2;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 8px; /* 减少底部边距 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 4px 10px;
  font-size: 13px;
  color: ${props => props.$active ? '#1976d2' : '#666'};
  cursor: pointer;
  border-bottom: 2px solid ${props => props.$active ? '#1976d2' : 'transparent'};
  transition: all 0.2s;
  line-height: 1.2;
  
  &:hover {
    color: ${props => props.$active ? '#1976d2' : '#444'};
    background-color: ${props => props.$active ? 'rgba(25, 118, 210, 0.04)' : 'rgba(0, 0, 0, 0.02)'};
  }
`;

// 添加 VisibilityControl 组件定义
const VisibilityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  
  input {
    margin-right: 4px;
  }
  
  label {
    font-size: 12px;
    cursor: pointer;
  }
`;

// 在信息卡片中显示摘要内容的样式组件
const SummaryInInfoCard = styled.div`
  margin-top: 8px;
  padding: 8px;
  background: rgba(248, 250, 252, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border-left: 2px solid #fd7e14;
`;

const SummaryLayout = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

const SummaryTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-shrink: 0;
`;

const SummaryTab = styled.button`
  background: ${props => props.$active ? '#fd7e14' : 'rgba(248, 250, 252, 0.8)'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: 1px solid ${props => props.$active ? '#fd7e14' : 'rgba(0, 0, 0, 0.08)'};
  border-radius: 6px;
  padding: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.$active ? '#e8690b' : 'rgba(253, 126, 20, 0.1)'};
    color: ${props => props.$active ? 'white' : '#fd7e14'};
    border-color: #fd7e14;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const SummaryContent = styled.div`
  flex: 1;
  max-height: 120px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15px;
    background: linear-gradient(transparent, rgba(248, 250, 252, 0.6));
    pointer-events: none;
  }
`;

const SummaryText = styled.div`
  color: #444;
  line-height: 1.3;
  font-size: 11px;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.1px;
  word-break: break-word;
`;

const SummaryEmptyText = styled.div`
  color: #999;
  font-style: italic;
  font-size: 10px;
  text-align: center;
  padding: 8px 0;
  opacity: 0.8;
`;

// eslint-disable-next-line no-unused-vars
const Checkbox = ({ label, icon, checked, onChange }) => (
  <CheckboxLabel>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} />
    {icon && icon}
    {label}
  </CheckboxLabel>
);

const PaperCard = ({ 
  paper, 
  onPaperClick, 
  onAuthorClick, 
  globalControls = false,
  showInfo: globalShowInfo,
  showAbstract: globalShowAbstract,
  showSnippet: globalShowSnippet,
  showPurpose: globalShowPurpose = true,
  showMethods: globalShowMethods = true,
  showMetrics: globalShowMetrics = true,
  showResults: globalShowResults = true,
  onAnalysisComplete,
  purposeAnalysis: initialPurposeAnalysis,
  methodsAnalysis: initialMethodsAnalysis,
  metricsAnalysis: initialMetricsAnalysis,
  resultsAnalysis: initialResultsAnalysis,
          selectedModel = AI_MODELS.GPT_4O_2024,
  batchAnalyzing = false,
  batchDimensions = [],
  onScroll = null,
  setScrollRef = null,
  hoveredCardType = null,
  translationData = null,
  onTranslationComplete = null,
  batchTranslating = false
}) => {
  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const [purposeAnalysis, setPurposeAnalysis] = useState(initialPurposeAnalysis || null);
  const [methodsAnalysis, setMethodsAnalysis] = useState(initialMethodsAnalysis || null);
  const [metricsAnalysis, setMetricsAnalysis] = useState(initialMetricsAnalysis || null);
  const [resultsAnalysis, setResultsAnalysis] = useState(initialResultsAnalysis || null);
  const [loadingAnalysis, setLoadingAnalysis] = useState({
    purpose: false,
    methods: false,
    metrics: false,
    results: false
  });
  
  // 翻译相关状态 - 扩展为支持完整内容翻译
  const [translationState, setTranslationState] = useState({
    originalTitle: paper.title,
    translatedTitle: null,
    originalAbstract: paper.abstract || null,
    translatedAbstract: null,
    originalSnippet: paper.tldr?.text || null,
    translatedSnippet: null,
    model: null
  });
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  
  // eslint-disable-next-line no-unused-vars
  const [analysisError, setAnalysisError] = useState({
    purpose: null,
    methods: null,
    metrics: null,
    results: null
  });
  
  // 用于超时保护的ref
  const timeoutRefs = React.useRef({
    purpose: null,
    methods: null, 
    metrics: null,
    results: null
  });
  
  // 卡片滚动区域的ref
  const analysisCardsRef = useRef(null);
  
  // 检测是否有内容溢出到边缘外（用于控制遮罩层）
  const [hasLeftOverflow, setHasLeftOverflow] = useState(false);
  const [hasRightOverflow, setHasRightOverflow] = useState(false);
  
  // 检测溢出状态的函数
  const checkOverflow = useCallback(() => {
    if (!analysisCardsRef.current) return;
    
    const container = analysisCardsRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    // 左侧溢出：scrollLeft > 0 表示左边有被隐藏的内容
    setHasLeftOverflow(scrollLeft > 5); // 5px 的容差
    
    // 右侧溢出：scrollLeft + clientWidth < scrollWidth 表示右边有被隐藏的内容
    setHasRightOverflow(scrollLeft + clientWidth < scrollWidth - 5); // 5px 的容差
  }, []);
  

  
  // 清除所有超时计时器
  const clearAllTimeouts = () => {
    Object.values(timeoutRefs.current).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
  };
  
  // 组件卸载时清除所有超时计时器
  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);
  
  // 设置滚动引用
  useEffect(() => {
    if (setScrollRef && analysisCardsRef.current) {
      setScrollRef(analysisCardsRef.current);
    }
  }, [setScrollRef]);
  
  // 添加滚动事件监听
  useEffect(() => {
    const handleScrollEvent = () => {
      if (onScroll && analysisCardsRef.current) {
        // 传递当前的滚动位置
        onScroll(analysisCardsRef.current.scrollLeft);
      }
      // 每次滚动时检测溢出状态
      checkOverflow();
    };
    
    // 不再需要单独处理wheel事件，只需监听滚动位置变化
    // 因为wheel事件已经由全局处理器处理
    
    const cardsElement = analysisCardsRef.current;
    if (cardsElement) {
      // 只添加普通滚动事件监听，用于跟踪滚动位置
      if (onScroll) {
        cardsElement.addEventListener('scroll', handleScrollEvent, { passive: true });
      }
      
      // 清理函数
      return () => {
        if (onScroll) {
          cardsElement.removeEventListener('scroll', handleScrollEvent);
        }
      };
    }
  }, [onScroll, checkOverflow]);
  
  // 批量分析状态同步
  useEffect(() => {
    if (batchAnalyzing && batchDimensions.length > 0) {
      // 设置批量分析中的维度为加载状态
      const newLoadingState = { ...loadingAnalysis };
      batchDimensions.forEach(dim => {
        switch (dim) {
          case 'research_purpose':
            // 只有没有结果的情况下才设置为加载状态
            if (!purposeAnalysis) newLoadingState.purpose = true;
            break;
          case 'research_methods':
            if (!methodsAnalysis) newLoadingState.methods = true;
            break;
          case 'metrics':
            if (!metricsAnalysis) newLoadingState.metrics = true;
            break;
          case 'research_results':
            if (!resultsAnalysis) newLoadingState.results = true;
            break;
          default:
            // 未知维度，跳过
            break;
        }
      });
      setLoadingAnalysis(newLoadingState);
    } else if (!batchAnalyzing) {
      // 批量分析结束，重置所有加载状态
      setLoadingAnalysis({
        purpose: false,
        methods: false,
        metrics: false,
        results: false
      });
      clearAllTimeouts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batchAnalyzing, batchDimensions, purposeAnalysis, methodsAnalysis, metricsAnalysis, resultsAnalysis]);
  
  // 批量翻译状态同步
  useEffect(() => {
    if (batchTranslating) {
      setIsTranslating(true);
    } else {
      setIsTranslating(false);
    }
  }, [batchTranslating]);
  
  // 同步外部传入的翻译结果 - 修复状态同步问题
  useEffect(() => {
    if (translationData) {
      // 立即更新本地翻译状态
      setTranslationState(prev => ({
        ...prev,
        ...translationData
      }));
      
      // 如果有翻译内容，立即显示翻译
      if (translationData.translatedTitle || translationData.translatedAbstract || translationData.translatedSnippet) {
        setShowTranslation(true);
      }
    } else {
      // 当外部翻译被清除时，重置显示状态但保留翻译数据
      setShowTranslation(false);
    }
  }, [translationData]);
  
  // 当收到新的分析结果时更新状态
  useEffect(() => {
    // 更新研究目的
    if (initialPurposeAnalysis !== null && initialPurposeAnalysis !== purposeAnalysis) {
      setPurposeAnalysis(initialPurposeAnalysis);
      // 立即结束加载状态
      setLoadingAnalysis(prev => ({ ...prev, purpose: false }));
    }
    
    // 更新研究方法
    if (initialMethodsAnalysis !== null && initialMethodsAnalysis !== methodsAnalysis) {
      setMethodsAnalysis(initialMethodsAnalysis);
      setLoadingAnalysis(prev => ({ ...prev, methods: false }));
    }
    
    // 更新测量指标
    if (initialMetricsAnalysis !== null && initialMetricsAnalysis !== metricsAnalysis) {
      setMetricsAnalysis(initialMetricsAnalysis);
      setLoadingAnalysis(prev => ({ ...prev, metrics: false }));
    }
    
    // 更新研究结果
    if (initialResultsAnalysis !== null && initialResultsAnalysis !== resultsAnalysis) {
      setResultsAnalysis(initialResultsAnalysis);
      setLoadingAnalysis(prev => ({ ...prev, results: false }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPurposeAnalysis, initialMethodsAnalysis, initialMetricsAnalysis, initialResultsAnalysis]);
  
  // Local visibility controls (only used if globalControls is false)
  const [showInfo, setShowInfo] = useState(true);
  const [showSummaryCard, setShowSummaryCard] = useState(false); // 默认隐藏，内嵌显示
  const [showPurpose, setShowPurpose] = useState(true);
  const [showMethods, setShowMethods] = useState(true);
  const [showMetrics, setShowMetrics] = useState(true);
  const [showResults, setShowResults] = useState(true);
  
  // Tab state for combined Abstract/Snippet card
  const [activeTab, setActiveTab] = useState('abstract');
  
  // Set default tab based on available content
  useEffect(() => {
    if (!paper.abstract && paper.tldr) {
      setActiveTab('snippet');
    } else {
      setActiveTab('abstract');
    }
  }, [paper]);
  
  // 设置加载状态并添加超时保护
  const setLoading = (dimension, isLoading) => {
    // 清除之前的超时
    if (timeoutRefs.current[dimension]) {
      clearTimeout(timeoutRefs.current[dimension]);
      timeoutRefs.current[dimension] = null;
    }
    
    setLoadingAnalysis(prev => ({ ...prev, [dimension]: isLoading }));
    
    // 如果正在加载，添加超时保护
    if (isLoading) {
      // 批量分析时使用更短的超时时间，确保即使API延迟，UI也能及时更新
      const timeoutDuration = batchAnalyzing ? 15000 : 30000; // 批量分析15秒超时，单个分析30秒超时
      
      timeoutRefs.current[dimension] = setTimeout(() => {
        console.warn(`${dimension} 分析超时自动结束 ${batchAnalyzing ? '(批量分析模式)' : ''}`);
        setLoadingAnalysis(prev => ({ ...prev, [dimension]: false }));
        timeoutRefs.current[dimension] = null;
      }, timeoutDuration);
    }
  };

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return '未知作者';
    
    const displayAuthors = authors.slice(0, 3);
    const authorNames = displayAuthors.map((author, index) => (
      <span key={`author-${paper.paperId}-${index}`}>
        <AuthorLink onClick={() => onAuthorClick && onAuthorClick(author)}>
          {author.name || '未知'}
        </AuthorLink>
        {index < displayAuthors.length - 1 && ', '}
      </span>
    ));

    if (authors.length > 3) {
      authorNames.push(<span key={`more-authors-${paper.paperId}`}> 等 {authors.length} 位作者</span>);
    }

    return authorNames;
  };

  const formatVenue = (venue) => {
    if (typeof venue === 'string') {
      // 处理过长的期刊名称
      return venue.length > 50 ? venue.substring(0, 47) + '...' : venue;
    }
    if (venue && venue.name) {
      const venueName = venue.name;
      return venueName.length > 50 ? venueName.substring(0, 47) + '...' : venueName;
    }
    return null;
  };

  // eslint-disable-next-line no-unused-vars
  const formatDate = (date) => {
    if (!date) return null;
    try {
      return new Date(date).getFullYear();
    } catch {
      return date;
    }
  };

  const getFieldsOfStudy = () => {
    // 优先使用 s2FieldsOfStudy（Semantic Scholar 的结构化字段）
    let fields = [];
    
    if (paper.s2FieldsOfStudy && paper.s2FieldsOfStudy.length > 0) {
      fields = paper.s2FieldsOfStudy.map(field => 
        typeof field === 'string' ? field : field.category || field.name || field
      ).filter(Boolean);
    } else if (paper.fieldsOfStudy && paper.fieldsOfStudy.length > 0) {
      fields = paper.fieldsOfStudy.map(field => 
        typeof field === 'string' ? field : field.category || field.name || field
      ).filter(Boolean);
    }
    
    return fields;
  };

  const truncateAbstract = (text, maxLength = 300) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleTitleClick = () => {
    // 跟踪论文标题点击事件
    trackPaperClick(
      paper.paperId, 
      paper.title, 
      paper.position || 0, 
      paper.source || 'unknown'
    );
    
    if (onPaperClick) {
      onPaperClick(paper);
    } else {
      // 使用相同的逻辑：优先官方链接
      const officialUrl = getOfficialPublisherUrl(paper);
      if (officialUrl) {
        trackExternalLinkClick(officialUrl, 'paper_title_official');
        window.open(officialUrl, '_blank');
      } else if (paper.url) {
        trackExternalLinkClick(paper.url, 'paper_title_semantic');
        window.open(paper.url, '_blank');
      }
    }
  };

  const handleExternalLink = () => {
    // 优先跳转到出版商官方链接
    const officialUrl = getOfficialPublisherUrl(paper);
    if (officialUrl) {
      trackExternalLinkClick(officialUrl, 'paper_external_official');
      window.open(officialUrl, '_blank');
    } else if (paper.url) {
      // 备选：跳转到 Semantic Scholar 页面
      trackExternalLinkClick(paper.url, 'paper_external_semantic');
      window.open(paper.url, '_blank');
    }
  };

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

  const handlePdfLink = () => {
    if (paper.openAccessPdf?.url) {
      trackExternalLinkClick(paper.openAccessPdf.url, 'paper_pdf');
      window.open(paper.openAccessPdf.url, '_blank');
    }
  };

  // 分析研究目的
  const handleAnalyzePurpose = async () => {
    if (loadingAnalysis.purpose) return;
    
    // 跟踪AI分析功能使用
    trackFeatureUsage('ai_analysis', 'research_purpose', paper.paperId);
    
    try {
      setLoading('purpose', true);
      const result = await analyzePaperDimension(paper, 'research_purpose', selectedModel);
      setPurposeAnalysis(result);
      if (onAnalysisComplete) {
        onAnalysisComplete(paper.paperId, 'research_purpose', result);
      }
    } catch (error) {
      console.error('分析研究目的失败:', error);
      setPurposeAnalysis('分析失败: ' + error.message);
      setAnalysisError(prev => ({ ...prev, purpose: error }));
    } finally {
      setLoading('purpose', false);
    }
  };

  // 分析研究方法
  const handleAnalyzeMethods = async () => {
    if (loadingAnalysis.methods) return;
    
    // 跟踪AI分析功能使用
    trackFeatureUsage('ai_analysis', 'research_methods', paper.paperId);
    
    try {
      setLoading('methods', true);
      const result = await analyzePaperDimension(paper, 'research_methods', selectedModel);
      setMethodsAnalysis(result);
      if (onAnalysisComplete) {
        onAnalysisComplete(paper.paperId, 'research_methods', result);
      }
    } catch (error) {
      console.error('分析研究方法失败:', error);
      setMethodsAnalysis('分析失败: ' + error.message);
      setAnalysisError(prev => ({ ...prev, methods: error }));
    } finally {
      setLoading('methods', false);
    }
  };

  // 分析测量指标
  const handleAnalyzeMetrics = async () => {
    if (loadingAnalysis.metrics) return;
    
    // 跟踪AI分析功能使用
    trackFeatureUsage('ai_analysis', 'metrics', paper.paperId);
    
    try {
      setLoading('metrics', true);
      const result = await analyzePaperDimension(paper, 'metrics', selectedModel);
      setMetricsAnalysis(result);
      if (onAnalysisComplete) {
        onAnalysisComplete(paper.paperId, 'metrics', result);
      }
    } catch (error) {
      console.error('分析测量指标失败:', error);
      setMetricsAnalysis('分析失败: ' + error.message);
      setAnalysisError(prev => ({ ...prev, metrics: error }));
    } finally {
      setLoading('metrics', false);
    }
  };

  // 分析研究结果
  const handleAnalyzeResults = async () => {
    if (loadingAnalysis.results) return;
    
    // 跟踪AI分析功能使用
    trackFeatureUsage('ai_analysis', 'research_results', paper.paperId);
    
    try {
      setLoading('results', true);
      const result = await analyzePaperDimension(paper, 'research_results', selectedModel);
      setResultsAnalysis(result);
      if (onAnalysisComplete) {
        onAnalysisComplete(paper.paperId, 'research_results', result);
      }
    } catch (error) {
      console.error('分析研究结果失败:', error);
      setResultsAnalysis('分析失败: ' + error.message);
      setAnalysisError(prev => ({ ...prev, results: error }));
    } finally {
      setLoading('results', false);
    }
  };

  // 翻译处理函数 - 支持完整内容翻译
  const handleTranslateContent = async () => {
    if (isTranslating || batchTranslating) return;
    
    const hasTranslation = translationData || (showTranslation && (translationState.translatedTitle || translationState.translatedAbstract || translationState.translatedSnippet));
    
    // 如果正在显示翻译，则切换回原文
    if (hasTranslation) {
      setShowTranslation(false);
      return;
    }
    
    // 如果已有本地翻译但未显示，则显示它
    if ((translationState.translatedTitle || translationState.translatedAbstract || translationState.translatedSnippet) && !showTranslation) {
      setShowTranslation(true);
      return;
    }
    
    // 否则进行新的翻译
    try {
      // 跟踪翻译功能使用
      trackFeatureUsage('translation', 'paper_content', paper.paperId);
      
      setIsTranslating(true);
      const translationResult = await translatePaperContent(paper, selectedModel);
      
      // 立即更新本地状态
      setTranslationState(translationResult);
      setShowTranslation(true);
      
      // 通知父组件翻译完成
      if (onTranslationComplete) {
        onTranslationComplete(paper.paperId, translationResult);
      }
    } catch (error) {
      console.error('翻译内容失败:', error);
      // 可以显示错误提示，但这里保持简单
    } finally {
      setIsTranslating(false);
    }
  };

  // Determine which visibility controls to use
  // eslint-disable-next-line no-unused-vars
  const finalShowInfo = globalControls ? globalShowInfo : showInfo;
  const finalShowSummaryCard = globalControls ? (globalShowAbstract || globalShowSnippet) : showSummaryCard;
  const finalShowPurpose = globalControls ? globalShowPurpose : showPurpose;
  const finalShowMethods = globalControls ? globalShowMethods : showMethods;
  const finalShowMetrics = globalControls ? globalShowMetrics : showMetrics;
  const finalShowResults = globalControls ? globalShowResults : showResults;
  
  // 当 Summary 卡片隐藏时，将内容显示在左侧信息卡片中
  const showSummaryInInfoCard = !finalShowSummaryCard;
  
  // 监听卡片显示状态和内容变化
  useEffect(() => {
    const hasAnyCards = finalShowSummaryCard || finalShowPurpose || finalShowMethods || finalShowMetrics || finalShowResults;
    
    if (hasAnyCards) {
      // 延迟检测，等待DOM更新
      const timer = setTimeout(checkOverflow, 100);
      return () => clearTimeout(timer);
    } else {
      // 没有卡片时重置溢出状态
      setHasLeftOverflow(false);
      setHasRightOverflow(false);
    }
  }, [finalShowSummaryCard, finalShowPurpose, finalShowMethods, finalShowMetrics, finalShowResults, checkOverflow]);
  
  // 监听容器大小变化
  useEffect(() => {
    if (!analysisCardsRef.current) return;
    
    const resizeObserver = new ResizeObserver(() => {
      // 延迟检测，等待浏览器完成重排
      setTimeout(checkOverflow, 50);
    });
    
    resizeObserver.observe(analysisCardsRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [checkOverflow]);

  // 添加显示切换处理函数
  // eslint-disable-next-line no-unused-vars
  const onShowInfoChange = (show) => {
    // 如果有全局控制，则不处理
    if (globalControls) return;
    
    // 否则本地管理状态
    setShowInfo(show);
  };

  const handleVenueCopy = (venue) => {
    if (venue) {
      navigator.clipboard.writeText(venue).then(() => {
        // 可以添加一个提示，但这里保持简单
      });
    }
  };

  // 获取显示的标题
  const getDisplayTitle = () => {
    if (showTranslation) {
      return (translationData?.translatedTitle || translationState.translatedTitle) || paper.title;
    }
    return paper.title;
  };

  // 获取显示的摘要
  const getDisplayAbstract = () => {
    if (showTranslation) {
      return (translationData?.translatedAbstract || translationState.translatedAbstract) || paper.abstract;
    }
    return paper.abstract;
  };

  // 获取显示的AI摘要
  const getDisplaySnippet = () => {
    if (showTranslation) {
      return (translationData?.translatedSnippet || translationState.translatedSnippet) || paper.tldr?.text;
    }
    return paper.tldr?.text;
  };

  return (
    <PaperContainer>
      {!globalControls && (
        <VisibilityToolbar>
          <VisibilityControl>
            <input
              type="checkbox"
              id={`summary-${paper.paperId}`}
              checked={showSummaryCard}
              onChange={() => setShowSummaryCard(!showSummaryCard)}
            />
            <label htmlFor={`summary-${paper.paperId}`}>Summary</label>
          </VisibilityControl>
          <VisibilityControl>
            <input
              type="checkbox"
              id={`purpose-${paper.paperId}`}
              checked={showPurpose}
              onChange={() => setShowPurpose(!showPurpose)}
            />
            <label htmlFor={`purpose-${paper.paperId}`}>Purpose</label>
          </VisibilityControl>
          <VisibilityControl>
            <input
              type="checkbox"
              id={`methods-${paper.paperId}`}
              checked={showMethods}
              onChange={() => setShowMethods(!showMethods)}
            />
            <label htmlFor={`methods-${paper.paperId}`}>Methods</label>
          </VisibilityControl>
          <VisibilityControl>
            <input
              type="checkbox"
              id={`metrics-${paper.paperId}`}
              checked={showMetrics}
              onChange={() => setShowMetrics(!showMetrics)}
            />
            <label htmlFor={`metrics-${paper.paperId}`}>Metrics</label>
          </VisibilityControl>
          <VisibilityControl>
            <input
              type="checkbox"
              id={`results-${paper.paperId}`}
              checked={showResults}
              onChange={() => setShowResults(!showResults)}
            />
            <label htmlFor={`results-${paper.paperId}`}>Results</label>
          </VisibilityControl>
        </VisibilityToolbar>
      )}

      <CardGrid>
        {/* Left Column - Info Card */}
        <div className="info-column">
          <MainInfoCard>
            <CardHeader>
              <div>
                <TitleContainer>
                                  <SourceIcon 
                  $source={paper.source} 
                  data-tooltip={
                    paper.source === 'semantic' ? '3rd api' :
                    paper.source === 'googleScholar' ? 'Google Scholar' : 
                    paper.source === 'primaryScraping' ? 'Primary Scraping Scholar' :
                    'Unknown Source'
                  }
                >
                  {paper.source === 'semantic' && '🎓'}
                  {paper.source === 'googleScholar' && '🔍'}
                  {paper.source === 'primaryScraping' && '💫'}
                  {!paper.source && '📄'}
                </SourceIcon>
                  <PaperTitle $expanded={finalShowSummaryCard} onClick={handleTitleClick}>
                    {getDisplayTitle()}
                  </PaperTitle>
                </TitleContainer>
              </div>
            </CardHeader>

            <CardContent>
              {/* 主要元信息 - 根据 Summary 显示状态调整大小 */}
              <PrimaryMetaInfo $expanded={finalShowSummaryCard}>
                {paper.year && (
                  <PrimaryMetaItem $expanded={finalShowSummaryCard}>
                    <FiCalendar size={finalShowSummaryCard ? 14 : 12} />
                    <strong>{paper.year}</strong>
                  </PrimaryMetaItem>
                )}
                
                {paper.citationCount !== undefined && (
                  <PrimaryMetaItem $expanded={finalShowSummaryCard}>
                    <FiTrendingUp size={finalShowSummaryCard ? 14 : 12} />
                    <strong>{paper.citationCount}</strong>
                  </PrimaryMetaItem>
                )}
                
                {paper.influentialCitationCount !== undefined && paper.influentialCitationCount > 0 && (
                  <PrimaryMetaItem $expanded={finalShowSummaryCard}>
                    <FiBookmark size={finalShowSummaryCard ? 14 : 12} />
                    <strong>{paper.influentialCitationCount}</strong>
                  </PrimaryMetaItem>
                )}
                
                {/* 作者信息移到这里 */}
                <PrimaryMetaItem $expanded={finalShowSummaryCard}>
                  <FiUsers size={finalShowSummaryCard ? 14 : 12} />
                  <AuthorText $expanded={finalShowSummaryCard}>{formatAuthors(paper.authors)}</AuthorText>
                </PrimaryMetaItem>
              </PrimaryMetaInfo>

              {/* 标签容器 - 根据 Summary 显示状态调整大小 */}
              <TagsContainer $expanded={finalShowSummaryCard}>
                {/* 期刊信息 - 优先显示 */}
                {formatVenue(paper.venue) && (
                  <VenueTag 
                    $expanded={finalShowSummaryCard}
                    onClick={() => handleVenueCopy(formatVenue(paper.venue))}
                    title="点击复制期刊名称"
                  >
                    📖 {formatVenue(paper.venue)}
                  </VenueTag>
                )}
                
                {/* 开放获取标识 */}
                {paper.isOpenAccess && (
                  <OpenAccessTag $expanded={finalShowSummaryCard} key={`open-access-${paper.paperId}`}>🔓 OA</OpenAccessTag>
                )}
                
                {/* 研究领域 - 根据显示状态调整数量 */}
                {getFieldsOfStudy().slice(0, finalShowSummaryCard ? 6 : 2).map((field, index) => (
                  <FieldTag $expanded={finalShowSummaryCard} key={`field-${paper.paperId}-${index}`}>{field}</FieldTag>
                ))}
                
                {/* 文献类型 - 独立时显示更多 */}
                {paper.publicationTypes && paper.publicationTypes.slice(0, finalShowSummaryCard ? 4 : 1).map((type, index) => (
                  <TypeTag $expanded={finalShowSummaryCard} key={`type-${paper.paperId}-${index}`}>{type}</TypeTag>
                ))}
                
                {/* 额外的 Semantic Scholar 特有字段 - 仅在独立时显示 */}
                {finalShowSummaryCard && paper.externalIds && (
                  <>
                    {paper.externalIds.DOI && (
                      <ExtraTag $expanded={finalShowSummaryCard} key={`doi-${paper.paperId}`}>DOI</ExtraTag>
                    )}
                    {paper.externalIds.ArXiv && (
                      <ExtraTag $expanded={finalShowSummaryCard} key={`arxiv-${paper.paperId}`}>arXiv</ExtraTag>
                    )}
                    {paper.externalIds.PubMed && (
                      <ExtraTag $expanded={finalShowSummaryCard} key={`pubmed-${paper.paperId}`}>PubMed</ExtraTag>
                    )}
                  </>
                )}
              </TagsContainer>

              {/* 当 Summary 卡片隐藏时，在信息卡片中显示摘要内容 */}
              {showSummaryInInfoCard && (
                <SummaryInInfoCard>
                  <SummaryLayout>
                    <SummaryContent>
                      {activeTab === 'abstract' ? (
                        getDisplayAbstract() ? (
                          <SummaryText>
                            {truncateAbstract(getDisplayAbstract(), 300)}
                          </SummaryText>
                        ) : (
                          <SummaryEmptyText>该论文没有提供摘要</SummaryEmptyText>
                        )
                      ) : (
                        getDisplaySnippet() ? (
                          <SummaryText>{truncateAbstract(getDisplaySnippet(), 300)}</SummaryText>
                        ) : (
                          <SummaryEmptyText>该论文没有提供 AI 摘要</SummaryEmptyText>
                        )
                      )}
                    </SummaryContent>
                    
                    <SummaryTabContainer>
                      <SummaryTab 
                        $active={activeTab === 'abstract'} 
                        onClick={() => setActiveTab('abstract')}
                        title="Abstract"
                      >
                        📄
                      </SummaryTab>
                      <SummaryTab 
                        $active={activeTab === 'snippet'} 
                        onClick={() => setActiveTab('snippet')}
                        title="AI Snippet"
                      >
                        🤖
                      </SummaryTab>
                    </SummaryTabContainer>
                  </SummaryLayout>
                </SummaryInInfoCard>
              )}
            </CardContent>

            {/* 添加一个id便于调试 */}
            <ActionButtons id="paper-action-buttons">
              {(getOfficialPublisherUrl(paper) || paper.url) && (
                <IconButton $primary $hasText onClick={handleExternalLink} id="paper-external-link">
                  <FiExternalLink size={16} />
                  <span>{getOfficialPublisherUrl(paper) ? '官方链接' : '查看详情'}</span>
                </IconButton>
              )}
              
              {paper.openAccessPdf?.url && (
                <IconButton $hasText onClick={handlePdfLink} id="paper-pdf-link">
                  <FiFileText size={16} />
                  <span>PDF全文</span>
                </IconButton>
              )}
              
              {/* 批量翻译时隐藏单独的翻译按钮 */}
              {!batchTranslating && (
                <IconButton 
                  $hasText 
                  onClick={handleTranslateContent} 
                  id="paper-translate-button"
                  disabled={isTranslating}
                >
                  <FiGlobe size={16} />
                  <span>
                    {isTranslating ? '翻译中...' : 
                     (showTranslation && (translationData || translationState.translatedTitle || translationState.translatedAbstract || translationState.translatedSnippet)) ? '还原' : '翻译'}
                  </span>
                </IconButton>
              )}
            </ActionButtons>
          </MainInfoCard>
        </div>

        {/* Right Column - Analysis Cards */}
        <div className={`analysis-cards-wrapper ${
          !hasLeftOverflow && !hasRightOverflow ? 'no-overflow' : ''
        } ${!hasLeftOverflow ? 'no-left-overflow' : ''} ${!hasRightOverflow ? 'no-right-overflow' : ''}`}>
          <div className="analysis-cards" ref={analysisCardsRef}>
          {/* Abstract/Snippet Card */}
          {finalShowSummaryCard && (
            <AbstractCard className={hoveredCardType === 'summary' ? 'highlighted' : ''}>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
                {getDisplayAbstract() && getDisplayAbstract().length > 300 && activeTab === 'abstract' && (
                  <ToggleButton onClick={() => setShowFullAbstract(!showFullAbstract)}>
                    {showFullAbstract ? (
                      <>
                        <FiChevronUp size={14} /> 收起
                      </>
                    ) : (
                      <>
                        <FiChevronDown size={14} /> 展开
                      </>
                    )}
                  </ToggleButton>
                )}
              </CardHeader>
              
              <TabContainer>
                <Tab 
                  $active={activeTab === 'abstract'} 
                  onClick={() => setActiveTab('abstract')}
                >
                  Abstract
                </Tab>
                <Tab 
                  $active={activeTab === 'snippet'} 
                  onClick={() => setActiveTab('snippet')}
                >
                  AI Snippet
                </Tab>
              </TabContainer>
              
              <CardContent>
                {activeTab === 'abstract' ? (
                  getDisplayAbstract() ? (
                    <ContentText>
                      {showFullAbstract ? getDisplayAbstract() : truncateAbstract(getDisplayAbstract())}
                    </ContentText>
                  ) : (
                    <EmptyCardPlaceholder>
                      <EmptyCardIcon>
                        <FiAlertCircle size={28} />
                      </EmptyCardIcon>
                      <EmptyCardMessage>该论文没有提供摘要</EmptyCardMessage>
                    </EmptyCardPlaceholder>
                  )
                ) : (
                  getDisplaySnippet() ? (
                    <ContentText>{getDisplaySnippet()}</ContentText>
                  ) : (
                    <EmptyCardPlaceholder>
                      <EmptyCardIcon>
                        <FiAlertCircle size={28} />
                      </EmptyCardIcon>
                      <EmptyCardMessage>该论文没有提供 AI 摘要</EmptyCardMessage>
                    </EmptyCardPlaceholder>
                  )
                )}
              </CardContent>
            </AbstractCard>
          )}
          
          {/* Research Purpose Card */}
          {finalShowPurpose && (
            <AICardContainer $type="purpose" className={hoveredCardType === 'purpose' ? 'highlighted' : ''}>
              <CardHeader>
                <AICardTitle $type="purpose">研究目的</AICardTitle>
              </CardHeader>
              
              <CardContent>
                {purposeAnalysis ? (
                  <AICardContent>{purposeAnalysis}</AICardContent>
                ) : (
                  <AIPlaceholder>
                    <span>点击分析此论文的研究目的</span>
                    <AIButton onClick={handleAnalyzePurpose} $loading={loadingAnalysis.purpose}>
                      <FiRefreshCw size={14} />
                      {loadingAnalysis.purpose ? '分析中...' : '开始分析'}
                    </AIButton>
                  </AIPlaceholder>
                )}
              </CardContent>
              
              {loadingAnalysis.purpose && (
                <AILoadingOverlay>
                  <FiRefreshCw size={24} />
                  <AILoadingText>AI 正在分析...</AILoadingText>
                </AILoadingOverlay>
              )}
            </AICardContainer>
          )}
          
          {/* Research Methods Card */}
          {finalShowMethods && (
            <AICardContainer $type="methods" className={hoveredCardType === 'methods' ? 'highlighted' : ''}>
              <CardHeader>
                <AICardTitle $type="methods">研究方法</AICardTitle>
              </CardHeader>
              
              <CardContent>
                {methodsAnalysis ? (
                  <AICardContent>{methodsAnalysis}</AICardContent>
                ) : (
                  <AIPlaceholder>
                    <span>点击分析此论文的研究方法</span>
                    <AIButton onClick={handleAnalyzeMethods} $loading={loadingAnalysis.methods}>
                      <FiRefreshCw size={14} />
                      {loadingAnalysis.methods ? '分析中...' : '开始分析'}
                    </AIButton>
                  </AIPlaceholder>
                )}
              </CardContent>
              
              {loadingAnalysis.methods && (
                <AILoadingOverlay>
                  <FiRefreshCw size={24} />
                  <AILoadingText>AI 正在分析...</AILoadingText>
                </AILoadingOverlay>
              )}
            </AICardContainer>
          )}
          
          {/* Research Metrics Card */}
          {finalShowMetrics && (
            <AICardContainer $type="metrics" className={hoveredCardType === 'metrics' ? 'highlighted' : ''}>
              <CardHeader>
                <AICardTitle $type="metrics">测量指标</AICardTitle>
              </CardHeader>
              
              <CardContent>
                {metricsAnalysis ? (
                  <AICardContent>{metricsAnalysis}</AICardContent>
                ) : (
                  <AIPlaceholder>
                    <span>点击分析此论文的测量指标</span>
                    <AIButton onClick={handleAnalyzeMetrics} $loading={loadingAnalysis.metrics}>
                      <FiRefreshCw size={14} />
                      {loadingAnalysis.metrics ? '分析中...' : '开始分析'}
                    </AIButton>
                  </AIPlaceholder>
                )}
              </CardContent>
              
              {loadingAnalysis.metrics && (
                <AILoadingOverlay>
                  <FiRefreshCw size={24} />
                  <AILoadingText>AI 正在分析...</AILoadingText>
                </AILoadingOverlay>
              )}
            </AICardContainer>
          )}
          
          {/* Research Results Card */}
          {finalShowResults && (
            <AICardContainer $type="results" className={hoveredCardType === 'results' ? 'highlighted' : ''}>
              <CardHeader>
                <AICardTitle $type="results">研究结果</AICardTitle>
              </CardHeader>
              
              <CardContent>
                {resultsAnalysis ? (
                  <AICardContent>{resultsAnalysis}</AICardContent>
                ) : (
                  <AIPlaceholder>
                    <span>点击分析此论文的研究结果</span>
                    <AIButton onClick={handleAnalyzeResults} $loading={loadingAnalysis.results}>
                      <FiRefreshCw size={14} />
                      {loadingAnalysis.results ? '分析中...' : '开始分析'}
                    </AIButton>
                  </AIPlaceholder>
                )}
              </CardContent>
              
              {loadingAnalysis.results && (
                <AILoadingOverlay>
                  <FiRefreshCw size={24} />
                  <AILoadingText>AI 正在分析...</AILoadingText>
                </AILoadingOverlay>
              )}
            </AICardContainer>
          )}
          </div>
        </div>
      </CardGrid>
    </PaperContainer>
  );
};

export default PaperCard;