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
    greeting: "你好，我是 Littlefun8",
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
  // Case Studies migrated to src/content/cases/ — managed via Content Collections
  // caseOrder is defined in CaseStudies.astro
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
  contact: {
    note: "欢迎招聘官、产品同行和对 AI PM 感兴趣的朋友联系。",
    noteEn:
      "Open to connect with recruiters, product peers, and anyone interested in AI PM.",
    resumeUrl: "/assets/resume-placeholder.pdf",
    resumeLabel: "下载简历 (PDF)",
    resumeLabelEn: "Download Resume (PDF)",
  },
};
