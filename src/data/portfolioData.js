import blogProjectImage from "../assets/project-blog.svg";
import quizProjectImage from "../assets/project-quiz.svg";
import calculatorProjectImage from "../assets/project-calculator.svg";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "JavaScript (ES6+)", level: 89 },
      { name: "HTML5", level: 94 },
      { name: "CSS3", level: 91 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 85 },
      { name: "REST API Development", level: 88 }
    ]
  },
  {
    title: "Database & Authentication",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "SQLite", level: 82 },
      { name: "JWT Authentication", level: 84 },
      { name: "bcrypt (Password Hashing)", level: 83 }
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 86 },
      { name: "Vite", level: 88 },
      { name: "VS Code", level: 92 }
    ]
  }
];

export const featuredProjects = [
  {
    title: "Full-Stack Blog Platform (Featured)",
    image: blogProjectImage,
    description:
      "A production-ready blogging platform with secure authentication and dynamic content management.",
    features: [
      "User registration and login with JWT-based authentication",
      "Secure password hashing using bcrypt",
      "Full CRUD operations for posts",
      "Commenting system and like functionality",
      "RESTful API architecture with Express",
      "SQLite database integration for structured data management"
    ],
    metrics: ["100+ posts handled", "Secure token auth flow", "Modular API structure"],
    architecture: {
      frontend: "React.js + Tailwind CSS",
      backend: "Node.js + Express.js",
      database: "SQLite",
      authentication: "JWT + bcrypt"
    },
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "SQLite", "JWT", "bcrypt"],
    live: "https://blog-phi-wine-41.vercel.app/",
    github: "https://github.com/maryam142-lab"
  },
  {
    title: "Quiz Website (Frontend)",
    image: quizProjectImage,
    description:
      "An interactive quiz application focused on state management and UI responsiveness.",
    features: [
      "Timer-based question system",
      "Score calculation and result summary",
      "Dark/Light theme toggle",
      "Dynamic UI updates using React hooks"
    ],
    metrics: ["Timer-based UX flow", "State-driven score engine", "Responsive multi-device layout"],
    architecture: {
      frontend: "React.js + JavaScript",
      backend: "N/A",
      database: "N/A",
      authentication: "N/A"
    },
    tech: ["React.js", "JavaScript", "Vite", "HTML5", "CSS3"],
    live: "https://quiz-project-qwvq.vercel.app/",
    github: "https://github.com/maryam142-lab"
  },
  {
    title: "Calculator App (Frontend)",
    image: calculatorProjectImage,
    description:
      "A responsive utility application demonstrating component-based architecture and user preference handling.",
    features: [
      "Real-time arithmetic operations",
      "Theme switching with persistent preferences (localStorage)",
      "Basic voice input integration",
      "Mobile-responsive design"
    ],
    metrics: ["Live expression evaluation", "Preference persistence", "Accessible layout system"],
    architecture: {
      frontend: "React.js + JavaScript",
      backend: "N/A",
      database: "localStorage",
      authentication: "N/A"
    },
    tech: ["React.js", "JavaScript"],
    live: "https://calculator-beta-lilac-79.vercel.app/",
    github: "https://github.com/maryam142-lab"
  }
];

export const otherGithubProjects = [
  {
    name: "Freelancing App",
    github: "https://github.com/maryam142-lab/freelancing-app"
  },
  {
    name: "Smart Enterprise Management System",
    github: "https://github.com/maryam142-lab/smart-enterprise-management-system"
  },
  {
    name: "Hospital Management System",
    github: "https://github.com/maryam142-lab/hospital-management-system"
  },
  {
    name: "SyntcxHub",
    github: "https://github.com/maryam142-lab/SyntcxHub"
  }
];

export const timelineData = [
  {
    date: "08/10/2024 - 15/10/2024",
    title: "Full-Stack Blog Platform | MERN Stack",
    points: [
      "Architected a secure blogging platform with user authentication and authorization",
      "Implemented CRUD operations, commenting workflows, and like functionality",
      "Designed RESTful APIs with Express.js and integrated SQLite data models",
      "Built a responsive UI using React.js and Tailwind CSS",
      "Optimized maintainability through modular architecture and clean code standards"
    ]
  },
  {
    date: "08/09/2025 - 10/09/2025",
    title: "Calculator App | Frontend",
    points: [
      "Designed a responsive calculator application with theme toggle and voice input",
      "Optimized state handling and user preferences with React and localStorage",
      "Implemented modular component patterns to improve UI consistency"
    ]
  },
  {
    date: "Other Projects (Code Only)",
    title: "Project Portfolio",
    projects: [
      {
        name: "Freelancing App | MERN Stack",
        points: [
          "Implemented task management workflows with authentication and CRUD operations",
          "Secured backend logic with structured database integration and session management"
        ]
      },
      {
        name: "Hospital Management System | MERN Stack",
        points: [
          "Designed hospital workflows for patient records, appointments, and staff login",
          "Secured sensitive data handling with scalable backend architecture decisions"
        ]
      },
      {
        name: "Smart Enterprise Management System | MERN Stack",
        points: [
          "Developed enterprise-style dashboards and reporting pipelines",
          "Integrated frontend and backend layers with modular components and REST APIs"
        ]
      },
      {
        name: "SyntcxHub | MERN Stack",
        points: [
          "Built a collaborative platform for project workflows and user interactions",
          "Applied clean architecture principles with a user-focused interface"
        ]
      }
    ]
  }
];
