# 开发环境搭建

## 🛠 必备工具安装

### 1. Node.js 安装
Node.js是前端开发的基础运行环境，类似后端的JVM。

```bash
# 检查是否已安装
node --version
npm --version

# 如果未安装，推荐使用nvm管理Node.js版本
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# 安装最新LTS版本
nvm install --lts
nvm use --lts
```

### 2. VS Code 编辑器
推荐使用VS Code，它对前端开发支持最好。

```bash
# Ubuntu/Debian
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

### 3. 必备VS Code插件

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

## 🚀 创建第一个React项目

### 1. 使用Vite创建项目
Vite是现代化的构建工具，比传统的Create React App更快。

```bash
# 创建项目
npm create vite@latest my-first-react-app -- --template react-ts
cd my-first-react-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 2. 项目结构解析
```
my-first-react-app/
├── public/                 # 静态资源目录
│   └── vite.svg           # 网站图标
├── src/                   # 源代码目录
│   ├── assets/            # 资源文件
│   ├── App.tsx            # 主应用组件
│   ├── App.css            # 应用样式
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── index.html             # HTML模板
├── package.json           # 项目配置（类似pom.xml）
├── tsconfig.json          # TypeScript配置
└── vite.config.ts         # Vite构建配置
```

### 3. 理解package.json
```json
{
  "name": "my-first-react-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",              // 开发服务器
    "build": "tsc && vite build", // 构建生产版本
    "preview": "vite preview"    // 预览构建结果
  },
  "dependencies": {
    "react": "^18.2.0",         // React核心库
    "react-dom": "^18.2.0"      // React DOM操作库
  },
  "devDependencies": {
    "@types/react": "^18.2.15", // React类型定义
    "@vitejs/plugin-react": "^4.0.3", // Vite React插件
    "typescript": "^5.0.2",     // TypeScript编译器
    "vite": "^4.4.5"           // Vite构建工具
  }
}
```

## 🔧 开发工具配置

### 1. Prettier配置（代码格式化）
创建 `.prettierrc` 文件：
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### 2. ESLint配置（代码检查）
创建 `.eslintrc.js` 文件：
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

### 3. VS Code工作区配置
创建 `.vscode/settings.json`：
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

## 🌐 浏览器开发者工具

### 1. Chrome DevTools
- **Elements**: 查看和修改DOM结构
- **Console**: 调试JavaScript代码
- **Network**: 监控网络请求
- **Sources**: 断点调试
- **Application**: 查看本地存储

### 2. React Developer Tools
安装Chrome扩展：React Developer Tools

```bash
# 在Chrome扩展商店搜索并安装
# React Developer Tools
```

## 📦 包管理器对比

### npm vs yarn vs pnpm
```bash
# npm (Node.js自带)
npm install package-name
npm run dev

# yarn (Facebook开发，速度更快)
yarn add package-name
yarn dev

# pnpm (磁盘空间效率更高)
pnpm add package-name
pnpm dev
```

推荐使用npm，因为它是默认的，兼容性最好。

## 🔍 常用命令速查

### 项目管理
```bash
# 创建新项目
npm create vite@latest project-name -- --template react-ts

# 安装依赖
npm install

# 添加新依赖
npm install package-name

# 添加开发依赖
npm install -D package-name

# 移除依赖
npm uninstall package-name
```

### 开发命令
```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 运行测试
npm test

# 代码检查
npm run lint
```

## 🚨 常见问题解决

### 1. 端口被占用
```bash
# 查看端口占用
lsof -i :3000

# 杀死进程
kill -9 PID

# 或者使用不同端口
npm run dev -- --port 3001
```

### 2. 依赖安装失败
```bash
# 清除npm缓存
npm cache clean --force

# 删除node_modules重新安装
rm -rf node_modules package-lock.json
npm install
```

### 3. TypeScript错误
```bash
# 检查TypeScript配置
npx tsc --noEmit

# 重启TypeScript服务（VS Code）
Ctrl+Shift+P -> TypeScript: Restart TS Server
```

## 🎯 环境验证

创建一个简单的测试文件来验证环境：

```typescript
// src/test-environment.tsx
import React from 'react';

const TestEnvironment: React.FC = () => {
  const handleClick = () => {
    console.log('环境配置成功！');
    alert('恭喜！开发环境配置完成');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>前端开发环境测试</h1>
      <button onClick={handleClick}>
        点击测试
      </button>
      <p>如果能看到这个页面，说明React正常运行</p>
      <p>点击按钮后，控制台和弹窗都有反应，说明JavaScript正常工作</p>
    </div>
  );
};

export default TestEnvironment;
```

## 📚 下一步学习

环境搭建完成后，你应该能够：
1. ✅ 成功创建React项目
2. ✅ 启动开发服务器
3. ✅ 在浏览器中看到页面
4. ✅ 使用开发者工具调试
5. ✅ 代码格式化和检查正常工作

---

**下一步**: [核心概念速览](./core-concepts.md)