import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e1e5e9;
  border-top: 4px solid #007acc;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

const LoadingText = styled.div`
  color: #666;
  font-size: 16px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SkeletonContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 16px;
`;

const SkeletonLine = styled.div`
  height: ${props => props.height || '16px'};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: ${props => props.marginBottom || '12px'};
  animation: ${keyframes`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 1.5s ease-in-out infinite;
`;

const SkeletonTitle = styled(SkeletonLine)`
  height: 24px;
  width: 80%;
  margin-bottom: 16px;
`;

const SkeletonMeta = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const SkeletonMetaItem = styled(SkeletonLine)`
  height: 14px;
  width: 80px;
  margin-bottom: 0;
`;

const SkeletonText = styled(SkeletonLine)`
  height: 14px;
  margin-bottom: 8px;
  
  &:last-child {
    width: 60%;
  }
`;

const SkeletonActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const SkeletonButton = styled(SkeletonLine)`
  height: 36px;
  width: 100px;
  margin-bottom: 0;
`;

// 简单的加载器
export const LoadingSpinner = ({ message = '正在搜索...' }) => (
  <LoadingContainer>
    <Spinner />
    <LoadingText>{message}</LoadingText>
  </LoadingContainer>
);

// 骨架屏加载器
export const SkeletonCard = () => (
  <SkeletonContainer>
    <SkeletonTitle />
    <SkeletonMeta>
      <SkeletonMetaItem />
      <SkeletonMetaItem />
      <SkeletonMetaItem />
    </SkeletonMeta>
    <SkeletonText />
    <SkeletonText />
    <SkeletonText />
    <SkeletonText />
    <SkeletonActions>
      <SkeletonButton />
      <SkeletonButton />
    </SkeletonActions>
  </SkeletonContainer>
);

// 骨架屏列表
export const SkeletonList = ({ count = 3 }) => (
  <div>
    {Array.from({ length: count }, (_, index) => (
      <SkeletonCard key={`skeleton-${index}`} />
    ))}
  </div>
);

export default LoadingSpinner; 