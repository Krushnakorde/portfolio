export const portfolioData = {
  personal: {
    name: "Krushna Bharat Korde",
    role: "Full Stack Developer | TypeScript, React.js & Node.js Specialist",
    statusBadge: "MCA Student @ SPPU • Full Stack Dev @ V-Rise",
    bio: "Full Stack Developer with commercial experience building, scaling, and optimizing high-performance web and mobile applications. Currently pursuing Master of Computer Applications (MCA) at G.E.S. R.H. Sapat College of Engineering (SPPU) while architecting production features with TypeScript, React.js, Next.js, React Native, Node.js, and MongoDB.",
    avatar: "./assets/images/krushna_korde.jpg",
    resumeUrl: "./Krushna_Bharat_Korde_Resume.pdf",
    location: "Nashik, Maharashtra, India",
    phone: "+91 9359799245",
    email: "kkorde332@gmail.com",
    github: "https://github.com/Krushnakorde",
    linkedin: "https://linkedin.com/in/kkorde332",
    twitter: "https://github.com/Krushnakorde",
  },

  stats: [
    { label: "Commercial & Core Projects", value: "15+" },
    { label: "MCA Academic SGPA", value: "9.00" },
    { label: "Production Experience", value: "2+ Years" },
    { label: "Clean Code & Reliability", value: "100%" },
  ],

  about: {
    story: [
      "I am a passionate Full Stack Developer and Master of Computer Applications (MCA) candidate at G.E.S. R.H. Sapat College of Engineering (Savitribai Phule Pune University). Combining rigorous computer science coursework with active commercial software engineering, I specialize in engineering robust web and mobile applications that scale efficiently under production workloads.",
      "At V-RISE INFOTECH PVT LTD, I architect end-to-end full-stack features using TypeScript, React.js, and Node.js, optimizing database queries across MongoDB and SQL systems. I believe in writing maintainable, clean architecture, implementing resilient state management with Redux Toolkit and RTK Query, and delivering polished, accessible user experiences."
    ],
    experience: [
      {
        role: "Full Stack Developer",
        company: "V-RISE INFOTECH PVT LTD",
        period: "May 2024 – Present",
        location: "Nashik, Maharashtra",
        highlights: [
          "Architected and shipped end-to-end full-stack features using TypeScript, React.js, and Node.js, ensuring type safety and optimal rendering performance.",
          "Designed and optimized database schemas and aggregation queries, integrating backend micro-services with MongoDB and SQL databases under strict performance benchmarks.",
          "Engineered scalable client-side data management layers using Redux Toolkit, RTK Query, and RESTful endpoints.",
          "Configured secure authentication flows (JWT), role-based access control (RBAC), and real-time Socket.IO synchronization modules.",
          "Managed production deployments, environment configurations, and continuous containerized optimization using Docker and Nginx."
        ]
      },
      {
        role: "Relationship Manager",
        company: "ICICI Bank",
        period: "2021 – 2023",
        location: "Mumbai, Maharashtra",
        highlights: [
          "Managed digital client interaction portfolios and verified operational data under institutional guidelines and SLAs.",
          "Analyzed workflow friction points and collaborated cross-functionally to streamline internal digital processes."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "G.E.S. R.H. Sapat College of Engineering (SPPU)",
        period: "2025 – 2027 (Expected)",
        description: "Focusing on Advanced Software Engineering, Distributed Cloud Computing, Algorithm Design, and Database Architecture.",
        grade: "Sem 1 SGPA: 8.59 | Sem 2 SGPA: 9.00"
      },
      {
        degree: "Full Stack Web Development Certification",
        institution: "Coding Ninjas (Intensive Professional Program)",
        period: "2023 – 2024",
        description: "Comprehensive hands-on training in Node.js, React.js, Data Structures, RESTful APIs, and full-stack system architecture.",
        grade: "Certified Full Stack Developer"
      },
      {
        degree: "Bachelor of Arts (BA)",
        institution: "Savitribai Phule Pune University",
        period: "2017 – 2020",
        description: "Undergraduate degree focusing on analytical problem-solving, communications, and organizational workflows.",
        grade: "Graduated with Honors"
      }
    ],
    highlights: [
      {
        title: "Commercial Full Stack",
        desc: "Proven commercial track record shipping production features with TypeScript, React.js, Next.js, and Node.js."
      },
      {
        title: "Mobile & Web Ecosystems",
        desc: "Experienced developing cross-platform React Native mobile applications with offline-first local synchronization."
      },
      {
        title: "Scalable Database Design",
        desc: "Expert in MongoDB aggregation pipelines, Mongoose schemas, MySQL indexing, and cloud persistence."
      },
      {
        title: "DevOps & Containerization",
        desc: "Proficient with Docker containerization, Nginx reverse proxies, Linux (WSL 2), Git, and CI/CD workflows."
      }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS & CSS3", level: 95 },
      { name: "React Native (Mobile)", level: 88 },
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "HTML5 & Accessibility", level: 95 }
    ],
    backend: [
      { name: "Node.js & Express.js", level: 92 },
      { name: "RESTful APIs & Microservices", level: 94 },
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "SQL / MySQL Databases", level: 85 },
      { name: "Socket.IO (WebSockets)", level: 88 },
      { name: "JWT Auth & RBAC Security", level: 92 }
    ],
    tools: [
      { name: "Git & GitHub", level: 94 },
      { name: "Redux Toolkit & RTK Query", level: 92 },
      { name: "Vite & Modern Bundlers", level: 92 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Nginx & Linux (WSL 2)", level: 85 },
      { name: "Postman & API Testing", level: 90 }
    ]
  },

  projects: [
    {
      id: "torqup",
      title: "TorqUp - Modular Utility Platform",
      category: "Full Stack",
      shortDesc: "Offline-first mobile and web utility framework with robust local state synchronization and responsive telemetry dashboards.",
      fullDesc: "TorqUp is a comprehensive cross-platform utility framework built with React Native, TypeScript, Node.js, and MongoDB. Engineered with an offline-first architecture, it ensures seamless data capture in low-connectivity environments with asynchronous queue synchronization, automatic retry logic, and zero data loss.",
      image: "./assets/images/project_torqup.svg",
      tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      featured: true,
      demoUrl: "https://github.com/Krushnakorde/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Offline-first mobile and web utility architecture with local SQLite/caching layer",
        "Optimized asynchronous data-fetching layers managing intermittent connectivity gracefully",
        "Type-safe contracts across frontend and backend services using TypeScript",
        "Interactive telemetry dashboard with real-time status reporting"
      ]
    },
    {
      id: "societyflux",
      title: "SocietyFlux - Community Management Ecosystem",
      category: "Full Stack",
      shortDesc: "Comprehensive gated community ecosystem featuring role-based dashboards, real-time visitor tracking, and instant alerts.",
      fullDesc: "SocietyFlux modernizes residential community operations with tailored web and mobile portals for residents, facility staff, and administrative management committees. Features real-time visitor entry logging, gate pass verification, and instant push notifications powered by Socket.IO and cached database queries.",
      image: "./assets/images/project_societyflux.svg",
      tags: ["React.js", "React Native", "TypeScript", "Node.js", "Socket.IO", "MongoDB"],
      featured: true,
      demoUrl: "https://github.com/Krushnakorde/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Role-based access control (RBAC) for Admins, Security Guards, and Residents",
        "Real-time visitor tracking alerts and instant push notifications with Socket.IO",
        "Fast cached database aggregation for flat status, parking, and dues tracking",
        "Cross-platform responsive design supporting iOS, Android, and Desktop Web"
      ]
    },
    {
      id: "vistabills",
      title: "Vistabills - Brokerage & Billing Management",
      category: "Full Stack",
      shortDesc: "Commercial invoicing and financial tracking system designed for clear transaction summaries and commission data visualization.",
      fullDesc: "Vistabills provides real estate and brokerage firms with a unified billing and commission settlement application. Built with React Native, Node.js, Express.js, and MongoDB, it automates commission splits, generates itemized GST-ready invoices, and was published to Google Play Store with signed production bundles.",
      image: "./assets/images/project_vistabills.svg",
      tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Google Play"],
      featured: true,
      demoUrl: "https://github.com/Krushnakorde/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Automated commission split calculation engine with MongoDB aggregation pipelines",
        "Itemized invoice generator with exportable billing ledgers and status indicators",
        "Production-ready mobile deployment configured for Google Play Store distribution",
        "Responsive financial summary charts with transaction history search"
      ]
    },
    {
      id: "devsync",
      title: "DevSync - Collaborative Code Workspace",
      category: "Frontend",
      shortDesc: "Real-time collaborative code editor and scratchpad with live syntax highlighting and room synchronization.",
      fullDesc: "DevSync empowers developers to pair-program and share code snippets in real-time. Built with a React frontend styled using Tailwind CSS, it connects to a WebSockets server for sub-millisecond cursor broadcasting, alongside persistent database storage.",
      image: "./assets/images/project1.svg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Socket.IO", "Vite"],
      featured: false,
      demoUrl: "https://github.com/Krushnakorde/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Real-time synchronized editing with operational transformation",
        "Syntax highlighting for 12+ programming languages",
        "Active user presence indicators and room chat",
        "Instant code snippet link generation for peer reviews"
      ]
    },
    {
      id: "ecotrack",
      title: "EcoTrack - Carbon Footprint Analytics",
      category: "Frontend",
      shortDesc: "Data visualization dashboard tracking carbon emissions, energy savings, and sustainability goals.",
      fullDesc: "EcoTrack is an analytical web app designed to visualize personal and organizational carbon reduction efforts. Features interactive SVG charts, dynamic metric filtering, and localized carbon footprint calculation engines.",
      image: "./assets/images/project2.svg",
      tags: ["React.js", "Tailwind CSS", "REST APIs", "Vite"],
      featured: false,
      demoUrl: "https://github.com/Krushnakorde/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Interactive responsive charts with weekly/monthly emission trends",
        "Dynamic formula engine calculating transport and electricity offsets",
        "Custom goal tracking with milestone badges and exportable reports",
        "Optimized for high-contrast accessibility and mobile screens"
      ]
    },
    {
      id: "algovisualizer",
      title: "AlgoVisualizer - Algorithm Sandbox",
      category: "Frontend",
      shortDesc: "Interactive visualizer for sorting, pathfinding, and graph algorithms with step-by-step speed control.",
      fullDesc: "Educational platform designed to intuitively demonstrate algorithmic concepts. Watch merge sort, quicksort, and graph traversals unfold with step-by-step visualizations and time-complexity statistics.",
      image: "./assets/images/project6.svg",
      tags: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Vite"],
      featured: false,
      demoUrl: "https://github.com/Krushnakorde/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Step-by-step visual animations with adjustable execution speed",
        "Visual comparison counter for swaps, checks, and time complexity",
        "Custom array generator with random, reversed, or nearly sorted presets",
        "Graph traversal modes: BFS, DFS, and Dijkstra's algorithm"
      ]
    }
  ]
};
