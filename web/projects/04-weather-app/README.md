# 项目4：天气查询应用 (⭐⭐)

## 🎯 项目目标
开发一个现代化的天气查询应用，学习API调用、异步数据处理和复杂UI组件开发。

## 📋 功能需求

### 核心功能
- [ ] 当前位置天气查询
- [ ] 城市搜索和天气查询
- [ ] 7天天气预报
- [ ] 24小时天气趋势
- [ ] 天气详细信息（湿度、风速、气压等）
- [ ] 地理位置自动获取

### 高级功能
- [ ] 多城市收藏和管理
- [ ] 天气预警和通知
- [ ] 历史天气数据查看
- [ ] 天气地图集成
- [ ] 空气质量指数显示
- [ ] 日出日落时间

### 用户体验功能
- [ ] 动态天气背景
- [ ] 天气图标动画
- [ ] 单位切换（摄氏度/华氏度）
- [ ] 主题切换（明暗模式）
- [ ] 离线数据缓存
- [ ] 下拉刷新功能

## 🛠 技术要求

### 必须使用的技术
- **React 18** + **TypeScript**
- **Tailwind CSS** + **Framer Motion**
- **React Query** 数据获取和缓存
- **Axios** HTTP客户端
- **Zustand** 全局状态管理
- **React Hook Form** 搜索表单

### API集成要求
- **OpenWeatherMap API** 天气数据
- **Geolocation API** 位置获取
- **Geocoding API** 地址转换

### 组件结构要求
```
WeatherApp/
├── index.tsx                     # 主应用组件
├── types.ts                     # TypeScript类型定义
├── api/
│   ├── weatherApi.ts            # 天气API封装
│   ├── geocodingApi.ts          # 地理编码API
│   └── types.ts                 # API类型定义
├── store/
│   ├── weatherStore.ts          # 天气状态管理
│   ├── settingsStore.ts         # 设置状态管理
│   └── favoritesStore.ts        # 收藏城市管理
├── components/
│   ├── WeatherCard.tsx          # 当前天气卡片
│   ├── ForecastList.tsx         # 预报列表
│   ├── HourlyChart.tsx          # 24小时趋势图
│   ├── WeatherDetails.tsx       # 详细信息
│   ├── CitySearch.tsx           # 城市搜索
│   ├── FavoritesList.tsx        # 收藏城市列表
│   └── WeatherMap.tsx           # 天气地图
├── hooks/
│   ├── useWeather.ts            # 天气数据Hook
│   ├── useGeolocation.ts        # 地理位置Hook
│   ├── useWeatherCache.ts       # 缓存管理Hook
│   └── useNotifications.ts      # 通知Hook
├── utils/
│   ├── weatherUtils.ts          # 天气工具函数
│   ├── dateUtils.ts             # 日期处理
│   ├── unitConverter.ts         # 单位转换
│   └── cache.ts                 # 缓存工具
└── constants/
    ├── weatherCodes.ts          # 天气代码映射
    └── animations.ts            # 动画配置
```

## 📊 数据结构设计

### Weather接口
```typescript
interface WeatherData {
  current: CurrentWeather;
  forecast: DailyForecast[];
  hourly: HourlyForecast[];
  location: LocationInfo;
  alerts?: WeatherAlert[];
}

interface CurrentWeather {
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  visibility: number;
  uvIndex: number;
  condition: WeatherCondition;
  icon: string;
  timestamp: Date;
}

interface DailyForecast {
  date: Date;
  high: number;
  low: number;
  condition: WeatherCondition;
  icon: string;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

interface HourlyForecast {
  time: Date;
  temperature: number;
  condition: WeatherCondition;
  icon: string;
  precipitation: number;
}
```

### Store状态接口
```typescript
interface WeatherStore {
  currentWeather: WeatherData | null;
  favorites: FavoriteCity[];
  selectedCity: string | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  
  // Actions
  fetchWeather: (location: string | Coordinates) => Promise<void>;
  addFavorite: (city: FavoriteCity) => void;
  removeFavorite: (cityId: string) => void;
  setSelectedCity: (cityId: string) => void;
  clearError: () => void;
}

interface FavoriteCity {
  id: string;
  name: string;
  country: string;
  coordinates: Coordinates;
  lastWeather?: CurrentWeather;
}
```

## 🎨 设计要求

### 视觉设计
- **动态背景**：根据天气条件和时间变化
- **卡片设计**：现代化的卡片布局
- **图表展示**：温度趋势和降水概率图表
- **响应式布局**：适配桌面、平板、手机

