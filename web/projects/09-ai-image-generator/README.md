# 项目9: AI图像生成器

## 🎯 项目目标

构建一个功能丰富的AI图像生成应用，学习AI API集成、图像处理、画廊管理和创意工具开发。

## 📋 功能需求

### 核心功能
1. **图像生成**
   - 文本到图像生成
   - 图像风格转换
   - 图像编辑和修复
   - 批量生成功能

2. **提示词管理**
   - 提示词编辑器
   - 提示词模板库
   - 智能提示词建议
   - 提示词历史记录

3. **图像管理**
   - 生成历史记录
   - 图像收藏功能
   - 分类和标签
   - 图像搜索

### 高级功能
1. **创意工具**
   - 图像变体生成
   - 局部重绘功能
   - 图像放大增强
   - 风格迁移

2. **社交功能**
   - 作品分享
   - 社区画廊
   - 点赞和评论
   - 创作者主页

3. **高级设置**
   - 生成参数调节
   - 模型选择
   - 质量设置
   - 批量处理

## 🛠 技术要求

### 必需技术栈
- **React 18** - 组件开发
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Zustand** - 状态管理
- **React Query** - 数据获取
- **Framer Motion** - 动画效果
- **React Hook Form** - 表单处理

### 推荐库
- **React Image Gallery** - 图像画廊
- **React Dropzone** - 文件上传
- **React Cropper** - 图像裁剪
- **Fabric.js** - 画布编辑
- **React Virtualized** - 虚拟滚动
- **React Hot Toast** - 消息提示

## 🏗 项目结构

```
src/
├── components/
│   ├── generator/
│   │   ├── PromptEditor.tsx
│   │   ├── GenerationPanel.tsx
│   │   ├── ParameterControls.tsx
│   │   ├── ModelSelector.tsx
│   │   └── BatchGenerator.tsx
│   ├── gallery/
│   │   ├── ImageGallery.tsx
│   │   ├── ImageCard.tsx
│   │   ├── ImageViewer.tsx
│   │   ├── ImageEditor.tsx
│   │   └── FilterPanel.tsx
│   ├── editor/
│   │   ├── CanvasEditor.tsx
│   │   ├── InpaintingTool.tsx
│   │   ├── CropTool.tsx
│   │   ├── StyleTransfer.tsx
│   │   └── UpscaleTool.tsx
│   ├── prompts/
│   │   ├── PromptLibrary.tsx
│   │   ├── PromptTemplate.tsx
│   │   ├── PromptSuggestions.tsx
│   │   └── PromptHistory.tsx
│   ├── social/
│   │   ├── CommunityGallery.tsx
│   │   ├── UserProfile.tsx
│   │   ├── ShareModal.tsx
│   │   └── CommentSection.tsx
│   └── common/
│       ├── Layout.tsx
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       ├── Loading.tsx
│       └── ErrorBoundary.tsx
├── hooks/
│   ├── useImageGeneration.ts
│   ├── useImageUpload.ts
│   ├── useImageEditor.ts
│   ├── usePrompts.ts
│   ├── useGallery.ts
│   └── useShare.ts
├── stores/
│   ├── generationStore.ts
│   ├── galleryStore.ts
│   ├── promptStore.ts
│   ├── editorStore.ts
│   └── userStore.ts
├── services/
│   ├── aiApi.ts
│   ├── imageApi.ts
│   ├── uploadApi.ts
│   ├── socialApi.ts
│   └── storage.ts
├── utils/
│   ├── imageProcessing.ts
│   ├── promptUtils.ts
│   ├── fileUtils.ts
│   ├── validation.ts
│   └── export.ts
├── types/
│   ├── generation.ts
│   ├── image.ts
│   ├── prompt.ts
│   ├── user.ts
│   └── api.ts
└── constants/
    ├── models.ts
    ├── styles.ts
    └── prompts.ts
```

## 📊 数据结构

### 图像生成
```typescript
interface GenerationRequest {
  prompt: string;
  negativePrompt?: string;
  model: string;
  style: string;
  width: number;
  height: number;
  steps: number;
  guidance: number;
  seed?: number;
  batchSize: number;
}

interface GeneratedImage {
  id: string;
  url: string;
  thumbnailUrl: string;
  prompt: string;
  negativePrompt?: string;
  parameters: GenerationParameters;
  createdAt: string;
  userId: string;
  isPublic: boolean;
  likes: number;
  downloads: number;
  tags: string[];
  collection?: string;
}

interface GenerationParameters {
  model: string;
  style: string;
  dimensions: { width: number; height: number };
  steps: number;
  guidance: number;
  seed: number;
  sampler: string;
}
```

