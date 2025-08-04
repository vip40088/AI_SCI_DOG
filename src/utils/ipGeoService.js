import axios from 'axios';

// IP地理位置缓存
const geoCache = new Map();

// IP地理位置解析服务
class IPGeoService {
  constructor() {
    this.cache = geoCache;
    this.requestQueue = new Map(); // 防止重复请求
  }

  // 获取IP地理位置信息
  async getIPLocation(ip) {
    // 检查缓存
    if (this.cache.has(ip)) {
      return this.cache.get(ip);
    }

    // 防止重复请求
    if (this.requestQueue.has(ip)) {
      return this.requestQueue.get(ip);
    }

    // 特殊IP处理
    if (!ip || ip === 'unknown' || ip === 'local_user') {
      const result = {
        country: '未知',
        region: '',
        city: '',
        displayText: '未知位置',
        flag: '🌍'
      };
      this.cache.set(ip, result);
      return result;
    }

    // 本地IP处理
    if (this.isLocalIP(ip)) {
      const result = {
        country: '本地',
        region: '',
        city: '',
        displayText: '本地网络',
        flag: '🏠'
      };
      this.cache.set(ip, result);
      return result;
    }

    // 创建请求Promise
    const requestPromise = this.fetchIPLocation(ip);
    this.requestQueue.set(ip, requestPromise);

    try {
      const result = await requestPromise;
      this.cache.set(ip, result);
      return result;
    } catch (error) {
      console.warn('IP地理位置解析失败:', ip, error.message);
      const fallbackResult = {
        country: '未知',
        region: '',
        city: '',
        displayText: '解析失败',
        flag: '❓'
      };
      this.cache.set(ip, fallbackResult);
      return fallbackResult;
    } finally {
      this.requestQueue.delete(ip);
    }
  }

  // 实际的IP地理位置请求
  async fetchIPLocation(ip) {
    // 尝试多个支持CORS的免费API
    const apis = [
      // IP地理位置API配置 - 支持多个IP地理位置服务提供商
      // 可对接: ipapi.co、ip.sb、ipgeolocation.io、ipinfo.io等IP地理位置服务
      
      // API 1: ipapi.co示例 (支持HTTPS和CORS)
      // 官方地址: https://ipapi.co/{ip}/json/
      {
        url: `https://api.example-ip-service-1.com/${ip}/json/`,
        parseResponse: (data) => ({
          country: data.country_name || '未知',
          region: data.region || '',
          city: data.city || '',
          displayText: this.formatDisplayText(data.country_name, data.region, data.city),
          flag: this.getCountryFlag(data.country_code)
        })
      },
      // API 2: ip.sb示例 (支持CORS)
      // 官方地址: https://api.ip.sb/geoip/{ip}
      {
        url: `https://api.example-ip-service-2.com/geoip/${ip}`,
        parseResponse: (data) => ({
          country: data.country || '未知',
          region: data.region || '',
          city: data.city || '',
          displayText: this.formatDisplayText(data.country, data.region, data.city),
          flag: this.getCountryFlag(data.country_code)
        })
      },
      // API 3: ipgeolocation.io示例 (免费层支持CORS)
      // 官方地址: https://api.ipgeolocation.io/ipgeo?apiKey=free&ip={ip}
      {
        url: `https://api.example-ip-service-3.com/ipgeo?apiKey=free&ip=${ip}`,
        parseResponse: (data) => ({
          country: data.country_name || '未知',
          region: data.state_prov || '',
          city: data.city || '',
          displayText: this.formatDisplayText(data.country_name, data.state_prov, data.city),
          flag: this.getCountryFlag(data.country_code2)
        })
      }
    ];

    for (let i = 0; i < apis.length; i++) {
      const api = apis[i];
      try {
        const response = await axios.get(api.url, {
          timeout: 5000,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = api.parseResponse(response.data);
        console.log(`IP地理位置解析成功 (API ${i + 1}):`, ip, result.displayText);
        return result;
      } catch (error) {
        console.warn(`IP地理位置API ${i + 1}失败:`, error.message);
        if (i === apis.length - 1) {
          throw new Error('所有IP地理位置API都失败');
        }
      }
    }
  }

  // 格式化显示文本
  formatDisplayText(country, region, city) {
    const parts = [];
    
    if (city && city !== region) parts.push(city);
    if (region && region !== country) parts.push(region);
    if (country) parts.push(country);
    
    return parts.length > 0 ? parts.join(', ') : '未知位置';
  }

  // 获取国家旗帜emoji
  getCountryFlag(countryCode) {
    if (!countryCode || countryCode.length !== 2) return '🌍';
    
    const flagMap = {
      'CN': '🇨🇳', 'US': '🇺🇸', 'JP': '🇯🇵', 'KR': '🇰🇷',
      'GB': '🇬🇧', 'DE': '🇩🇪', 'FR': '🇫🇷', 'CA': '🇨🇦',
      'AU': '🇦🇺', 'RU': '🇷🇺', 'IN': '🇮🇳', 'SG': '🇸🇬',
      'HK': '🇭🇰', 'TW': '🇹🇼', 'MY': '🇲🇾', 'TH': '🇹🇭'
    };

    return flagMap[countryCode.toUpperCase()] || this.convertToFlag(countryCode);
  }

  // 将国家代码转换为旗帜emoji
  convertToFlag(countryCode) {
    if (!countryCode || countryCode.length !== 2) return '🌍';
    
    try {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
      return String.fromCodePoint(...codePoints);
    } catch (error) {
      return '🌍';
    }
  }

  // 检查是否为本地IP
  isLocalIP(ip) {
    if (!ip) return false;
    
    const localPatterns = [
      /^127\./, // 127.x.x.x
      /^192\.168\./, // 192.168.x.x
      /^10\./, // 10.x.x.x
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // 172.16.x.x - 172.31.x.x
      /^::1$/, // IPv6 localhost
      /^fe80:/, // IPv6 link-local
      /^localhost$/i
    ];

    return localPatterns.some(pattern => pattern.test(ip));
  }

  // 清除缓存
  clearCache() {
    this.cache.clear();
  }

  // 获取缓存统计
  getCacheStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.entries())
    };
  }

  // 批量预加载IP地理位置
  async preloadIPs(ips) {
    const uniqueIPs = [...new Set(ips.filter(ip => ip && !this.cache.has(ip)))];
    
    if (uniqueIPs.length === 0) return;

    console.log(`预加载${uniqueIPs.length}个IP地理位置...`);
    
    // 分批处理，避免过多并发请求
    const batchSize = 5;
    for (let i = 0; i < uniqueIPs.length; i += batchSize) {
      const batch = uniqueIPs.slice(i, i + batchSize);
      await Promise.allSettled(
        batch.map(ip => this.getIPLocation(ip))
      );
      
      // 批次间稍作延迟，避免API限制
      if (i + batchSize < uniqueIPs.length) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
    
    console.log('IP地理位置预加载完成');
  }
}

// 创建全局单例
const ipGeoService = new IPGeoService();

export default ipGeoService;