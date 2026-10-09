export type Locale = "en" | "zh-TW";

export const LINKS = {
  linkedinProfile: "https://www.linkedin.com/in/owen-chung-809218221",
  linkedinPosts:
    "https://www.linkedin.com/in/owen-chung-809218221/recent-activity/all/",
  github: "https://github.com/owenchung030915-hkust",
  email: "mailto:owenchung03@gmail.com",
  /** Served from `public/cv.pdf` */
  cvPdf: "/cv.pdf",
} as const;

export type BulletItem = {
  title: string;
  period?: string;
  org?: string;
  lines: string[];
};

export type Messages = {
  meta: { title: string; htmlLang: string };
  nav: {
    brand: string;
    about: string;
    education: string;
    experience: string;
    projects: string;
    research: string;
    skills: string;
    extras: string;
    langEn: string;
    langZh: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    photoAlt: string;
    downloadCv: string;
  };
  contact: { email: string; phone: string; phoneLabel: string };
  social: {
    linkedin: string;
    linkedinPosts: string;
    github: string;
  };
  about: { heading: string; body: string };
  education: { heading: string; items: BulletItem[] };
  experience: { heading: string; items: BulletItem[] };
  projects: { heading: string; items: BulletItem[] };
  research: { heading: string; items: BulletItem[] };
  skills: { heading: string; rows: { label: string; value: string }[] };
  extras: { heading: string; items: BulletItem[] };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: { title: "Owen Chung — Portfolio", htmlLang: "en" },
    nav: {
      brand: "Owen Chung",
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      research: "Research",
      skills: "Skills",
      extras: "Activities",
      langEn: "English",
      langZh: "繁體中文",
    },
    hero: {
      name: "Chung Ho Man (Owen)",
      role: "Computer Science & Economics · AI & trading",
      tagline:
        "Dual-degree student (BEng & BBA) at HKUST with an extended major in Artificial Intelligence; passionate about ML, NLP, and real-world deployment.",
      photoAlt: "Owen Chung professional photo",
      downloadCv: "Download CV",
    },
    contact: {
      email: "owenchung03@gmail.com",
      phone: "+852 9288 3111",
      phoneLabel: "Phone",
    },
    social: {
      linkedin: "LinkedIn profile",
      linkedinPosts: "LinkedIn posts",
      github: "GitHub",
    },
    about: {
      heading: "About",
      body:
        "I am a Computer Science and Economics student with a strong interest in AI and trading. My work spans RAG systems, ASR/TTS integration, quantitative development, and research on LLM applications in media and finance.",
    },
    education: {
      heading: "Education",
      items: [
        {
          title:
            "The Hong Kong University of Science and Technology — Dual Degree (BEng & BBA)",
          period: "Sep 2021 – Jun 2027",
          lines: [
            "Computer Science and Economics, extended major in Artificial Intelligence; minor in Mathematics and Physics (expected First Class Honours).",
            "Grades: term GPAs up to 3.91/4.3; CGA 3.46/4.3.",
          ],
        },
        {
          title: "Semester exchange — Tsinghua University",
          period: "Sep 2025 – Jan 2026",
          lines: ["Major in Computer Science."],
        },
        {
          title: "Semester exchange — University of Wisconsin–Madison",
          period: "Jan 2025 – May 2025",
          lines: ["Computer Science and Economics."],
        },
        {
          title: "Charles University — Central and Eastern European Studies (ECES)",
          period: "Summer 2024",
          lines: ["Summer exchange programme."],
        },
      ],
    },
    experience: {
      heading: "Work experience",
      items: [
        {
          org: "Fruitful",
          title: "Cofounder and COO",
          period: "Apr 2025 – Present",
          lines: [
            "Facilitated 110k+ seed funding for a vegan leather startup, and organized workshops for 60+ participants that generated revenue.",
            "Seeking factory partnerships to streamline production of vegan leather products and reduce cost.",
          ],
        },
        {
          org: "Sun Hung Kai Properties",
          title: "Summer Intern, Non-Property Investment Portfolio Division",
          period: "Jul 2025 – Sep 2025",
          lines: [
            "Led design and deployment of AI-driven automation across marketing, merchandising, and HR workflows, cutting related process time by ~85%.",
            "Delivered end-to-end automation tools (marketing template automation, price search systems), improving cross-functional collaboration and operational efficiency.",
          ],
        },
        {
          org: "Set-Sail AI",
          title: "Machine Learning Engineer Intern",
          period: "May 2025 – Jul 2025",
          lines: [
            "Developed and deployed a RAG-based monitoring system for QA of the AI virtual ambassador “Tracy” in MTR stations (sentiment, intent, protocol adherence).",
            "Integrated and fine-tuned ASR/TTS models; improved transcription accuracy by ~20%.",
          ],
        },
        {
          org: "Folkvang Trading",
          title: "Quantitative Developer Intern",
          period: "Sep 2023 – Dec 2023",
          lines: [
            "Built and back-tested trading bots for DeFi protocols using Node.js and SQL.",
            "Designed strategies across 3 protocols and researched 10+ DeFi projects for arbitrage opportunities.",
          ],
        },
        {
          org: "Alpha Trio Capital",
          title: "Investment Analyst Intern",
          period: "May 2023 – Aug 2023",
          lines: [
            "Financial analysis, models, and DD memos for 10+ Series A–C deals.",
            "Custom ESG KPIs and pitch materials for a green fund; supported IR presentations.",
          ],
        },
        {
          org: "Société Générale CIB",
          title: "Corporate Actions Intern",
          period: "Jun 2022 – Aug 2022",
          lines: [
            "Middle Office BAU: trade failures, confirmations.",
            "Risk dashboard and weekly forecast in Python/VBA for the trading desk.",
          ],
        },
      ],
    },
    projects: {
      heading: "Project experience",
      items: [
        {
          title: "APRU × Google Tech Policy Hackathon — 2nd runner-up (Bangkok)",
          period: "Jul 2025 – Oct 2025",
          lines: [
            "ML-based credit rating platform using alternative data for explainable scores for Indonesian farmers.",
          ],
        },
        {
          title: "Viu International — Meta LLM digital transformation (student consultant)",
          period: "Sep 2024 – Dec 2024",
          lines: [
            "Llama 3.6 notification & thumbnail chatbot in a team of six.",
            "Deployed on Google Cloud; A/B testing for UI variants.",
          ],
        },
        {
          title: "CBSA–Wisers Data Analytics Challenge — 2nd runner-up",
          period: "Jan 2023 – Feb 2023",
          lines: [
            "Climate and flood risk vs housing prices; materiality analysis in Python and R.",
          ],
        },
        {
          title: "UBS — Synapse Research (student consultant)",
          period: "Dec 2022 – Jan 2023",
          lines: [
            "Research on Northbound Stock Connect post-trade settlement; migration cost and churn estimates for UBS–HKEX Synapse integration.",
          ],
        },
        {
          title: "Amplify Trading Global Markets Competition — finalist",
          period: "Jan 2022 – Mar 2022",
          lines: [
            "S&P 500 pitch and FX risk ideas; top ~25% P/L in trading simulation among 442 teams.",
          ],
        },
      ],
    },
    research: {
      heading: "Research",
      items: [
        {
          org: "KTH Royal Institute of Technology",
          title: "Research Assistant",
          period: "Jun 2026 – Aug 2026",
          lines: [
            "Conducted research on smart-contract verification using LLMs under the supervision of Prof. Martin Monperrus and his research team.",
            "Identified 5+ security issues in existing blockchain implementations and communicated findings to developers for follow-up.",
          ],
        },
        {
          title: "FinThink — LLM-based multi-agent financial reasoning (UROP)",
          lines: [
            "Multi-agent architecture for financial reasoning: cognitive chains, reusable memory, coordination, and market-aware analysis.",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills & languages",
      rows: [
        {
          label: "Languages",
          value:
            "English (IELTS 7.0), Mandarin (fluent), Cantonese (native), Czech (intermediate)",
        },
        {
          label: "Programming",
          value:
            "Python, Java, C++, SQL, VBA, Solidity, JavaScript, HTML/CSS, R, Swift",
        },
        {
          label: "Interests",
          value:
            "DeFi, yacht sailing, economics, table tennis, cycling, guitar, piano",
        },
      ],
    },
    extras: {
      heading: "Extra-curricular",
      items: [
        {
          title: "Academic & Marketing Secretary — Marketing Students’ Society, HKUSTSU",
          period: "2022–2023",
          lines: [
            "Vice-Chair, Joint University Outstanding Marketing Award.",
            "Sponsorships with retail, hairstyling, and wholesale partners.",
          ],
        },
        {
          title: "‘Be a Government Official for a Day’ job shadowing",
          period: "Jul–Aug 2021",
          lines: [
            "Shadowed the Secretary for Transport and Housing; presented to officials, educators, and press.",
          ],
        },
      ],
    },
  },
  "zh-TW": {
    meta: { title: "鍾灝文 — 個人網站", htmlLang: "zh-Hant" },
    nav: {
      brand: "鍾灝文",
      about: "簡介",
      education: "學歷",
      experience: "經歷",
      projects: "項目",
      research: "研究",
      skills: "技能",
      extras: "活動",
      langEn: "English",
      langZh: "繁體中文",
    },
    hero: {
      name: "鍾灝文",
      role: "計算機科學與經濟學 · 人工智能與交易",
      tagline:
        "香港科技大學計算機科學與經濟學雙學位，人工智能擴展主修；熱衷於機器學習、自然語言處理與落地應用。",
      photoAlt: "鍾灝文專業照片",
      downloadCv: "下載履歷",
    },
    contact: {
      email: "owenchung03@gmail.com",
      phone: "+852 9288 3111",
      phoneLabel: "電話",
    },
    social: {
      linkedin: "LinkedIn 個人頁",
      linkedinPosts: "LinkedIn 動態",
      github: "GitHub",
    },
    about: {
      heading: "簡介",
      body:
        "對人工智能與技術充滿熱情，具備扎實的機器學習理論基礎與豐富的跨領域項目實踐。在多次實習中，將 AI 應用於金融、地產及客戶服務等場景並取得量化成果；具備快速學習、邏輯分析與跨文化溝通能力。",
    },
    education: {
      heading: "學歷",
      items: [
        {
          title: "香港科技大學 — 計算機科學與經濟學（雙學位）",
          period: "2021.9 – 2027.6",
          lines: [
            "人工智能（擴展主修），數學與物理（副修）。",
            "核心課程：機器學習、深度學習、自然語言處理、數據結構與算法、計量經濟學。",
            "國際交流：清華大學（計算機科學）、威斯康星大學麥迪遜分校（計算機科學與經濟學）學期交換。",
          ],
        },
      ],
    },
    experience: {
      heading: "工作經歷",
      items: [
        {
          org: "Fruitful",
          title: "聯合創辦人兼營運總監",
          period: "2025.4 – 至今",
          lines: [
            "為素皮初創促成逾 11 萬美元種子輪融資，並舉辦面向 60 餘名參與者的工作坊，實現營收。",
            "正尋求與工廠合作，以優化素皮產品生產並降低成本。",
          ],
        },
        {
          org: "新鴻基地產",
          title: "非物業投資組合業務部暑期實習生",
          period: "2025.7 – 2025.9",
          lines: [
            "主導設計並部署 AI 驅動自動化方案，覆蓋市場、商品及人力資源流程，將相關業務流程耗時減少約 85%。",
            "交付端到端自動化工具（營銷模板自動化、價格搜索系統），提升跨部門協作與運營效率。",
          ],
        },
        {
          org: "Set-Sail AI",
          title: "機器學習工程師實習生",
          period: "2025.5 – 2025.7",
          lines: [
            "設計並部署基於 RAG 的呼叫監控工具，自動化質檢客服語音機器人通話，分析轉錄文本的情感及協議符合度。",
            "集成並微調 ASR 與 TTS 模型，將語音轉錄準確率提升約 20%。",
          ],
        },
        {
          org: "Folkvang Trading",
          title: "量化開發實習生",
          period: "2023.9 – 2023.12",
          lines: [
            "使用 Node.js 與 SQL 為 DeFi 協議開發並回測交易機器人；設計多種交易策略並探索 Layer-2。",
            "深入研究 10 餘個 DeFi 協議，識別潛在套利機會。",
          ],
        },
        {
          org: "Alpha Trio Capital",
          title: "投資分析師實習生",
          period: "2023.5 – 2023.8",
          lines: [
            "完成 10 餘個 A–C 輪項目的財務分析、模型搭建及盡職調查備忘錄。",
            "開發 ESG 影響衡量 KPI，協助新綠色基金募資材料與高淨值客戶演示。",
          ],
        },
        {
          org: "法國興業銀行企業及投資銀行",
          title: "企業行動實習生",
          period: "2022.6 – 2022.8",
          lines: [
            "中台日常運營：交易失敗處理、確認書等。",
            "以 Python／VBA 為交易台構建風險儀表板與週報預測。",
          ],
        },
      ],
    },
    projects: {
      heading: "項目經歷",
      items: [
        {
          title: "APRU × Google 科技政策黑客松（亞軍）",
          period: "2025.7 – 2025.10",
          lines: [
            "隊長兼核心開發：以替代數據構建特徵工程與模型訓練 pipeline，將非傳統數據轉化為可解釋信用分。",
          ],
        },
        {
          title: "Viu 國際數字化轉型（基於 Meta LLM）— 學生顧問",
          period: "2024.9 – 2024.12",
          lines: [
            "六人團隊中負責基於 Llama 3.6 的通知與縮略圖生成聊天機器人核心模塊。",
            "部署至 Google Cloud，並以 A/B 測試驗證 UI 功能。",
          ],
        },
        {
          title: "數碼港創業路演大賽（亞軍）— 隊長",
          period: "2022.3 – 2022.4",
          lines: [
            "結合醫管局 HA Go，設計智能藥物分配方案；以 Swift 開發 iOS 原型與用藥提醒調度。",
          ],
        },
        {
          title: "UBS–Synapse Research — 學生顧問",
          period: "2022.12 – 2023.1",
          lines: [
            "北向滬深港通場景下 Synapse 交易後結算調研；測算 UBS 對接 HKEX Synapse 的遷移成本、資本投入與客戶流失。",
          ],
        },
        {
          title: "「與香港同行」— 政府官員工作影子計劃",
          period: "2021.7 – 2021.8",
          lines: [
            "擔任運輸及房屋局影子局長，跟隨局長團隊並向官員、教育界及傳媒分享體驗。",
          ],
        },
      ],
    },
    research: {
      heading: "研究經歷",
      items: [
        {
          org: "瑞典皇家理工學院（KTH）",
          title: "研究助理",
          period: "2026.6 – 2026.8",
          lines: [
            "在 Martin Monperrus 教授及其研究團隊指導下，研究以大語言模型驗證智能合約。",
            "在現有區塊鏈實現中識別 5 項以上安全問題，並向開發者溝通發現以便跟進。",
          ],
        },
        {
          title: "FinThink — 基於大語言模型的金融推理多智能體系統（UROP）",
          lines: [
            "認知鏈架構、STL 協議、分層可復用記憶、統一協調框架與市場認知結算；結構化情感信號、多智能體協同與長短週期市場分析。",
          ],
        },
      ],
    },
    skills: {
      heading: "相關技能",
      rows: [
        {
          label: "語言能力",
          value: "英語（IELTS 7.0），普通話（流利），粵語（母語），捷克語（中級）",
        },
        {
          label: "編程語言",
          value:
            "Python（精通）, Java, C++, SQL, R, JavaScript, HTML/CSS, Solidity, Swift, VBA",
        },
        {
          label: "技術領域",
          value:
            "機器學習／深度學習，自然語言處理（NLP），自動化流程開發，數據分析與可視化",
        },
        {
          label: "工具與框架",
          value:
            "PyTorch, TensorFlow, BERT, RAG, ASR/TTS, Node.js, Google Cloud Platform",
        },
      ],
    },
    extras: {
      heading: "課外活動",
      items: [
        {
          title: "香港科技大學學生會市場學會 — 學術及市場秘書",
          period: "2022 – 2023",
          lines: [
            "擔任聯校傑出市場大獎副主席，協調贊助與跨校活動。",
          ],
        },
      ],
    },
  },
};
