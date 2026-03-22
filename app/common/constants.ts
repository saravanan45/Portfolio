const NAME = "Saravanan";
const EMAIL = "saravananrohit1505@gmail.com";
const GITHUB_URL = "https://github.com/saravanan45";
const LINKEDIN_URL = "https://www.linkedin.com/in/saravanan-s-0297b9147/";
const RESUME_URL = "/files/Resume.pdf";
const ROLE = "Full Stack Developer | Front End Enthusiast | Tech Explorer";
const LANGUAGES = ["JavaScript", "React", "Typescript", "NodeJS", "Express JS"];
const DESCRIPTION = "Specialized in React and Node JS development.";
const SUMMARY =
  "Senior Software Engineer with 7.8 years of experience building web applications using React.js and JavaScript. Experienced in Micro Frontend architecture, design systems, and accessible UI development. Skilled in building backend services with Node.js, Express.js, and PostgreSQL, designing RESTful APIs and delivering end-to-end solutions with a focus on code quality and performance.";
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
          "Item & Offer – Catalog Microservice (Seller Center Application)",
        details: [
          "Implemented the Product Tax Code feature and multi-market capabilities including Convert to WFS for Canada and Mexico.",
          "Contributed to i18n support for Mexico, Chile, and Canada markets to enable localized experiences.",
          "Built and maintained E2E automation using Playwright to improve release quality and reduce regressions.",
          "Collaborated with US market and Product teams to deliver cross-functional, multi-market features.",
        ],
      },
      {
        header: "Vajra – Internal Platform for On-Demand Test Environments",
        details: [
          "Led front-end restructuring to align with UX and accessibility (A11Y) standards and redesigned workflows to improve onboarding and developer productivity.",
          "Designed and implemented a Micro-Frontend architecture and performance dashboard; improved application performance by 20%.",
          "Built reusable UI components and developed backend services using Java and REST APIs to support provisioning workflows.",
          "Wrote unit tests (RTL, Jest), conducted code reviews, mentored engineers, and supported internal teams using the platform.",
        ],
      },
    ],
    skills: [
      "React",
      "JavaScript",
      "Playwright",
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
          "Enhanced UI components (Button, Tooltip, Splitter, Cards) using React and JavaScript, ensuring compliance with accessibility (A11Y) standards and improving overall usability.",
          "Collaborated closely with UX teams to implement and refine design updates across the shared component library, maintaining consistency and design integrity.",
          "Wrote comprehensive unit tests using Jest, integration tests, and visual regression tests with CodeceptJS to ensure cross-browser compatibility and reliability.",
          "Served as a primary point of contact for teams integrating the design system, providing technical guidance, accessibility best practices, and implementation support.",
        ],
      },
    ],
    skills: [
      "React",
      "JavaScript",
      "Jest",
      "Cypress",
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
          "Developed responsive web and cross-platform desktop applications using React.js, JavaScript, and Electron.js, ensuring seamless user experience across environments.",
          "Contributed to core product modules including Call Block, Auto Attendant, and Virtual Fax, enhancing feature reliability and user engagement within the web application.",
          "Designed and implemented key desktop features such as contact list management, dialer functionality, and recent calls interface in the Electron application.",
          "Wrote comprehensive unit tests using Jest and integration tests using Cypress to improve application stability and reduce regressions.",
          "Participated in peer code reviews, promoting clean code practices, maintainability, and adherence to engineering standards.",
        ],
      },
    ],
    skills: [
      "React",
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

export const PROFILE = {
  NAME,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
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
