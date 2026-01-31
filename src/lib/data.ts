import { Compass, Smartphone, Monitor, HardHat, GanttChartSquare, Rocket, Users, XCircle } from 'lucide-react';
import { PlaceHolderImages as placeholderImages } from './placeholder-images';
import type { ImagePlaceholder } from './placeholder-images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const coreServices = [
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native iOS, Android, and cross-platform mobile applications. From concept to App Store, we build apps that users love.',
    includes: ['Native iOS (Swift, SwiftUI)', 'Native Android (Kotlin, Jetpack Compose)', 'Cross-Platform (React Native, Flutter)', 'Progressive Web Apps (PWA)', 'AR/VR Applications', 'Wearable App Integration'],
    href: '/services/app-development',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
    startingPrice: '₹3,50,000'
  },
  {
    icon: Monitor,
    title: 'Web & E-commerce',
    description: 'Lightning-fast websites and e-commerce platforms. Custom web applications, headless commerce, and conversion-optimized stores.',
    includes: ['Custom Web Applications (Next.js, React)', 'E-commerce Platforms (Shopify, WooCommerce, Custom)', 'Headless CMS Solutions (Contentful, Sanity)', 'Web3 & Blockchain Integration', 'Performance Optimization', 'SEO & Analytics Setup'],
    href: '/services/web-ecommerce',
    techStack: ['Next.js', 'React', 'Shopify', 'Node.js', 'PostgreSQL'],
    startingPrice: '₹1,50,000'
  },
  {
    icon: HardHat,
    title: 'Enterprise AI Solutions',
    description: 'Custom AI models, ChatGPT integrations, automation workflows, and intelligent systems that transform businesses.',
    includes: ['Custom AI Models & Training', 'ChatGPT/LLM Integration', 'Automation Workflows (RPA)', 'Predictive Analytics', 'Computer Vision Solutions', 'NLP & Sentiment Analysis', 'AI-Powered Chatbots'],
    href: '/services/enterprise-ai',
    techStack: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python', 'AWS'],
    startingPrice: '₹2,00,000'
  },
  {
    icon: Compass,
    title: 'Strategy & Design',
    description: 'UX/UI research, brand identity, digital strategy, and design systems. Where business goals meet beautiful execution.',
    includes: ['UX/UI Research & Design', 'Brand Identity Development', 'Digital Strategy Consulting', 'Growth Marketing Plans', 'Conversion Rate Optimization', 'Design Systems Creation'],
    href: '/services/strategy-design',
    techStack: ['Figma', 'Adobe XD', 'Design Systems', 'UX Research'],
    startingPrice: '₹75,000'
  }
];

export const howWeWork = [
  { title: 'Discovery Call', description: 'We understand your problem' },
  { title: 'Proposal & Scoping', description: 'We define the solution' },
  { title: 'Contract & Kickoff', description: 'We start building' },
  { title: 'Build & QA', description: 'We deliver with precision' },
  { title: 'Launch & Handover', description: 'You own the finished asset' },
];

export const trustLogos = placeholderImages.filter(p => p.id.startsWith('logo-'));

const allProjects = [
  {
    id: 'ultratech-shashwat',
    title: 'UltraTech Shashwat Portal',
    category: 'Enterprise Solutions',
    tag: 'Enterprise Tech',
    description: 'A critical dealer management portal delivered in under 48 hours for India\'s largest cement company.',
    techStack: 'Next.js, Firebase, Tailwind CSS',
    results: ['<48-hour delivery', 'Production-ready system', 'Enterprise-grade security'],
    isFeatured: true,
    image: placeholderImages.find(p => p.id === 'portfolio-ultratech'),
  },
  {
    id: 'jeevolve',
    title: 'JEEvolve - EdTech Platform',
    category: 'App Development',
    tag: 'Education Technology',
    description: 'An advanced EdTech platform for JEE Chemistry students with interactive learning modules.',
    techStack: 'React, Node.js, Custom LMS',
    isFeatured: false,
    image: placeholderImages.find(p => p.id === 'portfolio-jeevolve'),
  },
  {
    id: 'careercompass',
    title: 'CareerCompassAI',
    category: 'AI & Custom Tools',
    tag: 'AI-Powered Tool',
    description: 'A sophisticated AI-powered career navigation tool helping students find their perfect career path.',
    techStack: 'AI/ML, Python, React',
    isFeatured: true,
    image: placeholderImages.find(p => p.id === 'portfolio-careercompass'),
  },
  {
    id: 'sievelab',
    title: 'SieveLab - ConTech Calculator',
    category: 'AI & Custom Tools',
    tag: 'Construction Tech',
    description: 'Custom calculation tool for civil engineers to perform sieve analysis and aggregate testing.',
    techStack: 'Web App, Data Visualization',
    isFeatured: true,
    image: placeholderImages.find(p => p.id === 'portfolio-sievelab'),
  },
  {
    id: 'ghamelacalc',
    title: 'GhamelaCalc - Civil Engineering Tool',
    category: 'AI & Custom Tools',
    tag: 'Engineering Solution',
    description: 'Specialized calculator for civil engineers solving complex construction mathematics.',
    techStack: 'Progressive Web App',
    isFeatured: true,
    image: placeholderImages.find(p => p.id === 'portfolio-ghamelacalc'),
  },
  {
    id: 'custom-website',
    title: 'High-Conversion Website',
    category: 'Website & E-commerce',
    tag: 'Marketing Site',
    description: 'A custom marketing website designed to convert visitors into customers for a leading SaaS company.',
    techStack: 'Next.js, Sanity CMS, Vercel',
    isFeatured: false,
    image: placeholderImages.find(p => p.id === 'portfolio-custom'),
  },
];

export const portfolio = {
    all: allProjects,
    featured: allProjects.filter(p => p.isFeatured),
}

export const insights = [
    {
        slug: "48-hour-enterprise-build",
        title: "The 48-Hour Enterprise Build: A Post-Mortem",
        excerpt: "An inside look at how we architected and deployed a mission-critical enterprise portal for UltraTech Cement in under two days.",
        readTime: "8 min read",
        date: "July 15, 2024",
        image: placeholderImages.find(p => p.id === 'case-study-ultratech'),
        isFeatured: true,
    },
    {
        slug: "why-strategy-first",
        title: "Why Your App Needs a Strategy Blueprint First",
        excerpt: "Jumping into code without a blueprint is the #1 cause of failure. Here’s how our strategy-first approach de-risks your investment.",
        readTime: "5 min read",
        date: "July 10, 2024",
        image: placeholderImages.find(p => p.id === 'portfolio-ghamelacalc'),
        isFeatured: false,
    },
    {
        slug: "rejecting-retainers",
        title: "The 5-Figure Mistake: Why We Reject Retainers",
        excerpt: "We believe retainers create misaligned incentives. Discover why our project-based model delivers better results for our clients.",
        readTime: "6 min read",
        date: "July 1, 2024",
        image: placeholderImages.find(p => p.id === 'portfolio-jeevolve'),
        isFeatured: false,
    }
]

export const modelPillars = [
  {
    icon: XCircle,
    title: "No Overhead",
    description: "You don't pay for our 'Chief Dog-Walking Officer.' Our 2-person leadership model means zero bloat, maximum efficiency."
  },
  {
    icon: Users,
    title: "Direct C-Suite Access",
    description: "Your project is managed by our Head of PM and architected by our Founder/CTO. No junior devs. No project handoffs."
  },
  {
    icon: Rocket,
    title: "Finished Assets Only",
    description: "We deliver complete solutions, not ongoing retainers. Your project has a defined scope, timeline, and deliverable."
  }
]
