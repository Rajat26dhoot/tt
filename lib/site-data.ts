import {
  AppWindow,
  Blocks,
  Bot,
  CloudCog,
  Code2,
  Cpu,
  DatabaseZap,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Tech", href: "#technologies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Custom Software Development",
    description:
      "Secure, scalable platforms engineered around your workflow, data model and growth roadmap.",
    icon: Code2,
    tags: ["SaaS", "Enterprise", "Automation"]
  },
  {
    title: "Full Stack Web Development",
    description:
      "Conversion-ready web apps with polished UX, clean architecture and fast Core Web Vitals.",
    icon: Globe2,
    tags: ["React", "Next.js", "Node"]
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feeling Android and iOS apps with frictionless onboarding and reliable releases.",
    icon: Smartphone,
    tags: ["iOS", "Android", "React Native"]
  },
  {
    title: "API Development & Integration",
    description:
      "Robust APIs, third-party integrations and event-driven systems with clear contracts.",
    icon: Workflow,
    tags: ["REST", "GraphQL", "Webhooks"]
  },
  {
    title: "Cloud Integration",
    description:
      "Cloud-native infrastructure across AWS, Azure and GCP with resilient observability.",
    icon: CloudCog,
    tags: ["AWS", "Azure", "GCP"]
  },
  {
    title: "DevOps & Deployment",
    description:
      "CI/CD, containers and release pipelines that make shipping predictable and reversible.",
    icon: ServerCog,
    tags: ["Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "AI/ML Solutions",
    description:
      "LLM workflows, predictive models and intelligent automation embedded into real products.",
    icon: Bot,
    tags: ["LLMs", "MLOps", "RAG"]
  },
  {
    title: "Blockchain Development",
    description:
      "Smart contracts, wallets and tokenized systems with audit-minded engineering patterns.",
    icon: Blocks,
    tags: ["Smart Contracts", "Web3", "DeFi"]
  }
];

export const projects = [
  {
    title: "FinEdge Command Center",
    type: "FinTech SaaS",
      summary:
        "A real-time treasury platform with role-based dashboards, payment orchestration and audit-grade analytics.",
      metrics: ["42% faster settlements", "99.98% uptime", "12 integrations"],
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      image: "/finedge-command-center.svg"
    },
    {
      title: "Nimbus Health Mobile",
      type: "Healthcare App",
      summary:
        "A HIPAA-conscious patient engagement app for care plans, appointments and secure provider messaging.",
      metrics: ["4.8 app rating", "61% retention lift", "2M events/month"],
      gradient: "from-cyan-400 via-blue-500 to-violet-500",
      image: "/nimbus-health-mobile.svg"
    },
    {
      title: "AtlasOps Cloud Migration",
      type: "Cloud & DevOps",
    summary:
        "A phased AWS migration with infrastructure as code, zero-downtime deploys and unified monitoring.",
      metrics: ["35% lower infra cost", "8 min releases", "0 rollback incidents"],
      gradient: "from-emerald-400 via-cyan-500 to-blue-600",
      image: "/atlasops-cloud-migration.svg"
    }
  ];

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "OpenAI",
  "TensorFlow",
  "Solidity"
];

export const values = [
  {
    title: "Mission",
    text: "Turn ambitious product ideas into dependable systems that feel effortless to use and practical to scale.",
    icon: Rocket
  },
  {
    title: "Vision",
    text: "A future where every growing company can ship intelligent software with the polish of a category leader.",
    icon: Cpu
  },
  {
    title: "Operating Standard",
    text: "Senior engineering judgment, thoughtful UX, transparent delivery and security from the first sprint.",
    icon: ShieldCheck
  }
];

export const team = [
  { name: "Aarav Mehta", role: "Principal Architect", focus: "Cloud platforms" },
  { name: "Maya Rao", role: "Product Design Lead", focus: "Premium UX systems" },
  { name: "Ishaan Kapoor", role: "AI Engineering Lead", focus: "LLM and data products" }
];

export const pricing = [
  {
    name: "Launch",
    price: "Custom",
    description: "For MVPs, websites and focused product validation.",
    features: ["Discovery sprint", "Responsive UI", "CMS/API setup", "Launch support"]
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For full-stack platforms and growth-stage systems.",
    features: ["Product roadmap", "Full-stack build", "Cloud deployment", "Analytics and QA"],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex integrations, AI, security and multi-team delivery.",
    features: ["Solution architecture", "SLA planning", "DevOps maturity", "Dedicated team"]
  }
];

export const proofPoints = [
  { value: "120+", label: "products shipped" },
  { value: "9.6/10", label: "client satisfaction" },
  { value: "34%", label: "avg. delivery acceleration" },
  { value: "24/7", label: "launch monitoring" }
];

export const process = [
  { title: "Discover", text: "Clarify goals, users, constraints and success metrics." },
  { title: "Design", text: "Prototype the user flow and technical architecture together." },
  { title: "Build", text: "Ship in weekly increments with demos, QA and clean documentation." },
  { title: "Scale", text: "Optimize, automate and harden the platform for real usage." }
];

export const trustBadges = [
  { label: "SOC2-ready delivery", icon: LockKeyhole },
  { label: "Composable architecture", icon: Layers3 },
  { label: "Data-first products", icon: DatabaseZap },
  { label: "Release confidence", icon: GitBranch },
  { label: "Premium interfaces", icon: AppWindow }
];
