const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");

const translations = {
  zh: {
    metaTitle: "3iwom.ai | 企业 AI Agent 与低代码转型",
    metaDescription: "3iwom.ai - 以 AI Agent、低代码平台和企业级交付能力，帮助企业完成从数字化到智能化的转型。",
    "top.address": "中国广东省广州市荔湾区花地大道中路68号荔胜广场2909-2单元",
    "nav.home": "首页",
    "nav.platform": "我们的NexaCo",
    "nav.solutions": "解决方案",
    "nav.clients": "客户与合作伙伴",
    "hero.kicker": "3iwom.ai 正在重写企业工作方式",
    "hero.title": "让 AI Agent 接管重复运营",
    "hero.lede": "不是再买一个聊天工具，而是把客服、数据、审批、研发与内部系统重组为可执行的智能工作流。3iwom 用 AI Agent + NexaCo 低代码平台，把企业从人海响应推进到机器协同。",
    "hero.cta": "启动 AI 试点",
    "hero.secondary": "查看技术底座",
    "proof.years": "年企业软件交付经验",
    "proof.lowcode": "需求可由低代码加速实现",
    "proof.nocobase": "NocoBase 合作授权有效期",
    "trust.region": "广州与香港双总部服务体系",
    "trust.iso": "信息安全、IT 服务与质量管理认证",
    "trust.partner": "源代码使用、商业实施及大中华区产品销售授权",
    "intro.title": "从 IT 交付公司，进化为企业 AI 执行引擎。",
    "intro.body": "3iwom IT Co., Limited 自 2012 年起深耕企业软件与数字科技，核心团队来自 Siemens、HSBC、PCCW、Country Garden 等大型企业。现在，我们把 13 年系统交付经验、低代码平台和 AI Agent 组合成一套更直接的能力：把任务交给系统，把人释放到判断、创意和增长。",
    "cap.agent.title": "AI Agent 执行层",
    "cap.agent.body": "不止回答问题，而是拆解目标、调用工具、跨系统执行、反馈修正，成为企业流程里的数字执行者。",
    "cap.platform.title": "NexaCo 构建层",
    "cap.platform.body": "用数据模型驱动应用搭建，80% 需求快速配置，20% 复杂能力用插件扩展，速度和控制权同时保留。",
    "cap.delivery.title": "企业落地层",
    "cap.delivery.body": "把 AI 接入真实业务、真实数据和真实审批链路，覆盖咨询、集成、定制开发、外包与运维。",
    "agent.title": "Chatbot 只会回答，Agent 会把事情做完。",
    "agent.body": "传统自动化只适合固定流程；AI Agent 面向的是多步骤、跨系统、带不确定性的真实业务。它理解目标、制定计划、查系统、调数据、生成结果，并在失败时调整策略。",
    "agent.plan.title": "拆目标",
    "agent.plan.body": "把“分析销售异常”“追踪竞品动作”“生成经营周报”拆成可执行任务链。",
    "agent.tool.title": "接系统",
    "agent.tool.body": "把 CRM、ERP、数据库、知识库、网页、邮件和报表工具接入同一个行动回路。",
    "agent.feedback.title": "能自修正",
    "agent.feedback.body": "执行失败会重试，信息不足会补查，遇到风险会交给人工确认。",
    "agent.caption": "从“辅助工具”升级为“企业可控的数字执行层”。",
    "metrics.title": "先撕开一个高频痛点，再扩展到整个运营系统。",
    "metrics.service.title": "客服重复问题交给 Agent",
    "metrics.service.body": "把常见咨询和查单从人工队列中剥离，响应从小时级压到秒级。",
    "metrics.marketing.title": "市场与内容生产提速",
    "metrics.marketing.body": "竞品、渠道、行业信息自动搜集整理，让团队把精力放在判断和攻势。",
    "metrics.dev.title": "研发流程被 AI 加速",
    "metrics.dev.body": "代码审查、Bug 定位、接口文档和知识沉淀交给 Agent 做第一轮推进。",
    "metrics.data.value": "分钟级",
    "metrics.data.title": "管理层直接问数据",
    "metrics.data.body": "自然语言发问，Agent 写 SQL、出图表、总结异常，让决策不再等报表排期。",
    "platform.title": "没有低代码底座，AI 只能停留在演示。",
    "platform.body": "NexaCo 基于 NocoBase 体系与主流技术栈构建，采用 TypeScript、Node.js、React、Koa 等技术。它不是封闭黑盒，而是可部署、可扩展、可监控的企业应用基础设施，让 AI Agent 真正进入业务系统。",
    "platform.data": "数据结构与用户界面分离，同一张表可以创建多种页面、区块和操作。",
    "platform.plugin": "页面、区块、操作、API、数据源均可通过插件扩展，应对复杂业务变化。",
    "platform.integration": "支持主数据库、外部数据库、第三方 API、SSO、多应用与父子应用集成。",
    "platform.observable": "日志、监控、OpenTelemetry 与 Prometheus 能力帮助企业掌控运行状态。",
    "roadmap.title": "别等“大而全转型”，从一个场景打穿。",
    "roadmap.m1.title": "锁定最痛场景",
    "roadmap.m1.body": "找出高频、耗人、数据可接入的任务，先让 Agent 在沙箱里跑起来。",
    "roadmap.m23.title": "接入核心系统",
    "roadmap.m23.body": "连接 API、数据库和内部系统，配置 Agent 行动链，把自动化率推到 60%。",
    "roadmap.m46.title": "上线真实业务",
    "roadmap.m46.body": "在小范围业务里接受真实压力测试，调优准确率、响应速度和安全边界。",
    "roadmap.after.title": "复制到更多部门",
    "roadmap.after.body": "把验证过的 Agent 模式复制到客服、数据、销售、研发和运营流程。",
    "solutions.title": "把 AI 塞进真实流程，而不是做一个漂亮 Demo。",
    "solutions.body": "我们把 NexaCo 平台能力与行业 Know-how 组合，为企业快速构建内部系统、数据分析、流程审批、移动端与微信应用，再把 AI Agent 接入其中，形成可运行的智能化流程。",
    "solutions.ecs.title": "ECS 费用管控",
    "solutions.ecs.body": "应收应付、合同、报销、发票、审批与数据分析。",
    "solutions.crm.title": "CRM 客户管理",
    "solutions.crm.body": "产品、客户、线索、商机、订单合同、绩效与财务集成。",
    "solutions.hrm.title": "HRM 人力资源",
    "solutions.hrm.body": "员工档案、考勤、招聘、入转调离、薪酬、绩效与组织架构。",
    "solutions.ehs.title": "EHS 安健环合规",
    "solutions.ehs.body": "体系、风险、合规、应急、事故与运营管理。",
    "solutions.mes.title": "MES 生产执行",
    "solutions.mes.body": "排产、文档、质量、工时、资源、库存、生产监控与分析。",
    "solutions.wms.title": "WMS 仓储管理",
    "solutions.wms.body": "库存、订单、库位空间、人员、供应商与商品管理。",
    "clients.title": "服务多家 Fortune 500 与知名企业，沉淀跨行业交付经验。",
    "clients.body": "团队长期服务房地产、零售、制造、金融、公共机构及大型集团客户，具备从咨询到开发、集成、运维的完整交付能力。",
    "contact.title": "给我们 45 分钟，找出最该被 AI 接管的流程。",
    "contact.body": "我们会直接看真实业务链路，判断哪些任务值得自动化、哪些数据能接、风险边界在哪里，并在 3 个工作日内给出可试点的 AI Agent 场景建议。",
    "footer.company": "© 2026 3iwom IT Co., Limited. 广州 · 香港。",
    "footer.slogan": "Dream. Create. Succeed."
  },
  en: {
    metaTitle: "3iwom.ai | Enterprise AI Agent & Low-code Transformation",
    metaDescription: "3iwom.ai helps enterprises move from digital transformation to intelligent operations with AI Agents, low-code platforms, and enterprise-grade delivery.",
    "top.address": "Unit 2909-2, Lisheng Plaza, No. 68 Huadi Avenue Middle, Liwan District, Guangzhou, Guangdong, China",
    "nav.home": "Home",
    "nav.platform": "Our NexaCo",
    "nav.solutions": "Solutions",
    "nav.clients": "Clients & Partners",
    "hero.kicker": "3iwom.ai is rewriting how enterprises work",
    "hero.title": "Let AI Agents take over repetitive operations",
    "hero.lede": "This is not another chatbot. We rebuild customer service, analytics, approvals, engineering, and internal systems into executable intelligent workflows. 3iwom combines AI Agents with the NexaCo low-code platform to move enterprises from headcount-heavy response to machine-assisted execution.",
    "hero.cta": "Launch an AI Pilot",
    "hero.secondary": "View the Technology Stack",
    "proof.years": "years of enterprise software delivery",
    "proof.lowcode": "of requirements accelerated by low-code",
    "proof.nocobase": "NocoBase partner authorization validity",
    "trust.region": "Dual service presence in Guangzhou and Hong Kong",
    "trust.iso": "Certified for information security, IT service, and quality management",
    "trust.partner": "Authorized for source code usage, commercial implementation, and Greater China product sales",
    "intro.title": "From IT delivery company to enterprise AI execution engine.",
    "intro.body": "Founded in 2012, 3iwom IT Co., Limited has spent 13 years inside enterprise software and digital systems. Our core team comes from companies such as Siemens, HSBC, PCCW, and Country Garden. Now we combine delivery experience, low-code infrastructure, and AI Agents into one sharper capability: hand tasks to systems and free people for judgment, creativity, and growth.",
    "cap.agent.title": "AI Agent Execution Layer",
    "cap.agent.body": "Agents do not just answer. They break down goals, call tools, execute across systems, and correct their own path.",
    "cap.platform.title": "NexaCo Build Layer",
    "cap.platform.body": "Data-model-driven applications with 80% configuration and 20% plugin extension, keeping both speed and control.",
    "cap.delivery.title": "Enterprise Deployment Layer",
    "cap.delivery.body": "We connect AI to real workflows, real data, and real approval chains through consulting, integration, development, outsourcing, and operations.",
    "agent.title": "Chatbots answer. Agents finish the work.",
    "agent.body": "Traditional automation only survives fixed workflows. AI Agents operate in real business conditions: multi-step, cross-system, and uncertain. They understand goals, plan actions, query systems, pull data, produce results, and adjust when execution breaks.",
    "agent.plan.title": "Break down goals",
    "agent.plan.body": "Turn sales anomaly analysis, competitor tracking, and operating reports into executable task chains.",
    "agent.tool.title": "Connect systems",
    "agent.tool.body": "Link CRM, ERP, databases, knowledge bases, websites, email, and reporting tools into one action loop.",
    "agent.feedback.title": "Self-correct",
    "agent.feedback.body": "Retry on failure, enrich missing information, and escalate risky decisions for human confirmation.",
    "agent.caption": "From assistant tools to a controllable digital execution layer.",
    "metrics.title": "Attack one painful workflow first, then scale across operations.",
    "metrics.service.title": "Let agents handle repetitive service questions",
    "metrics.service.body": "Remove common inquiries and order checks from human queues, compressing response time from hours to seconds.",
    "metrics.marketing.title": "Speed up market intelligence and content",
    "metrics.marketing.body": "Automate competitor, channel, and industry research so teams can focus on judgment and offensive moves.",
    "metrics.dev.title": "Accelerate engineering workflows",
    "metrics.dev.body": "Let agents push the first pass of code review, bug localization, API documentation, and knowledge capture.",
    "metrics.data.value": "Minutes",
    "metrics.data.title": "Let leaders question the data directly",
    "metrics.data.body": "Ask in natural language while agents write SQL, generate charts, and surface exceptions without waiting for report cycles.",
    "platform.title": "Without low-code infrastructure, AI stays a demo.",
    "platform.body": "Built on the NocoBase ecosystem and mainstream technologies including TypeScript, Node.js, React, and Koa, NexaCo is not a black box. It is deployable, extensible, observable enterprise application infrastructure that lets AI Agents enter real business systems.",
    "platform.data": "Separate data structures from user interfaces, allowing multiple pages, blocks, and actions for the same table.",
    "platform.plugin": "Extend pages, blocks, actions, APIs, and data sources through plugins to support complex business change.",
    "platform.integration": "Support main databases, external databases, third-party APIs, SSO, multi-application, and parent-child application integration.",
    "platform.observable": "Logging, monitoring, OpenTelemetry, and Prometheus capabilities help enterprises control runtime status.",
    "roadmap.title": "Do not wait for a grand transformation. Break through one workflow first.",
    "roadmap.m1.title": "Identify the most painful scenario",
    "roadmap.m1.body": "Find high-frequency, labor-heavy tasks with accessible data and get agents running in a sandbox.",
    "roadmap.m23.title": "Connect core systems",
    "roadmap.m23.body": "Link APIs, databases, and internal systems, configure action chains, and push automation toward 60%.",
    "roadmap.m46.title": "Launch in real operations",
    "roadmap.m46.body": "Expose agents to real business pressure and tune accuracy, response speed, and safety boundaries.",
    "roadmap.after.title": "Replicate across departments",
    "roadmap.after.body": "Copy proven agent patterns into service, analytics, sales, engineering, and operations.",
    "solutions.title": "Put AI inside real workflows, not polished demos.",
    "solutions.body": "We combine NexaCo platform capabilities with industry know-how to build internal systems, analytics, approvals, mobile and WeChat applications, then wire AI Agents into them as operating workflows.",
    "solutions.ecs.title": "ECS Expense Control",
    "solutions.ecs.body": "Accounts receivable and payable, contracts, reimbursement, invoices, approvals, and data analytics.",
    "solutions.crm.title": "CRM Customer Management",
    "solutions.crm.body": "Products, customers, leads, opportunities, orders, contracts, performance, and financial integration.",
    "solutions.hrm.title": "HRM Human Resources",
    "solutions.hrm.body": "Employee profiles, attendance, recruitment, onboarding, transfer, promotion, compensation, performance, and organization structure.",
    "solutions.ehs.title": "EHS Compliance",
    "solutions.ehs.body": "System, risk, compliance, emergency, incident, and operations management.",
    "solutions.mes.title": "MES Manufacturing Execution",
    "solutions.mes.body": "Scheduling, documents, quality, labor, resources, inventory, production monitoring, and analytics.",
    "solutions.wms.title": "WMS Warehouse Management",
    "solutions.wms.body": "Inventory, orders, layout, space, labor, suppliers, and product management.",
    "clients.title": "Serving Fortune 500 and well-known enterprises with cross-industry delivery experience.",
    "clients.body": "Our team has long served real estate, retail, manufacturing, finance, public-sector, and large-group clients, with end-to-end capabilities from consulting to development, integration, and operations.",
    "contact.title": "Give us 45 minutes to find the workflow AI should take over first.",
    "contact.body": "We review the real process, identify which tasks are worth automating, which data can be connected, and where the risk boundaries sit. Within three working days, you get a practical AI Agent pilot recommendation.",
    "footer.company": "© 2026 3iwom IT Co., Limited. Guangzhou · Hong Kong.",
    "footer.slogan": "Dream. Create. Succeed."
  }
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang] ?? translations.zh;

  document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
  document.title = dictionary.metaTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "en" ? "中文" : "EN";
    langToggle.setAttribute("aria-label", lang === "en" ? "切换到中文" : "Switch to English");
  }

  try {
    window.localStorage?.setItem("site-language", lang);
  } catch {
    // Language switching still works when storage is unavailable.
  }
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-label", "Open navigation");
  }
});

langToggle?.addEventListener("click", () => {
  const current = document.documentElement.lang === "en" ? "en" : "zh";
  applyLanguage(current === "en" ? "zh" : "en");
});

window.addEventListener("scroll", updateHeader, { passive: true });

let savedLanguage = "zh";
try {
  savedLanguage = window.localStorage?.getItem("site-language") === "en" ? "en" : "zh";
} catch {
  savedLanguage = "zh";
}

applyLanguage(savedLanguage);
updateHeader();
