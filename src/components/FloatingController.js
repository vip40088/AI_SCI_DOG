import React, { useState } from 'react';
import styled from 'styled-components';
import { FiGlobe, FiRefreshCw } from 'react-icons/fi';

// 样式组件
const FloatingBall = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  user-select: none;
  
  /* 确保稳定的边框 */
  border: 2px solid rgba(0, 122, 204, 0.15);
  
  /* 避免文字模糊 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.18);
    transform: translateY(-50%) scale(1.05);
    border-color: rgba(0, 122, 204, 0.3);
  }
  
  &.translating {
    background: rgba(25, 118, 210, 0.1);
    border-color: rgba(25, 118, 210, 0.3);
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%) scale(1.02);
    }
  }
  
  &.translated {
    background: rgba(76, 175, 80, 0.1);
    border-color: rgba(76, 175, 80, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    right: 20px;
    opacity: 0.95;
  }
  
  /* 渐入动画 */
  animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(-50%) scale(0.8) rotate(180deg); 
    }
    to { 
      opacity: 1; 
      transform: translateY(-50%) scale(1) rotate(0deg); 
    }
  }
`;

const TranslationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1890ff, #40a9ff);
  color: white;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
    animation: ${props => props.$isTranslating ? 'spin 1s linear infinite' : 'none'};
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    margin-bottom: 6px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const TranslationText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #1890ff;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const TranslationProgress = styled.div`
  font-size: 10px;
  color: #666;
  text-align: center;
  margin-top: 4px;
  
  @media (max-width: 768px) {
    font-size: 9px;
    margin-top: 2px;
  }
`;

/**
 * 批量翻译悬浮控制器组件
 */
const FloatingController = ({ 
  onBatchTranslate, 
  visible = true, 
  isTranslating = false,
  translatedCount = 0,
  totalCount = 0,
  allTranslated = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (isTranslating) return;
    
    if (onBatchTranslate) {
      onBatchTranslate(!allTranslated); // true for translate, false for restore
    }
  };
  
  const getButtonText = () => {
    if (isTranslating) {
      return '翻译中...';
    }
    
    if (allTranslated) {
      return '还原标题';
    }
    
    if (translatedCount > 0) {
      return '继续翻译';
    }
    
    return '批量翻译';
  };
  
  const getProgressText = () => {
    if (isTranslating) {
      return `${translatedCount}/${totalCount}`;
    }
    
    if (translatedCount > 0) {
      return `已翻译 ${translatedCount}`;
    }
    
    return '';
  };
  
  if (!visible) return null;
  
  return (
    <FloatingBall 
      className={`${isTranslating ? 'translating' : ''} ${allTranslated ? 'translated' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TranslationIcon $isTranslating={isTranslating}>
        {isTranslating ? (
          <FiRefreshCw />
        ) : (
          <FiGlobe />
        )}
      </TranslationIcon>
      
      <TranslationText>
        {getButtonText()}
      </TranslationText>
      
      {getProgressText() && (
        <TranslationProgress>
          {getProgressText()}
        </TranslationProgress>
      )}
    </FloatingBall>
  );
};

export default FloatingController;