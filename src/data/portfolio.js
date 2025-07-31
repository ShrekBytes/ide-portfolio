// Portfolio data structure
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in modern web technologies. Love creating beautiful, functional applications that solve real-world problems.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    profileImage: "/src/assets/profile.svg",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      website: "https://yourwebsite.com"
    }
  },

  about: {
    title: "About Me",
    content: `
# About Me

Welcome to my portfolio! I'm a passionate full-stack developer with a love for creating innovative solutions and beautiful user experiences.

## Background

With several years of experience in web development, I've worked on a diverse range of projects from small business websites to large-scale applications. My journey in programming started with curiosity and has evolved into a career focused on continuous learning and growth.

## What I Do

I specialize in modern web technologies and enjoy working across the entire development stack. Whether it's crafting pixel-perfect user interfaces or architecting robust backend systems, I bring enthusiasm and attention to detail to every project.

## Philosophy

I believe in writing clean, maintainable code and creating solutions that not only work well but also provide excellent user experiences. I'm always eager to learn new technologies and improve my craft.

## When I'm Not Coding

When I'm not behind a computer screen, you might find me exploring new places, reading tech blogs, contributing to open source projects, or enjoying a good cup of coffee while planning my next project.
    `
  },

  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      duration: "2022 - Present",
      location: "Remote",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Collaborate with cross-functional teams to deliver high-quality products. Mentor junior developers and contribute to technical architecture decisions.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      duration: "2020 - 2022",
      location: "San Francisco, CA",
      description: "Developed and maintained multiple client applications using modern JavaScript frameworks. Implemented RESTful APIs and worked with databases to create efficient data-driven solutions.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "JavaScript", "CSS3"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      duration: "2019 - 2020",
      location: "New York, NY",
      description: "Created responsive web interfaces and improved user experience across various client projects. Collaborated with designers to implement pixel-perfect designs and optimize application performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "Webpack"]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      duration: "2018 - 2019",
      location: "Austin, TX",
      description: "Started my professional journey building websites and learning industry best practices. Gained experience with various web technologies and agile development methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"]
    }
  ],

  skills: {
    "Frontend Development": [
      "React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS", "Next.js", "Nuxt.js"
    ],
    "Backend Development": [
      "Node.js", "Express.js", "Python", "Django", "Flask", "PHP", "Laravel", "Ruby on Rails", "Go"
    ],
    "Database & Storage": [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "SQLite", "Amazon S3", "Elasticsearch"
    ],
    "DevOps & Cloud": [
      "AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Linux", "Nginx"
    ],
    "Tools & Others": [
      "Git", "VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier"
    ]
  },

  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      image: "/src/assets/project1.jpg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking. Includes drag-and-drop functionality and deadline management.",
      technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB", "Vuex", "Bootstrap"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager-demo.com",
      image: "/src/assets/project2.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather, forecasts, and weather maps. Features location-based weather data and historical weather information.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid", "Local Storage"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-demo.com",
      image: "/src/assets/project3.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Vite and vanilla JavaScript. Features a VSCode-inspired design with Tokyo Night theme and smooth navigation.",
      technologies: ["Vite", "JavaScript", "CSS3", "HTML5", "Grid Layout", "Tokyo Night Theme"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      image: "/src/assets/project4.jpg"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blogging platform with markdown support, user authentication, comments system, and SEO optimization. Includes admin panel for content management.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "NextAuth.js", "Vercel"],
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://blog-demo.com",
      image: "/src/assets/project5.jpg"
    },
    {
      title: "Finance Tracker",
      description: "A personal finance tracking application with expense categorization, budget planning, and financial goal tracking. Includes data visualization and export features.",
      technologies: ["React", "Python", "Django", "Chart.js", "PostgreSQL", "Material-UI"],
      github: "https://github.com/yourusername/finance-tracker",
      demo: "https://finance-demo.com",
      image: "/src/assets/project6.jpg"
    }
  ],

  contact: {
    title: "Get In Touch",
    subtitle: "Let's build something amazing together!",
    content: `
# Contact Me

I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and development.

## Let's Connect

Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out using any of the methods below.

## What I Can Help With

- **Web Development**: Full-stack web applications using modern technologies
- **Frontend Development**: Responsive, user-friendly interfaces
- **Backend Development**: APIs, databases, and server-side logic
- **Consulting**: Technical advice and code reviews
- **Mentoring**: Helping other developers grow their skills

## Response Time

I typically respond to emails within 24-48 hours. For urgent matters, feel free to mention it in your message subject line.
    `,
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country"
  }
};

export default portfolioData;