# 项目1：个人名片组件 (⭐)

## 🎯 项目目标
创建一个可复用的个人名片组件，学习React组件开发的基础知识。

## 📋 功能需求

### 基础功能
- [ ] 显示个人头像（支持默认头像和自定义头像）
- [ ] 显示姓名、职位、公司信息
- [ ] 显示联系方式（邮箱、电话、地址）
- [ ] 显示社交媒体链接（GitHub、LinkedIn等）
- [ ] 支持明暗两种主题切换

### 交互功能
- [ ] 点击联系方式可以复制到剪贴板
- [ ] 点击社交媒体图标可以跳转到对应页面
- [ ] 鼠标悬停时有适当的视觉反馈
- [ ] 支持键盘导航（Tab键切换焦点）

### 响应式设计
- [ ] 在桌面端显示为横向布局
- [ ] 在移动端显示为纵向布局
- [ ] 适配不同屏幕尺寸

## 🛠 技术要求

### 必须使用的技术
- **React 18** + **TypeScript**
- **Tailwind CSS** 进行样式设计
- **React Hooks** (useState, useEffect)
- **自定义Hook** 实现主题切换

### 组件结构要求
```
PersonalCard/
├── index.tsx              # 主组件
├── types.ts              # TypeScript类型定义
├── hooks/
│   └── useTheme.ts       # 主题切换Hook
├── components/
│   ├── Avatar.tsx        # 头像组件
│   ├── ContactInfo.tsx   # 联系信息组件
│   └── SocialLinks.tsx   # 社交链接组件
└── utils/
    └── clipboard.ts      # 剪贴板工具函数
```

## 📊 数据结构设计

### PersonalInfo接口
```typescript
interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  avatar?: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
```

### Theme接口
```typescript
interface Theme {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
}
```

## 🎨 设计要求

### 视觉设计
- **卡片样式**：圆角、阴影、边框
- **颜色方案**：支持明暗主题
- **字体层级**：标题、副标题、正文的字体大小区分
- **图标使用**：使用Heroicons或Lucide React图标库

### 动画效果
- **悬停效果**：按钮和链接的hover状态
- **主题切换**：平滑的颜色过渡动画
- **加载状态**：头像加载时的占位符

## 📝 实现步骤

### Step 1: 项目搭建 (30分钟)
```bash
# 创建项目
cd /home/shiyongkang/learn/web/projects/01-personal-card
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
```

### Step 2: 类型定义 (15分钟)
- 创建 `types.ts` 文件
- 定义所有接口和类型

### Step 3: 基础组件开发 (60分钟)
- 实现 `Avatar` 组件
- 实现 `ContactInfo` 组件
- 实现 `SocialLinks` 组件

### Step 4: 主题系统 (45分钟)
- 实现 `useTheme` Hook
- 配置Tailwind CSS主题
- 添加主题切换功能

### Step 5: 主组件集成 (30分钟)
- 组合所有子组件
- 实现响应式布局
- 添加交互功能

### Step 6: 测试和优化 (30分钟)
- 测试所有功能
- 优化性能和用户体验
- 添加错误处理

## ✅ 完成标准

### 功能完整性检查
- [ ] 所有必需功能都已实现
- [ ] 响应式设计在不同设备上正常工作
- [ ] 主题切换功能正常
- [ ] 所有交互功能都有适当的反馈

### 代码质量检查
- [ ] TypeScript类型定义完整，无any类型
- [ ] 组件职责单一，可复用性强
- [ ] 代码遵循React最佳实践
- [ ] 有适当的错误边界处理

### 用户体验检查
- [ ] 界面美观，符合现代设计标准
- [ ] 交互流畅，无明显性能问题
- [ ] 支持键盘导航
- [ ] 有适当的加载和错误状态

## 🔍 Review清单

### 代码结构 (25分)
- [ ] 文件组织清晰合理 (5分)
- [ ] 组件拆分合理 (5分)
- [ ] TypeScript使用规范 (5分)
- [ ] 自定义Hook设计合理 (5分)
- [ ] 工具函数封装得当 (5分)

### 功能实现 (35分)
- [ ] 基础信息展示完整 (10分)
- [ ] 交互功能正常工作 (10分)
- [ ] 主题切换功能完善 (10分)
- [ ] 响应式设计实现 (5分)

### 代码质量 (25分)
- [ ] 代码规范性 (5分)
- [ ] 错误处理完善 (5分)
- [ ] 性能优化合理 (5分)
- [ ] 注释和文档完整 (5分)
- [ ] 可维护性强 (5分)

### 用户体验 (15分)
- [ ] 界面设计美观 (5分)
- [ ] 交互体验流畅 (5分)
- [ ] 可访问性支持 (5分)

**总分：100分，80分以上为合格**

## 🚀 扩展挑战

完成基础要求后，可以尝试以下扩展功能：

### 高级功能
- [ ] 支持多语言切换
- [ ] 添加二维码生成功能
- [ ] 支持名片导出为图片
- [ ] 添加动画效果库

### 技术挑战
- [ ] 使用CSS-in-JS方案重构样式
- [ ] 添加单元测试
- [ ] 实现无障碍访问优化
- [ ] 添加Storybook文档

## 📚 学习资源

### 官方文档
- [React官方文档](https://react.dev/)
- [TypeScript官方文档](https://www.typescriptlang.org/)
- [Tailwind CSS文档](https://tailwindcss.com/)

### 设计参考
- [Dribbble - Business Cards](https://dribbble.com/tags/business_card)
- [Behance - Profile Cards](https://www.behance.net/search/projects?search=profile%20card)

---

**下一个项目**: [计算器应用](../02-calculator/README.md)