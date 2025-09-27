# 项目3：待办事项列表 (⭐)

## 🎯 项目目标
开发一个功能完整的待办事项管理应用，学习列表操作、本地存储和状态管理。

## 📋 功能需求

### 基础功能
- [ ] 添加新的待办事项
- [ ] 标记事项为完成/未完成
- [ ] 编辑现有事项内容
- [ ] 删除单个事项
- [ ] 批量删除已完成事项
- [ ] 显示事项总数和完成数量

### 高级功能
- [ ] 事项优先级设置（高、中、低）
- [ ] 事项分类/标签系统
- [ ] 截止日期设置和提醒
- [ ] 事项搜索和过滤
- [ ] 拖拽排序功能
- [ ] 数据导入/导出

### 数据持久化
- [ ] 本地存储（localStorage）
- [ ] 数据备份和恢复
- [ ] 离线功能支持
- [ ] 数据同步状态显示

## 🛠 技术要求

### 必须使用的技术
- **React 18** + **TypeScript**
- **Tailwind CSS** + **Headless UI**
- **Zustand** 状态管理
- **React Hook Form** 表单处理
- **date-fns** 日期处理
- **React DnD** 拖拽功能

### 组件结构要求
```
TodoApp/
├── index.tsx                    # 主应用组件
├── types.ts                    # TypeScript类型定义
├── store/
│   ├── todoStore.ts            # Zustand状态管理
│   └── settingsStore.ts        # 设置状态管理
├── components/
│   ├── TodoForm.tsx            # 添加/编辑表单
│   ├── TodoList.tsx            # 事项列表
│   ├── TodoItem.tsx            # 单个事项
│   ├── TodoFilter.tsx          # 过滤器组件
│   ├── TodoStats.tsx           # 统计信息
│   └── TodoSearch.tsx          # 搜索组件
├── hooks/
│   ├── useTodos.ts             # 待办事项Hook
│   ├── useLocalStorage.ts      # 本地存储Hook
│   └── useDebounce.ts          # 防抖Hook
├── utils/
│   ├── storage.ts              # 存储工具
│   ├── dateUtils.ts            # 日期工具
│   └── validation.ts           # 验证工具
└── constants/
    ├── priorities.ts           # 优先级常量
    └── categories.ts           # 分类常量
```

## 📊 数据结构设计

### Todo接口
```typescript
interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

type Priority = 'low' | 'medium' | 'high';

interface Category {
  id: string;
  name: string;
  color: string;
  icon?: string;
}
```

### Store状态接口
```typescript
interface TodoStore {
  todos: Todo[];
  filter: FilterType;
  searchQuery: string;
  sortBy: SortType;
  
  // Actions
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: SortType) => void;
}

type FilterType = 'all' | 'active' | 'completed' | 'overdue';
type SortType = 'created' | 'updated' | 'priority' | 'dueDate' | 'alphabetical';
```

## 🎨 设计要求

### 视觉设计
- **布局**：左侧边栏（过滤器、统计）+ 主内容区
- **主题**：支持明暗主题切换
- **颜色系统**：优先级和分类的颜色编码
- **图标**：使用Heroicons或Lucide React

### 组件设计规范
```typescript
// 优先级颜色映射
const priorityColors = {
  low: 'text-green-600 bg-green-100',
  medium: 'text-yellow-600 bg-yellow-100',
  high: 'text-red-600 bg-red-100'
};

// 状态样式
const todoItemStyles = {
  completed: 'opacity-60 line-through',
  overdue: 'border-l-4 border-red-500',
  today: 'border-l-4 border-blue-500'
};
```

### 交互设计
- **拖拽排序**：支持事项重新排序
- **快捷键**：常用操作的键盘快捷键
- **批量操作**：多选和批量处理
- **即时反馈**：操作后的动画和提示

## 📝 实现步骤

### Step 1: 项目搭建 (30分钟)
```bash
# 创建项目
cd /home/shiyongkang/learn/web/projects/03-todo-list
npm create vite@latest . -- --template react-ts
npm install

# 安装依赖
npm install zustand react-hook-form @headlessui/react
npm install date-fns react-beautiful-dnd
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

npx tailwindcss init -p
```

