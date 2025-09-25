export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  techStack: string[];
  github?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Questana scavenger Hunt",
    description:
      "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    url: "https://www.questana.ai",
    techStack: ["React", "Next.js", "AWS", "Stripe", "Terraform"],
    isPrivate: true,
  },
  {
    id: "2",
    title: "Stories for Mo",
    description:
      "I built a bedtime story web app to host stories I wrote and recorded for my younger brother who has down syndrome",
    url: "https://stories-for-mo.vercel.app",
    techStack: ["Next.js", "PostgreSQL", "Socket.io", "Redux"],
    github: "https://github.com/dijisolanke/stories-for-mo",
  },
  {
    id: "3",
    title: "Confession 📦",
    description: "Anonymous video chat web app designed as a confession booth.",
    url: "https://confession-lake-five.vercel.app/",
    techStack: ["React", "Nextjs", "Node", "Render"],
    github: "https://github.com/dijisolanke/confession",
  },
  {
    id: "4",
    title: "Restaurant Rota generator",
    description:
      "This is a sample version of a rota generator I created for an independent cafe. It takes an array of staff, their availabile days, the hours they require, their skill level, combines this with the hours available and positions needed in order to create an excel spreadsheet with a rota which is then given to the user as a download from the browser ",
    url: "https://my-restaurant-rota.vercel.app/",
    techStack: ["React", "Typescript", "Sanity CMS", "Chart.js"],
    github: "https://github.com/dijisolanke/my-restaurant-rota",
  },
  {
    id: "5",
    title: "Video Streaming Platform",
    description:
      "Scalable video streaming service with adaptive bitrate and CDN integration.",
    url: "https://example.com/project5",
    techStack: ["React", "AWS", "FFmpeg", "WebRTC"],
    github: "",
  },
];
