# Node.js 和包管理

## 🎯 学习目标
- 理解Node.js在前端开发中的作用
- 掌握npm包管理器的使用
- 学会管理项目依赖

## 🔍 Node.js 概述

### 什么是Node.js？
Node.js就像前端开发的JVM，它让JavaScript可以在服务器端运行，同时也是前端工具链的基础。

```bash
# 类比理解
Java项目需要JVM    →  前端项目需要Node.js
Maven管理依赖      →  npm管理依赖
jar包             →  npm包
```

### Node.js的作用
1. **运行构建工具**: Vite, Webpack等
2. **包管理**: 安装和管理第三方库
3. **开发服务器**: 提供热重载功能
4. **代码转换**: TypeScript编译、代码压缩等

## 📦 npm - 包管理器

### 基本概念
npm (Node Package Manager) 类似Maven或Gradle，用于管理项目依赖。

```bash
# 查看npm版本
npm --version

# 查看Node.js版本
node --version

# 查看npm配置
npm config list
```

### package.json - 项目配置文件
类似于Maven的pom.xml或Gradle的build.gradle：

```json
{
  "name": "my-react-app",           // 项目名称
  "version": "1.0.0",               // 版本号
  "description": "My React App",    // 项目描述
  "main": "index.js",               // 入口文件
  "scripts": {                      // 脚本命令（类似Maven goals）
    "dev": "vite",                  // 开发服务器
    "build": "vite build",          // 构建生产版本
    "preview": "vite preview",      // 预览构建结果
    "test": "jest"                  // 运行测试
  },
  "dependencies": {                 // 生产依赖（类似compile scope）
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {             // 开发依赖（类似test scope）
    "@types/react": "^18.2.15",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

## 🛠 npm 常用命令

### 项目初始化
```bash
# 创建新项目（类似mvn archetype:generate）
npm init

# 快速创建（使用默认配置）
npm init -y

# 使用模板创建项目
npm create vite@latest my-app -- --template react-ts
```

### 依赖管理
```bash
# 安装所有依赖（类似mvn install）
npm install
# 或简写
npm i

# 安装生产依赖（类似compile scope）
npm install react
npm install react react-dom  # 安装多个包

# 安装开发依赖（类似test scope）
npm install -D typescript
npm install --save-dev @types/react

# 全局安装（类似系统级工具）
npm install -g create-react-app

# 安装特定版本
npm install react@18.2.0
npm install react@latest
```

### 依赖更新和删除
```bash
# 查看过期依赖
npm outdated

# 更新依赖
npm update
npm update react  # 更新特定包

# 删除依赖
npm uninstall react
npm uninstall -D typescript  # 删除开发依赖
```

### 脚本执行
```bash
# 运行package.json中定义的脚本
npm run dev      # 启动开发服务器
npm run build    # 构建项目
npm run test     # 运行测试

# 特殊脚本可以省略run
npm start        # 等同于 npm run start
npm test         # 等同于 npm run test
```

## 🔒 版本管理

### 语义化版本（SemVer）
```bash
# 版本格式：主版本.次版本.修订版本
"react": "18.2.0"
         ↑  ↑  ↑
      主版本 次版本 修订版本
```

### 版本范围符号
```json
{
  "dependencies": {
    "react": "18.2.0",      // 精确版本
    "react": "^18.2.0",     // 兼容版本（默认）
    "react": "~18.2.0",     // 近似版本
    "react": ">=18.0.0",    // 最小版本
    "react": "*"            // 任意版本（不推荐）
  }
}
```

### package-lock.json
类似Maven的dependency tree，锁定确切的依赖版本：

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "my-react-app",
      "version": "1.0.0",
      "dependencies": {
        "react": "^18.2.0"
      }
    },
    "node_modules/react": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
      "integrity": "sha512-...",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    }
  }
}
```

## 🌐 npm 注册表和配置

