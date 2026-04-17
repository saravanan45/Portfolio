const NAME = "Saravanan";
const EMAIL = "saravananrohit1505@gmail.com";
const GITHUB_URL = "https://github.com/saravanan45";
const LINKEDIN_URL = "https://www.linkedin.com/in/saravanan-s-0297b9147/";
const RESUME_URL = "/files/Resume.pdf";
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
const ROLE = ["FullStack Developer", "FrontEnd Developer", "MERN Stack Developer"];
const LANGUAGES = ["JavaScript", "React", "Typescript", "NodeJS", "Express JS"];
const DESCRIPTION = "Specialized in React and Node JS development.";
const SUMMARY =
  "Senior Software Engineer with 7.9 years of experience building web applications using React.js and JavaScript. Experienced in Micro Frontend architecture, design systems, and accessible UI development. Skilled in building backend services with Node.js, Express.js, and PostgreSQL, designing RESTful APIs and delivering end-to-end solutions with a focus on code quality and performance.";
const SKILLS = ["FRONTEND", "BACKEND", "DATABASES", "TOOLS & PLATFORMS"];
const FRONTEND = [
  {
    name: "JavaScript",
    experticeLevel: "Expert",
  },
  {
    name: "React",
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
    experticeLevel: "Expert",
  },
  {
    name: "Express",
    experticeLevel: "Expert",
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
          "Designed and developed scalable frontend systems using React and TypeScript for high-impact business applications.",
          "Led adoption of micro-frontend architecture (Module Federation) enabling independent deployments and scalability.",
          "Owned features end-to-end including design, development, testing, deployment, and production support.",
          "Improved application performance by ~20% using code splitting, lazy loading, and rendering optimizations.",
          "Built and integrated REST APIs, handling authentication, error handling, and async workflows.",
          "Collaborated with product managers, designers, and backend engineers to deliver intuitive UI/UX.",
          "Led testing strategy (unit, integration, E2E) improving release quality and confidence.",
          "Mentored engineers and conducted code reviews to maintain high engineering standards.",
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
    ],
  },
  {
    company: "Informatica Business Solutions Private Limited",
    role: "Software Engineer",
    duration: "June 2021 - July 2022",
    responsibilities: [
      {
        details: [
          "Built reusable UI component library (similar to Material UI / Ant Design) used across teams.",
          "Developed accessible (WCAG-compliant) components improving usability and consistency.",
          "Enabled scalable UI development through component-driven architecture and design systems.",
          "Collaborated with multiple teams to ensure adoption and extensibility of UI platform.",
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
          "Developed end-to-end B2B web applications including product purchase flows and admin dashboards.",
          "Built enterprise features such as Call Block, Auto Attendant, Virtual Fax.",
          "Implemented session management, auto-logout, and secure workflows.",
          "Contributed to Electron desktop application (dialer, call history, themes).",
          "Integrated APIs and ensured performance across browsers and devices.",
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
    name: "Education",
    href: "#education",
  },
  // {
  //   name: "Projects",
  //   href: "#projects",
  // },
  {
    name: "Connect",
    href: "#connect",
  },
]
// hrefs for header links should match the ids of the corresponding sections in the page
const HEADER_SECTIONS = ["summary", "skills", "experience", "education", "connect"];

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
