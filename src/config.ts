export const siteConfig = {
  name: "你好，我是 L",
  nameEn: "Hi, I'm L",
  title: "AI PM / TPM 求职者",
  titleEn: "AI PM / TPM Candidate",
  description:
    "江西财经大学 2026 届软件工程本科生，目标岗位 AI 产品经理 / 技术产品经理，擅长 AI Native 工作流设计与产品闭环实践。",
  accentColor: "#2563eb",
  social: {
    // TODO: 替换为真实邮箱
    email: "your-email@example.com",
    // TODO: 替换为真实 LinkedIn 主页
    linkedin: "https://linkedin.com/in/yourprofile",
    // TODO: 替换为真实 GitHub 主页
    github: "https://github.com/Littlefun8",
    // 微信二维码图片路径，放于 public/assets/wechat-qr.png 后替换占位
    wechat: "/assets/wechat-qr-placeholder.png",
    // TODO: 替换为真实简历 PDF 链接
    resumeUrl: "/assets/resume-placeholder.pdf",
  },
  hero: {
    greeting: "你好，我是 L",
    identity: "软件工程 → AI PM / TPM",
    targetRole: "目标岗位：AI 产品经理 / 技术产品经理",
    coreAbility:
      "核心能力：AI Native 工作流编排 × 产品全闭环思维 × 结构化问题拆解",
    tagline:
      "从软件工程到 AI PM — 用工程师的严谨，做产品经理的闭环。",
  },
  education: {
    school: "江西财经大学",
    schoolEn: "Jiangxi University of Finance and Economics",
    degree: "软件工程 本科（2022 — 2026）",
    degreeEn: "B.Eng. in Software Engineering",
    highlights: [
      "GPA：待更新（替换此处）",
      "主修方向：软件工程 / 人工智能应用",
      "课程涵盖：数据结构、操作系统、数据库、机器学习基础",
    ],
    milestones: [
      {
        label: "自学实践",
        desc: "系统学习 n8n 工作流编排、RAG 架构、多模态 API 调用",
      },
      {
        label: "产品思维",
        desc: "持续输出结构化产品笔记（PM 方法论、竞品分析、需求拆解）",
      },
      {
        label: "证书 / 里程碑",
        desc: "待补充（替换此处，例如：某 AI 产品课结业证书、黑客松奖项等）",
      },
    ],
  },
  caseStudies: [
    {
      id: "dear-li-hua",
      name: "DearLiHua",
      nameEn: "DearLiHua — AI English Essay Coach",
      tagline: "让高考英语作文批改从 3 天缩短到 3 分钟",
      tags: ["多模态 AI", "微信小程序", "OCR", "Prompt 工程"],
      context: {
        summary:
          "高中生英语作文批改依赖人工，反馈周期长、颗粒度低。DearLiHua 是一款基于微信小程序的 AI 英语作文批改工具，通过 OCR 拍题 + 多模态大模型实现秒级精细化反馈。",
        problem:
          "核心痛点：学生写完作文后平均等待 3 天才能收到老师反馈，且反馈多为笼统评语，缺乏可操作的改进建议。",
        users: "目标用户：备战高考的高中生；次级用户：英语老师（减负）",
        stage:
          "阶段：原型验证阶段，已完成微信小程序 MVP 开发并在校内小范围测试",
      },
      decisions: [
        {
          title: "问题定义",
          content:
            "通过访谈 12 位高中生，发现批改延迟和反馈颗粒度不足是最高频痛点。将「让 AI 批改作文」拆解为：识别手写文字（OCR）→ 理解评分标准（Prompt 设计）→ 生成可操作反馈（输出结构化建议）。",
        },
        {
          title: "关键决策：选择 OCR + 多模态路径",
          content:
            "初版用纯文字输入，用户留存低（学生不愿手动录入）。改为相机拍照 → OCR 识别 → 大模型批改，显著降低使用门槛。OCR 准确率问题通过 Prompt 增加容错指令解决（「忽略识别错误的字，聚焦语法与逻辑」）。",
        },
        {
          title: "工作流逻辑",
          content:
            "用户拍照上传 → OCR 服务提取文字 → 结构化 Prompt（包含高考评分维度：内容/语言/书写）→ 大模型生成批改报告 → 前端分层展示（总分 + 各维度分析 + 逐句建议）。降级策略：OCR 置信度低于阈值时，提示用户重新拍照或手动输入。",
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
          type: "分析",
          label: "竞品分析",
          url: "#todo-dear-li-hua-competitive",
          note: "待替换为分析报告链接",
        },
      ],
    },
    {
      id: "jiangcai-referral",
      name: "酱菜内推系统",
      nameEn: "JiangCai Campus Referral System",
      tagline: "将校园内推从微信群接龙升级为结构化信息匹配平台",
      tags: ["全栈开发", "用户调研", "需求优先级", "校园场景"],
      context: {
        summary:
          "校园内推信息散落在各类微信群，信息噪声高、匹配效率低。酱菜内推系统将内推需求和求职意向结构化，实现精准匹配，并提供内推进度追踪。",
        problem:
          "核心痛点：内推信息在微信群中快速沉没，求职者需反复翻找；推荐人缺乏有效工具管理内推进度，导致有效内推率低。",
        users:
          "目标用户：有内推需求的在校生（求职方）；有内推名额的校友/在职员工（推荐方）",
        stage:
          "阶段：已完成核心功能开发，在校内小范围上线运营，积累初步用户反馈",
      },
      decisions: [
        {
          title: "问题定义",
          content:
            "调研 20+ 名有求职经历的同学，绘制「信息获取 → 联系推荐人 → 等待反馈」全链路，识别出 3 个高摩擦节点：信息查找、意向匹配、进度追踪。",
        },
        {
          title: "关键决策：先做最小可行匹配，不做算法推荐",
          content:
            "初期资源有限，放弃复杂算法，选择结构化标签筛选（城市/岗位/学校）+ 主动联系机制。这降低了开发复杂度，同时让推荐人保持主动权，提升内推意愿。",
        },
        {
          title: "需求优先级决策",
          content:
            "采用 RICE 评分框架对 15 个候选功能排优先级。内推帖发布、标签筛选、消息通知排前三，简历展示和数据统计延后到 V2。该决策基于用户访谈中「能快速找到对口内推机会」的核心诉求。",
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
          label: "产品原型",
          url: "#todo-jiangcai-prototype",
          note: "待替换为原型链接",
        },
        {
          type: "调研",
          label: "用户调研报告",
          url: "#todo-jiangcai-research",
          note: "待替换为调研报告链接",
        },
      ],
    },
    {
      id: "easyfit-ai",
      name: "EasyFit-AI",
      nameEn: "EasyFit-AI — AI Orchestration Experiment",
      tagline: "AI 编排实验案例：虚拟试衣的多 API 链路设计与稳定性实践",
      tags: ["AI 编排", "图像生成", "API 链路", "降级策略", "TPM 视角"],
      context: {
        summary:
          "EasyFit-AI 是一个 AI 编排实验项目，以「虚拟试衣」为场景，系统探索多 API 协同调用、链路降级、重试机制与部署稳定性。核心价值在于编排逻辑设计，而非单一 AI 效果展示。",
        problem:
          "核心命题：如何让多个 AI API（图像理解 + 服装生成 + 结果优化）在生产级链路中稳定协同？错误处理、降级路径、用户体验一致性是关键挑战。",
        users:
          "实验对象：电商场景下的虚拟试衣需求；深层目标：验证 AI 编排能力可迁移性",
        stage:
          "阶段：AI 编排实验阶段，核心链路已跑通，正在迭代降级策略与用户反馈闭环",
      },
      decisions: [
        {
          title: "问题定义：编排复杂度而非效果复杂度",
          content:
            "市场上已有成熟的图像生成模型，竞争焦点不在于「生成质量」，而在于「如何让多模型协同更可靠」。将问题重新定义为：设计一套可观测、可降级、可重试的 AI API 编排链路。",
        },
        {
          title: "关键决策：三层降级策略",
          content:
            "主链路：VTON 专用模型生成试衣图。降级 1：主模型超时 > 5s，切换为通用图像合成 API。降级 2：通用 API 失败，返回占位图 + 提示用户重试。每层降级均记录日志，用于后续迭代优化。",
        },
        {
          title: "工作流逻辑与部署链路",
          content:
            "用户上传服装图 + 人像图 → 图像预处理（尺寸归一化）→ VTON API 调用 → 结果质量校验（置信度阈值）→ 合格则返回，不合格则触发重试或降级 → 最终结果展示 + 用户反馈收集。部署使用 Docker 容器化，API 密钥通过环境变量注入，避免硬编码。",
        },
      ],
      artifacts: [
        {
          type: "架构",
          label: "系统架构图",
          url: "#todo-easyfit-architecture",
          note: "待替换为架构图链接（Excalidraw/Figma）",
        },
        {
          type: "PRD",
          label: "PRD 文档",
          url: "#todo-easyfit-prd",
          note: "待替换为 PRD 链接",
        },
        {
          type: "演示",
          label: "演示视频 / Demo",
          url: "#todo-easyfit-demo",
          note: "待替换为演示链接",
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
