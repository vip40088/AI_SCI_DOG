import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import SearchForm from './SearchForm';

// 经典的闪烁动画
const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// 彩虹文字动画
const rainbow = keyframes`
  0% { color: #ff0000; }
  16% { color: #ff8000; }
  32% { color: #ffff00; }
  48% { color: #00ff00; }
  64% { color: #0080ff; }
  80% { color: #8000ff; }
  100% { color: #ff0000; }
`;

// 跳动动画
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

// 主容器
const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  min-height: 600px;
  
  /* 完全透明背景 */
  background: transparent;
  border-radius: 15px;
  border: none;
  box-shadow: none;
`;

// 欢迎横幅
const WelcomeBanner = styled.div`
  text-align: center;
  background: linear-gradient(45deg, #ff9999, #7ed6df, #74b9ff, #a29bfe);
  background-size: 400% 400%;
  animation: ${rainbow} 5s ease-in-out infinite;
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.3);
  
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: ${bounce} 2s ease-in-out infinite;
  }
  
  .subtitle {
    font-size: 16px;
    margin-top: 8px;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
    .subtitle {
      font-size: 14px;
    }
  }
`;

// 收藏提示框
const BookmarkNotice = styled.div`
  background: linear-gradient(135deg, #ffe066, #fff3a0);
  border: 3px solid #ffab91;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 
    0 5px 15px rgba(255, 107, 53, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.4);
  
  &::before {
    content: "⭐";
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 24px;
    animation: ${blink} 2s infinite;
  }
  
  &::after {
    content: "⭐";
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 24px;
    animation: ${blink} 2s infinite 1s;
  }
  
  .bookmark-text {
    color: #d63031;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }
  
  .bookmark-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .bookmark-btn {
    background: linear-gradient(45deg, #ff9999, #ff7675);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .bookmark-text {
      font-size: 14px;
    }
    
    .bookmark-btn {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;



// 网站介绍卡片
const IntroCard = styled.div`
  background: linear-gradient(135deg, #ff7675, #e17055);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 3px solid #fff;
  box-shadow: 
    0 5px 20px rgba(231, 76, 60, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    &::before {
      content: "🎓";
      margin-right: 10px;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 10px;
      padding-left: 25px;
      position: relative;
      
      &::before {
        content: "📚";
        position: absolute;
        left: 0;
        top: 0;
      }
      
      &:nth-child(2)::before { content: "🔍"; }
      &:nth-child(3)::before { content: "🤖"; }
      &:nth-child(4)::before { content: "⚡"; }
    }
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 18px;
    }
    
    ul li {
      font-size: 14px;
    }
  }
`;



// 使用技巧卡片
const TipsCard = styled.div`
  background: linear-gradient(135deg, #fdcb6e, #f0932b);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 3px solid #fff;
  box-shadow: 
    0 5px 20px rgba(243, 156, 18, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
  
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    &::before {
      content: "💡";
      margin-right: 10px;
    }
  }
  
  .tip-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    border-left: 4px solid #fff;
    
    .key-combo {
      background: rgba(0, 0, 0, 0.3);
      padding: 4px 8px;
      border-radius: 4px;
      font-family: monospace;
      font-weight: bold;
    }
  }
  
  @media (max-width: 768px) {
    h4 {
      font-size: 16px;
    }
    
    .tip-item {
      font-size: 14px;
      padding: 10px;
    }
  }
`;

// 页脚信息
const FooterInfo = styled.div`
  background: linear-gradient(135deg, #a29bfe, #b2bec3);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #fff;
  box-shadow: 
    0 3px 15px rgba(142, 68, 173, 0.2),
    inset 0 0 15px rgba(255, 255, 255, 0.2);
  
  .footer-text {
    font-size: 14px;
    margin-bottom: 10px;
    
    &::before {
      content: "💝";
      margin-right: 8px;
    }
  }
  
  .version-info {
    font-size: 12px;
    opacity: 0.9;
    font-style: italic;
    
    &::before {
      content: "🚀";
      margin-right: 5px;
    }
  }
  
  @media (max-width: 768px) {
    .footer-text {
      font-size: 12px;
    }
    
    .version-info {
      font-size: 10px;
    }
  }
`;

// 跑马灯效果
const Marquee = styled.div`
  background: linear-gradient(45deg, #ff9999, #7ed6df);
  color: white;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  
  .marquee-text {
    display: inline-block;
    animation: marquee 30s linear infinite;
    font-weight: bold;
    font-size: 14px;
    transition: animation-duration 0.3s ease;
    
    &::before {
      content: "🎉";
      margin-right: 10px;
    }
    
    &::after {
      content: "🎉";
      margin-left: 10px;
    }
  }
  
  /* 鼠标悬停时"刹车"效果 */
  &:hover .marquee-text {
    animation-play-state: paused;
    transition: all 0.5s ease-out;
  }
  
  /* 鼠标移出时"加速冲出"效果 */
  &:not(:hover) .marquee-text {
    animation-play-state: running;
    transition: all 0.2s ease-in;
  }
  
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  @media (max-width: 768px) {
    .marquee-text {
      font-size: 12px;
    }
  }
`;

const UsageInstructions = ({ 
  visible = false, 
  searchInputFocused = false,
  showFilters = false,
  // 搜索表单相关props
  onSearch,
  loading,
  initialQuery,
  dataSource,
  onDataSourceChange,
  onFocusChange,
  onFiltersChange,
  onReportSwitchChange,
  onQueryChange,
  onResearchDomainChange,
  isHomePage = false
}) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(visible);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [visible]);

  const handleBookmark = () => {
    if (window.confirm('是否将本站添加到收藏夹？')) {
      try {
        if (window.external && window.external.addFavorite) {
          // IE浏览器
          window.external.addFavorite(window.location.href, 'AI科研狗 - 智能学术搜索引擎');
        } else if (window.sidebar && window.sidebar.addPanel) {
          // Firefox浏览器
          window.sidebar.addPanel('AI科研狗 - 智能学术搜索引擎', window.location.href, '');
        } else {
          // 其他浏览器
          alert('请使用 Ctrl+D (Windows) 或 Cmd+D (Mac) 将本站添加到收藏夹');
        }
      } catch (e) {
        alert('请使用 Ctrl+D (Windows) 或 Cmd+D (Mac) 将本站添加到收藏夹');
      }
    }
  };

  const handleSetHomepage = () => {
    if (window.confirm('是否将本站设为首页？')) {
      try {
        if (document.all) {
          // IE浏览器
          document.body.style.behavior = 'url(#default#homepage)';
          document.body.setHomePage(window.location.href);
        } else {
          alert('请手动将本站设为首页：' + window.location.href);
        }
      } catch (e) {
        alert('请手动将本站设为首页：' + window.location.href);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <MainContainer>
      {/* 搜索表单 - 放在最上面 */}
          <SearchForm 
            onSearch={onSearch}
            loading={loading}
            initialQuery={initialQuery}
            dataSource={dataSource}
            onDataSourceChange={onDataSourceChange}
            onFocusChange={onFocusChange}
            onFiltersChange={onFiltersChange}
            onReportSwitchChange={onReportSwitchChange}
            onQueryChange={onQueryChange}
            variant="welcome"
            showTitle={true}
            onResearchDomainChange={onResearchDomainChange}
            isHomePage={isHomePage}
          />
      
      {/* 跑马灯公告 */}
      <Marquee>
        <div className="marquee-text">
          🎉 欢迎访问AI科研狗智能学术搜索引擎！免费为您提供最专业的学术论文搜索服务！
          📧 邮箱：3639163969@qq.com 
          💬 QQ技术交流群：AI科研狗小窝 
          📱 微信客服：BigFe5 
          🕐 当前时间：{currentTime.toLocaleString()} 
          🔥 全球领先的AI学术搜索平台，已为数万科研工作者提供服务！
          💝 喜欢我们的服务？别忘了收藏本站并推荐给同事朋友！
        </div>
      </Marquee>
      

      
      {/* 收藏本站提示 */}
      <BookmarkNotice>
        <div className="bookmark-text">
          📌 喜欢本站？别忘了收藏哦！📌
        </div>
        <div className="bookmark-buttons">
          <button className="bookmark-btn" onClick={handleBookmark}>
            ⭐ 收藏本站
          </button>
          <button className="bookmark-btn" onClick={handleSetHomepage}>
            🏠 设为首页
          </button>
        </div>
      </BookmarkNotice>
      
      {/* 使用技巧 */}
      <TipsCard>
        <h4>使用小技巧</h4>
        <div className="tip-item">
          <strong>🎯 智能搜索：</strong>直接用中文描述您的研究需求，AI会为您找到最相关的论文
        </div>
        <div className="tip-item">
          <strong>⚡ 快捷键：</strong>按住 <span className="key-combo">Shift + Enter</span> 让AI优化您的搜索条件
        </div>
        <div className="tip-item">
          <strong>🔄 数据源切换：</strong>如果搜索结果不满意，可以切换不同的数据源重新搜索
        </div>
      </TipsCard>
      
      {/* 网站介绍 */}
      <IntroCard>
        <h3>本站特色功能</h3>
        <ul>
          <li>海量学术资源：覆盖全球主要学术数据库</li>
          <li>智能搜索算法：AI驱动的精准文献检索</li>
          <li>多语言支持：中英文无缝切换翻译</li>
          <li>实时更新：第一时间获取最新研究成果</li>
        </ul>
      </IntroCard>
      
      {/* 页脚信息 */}
      <FooterInfo>
        <div className="footer-text">
          感谢您选择AI科研狗！祝您学术研究一切顺利！
        </div>
        <div className="version-info">
          版本 v3.1.0 | 今日为您服务 | 让学术搜索更简单
        </div>
      </FooterInfo>
    </MainContainer>
  );
};

export default UsageInstructions; 