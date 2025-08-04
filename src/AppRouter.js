import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App'; // 原来的App组件作为主页
import AdminPage from './pages/AdminPage'; // 新的后台管理页面
import LogsPage from './pages/LogsPage'; // 保留旧的日志页面作为备用

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* 主页路由 */}
        <Route path="/" element={<App />} />
        
        {/* 新的统一后台管理入口 */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        
        {/* 保留旧的日志页面路由作为备用 */}
        <Route path="/admin/logs-legacy" element={<LogsPage />} />
        <Route path="/system/analytics" element={<LogsPage />} />
        <Route path="/internal/diagnostics" element={<LogsPage />} />
        
        {/* 默认重定向到主页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter; 