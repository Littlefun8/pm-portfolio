# AI PM / TPM 个人作品集 | Personal Portfolio

> 江西财经大学 2026 届软件工程本科生，目标岗位：AI 产品经理 / 技术产品经理（TPM）  
> 核心竞争力：AI Native 工作流编排 × 产品全闭环思维 × 结构化问题拆解

Built with **Astro** + **Tailwind CSS v4**.

---

## 网站定位 | Site Overview

本网站面向**招聘官/面试官（AI PM / TPM 方向）**，展示：
1. 从软件工程到 AI PM 的转型路径与核心能力
2. 三个产品案例（DearLiHua / 酱菜内推系统 / EasyFit-AI）的完整思维链路
3. 结构化产品方法论思考（Thinking Vault）

---

## 页面结构 | Site Structure

```
首页 Home         → #home          Hero + 三点速览 + CTA
教育与成果         → #education     JXUFE 学历 + 里程碑成果
案例 Case Studies → #case-studies  3 个案例（卡片 + 详情展开）
思考库 Vault      → #thinking-vault Flashcards + Blog
联系 Contact      → #contact        邮箱 / GitHub / LinkedIn / 微信
```

每个案例详情使用统一三层结构：
1. **Context**（概览：项目背景、痛点、用户、阶段）
2. **Decisions**（问题定义、关键决策、工作流逻辑）
3. **Artifacts**（PRD / 原型 / 分析文档 / Demo 链接）

---

## 内容配置 | Content Configuration

所有内容通过 `src/config.ts` 管理，修改该文件即可更新网站内容。无需修改组件代码。

```ts
// src/config.ts 结构：
siteConfig = {
  social: { email, linkedin, github, wechat, resumeUrl },
  education: { school, degree, highlights, milestones },
  caseStudies: [ { id, name, tagline, tags, context, decisions, artifacts } ],
  thinkingVault: { flashcards: [...], blogs: [...] },
  contact: { note, resumeUrl, resumeLabel },
}
```

---

## 占位素材替换指南 | Placeholder Replacement Guide

### 1. 个人信息
在 `src/config.ts` 中替换：
```ts
social: {
  email: "your-email@example.com",    // → 真实邮箱
  linkedin: "https://...",             // → 真实 LinkedIn URL
  github: "https://github.com/...",    // → 真实 GitHub URL
  resumeUrl: "/assets/resume.pdf",     // → 真实简历 PDF 路径
}
```

### 2. 微信二维码
将微信二维码图片放至 `/public/assets/wechat-qr.png`，然后在代码中（`Hero.astro` 和 `Contact.astro`）将占位框替换为：
```html
<img src="/assets/wechat-qr.png" alt="微信二维码" class="w-32 h-32" />
```

### 3. 简历 PDF
将简历 PDF 放至 `/public/assets/resume.pdf`，然后在 `src/config.ts` 更新：
```ts
resumeUrl: "/assets/resume.pdf",
```

### 4. 案例文档链接
在 `src/config.ts` 的各案例 `artifacts` 数组中替换 `url` 字段：
```ts
artifacts: [
  { type: "PRD", label: "PRD 文档", url: "https://...", note: "" },
  { type: "原型", label: "Axure 原型", url: "https://...", note: "" },
]
```

### 5. 教育成果/里程碑
在 `src/config.ts` 的 `education.milestones` 数组中替换占位描述：
```ts
milestones: [
  { label: "奖项名称", desc: "具体描述" },
]
```

### 6. 新增 Flashcard 或 Blog
在 `src/config.ts` 的 `thinkingVault.flashcards` 或 `thinkingVault.blogs` 数组中追加新条目，格式参照现有示例。

---

## 开发命令 | Development

```bash
npm install    # 安装依赖
npm run dev    # 本地开发服务器
npm run build  # 构建生产版本
npm run preview # 预览生产构建
```

---

## 技术栈 | Tech Stack

- **Astro** v5 — 静态站点生成
- **Tailwind CSS v4** — 样式框架（@tailwindcss/vite）
- **TypeScript** — 类型安全配置
- **IBM Plex Mono** — 字体（Google Fonts）

---

## 目录结构 | Directory Structure

```
src/
├── components/
│   ├── Header.astro       # 固定顶部导航（5个跳转锚点）
│   ├── Hero.astro         # 首页 Hero（三点速览 + CTA + 社交链接）
│   ├── Education.astro    # 教育与成果
│   ├── CaseStudies.astro  # 案例（卡片 + Context/Decisions/Artifacts）
│   ├── ThinkingVault.astro # 思考库（Flashcards + Blog）
│   ├── Contact.astro      # 联系页
│   └── Footer.astro       # 页脚
├── pages/
│   └── index.astro        # 主页面（组件装配）
├── styles/
│   └── global.css         # 全局样式
└── config.ts              # 所有内容配置（单一配置文件）

public/
└── assets/
    ├── resume-placeholder.pdf    # → 替换为真实简历
    └── wechat-qr-placeholder.png # → 替换为真实微信二维码
```
