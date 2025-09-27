# 项目2：计算器应用 (⭐)

## 🎯 项目目标
开发一个功能完整的计算器应用，学习事件处理、状态管理和复杂逻辑处理。

## 📋 功能需求

### 基础计算功能
- [ ] 四则运算：加法(+)、减法(-)、乘法(×)、除法(÷)
- [ ] 小数点运算支持
- [ ] 等号(=)计算结果
- [ ] 清除功能：AC(全部清除)、C(清除当前输入)
- [ ] 退格功能：删除最后一位数字

### 高级计算功能
- [ ] 百分比计算(%)
- [ ] 正负号切换(+/-)
- [ ] 连续运算支持
- [ ] 运算优先级处理
- [ ] 科学计算：平方根(√)、平方(x²)、倒数(1/x)

### 用户体验功能
- [ ] 键盘输入支持
- [ ] 计算历史记录
- [ ] 错误处理（除零、溢出等）
- [ ] 动画反馈效果
- [ ] 音效反馈（可选）

## 🛠 技术要求

### 必须使用的技术
- **React 18** + **TypeScript**
- **Tailwind CSS** 进行样式设计
- **useReducer** 管理复杂状态
- **自定义Hook** 封装计算逻辑
- **Context API** 管理全局状态

### 组件结构要求
```
Calculator/
├── index.tsx                 # 主组件
├── types.ts                 # TypeScript类型定义
├── hooks/
│   ├── useCalculator.ts     # 计算器逻辑Hook
│   ├── useKeyboard.ts       # 键盘事件Hook
│   └── useHistory.ts        # 历史记录Hook
├── components/
│   ├── Display.tsx          # 显示屏组件
│   ├── ButtonGrid.tsx       # 按钮网格组件
│   ├── Button.tsx           # 单个按钮组件
│   └── History.tsx          # 历史记录组件
├── utils/
│   ├── calculator.ts        # 计算逻辑工具
│   ├── formatter.ts         # 数字格式化工具
│   └── validator.ts         # 输入验证工具
└── constants/
    └── buttons.ts           # 按钮配置常量
```

## 📊 数据结构设计

### CalculatorState接口
```typescript
interface CalculatorState {
  display: string;           // 当前显示的数字
  previousValue: number;     // 上一个操作数
  operation: Operation | null; // 当前操作符
  waitingForOperand: boolean; // 是否等待新的操作数
  history: HistoryItem[];    // 计算历史
}

type Operation = '+' | '-' | '×' | '÷' | '=' | '%' | '√' | 'x²' | '1/x';

interface HistoryItem {
  id: string;
  expression: string;
  result: string;
  timestamp: Date;
}
```

### Button配置接口
```typescript
interface ButtonConfig {
  id: string;
  label: string;
  type: 'number' | 'operator' | 'function' | 'clear';
  value: string;
  className?: string;
  colspan?: number;
}
```

## 🎨 设计要求

### 视觉设计
- **布局**：经典计算器网格布局（4×5或类似）
- **显示屏**：大字体，右对齐，支持长数字滚动
- **按钮**：不同类型按钮有不同颜色
- **主题**：支持多种主题（经典、现代、暗色等）

### 按钮设计规范
```typescript
const buttonStyles = {
  number: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  operator: 'bg-orange-500 hover:bg-orange-600 text-white',
  function: 'bg-gray-400 hover:bg-gray-500 text-white',
  clear: 'bg-red-500 hover:bg-red-600 text-white',
  equals: 'bg-orange-500 hover:bg-orange-600 text-white'
};
```

### 动画效果
- **按钮点击**：按下效果和涟漪动画
- **显示更新**：数字变化的淡入淡出效果
- **错误提示**：摇晃动画
- **历史记录**：滑入滑出动画

## 📝 实现步骤

### Step 1: 项目搭建 (20分钟)
```bash
# 创建项目
cd /home/shiyongkang/learn/web/projects/02-calculator
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion  # 动画库
npx tailwindcss init -p
```

