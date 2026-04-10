---
name: "DearLiHua"
nameEn: "DearLiHua — AI English Essay Coach"
tagline: "让高考英语作文批改从 5 分钟缩短到 30 秒，评分准确率 93%"
taglineEn: "Cutting high-school essay grading from 5 minutes to 30 seconds with 93% scoring accuracy"
tags: ["LangChain Agent", "WeChat Mini Program", "OCR", "RAG", "Prompt Engineering"]
lang: "zh"
summary: "面向高中英语教师的 AI 作文批改工具。通过 OCR 识别 + RAG 范文检索 + LLM 评分，实现从拍照到多层级批改报告的端到端自动化。覆盖 6 个功能模块、4Tab + 6 子页面的完整微信小程序 MVP。"
problem: "核心痛点：单次批改耗时 5-10 分钟，一个班 50 人需 4-8 小时；反馈多为笼统评语，缺乏可操作的逐句改进建议。"
users: "目标用户：高中英语教师（减负提效）；次级用户：备战高考的高中生（获取精细化反馈）"
stage: "阶段：已完成微信小程序 MVP 开发，基于 FastAPI 构建独立 AI 服务，Docker 容器化部署"
decisions:
  - title: "问题定义与产品拆解"
    titleEn: "Problem Definition & Decomposition"
    content: "通过教师访谈发现批改效率的核心瓶颈，将「AI 批改作文」拆解为 5 个 Agent 工具调用：OCR 识别 → RAG 范文检索 → LLM 评分 → 语法检查 → 句型改写。输出完整 PRD（含 6 个功能模块、数据结构、API 接口规范、UI 规范）。"
    contentEn: "Identified grading bottlenecks via teacher interviews. Decomposed \"AI essay grading\" into 5 Agent tool calls: OCR → RAG essay retrieval → LLM scoring → Grammar check → Sentence rewriting. Produced a complete PRD (6 modules, data schemas, API specs, UI guidelines)."
  - title: "技术决策：LangChain Agent + LangGraph 状态机"
    titleEn: "Technical Decision: LangChain Agent + LangGraph State Machine"
    content: "设计基于 LangChain Tool-Calling Agent 的批改系统，用 LangGraph 构建 7 个状态节点的批改工作流，实现 OCR 置信度自动分支路由（< 0.7 自动降级）。Agent 自主决策工具调用顺序，替代硬编码流程，提升批改可靠性。"
    contentEn: "Designed a LangChain Tool-Calling Agent with a 7-node LangGraph state machine workflow. Implemented auto-branching on OCR confidence < 0.7. The Agent autonomously decides tool call order, replacing hardcoded pipelines for improved reliability."
  - title: "RAG 知识库 + Prompt 工程"
    titleEn: "RAG Knowledge Base + Prompt Engineering"
    content: "构建 30+ 篇高分范文向量知识库（Sentence-Transformers + ChromaDB），批改时自动注入 Top-3 相似范文作为评分锚点。Prompt 采用 CoT（先分析后评分）+ Few-shot（注入范文示例）+ 三维 Rubric（完整性/内容/语言），评分准确率达 93%。"
    contentEn: "Built a vector knowledge base of 30+ high-scoring essays (Sentence-Transformers + ChromaDB). Auto-injects Top-3 similar essays as scoring anchors. Prompt uses CoT + Few-shot + 3-dimension Rubric (Completeness/Content/Language), achieving 93% scoring accuracy."
artifacts:
  - type: "PRD"
    label: "PRD 文档"
    url: "#todo-dear-li-hua-prd"
    note: "待替换为飞书/GitHub 文档链接"
  - type: "原型"
    label: "Axure 原型"
    url: "#todo-dear-li-hua-prototype"
    note: "待替换为 Axure Cloud 链接"
  - type: "演示"
    label: "小程序演示"
    url: "#todo-dear-li-hua-demo"
    note: "待替换为小程序体验链接/前端可交互展示"
---

## DearLiHua 中文内容

面向高中英语教师的 AI 作文批改工具，完整案例详情已在 frontmatter 中描述。
