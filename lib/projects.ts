export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Questana scavenger Hunt",
    description:
      "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    url: "https://www.questana.ai",
    techStack: ["React", "Next.js", "AWS", "Stripe", "Terraform"],
  },
  {
    id: "2",
    title: "Stories for Mo",
    description:
      "I built a bedtime story web app to host stories I wrote and recorded for my younger brother who has down syndrome",
    url: "https://stories-for-mo.vercel.app",
    techStack: ["Next.js", "PostgreSQL", "Socket.io", "Redux"],
  },
  {
    id: "3",
    title: "Confession 📦",
    description: "Anonymous video chat web app designed as a confession booth.",
    url: "https://confession-lake-five.vercel.app/",
    techStack: ["React", "Nextjs", "Node", "Render"],
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description:
      "Comprehensive analytics dashboard for social media management and insights.",
    url: "https://example.com/project4",
    techStack: ["Vue.js", "Express", "Redis", "Chart.js"],
  },
  {
    id: "5",
    title: "Video Streaming Platform",
    description:
      "Scalable video streaming service with adaptive bitrate and CDN integration.",
    url: "https://example.com/project5",
    techStack: ["React", "AWS", "FFmpeg", "WebRTC"],
  },
];
