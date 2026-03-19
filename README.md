# 🔥 爆款短剧漫剧监测系统

实时追踪和展示全网最热门的短剧和漫剧内容，帮助用户快速发现和追踪热门剧集。

## ✨ 功能特点

- 📊 **热度排行榜**：按全网热度实时排名短剧和漫剧
- 🔍 **智能搜索**：支持剧名、关键词模糊搜索
- 📅 **时间筛选**：支持 3/7/15/30 天时间范围筛选
- 🎭 **分类筛选**：可按短剧、漫剧类型筛选
- 📱 **响应式设计**：完美适配桌面和移动设备
- 🎬 **一键观看**：直接跳转到抖音平台观看热门视频

## 🚀 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **部署平台**：GitHub Pages

## 📦 安装和运行

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
npm run build
```

### 部署到 GitHub Pages

```bash
npm run deploy
```

## 📂 项目结构

```
src/
├── components/          # React 组件
│   ├── Header.tsx      # 头部组件
│   ├── FilterBar.tsx   # 筛选栏组件
│   ├── DramaGrid.tsx   # 剧集网格
│   ├── DramaCard.tsx   # 剧集卡片
│   └── DramaDetail.tsx # 详情弹窗
├── data/
│   └── mockData.ts     # Mock 数据
├── types/
│   └── drama.ts        # TypeScript 类型定义
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
```

## 🎨 界面预览

- 精美的紫色渐变背景
- 卡片式布局，支持 hover 动效
- 排名徽章（金银铜）
- 热度趋势指示器
- 响应式网格布局

## 📝 数据说明

当前使用 Mock 数据进行展示。如需接入真实数据，可以：

1. 创建后端 API 服务
2. 接入数据采集系统
3. 修改 `src/data/mockData.ts` 中的数据源

## 🔧 配置 GitHub Pages

1. 在 GitHub 创建新仓库：`Popular-short-drama-and-comic-series`
2. 推送代码到仓库
3. 运行部署命令：`npm run deploy`
4. 在仓库 Settings > Pages 中启用 GitHub Pages（选择 gh-pages 分支）

## 📄 License

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

---

Made with ❤️ by CodeBuddy
