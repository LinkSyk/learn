# 前端学习示例项目

这是一个完整的React + TypeScript + Tailwind CSS示例项目，展示了现代前端开发的最佳实践。

## 🚀 快速开始

### 1. 安装依赖
```bash
cd demo-project
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
demo-project/
├── public/                 # 静态资源
├── src/                   # 源代码
│   ├── components/        # 可复用组件
│   ├── pages/            # 页面组件
│   ├── hooks/            # 自定义Hook
│   ├── store/            # 状态管理
│   ├── utils/            # 工具函数
│   ├── types/            # TypeScript类型定义
│   ├── App.tsx           # 主应用组件
│   └── main.tsx          # 应用入口
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript配置
├── tailwind.config.js    # Tailwind CSS配置
└── vite.config.ts        # Vite配置
```

## 🛠 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Ant Design** - 组件库
- **React Router** - 路由管理
- **Zustand** - 状态管理
- **Axios** - HTTP客户端

## 📚 学习要点

### 1. 组件化开发
- 函数组件和Hook的使用
- 组件间通信
- 组件复用

### 2. 状态管理
- 本地状态（useState）
- 全局状态（Zustand）
- 状态提升

### 3. 路由管理
- 页面路由配置
- 动态路由
- 路由守卫

### 4. 样式处理
- Tailwind CSS工具类
- 响应式设计
- 组件样式

### 5. 数据获取
- API调用
- 异步处理
- 错误处理

## 🎯 实践项目

这个示例包含以下功能模块：

1. **用户管理** - 展示CRUD操作
2. **产品列表** - 展示列表渲染和搜索
3. **购物车** - 展示状态管理
4. **个人中心** - 展示表单处理
5. **仪表板** - 展示数据可视化

每个模块都有详细的代码注释，帮助理解实现原理。