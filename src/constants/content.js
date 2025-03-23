import img_portfolio_website from "../assets/projects/project-portfolio.png"
import img_discord_bot from "../assets/projects/project-discord-bot.png";
import img_uni_project from "../assets/projects/project-cqu.ico";
import img_dsi_project from "../assets/projects/project-dsi.png";

export const HERO_TEXT = 
  "I'm a dedicated IT graduate majoring in Cyber Security with a strong academic record (GPA: 6.958). " +
  "My expertise lies in cyber security, system and network administration, and python development, with growing skills in AI and full-stack development. " +
  "I'm proficient in Python and Java, and currently enhancing my knowledge of JavaScript and TypeScript. " +
  "With hands-on experience in both technical and leadership roles, I thrive on solving complex problems and building impactful digital solutions.";

export const OLD_HERO_TEXT = "Dedicated and detail-oriented IT student with a strong background in customer service and leadership roles. I'm currently pursuing a Bachelor of Information Technology with a major in Cyber Security at CQUniversity. Passionate about leveraging technical expertise in software development, cybersecurity, and data analytics to create impactful solutions.";

export const ABOUT_TEXT = "I am an IT student specializing in Cyber Security with a strong technical foundation in Python, Java, and modern web technologies. I have experience in customer service roles where I developed leadership and management skills. Combining technical expertise with real-world problem-solving abilities, I am driven to contribute to innovative projects that make a difference.";

export const EXPERIENCES = [
    {
        year:"Nov 2024 - Present",
        role:"Full Stack Developer Intern",
        company:"CyberCert",
        description: "Collaborate as part of a remote, agile team at CyberCert, contributing to the development of secure digital products. Gained valuable experience with industry tools such as Jira, Confluence, Figma, and GitHub, enhancing cross-functional communication and iterative project management in a fast paced development environment.",
        technologies:["AWS Amplify", "JavaScript","TypeScript", "React", "Next.js", "Tailwind"],
    },
    {
        year:"Jan 2021 - Present",
        role:"Customer Service Assistant / Shift Supervisor",
        company:"Drakes Supermarkets",
        description:"Deliver exceptional customer service and handle monetary transactions. Resolve customer inquiries and discrepancies while managing frontend staff, operations, cash handling, and the sale of controlled items.",
        technologies:[],
    }
];

export const PROJECTS = [
    {
        title:"DSI Registry",
        image:img_dsi_project,
        description: "A public web platform enabling users to verify an organisation's cybersecurity certification. Built using Next.js and deployed via AWS Amplify, the platform leverages services such as Lambda, DynamoDB, CloudFront, Secrets Manager, and REST APIs to deliver secure, scalable, and efficient data access.",
        technologies:["AWS Amplify", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        title: "NLP-Based Anomaly Detection in Network Traffic Logs",
        image: img_uni_project,
        description: "Developed a machine learning system to identify anomalous behavior in network traffic using natural language processing (NLP) techniques. Utilized Python libraries including scikit-learn, pandas, and PyTorch for feature engineering and classification. Trained models in Google Colab and deployed a streamlined interface using Streamlit for interactive log analysis and result interpretation.",
        technologies: ["Python", "AI | NLP", "Google Colab"],
    },
    {
        title: "Discord Bots for Guild & Event Management",
        image: img_discord_bot,
        description:
            "Designed, developed, and actively maintain two Python-based Discord bots. The first bot handles end-to-end guild management in my own server — including member onboarding, game data analytics, and community event coordination — significantly reducing manual overhead for leadership. " + 
            "The second bot was built for a client to fully automate tournament operations — from participant onboarding and team formation to live match tracking and leaderboard updates — providing a scalable solution for running the community event with minimal manual oversight. " + 
            "Both bots use modular codebases, persistent data, and integrate with external game and Discord APIs for real-time interaction.",
        technologies: ["Python", "MongoDB", "Discord API", "Game API"],
    },
    {
        title:"Portfolio Website",
        image:img_portfolio_website,
        description: "A modern, responsive portfolio website built to highlight my skills and project experience. Utilizes ReactJS for dynamic rendering and Tailwind CSS for clean, customizable styling across devices.",
        technologies:["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind"],
    },
    {
        title: "Smart Home IoT Monitoring System",
        image: img_uni_project,
        description: "Engineered a cloud-based IoT solution for real-time temperature monitoring in smart homes. Integrated Azure IoT Hub, Kubernetes (AKS), Docker, and Node-RED to manage sensor data and ensure scalable deployment.", 
        technologies: ["JavaScript", "Azure IoT Hub", "Kubernetes", "Docker", "Node-RED"],
    },
];

export const CONTACT = {
    address: "Rockhampton, QLD 4701",
    phoneNo: "(+61) 478 433 966",
    email: "luchtbrodie@gmail.com",
  };