export type Social = {
  label: "GitHub" | "LinkedIn";
  href: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type TimelineEntry = {
  period: string;
  role: string;
  tag?: string;
  company: string;
  summary: string;
  cert?: string;
  work?: boolean;
};

export type Project = {
  title: string;
  category: string;
  tag: string;
  year: string;
  description: string;
  stack: string[];
  repo?: string;
  href?: string;
};

export const profile = {
  name: "Anthony Anup",
  firstName: "Anthony",
  role: "Full Stack Developer",
  heroRole: "Full Stack Developer",
  introLead:
    "Mysore, India — I build full-stack applications with clean interfaces and dependable backend systems.",
  intro:
    "Full Stack Developer with hands-on experience building REST APIs, authentication flows, and database-driven applications using JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, Redis, and AWS. I work across the stack on real-time features, Docker-based deployment, testing, and cloud services, with a focus on maintainable code.",
  location: "Mysore, India",
  email: "anthonyanup21@gmail.com",
  phone: "+91 8884703887",
  socials: [
    { label: "GitHub", href: "https://github.com/anthonyanup-js" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anthony-anup-7922ab369",
    },
  ] satisfies Social[],
};

export const skillGroups: SkillGroup[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Router",
      "Zustand",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "Middleware",
      "MVC Architecture",
      "Authentication and Authorization",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "Mongoose", "Redis", "Database Design", "Indexing"],
  },
  {
    group: "Cloud",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS IAM",
      "AWS EBS",
      "AWS EFS",
      "CloudFront",
    ],
  },
  {
    group: "Tools & Deployment",
    items: [
      "Docker",
      "Jenkins",
      "Git",
      "GitHub",
      "Linux",
      "Nginx",
      "PM2",
      "Postman",
      "Cloudinary",
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "October 2025 — Present",
    role: "Full Stack Developer",
    company: "EJAmerica",
    summary:
      "Full-stack development across web applications, REST APIs, and database-driven features. Collaborating with engineering teams on implementation, testing, and deployment.",
    work: true,
  },
  {
    period: "February 2025 — May 2025",
    role: "Full Stack Developer Intern",
    company: "Gupio, Mysore, India",
    summary:
      "Developed and maintained REST APIs with Node.js and Express.js, integrated backend services with frontend applications and MongoDB, and implemented JWT authentication with secure HTTP-only cookies. Tested APIs with Postman, debugged application issues, and incorporated code review feedback.",
    work: true,
  },
  {
    period: "2022 — 2025",
    role: "Bachelor of Engineering",
    company: "ATME College of Engineering, Mysore, Karnataka",
    summary:
      "Computer Science & Engineering (Data Science). CGPA: 8.05/10.",
  },
];

export const projects: Project[] = [
  {
    title: "Cloud File Storage System",
    category: "Full-Stack",
    tag: "Cloud Storage",
    year: "—",
    description:
      "A cloud storage application with drag-and-drop uploads, Zustand state management, and REST APIs for upload initialization, rename, delete, and file/directory metadata. MongoDB and Mongoose persist metadata, while Amazon S3 multipart uploads and pre-signed URLs enable direct-to-cloud transfers; AWS Lambda handles post-upload automation and JWT plus restrictive AWS IAM policies secure user directories.",
    stack: [
      "React",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "AWS Lambda",
      "Docker",
      "Multipart Uploads",
      "Pre-Signed URLs",
      "JWT",
      "AWS IAM",
    ],
  },
  {
    title: "Real-Time Chat Application",
    category: "Full-Stack",
    tag: "Real-Time Messaging",
    year: "—",
    description:
      "A real-time one-to-one messaging application built with React and Socket.IO, with instant delivery and online-status indicators. Express REST endpoints handle registration, profiles, and message-history retrieval, with an optimized MongoDB/Mongoose schema; Cloudinary manages asynchronous media uploads and JWT secures the routes.",
    stack: [
      "React",
      "Socket.IO",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
      "Cloudinary",
      "JWT",
    ],
  },
];
