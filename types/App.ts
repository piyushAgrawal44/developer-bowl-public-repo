export interface FAQ {
    question: string;
    answer: string;
    isToggle: boolean;
  }
  
  export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
  }
  
  export interface Project {
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    link: string;
    github?: string;
    stats: {
      users?: string;
      rating?: string;
      performance?: string;
    };
  }