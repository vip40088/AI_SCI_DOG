const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('🚀 setupProxy.js 开始加载代理配置...');
  
  // 获取后端服务器地址
  const target = process.env.REACT_APP_API_URL || 'http://localhost:3001';
  
  console.log('📍 代理目标地址:', target);
  
  // 代理所有API请求到后端服务器
  app.use(
    '/api',
    createProxyMiddleware({
      target: target,
      changeOrigin: true,
      secure: false,
      timeout: 60000,
      logLevel: 'info',
      headers: {
        'Connection': 'keep-alive',
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log(`🔄 代理请求: ${req.method} ${req.url} -> ${target}${req.url}`);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log(`✅ 代理响应: ${proxyRes.statusCode} ${req.url}`);
      },
      onError: (err, req, res) => {
        console.error(`❌ 代理错误: ${err.message} for ${req.url}`);
        if (!res.headersSent) {
          res.status(500).json({
            error: `后端服务器连接失败: ${err.message}`,
            path: req.url,
            target: target
          });
        }
      }
    })
  );
  
  console.log('✅ setupProxy.js 代理配置加载完成，目标:', target);
}; 