### 提示词管理
```typescript
interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  prompt: string;
  negativePrompt?: string;
  category: string;
  tags: string[];
  isPublic: boolean;
  createdBy: string;
  usageCount: number;
  rating: number;
}

interface PromptSuggestion {
  text: string;
  category: 'style' | 'subject' | 'lighting' | 'composition' | 'quality';
  weight: number;
}

interface PromptHistory {
  id: string;
  prompt: string;
  timestamp: string;
  resultCount: number;
  success: boolean;
}
```

### 图像编辑
```typescript
interface EditOperation {
  id: string;
  type: 'inpaint' | 'outpaint' | 'upscale' | 'style_transfer' | 'variation';
  sourceImageId: string;
  resultImageId?: string;
  parameters: EditParameters;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
}

interface EditParameters {
  maskUrl?: string;
  prompt?: string;
  strength?: number;
  scale?: number;
  styleImageUrl?: string;
}

interface ImageCollection {
  id: string;
  name: string;
  description: string;
  images: string[];
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}
```

## 🎨 设计要求

### 视觉设计
1. **现代创意界面**
   - 清晰的工具布局
   - 直观的参数控制
   - 美观的图像展示

2. **响应式设计**
   - 桌面端多面板布局
   - 平板端自适应
   - 移动端优化

3. **主题支持**
   - 浅色/深色主题
   - 创意主题模式
   - 自定义配色

### 交互设计
1. **流畅的生成流程**
   - 实时参数预览
   - 生成进度指示
   - 批量操作支持

2. **直观的编辑工具**
   - 拖拽式操作
   - 实时预览
   - 撤销重做功能

3. **智能的提示系统**
   - 自动补全
   - 智能建议
   - 历史记录

## 🔧 实现步骤

### 第一阶段：基础架构 (2-3天)
1. **项目初始化**
   ```bash
   npm create vite@latest ai-image-generator -- --template react-ts
   cd ai-image-generator
   npm install
   ```

2. **安装依赖**
   ```bash
   npm install zustand @tanstack/react-query
   npm install tailwindcss @headlessui/react @heroicons/react
   npm install framer-motion react-hot-toast
   npm install react-hook-form @hookform/resolvers yup
   npm install react-image-gallery react-dropzone
   npm install fabric react-cropper
   npm install react-virtualized
   ```

3. **状态管理设计**
   ```typescript
   // src/stores/generationStore.ts
   import { create } from 'zustand';
   import { persist } from 'zustand/middleware';
   import { GenerationRequest, GeneratedImage } from '../types/generation';
   
   interface GenerationStore {
     currentRequest: Partial<GenerationRequest>;
     generatedImages: GeneratedImage[];
     isGenerating: boolean;
     progress: number;
     
     // 生成控制
     updateRequest: (updates: Partial<GenerationRequest>) => void;
     startGeneration: (request: GenerationRequest) => Promise<void>;
     cancelGeneration: () => void;
     
     // 图像管理
     addGeneratedImage: (image: GeneratedImage) => void;
     removeImage: (id: string) => void;
     toggleImageVisibility: (id: string) => void;
     
     // 批量操作
     generateBatch: (requests: GenerationRequest[]) => Promise<void>;
     exportImages: (ids: string[]) => void;
   }
   ```

