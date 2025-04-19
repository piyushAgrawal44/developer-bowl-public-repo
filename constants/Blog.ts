import { BlogPost } from "@/types/App";

export const categories = ["All", "Web Development", "Frontend", "Backend", "AI & ML", "DevOps"];

export const blogPosts: BlogPost[] = [
    {
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Web Development",
        image: "/image.png",
        author: {
            name: "John Doe",
            avatar: "/image.png"
        }
    },
    {
        title: "Building Scalable Applications with Next.js",
        excerpt: "Learn how to build high-performance, scalable applications using Next.js and modern development practices.",
        date: "March 10, 2024",
        readTime: "7 min read",
        category: "Frontend",
        image: "/image.png",
        author: {
            name: "Jane Smith",
            avatar: "/image.png"
        }
    },
    {
        title: "The Power of AI in Modern Software Development",
        excerpt: "Discover how artificial intelligence is revolutionizing software development and what it means for developers.",
        date: "March 5, 2024",
        readTime: "6 min read",
        category: "AI & ML",
        image: "/image.png",
        author: {
            name: "Mike Johnson",
            avatar: "/image.png"
        }
    },
    {
        title: "Mastering Backend Architecture with Node.js",
        excerpt: "Understand how to design scalable and maintainable backend systems using Node.js and best practices.",
        date: "February 28, 2024",
        readTime: "8 min read",
        category: "Backend",
        image: "/image.png",
        author: {
            name: "Sophia Lee",
            avatar: "/image.png"
        }
    },
    {
        title: "Implementing CI-CD Pipelines with GitHub Actions",
        excerpt: "A practical guide to setting up CI/CD pipelines using GitHub Actions to automate your DevOps workflow.",
        date: "February 22, 2024",
        readTime: "6 min read",
        category: "DevOps",
        image: "/image.png",
        author: {
            name: "David Brown",
            avatar: "/image.png"
        }
    },
    {
        title: "AI & ML: From Data to Deployment",
        excerpt: "A step-by-step guide on building, training, and deploying machine learning models in production.",
        date: "February 15, 2024",
        readTime: "9 min read",
        category: "AI & ML",
        image: "/image.png",
        author: {
            name: "Emily Davis",
            avatar: "/image.png"
        }
    }
];
