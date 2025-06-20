import img_portfolio_website from "../assets/projects/project-portfolio.png"
import img_discord_bot from "../assets/projects/project-discord-bot.png";
import img_uni_project from "../assets/projects/project-cqu.ico";
import img_dsi_project from "../assets/projects/project-dsi.png";
import img_cc_project from "../assets/projects/project-cybercert.png";

export const HERO_TEXT =
  "I'm a reliable and driven IT graduate majoring in Cyber Security, with strengths in full-stack development, cloud infrastructure (AWS), and secure system & network design. With hands-on experience in both development and leadership roles, I bring a customer-focused mindset and a passion for building impactful tech solutions.";

  export const ABOUT_TEXT = 
  "My passion for technology started early — sparked by CQUniversity's robotics competition in primary school. That experience ignited a lifelong curiosity that led me to establish a robotics club in high school and ultimately pursue a Bachelor of Information Technology, majoring in Cyber Security, which I completed with Distinction (GPA: 6.958).\n\n" +
  "I've since gained hands-on experience across both technical and customer-facing roles — from supervising customer service teams to working as a software engineer on cloud-based projects. I enjoy solving complex problems and building secure, user-focused solutions that make a tangible impact.\n\n" +
  "Outside of development, you'll find me exploring emerging tech, diving into AI, or helping organise online events in my discord gaming community. I value curiosity, continuous learning, and working with people who are just as passionate about technology and building something meaningful.";

export const EXPERIENCES = [
    {
        year:"November 2024 — Present",
        role:"Software Engineer",
        company:"CyberCert",
        description: "Develop full-stack web applications using React, Next.js, and AWS Amplify. Contributed to building secure, scalable infrastructure with Lambda, DynamoDB, and S3. Worked closely with cross-functional teams using Jira, Confluence, and Figma, delivering agile solutions aligned to client needs.",
        technologies:["AWS Amplify", "JavaScript","TypeScript", "React", "Next.js", "Tailwind"],
    },
    {
        year:"January 2021 — Present",
        role:"Customer Service Assistant / Frontend Shift Supervisor",
        company:"Drakes Supermarkets",
        description: "Progressed from entry-level team member to trusted supervisor. Coordinate frontend operations, supervise staff, handle customer queries, and resolve discrepancies. Maintain compliance, perform end-of-day balancing, and ensure excellent customer experience.",
        technologies:[],
    }
];

export const PROJECTS = [
    {
        title: "CyberCert Verify — Certification Registry",
        image: img_cc_project,
        description:
        "❓ Problem: Organisations and users needed a reliable way to verify cybersecurity certifications.\n\n" +
        "🔧 Solution: I built a scalable public registry using Next.js and AWS Amplify. The system integrates with Lambda, DynamoDB, CloudFront, Secrets Manager, and REST APIs to provide secure lookups of CyberCert's certification records.\n\n" +
        "✅ Result: Delivered a responsive, production-ready platform supporting efficient data access and compliance transparency for end users.",
        technologies: ["AWS Amplify", "Next.js", "TypeScript", "Tailwind"],
        url: "https://verify.cybercert.ai",
    },
    {
        title: "NLP-Based Anomaly Detection in Network Traffic Logs",
        image: img_uni_project,
        description:
        "❓ Problem: Traditional intrusion detection systems often miss complex or novel threats hidden in network traffic logs.\n\n" +
        "🔧 Solution: I developed an anomaly detection model that applies natural language processing (NLP) techniques to extract patterns from raw traffic data. The project used pandas, scikit-learn, and PyTorch, and included an interactive Streamlit interface for user analysis.\n\n" +
        "✅ Result: Achieved >90% classification accuracy on benchmark data and made detection results accessible to both technical and non-technical users.",
        technologies: ["Python", "AI | NLP", "Google Colab"],
    },
    {
        title: "Discord Guild Management Bot",
        image: img_discord_bot,
        description:
        "❓ Problem: Managing server membership, monitoring player performance, and manually coordinating server events was inefficient and inconsistent.\n\n" +
        "🔧 Solution: I built a custom Python Discord bot that automates onboarding, performance tracking, and game data analytics. It integrates persistent MongoDB storage and supports asynchronous job scheduling for regular updates.\n\n" +
        "✅ Result: Saved multiple hours of admin time weekly, provided actionable analytics for leadership, and improved overall guild coordination.",
        technologies: ["Python", "MongoDB", "Discord API", "Game API"],
    },
    {
        title: "Tournament Automation Bot",
        image: img_discord_bot,
        description:
        "❓ Problem: A client needed a way to automate registration, match tracking, and leaderboard updates for a recurring online tournament.\n\n" +
        "🔧 Solution: I developed a dedicated Discord bot that handled player signups, team generation, real-time match result collection, and live leaderboard updates. The bot was designed to scale and required minimal manual intervention.\n\n" +
        "✅ Result: Successfully hosted a multi-week tournament with over 100 participants across 30+ teams and multiple rounds — all coordinated via the bot with seamless performance and positive participant and client feedback.",
        technologies: ["Python", "MongoDB", "Discord API", "Game API"],
    },
    {
        title:"Portfolio Website",
        image:img_portfolio_website,
        description: "A responsive portfolio site showcasing my technical skills, project work, and professional experience. Built with ReactJS and styled using Tailwind CSS for a clean, consistent UI across devices. Deployed via GitHub Pages with modular components and mobile-friendly layout.",
        technologies:["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind"],
        url: "https://b-lucht.github.io/react-portfolio/",
    },
    {
        title: "Smart Home IoT Monitoring System",
        image: img_uni_project,
        description: "Designed and implemented a smart home monitoring platform for real-time temperature tracking. Leveraged Azure IoT Hub to ingest sensor data, used Docker and Kubernetes (AKS) for containerized orchestration, and integrated Node-RED for real-time dashboard visualizations.",
        technologies: ["JavaScript", "Azure IoT Hub", "Kubernetes", "Docker", "Node-RED"],
    }
];

export const CONTACT = {
    address: "Rockhampton, QLD 4701",
    phoneNo: "(+61) 478 433 966",
    email: "luchtbrodie@gmail.com",
  };