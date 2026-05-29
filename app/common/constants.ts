import { Langar } from "next/font/google";

const NAME = "Saravanan";
const EMAIL = "saravananrohit1505@gmail.com";
const GITHUB_URL = "https://github.com/saravanan45";
const LINKEDIN_URL = "https://www.linkedin.com/in/saravanan-s-0297b9147/";
const RESUME_URL = "/files/Saravanan.pdf";
const HERO_LINKS = [
  {
    name: "mail",
    url: `mailto:${EMAIL}`,
  },
  {
    name: "github",
    url: GITHUB_URL,
  },
  {
    name: "linkedin",
    url: LINKEDIN_URL,
  },
];
const ROLE = [
  "Senior Software Engineer",
  "FullStack Developer",
  "FrontEnd Developer",
  "MERN Stack Developer",
];
const LANGUAGES = ["JavaScript", "React.js", "Typescript", "Next.js", "Node.js", "Express.js"];
const DESCRIPTION = "Specialized in React.js and Node.js development.";
const SUMMARY =
  "Senior Software Engineer with <EXPERIENCE_YEARS> of experience building scalable web applications and backend services using React.js, TypeScript, JavaScript, Node.js and modern web technologies. Experienced in frontend architecture, micro-frontends, REST APIs, distributed systems, performance optimization, accessibility, testing, and enterprise-scale application development.";
const SKILLS = ["FRONTEND", "BACKEND", "DATABASES", "TOOLS & PLATFORMS"];
const FRONTEND = [
  {
    name: "React.js",
    experticeLevel: "Expert",
  },
  {
    name: "JavaScript",
    experticeLevel: "Expert",
  },
  {
    name: "Redux",
    experticeLevel: "Expert",
  },
  {
    name: "TypeScript",
    experticeLevel: "Advanced",
  },
  {
    name: "Next.js",
    experticeLevel: "Advanced",
  }, 
  {
    name: "HTML",
    experticeLevel: "Expert",
  },
  {
    name: "CSS",
    experticeLevel: "Expert",
  },
  {
    name: "Jest",
    experticeLevel: "Advanced",
  },
  {
    name: "React Testing Library",
    experticeLevel: "Advanced",
  },
  {
    name: "Playwright",
    experticeLevel: "Advanced",
  },
  {
    name: "Storybook",
    experticeLevel: "Advanced",
  },
  {
    name: "Electron JS",
    experticeLevel: "Intermediate",
  },
];
const BACKEND = [
  {
    name: "Node.js",
    experticeLevel: "Advanced",
  },
  {
    name: "Express",
    experticeLevel: "Advanced",
  },
  {
    name: "Java",
    experticeLevel: "Intermediate",
  },
  {
    name: "Spring Boot",
    experticeLevel: "Intermediate",
  },
];
const DATABASES = [
  {
    name: "MySQL",
    experticeLevel: "Expert",
  },
  {
    name: "PostgreSQL",
    experticeLevel: "Expert",
  },
];
const TOOLS_PLATFORMS = [
  {
    name: "Git",
    experticeLevel: "Expert",
  },
  {
    name: "Docker",
    experticeLevel: "Advanced",
  },
  {
    name: "Kubernetes",
    experticeLevel: "Intermediate",
  },
  {
    name: "AWS",
    experticeLevel: "Intermediate",
  },
  {
    name: "Lerna",
    experticeLevel: "Advanced",
  },
  {
    name: "JIRA",
    experticeLevel: "Advanced",
  },
];