### 天气主题设计
```typescript
const weatherThemes = {
  sunny: {
    background: 'from-blue-400 to-blue-600',
    accent: 'text-yellow-400',
    card: 'bg-white/20 backdrop-blur-md'
  },
  cloudy: {
    background: 'from-gray-400 to-gray-600',
    accent: 'text-gray-200',
    card: 'bg-white/10 backdrop-blur-md'
  },
  rainy: {
    background: 'from-blue-800 to-gray-800',
    accent: 'text-blue-200',
    card: 'bg-white/15 backdrop-blur-md'
  },
  snowy: {
    background: 'from-blue-100 to-blue-300',
    accent: 'text-blue-800',
    card: 'bg-white/30 backdrop-blur-md'
  }
};
```

### 动画设计
- **加载动画**：天气图标旋转和脉冲效果
- **数据更新**：数字变化的计数动画
- **页面切换**：平滑的页面过渡
- **手势交互**：滑动和下拉刷新

## 📝 实现步骤

### Step 1: 项目搭建和API配置 (45分钟)
```bash
# 创建项目
cd /home/shiyongkang/learn/web/projects/04-weather-app
npm create vite@latest . -- --template react-ts
npm install

# 安装依赖
npm install @tanstack/react-query axios zustand
npm install framer-motion react-hook-form
npm install recharts  # 图表库
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

npx tailwindcss init -p
```

### Step 2: API集成和数据层 (90分钟)
- 注册OpenWeatherMap API
- 封装天气API调用
- 实现地理位置获取
- 设置React Query配置

### Step 3: 状态管理和数据流 (60分钟)
- 设置Zustand stores
- 实现数据缓存逻辑
- 处理错误状态管理
- 添加离线支持

### Step 4: 核心组件开发 (120分钟)
- 实现WeatherCard主卡片
- 开发ForecastList预报组件
- 创建HourlyChart趋势图
- 实现CitySearch搜索功能

### Step 5: 高级功能实现 (90分钟)
- 添加收藏城市功能
- 实现天气地图集成
- 开发通知和预警系统
- 添加单位转换功能

### Step 6: 用户体验优化 (75分钟)
- 实现动态背景和主题
- 添加动画和过渡效果
- 优化移动端体验
- 实现下拉刷新

## ✅ 完成标准

### 功能完整性检查
- [ ] 天气数据获取和显示正确
- [ ] 城市搜索功能正常
- [ ] 收藏功能完整
- [ ] 预报数据准确显示
- [ ] 地理位置获取正常

### API集成检查
```typescript
// API测试用例
const apiTests = [
  {
    name: '获取当前天气',
    endpoint: '/weather',
    params: { q: 'Beijing', appid: 'API_KEY' },
    expectedFields: ['main', 'weather', 'wind', 'sys']
  },
  {
    name: '获取预报数据',
    endpoint: '/forecast',
    params: { q: 'Beijing', appid: 'API_KEY' },
    expectedFields: ['list', 'city']
  }
];
```

### 性能检查
- [ ] API调用有适当的缓存
- [ ] 图片和图标懒加载
- [ ] 大数据集渲染优化
- [ ] 内存泄漏检查

## 🔍 Review清单

### API集成 (25分)
- [ ] API调用封装合理 (10分)
- [ ] 错误处理完善 (5分)
- [ ] 数据缓存策略 (5分)
- [ ] 请求优化 (5分)

### 数据处理 (25分)
- [ ] 数据结构设计 (10分)
- [ ] 状态管理逻辑 (10分)
- [ ] 异步处理 (5分)

### 用户界面 (30分)
- [ ] 界面设计美观 (10分)
- [ ] 响应式布局 (5分)
- [ ] 动画效果流畅 (5分)
- [ ] 图表展示清晰 (5分)
- [ ] 主题切换功能 (5分)

### 用户体验 (20分)
- [ ] 加载状态处理 (5分)
- [ ] 错误状态展示 (5分)
- [ ] 交互反馈及时 (5分)
- [ ] 离线功能支持 (5分)

**总分：100分，80分以上为合格**

## 🚀 扩展挑战

### 高级功能
- [ ] 天气预警推送通知
- [ ] 历史天气数据分析
- [ ] 天气相关的生活建议
- [ ] 多语言支持

### 技术挑战
- [ ] PWA功能实现
- [ ] WebGL天气动画
- [ ] 语音天气播报
- [ ] AR天气展示

### 数据可视化
- [ ] 交互式天气地图
- [ ] 3D天气模型
- [ ] 天气数据图表分析
- [ ] 气候趋势预测

## 📚 学习要点

### React Query概念
- **数据获取**: useQuery和useMutation
- **缓存策略**: staleTime和cacheTime
- **后台更新**: refetchOnWindowFocus
- **错误重试**: retry和retryDelay

### 异步编程
- **Promise处理**: async/await最佳实践
- **并发请求**: Promise.all和Promise.allSettled
- **错误边界**: 异步错误处理
- **取消请求**: AbortController使用

### 地理位置API
- **位置获取**: navigator.geolocation
- **权限处理**: 位置权限请求
- **精度控制**: 位置精度设置
- **错误处理**: 位置获取失败处理

---

**下一个项目**: [图片画廊](../05-image-gallery/README.md)