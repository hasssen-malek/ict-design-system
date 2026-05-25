/* global window */
/* All four service definitions — one source of truth for the service pages. */
window.SERVICES = {
  cloud: {
    slug: "cloud",
    number: "01",
    tint: "blue",        // electric blue
    eyebrow: "Our Services",
    title: "Cloud & Infrastructure Transformation",
    subtitle: "Build resilient, scalable, and future-ready infrastructure tailored for organisations operating in Qatar.",
    intro: [
      "ICT helps organisations design, modernise, and optimise their cloud and infrastructure environments to support agility, performance, and long-term growth.",
      "From hybrid architectures to full cloud transformation, we ensure your technology foundation is secure, efficient, and aligned with your business strategy.",
    ],
    capabilities: [
      { icon: "compass",  h: "Cloud Strategy & Roadmapping",        p: "Define a clear, business-aligned cloud strategy that supports scalability, compliance, and long-term growth in Qatar." },
      { icon: "layers",   h: "Hybrid & Multi-Cloud Architecture",   p: "Design flexible and resilient architectures that optimise performance, cost, and operational control." },
      { icon: "server",   h: "Infrastructure Modernisation",        p: "Transform legacy infrastructure into secure, scalable, and high-performance environments." },
      { icon: "migrate",  h: "Workload Migration & Optimisation",   p: "Seamlessly migrate workloads to the cloud while improving efficiency, reliability, and cost performance." },
    ],
    impact: [
      "Increased scalability to support business growth",
      "Improved system performance and reliability",
      "Reduced infrastructure and operational costs",
      "Faster deployment of new services and capabilities",
      "Enhanced security and compliance",
      "Greater visibility and control over IT environments",
    ],
  },

  cybersecurity: {
    slug: "cybersecurity",
    number: "02",
    tint: "violet",
    eyebrow: "Our Services",
    title: "Cybersecurity & Digital Resilience",
    subtitle: "Protect your organisation with secure, resilient, and future-ready cybersecurity strategies tailored for Qatar.",
    intro: [
      "ICT helps organisations protect their digital environments, safeguard critical data, and ensure business continuity in an increasingly complex threat landscape.",
      "From proactive threat detection to incident response and recovery, we ensure your organisation remains secure, compliant, and resilient at every stage.",
    ],
    capabilities: [
      { icon: "shield",   h: "Cybersecurity Strategy & Governance", p: "Define a comprehensive security strategy, policies, and governance framework aligned with regulatory requirements in Qatar." },
      { icon: "radar",    h: "Threat Detection & Incident Response",p: "Detect, respond to, and mitigate cyber threats in real time to minimise impact and ensure rapid recovery." },
      { icon: "lock",     h: "Data Protection & Compliance",        p: "Secure sensitive data and ensure compliance with local and international standards." },
      { icon: "eye",      h: "Security Operations & Monitoring",    p: "Continuously monitor and manage security risks across your infrastructure and applications." },
    ],
    impact: [
      "Reduced exposure to cyber threats and data breaches",
      "Faster detection and response to security incidents",
      "Improved compliance with regulatory requirements",
      "Increased resilience and business continuity",
      "Greater visibility across security environments",
      "Enhanced trust with customers and stakeholders",
    ],
  },

  ai: {
    slug: "ai",
    number: "03",
    tint: "magenta",
    eyebrow: "Our Services",
    title: "AI & Intelligent Automation",
    subtitle: "Unlock smarter operations and faster decision-making with AI-powered solutions tailored for organisations in Qatar.",
    intro: [
      "ICT helps organisations harness the power of AI and automation to improve efficiency, enhance decision-making, and unlock new growth opportunities.",
      "From intelligent process automation to advanced analytics, we design and implement solutions that drive measurable business outcomes.",
    ],
    capabilities: [
      { icon: "bulb",     h: "AI Strategy & Use Case Definition",       p: "Identify high-impact AI opportunities aligned with your business priorities and operational needs." },
      { icon: "cog",      h: "Intelligent Process Automation",          p: "Automate repetitive tasks and workflows to improve efficiency and reduce operational costs." },
      { icon: "chart",    h: "Advanced Analytics & Decision Support",   p: "Leverage data and AI models to enable faster, more informed decision-making." },
      { icon: "plug",     h: "AI Integration & Application Modernisation", p: "Embed AI capabilities into existing systems and modern applications to enhance performance and usability." },
    ],
    impact: [
      "Increased operational efficiency and productivity",
      "Faster and more accurate decision-making",
      "Reduced manual effort and operational costs",
      "Improved customer and user experiences",
      "Scalable AI solutions aligned with business needs",
      "Greater ability to innovate and adapt",
    ],
  },

  managed: {
    slug: "managed",
    number: "04",
    tint: "orange",
    eyebrow: "Our Services",
    title: "Managed & Support Services",
    subtitle: "Ensure continuous performance and reliability with managed services tailored for organisations in Qatar.",
    intro: [
      "ICT helps organisations operate, monitor, and optimise their IT environments through reliable, scalable managed services.",
      "From proactive monitoring to ongoing optimisation, we ensure your systems remain secure, efficient, and always available.",
    ],
    capabilities: [
      { icon: "headset",  h: "24/7 Monitoring & Support",                   p: "Provide continuous monitoring and support to ensure system stability and operational continuity." },
      { icon: "stack",    h: "Infrastructure & Application Management",     p: "Manage and maintain infrastructure and applications to ensure optimal performance." },
      { icon: "wrench",   h: "Proactive Maintenance & Optimisation",        p: "Identify and resolve issues before they impact operations while continuously improving performance." },
      { icon: "report",   h: "Service Management & Reporting",              p: "Provide clear visibility through reporting, SLAs, and performance tracking." },
    ],
    impact: [
      "Improved system uptime and reliability",
      "Reduced operational risks and disruptions",
      "Lower internal IT workload and costs",
      "Faster issue resolution and response times",
      "Continuous performance optimisation",
      "Greater visibility and control over IT operations",
    ],
  },
};
