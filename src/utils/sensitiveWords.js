// 敏感词检测工具
// 基于提供的敏感词清单进行前端校验

// 敏感词列表（从block.md整理）
const SENSITIVE_WORDS = [
  // 政治相关
  '习近平', 'xijinpin', 'Xi Jinping', 'Xi Ping', 'jinping', 'xijing', 'xi jinping',
  '韩正', '李强', '赵乐际', '主席', '丁薛祥', '马兴瑞', '王毅', '王沪宁', 
  '尹力', '石泰峰', '刘国中', '李希', '李干杰', '李书磊', '李鸿忠', 
  '何卫东', '何立峰', '张又侠', '张国清', '陈文清', '陈吉宁', '陈敏尔', 
  '袁家军', '黄坤明', '蔡奇',
  
  // 地区相关
  '疆独', '疆獨', '藏人', '藏毒', '藏独', '藏獨', '藏西', '西独', 
  
  // 组织相关
  '退党', '共奴', '法輪', '中珙', '共贼', '赤匪', '仇共', '共匪', 
  '共狗', '共铲', '共黨', '分裂', '反党', '反共', '反华',
  
  // 国家机构
  '中国', '中共', '中央'
];

// 敏感词正则表达式（支持模糊匹配）
const SENSITIVE_PATTERNS = [
  /习([\s\S]*?)平/g,
  /xijin([\s\S]*?)pin/gi,
  /Xi([\s\S]*?)ping/gi,
  /Xi([\s\S]*?)Jinping/gi,
];

/**
 * 检测文本中是否包含敏感词
 * @param {string} text - 要检测的文本
 * @returns {Object} - 检测结果 { hasSensitiveWords: boolean, matchedWords: string[] }
 */
export const detectSensitiveWords = (text) => {
  if (!text || typeof text !== 'string') {
    return { hasSensitiveWords: false, matchedWords: [] };
  }
  
  const matchedWords = new Set();
  const textLower = text.toLowerCase();
  
  // 检查精确匹配的敏感词
  SENSITIVE_WORDS.forEach(word => {
    if (textLower.includes(word.toLowerCase())) {
      matchedWords.add(word);
    }
  });
  
  // 检查正则模式匹配
  SENSITIVE_PATTERNS.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      matches.forEach(match => matchedWords.add(match));
    }
  });
  
  return {
    hasSensitiveWords: matchedWords.size > 0,
    matchedWords: Array.from(matchedWords)
  };
};

/**
 * 快速检测是否包含敏感词（仅返回布尔值）
 * @param {string} text - 要检测的文本
 * @returns {boolean} - 是否包含敏感词
 */
export const hasSensitiveWords = (text) => {
  return detectSensitiveWords(text).hasSensitiveWords;
};

/**
 * 清理敏感词（用星号替换）
 * @param {string} text - 要清理的文本
 * @returns {string} - 清理后的文本
 */
export const cleanSensitiveWords = (text) => {
  if (!text || typeof text !== 'string') {
    return text;
  }
  
  let cleanedText = text;
  
  // 替换精确匹配的敏感词
  SENSITIVE_WORDS.forEach(word => {
    const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    cleanedText = cleanedText.replace(regex, '*'.repeat(word.length));
  });
  
  // 替换正则模式匹配的敏感词
  SENSITIVE_PATTERNS.forEach(pattern => {
    cleanedText = cleanedText.replace(pattern, (match) => '*'.repeat(match.length));
  });
  
  return cleanedText;
};

// 兼容CommonJS导出（用于测试）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    detectSensitiveWords,
    hasSensitiveWords,
    cleanSensitiveWords
  };
} 