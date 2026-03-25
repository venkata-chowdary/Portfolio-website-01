export const projectsData = [
  {
    title: "AI-Powered Mock Interview & Evaluation Platform",
    description:
      "I built this platform to simulate real technical interviews and give candidates detailed feedback instantly. It uses resume-aware question selection with embeddings and Qdrant, supports both voice and text responses, and runs a structured LLM evaluation pipeline for scoring and reports. FastAPI background workers plus Redis caching helped cut response latency by about 40%.",
    technologies: [
      "FastAPI",
      "LangChain",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "Gemini Embeddings",
      "Web Speech API",
    ],
    image: "/projects/ss4.png",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Trackly - Job Application Manager",
    description:
      "Trackly started as a way to solve the chaos of job hunting. It pulls application emails from Gmail, uses AI to classify them, and organizes status, deadlines, and job details in one clean dashboard. I built it with Next.js, Prisma, and Clerk to keep the experience fast, secure, and easy to use.",
    technologies: ["Next.js", "Prisma", "Clerk", "Gmail API", "Instamojo", "Gemini AI"],
    image: "/projects/ss3.png",
    liveLink: "https://trackly-alpha.vercel.app/",
    repoLink: "https://github.com/venkata-chowdary/trackly",
  },
  {
    title: "ConnectNow",
    description:
      "ConnectNow is a real-time chat app focused on making conversations feel live and smooth. It supports instant messaging, group chats, and peer-to-peer video calls, along with features like typing indicators, read receipts, and emoji reactions. I also added OTP and JWT-based auth for secure onboarding and account flows.",
    technologies: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "Socket.IO",
      "PeerJS",
      "Cloudinary",
      "JWT",
    ],
    image: "/projects/ss.png",
    liveLink: "https://connectnow.netlify.app/",
    repoLink: "https://github.com/venkata-chowdary/Messenger",
  },
  {
    title: "DoubtDesk - College Doubt Solving Platform",
    description:
      "DoubtDesk is a student Q&A community inspired by Stack Overflow. Learners can ask subject-wise questions, post answers, and earn points or badges when their responses help others. I focused on a clean, distraction-free UI with Next.js and ShadCN so the product feels simple and encourages consistent participation.",
    technologies: ["Next.js", "ShadCN UI", "Appwrite", "Vercel"],
    image: "/projects/ss4.png",
    liveLink: "https://doubt-desk.vercel.app/",
    repoLink: "https://github.com/venkata-chowdary/DoubtDesk",
  },
  {
    title: "Task Notifier",
    description:
      "Task Notifier is a MERN-based task manager for planning day-to-day work without friction. Users can create tasks, set reminders, assign priorities, and organize activities by category. I included authentication, alerting, and sharing features so it works for both personal tracking and lightweight collaboration.",
    technologies: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
    image: "/projects/ss1.jpeg",
    liveLink: "https://tasknotifier.netlify.app/",
    repoLink: "https://github.com/venkata-chowdary/Task-Manager/tree/master",
  },
  {
    title: "E-Commerce Platform",
    description:
      "This e-commerce project covers the full shopping flow from browse to checkout. It includes product discovery, cart management, secure orders, and dynamic search, with inventory updates handled in real time. I built the backend with Node.js and MongoDB and used EJS for a lightweight, server-rendered storefront.",
    technologies: ["EJS", "ExpressJS", "NodeJS", "MongoDB", "Bootstrap"],
    image: "/projects/ss2.jpeg",
    liveLink: "https://ecommerce.netlify.app/",
    repoLink: "https://github.com/venkata-chowdary/FLipkart/tree/master",
  },
];