### Step 2: 数据结构和状态管理 (45分钟)
- 定义TypeScript接口
- 设置Zustand store
- 实现本地存储逻辑

### Step 3: 基础组件开发 (90分钟)
- 实现TodoItem组件
- 创建TodoForm表单组件
- 开发TodoList列表组件

### Step 4: 高级功能实现 (120分钟)
- 添加搜索和过滤功能
- 实现拖拽排序
- 开发分类和标签系统
- 添加日期处理功能

### Step 5: 用户体验优化 (60分钟)
- 添加动画效果
- 实现快捷键支持
- 优化移动端体验
- 添加加载和错误状态

### Step 6: 数据持久化 (45分钟)
- 实现本地存储
- 添加数据备份功能
- 处理数据迁移
- 实现离线支持

## ✅ 完成标准

### 功能完整性检查
- [ ] 所有CRUD操作正常工作
- [ ] 搜索和过滤功能准确
- [ ] 拖拽排序流畅
- [ ] 数据持久化可靠
- [ ] 响应式设计适配

### 数据处理检查
```typescript
// 测试用例示例
const testScenarios = [
  {
    name: '添加新事项',
    action: () => addTodo({ title: 'Test Todo', priority: 'medium' }),
    expected: 'Todo added to list'
  },
  {
    name: '标记完成',
    action: () => toggleTodo('todo-id'),
    expected: 'Todo status toggled'
  },
  {
    name: '搜索功能',
    action: () => setSearchQuery('test'),
    expected: 'Filtered results shown'
  }
];
```

### 性能检查
- [ ] 大量数据时列表渲染流畅
- [ ] 搜索响应及时（防抖处理）
- [ ] 拖拽操作不卡顿
- [ ] 内存使用合理

## 🔍 Review清单

### 状态管理 (30分)
- [ ] Zustand使用规范 (10分)
- [ ] 状态结构设计合理 (10分)
- [ ] 数据流清晰 (5分)
- [ ] 副作用处理得当 (5分)

### 功能实现 (35分)
- [ ] CRUD操作完整 (15分)
- [ ] 搜索过滤准确 (10分)
- [ ] 拖拽功能流畅 (5分)
- [ ] 数据持久化可靠 (5分)

### 用户体验 (20分)
- [ ] 界面设计美观 (5分)
- [ ] 交互反馈及时 (5分)
- [ ] 响应式设计 (5分)
- [ ] 可访问性支持 (5分)

### 代码质量 (15分)
- [ ] 组件设计合理 (5分)
- [ ] 类型定义完整 (5分)
- [ ] 错误处理完善 (5分)

**总分：100分，80分以上为合格**

## 🚀 扩展挑战

### 高级功能
- [ ] 子任务支持（嵌套待办事项）
- [ ] 团队协作功能
- [ ] 时间追踪和统计
- [ ] 模板和快速添加

### 技术挑战
- [ ] 虚拟滚动优化大列表
- [ ] Web Workers处理复杂计算
- [ ] Service Worker离线支持
- [ ] 实时同步功能

### 集成功能
- [ ] 日历集成
- [ ] 邮件提醒
- [ ] 第三方服务集成
- [ ] API接口开发

## 📚 学习要点

### React高级概念
- **状态管理**: Zustand vs Redux
- **性能优化**: React.memo, useMemo, useCallback
- **自定义Hook**: 逻辑复用和封装
- **错误边界**: 错误处理和恢复

### 前端工程化
- **表单处理**: React Hook Form最佳实践
- **数据验证**: Zod或Yup集成
- **测试策略**: 单元测试和集成测试
- **性能监控**: 性能指标和优化

### 用户体验设计
- **交互设计**: 微交互和动画
- **可访问性**: ARIA标签和键盘导航
- **响应式设计**: 移动优先设计
- **加载状态**: 骨架屏和加载指示器

---

**下一个项目**: [天气查询应用](../04-weather-app/README.md)