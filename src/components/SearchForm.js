import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiSearch, FiX, FiAlertTriangle } from 'react-icons/fi';
import { optimizeSearchQuery, AI_MODELS } from '../api/aiService';
import { FILTER_CONFIGS, getIcon } from '../config/filterConfigs';
import { hasSensitiveWords } from '../utils/sensitiveWords';
import { trackAISearch, trackFilterUsage } from '../utils/analytics';

// 移除按键图片导入，改为代码实现

const SearchContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 4px 25px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(226, 232, 240, 0.6);
  z-index: 5;
  
  /* 当在UsageInstructions内部时，无最大宽度限制 */
  /* 当独立显示时，添加合适的最大宽度 */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  /* 支持变体样式 - 当在UsageInstructions中使用时的装饰效果 */
  ${props => props.$variant === 'welcome' && `
    background: linear-gradient(135deg, rgba(93, 173, 226, 0.1), rgba(84, 153, 199, 0.1));
    padding: 25px;
    border-radius: 15px;
    border: 3px solid #007acc;
    box-shadow: 
      0 8px 32px rgba(0, 122, 204, 0.15),
      inset 0 0 20px rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    
    /* 添加微妙的光晕效果 */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        rgba(0, 122, 204, 0.03) 0%, 
        rgba(52, 152, 219, 0.03) 50%, 
        rgba(0, 122, 204, 0.03) 100%);
      border-radius: 12px;
      pointer-events: none;
      z-index: -1;
    }
    
    @media (max-width: 768px) {
      padding: 20px;
    }
    
    @media (max-width: 480px) {
      padding: 16px;
    }
  `}
  
  @media (max-width: 768px) {
    border-width: 1.5px;
    border-radius: 12px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 8px;
    margin-left: 2px;
    margin-right: 2px;
    box-shadow: 
      0 2px 15px rgba(0, 0, 0, 0.06),
      0 1px 2px rgba(0, 0, 0, 0.04);
  }
  
  /* 添加AI完成时的成功效果 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
    opacity: 0;
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }
  
  ${props => props.$aiCompleted && `
    &::after {
      opacity: 1;
      animation: successPulse 1.5s ease-out;
    }
    
    @keyframes successPulse {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.02);
      }
      100% {
        opacity: 0;
        transform: scale(1.05);
      }
    }
  `}
`;

// 主搜索区域
const MainSearchArea = styled.div`
  padding: 20px 24px 16px 24px; /* 减少padding让搜索区域更紧凑 */
  background: linear-gradient(135deg, #fbfcfd 0%, #f6f7f8 100%);
  border-bottom: 2px solid rgba(226, 232, 240, 0.4);
  position: relative;
  z-index: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  
  /* 当筛选器关闭时，底部也有圆角 */
  ${props => !props.$showFilters && `
    border-bottom: none;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  `}
  
  @media (max-width: 768px) {
    padding: 14px 16px 10px 16px;
    border-bottom-width: 1.5px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    
    ${props => !props.$showFilters && `
      border-bottom: none;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    `}
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px 6px 12px;
    border-bottom-width: 1px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    
    ${props => !props.$showFilters && `
      border-bottom: none;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    `}
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

// 搜索按钮组容器
const SearchButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  min-height: 80px; /* 确保容器有足够高度容纳不同状态的按钮 */
  
  /* 隐藏移动端数据源选择器（PC端不显示） */
  .mobile-datasource-tabs,
  .mobile-datasource-select {
    display: none;
  }
  
  @media (max-width: 768px) {
    min-height: 60px;
  }
`;

// 按键提示组件容器
const KeyPromptContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    flex: 1;
    justify-content: flex-end;
    gap: 8px;
  }
`;

// Enter 按键组件 - 支持两种显示模式
const EnterKeyButton = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  
  /* 当显示Shift+Enter时的键盘按键样式 */
  ${props => props.$shiftPressed ? `
    width: 80px;
    height: 50px;
    background: linear-gradient(145deg, #374151 0%, #1f2937 100%);
    border: 3px solid #4b5563;
    border-bottom: 4px solid #374151;
    border-right: 3px solid #4b5563;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: #f9fafb;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transform: ${props.$isPressed ? 'scale(0.95)' : 'scale(1)'};
    box-shadow: 
      0 ${props.$isPressed ? '2px' : '4px'} 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    
    /* 按键文字 */
    &::before {
      content: 'Enter↩ ';
      letter-spacing: 0.5px;
    }
    
    /* Shift按下时的呼吸效果 */
    animation: enterBreathing 2s ease-in-out infinite;
    
    @keyframes enterBreathing {
      0% {
        box-shadow: 
          0 4px 8px rgba(0, 0, 0, 0.15),
          0 0 0 3px rgba(34, 197, 94, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
        transform: scale(1);
      }
      50% {
        box-shadow: 
          0 6px 12px rgba(0, 0, 0, 0.2),
          0 0 0 5px rgba(34, 197, 94, 0.5),
          inset 0 1px 0 rgba(255, 255, 255, 0.15);
        transform: scale(1.02);
      }
      100% {
        box-shadow: 
          0 4px 8px rgba(0, 0, 0, 0.15),
          0 0 0 3px rgba(34, 197, 94, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
        transform: scale(1);
      }
    }
    
    &:hover {
        transform: scale(1.08);
        background: linear-gradient(145deg, #4b5563 0%, #374151 100%);
        box-shadow: 
          0 6px 12px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    
    &:active {
        transform: scale(0.92);
      background: linear-gradient(145deg, #1f2937 0%, #111827 100%);
      border-bottom: 2px solid #374151;
      box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }
    
    @media (max-width: 768px) {
      width: 50px;
      height: 32px;
        font-size: 10px;
        border-width: 2px;
        border-radius: 6px;
        transform: ${props.$isPressed ? 'scale(0.95)' : 'scale(1)'};
      
      &:hover {
          transform: scale(1.08);
      }
      
      &:active {
          transform: scale(0.92);
        }
      }
      
      @media (max-width: 480px) {
        width: 45px;
        height: 28px;
        font-size: 9px;
        border-width: 1.5px;
        border-radius: 4px;
        
        &::before {
          content: 'Enter';
          letter-spacing: 0.2px;
        }
        
        &:hover {
          transform: scale(1.05);
        }
        
        &:active {
          transform: scale(0.95);
      }
    }
    ` : `
     /* 当显示搜索按钮时的样式 */
     padding: 16px 28px;
       background: linear-gradient(135deg, #374151, #4b5563);
     color: white;
       border: 2px solid #374151;
       border-radius: 6px;
     font-size: 15px;
     font-weight: 600;
       box-shadow: 0 4px 15px rgba(55, 65, 81, 0.25);
     transform: ${props.$isPressed ? 'scale(0.95)' : 'scale(1)'};
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 8px;
     min-width: 100px;
     height: 52px;
     user-select: none;
     
     &:hover {
       transform: scale(1.05);
         box-shadow: 0 6px 25px rgba(55, 65, 81, 0.35);
         background: linear-gradient(135deg, #1f2937, #374151);
         border-color: #1f2937;
     }
     
     &:active {
       transform: scale(0.95);
         box-shadow: 0 2px 10px rgba(55, 65, 81, 0.25);
     }
     
     @media (max-width: 768px) {
       padding: 15px 24px;
       font-size: 14px;
       min-width: 90px;
       height: 50px;
       gap: 6px;
       border-width: 1.5px;
     }
     
     @media (max-width: 480px) {
       padding: 13px 18px;
       font-size: 13px;
       min-width: 80px;
       height: 45px;
       gap: 4px;
       border-radius: 4px;
       border-width: 1px;
     }
   `}
`;

// 加号显示组件 - 显示在两个按键之间
const PlusIcon = styled.div`
  display: ${props => props.$visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
  pointer-events: none;
  text-shadow: 0 0 8px rgba(55, 65, 81, 0.6);
  min-width: 20px;
  
  ${props => props.$visible && `
    animation: plusAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards, plusPulse 1.5s ease-in-out 0.3s infinite;
    
    @keyframes plusAppear {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes plusPulse {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.3);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0.8;
      }
    }
  `}
  
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 16px;
  }
`;

// Shift 按键组件
const ShiftKeyButton = styled.div`
  position: relative;
  width: 80px;
  height: 50px;
  background: linear-gradient(145deg, #374151 0%, #1f2937 100%);
  border: 3px solid #4b5563;
  border-bottom: 4px solid #374151;
  border-right: 3px solid #4b5563;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: ${props => props.$isPressed ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #f9fafb;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  opacity: 1;
  transform: ${props => props.$isPressed ? 'scale(0.95)' : 'scale(1)'};
  box-shadow: 
    0 3px 6px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* 按键文字 */
  &::before {
    content: '⇧ Shift';
    letter-spacing: 0.3px;
  }
  
  &:hover {
    transform: scale(1.08);
    background: linear-gradient(145deg, #4b5563 0%, #374151 100%);
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  
  &:active {
    transform: scale(0.92);
    background: linear-gradient(145deg, #1f2937 0%, #111827 100%);
    border-bottom: 2px solid #374151;
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  
  /* Shift 按下时的出现和发光效果 */
  ${props => props.$isPressed && `
    animation: shiftAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards, shiftGlow 1.8s ease-in-out 0.3s infinite alternate;
    
    @keyframes shiftAppear {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes shiftGlow {
      0% { 
          box-shadow: 
            0 3px 6px rgba(0, 0, 0, 0.15),
            0 0 0 2px rgba(34, 197, 94, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        transform: scale(1);
      }
      100% { 
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 0 0 4px rgba(34, 197, 94, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        transform: scale(1.01);
      }
    }
  `}
  
  @media (max-width: 768px) {
      width: 50px;
      height: 32px;
      font-size: 10px;
      border-width: 2px;
      border-radius: 6px;
      
      &::before {
        content: '⇧ Shift';
      }
    }
    
    @media (max-width: 480px) {
      width: 45px;
      height: 28px;
      font-size: 9px;
      border-width: 1.5px;
      border-radius: 4px;
      
      &::before {
        content: '⇧';
        letter-spacing: 0px;
      }
  }
`;

// 输入框内部的AI提示组件
const InputAIHint = styled.div`
  position: absolute;
  right: 20px; /* 调整位置，因为删除了AI按钮 */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #6c757d;
  pointer-events: none;
  z-index: 3;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(2px);
  
  .hint-text {
    white-space: nowrap;
    font-weight: 500;
  }
  
  .shift-key-text {
    font-weight: 700;
    color: #374151;
    padding: 2px 6px;
    background: rgba(55, 65, 81, 0.1);
    border: 1px solid rgba(55, 65, 81, 0.3);
    border-radius: 4px;
    font-size: 11px;
    margin: 0 3px;
  }
  
      @media (max-width: 768px) {
      font-size: 12px;
      right: 16px; /* 移动端也调整位置 */
      
      .shift-key-text {
        font-size: 10px;
        padding: 1px 4px;
      }
    }
  
  @media (max-width: 480px) {
    display: none; // 在很小的屏幕上隐藏提示
  }
`;

// AI开关组件
const AISwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  padding: 8px 16px;
  
  @media (max-width: 768px) {
    margin-top: 8px;
    padding: 6px 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 6px;
    padding: 4px 8px;
  }
`;

const AISwitchLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const AISwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background: ${props => props.$checked ? '#22c55e' : '#d1d5db'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$checked ? '#16a34a' : '#9ca3af'};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$checked ? '22px' : '2px'};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      background: ${props => props.$checked ? '#22c55e' : '#d1d5db'};
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 22px;
    
    &::after {
      width: 18px;
      height: 18px;
      left: ${props => props.$checked ? '20px' : '2px'};
    }
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 20px;
    
    &::after {
      width: 16px;
      height: 16px;
      left: ${props => props.$checked ? '18px' : '2px'};
    }
  }
`;

const AISwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// 底部控制区域的AI开关容器
const BottomAISwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 4px 8px;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 3px 6px;
    gap: 4px;
  }
`;

const BottomAISwitchLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const BottomAISwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  background: ${props => props.$checked ? '#22c55e' : '#d1d5db'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$checked ? '#16a34a' : '#9ca3af'};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$checked ? '18px' : '2px'};
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      background: ${props => props.$checked ? '#22c55e' : '#d1d5db'};
    }
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 18px;
    
    &::after {
      width: 14px;
      height: 14px;
      left: ${props => props.$checked ? '16px' : '2px'};
    }
  }
  
  @media (max-width: 480px) {
    width: 28px;
    height: 16px;
    
    &::after {
      width: 12px;
      height: 12px;
      left: ${props => props.$checked ? '14px' : '2px'};
    }
  }
`;

// 添加tooltip样式组件
const SwitchTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  transform: none;
  background: #2d3748;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
  white-space: normal;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  text-align: center;
  min-width: 200px;
  max-width: 280px;
  
  /* 小箭头 */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #2d3748;
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 8px 12px;
    margin-bottom: 8px;
    min-width: 180px;
    max-width: 240px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 6px 10px;
    margin-bottom: 6px;
    min-width: 160px;
    max-width: 200px;
  }
`;

// 敏感词提示组件
const SensitiveWordAlert = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #856404;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '-10px'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
  
  .alert-icon {
    color: #f39c12;
    flex-shrink: 0;
  }
  
  .alert-text {
    flex: 1;
    line-height: 1.4;
  }
  
  .alert-close {
    background: none;
    border: none;
    color: #856404;
    cursor: pointer;
    padding: 2px;
    border-radius: 3px;
    transition: background-color 0.2s ease;
    
    &:hover {
      background: rgba(133, 100, 4, 0.1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`;

// 移除了不再使用的 KeyPromptText 组件

// 移除了不再使用的 KeyCombination 和 UnifiedSearchButton 组件

// 搜索控制区域 - 包含输入框和按钮
const SearchControlsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px; /* 减少底部间距 */
  
  /* PC端默认布局：筛选-输入框-搜索按钮 */
    .filter-toggle-left {
      order: 1;
    }
    
    .search-input-wrapper {
      order: 2;
    }
    
    .search-button-group {
      order: 3;
    
    .filter-toggle-left {
      display: none; /* PC端隐藏搜索按钮组内的筛选按钮 */
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    
    /* 隐藏左侧独立的筛选按钮 */
    > .filter-toggle-left {
      display: none;
    }
    
    .search-input-wrapper {
      order: 1; /* 输入框优先显示 */
    }
    
    .search-button-group {
      order: 2;
      display: flex;
      gap: 12px;
      
      /* 显示搜索按钮组内的筛选按钮 */
      .filter-toggle-left {
        display: flex;
        padding: 14px 16px;
        font-size: 13px;
      }
      
      button {
        flex: 1;
        padding: 16px 20px;
        font-size: 15px;
      }
    }
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 6px; /* 减少移动端底部间距 */
    
    /* 隐藏左侧独立的筛选按钮 */
    > .filter-toggle-left {
      display: none;
    }
    
    .search-input-wrapper {
      order: 1;
      width: 100%;
    }
    
    .search-button-group {
      order: 2;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      
      /* 筛选按钮紧凑显示在左侧 */
    .filter-toggle-left {
        display: flex !important; /* 强制显示 */
        order: 1; /* 左侧 */
        flex: 0 0 44px; /* 固定宽度，只显示图标 */
        padding: 10px 6px;
        font-size: 16px;
        min-height: 40px;
        width: 44px;
        justify-content: center;
        align-items: center;
      
      .filter-text {
          display: none; /* 隐藏文字 */
      }
      
      .filter-icon {
        margin-right: 0;
      }
    }
    
      /* 移动端数据源下拉菜单 */
      .mobile-datasource-select {
        display: flex !important;
        order: 2; /* 中间 */
        
        select {
          flex: 1;
          min-width: 100px;
          max-width: 140px;
          height: 40px;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          background: white;
          color: #374151;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          padding-right: 28px;
          
          &:hover:not(:disabled) {
            background-color: #f8f9fa;
            border-color: #adb5bd;
          }
          
          &:focus {
            outline: none;
            border-color: #007acc;
            box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
          }
          
          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: #f9fafb;
            color: #9ca3af;
          }
        }
      }
      
      /* 搜索按钮占主要空间，显示在右侧 */
      .key-prompt-container {
        order: 3; /* 右侧 */
        flex: 1; /* 占剩余空间 */
        display: flex;
        justify-content: flex-end;
        
        /* 确保Enter按钮在右侧且占据合适的空间 */
      button {
          flex: 1;
          max-width: 120px; /* 限制最大宽度 */
          padding: 10px 14px;
          font-size: 14px;
          min-height: 40px;
        }
      }
    }
  }
`;

// 添加字符动画效果
const characterAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5px);
    color: #6c5ce7;
  }
  50% {
    color: #6c5ce7;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    color: inherit;
  }
`;

// 添加光标闪烁动画
const cursorBlink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 18px 20px 18px 20px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:focus {
    border-color: #374151;
    box-shadow: 
      0 0 0 3px rgba(55, 65, 81, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${props => props.$aiProcessing ? 'transparent' : '#9ca3af'};
    font-weight: 400;
    opacity: ${props => props.$aiProcessing ? '0' : '0.8'};
  }
  
  &:focus::placeholder {
    color: ${props => props.$aiProcessing ? 'transparent' : '#c1c7d0'};
    opacity: ${props => props.$aiProcessing ? '0' : '0.6'};
  }
  
  &:disabled {
    background-color: ${props => props.$aiProcessing ? 'rgba(34, 197, 94, 0.02)' : '#f8f9fa'};
    color: ${props => props.$aiProcessing ? '#374151' : '#6c757d'};
    cursor: not-allowed;
    opacity: ${props => props.$aiProcessing ? '1' : '0.7'};
    border-color: ${props => props.$aiProcessing ? '#22c55e' : '#e8ecef'};
  }
  
  @media (max-width: 768px) {
    padding: 16px 20px 16px 20px;
    font-size: 16px;
      border-radius: 6px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 14px 16px 14px 16px;
    font-size: 15px;
    border-radius: 6px;
    
    &::placeholder {
      font-size: 13px;
    }
  }
  
  /* 添加 AI 处理时的高亮效果 - 优先级高于disabled状态 */
  ${props => props.$aiProcessing && `
    border-color: transparent !important;
    box-shadow: none !important;
    background-color: rgba(34, 197, 94, 0.02) !important;
    color: transparent !important;
    opacity: 1 !important;
  `}
  
  /* AI动画期间隐藏原始文字 */
  ${props => props.$aiProcessing && props.$hasAnimatedText && `
    color: transparent !important;
  `}
`;

// 新增字符容器和虚拟光标
const InputTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 18px 20px 18px 20px;
  pointer-events: none;
  font-family: inherit;
  font-size: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #374151;
  z-index: 3;

  span {
    display: inline-block;
    animation: ${characterAppear} 0.3s forwards;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 18px;
  background-color: #374151;
  margin-left: 1px;
  animation: ${cursorBlink} 0.8s infinite;
  position: relative;
  top: 1px;
`;

// 移除了不再使用的 SearchButton 和 AISearchButton 组件

const AIProcessingOverlay = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  pointer-events: none;
  border-radius: 10px;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 10px;
    background: linear-gradient(90deg, #22c55e, #16a34a, #15803d, #166534, #22c55e) border-box;
    background-size: 200% 100%;
    animation: borderMove 2s linear infinite;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  
  @keyframes borderMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
`;

const TypewriterText = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #4a5568;
  pointer-events: none;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
  
  /* 添加打字机光标效果 */
  &::after {
    content: '|';
    display: ${props => props.$visible ? 'inline-block' : 'none'};
    animation: ${cursorBlink} 0.8s infinite;
    color: #374151;
    margin-left: 2px;
  }
`;

// 高级筛选按钮
const FilterToggle = styled.button`
  display: flex;
  align-items: center;
  padding: 18px 16px;
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
  background: rgba(248, 250, 252, 0.8);
  border: 2px solid #e2e8f0;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  height: auto;
  min-height: 54px;
  
  @media (max-width: 768px) {
    padding: 14px 14px;
    min-height: 48px;
    border-width: 1.5px;
    border-radius: 6px;
    font-size: 13px;
  }
  

  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: #cbd5e0;
    color: #4a5568;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
    
    .filter-icon {
      opacity: 0.4;
    }
    
    .filter-text {
      opacity: 0.6;
    }
  }
  
  .filter-icon {
    margin-right: 8px;
    display: inline-flex;
    transition: transform 0.3s ease-in-out;
    opacity: 0.7;
  }
  
  .filter-text {
    transition: all 0.3s ease;
  }
  
  /* 激活状态样式 */
  ${props => props.$active && `
    background: rgba(55, 65, 81, 0.08);
    border-color: rgba(55, 65, 81, 0.25);
    color: #374151;
    
    .filter-icon {
      opacity: 1;
      transform: rotate(180deg);
      color: #374151;
    }
    
    .filter-text {
      color: #374151;
      font-weight: 500;
    }
  `}
`;

const FiltersContainer = styled.div`
  overflow: hidden;
  max-height: ${props => props.$show ? '1000px' : '0'};
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: 
    max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0s ${props => props.$show ? '0s' : '0.6s'};
  
  padding: ${props => props.$show ? '28px 32px 32px 32px' : '0 32px'};
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-top: ${props => props.$show ? '2px solid rgba(226, 232, 240, 0.6)' : '0 solid transparent'};
  position: relative;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  
  @media (max-width: 768px) {
    padding: ${props => props.$show ? '24px 20px 28px 20px' : '0 20px'};
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.$show ? '20px 16px 24px 16px' : '0 16px'};
  }
  
  /* 添加收起动画时的渐变效果 */
  ${props => !props.$show && `
    pointer-events: none;
  `}
  
  /* 当打开时，添加入场动画 */
  ${props => props.$show && `
    animation: filterSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    @keyframes filterSlideIn {
      0% {
        opacity: 0;
        transform: translateY(-20px);
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      }
      60% {
        opacity: 0.8;
        transform: translateY(-5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
      }
    }
  `}
  
  /* 添加顶部装饰线 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    right: 32px;
    height: 3px;
    background: linear-gradient(90deg, #374151 0%, #6b7280 50%, #374151 100%);
    border-radius: 0 0 2px 2px;
    opacity: ${props => props.$show ? 1 : 0};
    transform: scaleX(${props => props.$show ? 1 : 0});
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    @media (max-width: 768px) {
      left: 20px;
      right: 20px;
    }
    
    @media (max-width: 480px) {
      left: 16px;
      right: 16px;
    }
  }
`;

// 改进筛选器网格布局
const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin-bottom: 10px;
  
  @media (min-width: 992px) {
    grid-template-areas:
      "year citations field field"
      "venue venue access sort";
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-areas:
      "year citations field"
      "venue venue access"
      "sort sort sort";
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// 分类筛选组
const FilterCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 122, 204, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 2px 4px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
    border-color: rgba(0, 122, 204, 0.12);
  }
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 15px;
    font-weight: 600;
    color: #2d3748;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 122, 204, 0.1);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, #007acc 0%, #6c5ce7 100%);
      border-radius: 1px;
    }
  }
  
  @media (max-width: 767px) {
    padding: 16px;
    margin-bottom: 16px;
    
    h4 {
      font-size: 14px;
    }
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  &.year-filter {
    grid-area: year;
  }
  
  &.citations-filter {
    grid-area: citations;
  }
  
  &.field-filter {
    grid-area: field;
  }
  
  &.venue-filter {
    grid-area: venue;
  }
  
  &.access-filter {
    grid-area: access;
  }
  
  &.sort-filter {
    grid-area: sort;
  }
`;

const FilterLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #444;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
  
  svg {
    color: #777;
  }
`;

// 过滤器动画容器
const FilterAnimationContainer = styled.div`
  position: relative;
  width: 100%;
`;

// 过滤器字段动画覆盖层
const FilterTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 6px 10px;
  pointer-events: none;
  font-family: inherit;
  font-size: 13px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 11;
  
  span {
    display: inline-block;
    animation: ${characterAppear} 0.3s forwards;
  }
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 5px 8px;
  border: 1px solid #e1e5e9;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  height: 30px;
  box-sizing: border-box;

  &:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
    font-size: 12px;
  }
  
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  /* 添加高亮动画效果 */
  ${props => props.$animating && `
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.15);
    background-color: rgba(108, 92, 231, 0.03);
    color: transparent; /* 动画期间隐藏原有文本 */
    
    animation: filterGradientBorder 1.5s ease;
    
    @keyframes filterGradientBorder {
      0% {
        border-color: #6c5ce7;
        box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
      }
      50% {
        border-color: #00a8ff;
        box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.2);
      }
      100% {
        border-color: #e1e5e9;
        box-shadow: none;
      }
    }
  `}
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 5px 8px;
  border: 1px solid #e1e5e9;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  background: white;
  height: 30px;
  box-sizing: border-box;
  appearance: none; /* 移除默认样式 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;

  &:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }
  
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  /* 添加高亮动画效果 */
  ${props => props.$animating && `
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.15);
    background-color: rgba(108, 92, 231, 0.03);
    color: transparent; /* 动画期间隐藏原有文本 */
    
    animation: filterGradientBorder 1.5s ease;
  `}
`;

// 优化按钮区域
const FilterActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding: 8px;
  }
  
  .action-buttons {
    display: flex;
    gap: 8px;
    
    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }
  }
  
  .filter-status {
    color: #666;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 3px;
    
    .filter-count {
      background: #e6f7ff;
      color: #1890ff;
      border-radius: 10px;
      padding: 1px 5px;
      font-size: 11px;
      font-weight: 500;
    }
  }
`;

const ClearButton = styled.button`
  background: transparent;
  color: #666;
  border: 1px solid #e1e5e9;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 100px;
  justify-content: center;
  height: 28px;

  &:hover {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }
  
  &:disabled {
    background: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
    border-color: #e1e5e9;
  }
  
  @media (max-width: 767px) {
    flex: 1;
  }
`;

const ApplyButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 100px;
  justify-content: center;
  height: 28px;

  &:hover {
    background: #218838;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 767px) {
    flex: 1;
  }
`;

const HighlightFilter = styled.div`
  position: absolute;
  background: rgba(108, 92, 231, 0.08);
  border: 1px solid rgba(108, 92, 231, 0.4);
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.visible {
    opacity: 1;
    animation: highlight-pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes highlight-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.4);
    }
    70% {
      box-shadow: 0 0 0 4px rgba(108, 92, 231, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(108, 92, 231, 0);
    }
  }
`;

// 添加成功动画覆盖层
const SuccessOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(108, 92, 231, 0.2) 0%, rgba(108, 92, 231, 0) 70%);
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  
  ${props => props.$visible && `
    opacity: 1;
    animation: fullscreenPulse 1s ease-out forwards;
    
    @keyframes fullscreenPulse {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `}
`;



// 独立的数据源选择器样式 - 放在搜索框下方，紧凑设计
const MainDataSourceSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  justify-content: center; /* 改为居中对齐 */
  opacity: 0.75; /* 适度弱化显示，保持可读性 */
  transition: opacity 0.3s ease; /* 添加过渡动画 */
  
  &:hover {
    opacity: 1; /* 鼠标悬停时恢复正常 */
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 100%;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    display: none; /* 手机端隐藏底部数据源选择 */
  }
`;

const MainDataSourceLabel = styled.span`
  font-size: 12px;
  font-weight: 450; /* 稍微增加字重 */
  color: #6b7280; /* 使用适中的颜色，保持可读性 */
  white-space: nowrap;
  margin-left: 0; /* 容器已经平移，不需要额外边距 */
  transition: all 0.3s ease; /* 添加过渡动画 */
  
  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 500;
    color: #4b5563;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    display: none; /* 移动端隐藏"数据源："标签 */
  }
`;

const MainDataSourceTabs = styled.div`
  display: flex;
  gap: 6px;
  
  @media (max-width: 768px) {
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 2px;
    justify-content: center;
    width: 100%;
    flex-wrap: nowrap; /* 强制单行显示 */
  }
`;

const MainDataSourceTab = styled.button`
  padding: 6px 12px;
  border: 1px solid ${props => {
    if (props.disabled) return '#e5e7eb';
    return props.$active ? '#007acc' : '#d1d5db';
  }};
  border-radius: 4px;
  background: ${props => {
    if (props.disabled) return '#f9fafb';
    return props.$active ? '#007acc' : 'white';
  }};
  color: ${props => {
    if (props.disabled) return '#9ca3af';
    return props.$active ? 'white' : '#6b7280';
  }};
  font-size: 11px;
  font-weight: ${props => props.$active ? '500' : '450'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  position: relative;
  overflow: visible; /* 改为visible以显示tooltip */
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${props => props.$active ? '#005fa3' : '#f8f9fa'};
    border-color: ${props => props.$active ? '#005fa3' : '#adb5bd'};
    color: ${props => props.$active ? 'white' : '#495057'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${props => props.$active && !props.disabled && `
    box-shadow: 0 1px 3px rgba(0, 122, 204, 0.2);
  `}
  
  .desktop-name {
    display: inline;
  }
  
  .mobile-name {
    display: none;
  }
  
  .mobile-icon {
    display: none;
  }
  
  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 3px;
    border-width: 1.5px;
    min-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .desktop-name {
      display: none;
    }
    
    .mobile-name {
      display: inline;
    }
    
    .mobile-icon {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 16px; /* 图标字体大小 */
    border-radius: 3px;
    border-width: 1px;
    min-height: 28px;
    flex: 1;
    min-width: 40px;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    
    .desktop-name {
      display: none;
    }
    
    .mobile-name {
      display: none;
    }
    
    .mobile-icon {
      display: inline;
      font-size: 16px;
    }
  }
`;

// 右侧控制区域 - 与Enter按键精确对齐
const RightControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* 减少间距，让文字更靠近按键 */
  flex-shrink: 0;
  width: 100px; /* 与EnterKeyButton宽度保持一致，不包含Shift按键 */
  position: relative;
  
  @media (max-width: 768px) {
    align-items: center;
    width: 50px; /* 移动端与Enter按键宽度一致 */
    gap: 2px; /* 移动端进一步减少间距 */
  }
`;

// 按键说明文字样式
const KeyInstructionText = styled.div`
  font-size: 14px; /* 增大字体 */
  color: #6b7280;
  text-align: center;
  margin-top: -2px; /* 上移，让文字更靠近Enter按键 */
  line-height: 1.3;
  white-space: nowrap;
  width: 100%; /* 充满容器宽度 */
  display: flex;
  justify-content: center; /* 确保水平居中 */
  align-items: center;
  opacity: ${props => props.$visible ? 1 : 0}; /* 根据props控制显示 */
  visibility: ${props => props.$visible ? 'visible' : 'hidden'}; /* 根据props控制显示 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 添加过渡动画 */
  
  @media (max-width: 768px) {
    font-size: 12px; /* 移动端也增大 */
    white-space: normal;
    text-align: center;
    margin-top: -1px; /* 移动端稍微上移 */
  }
  
  @media (max-width: 480px) {
    font-size: 11px; /* 小屏幕适当调整 */
    margin-top: 0px; /* 小屏幕保持原位 */
  }
`;

// 数据源Tooltip组件
const DataSourceTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #2d3748;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
  white-space: normal;
  min-width: 280px; /* 设置最小宽度 */
  max-width: 400px; /* 增加最大宽度 */
  width: max-content; /* 自适应内容宽度 */
  text-align: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* 小箭头 */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #2d3748;
  }
  
  /* 显示状态 */
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 14px;
    min-width: 220px;
    max-width: 300px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 8px 12px;
    min-width: 200px;
    max-width: 280px;
    margin-bottom: 6px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: auto;
    white-space: normal;
    word-wrap: break-word;
    
    /* 在移动端适当调整箭头位置 */
    &::after {
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
    }
  }
`;

// 底部控制区域 - 包含AI开关、研究报告开关、数据源选择器和按键说明
const BottomControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
  }
  
  @media (max-width: 480px) {
    display: none; /* 移动端隐藏底部控制区域 */
  }
`;

const SearchForm = ({ onSearch, onExecuteSearch, loading, initialQuery = '', dataSource = 'primaryScraping', onDataSourceChange, onFocusChange, onFiltersChange, variant = 'default', showTitle = false, onReportSwitchChange, onQueryChange, onResearchDomainChange, isHomePage = false, hasResults = false, continueAISearchParams = null, onContinueAISearchComplete = null }) => {
  const [query, setQuery] = useState(initialQuery);
  const [showFilters, setShowFilters] = useState(false);
  const [currentConfig, setCurrentConfig] = useState(FILTER_CONFIGS[dataSource]);
  // 移除了不再使用的 isInputFocused 状态
  const [filters, setFilters] = useState(() => {
    const defaultFilters = {};
    FILTER_CONFIGS[dataSource].fields.forEach(field => {
      if (field.type === 'select' && field.options.length > 0) {
        defaultFilters[field.key] = field.options[0].value;
      } else {
        defaultFilters[field.key] = '';
      }
    });
    return defaultFilters;
  });
  const [aiProcessing, setAiProcessing] = useState(false);
  const [aiCompleted, setAiCompleted] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [highlightedField, setHighlightedField] = useState(null);
  
  // 新增动画相关状态
  const [animatedText, setAnimatedText] = useState([]);
  const [showCursor, setShowCursor] = useState(false);
  const [randomChars, setRandomChars] = useState('');
  
  // 新增字段动画状态
  const [animatingFields, setAnimatingFields] = useState({});
  const [fieldAnimatedText, setFieldAnimatedText] = useState({});
  
  // 新增整体动画状态
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  
  // 搜索模式状态：true为AI模式，false为传统模式
  // 移除了 isAIMode 状态，现在直接通过按键决定搜索模式
  
  // 按键状态监听
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const [isEnterHovered, setIsEnterHovered] = useState(false);
  
  // 输入框聚焦状态监听
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  // 输入法组合状态监听
  const [isComposing, setIsComposing] = useState(false);
  
  // 数据源tooltip显示状态
  const [hoveredDataSource, setHoveredDataSource] = useState(null);
  
  // 敏感词检测状态
  const [showSensitiveAlert, setShowSensitiveAlert] = useState(false);
  const sensitiveAlertTimeoutRef = useRef(null);
  
  // 浏览器存储工具函数
  const getStoredSwitchState = (key, defaultValue = true) => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.warn(`Failed to read ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  const setStoredSwitchState = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Failed to save ${key} to localStorage:`, error);
    }
  };

  // AI开关状态 - 从localStorage读取，默认为true
  const [isAISwitchEnabled, setIsAISwitchEnabled] = useState(() => 
    getStoredSwitchState('aiSwitchEnabled', true)
  );
  
  // 研究报告开关状态 - 从localStorage读取，默认为true
  const [isReportSwitchEnabled, setIsReportSwitchEnabled] = useState(() => 
    getStoredSwitchState('reportSwitchEnabled', true)
  );
  
  // 初始化时通知父组件研究报告开关状态
  useEffect(() => {
    if (onReportSwitchChange) {
      onReportSwitchChange(isReportSwitchEnabled);
    }
  }, [onReportSwitchChange, isReportSwitchEnabled]);
  
  // AI开关切换处理函数
  const handleAISwitchToggle = () => {
    const newValue = !isAISwitchEnabled;
    setIsAISwitchEnabled(newValue);
    setStoredSwitchState('aiSwitchEnabled', newValue);
  };
  
  // 研究报告开关切换处理函数
  const handleReportSwitchToggle = () => {
    const newValue = !isReportSwitchEnabled;
    setIsReportSwitchEnabled(newValue);
    setStoredSwitchState('reportSwitchEnabled', newValue);
    // 通知父组件研究报告开关状态变化
    if (onReportSwitchChange) {
      onReportSwitchChange(newValue);
    }
  };
  
  // 获取数据源描述
  const getDataSourceDescription = (source) => {
    const descriptions = {
      semantic: '数据来源于各大期刊数据库，能显示完整的摘要信息，高峰期可能请求失败，请勿滥用',
      googleScholar: '数据来源于Google学术，可显示缩略的摘要信息，响应较快',
      primaryScraping: '数据来源于学术搜索引擎，提供丰富的文献信息和引用数据，响应稳定',
      pubmed: '正在对接中...'
    };
    return descriptions[source] || '';
  };

  // 获取移动端简化数据源名称
  const getMobileDataSourceName = (source) => {
    const mobileNames = {
      semantic: '3rd API',
      googleScholar: 'Google',
      primaryScraping: 'Primary',
      pubmed: 'PubMed'
    };
    return mobileNames[source] || FILTER_CONFIGS[source]?.name || source;
  };

  // 获取数据源图标
  const getDataSourceIcon = (source) => {
    const icons = {
      semantic: '③', // 3rd API - 数字3
      googleScholar: 'Ⓖ', // Google - 字母G  
      primaryScraping: 'Ⓟ', // Primary - 字母P
      pubmed: 'Ⓜ' // Medical - 字母M
    };
    return icons[source] || '⊕';
  };
  
  // 生成不同学科领域的搜索范例轮换
  const getPlaceholderText = () => {
    const searchExamples = [
      "💡 医学领域：糖尿病治疗的最新临床试验研究",
      "🔬 生物学：CRISPR基因编辑技术的安全性评估", 
      "🤖 计算机科学：深度学习在自然语言处理中的应用",
      "🧬 生物医学：阿尔茨海默病的早期诊断生物标志物",
      "🌍 环境科学：气候变化对生物多样性的影响研究",
      "📊 数据科学：大数据在精准医疗中的应用案例",
      "🧪 化学：新型催化剂在绿色化学中的研究进展",
      "🏥 公共卫生：COVID-19疫苗有效性的真实世界研究",
      "🔋 材料科学：钙钛矿太阳能电池的稳定性改进",
      "🧠 神经科学：脑机接口技术在瘫痪患者中的应用",
      "📱 工程技术：5G通信技术的安全隐私问题研究",
      "🎓 教育学：在线学习对学生学习效果的影响分析"
    ];
    
    const focusedHints = [
      "⚡ 使用Shift+Enter开启AI智能搜索优化",
      "🔍 支持中英文混合搜索，理解复杂学术查询需求",
      "💭 试试用自然语言描述你的研究问题",
      "🎯 可以直接输入：某领域近几年的研究趋势"
    ];
    
    if (isInputFocused) {
      return focusedHints[Math.floor(Math.random() * focusedHints.length)];
    }
    
    return searchExamples[Math.floor(Math.random() * searchExamples.length)];
  };
  
  // 提示文本显示控制
  const [showHint, setShowHint] = useState(true);
  const hintTimerRef = useRef(null);
  
  const searchInputRef = useRef(null);
  const filterRefs = useRef({});
  const highlightRef = useRef(null);
  const inputOverlayRef = useRef(null);
  
  // 初始化筛选器默认值
  const initializeFilters = (config) => {
    const defaultFilters = {};
    config.fields.forEach(field => {
      if (field.type === 'select' && field.options.length > 0) {
        defaultFilters[field.key] = field.options[0].value;
      } else {
        defaultFilters[field.key] = '';
      }
    });
    return defaultFilters;
  };
  
  // 当数据源切换时，重置筛选条件
  useEffect(() => {
    const newConfig = FILTER_CONFIGS[dataSource];
    setCurrentConfig(newConfig);
    
    // 重置为新数据源的默认筛选条件
    const defaultFilters = initializeFilters(newConfig);
    setFilters(defaultFilters);
    
    // 重新初始化 filterRefs - 不能在回调中使用 useRef，而是直接创建对象
    const newFilterRefs = {};
    newConfig.fields.forEach(field => {
      newFilterRefs[field.key] = { current: null };
    });
    filterRefs.current = newFilterRefs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);

  // 监听筛选器展开状态变化，通知父组件
  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange(showFilters);
    }
  }, [showFilters, onFiltersChange]);

  // 同步initialQuery的变化到本地query状态
  useEffect(() => {
    if (initialQuery !== query) {
      setQuery(initialQuery);
    }
  }, [initialQuery]); // 只监听initialQuery变化，避免循环
  
  // 数据源切换处理
  const handleDataSourceChange = (newSource) => {
    // 切换数据源时直接清空页面内容
    onDataSourceChange(newSource);
  };

  // 敏感词检测函数
  const checkSensitiveWords = (searchQuery) => {
    if (hasSensitiveWords(searchQuery)) {
      // 清空输入框
      setQuery('');
      
      // 显示敏感词提示
      setShowSensitiveAlert(true);
      
      // 清除之前的定时器
      if (sensitiveAlertTimeoutRef.current) {
        clearTimeout(sensitiveAlertTimeoutRef.current);
      }
      
      // 5秒后自动隐藏提示
      sensitiveAlertTimeoutRef.current = setTimeout(() => {
        setShowSensitiveAlert(false);
      }, 5000);
      
      return true; // 检测到敏感词
    }
    return false; // 没有敏感词
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // 先检测敏感词
      if (checkSensitiveWords(query.trim())) {
        return; // 如果有敏感词，阻止搜索
      }
      
      // 简单的关键词检测 - 用于非AI搜索时的领域识别
      detectDomainByKeywords(query.trim());
      
      // 只有在首页时才启用自动生成研究报告
      const shouldAutoGenerateReport = isHomePage && isReportSwitchEnabled;
      onSearch(query.trim(), filters, 1, shouldAutoGenerateReport);
      // 搜索后自动收起高级筛选器
      if (showFilters) {
        setShowFilters(false); // 直接使用状态更新，不使用DOM操作
      }
    }
  };

  // 处理聚焦事件
  const handleInputFocus = () => {
    setIsInputFocused(true);
    if (onFocusChange) {
      onFocusChange(true);
    }
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    if (onFocusChange) {
      onFocusChange(false);
    }
  };

  // 处理输入法组合事件
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  // 处理键盘事件
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // 如果正在使用输入法组合输入，不执行搜索
      if (isComposing) {
        return; // 让输入法处理Enter键，用于上屏
      }
      
      e.preventDefault();
      
      if (e.shiftKey) {
        // Shift + Enter 强制使用 AI 搜索
        handleUnifiedSearch(true);
      } else {
        // 普通 Enter 根据AI开关状态决定搜索模式
        handleUnifiedSearch(null);
      }
    }
  };
  
  // 统一的搜索处理函数
  const handleUnifiedSearch = async (useAI = null) => {
    if (!query.trim() || loading || aiProcessing) {
      return;
    }
    
    // 先检测敏感词
    if (checkSensitiveWords(query.trim())) {
      return; // 如果有敏感词，阻止搜索
    }
    
    // 确定搜索类型
    const shouldUseAI = useAI !== null ? useAI : isAISwitchEnabled;
    
    // 如果页面有数据，需要先确认是否清空数据，然后再执行相应的搜索
    if (hasResults) {
      // 调用onSearch来触发App.js的确认逻辑，但传递额外信息表明这是AI搜索还是普通搜索
      const shouldAutoGenerateReport = isHomePage && isReportSwitchEnabled;
      
      // 我们需要一种方式来告诉App.js这是AI搜索还是普通搜索
      // 可以通过在filters中添加一个特殊标记
      const searchFilters = shouldUseAI ? { ...filters, _isAISearch: true } : filters;
      
      onSearch(query.trim(), searchFilters, 1, shouldAutoGenerateReport);
      // 搜索后自动收起高级筛选器
      if (showFilters) {
        setShowFilters(false);
      }
      return;
    }
    
    // 如果页面没有数据，直接执行相应的搜索
    if (shouldUseAI) {
      // 使用AI搜索
      await handleAISmartSearch();
    } else {
      // 使用传统搜索
      // 只有在首页时才启用自动生成研究报告
      const shouldAutoGenerateReport = isHomePage && isReportSwitchEnabled;
      onSearch(query.trim(), filters, 1, shouldAutoGenerateReport);
      // 搜索后自动收起高级筛选器
      if (showFilters) {
        setShowFilters(false);
      }
    }
  };
  
  // 移除了不再使用的 toggleSearchMode 函数
  
  // 全局键盘事件监听 - 仅在输入框聚焦时响应
  useEffect(() => {
    const handleKeyDown = (e) => {
      // 只有在输入框聚焦时才响应Shift键
      if (e.key === 'Shift' && isInputFocused) {
        setIsShiftPressed(true);
      }
      if (e.key === 'Enter') {
        setIsEnterPressed(true);
      }
    };
    
    const handleKeyUp = (e) => {
      // 只有在输入框聚焦时才响应Shift键
      if (e.key === 'Shift' && isInputFocused) {
        setIsShiftPressed(false);
      }
      if (e.key === 'Enter') {
        setIsEnterPressed(false);
      }
    };
    
    // 添加全局键盘事件监听
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    // 清理函数
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isInputFocused]);
  
  // 监听输入内容变化，控制提示文本显示
  useEffect(() => {
    if (query.length > 0) {
      // 有内容时，3秒后隐藏提示
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }
      hintTimerRef.current = setTimeout(() => {
        setShowHint(false);
      }, 3000);
    } else {
      // 无内容时，立即显示提示
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }
      setShowHint(true);
    }
    
    // 清理函数
    return () => {
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }
    };
  }, [query]);
  
  // 处理按键点击（模拟键盘按下）
  const handleKeyClick = (keyType) => {
    if (keyType === 'enter') {
      if (!query.trim()) return; // 没有查询内容时不执行搜索
      // 点击Enter按键，根据AI开关状态决定搜索模式
      handleUnifiedSearch(null);
      // 模拟按下效果
      setIsEnterPressed(true);
      setTimeout(() => setIsEnterPressed(false), 200);
    } else if (keyType === 'shift') {
      if (!query.trim()) return; // 没有查询内容时不执行搜索
      // 点击Shift按键，执行AI搜索
      handleUnifiedSearch(true);
      // 模拟按下效果
      setIsShiftPressed(true);
      setTimeout(() => setIsShiftPressed(false), 200);
    }
  };
  
  // 关闭敏感词提示
  const handleCloseSensitiveAlert = () => {
    setShowSensitiveAlert(false);
    if (sensitiveAlertTimeoutRef.current) {
      clearTimeout(sensitiveAlertTimeoutRef.current);
    }
  };
  
  // 清理定时器
  useEffect(() => {
    return () => {
      if (sensitiveAlertTimeoutRef.current) {
        clearTimeout(sensitiveAlertTimeoutRef.current);
      }
    };
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
    
    // 跟踪过滤器使用事件
    if (value && value !== '') {
      const totalFilters = Object.values(filters).filter(v => v && v !== 'relevance').length + 1;
      trackFilterUsage(key, value, totalFilters);
    }
  };

  const clearFilters = () => {
    const defaultFilters = initializeFilters(currentConfig);
    setFilters(defaultFilters);
  };

  const applyFilters = () => {
    if (query.trim()) {
      // 只有在首页时才启用自动生成研究报告
      const shouldAutoGenerateReport = isHomePage && isReportSwitchEnabled;
      onSearch(query.trim(), filters, 1, shouldAutoGenerateReport);
      // 应用筛选后自动收起高级筛选器
      setShowFilters(false); // 直接使用状态更新，不使用DOM操作
    }
  };
  
  // 随机字符生成函数
  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  // 随机字符效果
  useEffect(() => {
    if (aiProcessing && !randomChars) {
      // 生成随机字符串
      let chars = '';
      for (let i = 0; i < 50; i++) {
        chars += getRandomChar();
      }
      setRandomChars(chars);
      
      // 200ms后清除随机字符
      const timer = setTimeout(() => {
        setRandomChars('');
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [aiProcessing, randomChars]);
  
  // 高级打字机效果
  const typeText = async (text, delay = 30, preDelay = 300) => {
    // 先等待预定义延迟时间
    await new Promise(resolve => setTimeout(resolve, preDelay));
    
    // 显示光标
    setShowCursor(true);
    
    // 清空当前动画文本
    setAnimatedText([]);
    
    // 逐个字符添加，带有随机延迟
    const chars = text.split('');
    for (let i = 0; i < chars.length; i++) {
      // 随机字符变换效果
      if (i > 0 && Math.random() > 0.7) {
        // 40%的概率进行字符变换效果
        const randomChar = getRandomChar();
        setAnimatedText(prev => [...prev.slice(0, -1), { char: randomChar, key: `${i}-${Date.now()}` }]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // 添加当前字符
      setAnimatedText(prev => [...prev, { char: chars[i], key: `${i}-${Date.now()}` }]);
      
      // 随机延迟，模拟更自然的打字节奏
      const typeDelay = delay + Math.random() * 50;
      await new Promise(resolve => setTimeout(resolve, typeDelay));
    }
    
    // 稍等片刻后隐藏光标
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowCursor(false);
  };

  // 新的AI文字替换动画函数
  const animateTextReplacement = async (originalText, newText) => {
    // 第一步：快速删除原有文字
    const originalChars = originalText.split('');
    for (let i = originalChars.length; i > 0; i--) {
      setAnimatedText(originalChars.slice(0, i).map((char, index) => ({
        char,
        key: `delete-${index}-${Date.now()}`
      })));
      await new Promise(resolve => setTimeout(resolve, 20)); // 更快的删除速度
    }
    
    // 短暂停顿
    setAnimatedText([]);
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // 第二步：逐个显示新文字
    const newChars = newText.split('');
    for (let i = 0; i < newChars.length; i++) {
      setAnimatedText(prev => [...prev, { 
        char: newChars[i], 
        key: `type-${i}-${Date.now()}` 
      }]);
      await new Promise(resolve => setTimeout(resolve, 40)); // 适中的打字速度
    }
    
    // 完成后短暂显示，然后清空动画文本
    await new Promise(resolve => setTimeout(resolve, 300));
    setAnimatedText([]);
  };
  
  // 打字机效果
  useEffect(() => {
    if (aiProcessing && typewriterText !== 'AI正在分析您的搜索意图...') {
      let text = 'AI正在分析您的搜索意图...';
      let index = 0;
      const interval = setInterval(() => {
        setTypewriterText(text.substring(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [aiProcessing, typewriterText]);
  
  const positionHighlight = (fieldName) => {
    if (!highlightRef.current || !showFilters) return;
    
    const fieldRef = filterRefs.current[fieldName]?.current;
    if (!fieldRef) return;
    
    const rect = fieldRef.getBoundingClientRect();
    const parentRect = fieldRef.closest('.sc-iAEawV')?.getBoundingClientRect() || 
                      fieldRef.parentElement.getBoundingClientRect();
    
    highlightRef.current.style.top = `${rect.top - parentRect.top - 2}px`;
    highlightRef.current.style.left = `${rect.left - parentRect.left - 2}px`;
    highlightRef.current.style.width = `${rect.width + 4}px`;
    highlightRef.current.style.height = `${rect.height + 4}px`;
    highlightRef.current.classList.add('visible');
    
    // 3秒后移除高亮
    setTimeout(() => {
      if (highlightRef.current) {
        highlightRef.current.classList.remove('visible');
      }
    }, 2000);
  };
  
  useEffect(() => {
    if (aiCompleted) {
      const timer = setTimeout(() => setAiCompleted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [aiCompleted]);

  // 为字段添加动画效果
  const animateFieldValue = async (field, value) => {
    if (!value) return;
    
    // 标记字段正在动画中
    setAnimatingFields(prev => ({ ...prev, [field]: true }));
    
    // 清空当前动画文本
    setFieldAnimatedText(prev => ({ ...prev, [field]: [] }));
    
    // 确保视觉上原来的内容已经被清空
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // 添加随机字符闪烁效果
    const randomChars = Array.from({ length: Math.floor(Math.random() * 5) + 3 }, () => getRandomChar()).join('');
    setFieldAnimatedText(prev => ({ ...prev, [field]: randomChars.split('').map((char, i) => ({ 
      char, 
      key: `random-${field}-${i}-${Date.now()}` 
    }))}));
    
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // 逐个字符添加，带有随机延迟
    const chars = value.toString().split('');
    setFieldAnimatedText(prev => ({ ...prev, [field]: [] }));
    
    for (let i = 0; i < chars.length; i++) {
      // 随机字符变换效果
      if (i > 0 && Math.random() > 0.7) {
        const randomChar = getRandomChar();
        setFieldAnimatedText(prev => {
          const fieldChars = [...(prev[field] || [])];
          if (fieldChars.length > 0) {
            fieldChars[fieldChars.length - 1] = { 
              char: randomChar, 
              key: `${field}-${i}-random-${Date.now()}` 
            };
          }
          return { ...prev, [field]: fieldChars };
        });
        await new Promise(resolve => setTimeout(resolve, 20));
      }
      
      // 添加当前字符
      setFieldAnimatedText(prev => ({
        ...prev,
        [field]: [...(prev[field] || []), { 
          char: chars[i], 
          key: `${field}-${i}-${Date.now()}` 
        }]
      }));
      
      // 随机延迟，模拟更自然的打字节奏
      const typeDelay = 20 + Math.random() * 30;
      await new Promise(resolve => setTimeout(resolve, typeDelay));
    }
    
    // 等待一段时间后结束动画
    await new Promise(resolve => setTimeout(resolve, 400));
    setAnimatingFields(prev => ({ ...prev, [field]: false }));
    setFieldAnimatedText(prev => ({ ...prev, [field]: [] }));
  };
  
  // 播放成功动画
  const playSuccessAnimation = async () => {
    // 先显示全屏覆盖层
    setShowSuccessOverlay(true);
    
    // 添加完成状态
    setAiCompleted(true);
    
    // 等待动画完成后重置状态
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccessOverlay(false);
    
    // 延迟重置完成状态
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAiCompleted(false);
  };
  
  // 增强的 AI 智能搜索处理函数
  const handleAISmartSearch = async () => {
    if (!query.trim() || aiProcessing) {
      return;
    }
    
    // AI搜索前也要检测敏感词
    if (checkSensitiveWords(query.trim())) {
      return; // 如果有敏感词，阻止AI搜索
    }
    
    try {
      setAiProcessing(true);
      setTypewriterText('');
      
      // 确保显示过滤器面板以便动画效果
      if (!showFilters) {
        setShowFilters(true); // 直接显示，因为我们需要立即看到它
        // 等待过滤器面板完全显示
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // 默认使用 GPT-4o Mini (2024-07-18) 模型进行处理
      const optimizedSearch = await optimizeSearchQuery(query.trim(), AI_MODELS.GPT_4O_2024);
      
      // 跟踪AI搜索优化事件
      trackAISearch(query.trim(), optimizedSearch.query || query.trim(), AI_MODELS.GPT_4O_2024);
      
      // 更新查询 - 使用新的文字替换动画效果
      if (optimizedSearch.query && optimizedSearch.query !== query) {
        const originalQuery = query;
        const targetQuery = optimizedSearch.query;
        
        // 使用新的文字替换动画
        await animateTextReplacement(originalQuery, targetQuery);
        setQuery(targetQuery);
      }
      
      // 逐个字段更新并添加高亮效果
      const updatedFilters = { ...filters };
      
      // 根据数据源动态生成字段映射
      let fieldsToUpdate = [];
      
      if (dataSource === 'googleScholar') {
        // Google Scholar 字段映射
        fieldsToUpdate = [
          // 年份范围处理
          ...(optimizedSearch.year ? (() => {
            const yearStr = optimizedSearch.year.toString();
            if (yearStr.includes('-')) {
              const [startYear, endYear] = yearStr.split('-');
              return [
                { key: 'as_ylo', value: startYear.trim() },
                { key: 'as_yhi', value: endYear.trim() }
              ];
            } else {
              return [
                { key: 'as_ylo', value: yearStr },
                { key: 'as_yhi', value: '' }
              ];
            }
          })() : []),
          
          // 语言设置 - 根据AI建议或默认英语
          { key: 'language', value: optimizedSearch.language || 'en' },
          
          // 搜索类型 - 根据AI建议设置
          { key: 'as_sdt', value: optimizedSearch.searchType === 'review' ? '0' : '0' },
          
          // 安全搜索 - 默认关闭
          { key: 'safe', value: 'off' },
          
          // 结果过滤 - 默认启用
          { key: 'filter', value: '1' },
          
          // 引用显示 - 默认包含
          { key: 'as_vis', value: '0' },
          
          // 文章类型 - 根据AI建议或查询内容判断是否为综述
          { key: 'as_rr', value: (() => {
            // 检查是否是综述类查询
            const isReviewQuery = optimizedSearch.searchType === 'review' || 
                                  optimizedSearch.venue?.toLowerCase().includes('review') ||
                                  optimizedSearch.query?.toLowerCase().includes('review') ||
                                  optimizedSearch.query?.toLowerCase().includes('survey');
            return isReviewQuery ? '1' : '0';
          })() }
        ];
      } else if (dataSource === 'primaryScraping') {
        // Primary Scraping 字段映射
        fieldsToUpdate = [
          // 年份范围处理
          ...(optimizedSearch.year ? (() => {
            const yearStr = optimizedSearch.year.toString();
            if (yearStr.includes('-')) {
              const [startYear, endYear] = yearStr.split('-');
              return [
                { key: 'start_year', value: startYear.trim() },
                { key: 'end_year', value: endYear.trim() }
              ];
            } else {
              return [
                { key: 'start_year', value: yearStr },
                { key: 'end_year', value: '' }
              ];
            }
          })() : []),
          
          // 语言设置 - 根据AI建议或默认英语
          { key: 'language', value: optimizedSearch.language || 'en' },
          
          // 排序方式 - 根据AI建议设置
          { key: 'sort_by', value: optimizedSearch.sort === 'citationCount' ? 'cited_by' : 
                                  optimizedSearch.sort === 'publicationDate' ? 'date' : 'relevance' }
        ];
      } else {
        // Semantic Scholar (原有字段)
        fieldsToUpdate = [
          { key: 'year', value: optimizedSearch.year },
          { key: 'minCitationCount', value: optimizedSearch.minCitationCount },
          { key: 'fieldsOfStudy', value: optimizedSearch.fieldsOfStudy },
          { key: 'venue', value: optimizedSearch.venue },
          { key: 'openAccessPdf', value: optimizedSearch.openAccessPdf },
          { key: 'sort', value: optimizedSearch.sort }
        ];
      }
      
      // 逐个更新字段，添加动画效果
      for (const field of fieldsToUpdate) {
        // 检查字段是否存在于当前配置中
        const fieldExists = currentConfig.fields.some(configField => configField.key === field.key);
        
        if (fieldExists && field.value !== undefined && field.value !== null && field.value !== '' && field.value !== filters[field.key]) {
          setHighlightedField(field.key);
          positionHighlight(field.key);
          
          // 添加动画效果前先设置新值
          updatedFilters[field.key] = field.value;
          
          // 添加动画效果
          await animateFieldValue(field.key, field.value);
          
          // 将真实值设置到状态中
          setFilters(updatedFilters);
          await new Promise(resolve => setTimeout(resolve, 150));
        }
      }
      
      // 设置完成标志
      setAiCompleted(true);
      setHighlightedField(null);
      
      // 检测研究领域标记并触发相关服务
      if (optimizedSearch.researchDomain) {
        console.log('检测到研究领域标记:', optimizedSearch.researchDomain);
        
        // 处理单个或多个研究领域
        const researchDomains = Array.isArray(optimizedSearch.researchDomain) 
          ? optimizedSearch.researchDomain 
          : [optimizedSearch.researchDomain];
        
        // 为每个研究领域触发相关服务
        researchDomains.forEach(domain => {
          handleResearchDomainDetection(domain, optimizedSearch);
        });
      }
      
      // 执行搜索
      // 只有在首页时才启用自动生成研究报告
      const shouldAutoGenerateReport = isHomePage && isReportSwitchEnabled;
      onSearch(optimizedSearch.query || query.trim(), updatedFilters, 1, shouldAutoGenerateReport);
      
      // 播放成功动画
      await playSuccessAnimation();
      
      // AI 搜索完成后自动收起高级筛选器，但等待一段时间以便用户看到填充效果
      setTimeout(() => {
        setShowFilters(false); // 直接使用状态更新，不使用DOM操作
      }, 1500);
      
    } catch (error) {
      console.error('AI 智能搜索失败:', error);
      alert(`AI 智能搜索失败: ${error.message}`);
    } finally {
      setAiProcessing(false);
      setTypewriterText('');
      setAnimatedText([]);
      setShowCursor(false);
      setAnimatingFields({});
      setFieldAnimatedText({});
    }
  };

  // 专门用于继续执行AI搜索的函数（不调用onSearch，直接处理AI逻辑）
  const handleContinueAISearch = async (aiQuery, aiFilters, page, shouldGenerateReport) => {
    if (!aiQuery.trim() || aiProcessing) {
      return;
    }
    
    try {
      setAiProcessing(true);
      setTypewriterText('');
      
      // 确保显示过滤器面板以便动画效果
      if (!showFilters) {
        setShowFilters(true);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // 使用AI优化搜索查询
      const optimizedSearch = await optimizeSearchQuery(aiQuery.trim(), AI_MODELS.GPT_4O_2024);
      
      // 跟踪AI搜索优化事件
      trackAISearch(aiQuery.trim(), optimizedSearch.query || aiQuery.trim(), AI_MODELS.GPT_4O_2024);
      
      // 更新查询
      if (optimizedSearch.query && optimizedSearch.query !== aiQuery) {
        const originalQuery = aiQuery;
        const targetQuery = optimizedSearch.query;
        await animateTextReplacement(originalQuery, targetQuery);
        setQuery(targetQuery);
      }
      
      // 更新筛选器（简化版，不包含动画）
      const updatedFilters = { ...aiFilters };
      
      // 根据数据源动态生成字段映射（简化版）
      if (optimizedSearch.year) {
        if (dataSource === 'googleScholar') {
          const yearStr = optimizedSearch.year.toString();
          if (yearStr.includes('-')) {
            const [startYear, endYear] = yearStr.split('-');
            updatedFilters.as_ylo = startYear.trim();
            updatedFilters.as_yhi = endYear.trim();
          } else {
            updatedFilters.as_ylo = yearStr;
            updatedFilters.as_yhi = '';
          }
        } else if (dataSource === 'primaryScraping') {
          const yearStr = optimizedSearch.year.toString();
          if (yearStr.includes('-')) {
            const [startYear, endYear] = yearStr.split('-');
            updatedFilters.start_year = startYear.trim();
            updatedFilters.end_year = endYear.trim();
          } else {
            updatedFilters.start_year = yearStr;
            updatedFilters.end_year = '';
          }
        } else {
          updatedFilters.year = optimizedSearch.year;
        }
      }
      
      setFilters(updatedFilters);
      setAiCompleted(true);
      
      // 处理研究领域检测
      if (optimizedSearch.researchDomain) {
        const researchDomains = Array.isArray(optimizedSearch.researchDomain) 
          ? optimizedSearch.researchDomain 
          : [optimizedSearch.researchDomain];
        
        researchDomains.forEach(domain => {
          handleResearchDomainDetection(domain, optimizedSearch);
        });
      }
      
             // 更新最终的查询内容（通知App.js同步状态）
       const finalQuery = optimizedSearch.query || aiQuery.trim();
       if (onQueryChange) {
         onQueryChange(finalQuery);
       }
       
       // 直接调用onExecuteSearch执行最终搜索，避免再次触发确认逻辑
       if (onExecuteSearch) {
         onExecuteSearch(finalQuery, updatedFilters, page, shouldGenerateReport);
       } else {
         // 降级到onSearch（用于兼容性）
         onSearch(finalQuery, updatedFilters, page, shouldGenerateReport);
       }
      
      // 播放成功动画
      await playSuccessAnimation();
      
      // AI 搜索完成后自动收起高级筛选器
      setTimeout(() => {
        setShowFilters(false);
      }, 1500);
      
    } catch (error) {
      console.error('继续AI搜索失败:', error);
      alert(`AI 智能搜索失败: ${error.message}`);
    } finally {
      setAiProcessing(false);
      setTypewriterText('');
      setAnimatedText([]);
      setShowCursor(false);
      setAnimatingFields({});
      setFieldAnimatedText({});
    }
  };

  // 监听continueAISearchParams，当用户确认清空数据后继续执行AI搜索
  useEffect(() => {
    if (continueAISearchParams) {
      const { query: aiQuery, filters: aiFilters, page, shouldGenerateReport } = continueAISearchParams;
      
      // 更新查询和筛选器状态
      setQuery(aiQuery);
      setFilters(aiFilters);
      
      // 执行继续AI搜索
      const executeAISearch = async () => {
        try {
          await handleContinueAISearch(aiQuery, aiFilters, page, shouldGenerateReport);
        } catch (error) {
          console.error('继续执行AI搜索失败:', error);
        } finally {
          // 通知App.js清空continueAISearchParams
          if (onContinueAISearchComplete) {
            onContinueAISearchComplete();
          }
        }
      };
      
      executeAISearch();
    }
  }, [continueAISearchParams, onContinueAISearchComplete]);

  // 研究领域检测处理函数
  const handleResearchDomainDetection = (researchDomain, optimizedSearch) => {
    // 研究领域映射表
    const domainMapping = {
      'computer_science': {
        name: '计算机科学',
        description: 'AI、机器学习、深度学习、自然语言处理等',
        keywords: ['AI', 'machine learning', 'deep learning', 'NLP', 'computer vision', 'software engineering']
      },
      'medicine': {
        name: '医学',
        description: '疾病、药物、治疗、诊断、临床试验等',
        keywords: ['disease', 'drug', 'treatment', 'diagnosis', 'clinical trial', 'vaccine']
      },
      'biology': {
        name: '生物学',
        description: '基因、细胞、蛋白质、进化、生态等',
        keywords: ['gene', 'cell', 'protein', 'evolution', 'ecology', 'CRISPR']
      },
      'chemistry': {
        name: '化学',
        description: '分子、化合物、反应、催化剂等',
        keywords: ['molecule', 'compound', 'reaction', 'catalyst', 'material']
      },
      'physics': {
        name: '物理学',
        description: '量子、粒子、光学、力学等',
        keywords: ['quantum', 'particle', 'optics', 'mechanics', 'electromagnetic']
      },
      'mathematics': {
        name: '数学',
        description: '算法、统计、概率、几何等',
        keywords: ['algorithm', 'statistics', 'probability', 'geometry', 'algebra']
      },
      'engineering': {
        name: '工程学',
        description: '机械、电子、土木、材料等',
        keywords: ['mechanical', 'electronic', 'civil', 'material', 'control']
      },
      'environmental_science': {
        name: '环境科学',
        description: '气候变化、污染、可持续发展等',
        keywords: ['climate change', 'pollution', 'sustainability', 'ecology']
      },
      'psychology': {
        name: '心理学',
        description: '认知、行为、心理治疗等',
        keywords: ['cognitive', 'behavior', 'therapy', 'neuroscience']
      },
      'economics': {
        name: '经济学',
        description: '金融、贸易、发展、政策等',
        keywords: ['finance', 'trade', 'development', 'policy', 'market']
      },
      'education': {
        name: '教育学',
        description: '教学、学习、课程、评估等',
        keywords: ['teaching', 'learning', 'curriculum', 'assessment']
      },
      'social_sciences': {
        name: '社会科学',
        description: '社会学、政治学、人类学等',
        keywords: ['sociology', 'political', 'anthropology', 'communication']
      },
      'other': {
        name: '其他领域',
        description: '跨学科或其他专业领域',
        keywords: []
      }
    };

    const domainInfo = domainMapping[researchDomain];
    
    if (domainInfo) {
      console.log(`检测到研究领域: ${domainInfo.name} (${researchDomain})`);
      console.log(`领域描述: ${domainInfo.description}`);
      console.log(`相关关键词: ${domainInfo.keywords.join(', ')}`);
      
      // 通知父组件研究领域变化
      console.log('🔗 AI搜索：准备调用研究领域回调函数', {
        researchDomain,
        domainInfo,
        hasCallback: !!onResearchDomainChange
      });
      
      if (onResearchDomainChange) {
        console.log('🚀 AI搜索：正在调用onResearchDomainChange');
        onResearchDomainChange(researchDomain, domainInfo);
        console.log('✅ AI搜索：onResearchDomainChange调用完成');
      } else {
        console.error('❌ AI搜索：onResearchDomainChange回调函数不存在');
      }
      
      // 记录用户研究兴趣（可以用于后续的个性化推荐）
      const userInterest = {
        domain: researchDomain,
        domainName: domainInfo.name,
        query: optimizedSearch.query,
        timestamp: new Date().toISOString(),
        searchType: optimizedSearch.searchType,
        fieldsOfStudy: optimizedSearch.fieldsOfStudy
      };
      
      // 存储到localStorage（可以用于后续分析）
      try {
        const existingInterests = JSON.parse(localStorage.getItem('userResearchInterests') || '[]');
        existingInterests.push(userInterest);
        // 只保留最近50条记录
        if (existingInterests.length > 50) {
          existingInterests.splice(0, existingInterests.length - 50);
        }
        localStorage.setItem('userResearchInterests', JSON.stringify(existingInterests));
      } catch (error) {
        console.warn('保存用户研究兴趣失败:', error);
      }
      
      // 如果是多领域查询，记录交叉学科信息
      if (Array.isArray(optimizedSearch.researchDomain) && optimizedSearch.researchDomain.length > 1) {
        const crossDomainInterest = {
          type: 'cross_domain',
          domains: optimizedSearch.researchDomain,
          domainNames: optimizedSearch.researchDomain.map(domain => domainMapping[domain]?.name || '未知领域'),
          query: optimizedSearch.query,
          timestamp: new Date().toISOString(),
          searchType: optimizedSearch.searchType,
          fieldsOfStudy: optimizedSearch.fieldsOfStudy
        };
        
        try {
          const existingCrossDomain = JSON.parse(localStorage.getItem('userCrossDomainInterests') || '[]');
          existingCrossDomain.push(crossDomainInterest);
          // 只保留最近20条交叉学科记录
          if (existingCrossDomain.length > 20) {
            existingCrossDomain.splice(0, existingCrossDomain.length - 20);
          }
          localStorage.setItem('userCrossDomainInterests', JSON.stringify(existingCrossDomain));
        } catch (error) {
          console.warn('保存用户交叉学科兴趣失败:', error);
        }
      }
      
      // 这里可以添加更多处理逻辑，比如：
      // 1. 触发相关广告显示
      // 2. 显示相关推荐内容
      // 3. 发送分析数据到后端
      // 4. 更新用户画像
      
      // 示例：触发领域相关的服务
      triggerDomainSpecificServices(researchDomain, domainInfo, optimizedSearch);
    } else {
      console.warn('未知的研究领域标记:', researchDomain);
    }
  };

  // 触发领域特定服务的函数
  const triggerDomainSpecificServices = (researchDomain, domainInfo, optimizedSearch) => {
    // 这里可以实现具体的领域相关服务
    // 例如：显示相关广告、推荐相关工具、提供专业服务等
    
    console.log(`触发 ${domainInfo.name} 领域的相关服务`);
    
    // 示例：根据领域显示不同的提示信息
    const domainMessages = {
      'computer_science': '🔬 检测到您正在搜索计算机科学相关内容，我们为您推荐相关的AI工具和开发资源！',
      'medicine': '🏥 检测到您正在搜索医学相关内容，我们为您推荐相关的医学数据库和临床资源！',
      'biology': '🧬 检测到您正在搜索生物学相关内容，我们为您推荐相关的生物信息学工具！',
      'chemistry': '🧪 检测到您正在搜索化学相关内容，我们为您推荐相关的化学数据库！',
      'physics': '⚛️ 检测到您正在搜索物理学相关内容，我们为您推荐相关的物理计算工具！',
      'mathematics': '📊 检测到您正在搜索数学相关内容，我们为您推荐相关的数学软件！',
      'engineering': '⚙️ 检测到您正在搜索工程学相关内容，我们为您推荐相关的工程计算工具！',
      'environmental_science': '🌍 检测到您正在搜索环境科学相关内容，我们为您推荐相关的环境数据资源！',
      'psychology': '🧠 检测到您正在搜索心理学相关内容，我们为您推荐相关的心理测评工具！',
      'economics': '💰 检测到您正在搜索经济学相关内容，我们为您推荐相关的经济数据资源！',
      'education': '📚 检测到您正在搜索教育学相关内容，我们为您推荐相关的教育资源！',
      'social_sciences': '👥 检测到您正在搜索社会科学相关内容，我们为您推荐相关的社会调查工具！',
      'other': '🔍 检测到您正在搜索专业领域内容，我们为您推荐相关的学术资源！'
    };
    
    const message = domainMessages[researchDomain];
    if (message) {
      // 这里可以显示一个友好的提示信息
      // 暂时使用console.log，后续可以集成到UI中
      console.log(message);
      
      // 示例：可以触发一个toast通知
      // showToast(message, 'info', 5000);
    }
  };

  // 移除了不再使用的 hasActiveFilters 变量

  const setFilterRef = (key) => (el) => {
    if (!filterRefs.current[key]) {
      filterRefs.current[key] = { current: null };
    }
    filterRefs.current[key].current = el;
  };

  // 获取活跃筛选条件数量
  const activeFilterCount = Object.values(filters).filter(v => v && v !== 'relevance').length;

  // 简化筛选器切换逻辑，使用纯React状态管理
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // 动态渲染筛选字段
  const renderFilterField = (field) => {
    const commonProps = {
      value: filters[field.key] || '',
      onChange: (e) => handleFilterChange(field.key, e.target.value),
      placeholder: field.placeholder,
      disabled: aiProcessing,
      $animating: animatingFields[field.key]
    };

    switch (field.type) {
      case 'select':
        return (
          <FilterGroup key={field.key}>
            <FilterLabel>
              {getIcon(field.icon)}
              {field.label}
            </FilterLabel>
            <FilterAnimationContainer>
              <FilterSelect 
                key={field.key}
                ref={setFilterRef(field.key)}
                {...commonProps}
              >
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </FilterSelect>
              {animatingFields[field.key] && (
                <FilterTextOverlay>
                  {fieldAnimatedText[field.key]?.map((item) => (
                    <span key={item.key}>{item.char}</span>
                  ))}
                </FilterTextOverlay>
              )}
            </FilterAnimationContainer>
          </FilterGroup>
        );
      
      case 'number':
        return (
          <FilterGroup key={field.key}>
            <FilterLabel>
              {getIcon(field.icon)}
              {field.label}
            </FilterLabel>
            <FilterAnimationContainer>
              <FilterInput 
                key={field.key}
                ref={setFilterRef(field.key)}
                {...commonProps} 
                type="number" 
              />
              {animatingFields[field.key] && (
                <FilterTextOverlay>
                  {fieldAnimatedText[field.key]?.map((item) => (
                    <span key={item.key}>{item.char}</span>
                  ))}
                </FilterTextOverlay>
              )}
            </FilterAnimationContainer>
          </FilterGroup>
        );
      
      default: // text
        return (
          <FilterGroup key={field.key}>
            <FilterLabel>
              {getIcon(field.icon)}
              {field.label}
            </FilterLabel>
            <FilterAnimationContainer>
              <FilterInput 
                key={field.key}
                ref={setFilterRef(field.key)}
                {...commonProps} 
                type="text" 
              />
              {animatingFields[field.key] && (
                <FilterTextOverlay>
                  {fieldAnimatedText[field.key]?.map((item) => (
                    <span key={item.key}>{item.char}</span>
                  ))}
                </FilterTextOverlay>
              )}
            </FilterAnimationContainer>
          </FilterGroup>
        );
    }
  };

  // 简单的关键词检测 - 用于非AI搜索时的领域识别
  const detectDomainByKeywords = useCallback((searchQuery) => {
    console.log('🔍 开始关键词检测，查询内容:', searchQuery);
    const query = searchQuery.toLowerCase();
    
    // 医学相关关键词
    const medicalKeywords = [
      'medicine', 'medical', 'disease', 'treatment', 'diagnosis', 'clinical', 'patient',
      'vaccine', 'drug', 'therapy', 'hospital', 'doctor', 'health', 'cancer', 'diabetes',
      'covid', 'virus', 'bacteria', 'infection', 'surgery', 'pharmaceutical',
      '医学', '医疗', '疾病', '治疗', '诊断', '临床', '患者', '疫苗', '药物',
      '医院', '医生', '健康', '癌症', '糖尿病', '病毒', '细菌', '感染', '手术'
    ];
    
    // 检查是否包含医学关键词
    const matchedKeywords = medicalKeywords.filter(keyword => query.includes(keyword));
    const isMedical = matchedKeywords.length > 0;
    
    console.log('🔍 医学关键词匹配结果:', {
      isMedical,
      matchedKeywords,
      hasCallback: !!onResearchDomainChange
    });
    
    if (isMedical && onResearchDomainChange) {
      const medicalDomainInfo = {
        name: '医学',
        description: '疾病、药物、治疗、诊断、临床试验等',
        keywords: ['disease', 'drug', 'treatment', 'diagnosis', 'clinical trial', 'vaccine']
      };
      console.log('🏥 触发医学领域检测，调用回调函数');
      onResearchDomainChange('medicine', medicalDomainInfo);
    } else if (isMedical && !onResearchDomainChange) {
      console.warn('⚠️ 检测到医学关键词但没有回调函数');
    } else {
      console.log('ℹ️ 未检测到医学关键词');
    }
  }, [onResearchDomainChange]);

  return (
    <>
      {/* 成功动画覆盖层 */}
      <SuccessOverlay $visible={showSuccessOverlay} />
      
      <SearchContainer $aiCompleted={aiCompleted} $variant={variant}>
        {/* 欢迎标题 - 仅在 welcome 变体中显示 */}
        {showTitle && variant === 'welcome' && (
          <div style={{ 
            color: '#333', 
            fontSize: '22px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '20px',
            textShadow: 'none'
          }}>
            🎓 欢迎来到AI科研狗 🎓
          </div>
        )}
        <MainSearchArea>
          <form onSubmit={handleSubmit}>
            <SearchControlsRow>
              {/* PC端的筛选按钮 */}
              <FilterToggle
                type="button"
                $active={showFilters}
                onClick={toggleFilters}
                disabled={aiProcessing}
                className="filter-toggle-left"
              >
                <span className="filter-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                </span>
                <span className="filter-text">高级筛选</span>
              </FilterToggle>
              
              <SearchInputWrapper className="search-input-wrapper">
                <SearchInput
                  ref={searchInputRef}
                  type="text"
                  placeholder={aiProcessing ? '' : getPlaceholderText()}
                  value={aiProcessing && animatedText.length > 0 ? '' : query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    // 通知父组件输入内容发生变化，用于清空重复搜索检测缓存
                    if (onQueryChange) {
                      onQueryChange(e.target.value);
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onCompositionStart={handleCompositionStart}
                  onCompositionEnd={handleCompositionEnd}
                  disabled={aiProcessing}
                  $aiProcessing={aiProcessing}
                  $hasAnimatedText={animatedText.length > 0}
                />
                
                {/* 敏感词提示 */}
                <SensitiveWordAlert $visible={showSensitiveAlert}>
                  <FiAlertTriangle className="alert-icon" size={16} />
                  <span className="alert-text">
                    检测到敏感词汇，请重新输入合规的搜索内容
                  </span>
                  <button className="alert-close" onClick={handleCloseSensitiveAlert}>
                    <FiX size={14} />
                  </button>
                </SensitiveWordAlert>
                
                {/* AI智能检索提示 - 只有在输入框聚焦时才显示 */}
                <InputAIHint $visible={!aiProcessing && showHint && !isShiftPressed && isInputFocused && !showSensitiveAlert}>
                  <span className="hint-text">您可以开启底部的AI开关或按下</span>
                  <span className="shift-key-text">Shift</span>
                  <span className="hint-text">+ Enter 来使用 AI 智能检索</span>
                </InputAIHint>
                

                
                {/* 字符动画覆盖层 */}
                {aiProcessing && animatedText.length > 0 && (
                  <InputTextOverlay ref={inputOverlayRef}>
                    {animatedText.map((item) => (
                      <span key={item.key} style={{ animationDelay: '0ms' }}>{item.char}</span>
                    ))}
                    {showCursor && <Cursor />}
                  </InputTextOverlay>
                )}
                
                {/* AI处理覆盖层 */}
                <AIProcessingOverlay $visible={aiProcessing} />
                
                {/* 打字机效果文本 */}
                <TypewriterText $visible={aiProcessing && query.length === 0}>
                  {typewriterText}
                </TypewriterText>
              </SearchInputWrapper>
              

              
              <SearchButtonGroup className="search-button-group">
                {/* 筛选按钮 - 移到搜索按钮组内 */}
                <FilterToggle
                  type="button"
                  $active={showFilters}
                  onClick={toggleFilters}
                  disabled={aiProcessing}
                  className="filter-toggle-left"
                >
                  <span className="filter-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                  </span>
                  <span className="filter-text">高级筛选</span>
                </FilterToggle>
                
                {/* 数据源下拉菜单 - 仅在手机端显示 */}
                <div className="mobile-datasource-select">
                  <select
                    value={dataSource}
                    onChange={(e) => !FILTER_CONFIGS[e.target.value].disabled && handleDataSourceChange(e.target.value)}
                    disabled={loading || aiProcessing}
                  >
                    {Object.keys(FILTER_CONFIGS).map(source => (
                      <option
                        key={source}
                        value={source}
                        disabled={FILTER_CONFIGS[source].disabled}
                      >
                        {FILTER_CONFIGS[source].name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* 按键提示组件 */}
                <KeyPromptContainer className="key-prompt-container">
                  {/* Shift 按键 - 只在输入框聚焦且按下时显示 */}
                  <ShiftKeyButton
                    $isPressed={isShiftPressed && isInputFocused}
                    onClick={() => handleKeyClick('shift')}
                  />
                  
                  {/* 加号连接符 - 只在输入框聚焦且Shift按下时显示 */}
                  <PlusIcon $visible={isShiftPressed && isInputFocused}>+</PlusIcon>
                  
                  {/* Enter 按键 / 搜索按钮 */}
                  <EnterKeyButton
                    $isPressed={isEnterPressed}
                    $shiftPressed={isShiftPressed && isInputFocused}
                    onClick={() => handleKeyClick('enter')}
                    onMouseEnter={() => setIsEnterHovered(true)}
                    onMouseLeave={() => setIsEnterHovered(false)}
                  >
                    {/* 当没有按下Shift时显示搜索按钮文本 */}
                    {!(isShiftPressed && isInputFocused) && (
                      <>
                        <FiSearch size={16} />
                        搜索
                      </>
                    )}
                  </EnterKeyButton>
                </KeyPromptContainer>
              </SearchButtonGroup>
            </SearchControlsRow>
          </form>
          
          {/* 底部控制区域 - AI开关、研究报告开关、数据源选择器与按键说明对齐 */}
          <BottomControlsRow>
            {/* 左侧开关组 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* AI开关 */}
              <BottomAISwitchContainer>
                <BottomAISwitchLabel>AI智能搜索</BottomAISwitchLabel>
                <BottomAISwitch $checked={isAISwitchEnabled} disabled={aiProcessing}>
                  <AISwitchInput
                    type="checkbox"
                    checked={isAISwitchEnabled}
                    onChange={handleAISwitchToggle}
                    disabled={aiProcessing}
                  />
                </BottomAISwitch>
                <SwitchTooltip className="tooltip">
                  开启后使用AI优化搜索查询<br/>提供更精准的学术文献
                </SwitchTooltip>
              </BottomAISwitchContainer>
              
              {/* 研究报告开关 - 只在首页显示 */}
              {isHomePage && (
                <BottomAISwitchContainer>
                  <BottomAISwitchLabel>获取研究报告</BottomAISwitchLabel>
                  <BottomAISwitch $checked={isReportSwitchEnabled} disabled={aiProcessing}>
                    <AISwitchInput
                      type="checkbox"
                      checked={isReportSwitchEnabled}
                      onChange={handleReportSwitchToggle}
                      disabled={aiProcessing}
                    />
                  </BottomAISwitch>
                  <SwitchTooltip className="tooltip">
                    开启后自动生成研究分析报告<br/>总结文献要点和趋势
                  </SwitchTooltip>
                </BottomAISwitchContainer>
              )}
            </div>
            
            {/* 中间数据源选择器 */}
            <MainDataSourceSelector>
              <MainDataSourceLabel>数据源：</MainDataSourceLabel>
              <MainDataSourceTabs>
                {Object.keys(FILTER_CONFIGS).map(source => (
                  <MainDataSourceTab
                    key={source}
                    $active={dataSource === source}
                    onClick={() => !FILTER_CONFIGS[source].disabled && handleDataSourceChange(source)}
                    disabled={loading || aiProcessing || FILTER_CONFIGS[source].disabled}
                    onMouseEnter={() => setHoveredDataSource(source)}
                    onMouseLeave={() => setHoveredDataSource(null)}
                    style={{ position: 'relative' }}
                  >
                    <span className="desktop-name">{FILTER_CONFIGS[source].name}</span>
                    <span className="mobile-name">{getMobileDataSourceName(source)}</span>
                    <span className="mobile-icon">{getDataSourceIcon(source)}</span>
                    <DataSourceTooltip className={hoveredDataSource === source ? 'visible' : ''}>
                      {getDataSourceDescription(source)}
                    </DataSourceTooltip>
                  </MainDataSourceTab>
                ))}
              </MainDataSourceTabs>
            </MainDataSourceSelector>
            
            {/* 右侧控制区域 - 与按键区域对齐 */}
            <RightControlsSection>
              <KeyInstructionText className="search-instruction" $visible={false}>
                {isShiftPressed && isInputFocused ? 'AI智能搜索' : '搜索'}
              </KeyInstructionText>
            </RightControlsSection>
          </BottomControlsRow>
        </MainSearchArea>

        <FiltersContainer $show={showFilters} className="filters-container">
            <HighlightFilter ref={highlightRef} />
            

            
            {/* 动态筛选表单 */}
            <FilterCategory>
              <h4>{currentConfig.name} 筛选条件</h4>
              <FilterGrid>
                {currentConfig.fields
                  .filter(field => field.category === 'basic')
                  .map(renderFilterField)}
              </FilterGrid>
            </FilterCategory>
            
            {currentConfig.fields.some(field => field.category === 'advanced') && (
              <FilterCategory>
                <h4>高级筛选</h4>
                <FilterGrid>
                  {currentConfig.fields
                    .filter(field => field.category === 'advanced')
                    .map(renderFilterField)}
                </FilterGrid>
              </FilterCategory>
            )}
            
            <FilterActions>
              <div className="filter-status">
                {activeFilterCount > 0 ? (
                  <>
                    <span>已选择</span>
                    <span className="filter-count">{activeFilterCount}</span>
                    <span>个筛选条件</span>
                  </>
                ) : (
                  <span>未选择任何筛选条件</span>
                )}
              </div>
              
              <div className="action-buttons">
                <ClearButton type="button" onClick={clearFilters} disabled={aiProcessing}>
                  <FiX size={16} />
                  清除筛选
                </ClearButton>
                <ApplyButton type="button" onClick={applyFilters} disabled={aiProcessing}>
                  <FiSearch size={16} />
                  应用筛选
                </ApplyButton>
              </div>
            </FilterActions>
          </FiltersContainer>
      </SearchContainer>
    </>
  );
};

export default SearchForm; 