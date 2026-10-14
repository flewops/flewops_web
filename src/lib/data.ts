import {
  ShieldCheck,
  Boxes,
  ShoppingBag,
  BrainCircuit,
  MessagesSquare,
  Network,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  bg: string;
  features: string[];
  process: { title: string; text: string }[];
  impact: { value: string; label: string }[];
  image?: string;
};

export const services: Service[] = [
  {
    id: "security",
    slug: "security",
    name: "Data Security",
    tagline: "Fortress-grade protection",
    shortDesc:
      "Protect your business from cyber threats with enterprise-grade MFA security, data privacy, and secure cloud operations.",
    description:
      "FlewOps helps businesses protect their applications, users, and business data with modern security solutions. We implement Zero Trust security, Multi-Factor Authentication (MFA), secure login systems, Keycloak-based Identity & Access Management (IAM), AES-256 encryption, role-based access control, and continuous security monitoring. Whether your applications are hosted on the cloud or on your own servers, we build security that is simple to manage, scalable, and ready for compliance requirements.",
    icon: ShieldCheck,
    accent: "text-lime",
    bg: "from-lime/25 to-transparent",
    features: [
      "Multi-Factor Authentication (MFA) solutions",
      "Real-time threat detection & alerts",
      "Compliance-ready (GDPR, ISO, SOC 2)",
      "Keycloak Customisation",
      "Role-Based Access Control (RBAC)",
      "Network security and firewall protection",
      "Zero-trust access control",
    ],
    process: [
      { title: "Security Audit", text: "We review your applications, infrastructure, and security setup to identify risks and recommend improvements." },
      { title: "Security Solution Design", text: "We design secure authentication, authorization, MFA, and Keycloak solutions that match your business needs." },
      { title: "Implementation", text: "We configure secure login, MFA, encryption, access controls, Keycloak, and monitoring to protect your applications." },
      { title: "Continuous Protection", text: "We provide continuous monitoring, regular security updates, vulnerability checks, and ongoing support to keep your systems secure." },
    ],
    impact: [
      { value: "99.9%", label: "Security Protection" },
      { value: "0", label: "Data breaches" },
      { value: "24/7", label: "Security Monitoring" },
    ],
    image: "/images/security.jpg",
  },
  {
    id: "erp",
    slug: "erp",
    name: "ERP Solutions",
    tagline: "Business Operating System",
    shortDesc:
      "One unified platform for finance, inventory, HR, sales and operations — accessible anywhere, on any device.",
    description:
      "FlewOps delivers enterprise ERP solutions that bring every department together on one intelligent platform. Manage accounting, GST, inventory, procurement, sales, CRM, HR, payroll, manufacturing, quality control, compliance filing, and business reporting with real-time visibility. Our ERP adapts to your business processes, integrates with your existing software, and provides role-based dashboards, workflow automation, and powerful analytics. Whether deployed on the cloud, on-premise, or in a hybrid environment, our solution helps businesses improve productivity, reduce manual work, ensure statutory compliance, and make faster business decisions.",
    icon: Boxes,
    accent: "text-cyan",
    bg: "from-cyan/20 to-transparent",
    features: [
      "Accounting & Financial Management",
      "GST & Statutory Compliance",
      "Inventory & Manufacturing",
      "Sales, CRM & Procurement",
      "HR, Payroll & Attendance",
      "Business Intelligence & Reporting",
      "Workflow Automation",
      "Mobile-Friendly Access",
    ],
    process: [
      {
        title: "Business Process Analysis",
        text: "Understand your operations, departments, workflows, and reporting requirements to design the right ERP solution.",
      },
      {
        title: "ERP Configuration",
        text: "Configure modules for accounting, GST, inventory, manufacturing, HR, sales, procurement, and compliance based on your business needs.",
      },
      {
        title: "Implementation & Integration",
        text: "Migrate existing data, integrate with third-party applications, automate workflows, and ensure smooth deployment with minimal disruption.",
      },
      {
        title: "Training & Continuous Support",
        text: "Train your team, monitor system performance, provide ongoing support, and continuously improve the ERP as your business grows.",
      },
    ],
    impact: [
      { value: "70%", label: "Less Manual Work" },
      { value: "3x", label: "Faster Business Reporting" },
      { value: "100%", label: "Business Process Visibility" },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecom",
    name: "E-Commerce",
    tagline: "Sell online with confidence",
    shortDesc:
      "Launch a fast, secure, and scalable e-commerce platform with inventory, payments, shipping, and ERP integration.",
    description:
      "FlewOps develops modern e-commerce solutions that help businesses sell products online with ease. We build fast, mobile-friendly online stores with secure payment gateways, smart inventory management, order tracking, shipping integration, customer management, and real-time analytics. Our e-commerce platforms integrate seamlessly with ERP, accounting, CRM, and warehouse systems, allowing you to manage your entire business from a single platform. Whether you are starting a new online store or expanding your existing business, we deliver scalable solutions that improve customer experience and drive business growth.",
    icon: ShoppingBag,
    accent: "text-magenta",
    bg: "from-magenta/20 to-transparent",
    features: [
      "Responsive Online Store Development",
      "Secure Payment Gateway Integration",
      "Inventory & Stock Management",
      "Order & Shipping Management",
      "ERP & Accounting Integration",
      "Product & Category Management",
      "Discounts, Coupons & Promotions",
      "Business Analytics & Sales Reports",
      "Mobile-Optimized Shopping Experience",
    ],
    process: [
        {
          title: "Business Requirement Analysis",
          text: "Understand your products, customers, sales process, and business goals before designing your online store.",
        },
        {
          title: "Store Development & Integration",
          text: "Develop your e-commerce platform and integrate payments, inventory, ERP, CRM, shipping partners, and other business applications.",
        },
        {
          title: "Testing & Deployment",
          text: "Test every feature, optimize website speed, ensure secure transactions, and launch your online store with confidence.",
        },
        {
          title: "Growth & Support",
          text: "Provide continuous maintenance, feature enhancements, security updates, SEO improvements, and performance monitoring as your business grows.",
        },
    ],
    impact: [
      { value: "2x", label: "Faster Order Processing" },
      { value: "99.9%", label: "Platform Availability" },
      { value: "100%", label: "Business Integration" },
    ],
    image: "/images/ecommerce.jpg",
  },
  {
    id: "ai",
    slug: "ai",
    name: "AI Solutions",
    tagline: "AI agents that understand your business",
    shortDesc:
      "Build centralized AI agents, automate business processes, and create secure enterprise knowledge systems powered by your own business data.",
    description:
      "FlewOps helps businesses adopt Artificial Intelligence through intelligent AI agents, workflow automation, and centralized enterprise knowledge platforms. We build AI solutions that securely understand your company documents, SOPs, policies, manuals, and business data using Retrieval-Augmented Generation (RAG). Our AI agents can answer employee questions, assist customers, automate repetitive tasks, generate reports, process documents, and support decision-making while integrating seamlessly with your ERP, CRM, HRMS, and other business applications. Every solution is designed to keep your business knowledge secure, accurate, and accessible across your organization.",
    icon: BrainCircuit,
    accent: "text-violet",
    bg: "from-violet/30 to-transparent",
    features: [
      "Smart workflow automation",
      "Predictive analytics & forecasting",
      "AI agent orchestration",
      "Document processing & OCR",
      "Centralized Business Knowledge Platform",
      "Retrieval-Augmented Generation (RAG)",
      "AI Workflow Automation",
      "Document Intelligence & OCR",
      "Internal Knowledge Assistant",
      "ERP & Business System Integration",
    ],
    process: [
      {
        title: "AI Opportunity Assessment",
        text: "Identify business processes where AI can improve productivity, reduce manual work, and support faster decision-making.",
      },
      {
        title: "Knowledge & AI Design",
        text: "Build a centralized AI knowledge platform by connecting company documents, policies, manuals, databases, and business applications.",
      },
      {
        title: "AI Development & Integration",
        text: "Develop intelligent AI agents, implement RAG, automate workflows, and integrate with your ERP, CRM, HRMS, and other enterprise systems.",
      },
      {
        title: "Deployment & Continuous Improvement",
        text: "Deploy secure AI solutions, monitor performance, improve accuracy, and continuously expand your AI capabilities as your business grows.",
      },
    ],
    impact: [
      { value: "80%", label: "Less Manual Work" },
      { value: "10x", label: "Faster Information Access" },
      { value: "24/7", label: "AI Business Assistance" },
    ],
    image: "/images/ai.jpg",
  },
  {
    id: "chat",
    slug: "chat",
    name: "Real-Time Chat",
    tagline: "Secure conversations for modern businesses",
    shortDesc:
      "Deploy a secure, real-time messaging platform for teams with private hosting, enterprise-grade security, file sharing, voice, video, and collaboration features.",
    description:
      "FlewOps develops secure enterprise messaging platforms that enable fast, reliable, and private communication across your organization. We deploy and manage dedicated messaging servers with end-to-end encrypted conversations, voice and video calling, group collaboration, file sharing, and real-time notifications. Our solutions can be hosted on your own infrastructure or in the cloud, giving you complete control over your business data. Built for organizations that prioritize privacy, security, and scalability, our communication platform supports enterprise identity management, role-based access, high availability, and seamless integration with ERP, CRM, HRMS, and other business applications. We follow industry best practices to help organizations meet GDPR and ISO security compliance requirements.",
    icon: MessagesSquare,
    accent: "text-orange",
    bg: "from-orange/20 to-transparent",
    features: [
      "Private Enterprise Messaging Server",
      "End-to-End Encrypted Conversations",
      "Secure Team Collaboration",
      "Voice & Video Calling",
      "Group Chats & Private Channels",
      "File & Media Sharing",
      "Real-Time Notifications",
      "Single Sign-On (SSO) Integration",
      "GDPR & ISO Security Best Practices",
    ],
    process: [
      {
        title: "Business Requirement Analysis",
        text: "Understand your communication, security, compliance, and collaboration requirements before designing the solution.",
      },
      {
        title: "Platform Deployment",
        text: "Deploy a dedicated enterprise messaging server with secure authentication, user management, encryption, and high availability.",
      },
      {
        title: "Integration & Customization",
        text: "Integrate the platform with your existing business applications, identity providers, notifications, and collaboration workflows.",
      },
      {
        title: "Monitoring & Support",
        text: "Provide continuous monitoring, security updates, performance optimization, backups, and technical support to keep communication reliable and secure.",
      }, 
    ],
    impact: [
      { value: "24/7", label: "Secure Communication" },
      { value: "99.9%", label: "Platform Availability" },
      { value: "100%", label: "Private Data Control" },
    ],
  },
  {
    id: "network",
    slug: "network",
    name: "Network Solutions",
    tagline: "Reliable networks. Secure infrastructure.",
    shortDesc:
      "Design, deploy, and manage secure business networks with expert consulting, infrastructure support, and scalable application hosting.",
    description:
      "FlewOps provides end-to-end network infrastructure solutions for businesses of all sizes. We help organizations design, implement, and maintain secure, high-performance networks that support daily operations, remote teams, and business-critical applications. Our services include network consulting, LAN and WAN setup, Wi-Fi deployment, VPN connectivity, firewall configuration, network security, and ongoing infrastructure support. We are also building a modern micro data center that enables businesses to securely host their applications, websites, databases, ERP systems, and enterprise workloads on reliable infrastructure with continuous monitoring, backup, and high availability.",
    icon: Network,
    accent: "text-lime",
    bg: "from-lime/20 to-transparent",
    features: [
      "Network Design & Consulting",
      "LAN, WAN & Enterprise Wi-Fi Setup",
      "Firewall & Network Security",
      "VPN & Remote Access Solutions",
      "Network Performance Monitoring",
      "Infrastructure Maintenance & Support",
      "Application & Server Hosting",
      "Micro Data Center Services",
      "Cloud & Hybrid Infrastructure",
      "Backup & Disaster Recovery",
      "Scalable Business Infrastructure",
      "24/7 Technical Support",
    ],
    process: [
      {
        title: "Infrastructure Assessment",
        text: "Understand your existing network, business requirements, security needs, and future growth plans.",
      },
      {
        title: "Network Design & Planning",
        text: "Design a secure, reliable, and scalable network architecture with the right infrastructure for your business.",
      },
      {
        title: "Deployment & Configuration",
        text: "Install, configure, secure, and test your network, servers, firewalls, VPNs, and business applications.",
      },
      {
        title: "Monitoring & Infrastructure Support",
        text: "Provide continuous monitoring, troubleshooting, maintenance, infrastructure upgrades, and secure hosting services to keep your business running smoothly.",
      },
    ],
    impact: [
      { value: "99.9%", label: "Infrastructure Availability" },
      { value: "24/7", label: "Technical Support" },
      { value: "100%", label: "Secure Network Management" },
    ],
  },
];

export const stats = [
  { value: "12+", label: "Projects shipped", color: "text-lime" },
  { value: "99.9%", label: "Uptime SLA", color: "text-cyan" },
  { value: "20+", label: "Engineers & experts", color: "text-magenta" },
  { value: "12", label: "Industries served", color: "text-orange" },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We map your goals, stack and constraints to design a system that fits — not forces.",
    color: "text-lime",
  },
  {
    n: "02",
    title: "Design",
    desc: "Architecture, UX and data models drawn out and validated before a line of code ships.",
    color: "text-cyan",
  },
  {
    n: "03",
    title: "Build",
    desc: "Agile sprints with weekly demos. You see progress, you steer direction.",
    color: "text-magenta",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Launch, monitor, optimize. We stay on as your long-term growth partner.",
    color: "text-orange",
  },
];

