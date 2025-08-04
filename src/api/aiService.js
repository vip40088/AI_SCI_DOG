import axios from 'axios';
import apiLogger from '../utils/apiLogger';
import { API_ENDPOINTS } from '../config/apiConfig';

// 后端 AI API 代理接口 - 根据环境动态配置
const AI_API_ENDPOINT = API_ENDPOINTS.AI_CHAT;

// 前端显示的模型列表（用户友好的名称）
export const AI_MODELS = {
  GPT_4O_MINI: 'gpt-4o-mini',
  GPT_4O_MINI_2024: 'gpt-4o-mini-2024-07-18',
  DEEPSEEK_V3: 'deepseek-v3'
};

// 默认模型
const DEFAULT_MODEL = AI_MODELS.GPT_4O_MINI_2024;

// 创建专用的axios实例 - 直接连接后端
const aiApi = axios.create({
  timeout: 60000, // 60秒超时，因为AI请求可能较慢
  headers: {
    'Content-Type': 'application/json',
  }
});

// 添加请求拦截器用于调试
aiApi.interceptors.request.use(
  (config) => {
    console.log('🚀 AI API 请求发送:', {
      url: config.url,
      method: config.method,
      data: config.data ? { model: config.data.model, messageCount: config.data.messages?.length } : 'no data'
    });
    return config;
  },
  (error) => {
    console.error('❌ AI API 请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器用于调试
aiApi.interceptors.response.use(
  (response) => {
    console.log('✅ AI API 响应成功:', response.status, response.statusText);
    return response;
  },
  (error) => {
    console.error('❌ AI API 响应错误:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      message: error.message,
      url: error.config?.url
    });
    return Promise.reject(error);
  }
);

/**
 * 为论文生成基于特定维度的分析
 * @param {Object} paper - 论文对象
 * @param {string} dimension - 分析维度 ('research_purpose', 'research_methods', 'metrics', 'research_results')
 * @param {string} model - 使用的AI模型，默认为gpt-4o
 * @param {boolean} enableLogging - 是否启用日志记录，默认为true
 * @returns {Promise<string>} - 返回分析结果
 */
export const analyzePaperDimension = async (paper, dimension, model = DEFAULT_MODEL, enableLogging = true) => {
  const startTime = Date.now();
  
  if (!paper || !paper.title) {
    throw new Error('无效的论文数据');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  // 构建提示词
  let prompt = '';
  const paperInfo = {
    title: paper.title,
    abstract: paper.abstract || '无摘要',
    authors: (paper.authors || []).map(a => a.name).join(', '),
    year: paper.year || '未知',
    venue: paper.venue || '未知',
    fields: (paper.fieldsOfStudy || []).join(', ')
  };

  switch (dimension) {
    case 'research_purpose':
      prompt = `提取以下论文的研究目的，直接列出核心要点，不要有任何介绍句和总结句：\n\n标题：${paperInfo.title}\n摘要：${paperInfo.abstract}\n作者：${paperInfo.authors}\n年份：${paperInfo.year}\n发表于：${paperInfo.venue}\n研究领域：${paperInfo.fields}\n\n回答不超过50字。`;
      break;
    case 'research_methods':
      prompt = `提取以下论文的主要研究方法和技术，直接列出关键方法，不要有任何介绍句和总结句：\n\n标题：${paperInfo.title}\n摘要：${paperInfo.abstract}\n作者：${paperInfo.authors}\n年份：${paperInfo.year}\n发表于：${paperInfo.venue}\n研究领域：${paperInfo.fields}\n\n回答不超过50字。`;
      break;
    case 'metrics':
      prompt = `提取以下论文使用的评估指标，直接列出指标名称，不要有任何介绍句和总结句：\n\n标题：${paperInfo.title}\n摘要：${paperInfo.abstract}\n作者：${paperInfo.authors}\n年份：${paperInfo.year}\n发表于：${paperInfo.venue}\n研究领域：${paperInfo.fields}\n\n回答不超过50字。`;
      break;
    case 'research_results':
      prompt = `提取以下论文的主要研究结果，直接列出关键发现，不要有任何介绍句和总结句：\n\n标题：${paperInfo.title}\n摘要：${paperInfo.abstract}\n作者：${paperInfo.authors}\n年份：${paperInfo.year}\n发表于：${paperInfo.venue}\n研究领域：${paperInfo.fields}\n\n回答不超过50字。`;
      break;
    default:
      throw new Error(`未知的分析维度: ${dimension}`);
  }

  try {
    const response = await aiApi.post(AI_API_ENDPOINT, {
      model: model,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      stream: false,
      max_tokens: 100 // 限制回复长度
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const result = response.data.choices[0].message.content;
      
      // 记录成功日志（仅在启用日志时）
      if (enableLogging) {
        const responseTime = Date.now() - startTime;
        apiLogger.logApiCall(
          'analyzePaperDimension',
          'ai',
          true,
          responseTime,
          null,
          {
            paperId: paper.paperId,
            paperTitle: paper.title,
            dimension,
            model,
            resultLength: result.length
          }
        );
      }
      
      return result;
    } else {
      console.error('AI API返回格式不正确:', response.data);
      throw new Error('AI分析返回结果格式不正确');
    }
  } catch (error) {
    // 记录失败日志（仅在启用日志时）
    if (enableLogging) {
      const responseTime = Date.now() - startTime;
      apiLogger.logApiCall(
        'analyzePaperDimension',
        'ai',
        false,
        responseTime,
        error.message,
        {
          paperId: paper.paperId,
          paperTitle: paper.title,
          dimension,
          model
        }
      );
    }
    
    console.error(`AI分析失败 (模型: ${model}, 维度: ${dimension}):`, error);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
    throw new Error(`AI分析失败: ${error.message}`);
  }
};

/**
 * 批量分析多篇论文的多个维度
 * @param {Array} papers - 论文对象数组
 * @param {Array} dimensions - 要分析的维度数组
 * @param {Function} onProgress - 进度回调函数
 * @param {string} model - 使用的AI模型，默认为gpt-4o
 * @returns {Promise<void>}
 */
export const batchAnalyzePapers = async (papers, dimensions, onProgress, model = DEFAULT_MODEL) => {
  if (!papers || papers.length === 0) {
    throw new Error('没有论文可供分析');
  }

  if (!dimensions || dimensions.length === 0) {
    throw new Error('没有指定分析维度');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  // 批量分析统计
  const batchStats = {
    startTime: Date.now(),
    totalTasks: papers.length * dimensions.length,
    successCount: 0,
    failedCount: 0,
    errors: []
  };

  // 用于追踪是否已取消
  let isCancelled = false;

  // 设置取消标志的函数
  batchAnalyzePapers.cancel = () => {
    isCancelled = true;
  };

  // 创建所有任务的队列
  const analysisQueue = [];
  let completed = 0;
  const totalTasks = papers.length * dimensions.length;

  // 准备所有任务
  for (let paperIndex = 0; paperIndex < papers.length; paperIndex++) {
    const paper = papers[paperIndex];
    
    for (let dimensionIndex = 0; dimensionIndex < dimensions.length; dimensionIndex++) {
      const dimension = dimensions[dimensionIndex];
      
      // 添加任务到队列
      analysisQueue.push({
        paperIndex,
        dimensionIndex,
        paper,
        dimension,
        // 用于追踪任务状态
        status: 'pending'
      });
    }
  }

  try {
    // 使用Promise.all进行并行处理，但限制并发数量
    const concurrencyLimit = 3; // 最多同时处理3个请求
    let activeTasks = 0;
    let queueIndex = 0;

    // 处理队列中的任务
    while (queueIndex < analysisQueue.length || activeTasks > 0) {
      // 如果已取消分析，停止处理
      if (isCancelled) {
        break;
      }

      // 启动新任务，直到达到并发限制
      while (queueIndex < analysisQueue.length && activeTasks < concurrencyLimit) {
        const task = analysisQueue[queueIndex];
        if (task.status === 'pending') {
          task.status = 'running';
          activeTasks++;
          
          // 使用立即执行的异步函数处理任务
          (async (currentTask) => {
            let taskStartTime = Date.now();
            try {
              // 如果已取消，不执行分析
              if (isCancelled) return;
              
              const result = await analyzePaperDimension(currentTask.paper, currentTask.dimension, model, false); // 传递false禁用单个任务日志
              
              // 如果已取消，不返回结果
              if (isCancelled) return;
              
              // 调用进度回调
              if (onProgress) {
                onProgress(currentTask.paperIndex, currentTask.dimensionIndex, {
                  paperId: currentTask.paper.paperId,
                  dimension: currentTask.dimension,
                  result: result,
                  model: model
                });
              }
              
              currentTask.status = 'completed';
              batchStats.successCount++;
              completed++;
      
            } catch (error) {
              console.error(`分析论文 ${currentTask.paper.title} 的 ${currentTask.dimension} 维度时出错:`, error);
              
              // 收集错误信息
              batchStats.errors.push({
                paper: currentTask.paper.title,
                dimension: currentTask.dimension,
                error: error.message,
                responseTime: Date.now() - taskStartTime
              });
              
              // 调用进度回调报告错误
              if (onProgress) {
                onProgress(currentTask.paperIndex, currentTask.dimensionIndex, {
                  paperId: currentTask.paper.paperId,
                  dimension: currentTask.dimension,
                  result: `分析失败: ${error.message}`,
                  model: model
                });
              }
              
              currentTask.status = 'failed';
              batchStats.failedCount++;
              completed++;
            } finally {
              // 无论成功还是失败，都减少活动任务计数
              activeTasks--;
            }
          })(task);
        }
        
        queueIndex++;
      }
      
      // 短暂等待，避免CPU过载
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // 批量分析完成，记录统计日志
    const totalTime = Date.now() - batchStats.startTime;
    const averageResponseTime = Math.round(totalTime / batchStats.totalTasks);
    
    apiLogger.logBatchOperation(
      'analyzePaperDimension',
      batchStats.totalTasks,
      batchStats.successCount,
      batchStats.failedCount,
      averageResponseTime,
      batchStats.errors.map(e => `${e.paper}(${e.dimension}): ${e.error}`)
    );
    
  } finally {
    // 重置取消标志
    batchAnalyzePapers.cancel = null;
  }
};

// 添加取消方法
batchAnalyzePapers.cancel = null; 

/**
 * 使用AI优化搜索查询和筛选条件
 * @param {string} naturalLanguageQuery - 用户输入的自然语言查询
 * @param {string} model - 使用的AI模型，默认为gpt-4o
 * @returns {Promise<Object>} - 返回优化后的查询和筛选条件
 */
export const optimizeSearchQuery = async (naturalLanguageQuery, model = DEFAULT_MODEL) => {
  const startTime = Date.now();
  
  if (!naturalLanguageQuery || naturalLanguageQuery.trim() === '') {
    throw new Error('查询内容不能为空');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  const prompt = `
你是一个专业的学术论文搜索优化助手。请分析用户的自然语言查询，并将其转换为最优的学术搜索策略。

重要优化原则：
1. **语言优化**：无论用户输入什么语言，都要将核心学术术语和关键词翻译成英文，因为大多数学术数据库主要收录英文论文，使用英文关键词能获得更多更准确的搜索结果
2. **术语专业化**：将通俗词汇转换为标准的学术术语
3. **关键词提取**：提取最核心的技术术语和概念
4. **同义词扩展**：考虑相关的同义词和变体
5. **语言检测**：用户如果要求中文文献，则language字段建议定义"zh"以便在某些数据源中找到中文文献
6. **搜索类型识别**：识别用户是否在寻找综述类文章（review、survey、overview等关键词）
7. **研究领域识别**：准确识别用户搜索的研究领域，用于后续的精准服务

请以JSON格式返回，包含以下字段：
- query：优化后的英文搜索关键词（必须是英文，即使用户输入是其他语言）
- year：发表年份，格式为yyyy或yyyy-yyyy（如：2020、2020-2024）
- minCitationCount：最小引用数，数字（仅适用于支持的数据源）
- fieldsOfStudy：研究领域（如Computer Science, Medicine, Biology等，使用英文）
- venue：期刊或会议名称（可用于判断是否为综述类文章）
- openAccessPdf：是否仅显示开放获取论文，"true"、"false"或空字符串（仅适用于支持的数据源）
- sort：排序方式，可选值为"relevance"、"citationCount"或"publicationDate"（仅适用于支持的数据源）
- language：建议的搜索语言，默认"en"（英语），也可以是"zh"（中文）等
- searchType：搜索类型建议，如"academic"（学术文章）、"review"（综述文章）等
- researchDomain：研究领域标记，用于触发相关服务，可以是单个值或数组。支持以下固定值：
  * "computer_science" - 计算机科学相关
  * "medicine" - 医学相关
  * "biology" - 生物学相关
  * "chemistry" - 化学相关
  * "physics" - 物理学相关
  * "mathematics" - 数学相关
  * "engineering" - 工程学相关
  * "environmental_science" - 环境科学相关
  * "psychology" - 心理学相关
  * "economics" - 经济学相关
  * "education" - 教育学相关
  * "social_sciences" - 社会科学相关
  * "other" - 其他领域

  对于交叉学科研究，可以返回多个领域，例如：
  - "生物信息学" → ["biology", "computer_science"]
  - "医学影像" → ["medicine", "engineering"]
  - "计算化学" → ["chemistry", "computer_science"]
  - "环境经济学" → ["environmental_science", "economics"]

研究领域映射规则：
- 计算机科学相关：AI、机器学习、深度学习、自然语言处理、计算机视觉、软件工程、数据库、网络等
- 医学相关：疾病、药物、治疗、诊断、临床试验、疫苗、公共卫生等
- 生物学相关：基因、细胞、蛋白质、进化、生态、生物技术等
- 化学相关：分子、化合物、反应、催化剂、材料化学等
- 物理学相关：量子、粒子、光学、力学、电磁学等
- 数学相关：算法、统计、概率、几何、代数等
- 工程学相关：机械、电子、土木、材料、控制等
- 环境科学相关：气候变化、污染、可持续发展、生态保护等
- 心理学相关：认知、行为、心理治疗、神经科学等
- 经济学相关：金融、贸易、发展、政策、市场等
- 教育学相关：教学、学习、课程、评估、教育技术等
- 社会科学相关：社会学、政治学、人类学、传播学等

示例转换：
1. 用户输入："机器学习综述" → 
   {
     "query": "machine learning review",
     "language": "zh",
     "searchType": "review",
     "fieldsOfStudy": "Computer Science",
     "researchDomain": "computer_science"
   }

2. 用户输入："深度学习在医学图像分析中的应用，2020年以后" →
   {
     "query": "deep learning medical image analysis",
     "year": "2020-2024",
     "language": "zh",
     "fieldsOfStudy": "Computer Science",
     "searchType": "academic",
     "researchDomain": ["computer_science", "medicine"]
   }

3. 用户输入："COVID-19 vaccine effectiveness" →
   {
     "query": "COVID-19 vaccine effectiveness",
     "language": "en",
     "fieldsOfStudy": "Medicine",
     "searchType": "academic",
     "researchDomain": "medicine"
   }

4. 用户输入："CRISPR gene editing" →
   {
     "query": "CRISPR gene editing",
     "language": "en",
     "fieldsOfStudy": "Biology",
     "searchType": "academic",
     "researchDomain": "biology"
   }

5. 用户输入："生物信息学在药物发现中的应用" →
   {
     "query": "bioinformatics drug discovery",
     "language": "zh",
     "fieldsOfStudy": "Biology",
     "searchType": "academic",
     "researchDomain": ["biology", "computer_science"]
   }

6. 用户输入："环境经济学研究" →
   {
     "query": "environmental economics",
     "language": "zh",
     "fieldsOfStudy": "Economics",
     "searchType": "academic",
     "researchDomain": ["environmental_science", "economics"]
   }

用户查询：${naturalLanguageQuery}

注意：
1. query字段必须是英文，这样能搜索到更多学术论文
2. 如果某个字段无法从查询中提取，请将该字段留空或使用默认值
3. 返回的JSON必须是有效的JSON格式，键名和值都使用双引号
4. 确保不在JSON中添加其他描述或说明文字
5. researchDomain字段必须严格按照上述固定值返回，不能使用其他值
`;

  try {
    const response = await aiApi.post(AI_API_ENDPOINT, {
      model: model,
      messages: [
        {
          role: 'system',
          content: '你是一个专业的学术搜索优化助手，专门帮助研究人员将任何语言的查询转换为最优的英文学术搜索策略。你深知英文是学术界的通用语言，使用英文关键词能够搜索到更多高质量的学术论文。'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      stream: false,
      max_tokens: 500
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const result = response.data.choices[0].message.content;
      
      try {
        // 提取JSON部分并解析
        const jsonMatch = result.match(/\{[\s\S]*\}/);
        let parsedResult;
        if (jsonMatch) {
          const jsonString = jsonMatch[0];
          parsedResult = JSON.parse(jsonString);
        } else {
          // 如果找不到JSON，尝试直接解析整个响应
          parsedResult = JSON.parse(result);
        }
        
        // 记录成功日志
        const responseTime = Date.now() - startTime;
        apiLogger.logApiCall(
          'optimizeSearchQuery',
          'ai',
          true,
          responseTime,
          null,
          {
            originalQuery: naturalLanguageQuery,
            optimizedQuery: parsedResult.query,
            model,
            resultLength: result.length
          }
        );
        
        return parsedResult;
      } catch (parseError) {
        // 记录解析失败日志
        const responseTime = Date.now() - startTime;
        apiLogger.logApiCall(
          'optimizeSearchQuery',
          'ai',
          false,
          responseTime,
          `解析失败: ${parseError.message}`,
          {
            originalQuery: naturalLanguageQuery,
            model,
            rawResult: result
          }
        );
        
        console.error('无法解析AI返回的JSON:', parseError);
    
        throw new Error('无法解析AI返回的搜索参数');
      }
    } else {
      console.error('AI API返回格式不正确:', response.data);
      throw new Error('AI优化查询返回结果格式不正确');
    }
  } catch (error) {
    // 记录失败日志
    const responseTime = Date.now() - startTime;
    apiLogger.logApiCall(
      'optimizeSearchQuery',
      'ai',
      false,
      responseTime,
      error.message,
      {
        originalQuery: naturalLanguageQuery,
        model
      }
    );
    
    console.error(`AI优化查询失败 (模型: ${model}):`, error);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
    throw new Error(`AI优化查询失败: ${error.message}`);
  }
}; 

/**
 * 生成研究报告 - 分析多篇论文的研究趋势、分歧和创新机会（支持流式传输）
 * @param {Array} papers - 论文对象数组
 * @param {string} model - 使用的AI模型，默认为gpt-4o
 * @param {Function} onProgress - 进度回调函数，接收流式数据
 * @returns {Promise<string>} - 返回完整的研究报告
 */
export const generateResearchReport = async (papers, model = DEFAULT_MODEL, onProgress = null) => {
  if (!papers || papers.length === 0) {
    throw new Error('没有论文可供分析');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  // 构建论文信息摘要，包含 APA 引用格式
  const papersSummary = papers.map((paper, index) => {
    const authors = (paper.authors || []).map(a => a.name).join(', ');
    const year = paper.year || 'n.d.';
    const venue = paper.venue || 'Unknown venue';
    
    // 生成 APA 格式的引用
    const apaReference = `${authors} (${year}). ${paper.title}. ${venue}.`;
    
    return `[${index + 1}] ${apaReference}
   研究领域：${(paper.fieldsOfStudy || []).join(', ')}
   摘要：${paper.abstract || '无摘要'}
   引用数：${paper.citationCount || 0}`;
  }).join('\n\n');

  const prompt = `请基于以下学术论文，生成一份正式的学术研究报告。报告应采用标准的学术写作风格，在文中使用 APA 格式进行文献引用，并在文末提供完整的参考文献列表。

文献资料：
${papersSummary}

报告要求：

1. **学术写作规范**：
   - 使用正式的学术语言和客观的分析语调
   - 在文中引用文献时使用 APA 格式，如：(作者, 年份) 或 作者 (年份) 指出...
   - 每个观点都要有具体的文献支撑
   - 避免主观臆断，基于文献证据进行分析

2. **引用格式说明**：
   - 文中引用：使用编号 [1], [2] 等形式引用对应文献
   - 多篇文献：[1, 3, 5] 或 [1-3]
   - 具体页码：[1, p. 15] (如有)

3. **报告结构**：

## 摘要
简要概述研究领域现状、主要发现和结论建议（150-200字）

## 研究趋势分析
深入分析当前研究的主要趋势和发展方向：
- 主流研究方向和热点领域
- 方法学和技术路线的演进
- 研究重点的时间演变特征
- 新兴交叉领域的出现

## 研究分歧与学术争议
客观分析学术界在以下方面的不同观点和争议：
- 核心理论和概念的分歧
- 研究方法选择的争议
- 实验结果解释的不同观点
- 未来发展方向的学术辩论

## 研究空白与创新机会
基于文献分析识别的研究空白和潜在创新方向：
- 理论框架的完善空间
- 方法学创新的可能性
- 应用场景的拓展机会
- 跨学科合作的潜力

## 结论与建议
为学术界和实践者提供具体的研究建议：
- 优先发展的研究方向
- 需要重点关注的技术问题
- 推荐的研究合作模式
- 资源投入的战略建议

## 参考文献
按照 APA 格式列出所有引用的文献，按编号顺序排列。

写作要求：
- 总字数：1200-1800字
- 语言风格：正式、客观、严谨
- 每个段落都要有明确的文献支撑
- 结论要基于证据，避免过度推测
- 确保逻辑清晰，论证充分`;

  try {
    
    // 使用fetch API进行流式请求，因为axios在浏览器中不支持流式响应
    const response = await fetch(AI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: '你是一位资深的学术研究专家和科研写作专家，具有丰富的文献综述和研究报告撰写经验。你擅长：1) 严格按照学术写作规范撰写正式的研究报告；2) 正确使用 APA 引用格式进行文中引用和参考文献列表；3) 基于文献证据进行客观分析，避免主观臆断；4) 识别研究趋势、学术争议和创新机会；5) 为研究人员提供具有实际指导价值的建议。请确保生成的报告符合学术期刊的发表标准。'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: true,
        max_tokens: 2500
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullReport = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.trim() === '') continue;
          if (line.trim() === 'data: [DONE]') {
            return fullReport;
          }

          if (line.startsWith('data: ')) {
            const jsonStr = line.substring(6);
            try {
              const data = JSON.parse(jsonStr);
              if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                const content = data.choices[0].delta.content;
                fullReport += content;

                // 调用进度回调，实时更新UI
                if (onProgress) {
                  onProgress(content, fullReport);
                }
              }
            } catch (parseError) {
              console.warn('解析流式数据失败:', parseError);
            }
          }
        }
      }

      return fullReport;
    } finally {
      reader.releaseLock();
    }
    
  } catch (error) {
    console.error(`AI生成研究报告失败 (模型: ${model}):`, error);
    throw new Error(`AI生成研究报告失败: ${error.message}`);
  }
}; 

/**
 * 翻译论文内容（标题、摘要、AI摘要）为中文
 * @param {Object} paper - 论文对象
 * @param {string} model - 使用的AI模型，默认为gpt-4o-mini
 * @returns {Promise<Object>} - 返回翻译后的内容对象
 */
export const translatePaperContent = async (paper, model = DEFAULT_MODEL) => {
  if (!paper || !paper.title) {
    throw new Error('论文对象或标题不能为空');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  // 构建翻译内容
  let contentToTranslate = `标题：${paper.title}`;
  
  if (paper.abstract && paper.abstract.trim()) {
    contentToTranslate += `\n\n摘要：${paper.abstract}`;
  }
  
  if (paper.tldr && paper.tldr.text && paper.tldr.text.trim()) {
    contentToTranslate += `\n\nAI摘要：${paper.tldr.text}`;
  }

  const prompt = `请将以下英文学术论文内容翻译为中文，要求：
1. 翻译要准确、专业、符合中文学术表达习惯
2. 保持原文的学术性和专业性
3. 保持原有的格式结构
4. 如果包含专业术语，请使用标准的中文学术术语
5. 请按照以下格式返回翻译结果：

标题：[翻译后的标题]
摘要：[翻译后的摘要]
AI摘要：[翻译后的AI摘要]

如果某个部分在原文中不存在，请在对应位置返回"无"。

原文内容：
${contentToTranslate}`;

  try {
    
  
    
    const response = await aiApi.post(AI_API_ENDPOINT, {
      model: model,
      messages: [
        {
          role: 'system',
          content: '你是一个专业的学术翻译助手，擅长将英文学术论文内容准确翻译为中文。你熟悉各个学科的专业术语，能够提供准确、地道的中文翻译。'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      stream: false,
      max_tokens: 1000 // 增加token限制以支持更长的内容
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const translatedContent = response.data.choices[0].message.content.trim();
      
      // 解析翻译结果
      const result = {
        originalTitle: paper.title,
        translatedTitle: null,
        originalAbstract: paper.abstract || null,
        translatedAbstract: null,
        originalSnippet: paper.tldr?.text || null,
        translatedSnippet: null,
        model: model
      };
      
      // 使用正则表达式提取翻译内容
      const titleMatch = translatedContent.match(/标题：(.+?)(?=\n|$)/);
      if (titleMatch) {
        result.translatedTitle = titleMatch[1].trim();
      }
      
      const abstractMatch = translatedContent.match(/摘要：(.+?)(?=\nAI摘要：|$)/s);
      if (abstractMatch && abstractMatch[1].trim() !== '无') {
        result.translatedAbstract = abstractMatch[1].trim();
      }
      
      const snippetMatch = translatedContent.match(/AI摘要：(.+?)$/s);
      if (snippetMatch && snippetMatch[1].trim() !== '无') {
        result.translatedSnippet = snippetMatch[1].trim();
      }
      
      return result;
    } else {
      console.error('AI API返回格式不正确:', response.data);
      throw new Error('AI翻译返回结果格式不正确');
    }
  } catch (error) {
    console.error(`AI翻译失败 (模型: ${model}):`, error);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
    throw new Error(`AI翻译失败: ${error.message}`);
  }
};

/**
 * 翻译论文标题为中文（保持向后兼容）
 * @param {string} title - 论文标题（英文）
 * @param {string} model - 使用的AI模型，默认为gpt-4o-mini
 * @returns {Promise<string>} - 返回翻译后的中文标题
 */
export const translatePaperTitle = async (title, model = DEFAULT_MODEL) => {
  if (!title || title.trim() === '') {
    throw new Error('标题不能为空');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  const prompt = `请将以下英文学术论文标题翻译为中文，要求：
1. 翻译要准确、专业、符合中文学术表达习惯
2. 保持原文的学术性和专业性
3. 直接返回中文翻译结果，不要添加任何解释或说明
4. 如果包含专业术语，请使用标准的中文学术术语

英文标题：${title}`;

  try {
    
  
    
    const response = await aiApi.post(AI_API_ENDPOINT, {
      model: model,
      messages: [
        {
          role: 'system',
          content: '你是一个专业的学术翻译助手，擅长将英文学术论文标题准确翻译为中文。你熟悉各个学科的专业术语，能够提供准确、地道的中文翻译。'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      stream: false,
      max_tokens: 200 // 标题翻译不需要太多token
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content.trim();
    } else {
      console.error('AI API返回格式不正确:', response.data);
      throw new Error('AI翻译返回结果格式不正确');
    }
  } catch (error) {
    console.error(`AI翻译失败 (模型: ${model}):`, error);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
    throw new Error(`AI翻译失败: ${error.message}`);
  }
};

/**
 * 批量翻译多篇论文的完整内容
 * @param {Array} papers - 论文对象数组
 * @param {Function} onProgress - 进度回调函数
 * @param {string} model - 使用的AI模型，默认为gpt-4o-mini
 * @returns {Promise<void>}
 */
export const batchTranslatePapers = async (papers, onProgress, model = DEFAULT_MODEL) => {
  if (!papers || papers.length === 0) {
    throw new Error('没有论文可供翻译');
  }

  // 检查模型是否有效
  if (!Object.values(AI_MODELS).includes(model)) {
    console.warn(`未知的模型: ${model}，使用默认模型: ${DEFAULT_MODEL}`);
    model = DEFAULT_MODEL;
  }

  // 用于追踪是否已取消
  let isCancelled = false;

  // 设置取消标志的函数
  batchTranslatePapers.cancel = () => {
    isCancelled = true;

  };

  try {
    // 使用Promise.all进行并行处理，但限制并发数量
    const concurrencyLimit = 3; // 降低并发数，因为现在翻译内容更多
    let activeTasks = 0;
    let queueIndex = 0;
    let completed = 0;
    const totalTasks = papers.length;

    // 处理队列中的任务
    while (queueIndex < papers.length || activeTasks > 0) {
      // 如果已取消翻译，停止处理
      if (isCancelled) {
  
        break;
      }

      // 启动新任务，直到达到并发限制
      while (queueIndex < papers.length && activeTasks < concurrencyLimit) {
        const paper = papers[queueIndex];
        const paperIndex = queueIndex;
        
        activeTasks++;
        queueIndex++;
        
        // 使用立即执行的异步函数处理任务
        (async (currentPaper, currentIndex) => {
          try {
            // 如果已取消，不执行翻译
            if (isCancelled) return;
            
    
            const translationResult = await translatePaperContent(currentPaper, model);
            
            // 如果已取消，不返回结果
            if (isCancelled) return;
            
            // 调用进度回调
            if (onProgress) {
              onProgress(currentIndex, {
                paperId: currentPaper.paperId,
                ...translationResult
              });
            }
            
            completed++;
    
          } catch (error) {
            console.error(`翻译论文内容时出错 ${currentPaper.title}:`, error);
            
            // 调用进度回调报告错误
            if (onProgress) {
              onProgress(currentIndex, {
                paperId: currentPaper.paperId,
                originalTitle: currentPaper.title,
                translatedTitle: `翻译失败: ${error.message}`,
                originalAbstract: currentPaper.abstract || null,
                translatedAbstract: null,
                originalSnippet: currentPaper.tldr?.text || null,
                translatedSnippet: null,
                model: model,
                error: true
              });
            }
            
            completed++;
          } finally {
            // 无论成功还是失败，都减少活动任务计数
            activeTasks--;
          }
        })(paper, paperIndex);
      }
      
      // 短暂等待，避免CPU过载
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    
  } finally {
    // 重置取消标志
    batchTranslatePapers.cancel = null;
  }
};

// 添加取消方法
batchTranslatePapers.cancel = null; 