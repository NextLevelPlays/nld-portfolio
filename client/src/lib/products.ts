export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string | null;
  status: string;
  statusType: 'live' | 'dev' | 'complete' | 'concept' | 'beta';
  cta: string;
  hasTimer: boolean;
  hasBetaTimer?: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'hiked',
    name: 'HIKED',
    tagline: 'Outdoor Safety Platform',
    description: 'AI-powered outdoor safety platform connecting adventurers with Search & Rescue teams. Real-time location sharing, SOS bridge technology, and off-grid communication for hikers, hunters, and outdoor enthusiasts.',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/hiked_logo_e7939a14.png',
    status: 'In Development — MVP Complete',
    statusType: 'dev',
    cta: 'Get Early Access Pricing',
    hasTimer: true,
    featured: true,
  },
  {
    id: 'projectpro',
    name: 'Project Pro',
    tagline: 'AI Contractor Estimating',
    description: 'AI-powered estimating tool built by a contractor, for contractors. Generate professional PDF estimates instantly with smart pricing that learns YOUR business. No competitor AI touches your data.',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/projectpro_icon_1f2b5e4b.png',
    status: 'Live — Beta',
    statusType: 'live',
    cta: 'Try Project Pro',
    hasTimer: false,
    hasBetaTimer: true,
    featured: true,
  },
  {
    id: 'myguideai',
    name: 'My Guide AI',
    tagline: 'AI Navigation & Guide',
    description: 'AI-powered navigation and guide assistant for outdoor exploration. Smart routing, contextual recommendations, and real-time guidance powered by artificial intelligence.',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/myguideai_logo_b0b4fb71.png',
    status: 'In Development',
    statusType: 'dev',
    cta: 'Get Early Access Pricing',
    hasTimer: true,
    featured: true,
  },
  {
    id: 'trunu',
    name: 'TruNu',
    tagline: 'AI Habit Coach & Personal Development',
    description: 'The only tool that builds the new you. AI-powered habit coaching with personality-based onboarding, habit tracking, and guided self-transformation. Break bad habits, build new ones, become who you want to be.',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/trunu_logo_b2853cf6.png',
    status: 'Source Code Complete',
    statusType: 'complete',
    cta: 'Join the Waitlist',
    hasTimer: false,
    featured: true,
  },
  {
    id: 'spillit',
    name: 'SpillIt!',
    tagline: 'Anonymous Secrets Game',
    description: 'Post your secrets anonymously. Read others. Vote on the wildest ones. Daily winners in three categories take home cash prizes. The viral anonymous secrets game with in-app purchases and social sharing.',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/spillit_logo_2fabb185.png',
    status: 'Beta — Limited Access',
    statusType: 'beta',
    cta: 'Join the Waitlist',
    hasTimer: false,
    featured: true,
  },
  {
    id: 'roastme',
    name: 'RoastME AI',
    tagline: 'AI Comedy Roast Game',
    description: 'Take a selfie. Get absolutely roasted by AI. Share the laughs. A hilariously savage AI-powered roast game that pulls no punches.',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663152740364/MiQBYzbv8KT7fLJyBs7oEx/roastme_logo_2291e9c8.png',
    status: 'Source Code Complete',
    statusType: 'complete',
    cta: 'Join the Waitlist',
    hasTimer: false,
    featured: true,
  },
  {
    id: 'screenclean',
    name: 'Screen Clean',
    tagline: 'AI Call Screener & Virtual Receptionist',
    description: 'AI-powered call screening with a twist. Legitimate callers get a professional virtual receptionist with multiple voicemail boxes. Scammers and spammers get sent into an infinite loop of hold music, rambling stories, and the runaround.',
    icon: null,
    status: 'In Development',
    statusType: 'dev',
    cta: 'Learn More',
    hasTimer: false,
    featured: false,
  },
  {
    id: 'botstopper',
    name: 'Bot Stopper',
    tagline: 'AI Scam Detection & Protection',
    description: 'Upload screenshots, paste URLs, or share chat threads from texts, dating sites, or any platform. Bot Stopper analyzes context, researches known scam patterns, and gives you a clear risk rating before you get burned.',
    icon: null,
    status: 'Source Code Complete',
    statusType: 'complete',
    cta: 'Join the Waitlist',
    hasTimer: false,
    featured: false,
  },
  {
    id: 'mystories',
    name: 'My Stories',
    tagline: 'AI Bedtime Story Generator',
    description: 'AI-generated personalized bedtime stories for kids. 6-10 minute stories with character voices, read aloud while you handle the nightly routine. Because bedtime shouldn\'t be stressful for anyone.',
    icon: null,
    status: 'Concept Stage',
    statusType: 'concept',
    cta: 'Join the Waitlist',
    hasTimer: false,
    featured: false,
  },
];
