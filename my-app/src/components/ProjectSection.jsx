"use client"

import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "./SectionTitle"



export function ProjectSection() {

    const projectsData = [
        {
            title: "ConnectNow",
            description: "ConnectNow is a dynamic chat application designed with the MERN stack, Socket.IO, and PeerJS. It features real-time messaging, group chats, video calls, typing indicators, emojis, and read receipts. With secure OTP-based authentication, email verification, profile and group management.",
            technologies: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Socket.IO", "PeerJS", "Cloudinary", "JWT"],
            image: "/projects/ss.png",
            liveLink: "https://connectnow.netlify.app/",
            repoLink: "https://github.com/venkata-chowdary/Messenger",
        },
        {
            title: "Task Notifier",
            description: "Task Notifier is a powerful task management tool built with the MERN stack. It allows users to schedule tasks, set reminders, and categorize activities. Features include user authentication, notification alerts, priority tagging, and collaborative task sharing. With a sleek interface and efficient functionality, it streamlines task organization.",
            technologies: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
            image: "/projects/ss1.jpeg",
            liveLink: "https://tasknotifier.netlify.app/",
            repoLink: "https://github.com/venkata-chowdary/Task-Manager/tree/master",
        },
        {
            title: "E-Commerce Platform",
            description: "This e-commerce platform is developed with Node.js, MongoDB, and EJS templates. It supports product browsing, cart management, and secure order placement. Features include user authentication, real-time inventory updates, payment gateway integration, and dynamic search functionality. Designed for efficiency, it ensures seamless shopping experiences.",
            technologies: ["EJS", "ExpressJS", "NodeJS", "MongoDB", "Bootstrap"],
            image: "/projects/ss2.jpeg",
            liveLink: "https://ecommerce.netlify.app/",
            repoLink: "https://github.com/venkata-chowdary/FLipkart/tree/master",
        },
    ];


    return (
        <div className="lg:max-w-6xl mx-auto px-6 py-4 mb-6 mt-12 lg:my-24">
            <SectionTitle sectionName="Projects" customClassName="lg:text-3xl text-xl" />
            <p className="mt-3 lg:text-lg font-medium  text-gray-300">I've worked on a variety of projects, from simple websites to complex web applications. <br></br> Here are a few of my favorites.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2">
                {projectsData.map((project, ind) => {
                    return <ProjectCard project={project} key={ind} />
                })}
            </div>
        </div>
    )
}