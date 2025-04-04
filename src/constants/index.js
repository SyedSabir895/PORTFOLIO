import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  hirrd,
  codekaro,
  codechecker,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "B.Tech (Bachelor of Technology)",
    College: "NRI Institute of Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 - 2026",
    points: [
      "Pursuing my B.Tech in Artificial Intelligence and Machine Learning from NRI Institute of Technology.",
      "Met so many good friends.",
      "Participated in many events.",
      "Learned how to bunk the classes 😅(No offence).",
    ],
  },
  {
    title: "Intermediate",
    College: "KBN SHINE College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Completed my Intermediate education at KBN SHINE Junior College with 84.4 percentage.",
      "Learned the basics of programming and computer science.",
      "Participated in various extracurricular activities.",
    ],
  },
  {
    title: "Schooling",
    School: "Oxford High School",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Completed my schooling at Oxford High School.",
      "Gained a strong foundation in mathematics and science.",
      "Participated in various sports and cultural activities.",
    ],
  },
];

/*const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]; */

const projects = [
  {
    name: "HIRRD",
    description:
      "Hirrd is a job portal connecting job seekers with top employers. Candidates can find jobs easily, while companies post listings to attract talent. It streamlines hiring, making the process faster and more efficient for everyone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hirrd,
    source_code_link: "https://github.com/SyedSabir895/HIRRD",
  },
  {
    name: "Code Karo",
    description:
      "CodeKaro is an interactive coding platform offers skill-based learning for all levels. Vibrant colors, emojis, and gamification make learning fun and engaging. Users can easily access courses, blogs, and games for a seamless experience.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codekaro,
    source_code_link: "https://github.com/SyedSabir895/Codeekaro",
  },
  {
    name: "AI Code-Checker",
    description:
      " AI Code Checker is a web application that helps developers identify and fix errors in their code. It uses advanced AI algorithms to analyze code snippets and provide suggestions for improvement, making coding easier and more efficient.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
    ],
    image: codechecker,
    source_code_link: "https://github.com/SyedSabir895/AI-code-correcter",
  },
];

export { services, technologies, experiences, projects };
