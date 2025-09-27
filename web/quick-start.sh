#!/bin/bash

# 前端学习环境快速搭建脚本
echo "🚀 开始搭建前端学习环境..."

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js未安装，请先安装Node.js"
    echo "推荐使用nvm安装："
    echo "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "source ~/.bashrc"
    echo "nvm install --lts"
    exit 1
fi

echo "✅ Node.js版本: $(node --version)"
echo "✅ npm版本: $(npm --version)"

# 设置npm镜像源（国内用户）
echo "🔧 配置npm镜像源..."
npm config set registry https://registry.npmmirror.com

# 创建第一个学习项目
echo "📦 创建第一个React项目..."
cd /home/shiyongkang/learn/web
npm create vite@latest first-react-app -- --template react-ts

# 进入项目目录
cd first-react-app

# 安装依赖
echo "📥 安装项目依赖..."
npm install

# 安装额外的学习依赖
echo "📥 安装学习所需的额外依赖..."
npm install react-router-dom zustand axios antd
npm install -D tailwindcss postcss autoprefixer

# 初始化Tailwind CSS
echo "🎨 配置Tailwind CSS..."
npx tailwindcss init -p

# 创建学习笔记目录
mkdir -p src/learning-notes
mkdir -p src/components/examples

# 创建学习进度文件
cat > learning-progress.md << 'EOF'
# 学习进度记录

## 第一阶段：基础认知 (Day 1-2)
- [ ] 前端生态概览
- [ ] 开发环境搭建
- [ ] 核心概念速览

## 第二阶段：现代工具链 (Day 3-5)
- [ ] Node.js和npm
- [ ] Vite构建工具
- [ ] TypeScript基础
- [ ] React基础

## 第三阶段：UI框架实战 (Day 6-9)
- [ ] Tailwind CSS
- [ ] Ant Design组件库
- [ ] 响应式设计
- [ ] 项目：个人博客

## 第四阶段：状态管理与路由 (Day 10-12)
- [ ] React Router
- [ ] Zustand状态管理
- [ ] 数据获取与缓存
- [ ] 项目：任务管理系统

## 第五阶段：实战项目 (Day 13-20)
- [ ] 全栈项目规划
- [ ] 前后端接口对接
- [ ] 部署与上线
- [ ] 项目：在线商城

## 学习笔记
记录每天的学习心得和遇到的问题...
EOF

echo "✅ 环境搭建完成！"
echo ""
echo "🎯 下一步操作："
echo "1. cd /home/shiyongkang/learn/web/first-react-app"
echo "2. npm run dev"
echo "3. 打开浏览器访问 http://localhost:5173"
echo ""
echo "📚 学习资源："
echo "- 主要教程: /home/shiyongkang/learn/web/README.md"
echo "- 学习路线: /home/shiyongkang/learn/web/learning-roadmap.md"
echo "- 示例项目: /home/shiyongkang/learn/web/demo-project/"
echo ""
echo "🚀 开始你的前端学习之旅吧！"