import { Project } from "@/types/App";

export const categories = ["All", "Web Development", "Mobile Development", "AI & ML"];

// data/projects.ts
export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with advanced filtering, search, and payment integration.",
        image: "/image.png",
        category: "Web Development",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        link: "https://example.com",
        github: "https://github.com",
        stats: {
          users: "10K+",
          rating: "4.8/5",
          performance: "98%"
        }
      },
      {
        title: "AI Chat Application",
        description: "Real-time chat application with AI-powered responses and natural language processing.",
        image: "/image.png",
        category: "AI & ML",
        technologies: ["React", "Node.js", "TensorFlow", "Socket.io"],
        link: "https://example.com",
        stats: {
          users: "5K+",
          rating: "4.9/5"
        }
      },
      {
        title: "Mobile Banking App",
        description: "Secure and intuitive mobile banking application with biometric authentication.",
        image: "/image.png",
        category: "Mobile Development",
        technologies: ["React Native", "Firebase", "Redux", "Jest"],
        link: "https://example.com",
        stats: {
          users: "25K+",
          rating: "4.7/5"
        }
      },
      {
        title: "Project Management Tool",
        description: "Collaborative project management platform with real-time updates and task tracking.",
        image: "/image.png",
        category: "Web Development",
        technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
        link: "https://example.com",
        github: "https://github.com",
        stats: {
          users: "15K+",
          rating: "4.8/5"
        }
      },
      {
        title: "Landing Page",
        description: "A full-featured, SEO friendly landing page with intuitive UI/UX, fast loading website for Shiv Hospital.",
        image: "/portfolio/developer-bowl-portfolio1.png",
        category: "Web Development",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        link: "https://example.com",
        github: "https://github.com",
        stats: {
          users: "10K+",
          rating: "4.8/5",
          performance: "98%"
        }
      },
      {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with real-time insights.",
        image: "/image.png",
        category: "Web Development",
        technologies: ["React", "D3.js", "Node.js", "MongoDB"],
        link: "https://example.com",
        github: "https://github.com",
        stats: {
          users: "8K+",
          rating: "4.7/5"
        }
      }
  ];
  