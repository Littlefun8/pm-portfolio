---
name: "EasyFit-AI"
nameEn: "EasyFit-AI — AI Orchestration Experiment"
tagline: "多 API 协同编排：Gemini 图像理解 × Browser Use 商品提取 × 三层降级策略"
taglineEn: "Multi-API orchestration: Gemini vision × Browser Use extraction × 3-tier fallback strategy"
tags: ["AI Orchestration", "Spring Boot", "Gemini API", "Image Gen", "Browser Use"]
lang: "zh"
summary: "以「虚拟试衣」为场景的 AI 编排实验项目。集成 Google Gemini 多模态 API + Browser Use 自动化，实现三个独立 Tab 的功能链路。部署在 Hugging Face Spaces + Cloudflare Worker。"
problem: "核心命题：如何让多个 AI API 在生产级链路中稳定协同？重点在编排逻辑与降级策略。"
users: "实验对象：电商虚拟试衣场景；深层目标：验证 AI 编排能力在多业务场景的可迁移性"
stage: "阶段：核心三链路已跑通，在线可用 (api.littlefun8.me)，正在迭代降级策略"
decisions:
  - title: "架构设计：三 Tab 独立链路 + 共享模型层"
    titleEn: "Architecture: 3 Independent Tab Pipelines + Shared Model Layer"
    content: "Tab 1（试穿提示词）和 Tab 3（背景分析）共享 Gemini 文生文服务；Tab 2（商品图提取）走双通道 — Gemini 图生图为主，Browser Use + 豆包为备选。"
    contentEn: "Tab 1 (try-on prompts) and Tab 3 (background analysis) share Gemini text-to-text service; Tab 2 (product extraction) uses dual channels — Gemini image-to-image primary, Browser Use + Doubao as fallback."
  - title: "三层降级策略"
    titleEn: "3-Tier Fallback Strategy"
    content: "主链路：Gemini 图生图（gemini-2.5-flash-image）。降级 1：主模型超时 > 5s，切换 gemini-3-pro-image-preview。降级 2：全部失败，返回占位图 + 提示用户重试。每层降级均记录日志。"
    contentEn: "Primary: Gemini image generation (gemini-2.5-flash-image). Fallback 1: On timeout > 5s, switch to gemini-3-pro-image-preview. Fallback 2: All failed → placeholder + retry prompt. Each tier logs degradation events."
  - title: "部署与稳定性实践"
    titleEn: "Deployment & Stability Practices"
    content: "Docker 容器化部署到 Hugging Face Spaces（端口 7860），通过 Cloudflare Worker 反代至 api.littlefun8.me。API 密钥通过 HF Secrets 环境变量注入，图片存储使用 Cloudflare R2。"
    contentEn: "Docker-deployed to Hugging Face Spaces (port 7860), reverse-proxied via Cloudflare Worker to api.littlefun8.me. API keys via HF Secrets env vars. Image storage on Cloudflare R2."
artifacts:
  - type: "在线"
    label: "在线演示"
    url: "https://api.littlefun8.me"
    note: "Live Demo"
  - type: "代码"
    label: "GitHub 仓库"
    url: "https://github.com/Littlefun8?tab=repositories"
    note: "Spring Boot backend + Frontend"
  - type: "文档"
    label: "设计文档"
    url: "#todo-easyfit-design-docs"
    note: "待替换为设计文档链接"
---

## EasyFit-AI 中文内容

AI 编排实验项目，虚拟试衣场景。完整案例详情已在 frontmatter 中描述。