const EXPERIENCE: Array<{
  company: string;
  role: string;
  duration: string;
  responsibilities: Array<{ header?: string; details: string[] }>;
  skills?: string[];
}> = [
  {
    company: "Walmart Global Tech India",
    role: "Senior Software Engineer",
    duration: "July 2022 - Present",
    responsibilities: [
      {
        header:
          "Item & Offer – Catalog Microservice (Seller Center Application) & Vajra – Internal Platform for On-Demand Test Environments",
        details: [
          "Developed scalable Seller Center applications using React.js and TypeScript for international Walmart markets.",
          "Built Product Tax Code feature for CA/MX markets, reducing incorrect tax submissions and item creation failures.",
          "Implemented localization and internationalization support for US, Canada, Mexico, and Chile markets.",
          "Migrated Vajra platform from standalone architecture to Micro Frontend architecture integrated with Walmart DX platform, increasing adoption by ~20%.",
          "Built reusable enterprise-grade Table component used across multiple Walmart teams with advanced filtering, sorting, pagination, customizable columns, and server/client-side filtering capabilities.",
          "Migrated Vajra application from legacy UX to modern Figma-based UX designs.",
          "Developed backend APIs using Java (Springboot) for HBR creation, deletion, and paginated retrieval.",
          "Wrote unit/integration tests using Jest and React Testing Library.",
          "Participated in code reviews, deployment orchestration, and mentored junior engineers.",
        ],
      },
    ],
    skills: [
      "React.js",
      "JavaScript",
      "Typescript",
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Git",
      "JIRA",
      "Lerna",
      "Jest",
      "React Testing Library",
      "Micro Frontends",
      "Monorepo",
      "NX",
      "i18n & l10n",
    ],
  },
  {
    company: "Informatica Business Solutions Private Limited",
    role: "Software Engineer",
    duration: "June 2021 - July 2022",
    responsibilities: [
      {
        header: "Droplets UI platform",
        details: [
          "Worked on Droplets, Informatica's reusable enterprise UI component library used across multiple product teams.",
          "Developed reusable and accessible React components following WCAG standards.",
          "Improved component usability, customization, and developer experience across teams.",
          "Contributed to frontend architecture, performance optimization, bug fixes, and unit testing.",
        ],
      },
    ],
    skills: [
      "React",
      "JavaScript",
      "Jest",
      "React Testing Library",
      "Accessibility (A11Y)",
      "Git",
      "JIRA",
    ],
  },
  {
    company: "United Online Software Development Private Limited",
    role: "Software Engineer",
    duration: "July 2018 - June 2021",
    responsibilities: [
      {
        header: "MagicJack for Business",
        details: [
          "Developed enterprise admin dashboards and customer-facing applications using React.js.",
          "Worked on interactive workflows including Call Block, Auto Attendant, and Virtual Fax features.",
          "Built Electron.js desktop application features including dial pad, call history, recent calls, and theme-based UI.",
          "Implemented secure session handling and inactivity-based auto logout functionality.",
          "Integrated REST APIs and delivered responsive cross-browser compatible user experiences.",
        ],
      },
    ],
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "ElectronJS",
      "Jest",
      "Cypress",
      "Git",
      "JIRA",
      "Java",
      "Spring Boot",
    ],
  },
];

const PROJECTS = [
  {
    header: "Inventory Management System (Microservices Architecture)",
    languages: ["Node.js", "Express.js", "Kafka", "PostgreSQL", "Docker", "Ollama (Qwen3 model)"],
    description: [
      "Designed and developed backend services from scratch using Node.js and Express.js, initially following monolithic architecture and later migrating to microservices architecture for improved scalability and maintainability.",
      "Implemented REST APIs, Docker containerization using Docker Compose, and integrated Kafka for asynchronous event-driven communication between services.",
      "Introduced an AI-powered chatbot in the frontend using Ollama with the Qwen3 model to help users query order details and refund policy information through conversational interactions.",
    ]
  }, 
  {
    header: "Personal Portfolio Website",
    languages: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    description: [
      "Built a responsive portfolio website using Next.js and Tailwind CSS to showcase my projects, experience, and skills.",
      "Implemented dark/light theme and cross-browser compatibility.",
      "Deployed the website on Vercel for fast performance and global accessibility.",
    ]
  }
]

const EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.E.,)",
    major: "Computer Science and Engineering",
    institution: "Government College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "July 2014 - May 2018",
  },
];

const CONNECT_INFO = [
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
  },
  {
    name: "GitHub",
    url: GITHUB_URL,
  },
  {
    name: "Email",
    url: `mailto:${EMAIL}`,
  },
];

const HEADER_LINKS = [
  {
    name: "Summary",
    href: "#summary",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Connect",
    href: "#connect",
  },
];
// hrefs for header links should match the ids of the corresponding sections in the page
const HEADER_SECTIONS = [
  "summary",
  "skills",
  "experience",
  "education",
  "projects",
  "connect",
];

export const WORK_START_DATE = new Date("2018-07-02");

export const PROFILE = {
  NAME,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  HERO_LINKS,
  ROLE,
  LANGUAGES,
  DESCRIPTION,
  SUMMARY,
  SKILLS,
  FRONTEND,
  BACKEND,
  DATABASES,
  TOOLS_PLATFORMS,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  CONNECT_INFO,
  HEADER_LINKS,
  HEADER_SECTIONS,
};

export const COLORS = [
  "marker:text-blue-400",
  "marker:text-green-400",
  "marker:text-yellow-400",
  "marker:text-pink-400",
  "marker:text-purple-400",
  "marker:text-red-400",
  "marker:text-cyan-400",
  "marker:text-orange-400",
];