### 查看和设置注册表
```bash
# 查看当前注册表
npm config get registry

# 设置淘宝镜像（国内用户推荐）
npm config set registry https://registry.npmmirror.com

# 恢复官方注册表
npm config set registry https://registry.npmjs.org

# 临时使用不同注册表
npm install --registry https://registry.npmmirror.com
```

### 常用配置
```bash
# 设置代理（如果需要）
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# 设置缓存目录
npm config set cache /path/to/cache

# 查看所有配置
npm config list

# 删除配置
npm config delete proxy
```

## 📁 node_modules 目录

### 目录结构
```
node_modules/
├── react/                    # React库
│   ├── package.json         # 包信息
│   ├── index.js             # 入口文件
│   └── lib/                 # 库文件
├── react-dom/               # React DOM库
└── .bin/                    # 可执行文件
    ├── vite                 # Vite命令
    └── tsc                  # TypeScript编译器
```

### 重要说明
- **不要提交到版本控制**: 添加到.gitignore
- **可以删除重建**: 删除后运行npm install重新安装
- **占用空间大**: 可能包含数千个文件

```bash
# .gitignore 文件
node_modules/
npm-debug.log*
.npm
```

## 🔧 npm 脚本详解

### 自定义脚本
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist",
    "deploy": "npm run build && npm run upload"
  }
}
```

### 脚本钩子
```json
{
  "scripts": {
    "prebuild": "npm run clean",      // build前执行
    "build": "vite build",
    "postbuild": "npm run deploy",    // build后执行
    "pretest": "npm run lint",        // test前执行
    "test": "jest"
  }
}
```

### 传递参数
```bash
# 向脚本传递参数
npm run dev -- --port 3001
npm run build -- --mode production

# 在脚本中使用参数
{
  "scripts": {
    "dev": "vite --port $PORT"
  }
}
```

## 🚀 实践练习

### 1. 创建一个新项目
```bash
# 创建项目目录
mkdir my-npm-project
cd my-npm-project

# 初始化项目
npm init -y

# 安装依赖
npm install react react-dom
npm install -D typescript @types/react @types/react-dom

# 查看依赖
npm list
npm list --depth=0  # 只显示顶级依赖
```

### 2. 管理脚本
```json
{
  "scripts": {
    "start": "echo 'Starting application...'",
    "build": "echo 'Building application...'",
    "test": "echo 'Running tests...'",
    "clean": "echo 'Cleaning build files...'",
    "full-build": "npm run clean && npm run build"
  }
}
```

```bash
# 运行脚本
npm start
npm run build
npm run full-build
```

### 3. 依赖分析
```bash
# 查看依赖树
npm list

# 查看包信息
npm info react
npm info react versions --json  # 查看所有版本

# 查看安全漏洞
npm audit
npm audit fix  # 自动修复
```

## 🔍 常见问题解决

### 1. 依赖冲突
```bash
# 清除缓存
npm cache clean --force

# 删除node_modules重新安装
rm -rf node_modules package-lock.json
npm install
```

### 2. 权限问题
```bash
# 修改npm全局目录（避免使用sudo）
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# 添加到PATH（在~/.bashrc或~/.zshrc中）
export PATH=~/.npm-global/bin:$PATH
```

### 3. 网络问题
```bash
# 使用国内镜像
npm config set registry https://registry.npmmirror.com

# 增加超时时间
npm config set timeout 60000

# 使用代理
npm config set proxy http://proxy.server:port
```

## 📚 最佳实践

### 1. 版本管理
- 使用package-lock.json锁定版本
- 定期更新依赖
- 避免使用*版本

### 2. 安全性
- 定期运行npm audit
- 避免安装不必要的依赖
- 使用.npmrc管理配置

### 3. 性能优化
- 使用npm ci在CI/CD中
- 配置合适的镜像源
- 清理不用的依赖

## 🎯 小结

通过本节学习，你应该掌握：

1. ✅ Node.js和npm的基本概念
2. ✅ package.json的配置和管理
3. ✅ npm命令的使用
4. ✅ 依赖管理的最佳实践
5. ✅ 常见问题的解决方法

---

**下一步**: [Vite构建工具](./vite-setup.md)