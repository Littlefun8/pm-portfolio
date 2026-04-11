export const siteConfig = {
  name: "徐帆",
  nameEn: "XuFan",
  title: "AI PM / TPM 求职者",
  titleEn: "AI PM / TPM Candidate",
  description:
    "江西财经大学 2026 届软件工程本科生，目标岗位 AI 产品经理 / 技术产品经理，擅长 AI Native 工作流设计与产品闭环实践。",
  descriptionEn:
    "Software Engineering undergrad (Class of 2026) at JUFE. Aspiring AI Product Manager / Technical Product Manager with hands-on experience in AI-native workflow design and full product lifecycle.",
  accentColor: "#2563eb",
  social: {
    email: "xufun98@gmail.com",
    github: "https://github.com/Littlefun8",
    wechat: "/assets/wechat-qr-placeholder.png",
    resumeUrl: "/assets/resume-placeholder.pdf",
  },
  hero: {
    greeting: "你好，我是 徐帆",
    greetingEn: "Hi, I'm XuFan",
    identity: "软件工程 → AI PM / TPM",
    identityEn: "Software Engineering → AI PM / TPM",
    targetRole: "目标岗位：AI 产品经理 / 技术产品经理",
    targetRoleEn: "Target: AI Product Manager / Technical Product Manager",
    coreAbility:
      "核心能力：AI Native 工作流编排 × 产品全闭环思维 × 结构化问题拆解",
    coreAbilityEn:
      "Core: AI-Native Workflow Orchestration × Full Product Lifecycle × Structured Problem Decomposition",
    tagline: "Make products from an engineering perspective.",
  },
  whatIDo: {
    title: "我在做什么",
    titleEn: "What I Do",
    intro:
      "聚焦 AI PM / TPM 岗位所需的产品与技术交叉能力：从问题定义、方案编排到可落地交付。",
    introEn:
      "Focused on the product-engineering intersection for AI PM / TPM roles: from problem definition and solution orchestration to delivery.",
    capabilities: [
      {
        title: "AI Native 产品设计",
        titleEn: "AI-Native Product Design",
        description:
          "围绕真实场景拆解用户旅程，设计 AI 功能闭环（输入-处理-反馈-迭代），把模型能力转化为用户价值。",
        descriptionEn:
          "Deconstruct user journeys around real scenarios, design AI feature loops (input-process-feedback-iterate), and translate model capabilities into user value.",
      },
      {
        title: "多模型工作流编排",
        titleEn: "Multi-Model Workflow Orchestration",
        description:
          "基于 LangChain/LangGraph 设计 Tool Calling 流程，建立主链路 + 降级链路 + 可观测日志，提升稳定性。",
        descriptionEn:
          "Design Tool Calling flows with LangChain/LangGraph, build primary + fallback pipelines with observability logging for reliability.",
      },
      {
        title: "AI-Native 研发协作",
        titleEn: "AI-Native Development",
        description:
          "使用 Cursor + Claude Code 进行结构化 Prompt 驱动开发，结合 FSD/PRD 保持需求、实现与验收一致。",
        descriptionEn:
          "Structured Prompt-driven development with Cursor + Claude Code, maintaining alignment between requirements, implementation, and acceptance via FSD/PRD.",
      },
    ],
    techStack: [
      "LangChain",
      "LangGraph",
      "RAG",
      "FastAPI",
      "Spring Boot",
      "WeChat Mini Program",
      "Prompt Engineering",
      "Docker",
      "Cloudflare",
    ],
  },
  education: {
    school: "江西财经大学",
    schoolEn: "Jiangxi University of Finance and Economics",
    degree: "软件工程 本科（2022 — 2026）",
    degreeEn: "B.Eng. in Software Engineering (2022–2026)",
    highlights: [
      {
        zh: "加权平均成绩：93.02 | 专业排名：前 1%",
        en: "Weighted Average: 93.02 | Top 1% in major",
      },
      {
        zh: "核心课程：Python与人工智能进阶(98)、软件工程综合实训(98)、J2EE程序设计(98)、用户体验设计(90)",
        en: "Key Courses: Python & AI Advanced (98), Software Engineering Practicum (98), J2EE (98), UX Design (90)",
      },
      { zh: "通过 CET-6", en: "CET-6 Certified" },
    ],
    milestones: [
      {
        label: "竞赛荣誉",
        labelEn: "Awards",
        desc: "累计国家级 4 项、省级 3 项、校级 6 项 — 含服务外包创新大赛国赛三等奖、校学业奖学金(连续两年)",
        descEn:
          "4 national, 3 provincial, 6 university-level awards — including National 3rd Prize in Service Outsourcing Innovation Competition, Academic Scholarship (2 consecutive years)",
      },
      {
        label: "AI 实践",
        labelEn: "AI Practice",
        desc: "系统学习 LangChain Agent、RAG 架构、Prompt Engineering、n8n 工作流编排与多模态 API 集成",
        descEn:
          "Systematic study of LangChain Agent, RAG architecture, Prompt Engineering, n8n workflow orchestration, and multi-modal API integration",
      },
      {
        label: "内容影响力",
        labelEn: "Content Impact",
        desc: "校院团委公众号供稿，阅读量达账号平均值 2 倍以上，最高单篇 1.8 万",
        descEn:
          "Contributed to university media, reaching 2x average reads per post, with 18K peak views on a single article",
      },
    ],
  },
  caseStudies: [
    {
      id: "dear-li-hua",
      name: "DearLiHua",
      nameEn: "DearLiHua — AI English Essay Coach",
      tagline: "让高考英语作文批改从 5 分钟缩短到 30 秒，评分准确率 93%",
      taglineEn:
        "Cutting high-school essay grading from 5 minutes to 30 seconds with 93% scoring accuracy",
      tags: ["LangChain Agent", "WeChat Mini Program", "OCR", "RAG", "Prompt Engineering"],
      context: {
        summary:
          "面向高中英语教师的 AI 作文批改工具。通过 OCR 识别 + RAG 范文检索 + LLM 评分，实现从拍照到多层级批改报告的端到端自动化。覆盖 6 个功能模块、4Tab + 6 子页面的完整微信小程序 MVP。",
        summaryEn:
          "AI essay grading tool for high-school English teachers. End-to-end automation from photo to multi-level grading reports via OCR + RAG essay retrieval + LLM scoring. Complete WeChat Mini Program MVP with 4 tabs + 6 sub-pages.",
        problem:
          "核心痛点：单次批改耗时 5-10 分钟，一个班 50 人需 4-8 小时；反馈多为笼统评语，缺乏可操作的逐句改进建议。",
        problemEn:
          "Core pain point: Each essay takes 5–10 min to grade; a class of 50 requires 4–8 hours. Feedback is generic, lacking actionable sentence-level suggestions.",
        users: "目标用户：高中英语教师（减负提效）；次级用户：备战高考的高中生（获取精细化反馈）",
        usersEn:
          "Primary: High-school English teachers (efficiency); Secondary: Gaokao-bound students (detailed feedback)",
        stage:
          "阶段：已完成微信小程序 MVP 开发，基于 FastAPI 构建独立 AI 服务，Docker 容器化部署",
        stageEn:
          "Stage: MVP completed — WeChat Mini Program + FastAPI AI service, Docker-deployed",
      },
      decisions: [
        {
          title: "问题定义与产品拆解",
          titleEn: "Problem Definition & Decomposition",
          content:
            "通过教师访谈发现批改效率的核心瓶颈，将「AI 批改作文」拆解为 5 个 Agent 工具调用：OCR 识别 → RAG 范文检索 → LLM 评分 → 语法检查 → 句型改写。输出完整 PRD（含 6 个功能模块、数据结构、API 接口规范、UI 规范）。",
          contentEn:
            "Identified grading bottlenecks via teacher interviews. Decomposed \"AI essay grading\" into 5 Agent tool calls: OCR → RAG essay retrieval → LLM scoring → Grammar check → Sentence rewriting. Produced a complete PRD (6 modules, data schemas, API specs, UI guidelines).",
        },
        {
          title: "技术决策：LangChain Agent + LangGraph 状态机",
          titleEn: "Technical Decision: LangChain Agent + LangGraph State Machine",
          content:
            "设计基于 LangChain Tool-Calling Agent 的批改系统，用 LangGraph 构建 7 个状态节点的批改工作流，实现 OCR 置信度自动分支路由（< 0.7 自动降级）。Agent 自主决策工具调用顺序，替代硬编码流程，提升批改可靠性。",
          contentEn:
            "Designed a LangChain Tool-Calling Agent with a 7-node LangGraph state machine workflow. Implemented auto-branching on OCR confidence < 0.7. The Agent autonomously decides tool call order, replacing hardcoded pipelines for improved reliability.",
        },
        {
          title: "RAG 知识库 + Prompt 工程",
          titleEn: "RAG Knowledge Base + Prompt Engineering",
          content:
            "构建 30+ 篇高分范文向量知识库（Sentence-Transformers + ChromaDB），批改时自动注入 Top-3 相似范文作为评分锚点。Prompt 采用 CoT（先分析后评分）+ Few-shot（注入范文示例）+ 三维 Rubric（完整性/内容/语言），评分准确率达 93%。",
          contentEn:
            "Built a vector knowledge base of 30+ high-scoring essays (Sentence-Transformers + ChromaDB). Auto-injects Top-3 similar essays as scoring anchors. Prompt uses CoT + Few-shot + 3-dimension Rubric (Completeness/Content/Language), achieving 93% scoring accuracy.",
        },
      ],
      artifacts: [
        {
          type: "PRD",
          label: "PRD 文档",
          url: "#todo-dear-li-hua-prd",
          note: "待替换为飞书/GitHub 文档链接",
        },
        {
          type: "原型",
          label: "Axure 原型",
          url: "#todo-dear-li-hua-prototype",
          note: "待替换为 Axure Cloud 链接",
        },
        {
          type: "演示",
          label: "小程序演示",
          url: "#todo-dear-li-hua-demo",
          note: "待替换为小程序体验链接/前端可交互展示",
        },
      ],
    },
    {
      id: "jiangcai-referral",
      name: "酱菜内推系统",
      nameEn: "JiangCai Campus Referral System",
      tagline: "AI-Native 开发实践：用 Cursor + Claude Code 将原型到产品的效率提升 60%",
      taglineEn:
        "AI-Native dev practice: 60% efficiency boost from prototype to product with Cursor + Claude Code",
      tags: ["AI-Native Dev", "WeChat Mini Program", "Iteration", "Cursor", "Campus"],
      context: {
        summary:
          "针对校园内推信息散落微信群、匹配效率低的痛点，从 0 到 1 孵化校园内推系统。核心流程「校友发布 → 老师审核 → 学生申请」，采用 Cursor + Claude Code 的 AI 驱动开发工作流，验证了 AI-Native 开发在实际项目中的可行性。",
        summaryEn:
          "Incubated a campus referral system from 0 to 1 to address scattered WeChat group information. Core flow: \"Alumni post → Teacher endorse → Students apply.\" Validated AI-Native development workflow with Cursor + Claude Code.",
        problem:
          "核心痛点：内推信息在微信群中快速沉没，求职者需反复翻找；传统招聘平台信息不对称严重，校园场景缺乏垂直化解决方案。",
        problemEn:
          "Core pain point: Referral info sinks rapidly in WeChat groups; traditional platforms suffer from information asymmetry in campus scenarios.",
        users:
          "目标用户：有内推需求的在校生（求职方）；有内推名额的校友/在职员工（推荐方）",
        usersEn:
          "Primary: Students seeking referrals; Secondary: Alumni/employees with referral quotas",
        stage:
          "阶段：已完成核心功能开发（6 个页面），前端使用 mock 数据，云函数已编写",
        stageEn:
          "Stage: Core features built (6 pages), frontend using mock data, cloud functions implemented",
      },
      decisions: [
        {
          title: "产品定位：从通用招聘收束至校园内推",
          titleEn: "Positioning: Narrowing from General Recruitment to Campus Referrals",
          content:
            "调研发现传统招聘平台在校园场景中信息不对称严重。将产品范围从通用招聘收束至校园内推垂直场景，设计「校友发布 → 老师审核 → 学生申请」核心业务流程。增加岗位内推寄语、学生关联信息等差异化功能，突出校园社交信任链。",
          contentEn:
            "Research revealed severe information asymmetry in campus recruitment. Narrowed scope from general recruitment to campus referral vertical. Designed core flow with differentiated features (referral notes, student profiles) leveraging campus social trust.",
        },
        {
          title: "AI-Native 开发工作流",
          titleEn: "AI-Native Development Workflow",
          content:
            "以 Axure 高保真原型为输入，使用 Cursor + Claude Code 进行 AI 驱动开发。通过结构化 Prompt（LangGPT）和功能规格文档（FSD），采用「结构化输入 + 小步迭代 + 持续对齐」策略分模块实现前后端，开发效率提升约 60%。",
          contentEn:
            "Used Axure hi-fi prototypes as input for Cursor + Claude Code AI-driven development. Applied structured Prompts (LangGPT) + FSD documents with \"structured input + small iterations + continuous alignment\" strategy, achieving ~60% development efficiency boost.",
        },
        {
          title: "需求迭代与优先级",
          titleEn: "Requirement Iteration & Prioritization",
          content:
            "主导 3 轮需求迭代，基于用户反馈持续优化。初版聚焦核心发布-申请流程；V2 增加内推寄语和关联信息；V3 规划教师背书审核和数据统计。",
          contentEn:
            "Led 3 rounds of requirement iteration based on user feedback. V1: core post-apply flow; V2: referral notes + linked info; V3: teacher endorsement + analytics.",
        },
      ],
      artifacts: [
        {
          type: "PRD",
          label: "PRD 文档",
          url: "#todo-jiangcai-prd",
          note: "待替换为飞书/GitHub 文档链接",
        },
        {
          type: "原型",
          label: "Axure 原型",
          url: "#todo-jiangcai-prototype",
          note: "待替换为 Axure Cloud 链接",
        },
        {
          type: "代码",
          label: "GitHub 仓库",
          url: "https://github.com/Littlefun8?tab=repositories",
          note: "WeChat Mini Program source + Cloud Functions",
        },
      ],
    },
    {
      id: "easyfit-ai",
      name: "EasyFit-AI",
      nameEn: "EasyFit-AI — AI Orchestration Experiment",
      tagline: "多 API 协同编排：Gemini 图像理解 × Browser Use 商品提取 × 三层降级策略",
      taglineEn:
        "Multi-API orchestration: Gemini vision × Browser Use extraction × 3-tier fallback strategy",
      tags: ["AI Orchestration", "Spring Boot", "Gemini API", "Image Gen", "Browser Use"],
      context: {
        summary:
          "以「虚拟试衣」为场景的 AI 编排实验项目。集成 Google Gemini 多模态 API + Browser Use 自动化，实现三个独立 Tab 的功能链路。部署在 Hugging Face Spaces + Cloudflare Worker。",
        summaryEn:
          "AI orchestration experiment using virtual try-on as a scenario. Integrates Google Gemini multi-modal API + Browser Use automation across 3 independent tab workflows. Deployed on HF Spaces + Cloudflare Worker.",
        problem:
          "核心命题：如何让多个 AI API 在生产级链路中稳定协同？重点在编排逻辑与降级策略。",
        problemEn:
          "Core challenge: How to make multiple AI APIs cooperate reliably in a production pipeline? Focus on orchestration logic and fallback strategies.",
        users:
          "实验对象：电商虚拟试衣场景；深层目标：验证 AI 编排能力在多业务场景的可迁移性",
        usersEn:
          "Scenario: E-commerce virtual try-on; Deeper goal: Validate transferability of AI orchestration skills",
        stage:
          "阶段：核心三链路已跑通，在线可用 (api.littlefun8.me)，正在迭代降级策略",
        stageEn:
          "Stage: All 3 pipelines operational, live at api.littlefun8.me, iterating on fallback strategies",
      },
      decisions: [
        {
          title: "架构设计：三 Tab 独立链路 + 共享模型层",
          titleEn: "Architecture: 3 Independent Tab Pipelines + Shared Model Layer",
          content:
            "Tab 1（试穿提示词）和 Tab 3（背景分析）共享 Gemini 文生文服务；Tab 2（商品图提取）走双通道 — Gemini 图生图为主，Browser Use + 豆包为备选。",
          contentEn:
            "Tab 1 (try-on prompts) and Tab 3 (background analysis) share Gemini text-to-text service; Tab 2 (product extraction) uses dual channels — Gemini image-to-image primary, Browser Use + Doubao as fallback.",
        },
        {
          title: "三层降级策略",
          titleEn: "3-Tier Fallback Strategy",
          content:
            "主链路：Gemini 图生图（gemini-2.5-flash-image）。降级 1：主模型超时 > 5s，切换 gemini-3-pro-image-preview。降级 2：全部失败，返回占位图 + 提示用户重试。每层降级均记录日志。",
          contentEn:
            "Primary: Gemini image generation (gemini-2.5-flash-image). Fallback 1: On timeout > 5s, switch to gemini-3-pro-image-preview. Fallback 2: All failed → placeholder + retry prompt. Each tier logs degradation events.",
        },
        {
          title: "部署与稳定性实践",
          titleEn: "Deployment & Stability Practices",
          content:
            "Docker 容器化部署到 Hugging Face Spaces（端口 7860），通过 Cloudflare Worker 反代至 api.littlefun8.me。API 密钥通过 HF Secrets 环境变量注入，图片存储使用 Cloudflare R2。",
          contentEn:
            "Docker-deployed to Hugging Face Spaces (port 7860), reverse-proxied via Cloudflare Worker to api.littlefun8.me. API keys via HF Secrets env vars. Image storage on Cloudflare R2.",
        },
      ],
      artifacts: [
        {
          type: "在线",
          label: "在线演示",
          url: "https://api.littlefun8.me",
          note: "Live Demo",
        },
        {
          type: "代码",
          label: "GitHub 仓库",
          url: "https://github.com/Littlefun8?tab=repositories",
          note: "Spring Boot backend + Frontend",
        },
        {
          type: "文档",
          label: "设计文档",
          url: "#todo-easyfit-design-docs",
          note: "待替换为设计文档链接",
        },
      ],
    },
    {
      id: "n8n-ocr-workflow",
      name: "n8n OCR+评分自动化工作流",
      nameEn: "n8n OCR + Scoring Automated Workflow",
      tagline: "从文件上传到评分回写全流程自动化，单次批改从 5-10 分钟缩短至 30 秒内",
      taglineEn:
        "End-to-end automation from file upload to scoring write-back, cutting per-correction time from 5–10 min to under 30 sec",
      tags: ["n8n", "工作流编排", "OCR", "飞书多维表格", "数据工程"],
      context: {
        summary:
          "基于 n8n 搭建的 OCR + LLM 评分端到端自动化工作流。集成飞书多维表格、火山引擎视觉识别 API 和硅基流动评分 API，将文件上传 → 图像转码 → 文本识别 → LLM 评分 → 结果回写全流程自动化。",
        summaryEn:
          "End-to-end OCR + LLM scoring automated workflow built on n8n. Integrates Feishu Bitable, Volcano Engine Vision API, and SiliconFlow scoring API to automate the full pipeline: file upload → image transcoding → OCR → LLM scoring → result write-back.",
        problem:
          "核心痛点：DearLiHua 项目的批改流程需要人工触发多个步骤（上传图片 → 等待 OCR → 复制文本 → 调用评分 → 手动记录结果），效率瓶颈明显。",
        problemEn:
          "Core pain point: DearLiHua's grading flow required manually triggering multiple steps (upload → wait for OCR → copy text → call scoring → log results), creating a clear efficiency bottleneck.",
        users:
          "目标用户：高中英语教师（通过飞书多维表格批量提交作业，自动获取批改结果）",
        usersEn:
          "Primary: High-school English teachers (batch-submit essays via Feishu Bitable, auto-receive grading results)",
        stage:
          "阶段：工作流已跑通端到端流程，正在优化 OCR 识别噪声处理和数据字段映射",
        stageEn:
          "Stage: End-to-end pipeline operational, iterating on OCR noise handling and field mapping",
      },
      decisions: [
        {
          title: "工作流编排架构",
          titleEn: "Workflow Orchestration Architecture",
          content:
            "基于 n8n 搭建 5 阶段串行流水线：飞书触发器 → 文件下载 & 图像转码 → 火山引擎 OCR 识别 → 硅基流动 LLM 评分 → 结果回写飞书多维表格。每个阶段独立配置错误处理和超时策略。",
          contentEn:
            "Built a 5-stage sequential pipeline on n8n: Feishu trigger → file download & image transcoding → Volcano Engine OCR → SiliconFlow LLM scoring → write results back to Feishu Bitable. Each stage has independent error handling and timeout policies.",
        },
        {
          title: "数据工程：节点间数据清洗",
          titleEn: "Data Engineering: Inter-node Data Cleaning",
          content:
            "使用 Code 节点进行节点间数据清洗和格式转换，结合 Merge 节点实现多数据源合并，Aggregate/Filter 节点处理数据筛选。重点解决了 OCR 识别噪声（手写体误识别）和字段映射不一致等工程问题。",
          contentEn:
            "Used Code nodes for inter-node data cleaning and format conversion, Merge nodes for multi-source data consolidation, Aggregate/Filter nodes for data screening. Solved key engineering challenges including OCR noise from handwriting variations and inconsistent field mapping.",
        },
        {
          title: "集成策略：多 API 协同",
          titleEn: "Integration Strategy: Multi-API Coordination",
          content:
            "飞书多维表格作为数据入口和结果展示层，火山引擎提供 OCR 识别能力，硅基流动提供 LLM 评分能力。三个 API 通过 n8n 工作流串联，实现了零人工干预的自动化批改闭环。",
          contentEn:
            "Feishu Bitable as data entry and result display layer, Volcano Engine for OCR capability, SiliconFlow for LLM scoring. Three APIs chained via n8n workflow, achieving a zero-manual-intervention automated grading loop.",
        },
      ],
      artifacts: [
        {
          type: "代码",
          label: "n8n 工作流",
          url: "#todo-n8n-workflow-export",
          note: "待替换为 n8n 工作流导出 JSON / 截图",
        },
      ],
    },
  ],
  thinkingVault: {
    flashcards: [
      {
        id: "fc-1",
        title: "痛点颗粒度原则",
        titleEn: "Pain Point Granularity Principle",
        content:
          "好的产品痛点必须具体到「低效的那一刻」。「英语作文批改慢」不是痛点，「写完作文等 3 天才有反馈，第二天就忘了哪里不好」才是可操作的痛点。颗粒度越细，解决方案越精准。",
        contentEn:
          "A good pain point must be specific to \"the moment of inefficiency.\" \"Slow essay grading\" is vague; \"waiting 3 days for feedback and forgetting what to improve\" is actionable. The finer the granularity, the more precise the solution.",
        tags: ["产品方法论", "需求分析"],
        domain: "通用 PM",
      },
      {
        id: "fc-2",
        title: "RICE 优先级框架",
        titleEn: "RICE Prioritization Framework",
        content:
          "RICE = Reach（触达用户数）× Impact（影响深度，1-3 分）× Confidence（置信度，%）÷ Effort（工期，人周）。比纯直觉排优先级更可辩护，尤其在向上汇报时需要量化依据。注意：Confidence 是最容易被高估的维度。",
        contentEn:
          "RICE = Reach × Impact (1-3) × Confidence (%) ÷ Effort (person-weeks). More defensible than gut-feeling prioritization, especially for upward reporting. Note: Confidence is the most easily overestimated dimension.",
        tags: ["产品方法论", "优先级"],
        domain: "通用 PM",
      },
      {
        id: "fc-3",
        title: "AI 编排降级思维",
        titleEn: "AI Orchestration Fallback Thinking",
        content:
          "设计 AI 功能时，先问「如果这个 API 挂了怎么办？」降级路径设计应与主链路同等重要。一个没有降级策略的 AI 功能，是技术债，不是产品能力。",
        contentEn:
          "When designing AI features, first ask: \"What if this API goes down?\" Fallback path design should be as important as the primary pipeline. An AI feature without fallbacks is tech debt, not a product capability.",
        tags: ["AI 实践", "工作流设计", "稳定性"],
        domain: "AI 编排",
      },
      {
        id: "fc-4",
        title: "用户调研中的表层需求 vs 底层动机",
        titleEn: "Surface Needs vs. Underlying Motivation",
        content:
          "用户说「我想要一匹更快的马」，底层动机是「更快到达目的地」。方案应回应动机，而非字面需求。",
        contentEn:
          "When users say \"I want a faster horse,\" the underlying motivation is \"get to my destination faster.\" Solutions should address motivations, not literal requests.",
        tags: ["用户调研", "需求分析"],
        domain: "通用 PM",
      },
      {
        id: "fc-5",
        title: "Prompt 工程的迭代逻辑",
        titleEn: "Prompt Engineering Iteration Logic",
        content:
          "Prompt 不是一次性写好的，而是通过「失败案例 → 归因 → 修正约束」不断迭代的。每次迭代要记录：原始 Prompt、失败输出、根因假设、修正策略、验证结果。把 Prompt 当作代码管理。",
        contentEn:
          "Prompts are iteratively refined through \"failure → root cause → constraint fix.\" Each iteration should log: original prompt, failed output, hypothesis, fix, result. Treat prompts like code with version control.",
        tags: ["AI 实践", "Prompt 工程"],
        domain: "AI 编排",
      },
      {
        id: "fc-6",
        title: "最小可行产品 (MVP) 的边界判断",
        titleEn: "MVP Boundary Judgment",
        content:
          "MVP 不是「能跑的最小版本」，而是「能验证核心假设的最小版本」。关键问题：这个 MVP 能证伪/证实我们最重要的假设吗？如果不能，它就不是 MVP，只是一个 demo。",
        contentEn:
          "An MVP isn't \"the smallest working version\" — it's \"the smallest version that can validate your core hypothesis.\" Key question: Can this MVP falsify/confirm our most important assumption? If not, it's just a demo.",
        tags: ["产品方法论", "MVP"],
        domain: "通用 PM",
      },
    ],
    blogs: [
      {
        id: "blog-1",
        title: "DearLiHua 复盘：OCR + 大模型批改链路的三次迭代",
        titleEn:
          "DearLiHua Retrospective: Three Iterations of OCR + LLM Pipeline",
        date: "2024-Q4",
        tags: ["项目复盘", "AI 实践", "DearLiHua"],
        relatedCase: "dear-li-hua",
        summary:
          "记录 DearLiHua 从「纯文字输入」到「OCR 拍照批改」的三次关键迭代，重点还原每次迭代的触发原因、技术决策与 Prompt 调优过程。",
        summaryEn:
          "Documenting three key iterations of DearLiHua — from pure text input to OCR-based photo grading. Focus on triggers, technical decisions, and Prompt tuning at each stage.",
        content: [
          {
            section: "第一版：纯文字输入的失败",
            sectionEn: "V1: The Failure of Manual Text Input",
            text: "初版要求学生手动录入作文，上线后发现核心问题：没有学生愿意花 5-10 分钟打字，尤其是在手机端。留存率极低，第一天使用后大多数用户不再回来。根因：我们解决了「批改慢」，但忽略了「录入成本」这个更前置的摩擦点。",
            textEn:
              "V1 required students to manually type essays. The core problem: no student was willing to spend 5-10 minutes typing, especially on mobile. Retention was extremely low. Root cause: we solved \"slow grading\" but missed the \"input friction\" that came before it.",
          },
          {
            section: "第二版：引入 OCR 后的新问题",
            sectionEn: "V2: New Problems After Introducing OCR",
            text: "改为相机拍照 + OCR 识别后，使用门槛显著降低。但 OCR 识别准确率对手写字体差异敏感。解决方案：在 Prompt 中增加容错指令，聚焦语法结构与逻辑连贯性。效果：批改质量明显改善。",
            textEn:
              "After switching to camera + OCR, the usage barrier dropped significantly. But OCR accuracy was sensitive to handwriting variations. Fix: Added fault-tolerance instructions in the Prompt to focus on grammar and logic. Result: grading quality improved noticeably.",
          },
          {
            section: "第三版：结构化输出与分层展示",
            sectionEn: "V3: Structured Output & Layered Display",
            text: "第二版的批改结果以长文本形式输出，用户难以快速定位改进点。第三版改为结构化输出（JSON 格式），前端分层展示。下一步待验证：结构化反馈是否真正提升了学生的复盘行为。",
            textEn:
              "V2's long-text output made it hard for users to pinpoint improvements. V3 switched to structured JSON output with layered frontend display. Next to validate: whether structured feedback actually improves student review behavior.",
          },
        ],
      },
      {
        id: "blog-2",
        title: "AI 编排思维导论：从 EasyFit-AI 看多 API 协同设计",
        titleEn:
          "Introduction to AI Orchestration: Multi-API Coordination from EasyFit-AI",
        date: "2025-Q1",
        tags: ["AI 编排", "系统设计", "EasyFit-AI"],
        relatedCase: "easyfit-ai",
        summary:
          "以 EasyFit-AI 为案例，系统梳理 AI 编排的核心设计原则：链路可观测性、降级策略、重试机制与用户体验一致性。",
        summaryEn:
          "Using EasyFit-AI as a case study to systematically review core AI orchestration design principles: pipeline observability, fallback strategies, retry mechanisms, and UX consistency.",
        content: [
          {
            section: "为什么 AI 编排比单模型调用难 10 倍",
            sectionEn: "Why AI Orchestration is 10x Harder than Single Model Calls",
            text: "单模型调用：输入 → 输出，失败了报错就行。多模型编排：A 的输出是 B 的输入，B 的输出需要 C 校验，任何一环失败都可能雪崩。",
            textEn:
              "Single model: input → output, just report errors. Multi-model orchestration: A's output feeds B, B's output is validated by C — any failure can cascade.",
          },
          {
            section: "降级策略的设计原则",
            sectionEn: "Design Principles for Fallback Strategies",
            text: "核心原则：每一层降级都要让用户感知到「系统在努力」，而非突然失败。三层设计：(1) 主链路失败 → 静默切换备用 API；(2) 备用也失败 → 前端显示「正在重试」；(3) 全部失败 → 清晰告知用户。",
            textEn:
              "Core principle: each fallback tier should make users feel \"the system is trying,\" not suddenly fail. 3-tier design: (1) primary fails → silent switch to backup; (2) backup fails → show \"retrying\"; (3) all fail → clear user notification.",
          },
          {
            section: "可观测性：让编排链路对 PM 可见",
            sectionEn: "Observability: Making Orchestration Pipelines Visible to PMs",
            text: "AI 编排项目中，PM 应该能够自己看到：哪一层 API 调用失败率最高？降级触发的频率是多少？用户在哪一步流失？建议在编排链路中加入结构化日志。",
            textEn:
              "In AI orchestration projects, PMs should see: which API layer has the highest failure rate? How often are fallbacks triggered? Where do users drop off? Recommendation: add structured logging to the pipeline.",
          },
        ],
      },
    ],
  },
  metricsBar: [
    {
      value: "Top 1%",
      label: "专业排名",
      labelEn: "Major Ranking",
      source: "JUFE Software Engineering",
    },
    {
      value: "93%",
      label: "评分准确率",
      labelEn: "Scoring Accuracy",
      source: "DearLiHua",
    },
    {
      value: "60%",
      label: "开发效率提升",
      labelEn: "Dev Efficiency Boost",
      source: "AI-Native Dev",
    },
    {
      value: "4项",
      label: "国家级竞赛奖",
      labelEn: "National Awards",
      source: "累计获奖",
    },
  ],
  skillsMatrix: [
    {
      category: "产品方法",
      categoryEn: "Product Methods",
      skills: [
        "用户调研",
        "PRD",
        "竞品分析",
        "Axure 原型",
        "MVP 验证",
        "Scrum",
        "RICE",
      ],
    },
    {
      category: "AI / LLM",
      categoryEn: "AI / LLM",
      skills: [
        "LangChain Agent",
        "LangGraph",
        "RAG",
        "Prompt Engineering",
        "CoT / Few-shot",
        "n8n 工作流",
      ],
    },
    {
      category: "开发",
      categoryEn: "Development",
      skills: [
        "Python",
        "TypeScript",
        "FastAPI",
        "Spring Boot",
        "微信小程序",
        "Docker",
      ],
    },
    {
      category: "工具",
      categoryEn: "Tools",
      skills: [
        "Cursor",
        "Claude Code",
        "Dify",
        "Git",
        "ChromaDB",
        "Cloudflare",
      ],
    },
  ],
  contact: {
    note: "欢迎招聘官、产品同行和对 AI PM 感兴趣的朋友联系。",
    noteEn:
      "Open to connect with recruiters, product peers, and anyone interested in AI PM.",
    resumes: [
      {
        label: "AI 产品经理",
        labelEn: "AI Product Manager",
        url: "/assets/resume_ai_product_manager.md",
      },
      {
        label: "技术产品经理",
        labelEn: "Technical PM",
        url: "/assets/resume_tech_product_manager.md",
      },
    ],
  },
};
