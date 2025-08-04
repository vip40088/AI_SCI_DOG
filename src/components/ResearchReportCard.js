import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FiTrendingUp, FiRefreshCw, FiCopy, FiChevronDown, FiChevronUp, FiFileText } from 'react-icons/fi';
import { generateResearchReport } from '../api/aiService';

// 打字机效果动画（暂未使用，保留备用）
// const typewriter = keyframes`
//   from { width: 0; }
//   to { width: 100%; }
// `;

// 脉冲动画
const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

// 旋转动画
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 主卡片容器
const CardContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e1e5e9;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    border-color: #007acc;
  }
  
  /* 默认状态下的简洁长条样式 */
  ${props => !props.$hasContent && !props.$generating && `
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    
    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    }
  `}
`;

// 卡片头部
const CardHeader = styled.div`
  padding: 12px 16px;
  background: white;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e5e9;
  border-radius: 12px 12px 0 0;
  
  ${props => props.$collapsed && `
    border-radius: 12px;
    border-bottom: none;
  `}
`;

// 标题区域
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 卡片标题
const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
`;

// 论文计数
const PaperCount = styled.span`
  background: #f0f9ff;
  color: #0369a1;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #e0f2fe;
`;

// 操作按钮区域
const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 生成按钮
const GenerateButton = styled.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #0066aa;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    animation: ${props => props.$generating ? css`${spin} 1s linear infinite` : 'none'};
  }
`;

// 折叠按钮（现在也作为生成按钮）
const CollapseButton = styled.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #0066aa;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// 卡片内容
const CardContent = styled.div`
  padding: ${props => props.$collapsed ? '0 20px' : '20px'};
  max-height: ${props => props.$collapsed ? '0' : '400px'};
  height: ${props => props.$collapsed ? '0' : 'auto'};
  overflow: ${props => props.$collapsed ? 'hidden' : 'visible'};
  transition: all 0.3s ease;
  opacity: ${props => props.$collapsed ? '0' : '1'};
  
  /* 生成过程中禁用用户交互 */
  ${props => props.$generating && `
    pointer-events: none;
    user-select: none;
  `}
  
  /* 默认状态下隐藏内容区域 */
  ${props => !props.$hasContent && !props.$generating && `
    display: none;
  `}
`;

// 移除了复杂的空状态提示，改为简洁的长条样式

// 生成状态指示器（小巧版本）
const GeneratingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 8px;
  
  .spinner {
    font-size: 14px;
    color: #007acc;
    animation: ${css`${spin} 1s linear infinite`};
  }
  
  .text {
    font-size: 12px;
    color: #666;
    animation: ${css`${pulse} 2s ease-in-out infinite`};
  }
`;

// 报告内容
const ReportContent = styled.div`
  line-height: 1.6;
  color: #333;
  font-size: 14px;
  max-height: 360px;
  overflow-y: auto;
  
  /* 一级标题样式 */
  h1 {
    color: #1a202c;
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 16px 0;
    padding: 12px 0 8px 0;
    border-bottom: 3px solid #007acc;
    position: relative;
    
    &:first-child {
      margin-top: 0;
    }
    
    /* 添加装饰性元素 */
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 二级标题样式 */
  h2 {
    color: #007acc;
    font-size: 18px;
    font-weight: 600;
    margin: 18px 0 10px 0;
    padding-bottom: 6px;
    border-bottom: 2px solid #e1e5e9;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  /* 三级标题样式 */
  h3 {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    margin: 16px 0 8px 0;
  }
  
  /* 段落样式 - 减少间距 */
  p {
    margin: 8px 0;
    text-align: justify;
    line-height: 1.6;
  }
  
  /* 列表样式 */
  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin: 4px 0;
    line-height: 1.5;
  }
  
  /* 加粗文本样式 */
  strong {
    font-weight: 600;
    color: #1a202c;
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
    font-size: 13px;
    color: #e53e3e;
  }
  
  /* 引用样式 */
  blockquote {
    margin: 12px 0;
    padding: 10px 16px;
    background: #f8f9fa;
    border-left: 4px solid #007acc;
    border-radius: 0 4px 4px 0;
    color: #4a5568;
    font-style: italic;
  }
`;

