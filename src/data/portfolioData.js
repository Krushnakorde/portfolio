export const portfolioData = {
  personal: {
    name: "Alex Rivera",
    role: "Computer Science Student & Full-Stack Developer",
    statusBadge: "Available for Internships & Projects",
    bio: "Passionate Computer Science undergraduate focused on modern web architecture, cloud deployment, and user-centric software design. I craft high-performance, responsive applications with clean code, scalable database architectures, and intuitive user experiences.",
    avatar: "./assets/images/profile.svg", // Replace with your real photo (e.g. ./assets/images/my-photo.jpg)
    resumeUrl: "#contact", // or link to your PDF resume e.g., "./resume.pdf"
    location: "San Francisco, CA / Remote",
    email: "alex.rivera.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  stats: [
    { label: "Projects Completed", value: "12+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Code Commits", value: "450+" },
    { label: "Passion for Learning", value: "100%" },
  ],

  about: {
    story: [
      "I am currently pursuing my Bachelor's degree in Computer Science with a strong focus on Software Engineering and Full-Stack Web Development. Over the course of my studies, I have developed a strong passion for solving real-world challenges through accessible, elegant code.",
      "My core philosophy revolves around continuous learning, writing maintainable code, and designing interfaces that balance aesthetics with blazing performance. When I am not debugging or building web applications, you will find me participating in hackathons, exploring distributed systems, or mentoring fellow students."
    ],
    education: [
      {
        degree: "B.S. in Computer Science",
        institution: "University School of Computing & Engineering",
        period: "2023 - 2027 (Expected)",
        description: "Specializing in Software Engineering and Distributed Systems. Relevant coursework: Data Structures & Algorithms, Database Systems, Web Application Development, Operating Systems, Computer Networks.",
        grade: "GPA: 3.85 / 4.00"
      },
      {
        degree: "Full-Stack Web Development Specialization",
        institution: "Independent Technical Certification",
        period: "2024",
        description: "Intensive training in modern JavaScript (ES6+), React.js, Node.js RESTful APIs, Tailwind CSS, PostgreSQL, and cloud deployments.",
        grade: "High Distinction"
      }
    ],
    highlights: [
      {
        title: "Fast Learner",
        desc: "Rapidly adopt new tools, libraries, and frameworks across both frontend and backend."
      },
      {
        title: "Clean Architecture",
        desc: "Write modular, readable, well-commented code that follows industry best practices."
      },
      {
        title: "User-Centric Design",
        desc: "Deliver fluid animations, accessible markup, and fully responsive layouts across devices."
      },
      {
        title: "Collaborative Team Player",
        desc: "Experienced with Git branching, pull requests, agile sprints, and pair programming."
      }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 78 }
    ],
    backend: [
      { name: "Node.js & Express", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "RESTful APIs", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Supabase & Firebase", level: 88 },
      { name: "Python", level: 75 }
    ],
    tools: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vite & Webpack", level: 88 },
      { name: "Netlify & Vercel", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 82 }
    ]
  },

  projects: [
    {
      id: "devsync",
      title: "DevSync - Collaborative Workspace",
      category: "Full Stack",
      shortDesc: "Real-time collaborative code editor and scratchpad with live syntax highlighting and room synchronization.",
      fullDesc: "DevSync empowers developers to pair-program and share code snippets in real-time. Built with a React frontend styled using Tailwind CSS, it connects to a WebSockets server for sub-millisecond cursor and keystroke broadcasting, alongside Supabase for room persistence.",
      image: "./assets/images/project1.svg",
      tags: ["React", "Tailwind CSS", "Node.js", "Socket.io", "Supabase"],
      featured: true,
      demoUrl: "https://example.com/demo/devsync",
      githubUrl: "https://github.com/example/devsync",
      features: [
        "Real-time synchronized editing with operational transformation",
        "Syntax highlighting for 12+ programming languages",
        "Active user presence indicators and room chat",
        "Instant code snippet link generation for peer reviews"
      ]
    },
    {
      id: "ecotrack",
      title: "EcoTrack - Carbon Footprint Dashboard",
      category: "Frontend",
      shortDesc: "Data visualization dashboard tracking carbon emissions, energy savings, and sustainability goals.",
      fullDesc: "EcoTrack is an analytical web app designed to visualize personal and organizational carbon reduction efforts. Features interactive SVG charts, dynamic metric filtering, and localized carbon footprint calculation engines.",
      image: "./assets/images/project2.svg",
      tags: ["React", "Tailwind CSS", "Chart.js", "REST APIs"],
      featured: true,
      demoUrl: "https://example.com/demo/ecotrack",
      githubUrl: "https://github.com/example/ecotrack",
      features: [
        "Interactive responsive charts with weekly/monthly emission trends",
        "Dynamic formula engine calculating transport and electricity offsets",
        "Custom goal tracking with milestone badges and exportable reports",
        "Optimized for high-contrast accessibility and mobile screens"
      ]
    },
    {
      id: "studysphere",
      title: "StudySphere - AI Study Companion",
      category: "AI & Tools",
      shortDesc: "AI-powered study assistant that generates flashcards, summarizes lectures, and schedules spaced repetition.",
      fullDesc: "StudySphere helps university students study smarter by translating dense lecture slides into interactive quizzes, flashcards, and concept maps using conversational AI prompts and spaced repetition algorithms.",
      image: "./assets/images/project3.svg",
      tags: ["React", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
      featured: true,
      demoUrl: "https://example.com/demo/studysphere",
      githubUrl: "https://github.com/example/studysphere",
      features: [
        "Automated flashcard generation from custom text or uploaded notes",
        "Spaced repetition schedule (SuperMemo SM-2 algorithm)",
        "Interactive quiz mode with instant scoring and explanations",
        "Cloud progress synchronization across devices"
      ]
    },
    {
      id: "shopwave",
      title: "ShopWave - Modern E-Commerce Platform",
      category: "Full Stack",
      shortDesc: "Ultra-fast headless shopping platform featuring product discovery, cart state management, and Stripe checkout.",
      fullDesc: "A complete digital storefront built with modern component architecture. Features responsive product filters, full-text search, persistent shopping cart, and mock checkout workflows.",
      image: "./assets/images/project4.svg",
      tags: ["React", "Tailwind CSS", "Context API", "Stripe API"],
      featured: false,
      demoUrl: "https://example.com/demo/shopwave",
      githubUrl: "https://github.com/example/shopwave",
      features: [
        "Instant multi-criteria filtering by category, price, and ratings",
        "Cart state persisted with localStorage and drawer animation",
        "Seamless simulated Stripe payment with card validation",
        "Lighthouse performance score of 98+ on desktop & mobile"
      ]
    },
    {
      id: "healthpulse",
      title: "HealthPulse - Fitness & Wellness Tracker",
      category: "AI & Tools",
      shortDesc: "PWA biometric tracker for logging workouts, water intake, calories, and resting heart rate analytics.",
      fullDesc: "Designed with a mobile-first philosophy, HealthPulse helps athletes and students stay on top of daily health goals. Includes animated progress rings, streak tracking, and local storage caching.",
      image: "./assets/images/project5.svg",
      tags: ["React", "Tailwind CSS", "PWA", "Firebase"],
      featured: false,
      demoUrl: "https://example.com/demo/healthpulse",
      githubUrl: "https://github.com/example/healthpulse",
      features: [
        "Progressive Web App (installable on iOS & Android)",
        "Daily calorie and macronutrient breakdown charts",
        "Heart rate & workout streak counters with custom motivational notifications",
        "Offline-first synchronization with IndexedDB"
      ]
    },
    {
      id: "algovisualizer",
      title: "AlgoVisualizer - Interactive Algorithm Sandbox",
      category: "Frontend",
      shortDesc: "Interactive visualizer for sorting, pathfinding, and graph algorithms with step-by-step speed control.",
      fullDesc: "Educational platform designed to help computer science students intuitively understand algorithmic concepts. Watch bubble sort, merge sort, quicksort, and Dijkstra's shortest path unfold step-by-step.",
      image: "./assets/images/project6.svg",
      tags: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "CSS Animations"],
      featured: false,
      demoUrl: "https://example.com/demo/algovisualizer",
      githubUrl: "https://github.com/example/algovisualizer",
      features: [
        "Step-by-step visual animations with adjustable execution speed",
        "Visual comparison counter for swaps, checks, and time complexity",
        "Custom array generator with random, reversed, or nearly sorted presets",
        "Graph traversal modes: BFS, DFS, and Dijkstra's algorithm"
      ]
    }
  ]
};
