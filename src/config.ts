export const siteConfig = {
  name: "你好，我是 徐帆",
  nameEn: "Hi, I'm XuFan",
  title: "AI PM / TPM 求职者",
  titleEn: "AI PM / TPM Candidate",
  description:
    "江西财经大学 2026 届软件工程本科生，目标岗位 AI 产品经理 / 技术产品经理，擅长 AI Native 工作流设计与产品闭环实践。",
  accentColor: "#2563eb",
  social: {
    email: "xufun98@gmail.com",
    github: "https://github.com/Littlefun8",
    // 微信二维码图片路径，放于 public/assets/wechat-qr.png 后替换占位
    wechat: "/assets/wechat-qr-placeholder.png",
    // TODO: 替换为真实简历 PDF 链接
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
    capabilities: [
      {
        title: "AI Native 产品设计",
        description:
          "围绕真实场景拆解用户旅程，设计 AI 功能闭环（输入-处理-反馈-迭代），把模型能力转化为用户价值。",
      },
      {
        title: "多模型工作流编排",
        description:
          "基于 LangChain/LangGraph 设计 Tool Calling 流程，建立主链路 + 降级链路 + 可观测日志，提升稳定性。",
      },
      {
        title: "AI-Native 研发协作",
        description:
          "使用 Cursor + Claude Code 进行结构化 Prompt 驱动开发，结合 FSD/PRD 保持需求、实现与验收一致。",
      },
    ],
    techStack: [
      "LangChain",
      "LangGraph",
      "RAG",
      "FastAPI",
      "Spring Boot",
      "微信小程序",
      "Prompt Engineering",
      "Docker",
      "Cloudflare",
    ],
  },
  education: {
    school: "江西财经大学",
    schoolEn: "Jiangxi University of Finance and Economics",
    degree: "软件工程 本科（2022 — 2026）",
    degreeEn: "B.Eng. in Software Engineering",
    highlights: [
      "加权平均成绩：93.02 | 专业排名：前 1%",
      "核心课程：Python与人工智能进阶(98)、软件工程综合实训(98)、J2EE程序设计(98)、用户体验设计(90)",
      "通过 CET-6",
    ],
    milestones: [
      {
        label: "竞赛荣誉",
        desc: "累计国家级 4 项、省级 3 项、校级 6 项 — 含服务外包创新大赛国赛三等奖、校学业奖学金(连续两年)",
      },
      {
        label: "AI 实践",
        desc: "系统学习 LangChain Agent、RAG 架构、Prompt Engineering、n8n 工作流编排与多模态 API 集成",
      },
      {
        label: "内容影响力",
        desc: "校院团委公众号供稿，阅读量达账号平均值 2 倍以上，最高单篇 1.8 万",
      },
    ],
  },
  caseStudies: [
    {
      id: "dear-li-hua",
      name: "DearLiHua",
      nameEn: "DearLiHua — AI English Essay Coach",
      tagline: "让高考英语作文批改从 5 分钟缩短到 30 秒，评分准确率 93%",
      tags: ["LangChain Agent", "微信小程序", "OCR", "RAG", "Prompt 工程"],
      context: {
        summary:
          "面向高中英语教师的 AI 作文批改工具。通过 OCR 识别 + RAG 范文检索 + LLM 评分，实现从拍照到多层级批改报告的端到端自动化。覆盖 6 个功能模块、4Tab + 6 子页面的完整微信小程序 MVP。",
        problem:
          "核心痛点：单次批改耗时 5-10 分钟，一个班 50 人需 4-8 小时；反馈多为笼统评语，缺乏可操作的逐句改进建议。",
        users: "目标用户：高中英语教师（减负提效）；次级用户：备战高考的高中生（获取精细化反馈）",
        stage:
          "阶段：已完成微信小程序 MVP 开发，基于 FastAPI 构建独立 AI 服务，Docker 容器化部署",
      },
      decisions: [
        {
          title: "问题定义与产品拆解",
          content:
            "通过教师访谈发现批改效率的核心瓶颈，将「AI 批改作文」拆解为 5 个 Agent 工具调用：OCR 识别 → RAG 范文检索 → LLM 评分 → 语法检查 → 句型改写。输出完整 PRD（含 6 个功能模块、数据结构、API 接口规范、UI 规范）。",
        },
        {
          title: "技术决策：LangChain Agent + LangGraph 状态机",
          content:
            "设计基于 LangChain Tool-Calling Agent 的批改系统，用 LangGraph 构建 7 个状态节点的批改工作流，实现 OCR 置信度自动分支路由（< 0.7 自动降级）。Agent 自主决策工具调用顺序，替代硬编码流程，提升批改可靠性。",
        },
        {
          title: "RAG 知识库 + Prompt 工程",
          content:
            "构建 30+ 篇高分范文向量知识库（Sentence-Transformers + ChromaDB），批改时自动注入 Top-3 相似范文作为评分锚点。Prompt 采用 CoT（先分析后评分）+ Few-shot（注入范文示例）+ 三维 Rubric（完整性/内容/语言），评分准确率达 93%。",
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
      tags: ["AI-Native 开发", "微信小程序", "需求迭代", "Cursor", "校园场景"],
      context: {
        summary:
          "针对校园内推信息散落微信群、匹配效率低的痛点，从 0 到 1 孵化校园内推系统。核心流程「校友发布 → 老师审核 → 学生申请」，采用 Cursor + Claude Code 的 AI 驱动开发工作流，验证了 AI-Native 开发在实际项目中的可行性。",
        problem:
          "核心痛点：内推信息在微信群中快速沉没，求职者需反复翻找；传统招聘平台信息不对称严重，校园场景缺乏垂直化解决方案。",
        users:
          "目标用户：有内推需求的在校生（求职方）；有内推名额的校友/在职员工（推荐方）",
        stage:
          "阶段：已完成核心功能开发（6 个页面），前端使用 mock 数据，云函数已编写",
      },
      decisions: [
        {
          title: "产品定位：从通用招聘收束至校园内推",
          content:
            "调研发现传统招聘平台在校园场景中信息不对称严重。将产品范围从通用招聘收束至校园内推垂直场景，设计「校友发布 → 老师审核 → 学生申请」核心业务流程。增加岗位内推寄语、学生关联信息等差异化功能，突出校园社交信任链。",
        },
        {
          title: "AI-Native 开发工作流",
          content:
            "以 Axure 高保真原型为输入，使用 Cursor + Claude Code 进行 AI 驱动开发。通过结构化 Prompt（LangGPT）和功能规格文档（FSD），采用「结构化输入 + 小步迭代 + 持续对齐」策略分模块实现前后端，开发效率提升约 60%。主导演程：原型设计 → Prompt 工程 → 代码生成 → Git 版本控制。",
        },
        {
          title: "需求迭代与优先级",
          content:
            "主导 3 轮需求迭代，基于用户反馈持续优化。初版聚焦核心发布-申请流程；V2 增加内推寄语和关联信息；V3 规划教师背书审核和数据统计。每轮迭代基于真实使用场景，而非假设需求。",
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
          note: "微信小程序源码 + 云函数",
        },
      ],
    },
    {
      id: "easyfit-ai",
      name: "EasyFit-AI",
      nameEn: "EasyFit-AI — AI Orchestration Experiment",
      tagline: "多 API 协同编排：Gemini 图像理解 × Browser Use 商品提取 × 三层降级策略",
      tags: ["AI 编排", "Spring Boot", "Gemini API", "图像生成", "Browser Use"],
      context: {
        summary:
          "以「虚拟试衣」为场景的 AI 编排实验项目。集成 Google Gemini 多模态 API + Browser Use 自动化，实现三个独立 Tab 的功能链路：试穿提示词生成、商品图提取、背景提示词分析。部署在 Hugging Face Spaces + Cloudflare Worker。",
        problem:
          "核心命题：如何让多个 AI API（图像理解 + 服装提取 + 结果优化）在生产级链路中稳定协同？重点在编排逻辑与降级策略，而非单一 AI 效果。",
        users:
          "实验对象：电商虚拟试衣场景；深层目标：验证 AI 编排能力在多业务场景的可迁移性",
        stage:
          "阶段：核心三链路已跑通，在线可用 (api.littlefun8.me)，正在迭代降级策略",
      },
      decisions: [
        {
          title: "架构设计：三 Tab 独立链路 + 共享模型层",
          content:
            "Tab 1（试穿提示词）和 Tab 3（背景分析）共享 Gemini 文生文服务；Tab 2（商品图提取）走双通道 — Gemini 图生图为主，Browser Use + 豆包为备选。Spring Boot 后端统一管理 API Key、代理配置和重试逻辑，前端响应式 HTML/CSS/JS。",
        },
        {
          title: "三层降级策略",
          content:
            "主链路：Gemini 图生图（gemini-2.5-flash-image）。降级 1：主模型超时 > 5s，切换 gemini-3-pro-image-preview。降级 2：全部失败，返回占位图 + 提示用户重试。图生图原理：responseModalities(\"TEXT\",\"IMAGE\") → 从 response.parts() 提取 inlineData。每层降级均记录日志。",
        },
        {
          title: "部署与稳定性实践",
          content:
            "Docker 容器化部署到 Hugging Face Spaces（端口 7860），通过 Cloudflare Worker 反代至 api.littlefun8.me。API 密钥通过 HF Secrets 环境变量注入，避免硬编码。图片存储使用 Cloudflare R2。团队密码认证 + 内存 Token 机制（支持 Bypass 模式）。",
        },
      ],
      artifacts: [
        {
          type: "在线",
          label: "在线演示",
          url: "https://api.littlefun8.me",
          note: "Hugging Face Spaces + Cloudflare Worker 部署",
        },
        {
          type: "代码",
          label: "GitHub 仓库",
          url: "https://github.com/Littlefun8?tab=repositories",
          note: "Spring Boot 后端 + 前端",
        },
        {
          type: "文档",
          label: "设计文档",
          url: "#todo-easyfit-design-docs",
          note: "待替换为设计文档链接",
        },
      ],
    },
  ],
  thinkingVault: {
    flashcards: [
      {
        id: "fc-1",
        title: "痛点颗粒度原则",
        content:
          "好的产品痛点必须具体到「低效的那一刻」。「英语作文批改慢」不是痛点，「写完作文等 3 天才有反馈，第二天就忘了哪里不好」才是可操作的痛点。颗粒度越细，解决方案越精准。",
        tags: ["产品方法论", "需求分析"],
        domain: "通用 PM",
      },
      {
        id: "fc-2",
        title: "RICE 优先级框架",
        content:
          "RICE = Reach（触达用户数）× Impact（影响深度，1-3 分）× Confidence（置信度，%）÷ Effort（工期，人周）。比纯直觉排优先级更可辩护，尤其在向上汇报时需要量化依据。注意：Confidence 是最容易被高估的维度。",
        tags: ["产品方法论", "优先级"],
        domain: "通用 PM",
      },
      {
        id: "fc-3",
        title: "AI 编排降级思维",
        content:
          "设计 AI 功能时，先问「如果这个 API 挂了怎么办？」降级路径设计应与主链路同等重要：超时阈值、备用模型、占位反馈、用户告知策略。一个没有降级策略的 AI 功能，是技术债，不是产品能力。",
        tags: ["AI 实践", "工作流设计", "稳定性"],
        domain: "AI 编排",
      },
      {
        id: "fc-4",
        title: "用户调研中的表层需求 vs 底层动机",
        content:
          "用户说「我想要一匹更快的马」，底层动机是「更快到达目的地」。在酱菜内推项目中，用户说「想要更多内推信息」，底层动机是「减少信息筛选成本，快速触达对的推荐人」。方案应回应动机，而非字面需求。",
        tags: ["用户调研", "需求分析"],
        domain: "通用 PM",
      },
      {
        id: "fc-5",
        title: "Prompt 工程的迭代逻辑",
        content:
          "Prompt 不是一次性写好的，而是通过「失败案例 → 归因 → 修正约束」不断迭代的。每次迭代要记录：原始 Prompt、失败输出、根因假设、修正策略、验证结果。把 Prompt 当作代码管理，版本控制很重要。",
        tags: ["AI 实践", "Prompt 工程"],
        domain: "AI 编排",
      },
      {
        id: "fc-6",
        title: "最小可行产品 (MVP) 的边界判断",
        content:
          "MVP 不是「能跑的最小版本」，而是「能验证核心假设的最小版本」。关键问题：这个 MVP 能证伪/证实我们最重要的假设吗？如果不能，它就不是 MVP，只是一个 demo。酱菜内推选择先做标签筛选而非算法推荐，是因为核心假设是「结构化信息能提升匹配效率」，不需要算法就能验证。",
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
        date: "2024-Q4（阶段性复盘，持续更新）",
        tags: ["项目复盘", "AI 实践", "DearLiHua"],
        relatedCase: "dear-li-hua",
        summary:
          "记录 DearLiHua 从「纯文字输入」到「OCR 拍照批改」的三次关键迭代，重点还原每次迭代的触发原因、技术决策与 Prompt 调优过程。",
        content: [
          {
            section: "第一版：纯文字输入的失败",
            text: "初版要求学生手动录入作文，上线后发现核心问题：没有学生愿意花 5-10 分钟打字，尤其是在手机端。留存率极低，第一天使用后大多数用户不再回来。根因：我们解决了「批改慢」，但忽略了「录入成本」这个更前置的摩擦点。",
          },
          {
            section: "第二版：引入 OCR 后的新问题",
            text: "改为相机拍照 + OCR 识别后，使用门槛显著降低。但 OCR 识别准确率对手写字体差异敏感，错误识别导致大模型批改出现「鸡同鸭讲」的情况。解决方案：在 Prompt 中增加容错指令——「以下文字来自 OCR 识别，可能存在个别字符错误，请聚焦语法结构与逻辑连贯性，忽略疑似识别错误的字符。」效果：批改质量明显改善，用户反馈从「看不懂在说什么」变为「基本准确」。",
          },
          {
            section: "第三版：结构化输出与分层展示",
            text: "第二版的批改结果以长文本形式输出，用户难以快速定位改进点。第三版改为结构化输出（JSON 格式：总分 + 各维度分数 + 逐句建议），前端分层展示。关键 Prompt 工程改动：明确要求模型「以 JSON 格式返回，字段包括 total_score, content_score, language_score, sentence_suggestions（数组）」。下一步待验证：结构化反馈是否真正提升了学生的复盘行为。",
          },
        ],
      },
      {
        id: "blog-2",
        title: "AI 编排思维导论：从 EasyFit-AI 看多 API 协同设计",
        titleEn:
          "Introduction to AI Orchestration: Multi-API Coordination from EasyFit-AI",
        date: "2025-Q1（初稿，持续完善）",
        tags: ["AI 编排", "系统设计", "EasyFit-AI"],
        relatedCase: "easyfit-ai",
        summary:
          "以 EasyFit-AI 为案例，系统梳理 AI 编排的核心设计原则：链路可观测性、降级策略、重试机制与用户体验一致性。",
        content: [
          {
            section: "为什么 AI 编排比单模型调用难 10 倍",
            text: "单模型调用：输入 → 输出，失败了报错就行。多模型编排：A 的输出是 B 的输入，B 的输出需要 C 校验，任何一环失败都可能雪崩。EasyFit-AI 的链路：图像预处理 → VTON 模型 → 质量校验 → 结果优化，四个环节，每个都有独立的失败模式。",
          },
          {
            section: "降级策略的设计原则",
            text: "核心原则：每一层降级都要让用户感知到「系统在努力」，而非突然失败。实践中的三层设计：(1) 主链路失败 → 静默切换备用 API，用户无感；(2) 备用 API 也失败 → 前端显示「正在重试，请稍候」而非报错；(3) 全部失败 → 清晰告知用户，给出重试建议。这个框架可以迁移到任何需要 AI 功能稳定性的产品设计中。",
          },
          {
            section: "可观测性：让编排链路对 PM 可见",
            text: "传统开发中，PM 依赖工程师告知系统状态。AI 编排项目中，PM 应该能够自己看到：哪一层 API 调用失败率最高？降级触发的频率是多少？用户在哪一步流失？建议：在编排链路中加入结构化日志，至少记录每个 API 调用的耗时、成功/失败状态、触发的降级级别。这不只是运维需求，也是产品迭代的数据基础。",
          },
        ],
      },
    ],
  },
  contact: {
    note: "欢迎招聘官、产品同行和对 AI PM 感兴趣的朋友联系。",
    // TODO: 替换为真实简历 PDF URL
    resumeUrl: "/assets/resume-placeholder.pdf",
    resumeLabel: "下载简历 (PDF)",
  },
};