export const testimonials = [
  {
    quote:
      "FlewOps replaced our outdated tools with a powerful ERP system that streamlined our entire business. Our operations are now faster, more organized, and highly efficient.",
    name: "Ramesh Periyasamy",
    role: "Partner, Jaysan Agri Industrial",
    color: "text-lime",
  },
  {
    quote:
      "Working with FlewOps was a great experience from start to finish. Their ERP solution simplified our operations and helped us improve productivity across every department.",
    name: "Selvakumar D",
    role: "Founder, FarmX Machinery",
    color: "text-cyan",
  },
  {
    quote:
      "FlewOps Global delivered an excellent NEET/JEE online class portal and Edu ERP that made managing our academy effortless.",
    name: "Dr. Durairaj Arjunan",
    role: "Co Founder, Chiasma Academy",
    color: "text-magenta",
  },
];

export const teamMembers = [
  { name: "Sujith", role: "Co-Founder", image: "/images/sujith.png" },
  { name: "Kesav Balajee", role: "Co-Founder", image: "/images/kesav.jpg" },
];

export const perks = [
  { emoji: "⏰", title: "Flexible work hours", desc: "Work at your best pace with flexible hours and the freedom to work remotely whenever you need." },
  { emoji: "📚", title: "Professional development", desc: "Keep learning and growing with hands on workshops, and mentorship from industry leaders." },
  { emoji: "🎉", title: "Team outings & knowledge sessions", desc: "We believe in bonding beyond work — through fun team events, hackathons, and celebrations." },
];