### 第二阶段：核心生成功能 (3-4天)
1. **提示词编辑器**
   ```typescript
   // src/components/generator/PromptEditor.tsx
   import { useState, useRef, useEffect } from 'react';
   import { usePromptStore } from '../../stores/promptStore';
   import { PromptSuggestions } from '../prompts/PromptSuggestions';
   
   interface PromptEditorProps {
     value: string;
     onChange: (value: string) => void;
     placeholder?: string;
   }
   
   export const PromptEditor: React.FC<PromptEditorProps> = ({
     value,
     onChange,
     placeholder = "描述你想要生成的图像..."
   }) => {
     const [showSuggestions, setShowSuggestions] = useState(false);
     const [cursorPosition, setCursorPosition] = useState(0);
     const textareaRef = useRef<HTMLTextAreaElement>(null);
     const { getSuggestions, addToHistory } = usePromptStore();
     
     const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
       const newValue = e.target.value;
       onChange(newValue);
       setCursorPosition(e.target.selectionStart);
       
       // 显示建议
       if (newValue.length > 2) {
         setShowSuggestions(true);
       } else {
         setShowSuggestions(false);
       }
     };
     
     const handleSuggestionSelect = (suggestion: string) => {
       const textarea = textareaRef.current;
       if (!textarea) return;
       
       const beforeCursor = value.substring(0, cursorPosition);
       const afterCursor = value.substring(cursorPosition);
       const newValue = beforeCursor + suggestion + afterCursor;
       
       onChange(newValue);
       setShowSuggestions(false);
       
       // 设置光标位置
       setTimeout(() => {
         const newPosition = cursorPosition + suggestion.length;
         textarea.setSelectionRange(newPosition, newPosition);
         textarea.focus();
       }, 0);
     };
     
     const handleKeyDown = (e: React.KeyboardEvent) => {
       if (e.key === 'Tab' && showSuggestions) {
         e.preventDefault();
         // 处理Tab键选择建议
       }
       
       if (e.key === 'Enter' && e.ctrlKey) {
         e.preventDefault();
         // 触发生成
         addToHistory(value);
       }
     };
     
     return (
       <div className="relative">
         <textarea
           ref={textareaRef}
           value={value}
           onChange={handleInputChange}
           onKeyDown={handleKeyDown}
           placeholder={placeholder}
           className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
           style={{ minHeight: '120px' }}
         />
         
         {showSuggestions && (
           <PromptSuggestions
             query={value}
             onSelect={handleSuggestionSelect}
             onClose={() => setShowSuggestions(false)}
           />
         )}
         
         <div className="absolute bottom-2 right-2 text-xs text-gray-500">
           Ctrl+Enter 生成
         </div>
       </div>
     );
   };
   ```

