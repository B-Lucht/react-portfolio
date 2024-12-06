import img_portfolio_website from "../assets/projects/project-portfolio.png"
import img_discord_bot from "../assets/projects/project-discord-bot.png";
import img_uni_project from "../assets/projects/project-cqu.ico"

export const HERO_TEXT = "Dedicated and detail-oriented IT student with a strong background in customer service and leadership roles. I'm currently pursuing a Bachelor of Information Technology with a major in Cyber Security at CQUniversity. Passionate about leveraging technical expertise in software development, cybersecurity, and data analytics to create impactful solutions.";

export const ABOUT_TEXT = "I am an IT student specializing in Cyber Security with a strong technical foundation in Python, Java, and modern web technologies. I have experience in customer service roles where I developed leadership and management skills. Combining technical expertise with real-world problem-solving abilities, I am driven to contribute to innovative projects that make a difference.";

export const EXPERIENCES = [
    {
        year:"2024 - Present",
        role:"Full Stack Developer Intern",
        company:"CyberCert",
        description:"",
        technologies:["JavaScript","ReactJS","Tailwind"],
    },
    {
        year:"2021 - Present",
        role:"Customer Service Assistant / Shift Supervisor",
        company:"Drakes Supermarkets",
        description:"Deliver exceptional customer service and handle monetary transactions. Resolve customer inquiries and discrepancies while managing frontend staff, operations, cash handling, and the sale of controlled items.",
        technologies:[],
    }
];

export const PROJECTS = [
    {
        title:"Portfolio Website",
        image:img_portfolio_website,
        description:"A responsive and modern portfolio website built to showcase my skills and projects. The site uses Tailwind for styling and ReactJS for a dynamic user experience.",
        technologies:["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind"],
    },
    {
        title:"Discord Bot for Guild Management",
        image:img_discord_bot,
        description:"Designed and implemented a Discord bot to streamline guild management in my private gaming community. Features include automated role assignment, activity tracking, and game-data analytics.",
        technologies:["Python", "MongoDB"],
    },
    {
        title: "Smart Home IoT Monitoring System",
        image: img_uni_project,
        description: "Developed a cloud-based IoT solution for real-time temperature monitoring in smart homes using Azure IoT Hub, AKS, and Node-RED.",
        technologies: ["JavaScript", "Azure IoT Hub", "Kubernetes", "Docker", "Node-RED"],
    },
    {
        title: "Distributed System for Customer Order Management",
        image: img_uni_project,
        description: "Designed and implemented a distributed system supporting customer and admin roles for order management, including secure multi-client server interactions and account functionality.",
        technologies: ["Java", "MySQL", "Socket Programming", "Multi-threading"],
    },
    {
        title: "AI-Powered Business Chatbot",
        image: img_uni_project,
        description: "Developed a Python chatbot with DialogFlow and GPT-3.5-turbo, capable of answering business-related queries. Implemented speech recognition and conversational memory for a seamless user experience.",
        technologies: ["Python", "DialogFlow", "OpenAI GPT"],
    },
    {
        title: "Web Application for Job Management",
        image: img_uni_project,
        description: "Created a dynamic web application for managing job postings and applications using PHP, JavaScript, and Bootstrap, integrated with a MySQL database.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    }
];

export const CONTACT = {
    address: "Rockhampton, QLD 4701",
    phoneNo: "(+61) 0478 433 966",
    email: "luchtbrodie@gmail.com",
  };