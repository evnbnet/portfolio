export interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  gradient: string;
  icon: 'code' | 'desktop' | 'settings';
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SmallCaps Generator",
    description: "A fast and minimal web tool that converts text into small caps in real time using Unicode characters.",
    year: "2026",
    technologies: ["Astro", "Tailwind", "JavaScript"],
    gradient: "from-purple-500 to-pink-500",
    icon: "code",
    liveUrl: "https://smallcaps-gen.netlify.app/",
    githubUrl: "https://github.com/evnbnet/smallcaps-generator"
  },
  {
    id: 2,
    title: "My Portfolio",
    description: "A personal portfolio website showcasing projects and skills with a modern design and smooth animations.",
    year: "2026",
    technologies: ["Astro", "TypeScript", "Tailwind", "React"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "desktop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo"
  },
  {
    id: 3,
    title: "Cooming Soon",
    description: "A project under development that aims to revolutionize task management with innovative features and a user-friendly interface.",
    year: "2024",
    technologies: ["Angular", "Node.js", "MongoDB"],
    gradient: "from-green-500 to-emerald-500",
    icon: "settings",
    liveUrl: "",
    githubUrl: ""
  }
];