2. **参数控制面板**
   ```typescript
   // src/components/generator/ParameterControls.tsx
   import { useForm, Controller } from 'react-hook-form';
   import { GenerationRequest } from '../../types/generation';
   import { MODELS, STYLES, ASPECT_RATIOS } from '../../constants/models';
   
   interface ParameterControlsProps {
     values: Partial<GenerationRequest>;
     onChange: (values: Partial<GenerationRequest>) => void;
   }
   
   export const ParameterControls: React.FC<ParameterControlsProps> = ({
     values,
     onChange
   }) => {
     const { control, watch } = useForm({
       defaultValues: values,
     });
     
     const watchedValues = watch();
     
     useEffect(() => {
       onChange(watchedValues);
     }, [watchedValues, onChange]);
     
     return (
       <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
         {/* 模型选择 */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             AI模型
           </label>
           <Controller
             name="model"
             control={control}
             render={({ field }) => (
               <select
                 {...field}
                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
               >
                 {MODELS.map((model) => (
                   <option key={model.id} value={model.id}>
                     {model.name}
                   </option>
                 ))}
               </select>
             )}
           />
         </div>
         
         {/* 风格选择 */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             艺术风格
           </label>
           <Controller
             name="style"
             control={control}
             render={({ field }) => (
               <div className="grid grid-cols-2 gap-2">
                 {STYLES.map((style) => (
                   <button
                     key={style.id}
                     type="button"
                     onClick={() => field.onChange(style.id)}
                     className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                       field.value === style.id
                         ? 'border-blue-500 bg-blue-50 text-blue-700'
                         : 'border-gray-200 hover:border-gray-300'
                     }`}
                   >
                     <div className="font-medium">{style.name}</div>
                     <div className="text-xs text-gray-500">{style.description}</div>
                   </button>
                 ))}
               </div>
             )}
           />
         </div>
         
         {/* 尺寸设置 */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             图像尺寸
           </label>
           <div className="grid grid-cols-3 gap-2">
             {ASPECT_RATIOS.map((ratio) => (
               <button
                 key={ratio.label}
                 type="button"
                 onClick={() => {
                   onChange({
                     width: ratio.width,
                     height: ratio.height,
                   });
                 }}
                 className="p-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
               >
                 {ratio.label}
                 <div className="text-xs text-gray-500">
                   {ratio.width}×{ratio.height}
                 </div>
               </button>
             ))}
           </div>
         </div>
         
         {/* 高级参数 */}
         <div className="space-y-4">
           <h3 className="text-sm font-medium text-gray-700">高级设置</h3>
           
           {/* 生成步数 */}
           <div>
             <label className="block text-sm text-gray-600 mb-1">
               生成步数: {watchedValues.steps}
             </label>
             <Controller
               name="steps"
               control={control}
               render={({ field }) => (
                 <input
                   type="range"
                   min="10"
                   max="100"
                   step="5"
                   {...field}
                   className="w-full"
                 />
               )}
             />
           </div>
           
           {/* 引导强度 */}
           <div>
             <label className="block text-sm text-gray-600 mb-1">
               引导强度: {watchedValues.guidance}
             </label>
             <Controller
               name="guidance"
               control={control}
               render={({ field }) => (
                 <input
                   type="range"
                   min="1"
                   max="20"
                   step="0.5"
                   {...field}
                   className="w-full"
                 />
               )}
             />
           </div>
           
           {/* 批量生成数量 */}
           <div>
             <label className="block text-sm text-gray-600 mb-1">
               生成数量
             </label>
             <Controller
               name="batchSize"
               control={control}
               render={({ field }) => (
                 <select
                   {...field}
                   className="w-full p-2 border border-gray-300 rounded-md"
                 >
                   <option value={1}>1张</option>
                   <option value={2}>2张</option>
                   <option value={4}>4张</option>
                   <option value={8}>8张</option>
                 </select>
               )}
             />
           </div>
         </div>
       </div>
     );
   };
   ```

### 第三阶段：图像管理和编辑 (3-4天)
1. **图像画廊组件**
2. **图像编辑工具**
3. **批量操作功能**
4. **收藏和分类系统**

### 第四阶段：高级功能 (2-3天)
1. **社交分享功能**
2. **提示词模板库**
3. **图像增强工具**
4. **数据导出功能**

## ✅ 完成标准

### 功能完成度 (40分)
- [ ] 基础图像生成功能 (12分)
- [ ] 提示词编辑和管理 (8分)
- [ ] 图像画廊和管理 (8分)
- [ ] 参数控制面板 (6分)
- [ ] 批量生成功能 (6分)

### 用户体验 (30分)
- [ ] 界面设计美观直观 (10分)
- [ ] 操作流程顺畅 (8分)
- [ ] 响应式设计良好 (7分)
- [ ] 加载和反馈及时 (5分)

### 技术实现 (20分)
- [ ] AI API集成正确 (8分)
- [ ] 图像处理功能 (6分)
- [ ] 状态管理合理 (6分)

### 代码质量 (10分)
- [ ] TypeScript使用规范 (4分)
- [ ] 组件设计合理 (3分)
- [ ] 错误处理完善 (3分)

## 🔍 Review检查清单

### 功能实现检查
- [ ] 图像生成功能正常
- [ ] 参数调节生效
- [ ] 提示词建议准确
- [ ] 图像管理完整
- [ ] 批量操作可用

### 性能优化检查
- [ ] 大图片加载优化
- [ ] 虚拟滚动实现
- [ ] 内存使用合理
- [ ] API调用优化

### 用户体验检查
- [ ] 生成进度清晰
- [ ] 错误处理友好
- [ ] 操作反馈及时
- [ ] 界面响应流畅

### 代码质量检查
- [ ] 组件职责明确
- [ ] 状态管理清晰
- [ ] 类型定义完整
- [ ] 错误边界处理

## 🚀 扩展挑战

### 高级AI功能
1. **多模态生成**
   - 图像到图像
   - 视频生成
   - 3D模型生成

2. **智能编辑**
   - AI自动修复
   - 智能抠图
   - 风格迁移

3. **创意工具**
   - 动画生成
   - 序列图像
   - 交互式编辑

### 技术优化
1. **本地处理**
   - WebGL加速
   - 本地AI模型
   - 离线功能

2. **云端集成**
   - 多平台API
   - 负载均衡
   - 缓存策略

## 📚 学习资源

### AI图像生成
- [Stable Diffusion文档](https://stability.ai/docs)
- [DALL-E API](https://platform.openai.com/docs/guides/images)
- [Midjourney指南](https://docs.midjourney.com/)

### 图像处理
- [Fabric.js文档](http://fabricjs.com/)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [WebGL基础](https://webglfundamentals.org/)

### 创意工具
- [Adobe Creative SDK](https://creativesdk.adobe.com/)
- [Figma Plugin API](https://www.figma.com/plugin-docs/)

---

**这个项目将帮助你掌握AI图像生成应用开发，包括AI API集成、图像处理和创意工具设计！**