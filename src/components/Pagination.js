import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiMoreHorizontal } from 'react-icons/fi';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  gap: 8px;
`;

const PaginationButton = styled.button`
  background: ${props => props.$active ? '#007acc' : 'white'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: 1px solid ${props => props.$active ? '#007acc' : '#e1e5e9'};
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;

  &:hover:not(:disabled) {
    background: ${props => props.$active ? '#005fa3' : '#f5f5f5'};
    border-color: ${props => props.$active ? '#005fa3' : '#007acc'};
    color: ${props => props.$active ? 'white' : '#007acc'};
  }

  &:disabled {
    background: #f8f9fa;
    color: #ccc;
    border-color: #e1e5e9;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.div`
  color: #666;
  font-size: 14px;
  margin: 0 16px;
  white-space: nowrap;
`;

const ResultsInfo = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
`;

const Ellipsis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  color: #ccc;
`;

const Pagination = ({ 
  currentPage, 
  totalResults, 
  resultsPerPage, 
  onPageChange,
  maxVisiblePages = 5 
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  
  if (totalPages <= 1) return null;

  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  // 计算显示的页码范围
  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // 调整起始页以确保显示足够的页码
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // 添加第一页和省略号
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
    }
    
    // 添加中间页码
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // 添加省略号和最后一页
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      <ResultsInfo>
        显示第 {startResult.toLocaleString()} - {endResult.toLocaleString()} 条，
        共 {totalResults.toLocaleString()} 条结果
      </ResultsInfo>
      
      <PaginationContainer>
        <PaginationButton
          onClick={handlePrevious}
          disabled={currentPage === 1}
          title="上一页"
        >
          <FiChevronLeft size={16} />
        </PaginationButton>

        {visiblePages.map((page, index) => {
          if (typeof page === 'string') {
            return (
              <Ellipsis key={page}>
                <FiMoreHorizontal size={16} />
              </Ellipsis>
            );
          }
          
          return (
            <PaginationButton
              key={page}
              $active={page === currentPage}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PaginationButton>
          );
        })}

        <PaginationButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
          title="下一页"
        >
          <FiChevronRight size={16} />
        </PaginationButton>

        <PageInfo>
          第 {currentPage} 页，共 {totalPages} 页
        </PageInfo>
      </PaginationContainer>
    </>
  );
};

export default Pagination; 