// 底部操作栏
const FooterActions = styled.div`
  padding: 16px 20px;
  background: #f8f9fa;
  border-top: 1px solid #e1e5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 复制按钮
const CopyButton = styled.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #0066aa;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// 状态信息
const StatusInfo = styled.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ResearchReportCard = ({ 
  papers = [], 
  selectedModel = 'gpt-4o',
  visible = true,
  autoGenerate = false,
  triggerGenerate = false,
  onGenerateComplete = null
}) => {
  const [report, setReport] = useState('');
  const [generating, setGenerating] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);
  const reportContentRef = useRef(null);
  
  // 处理文本格式化（加粗、斜体等）
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
  
  // 使用useRef来避免依赖循环和重复触发
  const lastTriggerValue = useRef(null);
  const isGeneratingRef = useRef(false);
  const lastPapersHash = useRef(null);
  const autoGenerateRef = useRef(autoGenerate);
  const selectedModelRef = useRef(selectedModel);
  const onGenerateCompleteRef = useRef(onGenerateComplete);

  // 更新refs以保持最新值，但不触发重新渲染
  useEffect(() => {
    autoGenerateRef.current = autoGenerate;
    selectedModelRef.current = selectedModel;
    onGenerateCompleteRef.current = onGenerateComplete;
  });

  // 生成论文列表的哈希值，用于防重复请求
  const getPapersHash = useCallback(() => {
    if (!papers || papers.length === 0) return '';
    // 使用论文ID和标题创建简单哈希
    return papers.map(paper => `${paper.paperId}-${paper.title}`).join('|');
  }, [papers]);

  // 生成研究报告的核心逻辑，独立为函数避免在useEffect中重复定义
  const executeReportGeneration = useCallback(async () => {
    if (papers.length === 0 || isGeneratingRef.current) {
      return;
    }

    // 检查是否为相同的论文列表
    const currentHash = getPapersHash();
    if (currentHash === lastPapersHash.current && report) {
      console.log('Same papers already processed, skipping duplicate request');
      return;
    }

    isGeneratingRef.current = true;
    lastPapersHash.current = currentHash;
    setGenerating(true);
    setReport('');
    setCollapsed(false);

    try {
      // 流式传输回调
      const onProgress = (newContent, fullContent) => {
        setReport(fullContent);
        // 自动滚动到底部
        setTimeout(() => {
          if (reportContentRef.current) {
            reportContentRef.current.scrollTop = reportContentRef.current.scrollHeight;
          }
        }, 50);
      };

      const fullReport = await generateResearchReport(papers, selectedModelRef.current, onProgress);
      setReport(fullReport);
    } catch (error) {
      console.error('生成研究报告失败:', error);
      setReport(`生成研究报告失败: ${error.message}`);
    } finally {
      setGenerating(false);
      isGeneratingRef.current = false;
      // 通知父组件生成完成
      if (onGenerateCompleteRef.current) {
        onGenerateCompleteRef.current();
      }
    }
  }, [papers, getPapersHash, report]);

  // 手动生成报告
  const handleGenerateReport = useCallback(async () => {
    if (papers.length === 0) {
      alert('没有论文可供分析，请先搜索论文');
      return;
    }

    executeReportGeneration();
  }, [executeReportGeneration, papers.length]);

  // 优化后的useEffect，只监听真正需要的值，大幅减少依赖项
  useEffect(() => {
    // 只有在以下条件全部满足时才触发自动生成：
    // 1. triggerGenerate > 0 (有触发信号)
    // 2. triggerGenerate !== lastTriggerValue.current (不是重复的触发)
    // 3. papers.length > 0 (有论文数据)
    // 4. !generating (当前没有在生成)
    // 5. autoGenerateRef.current (自动生成开关开启)
    // 6. !isGeneratingRef.current (防止并发生成)
    if (
      triggerGenerate > 0 && 
      triggerGenerate !== lastTriggerValue.current && 
      papers.length > 0 && 
      !generating && 
      autoGenerateRef.current && 
      !isGeneratingRef.current
    ) {
      // 检查是否为相同的论文列表
      const currentHash = getPapersHash();
      if (currentHash === lastPapersHash.current && report) {
        console.log('Same papers already processed via trigger, skipping duplicate request');
        lastTriggerValue.current = triggerGenerate; // 更新最后触发值以防重复
        return;
      }

      console.log('Triggered to generate research report for', papers.length, 'papers');
      lastTriggerValue.current = triggerGenerate;
      
      // 执行生成
      executeReportGeneration();
    }
  }, [triggerGenerate, papers.length, generating, executeReportGeneration, getPapersHash, report]);

  // 当论文列表改变时，重置状态和缓存
  useEffect(() => {
    // 清空之前的报告和状态
    setReport('');
    setGenerating(false);
    
    // 重置所有ref值
    lastTriggerValue.current = null;
    isGeneratingRef.current = false;
    lastPapersHash.current = null;
    
    console.log('Papers changed, reset report state');
  }, [papers]);

  // 复制报告到剪贴板
  const handleCopyReport = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(report);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('复制失败:', error);
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = report;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [report]);

  // 如果不可见或没有论文，不渲染
  if (!visible || papers.length === 0) {
    return null;
  }

  return (
    <CardContainer $hasContent={!!report} $generating={generating}>
      <CardHeader $collapsed={collapsed}>
        <TitleSection>
          <CardTitle>
            <FiTrendingUp size={18} />
            研究报告生成器
          </CardTitle>
          <PaperCount>{papers.length} 篇论文</PaperCount>
          {generating && (
            <GeneratingIndicator>
              <div className="spinner">
                <FiRefreshCw />
              </div>
              <div className="text">生成中...</div>
            </GeneratingIndicator>
          )}
        </TitleSection>
        
        <ActionSection>
          {(!generating || report) && (
            <CollapseButton 
              onClick={() => {
                if (!report && !generating) {
                  // 无论自动生成开关状态如何，都允许手动触发生成
                  handleGenerateReport();
                } else if (report) {
                  // 如果有报告，则切换折叠状态
                  setCollapsed(!collapsed);
                }
              }}
            >
              {!report ? (
                <>
                  <FiFileText size={14} />
                  生成报告
                </>
              ) : collapsed ? (
                <>
                  <FiChevronDown size={14} />
                  展开
                </>
              ) : (
                <>
                  <FiChevronUp size={14} />
                  折叠
                </>
              )}
            </CollapseButton>
          )}
        </ActionSection>
      </CardHeader>

      <CardContent ref={contentRef} $collapsed={collapsed} $generating={generating} $hasContent={!!report}>
        {(report || generating) && !collapsed && (
          <ReportContent ref={reportContentRef}>
            {report.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index}>{renderTextWithFormatting(line.substring(2))}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index}>{renderTextWithFormatting(line.substring(3))}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={index}>{renderTextWithFormatting(line.substring(4))}</h3>;
              } else if (line.startsWith('- ') || line.startsWith('* ')) {
                return <li key={index} style={{ listStyle: 'disc', marginLeft: '20px' }}>{renderTextWithFormatting(line.substring(2))}</li>;
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else if (line.trim() !== '') {
                return <p key={index}>{renderTextWithFormatting(line)}</p>;
              }
              return null;
            })}
            {generating && !report && (
              <p style={{ color: '#666', fontStyle: 'italic' }}>正在生成报告...</p>
            )}
          </ReportContent>
        )}
      </CardContent>

      {report && !collapsed && (
        <FooterActions>
          <StatusInfo>
            <span>基于 {papers.length} 篇论文生成</span>
            <span>•</span>
            <span>模型: {selectedModel}</span>
          </StatusInfo>
          
          <CopyButton onClick={handleCopyReport}>
            <FiCopy size={14} />
            {copied ? '已复制!' : '复制报告'}
          </CopyButton>
        </FooterActions>
      )}
    </CardContainer>
  );
};

export default ResearchReportCard; 