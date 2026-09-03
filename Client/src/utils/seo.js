// utils/seo.js - Central SEO config for Tanglome (Coimbatore → All India)
export const SITE = {
  name: "Tanglome",
  domain: "https://tanglome.in", // TODO: replace with final domain when deployed
  url: "https://tanglome.in",
  email: "hellotanglome@gmail.com",
  phone: "+91 95854 58794",
  whatsapp: "919585458794",
  locale: "en_IN",
  lang: "en",
  // Geo - Coimbatore
  geo: {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "IN",
    postalCode: "641001",
    lat: 11.0168,
    lng: 76.9558,
    address: "Coimbatore, Tamil Nadu, India - Serving clients across India",
  },
  social: {
    instagram: "https://www.instagram.com/tanglome/",
    linkedin: "https://in.linkedin.com/company/tanglome",
    behance: "https://behance.net/tanglome",
    dribbble: "https://dribbble.com/tanglome",
    twitter: "https://x.com/tanglome",
  },
  ogImage: "https://tanglome.in/og-image.jpg",
  logo: "https://tanglome.in/favicon.svg",
}

// ── Master keywords ──
// Coimbatore-first + All-India modifiers (used in index.html + per-page overrides)
export const GLOBAL_KEYWORDS = [
  // Brand & core
  "Tanglome", "Tanglome Coimbatore", "Tanglome India",
  // Core services
  "web development company Coimbatore", "web development company India",
  "website development Coimbatore", "website development India",
  "MERN stack development", "Next.js development company",
  "SaaS development company India", "CRM development Coimbatore", "HRM development",
  "ecommerce website development Coimbatore", "ecommerce development India",
  "mobile app development Coimbatore", "mobile app development company India",
  "React Native app development", "iOS Android app development Coimbatore",
  // AI & automation
  "AI automation company India", "AI automation Coimbatore",
  "AI agents development", "WhatsApp automation", "bulk WhatsApp Coimbatore",
  "bulk email marketing India", "trading bot development", "n8n automation",
  "lead scraping services India", "workflow automation Coimbatore",
  // Marketing & growth
  "digital marketing agency Coimbatore", "digital marketing agency India",
  "SEO company Coimbatore", "SEO services India", "SEO agency Coimbatore",
  "Google Ads agency Coimbatore", "Meta Ads agency India", "LinkedIn Ads",
  "performance marketing Coimbatore", "ROAS agency India",
  "social media marketing Coimbatore", "social media marketing agency India",
  "Instagram marketing Coimbatore", "YouTube marketing India",
  // Creative
  "video editing company Coimbatore", "video editing services India",
  "cinematography Coimbatore", "reels editing India", "YouTube editing services",
  "ad film production Coimbatore", "colour grading DaVinci",
  // Local + India modifiers
  "best web development company Coimbatore", "best digital marketing agency Coimbatore",
  "startup product studio India", "product studio Coimbatore",
  "website design Coimbatore", "app development Coimbatore",
  // City modifiers - All India
  "web development Chennai", "web development Bangalore", "web development Hyderabad",
  "web development Mumbai", "web development Delhi", "web development Pune",
  "web development Kochi", "web development Kolkata", "web development Ahmedabad",
  "web development Jaipur", "web development Lucknow", "web development Surat",
  "digital marketing Chennai", "digital marketing Bangalore", "digital marketing Hyderabad",
  "digital marketing Mumbai", "digital marketing Delhi",
  "SEO services Chennai", "SEO services Bangalore", "SEO services Mumbai",
  "app development Chennai", "app development Bangalore", "app development Hyderabad",
  "AI automation Chennai", "AI automation Bangalore", "AI automation Mumbai",
].join(", ")

export const DEFAULT_TITLE = "Tanglome - Web, AI, Apps & Growth Studio in Coimbatore | Serving All India"
export const DEFAULT_DESCRIPTION =
  "Tanglome is a Coimbatore-based product studio shipping web apps, mobile apps, AI automation, video editing & performance marketing. MERN/Next.js, React Native, n8n, SEO & ads - live link in 48h, fixed price, serving startups & enterprises across India."

