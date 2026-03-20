// Portfolio Data - Single Source of Truth

export const greeting = {
  username: "Vishal Pandey",
  title: "Hi, I'm Vishal Pandey",
  role: "Full Stack Developer",
  subTitle:
    "I build and deploy web applications from frontend to production. My core stack includes JavaScript, React, Node.js, Express and Python with MongoDB and SQL databases. I also work with Docker, Kubernetes, AWS, Vercel and GitHub Actions to containerize, automate and ship applications.",
  resumeLink:
    "https://drive.google.com/file/d/1_dxseXTUd8COSWVkIN_FIJSVS-pfrqcS/view?usp=sharing",
};

export const socialMediaLinks = {
  github: "https://github.com/CodeJungleExplorer",
  linkedin: "https://www.linkedin.com/in/vishal-pandey-501223235/",
  gmail: "vishalpandey.dev@gmail.com",
};

export const skillsSection = {
  title: "What I Do",
  subTitle: "Full Stack Developer building and deploying modern web applications",
  skills: [
    "Build responsive frontend applications using HTML, CSS, JavaScript and React",
    "Develop scalable backend APIs using Node.js, Express and Python with MongoDB and SQL databases",
    "Deploy and automate applications using Docker, Kubernetes, AWS, Vercel and GitHub Actions",
  ],
  softwareSkills: [
    { skillName: "HTML5", icon: "html5" },
    { skillName: "CSS3", icon: "css3" },
    { skillName: "JavaScript", icon: "javascript" },
    { skillName: "React", icon: "react" },
    { skillName: "Node.js", icon: "nodejs" },
    { skillName: "Python", icon: "python" },
    { skillName: "MongoDB", icon: "mongodb" },
    { skillName: "Docker", icon: "docker" },
    { skillName: "AWS", icon: "aws" },
    { skillName: "Git", icon: "git" },
    { skillName: "Express", icon: "express" },
    { skillName: "SQL", icon: "sql" },
  ],
};

export const educationInfo = {
  schools: [
    {
      schoolName: "JECRC Foundation, Jaipur",
      subHeader: "Bachelor of Technology — Mechanical Engineering",
      duration: "2017 – 2021",
      desc: "Studied core engineering fundamentals and developed strong analytical problem-solving skills.",
      descBullets: [
        "Studied core engineering fundamentals and analytical problem solving",
        "Built strong logical and quantitative reasoning skills",
        "Developed technical documentation and project reporting skills",
      ],
    },
    {
      schoolName: "KNICE, Sultanpur",
      subHeader: "Class 12 — Higher Secondary Education",
      duration: "2016",
      desc: "Completed higher secondary education with focus on science subjects.",
      descBullets: [
        "Completed higher secondary education with focus on science subjects",
        "Built strong mathematical and analytical foundation",
        "Participated in academic activities and competitions",
      ],
    },
    {
      schoolName: "KNICE, Sultanpur",
      subHeader: "Class 10 — Secondary Education",
      duration: "2014",
      desc: "Developed strong base in mathematics and science.",
      descBullets: [
        "Developed strong base in mathematics and science",
        "Participated in school academic programs",
        "Maintained consistent academic performance",
      ],
    },
  ],
};

export const workExperiences = {
  experience: [
    {
      role: "Software Developer",
      company: "MeraEvents",
      date: "Dec 2024 – May 2025",
      desc: "Worked as a Full Stack Web Developer at MeraEvents, contributing to multiple high-impact applications including MeraEvents, Mozzup, EasyTag, and Planica.",
      descBullets: [
        "Gained hands-on experience with cutting-edge AI tools and technologies, integrating intelligent features to enhance user engagement and system efficiency.",
        "Developed and maintained scalable web applications using modern frameworks and best coding practices.",
        "Collaborated with cross-functional teams to deliver robust solutions, ensuring seamless integration across platforms.",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Freelance / PeoplePerHour",
      date: "Jul 2023 – Dec 2024",
      desc: "Architected and deployed custom web solutions for 15+ clients, achieving 100% project delivery rate.",
      descBullets: [
        "Implemented responsive design principles, resulting in 40% improvement in mobile user engagement.",
        "Orchestrated end-to-end development lifecycles while maintaining 95% client satisfaction rate.",
        "Utilized modern JavaScript frameworks to optimize application performance and user experience.",
      ],
    },
    {
      role: "Customer Support Executive",
      company: "Concentrix",
      date: "Jul 2022 – May 2023",
      desc: "Delivered excellent customer support by resolving 50+ queries daily with accuracy and empathy.",
      descBullets: [
        "Strengthened communication and problem-solving skills while handling clients in high-pressure situations.",
        "Collaborated with team members to meet service-level targets and improve overall customer satisfaction.",
      ],
    },
  ],
};

export const bigProjects = {
  title: "Projects",
  subtitle: "Some applications and systems I have built",
  projects: [
    {
      projectName: "NovaOS",
      projectDesc:
        "A full stack platform built with React, Node.js and MongoDB featuring scalable architecture and production-ready deployment.",
      github: "https://github.com/CodeJungleExplorer/novaos",
      live: "https://novaos1.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    },
    {
      projectName: "HRMS Lite",
      projectDesc:
        "A lightweight Human Resource Management System built with React, Node.js, Express and MongoDB.",
      github: "https://github.com/CodeJungleExplorer/hrms-lite",
      live: "https://hrms-lite-seven-sepia.vercel.app",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    },
    {
      projectName: "LAMF LMS",
      projectDesc:
        "A full stack Loan Management System for NBFCs offering Loans Against Mutual Funds with role-based access and LTV compliance.",
      github: "https://github.com/CodeJungleExplorer/lamf-lms",
      live: null,
      tags: ["React", "Node.js", "Express", "Axios", "JWT / bcryptjs"],
    },
    {
      projectName: "VectorShift Pipeline Editor",
      projectDesc:
        "A visual pipeline editor built with ReactFlow and FastAPI allowing users to create node-based workflows and analyze them as Directed Acyclic Graphs.",
      github: "https://github.com/CodeJungleExplorer/vectorshift-nodeflow-pipeline-editor",
      live: null,
      tags: ["ReactFlow", "FastAPI", "Python", "DAG Processing", "WebSockets"],
    },
  ],
};

export const achievementSection = {
  title: "Achievements",
  subtitle: "Key milestones and accomplishments along the way",
  achievements: [
    {
      title: "20+ Freelance Projects Delivered",
      subtitle:
        "Delivered 20+ freelance projects for local and international clients, covering full stack web development and modern UI/UX solutions.",
      icon: "🚀",
    },
    {
      title: "Full Stack Developer at MeraEvents",
      subtitle:
        "Worked at MeraEvents as a Full Stack Developer, implementing AI tools and modern technologies to enhance customer experience.",
      icon: "💼",
    },
    {
      title: "2× Hackathon Winner",
      subtitle:
        "Achieved 2 hackathon wins, along with awards in debate competitions and sports events, showcasing creativity and leadership.",
      icon: "🏆",
    },
    {
      title: "Sikhsha Volunteer",
      subtitle:
        "Volunteered in Sikhsha initiative, teaching underprivileged children for 2 hours daily across 3 months.",
      icon: "🌱",
    },
    {
      title: "Mentored Peers & Juniors",
      subtitle:
        "Guided peers and juniors in mastering React, Node.js, and database best practices, contributing to team growth.",
      icon: "💡",
    },
  ],
};

export const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out for opportunities or collaboration.",
  email: "vishalpandey520a@gmail.com",
};

export const isHireable = true;
