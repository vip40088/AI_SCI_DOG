import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// 悬浮步进器容器 - 支持两种状态
const FloatingStepperContainer = styled.div`
  position: fixed;
  z-index: 999;
  pointer-events: none;
  width: 100%;
  max-width: 100vw;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 状态1：底部固定状态 */
  ${props => !props.$isFloating ? `
    bottom: 80px; /* 固定在底部，留出合适的间距 */
    top: auto;
    transform: none;
  ` : `
    /* 状态2：屏幕中央悬浮状态 */
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
  `}
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// 步进器内容区域
const StepperContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  
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
  
  display: grid;
  grid-template-columns: 520px 1fr; /* 与工具栏布局保持一致 */
  gap: 12px;
  padding: 0 20px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    justify-content: space-between;
    display: flex;
  }
`;

// 悬浮步进按钮 - 圆形设计
const FloatingStepButton = styled.button`
  /* 圆形尺寸 - 更简洁美观 */
  width: 48px;
  height: 48px;
  border-radius: 50%; /* 完全圆形 */
  
  /* 美化样式 */
  border: 2px solid ${props => props.$disabled ? 'rgba(225, 229, 233, 0.6)' : 'rgba(0, 122, 204, 0.7)'};
  background: ${props => props.$disabled ? 'rgba(248, 249, 250, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.$disabled ? 'rgba(204, 204, 204, 0.8)' : 'rgba(0, 122, 204, 0.9)'};
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  box-shadow: ${props => props.$disabled ? 'none' : '0 6px 24px rgba(0, 122, 204, 0.12)'};
  pointer-events: auto;
  position: relative;
  
  /* 透明度控制 */
  opacity: ${props => {
    if (!props.$visible) return 0;
    if (props.$disabled) return 0.4;
    return 0.85; /* 默认稍有透明度 */
  }};
  
  transform: ${props => props.$visible ? 'scale(1)' : 'scale(0.8)'};
  
  /* 悬停效果 - 还原透明度并增强 */
  &:hover:not(:disabled) {
    opacity: 1; /* 还原透明度 */
    background: linear-gradient(135deg, #007acc, #0099ff); /* 对角渐变更适合圆形 */
    color: white;
    border-color: rgba(0, 95, 163, 0.9);
    transform: scale(1.15);
    box-shadow: 
      0 10px 40px rgba(0, 122, 204, 0.3),
      0 6px 20px rgba(0, 122, 204, 0.2);
  }

  &:active:not(:disabled) {
    transform: scale(1.08);
    box-shadow: 
      0 8px 25px rgba(0, 122, 204, 0.35),
      0 4px 12px rgba(0, 122, 204, 0.25);
  }

  /* 涟漪效果 - 适配圆形 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  &:active:not(:disabled)::before {
    width: 60px;
    height: 60px;
    opacity: 1;
  }

  /* 适配圆形的图标尺寸 - 更大更清晰 */
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }
  
  /* 悬停时图标微动效果 */
  &:hover:not(:disabled) svg {
    transform: scale(1.2);
  }
  
  &.left-button {
    justify-self: end;
    margin-right: -24px; /* 调整位置以适应圆形按钮 */
  }
  
  &.right-button {
    justify-self: end;
    margin-right: -24px; /* 调整位置以适应圆形按钮 */
  }
`;

// 步进提示文本 - 适配圆形按钮
const StepHint = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 10;
  
  /* 左侧按钮的提示显示在右侧 */
  .left-button & {
    left: calc(100% + 20px);
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -4px;
      transform: translateY(-50%);
      border: 4px solid transparent;
      border-right-color: rgba(0, 0, 0, 0.8);
    }
  }
  
  /* 右侧按钮的提示显示在左侧 */
  .right-button & {
    right: calc(100% + 20px);
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -4px;
      transform: translateY(-50%);
      border: 4px solid transparent;
      border-left-color: rgba(0, 0, 0, 0.8);
    }
  }
  
  ${FloatingStepButton}:hover & {
    opacity: 1;
  }
`;

const FloatingSideStepper = ({ 
  onStepLeft, 
  onStepRight, 
  canStepLeft = true, 
  canStepRight = true, 
  visible = true,
  disabled = false,
  isFloating = false // 新增：是否为悬浮状态
}) => {
  const handleStepLeft = () => {
    if (!disabled && canStepLeft && onStepLeft) {
      onStepLeft();
    }
  };

  const handleStepRight = () => {
    if (!disabled && canStepRight && onStepRight) {
      onStepRight();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <FloatingStepperContainer $isFloating={isFloating}>
      <StepperContent>
        {/* 左侧区域，对应文献列表区域 */}
        <div style={{ gridColumn: 1 }}>
          <FloatingStepButton
            className="left-button"
            onClick={handleStepLeft}
            disabled={disabled || !canStepLeft}
            $disabled={disabled || !canStepLeft}
            $visible={visible}
            $isFloating={isFloating}
          >
            <StepHint>向左滚动</StepHint>
            <FiChevronLeft />
          </FloatingStepButton>
        </div>
        
        {/* 右侧区域，对应卡片区域 */}
        <div style={{ gridColumn: 2 }}>
          <FloatingStepButton
            className="right-button"
            onClick={handleStepRight}
            disabled={disabled || !canStepRight}
            $disabled={disabled || !canStepRight}
            $visible={visible}
            $isFloating={isFloating}
          >
            <StepHint>向右滚动</StepHint>
            <FiChevronRight />
          </FloatingStepButton>
        </div>
      </StepperContent>
    </FloatingStepperContainer>
  );
};

export default FloatingSideStepper; 