import React from 'react';
import styled from 'styled-components';
import { FiAlertCircle, FiRefreshCw, FiX } from 'react-icons/fi';

const ErrorContainer = styled.div`
  background: white;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  padding: 16px 20px;
  margin: 16px 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ErrorIcon = styled.div`
  color: #dc3545;
  flex-shrink: 0;
  margin-top: 2px;
`;

const ErrorContent = styled.div`
  flex: 1;
`;

const ErrorTitle = styled.h4`
  color: #721c24;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const ErrorMessage = styled.p`
  color: #721c24;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const ErrorButton = styled.button`
  background: transparent;
  border: 1px solid #dc3545;
  color: #dc3545;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: #dc3545;
    color: white;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #721c24;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #f8d7da;
  }
`;

const EmptyStateContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  color: #ccc;
  margin-bottom: 16px;
`;

const EmptyStateTitle = styled.h3`
  font-size: 20px;
  color: #555;
  margin-bottom: 8px;
`;

const EmptyStateMessage = styled.p`
  font-size: 16px;
  line-height: 1.5;
  max-width: 400px;
  margin: 0 auto 24px;
`;

const EmptyStateButton = styled.button`
  background: #007acc;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 8px;

  &:hover {
    background: #005fa3;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #007acc;
  border: 1px solid #007acc;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 8px;

  &:hover {
    background: #007acc;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

// 主要错误组件
export const Error = ({ 
  title = '出现错误', 
  message, 
  onRetry, 
  onDismiss,
  showRetry = true 
}) => {
  return (
    <ErrorContainer>
      <ErrorIcon>
        <FiAlertCircle size={20} />
      </ErrorIcon>
      <ErrorContent>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorMessage>{message}</ErrorMessage>
        {(onRetry || onDismiss) && (
          <ErrorActions>
            {onRetry && showRetry && (
              <ErrorButton onClick={onRetry}>
                <FiRefreshCw size={14} />
                重试
              </ErrorButton>
            )}
          </ErrorActions>
        )}
      </ErrorContent>
      {onDismiss && (
        <CloseButton onClick={onDismiss}>
          <FiX size={18} />
        </CloseButton>
      )}
    </ErrorContainer>
  );
};

// 空状态组件
export const EmptyState = ({ 
  title = '暂无搜索结果', 
  message = '尝试使用不同的关键词或调整筛选条件',
  onAction,
  actionText = '开始搜索',
  onSecondaryAction,
  secondaryActionText,
  buttons = []
}) => {
  return (
    <EmptyStateContainer>
      <EmptyStateIcon>📝</EmptyStateIcon>
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateMessage>{message}</EmptyStateMessage>
      {(onAction || onSecondaryAction || buttons.length > 0) && (
        <ButtonContainer>
          {onAction && (
            <EmptyStateButton onClick={onAction}>
              {actionText}
            </EmptyStateButton>
          )}
          {onSecondaryAction && (
            <SecondaryButton onClick={onSecondaryAction}>
              {secondaryActionText}
            </SecondaryButton>
          )}
          {buttons.map((button, index) => 
            button.secondary ? (
              <SecondaryButton key={index} onClick={button.onClick}>
                {button.text}
              </SecondaryButton>
            ) : (
              <EmptyStateButton key={index} onClick={button.onClick}>
                {button.text}
              </EmptyStateButton>
            )
          )}
        </ButtonContainer>
      )}
    </EmptyStateContainer>
  );
};

// 网络错误
export const NetworkError = ({ onRetry }) => (
  <Error 
    title="网络连接错误"
    message="请检查您的网络连接，然后重试。"
    onRetry={onRetry}
  />
);





export default Error; 