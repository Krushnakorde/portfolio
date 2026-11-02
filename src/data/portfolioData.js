export const portfolioData = {
  personal: {
    name: "Krushna Bharat Korde",
    role: "Full Stack Developer | TypeScript, React.js & Node.js Specialist",
    statusBadge: "Full Stack Developer @ V-Rise • MCA Scholar @ SPPU",
    bio: "Full Stack Developer with commercial engineering experience building and optimizing high-performance web applications. Currently engineering production features at V-RISE INFOTECH PVT LTD while pursuing Master of Computer Applications (MCA) at SPPU. Proven expertise in building OSINT cyber fraud detection frameworks and scalable healthcare applications.",
    avatar: "./assets/images/krushna_photo.jpg",
    resumeUrl: "./Krushna_Bharat_Korde_Resume.pdf",
    location: "Nashik, Maharashtra, India",
    phone: "+91 9359799245",
    email: "krushnakorde0310@gmail.com",
    github: "https://github.com/Krushnakorde/",
    linkedin: "https://linkedin.com/in/kkorde332",
    twitter: "https://github.com/Krushnakorde/",
  },

  stats: [
    { label: "Live Cloud Deployments", value: "2+" },
    { label: "MCA Academic SGPA", value: "9.00" },
    { label: "Commercial Experience", value: "2+ Years" },
    { label: "Code Quality & Dedication", value: "100%" },
  ],

  about: {
    story: [
      "I am a Full Stack Developer and Master of Computer Applications (MCA) candidate at G.E.S. R.H. Sapat College of Engineering (Savitribai Phule Pune University). Combining rigorous computer science coursework with active commercial software engineering, I specialize in engineering secure, high-performance web and cloud applications that scale seamlessly.",
      "At V-RISE INFOTECH PVT LTD, I work as a Full Stack Developer architecting end-to-end features using TypeScript, React.js, and Node.js. My independent engineering work includes the OSINT Cyber Fraud Investigation Framework (hosted live on Render) and MediCare (hosted live on Vercel), featuring responsive architectures, robust state management, and optimized database queries."
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
          "Implemented modern, accessible UI interfaces using Tailwind CSS and component systems to deliver responsive user experiences across browsers and devices.",
          "Engineered scalable client-side data management layers using Redux Toolkit, RTK Query, and RESTful endpoints to minimize network overhead and latency.",
          "Configured secure backend authentication flows (JWT), role-based access control (RBAC), and real-time Socket.IO synchronization modules.",
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
        description: "Specializing in Advanced Software Engineering, Distributed Cloud Systems, Data Structures & Algorithms, and Database Management.",
        grade: "Sem 1 SGPA: 8.59 | Sem 2 SGPA: 9.00"
      },
      {
        degree: "Full Stack Web Development Certification",
        institution: "Coding Ninjas (Professional Training Program)",
        period: "2023 – 2024",
        description: "Intensive training in Node.js, React.js, Data Structures & Algorithms, RESTful APIs, and full-stack software architecture.",
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
        title: "Commercial Experience",
        desc: "Active Full Stack Developer at V-RISE INFOTECH PVT LTD shipping commercial production features."
      },
      {
        title: "OSINT & Threat Analysis",
        desc: "Architected dedicated cyber fraud intelligence framework analyzing target domains, IPs, and digital entities."
      },
      {
        title: "Modern React & Healthcare",
        desc: "Engineered MediCare healthcare consultation platform with responsive appointment scheduling on Vercel."
      },
      {
        title: "Scalable Full Stack",
        desc: "Deep proficiency in TypeScript, React.js, Next.js, Node.js, Express, MongoDB, and Docker containerization."
      }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js & Next.js", level: 95 },
      { name: "TypeScript & JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS & CSS3", level: 95 },
      { name: "Redux Toolkit & RTK Query", level: 90 },
      { name: "HTML5 & Web Accessibility", level: 95 },
      { name: "Responsive UI & Component Design", level: 94 }
    ],
    backend: [
      { name: "Node.js & Express.js", level: 92 },
      { name: "RESTful APIs & Microservices", level: 94 },
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "SQL / MySQL Databases", level: 85 },
      { name: "JWT Auth & RBAC Security", level: 92 },
      { name: "Socket.IO (WebSockets)", level: 88 }
    ],
    tools: [
      { name: "Git & GitHub", level: 94 },
      { name: "Vercel & Render Cloud", level: 92 },
      { name: "Vite & Modern Bundlers", level: 92 },
      { name: "Postman & API Testing", level: 90 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Nginx & Linux (WSL 2)", level: 85 }
    ]
  },

  projects: [
    {
      id: "osint-fraud-framework",
      title: "OSINT Cyber Fraud Detection Framework",
      category: "Cybersecurity & Full Stack",
      shortDesc: "Automated Open Source Intelligence (OSINT) framework engineered to detect, analyze, and investigate cyber fraud, malicious domains, and fraudulent digital identities.",
      fullDesc: "The OSINT Fraud Framework provides cybersecurity researchers, financial analysts, and fraud investigators with an automated intelligence platform. It cross-examines target domains, IPs, SSL certificates, and digital entity footprints against known threat feeds to calculate real-time fraud probability scores and generate forensic intelligence dossiers.",
      image: "./assets/images/project_osint.svg",
      tags: ["OSINT", "Python", "React.js", "Node.js", "Render Cloud", "Threat Intel", "REST APIs"],
      featured: true,
      demoUrl: "https://osint-fraud-framework.onrender.com/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Live cyber fraud threat detection and automated target domain analysis",
        "Multi-source correlation across IPs, threat repositories, and sibling Whois footprints",
        "Real-time fraud risk scoring algorithms with visual threat indicators",
        "Production cloud deployment hosted with continuous uptime on Render Cloud"
      ]
    },
    {
      id: "medicare-platform",
      title: "MediCare - Healthcare & Doctor Consultation Portal",
      category: "Healthcare & Frontend",
      shortDesc: "Comprehensive medical appointment scheduling and healthcare management platform connecting patients with specialist doctors across specialties.",
      fullDesc: "MediCare is a modern healthcare web application designed to streamline doctor discovery and consultation booking. Featuring specialized department filters, physician experience ratings, interactive calendar time-slot booking, and responsive UI components engineered with React and Tailwind CSS.",
      image: "./assets/images/project_medicare.svg",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Vercel Cloud", "Context API", "Responsive"],
      featured: true,
      demoUrl: "https://medicare-frontend-six-sigma.vercel.app/",
      githubUrl: "https://github.com/Krushnakorde/",
      features: [
        "Specialist doctor directory with department filtering (Cardiology, Neurology, etc.)",
        "Interactive appointment scheduling workflow with real-time slot selection",
        "Fully responsive layout optimized for mobile smartphones, tablets, and desktop",
        "Deployed for high-speed global delivery on Vercel Cloud"
      ]
    }
  ]
};