export const PAGE_SEO = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: GLOBAL_KEYWORDS,
  },
  work: {
    title: "Work - 35+ Products Shipped | Web, SaaS, AI & Apps | Tanglome Coimbatore",
    description: "Explore 35+ products shipped by Tanglome - CRM, SaaS, e-commerce, parking, fintech, clinic OS, AI bots & e-commerce. MERN, Next.js & React Native work from Coimbatore for clients across India.",
    keywords: `portfolio, case studies, web apps shipped, SaaS projects India, ${GLOBAL_KEYWORDS}`,
  },
  blog: {
    title: "Blog - Insights on Web Dev, AI, SEO & Growth | Tanglome",
    description: "Practical playbooks from Tanglome on web development, AI automation, SEO, ad campaigns & product growth - from our Coimbatore studio to teams across India.",
    keywords: `blog, web development blog, AI automation insights, SEO tips India, ${GLOBAL_KEYWORDS}`,
  },
  about: {
    title: "About Tanglome - Product Studio in Coimbatore | Our Story & Team",
    description: "We untangle complex ideas into simple products. Senior team shipping web, mobile, AI & marketing from Coimbatore for India - fixed price, live in 21 days.",
    keywords: `about Tanglome, product studio Coimbatore, startup studio India, ${GLOBAL_KEYWORDS}`,
  },
  contact: {
    title: "Contact Tanglome - Get Your Free 21-Day Plan | Coimbatore, India",
    description: "Talk to Tanglome in Coimbatore. Get a free 21-day plan with scope, timeline & fixed price. Serving startups pan-India - web, apps, AI & growth under one roof.",
    keywords: `contact Tanglome, web development quote Coimbatore, app development quote India, ${GLOBAL_KEYWORDS}`,
  },
  services: {
    "web-development": {
      title: "Web Development Company in Coimbatore & India - MERN, Next.js, SaaS | Tanglome",
      description: "Custom CRM, SaaS, HRM & e-commerce with Next.js/MERN. 120+ apps shipped, live link in 48h. Coimbatore studio serving all India. Fixed price.",
      keywords: "web development Coimbatore, MERN development India, SaaS development, Next.js agency, CRM development",
    },
    "ai-automation": {
      title: "AI Automation Company in Coimbatore & India - Bots, WhatsApp, n8n | Tanglome",
      description: "AI agents, trading bots, bulk WhatsApp/email & n8n workflows saving 30k+ hours. Coimbatore-based, serving all India. 24/7 autopilot.",
      keywords: "AI automation Coimbatore, AI agents India, bulk WhatsApp, trading bot, n8n automation",
    },
    "editing-cinematography": {
      title: "Video Editing & Cinematography in Coimbatore & India | 500+ Edits | Tanglome",
      description: "Reels, ads, shoots & colour grading with Premiere/DaVinci. 500+ edits, 2M+ views. Coimbatore crew, pan-India shoots.",
      keywords: "video editing Coimbatore, cinematography India, reels editing, DaVinci colour grading",
    },
    "ad-campaigns": {
      title: "Performance Marketing & Ad Campaigns - Google, Meta, LinkedIn | Tanglome Coimbatore",
      description: "Google/Meta/LinkedIn ads with 4.2× avg ROAS, creatives & funnel. ₹2.1Cr+ managed. Coimbatore agency for all India.",
      keywords: "Google Ads Coimbatore, Meta Ads India, LinkedIn Ads, performance marketing, ROAS agency",
    },
    "social-media-marketing": {
      title: "Social Media Marketing in Coimbatore & India - IG, YouTube, LinkedIn | Tanglome",
      description: "Content engine for IG/YouTube/LinkedIn - strategy, shoots, edits & DMs. 2M+ reach/mo, 3× growth. Coimbatore → all India.",
      keywords: "social media marketing Coimbatore, Instagram marketing India, YouTube growth, LinkedIn marketing",
    },
    "mobile-app-development": {
      title: "Mobile App Development in Coimbatore & India - React Native | Tanglome",
      description: "React Native iOS+Android apps - 25+ live, 4.7★, TestFlight in 14 days. Coimbatore studio, all-India delivery.",
      keywords: "mobile app development Coimbatore, React Native India, iOS Android development",
    },
  },
}

export function canonical(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${SITE.url.replace(/\/$/, "")}${clean}`
}
