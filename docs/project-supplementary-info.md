# 项目补充信息

> 本文件存储从对话中收集的项目补充信息，供后续完善 portfolio 参考。

---

## DearLiHua — AI 高中英语作文智能批改系统

### 基本信息
- **类型**: 微信小程序（WXML/WXSS/JS）
- **后端**: 微信云开发（云函数 + 云存储 + 云数据库）
- **AI 服务**: 多模型 OCR（Gemini 2.5 Flash）+ 火山引擎 Qwen3（评分）
- **当前状态**: 原型开发阶段，前端使用 mock 数据，云函数已编写但未接入前端

### 核心流程
新建作业 → 作业详情 → 批量上传(座次表) → 上传作答 → AI 批改 → 详细报告

### 关键页面
- 4 个 TabBar: 首页、作业、班级、我的
- 6 个子页面: create-assignment, assignment-detail, seat-select, answer, result, topic
- 座次表页是一站式设计: 选择学生 + 拍照/相册 + 批量批改 + 状态展示

### 技术架构要点
- 使用 glass-easel 微信新一代渲染引擎
- UI 库: TDesign Miniprogram v1.9.3
- ECharts for WeChat v1.0.2（已引入）
- 仅 utils/util.ts 使用 TypeScript，页面均为 JS

### 评分结果结构
- 层级 1: 综合评分（CSS 圆环仪表盘）
- 层级 2: 篇章结构分析
- 层级 3: 段落批注
- 层级 4: 逐句批改（折叠面板）
- 层级 5: 综合反馈（亮点/改进/建议）

---

## 酱菜内推系统 (Jiangcai Referral System)

### 基本信息
- **类型**: 微信小程序（原生开发，非 uni-app）
- **后端**: 微信云开发（云函数 Node.js + 云数据库 NoSQL）
- **核心功能**: 校友发布职位 → 教师背书审核 → 学生申请 → 简历快照流转 → 内推权益解锁

### 技术栈
| 层级 | 技术 |
|------|------|
| 前端框架 | 微信小程序原生（WXML/WXSS/JS） |
| 组件框架 | glass-easel |
| UI 库 | TDesign Miniprogram v1.9.3 |
| 后端 | 微信云开发 |

### 页面结构
- 6 个页面: job_list, application_progress, user_profile, job_detail, post_job, teacher_stats

### 关键约束
- 集合命名: users, companies, jobs, applications
- 字段命名: camelCase
- 前端目前全是 mock 数据

---

## EasyFit-AI — AI 智能试穿助手

### 基本信息
- **技术栈**: Java 20 + Spring Boot 3.2.0 + Google Gemini API (google-genai SDK 1.44.0) + browser-use 0.12.5 (Python 3.11.7)
- **端口**: 本地 8081 | HF 7860
- **线上地址**: https://api.littlefun8.me (HF Spaces + Cloudflare Worker 反代)

### 功能模块
- Tab 1: 试穿提示词生成 → POST /api/fit/generate-prompt（Gemini 文生文）
- Tab 2: 商品图提取（Gemini 图生图 + Browser Use → 豆包）
- Tab 3: 背景提示词提取 → POST /api/background/extract-prompt（Gemini 文生文）

### 关键技术
- Tab 1: Creative Director 风格自然语言 Prompt
- Tab 3: 11 维度极致详细背景分析
- 图生图: gemini-2.5-flash-image（主）+ gemini-3-pro-image-preview（降级）
- 认证: 共享团队密码 + 内存 token
- 图片存储: Cloudflare R2

### 部署架构
```
用户浏览器 → Cloudflare Worker (api.littlefun8.me)
           → Hugging Face Spaces (Docker, 端口 7860)
           → Google Gemini API (无代理)
```

---

## 宠物情感识别与分析系统

### 注意
此项目**不作为独立 case study** 展示。仅在竞赛/荣誉经历中体现创新创业能力（路演、项目管理、商业计划书等）。

### 相关竞赛成果
- 全国大学生生命科学竞赛创新创业类 — 国赛三等奖（2023）
- 中国机器人及人工智能大赛人工智能创新赛 — 国赛三等奖（2023）
