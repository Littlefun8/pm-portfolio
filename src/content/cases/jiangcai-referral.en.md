---
name: "酱菜内推系统"
nameEn: "JiangCai Campus Referral System"
tagline: "AI-Native 开发实践：用 Cursor + Claude Code 将原型到产品的效率提升 60%"
taglineEn: "AI-Native dev practice: 60% efficiency boost from prototype to product with Cursor + Claude Code"
tags: ["AI-Native Dev", "WeChat Mini Program", "Iteration", "Cursor", "Campus"]
lang: "en"
summary: "针对校园内推信息散落微信群、匹配效率低的痛点，从 0 到 1 孵化校园内推系统。核心流程「校友发布 → 老师审核 → 学生申请」，采用 Cursor + Claude Code 的 AI 驱动开发工作流，验证了 AI-Native 开发在实际项目中的可行性。"
summaryEn: "Incubated a campus referral system from 0 to 1 to address scattered WeChat group information. Core flow: \"Alumni post → Teacher endorse → Students apply.\" Validated AI-Native development workflow with Cursor + Claude Code."
problem: "核心痛点：内推信息在微信群中快速沉没，求职者需反复翻找；传统招聘平台信息不对称严重，校园场景缺乏垂直化解决方案。"
problemEn: "Core pain point: Referral info sinks rapidly in WeChat groups; traditional platforms suffer from information asymmetry in campus scenarios."
users: "目标用户：有内推需求的在校生（求职方）；有内推名额的校友/在职员工（推荐方）"
usersEn: "Primary: Students seeking referrals; Secondary: Alumni/employees with referral quotas"
stage: "阶段：已完成核心功能开发（6 个页面），前端使用 mock 数据，云函数已编写"
stageEn: "Stage: Core features built (6 pages), frontend using mock data, cloud functions implemented"
decisions:
  - title: "产品定位：从通用招聘收束至校园内推"
    titleEn: "Positioning: Narrowing from General Recruitment to Campus Referrals"
    content: "调研发现传统招聘平台在校园场景中信息不对称严重。将产品范围从通用招聘收束至校园内推垂直场景，设计「校友发布 → 老师审核 → 学生申请」核心业务流程。增加岗位内推寄语、学生关联信息等差异化功能，突出校园社交信任链。"
    contentEn: "Research revealed severe information asymmetry in campus recruitment. Narrowed scope from general recruitment to campus referral vertical. Designed core flow with differentiated features (referral notes, student profiles) leveraging campus social trust."
  - title: "AI-Native 开发工作流"
    titleEn: "AI-Native Development Workflow"
    content: "以 Axure 高保真原型为输入，使用 Cursor + Claude Code 进行 AI 驱动开发。通过结构化 Prompt（LangGPT）和功能规格文档（FSD），采用「结构化输入 + 小步迭代 + 持续对齐」策略分模块实现前后端，开发效率提升约 60%。"
    contentEn: "Used Axure hi-fi prototypes as input for Cursor + Claude Code AI-driven development. Applied structured Prompts (LangGPT) + FSD documents with \"structured input + small iterations + continuous alignment\" strategy, achieving ~60% development efficiency boost."
  - title: "需求迭代与优先级"
    titleEn: "Requirement Iteration & Prioritization"
    content: "主导 3 轮需求迭代，基于用户反馈持续优化。初版聚焦核心发布-申请流程；V2 增加内推寄语和关联信息；V3 规划教师背书审核和数据统计。"
    contentEn: "Led 3 rounds of requirement iteration based on user feedback. V1: core post-apply flow; V2: referral notes + linked info; V3: teacher endorsement + analytics."
artifacts:
  - type: "PRD"
    label: "PRD 文档"
    url: "#todo-jiangcai-prd"
    note: "待替换为飞书/GitHub 文档链接"
  - type: "原型"
    label: "Axure 原型"
    url: "#todo-jiangcai-prototype"
    note: "待替换为 Axure Cloud 链接"
  - type: "代码"
    label: "GitHub 仓库"
    url: "https://github.com/Littlefun8?tab=repositories"
    note: "WeChat Mini Program source + Cloud Functions"
---

## JiangCai Referral English content

Campus referral system incubated from 0 to 1. Full case details in frontmatter.
