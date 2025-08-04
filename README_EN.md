# ZLXB Scholar Search 3.0

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.0+-61dafb.svg)
![Node.js](https://img.shields.io/badge/node.js-16.0+-339933.svg)

## Project Overview

### Introduction

ZLXB Scholar Search 3.0 is a modern, intelligent academic search and analysis platform that integrates multiple data sources and AI technologies. The platform provides researchers, students, and academic professionals with efficient paper search, intelligent analysis, and research report generation capabilities.

### Core Features

🔍 **Multi-source Integration**: Seamlessly integrates Semantic Scholar, Google Scholar, and other academic databases  
🤖 **AI-Powered Analysis**: Leverages GPT-4o-mini, DeepSeek-V3, and other AI models for intelligent paper analysis  
📊 **Data Visualization**: Provides intuitive charts and visual representations of research trends  
🌐 **Multi-language Support**: Supports Chinese and English interfaces with intelligent translation  
⚡ **Real-time Search**: Fast, responsive search experience with advanced filtering options  
🔒 **Secure & Reliable**: Enterprise-grade security with comprehensive logging and monitoring  

## Key Features

### 🔍 Multi-Source Academic Search

- **Unified Search Interface**: Single search box queries multiple academic databases simultaneously
- **Smart Filtering**: Advanced filters by publication year, author, journal, citation count, and more
- **Real-time Results**: Instant search results with pagination and sorting options
- **Duplicate Detection**: Intelligent deduplication across different data sources
- **Export Options**: Export search results in multiple formats (JSON, CSV, BibTeX)

### 🤖 AI-Powered Analysis

- **Paper Summarization**: AI-generated abstracts and key insights extraction
- **Research Trend Analysis**: Identify emerging topics and research directions
- **Citation Network Analysis**: Visualize paper relationships and influence patterns
- **Content Translation**: Automatic translation between Chinese and English
- **Research Report Generation**: Comprehensive reports based on search results
- **Keyword Extraction**: Intelligent identification of key terms and concepts

### 📊 Data Visualization

- **Interactive Charts**: Dynamic visualizations of publication trends and statistics
- **Citation Graphs**: Network diagrams showing paper relationships
- **Timeline Views**: Chronological visualization of research developments
- **Statistical Dashboards**: Comprehensive analytics and metrics
- **Export Capabilities**: Save visualizations as images or interactive formats

### 🌐 Multi-Language Support

- **Bilingual Interface**: Complete Chinese and English UI support
- **Smart Translation**: AI-powered translation of paper titles and abstracts
- **Localized Content**: Region-specific academic database integration
- **Cultural Adaptation**: Interface design adapted for different user preferences

## Technology Stack

### Frontend
- **React 18+**: Modern React with Hooks and Concurrent Features
- **Styled Components**: CSS-in-JS styling solution
- **Axios**: HTTP client for API requests
- **React Icons**: Comprehensive icon library
- **React Router**: Client-side routing
- **Context API**: State management

### Backend
- **Node.js 16+**: JavaScript runtime environment
- **Express.js**: Web application framework
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **File System**: Local file-based configuration
- **Custom Middleware**: Request logging and error handling

### AI Integration
- **OpenAI GPT-4o-mini**: Advanced language model for analysis
- **DeepSeek-V3**: Alternative AI model for diverse perspectives
- **Custom AI Service**: Unified AI API interface
- **Intelligent Caching**: Optimized AI request management

### Data Sources
- **Semantic Scholar API**: Academic paper database
- **Google Scholar**: Web scraping integration
- **Primary Scraping**: Direct website data extraction
- **Unified Search API**: Consolidated data access layer

## Quick Start

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 16.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Installation

1. **Clone the repository**
```bash
# Clone from your preferred code hosting platform: GitHub, GitLab, Gitee, Bitbucket, etc.
git clone https://github.com/your-organization/your-project-name.git
cd zlxb-scholar-search-3.0
```

2. **Install dependencies**
```bash
npm install
```

3. **Verify installation**
```bash
npm run check-deps
```

### Configuration

#### Environment Variables

1. **Copy environment template**
```bash
cp .env.example .env
```

2. **Configure environment variables**
```bash
# API Configuration
REACT_APP_AI_API_KEY=your_openai_api_key
REACT_APP_DEEPSEEK_API_KEY=your_deepseek_api_key
REACT_APP_API_BASE_URL=http://localhost:3001

# Development Settings
REACT_APP_USE_PROXY=true
REACT_APP_DEBUG=true

# Security
ADMIN_PASSWORD=your_secure_admin_password
LOG_ACCESS_KEY=your_log_access_key
```

#### API Keys Configuration

1. **Configure API keys**
```bash
cp config/api_keys.json.example config/api_keys.json
```

2. **Edit API keys file**
```json
{
  "openai": {
    "apiKey": "your_openai_api_key",
    // Compatible AI service providers: OpenAI, Azure OpenAI, DeepSeek, Claude, etc.
    "baseURL": "https://api.example-ai-provider.com/v1"
  },
  "deepseek": {
    "apiKey": "your_deepseek_api_key",
    // Alternative AI service providers: DeepSeek, Qwen, Baichuan, ChatGLM, etc.
    "baseURL": "https://api.example-ai-service.com/v1"
  }
}
```

### Running the Application

#### Development Mode

1. **Start both frontend and backend**
```bash
npm run dev
```

2. **Or start them separately**
```bash
# Terminal 1: Start backend server
npm run server

# Terminal 2: Start frontend development server
npm start
```

3. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- API Documentation: http://localhost:3001/api/docs

#### Production Mode

1. **Build the application**
```bash
npm run build
```

2. **Start production server**
```bash
npm run start:prod
```

#### Quick Development Setup

```bash
# One-command setup for development
./scripts/quick-dev.sh
```

## Deployment Guide

### Development Environment

#### Local Development
```bash
# Clone and setup
git clone <repository-url>
cd zlxb-scholar-search-3.0
npm install

# Configure environment
cp .env.example .env
cp config/api_keys.json.example config/api_keys.json

# Start development servers
npm run dev
```

#### Development Tools
- **Hot Reload**: Automatic code reloading during development
- **Debug Mode**: Enhanced logging and error reporting
- **API Proxy**: Frontend proxy to backend for CORS handling
- **Source Maps**: Detailed debugging information

### Production Environment

#### Using Deployment Scripts
```bash
# Production deployment
./scripts/deploy-production.sh

# Testing environment deployment
./scripts/deploy-testing.sh
```

#### Manual Deployment
```bash
# Build production assets
npm run build

# Start production server
NODE_ENV=production npm run start:prod

# Or use PM2 for process management
pm2 start ecosystem.config.js --env production
```

#### Docker Deployment
```bash
# Build Docker image
docker build -t zlxb-scholar-search:3.0 .

# Run container
docker run -d \
  --name zlxb-scholar-search \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/config:/app/config \
  -v $(pwd)/logs:/app/logs \
  zlxb-scholar-search:3.0
```

### Environment Configuration

| Environment | Config File | Description |
|-------------|-------------|-------------|
| Development | `.env.development` | Local development settings |
| Production | `.env.production` | Production environment variables |
| Local Override | `.env.local` | Local-specific overrides |
| Testing | `.env.test` | Testing environment configuration |

## API Documentation

### Search Endpoints

#### Unified Search API
```http
POST /api/search
Content-Type: application/json

{
  "query": "machine learning",
  "sources": ["semanticScholar", "googleScholar"],
  "filters": {
    "year": {"min": 2020, "max": 2024},
    "citationCount": {"min": 10}
  },
  "sort": "relevance",
  "page": 1,
  "limit": 20
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "papers": [
      {
        "id": "paper_id",
        "title": "Paper Title",
        "authors": ["Author 1", "Author 2"],
        "abstract": "Paper abstract...",
        "year": 2023,
        "citationCount": 150,
        "url": "https://paper-url.com",
        "source": "semanticScholar"
      }
    ],
    "totalCount": 1250,
    "currentPage": 1,
    "totalPages": 63
  }
}
```

### AI Analysis Endpoints

#### Batch Paper Analysis
```http
POST /api/ai/analyze-papers
Content-Type: application/json

{
  "paperIds": ["id1", "id2", "id3"],
  "analysisType": "summary",
  "model": "gpt-4o-mini"
}
```

#### Research Report Generation
```http
POST /api/ai/generate-report
Content-Type: application/json

{
  "query": "artificial intelligence trends",
  "papers": [...],
  "reportType": "comprehensive",
  "language": "en"
}
```

### Admin APIs

#### System Status
```http
GET /api/admin/status
Authorization: Bearer <admin_token>
```

#### API Logs
```http
GET /api/admin/logs?date=2024-01-15&level=error
Authorization: Bearer <admin_token>
```

## Features

### Search Capabilities

#### Multi-source Integration
- **Semantic Scholar API**: Academic paper database with 200M+ papers
- **Google Scholar**: Web scraping for broader coverage
- **Primary Scraping**: Direct website data extraction
- **Unified Results**: Intelligent deduplication and ranking

#### Smart Filtering
- **Publication Year**: Range-based year filtering
- **Author Search**: Exact and fuzzy author matching
- **Citation Count**: Minimum citation thresholds
- **Journal/Conference**: Venue-specific filtering
- **Language**: Multi-language content support

#### Search Optimization
- **Real-time Suggestions**: Auto-complete and query suggestions
- **Typo Correction**: Intelligent query correction
- **Semantic Search**: Context-aware search results
- **Relevance Ranking**: Advanced scoring algorithms

### Analysis Features

#### AI Paper Analysis
- **Abstract Generation**: AI-powered paper summaries
- **Key Insights**: Extraction of main findings and contributions
- **Methodology Analysis**: Research method identification
- **Impact Assessment**: Citation and influence analysis

#### Research Report Generation
- **Literature Review**: Comprehensive review generation
- **Trend Analysis**: Identification of research trends
- **Gap Analysis**: Research gap identification
- **Recommendation Engine**: Suggested research directions

#### Content Translation
- **Multi-language Support**: Chinese ↔ English translation
- **Context-aware Translation**: Academic terminology handling
- **Batch Processing**: Multiple paper translation
- **Quality Assurance**: Translation accuracy verification

### Administrative Functions

#### User Authentication
- **Admin Access**: Secure administrative interface
- **API Key Management**: Centralized key configuration
- **Access Control**: Role-based permissions
- **Session Management**: Secure session handling

#### API Monitoring
- **Request Tracking**: Detailed API usage logs
- **Performance Metrics**: Response time monitoring
- **Error Reporting**: Comprehensive error logging
- **Usage Analytics**: API usage statistics

#### Log Management
- **Structured Logging**: JSON-formatted log entries
- **Log Rotation**: Automatic log file management
- **Real-time Monitoring**: Live log streaming
- **Search and Filter**: Advanced log search capabilities

## Project Structure

### Directory Layout

```
zlxb-scholar-search-3.0/
├── public/                     # Static assets
│   ├── index.html             # Main HTML template
│   ├── favicon.ico            # Application icon
│   └── manifest.json          # PWA manifest
├── src/                       # Frontend source code
│   ├── components/            # React components
│   │   ├── SearchForm.js      # Search interface
│   │   ├── PaperCard.js       # Paper display component
│   │   └── Pagination.js      # Pagination component
│   ├── api/                   # API service modules
│   │   ├── unifiedSearch.js   # Search API integration
│   │   └── aiService.js       # AI analysis services
│   ├── utils/                 # Utility functions
│   ├── styles/                # Global styles
│   └── App.js                 # Main application component
├── config/                    # Configuration files
│   ├── api_keys.json          # API keys configuration
│   └── system_settings.json   # System settings
├── logs/                      # Application logs
│   ├── access.log             # Access logs
│   ├── error.log              # Error logs
│   └── api.log                # API request logs
├── scripts/                   # Deployment and utility scripts
│   ├── deploy-production.sh   # Production deployment
│   ├── deploy-testing.sh      # Testing deployment
│   └── quick-dev.sh           # Development setup
├── server.js                  # Backend server entry point
├── package.json               # Project dependencies
├── .env.example               # Environment variables template
└── README.md                  # Project documentation
```

### Core Files

| File | Description |
|------|-------------|
| `src/App.js` | Main React application component with routing and state management |
| `src/api/unifiedSearch.js` | Unified search API that integrates multiple data sources |
| `src/api/aiService.js` | AI service integration for paper analysis and report generation |
| `server.js` | Express.js backend server with API endpoints and middleware |
| `config/api_keys.json` | Centralized API key configuration for external services |
| `config/system_settings.json` | System-wide configuration and feature flags |

## Development Guide

### Development Setup

#### Prerequisites
- Node.js 16.0 or higher
- npm 8.0 or higher
- Git for version control
- Code editor (VS Code recommended)

#### Initial Setup
```bash
# Clone repository
git clone https://github.com/your-username/zlxb-scholar-search-3.0.git
cd zlxb-scholar-search-3.0

# Install dependencies
npm install

# Setup environment
cp .env.example .env
cp config/api_keys.json.example config/api_keys.json

# Start development
npm run dev
```

### Code Standards

#### JavaScript/React Standards
- **ES6+ Syntax**: Use modern JavaScript features (arrow functions, destructuring, async/await)
- **Functional Components**: Prefer functional components with hooks over class components
- **PropTypes**: Define prop types for all components
- **JSX Guidelines**: Follow React JSX best practices

```javascript
// Good: Functional component with hooks
const SearchForm = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await onSearch(query);
  }, [query, onSearch]);
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Component JSX */}
    </form>
  );
};
```

#### Naming Conventions
- **Components**: PascalCase (`SearchForm`, `PaperCard`)
- **Functions**: camelCase (`handleSearch`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`, `DEFAULT_PAGE_SIZE`)
- **Files**: camelCase for utilities, PascalCase for components

#### Comment Standards
```javascript
/**
 * Searches for academic papers across multiple sources
 * @param {string} query - Search query string
 * @param {Object} options - Search options and filters
 * @returns {Promise<Object>} Search results with papers and metadata
 */
const searchPapers = async (query, options = {}) => {
  // Implementation details...
};
```

### Development Workflow

#### Feature Development
1. **Create Feature Branch**
```bash
git checkout -b feature/new-search-filter
```

2. **Implement Changes**
   - Write code following established patterns
   - Add appropriate tests
   - Update documentation

3. **Test Locally**
```bash
npm run test
npm run lint
npm run dev
```

4. **Commit Changes**
```bash
git add .
git commit -m "feat: add advanced search filters"
```

#### Code Review Process
- **Pull Request**: Create PR with detailed description
- **Review Checklist**: Code quality, functionality, documentation
- **Testing**: Ensure all tests pass
- **Approval**: Require at least one approval before merging

#### Deployment Process
- **Development**: Automatic deployment on `develop` branch
- **Staging**: Manual deployment for testing
- **Production**: Tagged releases with manual approval

### Debugging Guide

#### Frontend Debugging
```bash
# Enable debug mode
REACT_APP_DEBUG=true npm start

# Check browser console for errors
# Use React Developer Tools
# Monitor network requests in DevTools
```

#### Backend Debugging
```bash
# Start server with debug logging
DEBUG=* npm run server

# Check server logs
tail -f logs/error.log
tail -f logs/api.log

# Monitor API requests
curl -X POST http://localhost:3001/api/search \
  -H "Content-Type: application/json" \
  -d '{"query":"test"}'
```

#### Common Debug Commands
```bash
# Check dependencies
npm ls

# Clear cache
npm cache clean --force

# Restart development servers
npm run restart

# Check port usage
lsof -i :3000
lsof -i :3001
```

## Contributing

### How to Contribute

#### Reporting Issues
When reporting bugs or requesting features, please include:
- **Problem Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to recreate the problem
- **Error Messages**: Full error logs and stack traces
- **Screenshots**: Visual evidence when applicable
- **Environment**: OS, browser version, Node.js version

#### Submitting Pull Requests
1. **Fork the Repository**
```bash
git clone https://github.com/your-username/zlxb-scholar-search-3.0.git
cd zlxb-scholar-search-3.0
```

2. **Create Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make Changes**
   - Follow coding standards
   - Add tests for new functionality
   - Update documentation

4. **Commit and Push**
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

5. **Create Pull Request**
   - Provide clear description of changes
   - Reference related issues
   - Ensure all tests pass

### Code Contribution Standards
- **Code Style**: Follow established ESLint and Prettier configurations
- **Testing**: Include unit tests for new features
- **Documentation**: Update relevant documentation
- **Testing**: Ensure all tests pass before submission

## FAQ

### Installation Issues

#### Q: `npm install` fails with permission errors
**A:** Use Node Version Manager (nvm) or fix npm permissions:
```bash
# Install nvm and use Node 16+
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 16
nvm use 16

# Or fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

#### Q: Node.js version compatibility issues
**A:** Ensure you're using Node.js 16.0 or higher:
```bash
node --version  # Should be v16.0.0 or higher
npm --version   # Should be 8.0.0 or higher
```

### Configuration Problems

#### Q: API keys not working
**A:** Verify API key configuration:
1. Check `.env` file exists and contains correct keys
2. Verify `config/api_keys.json` is properly formatted
3. Ensure API keys have proper permissions
4. Check API key quotas and limits

#### Q: Environment variables not loading
**A:** Common solutions:
```bash
# Restart development server
npm run restart

# Check .env file location (should be in project root)
ls -la .env*

# Verify environment variable names start with REACT_APP_
grep REACT_APP_ .env
```

### Runtime Errors

#### Q: Port 3000 or 3001 already in use
**A:** Kill existing processes or use different ports:
```bash
# Kill processes on specific ports
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9

# Or use different ports
PORT=3002 npm start
SERVER_PORT=3003 npm run server
```

#### Q: API requests failing with CORS errors
**A:** Ensure proxy configuration is correct:
1. Check `REACT_APP_USE_PROXY=true` in `.env`
2. Verify backend server is running on correct port
3. Check CORS configuration in `server.js`

#### Q: Frontend shows blank page
**A:** Debug steps:
1. Check browser console for JavaScript errors
2. Verify all dependencies are installed
3. Clear browser cache and localStorage
4. Check if backend API is accessible

## Changelog

### Version 3.0.0 (Current)
- Complete rewrite with modern React and Node.js
- Multi-source academic search integration
- AI-powered paper analysis and report generation
- Improved user interface and experience
- Enhanced security and monitoring

### Version 2.x
- Legacy version with basic search functionality
- Limited to single data source
- Basic UI implementation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## Contact

### Project Maintainers
- **Development Team**: [dev@your-organization.com](mailto:dev@your-organization.com)
- **Technical Support**: [support@your-organization.com](mailto:support@your-organization.com)
- **Project Repository**: [Your Code Hosting Platform](https://github.com/your-organization/your-project-name)

### Community
- **Issues**: Report bugs and request features on your code hosting platform
- **Discussions**: Join community discussions (GitHub Discussions, GitLab Issues, etc.)
- **Documentation**: Visit your [documentation site](https://docs.your-organization.com)

## Acknowledgments

### Open Source Libraries
- **React**: Facebook's React library for building user interfaces
- **Express.js**: Fast, unopinionated web framework for Node.js
- **Axios**: Promise-based HTTP client for JavaScript
- **Styled Components**: CSS-in-JS library for styling React components

### Data Sources
- **Academic Database API**: Compatible with Semantic Scholar, DBLP, arXiv, etc.
- **Scholar Search Engine**: Compatible with Google Scholar, Microsoft Academic, etc.
- **AI Service Provider**: Compatible with OpenAI, DeepSeek, Claude, Qwen, etc.
- **Alternative AI Services**: Compatible with various AI model providers

### Contributors
Thanks to all contributors who have helped make this project better:
- Development team members
- Beta testers and early adopters
- Community contributors and feedback providers

### Special Thanks
- Academic institutions for providing access to research data
- Open source community for foundational tools and libraries
- Users and researchers who provide valuable feedback