### Step 2: 数据结构设计 (30分钟)
- 定义所有TypeScript接口
- 设计状态管理结构
- 配置按钮布局常量

### Step 3: 核心计算逻辑 (90分钟)
- 实现基础四则运算
- 处理小数点和特殊情况
- 实现高级计算功能
- 添加输入验证和错误处理

### Step 4: 状态管理 (60分钟)
- 使用useReducer管理计算器状态
- 实现状态更新逻辑
- 添加历史记录功能

### Step 5: UI组件开发 (90分钟)
- 实现Display显示组件
- 创建Button和ButtonGrid组件
- 添加History历史记录组件
- 实现响应式布局

### Step 6: 交互功能 (60分钟)
- 添加键盘输入支持
- 实现按钮点击效果
- 添加动画和音效
- 优化用户体验

### Step 7: 测试和优化 (45分钟)
- 测试各种计算场景
- 处理边界情况
- 性能优化
- 代码重构

## ✅ 完成标准

### 功能完整性检查
- [ ] 基础四则运算正确
- [ ] 高级计算功能正常
- [ ] 键盘输入响应正确
- [ ] 历史记录功能完整
- [ ] 错误处理机制完善

### 计算准确性检查
```typescript
// 测试用例示例
const testCases = [
  { input: '2+3', expected: '5' },
  { input: '10-5', expected: '5' },
  { input: '4×3', expected: '12' },
  { input: '15÷3', expected: '5' },
  { input: '0.1+0.2', expected: '0.3' },
  { input: '√16', expected: '4' },
  { input: '5²', expected: '25' },
  { input: '1÷0', expected: 'Error' }
];
```

### 代码质量检查
- [ ] 状态管理逻辑清晰
- [ ] 组件职责分离明确
- [ ] 错误边界处理完善
- [ ] 性能优化合理

## 🔍 Review清单

### 计算逻辑 (30分)
- [ ] 基础运算正确性 (10分)
- [ ] 高级功能实现 (10分)
- [ ] 边界情况处理 (5分)
- [ ] 错误处理机制 (5分)

### 状态管理 (25分)
- [ ] useReducer使用合理 (10分)
- [ ] 状态结构设计 (5分)
- [ ] 状态更新逻辑 (5分)
- [ ] 历史记录功能 (5分)

### 用户界面 (25分)
- [ ] 布局设计合理 (5分)
- [ ] 按钮样式美观 (5分)
- [ ] 响应式设计 (5分)
- [ ] 动画效果流畅 (5分)
- [ ] 可访问性支持 (5分)

### 交互体验 (20分)
- [ ] 键盘输入支持 (10分)
- [ ] 用户反馈及时 (5分)
- [ ] 操作流程顺畅 (5分)

**总分：100分，80分以上为合格**

## 🚀 扩展挑战

### 高级功能扩展
- [ ] 科学计算器模式（三角函数、对数等）
- [ ] 程序员计算器模式（二进制、十六进制）
- [ ] 单位转换功能
- [ ] 图形化计算历史

### 技术挑战
- [ ] 使用Web Workers处理复杂计算
- [ ] 实现自定义数字输入组件
- [ ] 添加语音输入功能
- [ ] 支持手势操作

### 性能优化
- [ ] 虚拟化长历史记录列表
- [ ] 计算结果缓存机制
- [ ] 按需加载高级功能
- [ ] 内存使用优化

## 📚 学习要点

### React概念
- **useReducer**: 复杂状态管理
- **useCallback**: 函数缓存优化
- **useMemo**: 计算结果缓存
- **自定义Hook**: 逻辑复用

### JavaScript概念
- **浮点数精度**: 处理0.1+0.2问题
- **事件处理**: 键盘和鼠标事件
- **正则表达式**: 输入验证
- **错误处理**: try-catch和边界情况

### 设计模式
- **状态机模式**: 计算器状态转换
- **命令模式**: 操作历史和撤销
- **策略模式**: 不同计算策略

---

**下一个项目**: [待办事项列表](../03-todo-list/README.md)