export const contact = {
  email: "hello@flewops.com",
  phone: "+91 88255 72114",
  linkedin: "https://www.linkedin.com/company/flewops-global/",
};

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Why choose FlewOps Global?",
    answer:
      "Unlike companies that provide standalone software, FlewOps delivers complete digital transformation solutions. We combine ERP, AI, cybersecurity, enterprise messaging, infrastructure, application development, and cloud technologies into one integrated ecosystem tailored to your business.",
  },
  {
    question: "What is an ERP system and how can it help my business?",
    answer:
      "An ERP (Enterprise Resource Planning) system brings your accounting, inventory, sales, procurement, HR, manufacturing, CRM, GST, compliance, and reporting into one centralized platform. It helps businesses reduce manual work, improve productivity, make faster decisions, and gain complete visibility across operations.",
  },
  {
    question: "Which industries does your ERP solution support?",
    answer:
      "Our ERP solution is designed for manufacturing, retail, wholesale distribution, trading, logistics, agriculture, healthcare, education, construction, service businesses, and many other industries. Every implementation is customized to match your business processes and operational requirements.",
  },
  {
    question: "Can your ERP be customized for our business?",
    answer:
      "Yes. Every business operates differently. We customize workflows, approvals, dashboards, reports, user roles, forms, modules, and business processes so the ERP works the way your organization operates instead of forcing you to change your workflow.",
  },
  {
    question: "Does your ERP support GST and statutory compliance?",
    answer:
      "Yes. Our ERP supports GST-ready business processes, accounting, tax management, financial reporting, and statutory compliance workflows. We also help businesses automate compliance-related operations and reporting based on their business requirements.",
  },
  {
    question: "How long does ERP implementation take?",
    answer:
      "The implementation timeline depends on your business size, number of users, required modules, integrations, and customizations. Small implementations may take a few weeks, while enterprise projects typically take several months. We provide a clear implementation roadmap before development begins.",
  },
  {
    question: "Do you provide user training and ongoing support?",
    answer:
      "Yes. We provide complete user training, documentation, technical support, system monitoring, software updates, performance optimization, and long-term maintenance to ensure your ERP continues to grow with your business.",
  },
  {
    question: "How secure are your business solutions?",
    answer:
      "Security is built into every solution we deliver. We implement secure authentication, Multi-Factor Authentication (MFA), role-based access control, data encryption, Keycloak identity management, regular backups, and continuous monitoring while following GDPR and ISO security best practices.",
  },
  {
    question: "Do you build AI solutions for businesses?",
    answer:
      "Yes. We develop enterprise AI solutions including AI agents, Retrieval-Augmented Generation (RAG), intelligent document search, workflow automation, business knowledge assistants, report generation, and AI integrations that work securely with your business data.",
  },
  {
    question: "Can you build a secure business chat platform?",
    answer:
      "Yes. We develop secure enterprise messaging platforms with encrypted conversations, voice and video calling, file sharing, private hosting, user management, Single Sign-On (SSO), and integration with your existing business applications.",
  },
  {
    question: "Do you provide cybersecurity and IAM solutions?",
    answer:
      "Yes. We implement Zero Trust security, Multi-Factor Authentication (MFA), Keycloak identity and access management, custom authentication systems, encryption, network security, and compliance-focused security solutions for modern businesses.",
  },
  {
    question: "Do you provide application hosting and infrastructure services?",
    answer:
      "Yes. We help businesses design secure network infrastructure, deploy servers, manage cloud environments, and provide application hosting solutions. Our infrastructure services are designed for reliability, security, scalability, and business continuity.",
  },
];
