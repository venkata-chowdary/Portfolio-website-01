import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Skill } from "./Skill";

export function ExpTimeLine() {
    const data = [
        {
            title: "July 2023 - August 2023",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                            Full Stack Intern
                        </h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">
                            TopNotch Software Solutions,{" "}
                            <span>Visakhapatnam</span>
                        </h3>
                    </div>
                    <ul className="list-disc leading-loose ml-5 text-sm lg:text-base text-gray-300 space-y-2">
                        <li>
                            Developed a Library Management System using HTML,
                            CSS, Django, and SQL.
                        </li>
                        <li>
                            Focused on creating an intuitive user interface and
                            efficient database interactions for seamless library
                            operations.
                        </li>
                        <li>
                            Enhanced skills in full-stack development and
                            collaborative problem-solving.
                        </li>
                    </ul>
                    <div className="flex flex-wrap mt-1">
                        {["HTML", "CSS", "Javascript", "Django", "SQL"].map(
                            (tech) => (
                                <Skill key={tech} skill={tech} />
                            )
                        )}
                    </div>
                </div>
            ),
        },
        {
            title: "Dec 2024 - Dec 2025",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                            Software Engineer
                        </h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">
                            Inagent, <span>Visakhapatnam</span>
                        </h3>
                    </div>
                    <ul className="list-disc leading-loose ml-5 text-sm lg:text-base text-gray-300 space-y-2">
                        <li>
                            Core member of the development team, contributing to
                            technical decisions with the CTO and delivering
                            full-stack features.
                        </li>
                        <li>
                            Helped take the product from inception to its first
                            5 sales, shaping early adoption and product
                            strategy.
                        </li>
                        <li>
                            Developed end-to-end full-stack SaaS features using
                            React.js, Next.js, Node.js, Express.js, and Python
                            for scalable, reliable solutions.
                        </li>
                        <li>
                            Built and integrated agentic AI and GenAI tools
                            using LangChain, LangGraph, and MCP servers as part
                            of the full-stack AI platform.
                        </li>
                        <li>
                            Managed CI/CD pipelines and production deployments
                            using GitLab CI/CD, Docker, and Rancher.
                        </li>
                        <li>
                            Actively involved in product decisions, engineering
                            architecture, and delivering rapid iterations in a
                            fast-paced startup environment.
                        </li>
                    </ul>
                    <div className="flex flex-wrap mt-1">
                        {[
                            "React.js",
                            "Next.js",
                            "Node.js",
                            "Python",
                            "LangChain",
                            "LangGraph",
                            "Docker",
                            "GitLab CI/CD",
                            "MCP Servers",
                        ].map((tech) => (
                            <Skill key={tech} skill={tech} />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Nov 2024 – Dec 2024",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                            Software Developer Intern
                        </h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">
                            Inagent, <span>Visakhapatnam</span>
                        </h3>
                    </div>
                    <ul className="list-disc leading-loose ml-5 text-sm lg:text-base text-gray-300 space-y-2">
                        <li>
                            Worked closely with the CTO to build the
                            foundational architecture of a modern SaaS platform
                            from scratch.
                        </li>
                        <li>
                            Developed full-stack features using React.js,
                            Node.js, and MongoDB, ensuring seamless integration
                            and robust performance.
                        </li>
                        <li>
                            Integrated and consumed RESTful APIs to enable
                            smooth data flow across frontend and backend
                            services.
                        </li>
                        <li>
                            Collaborated with the UI/UX team to build intuitive,
                            user-friendly interfaces and deliver polished
                            product experience.
                        </li>
                    </ul>
                    <div className="flex flex-wrap mt-1">
                        {["ReactJS", "NodeJs", "MongoDB", "RESTful APIs"].map(
                            (tech) => (
                                <Skill key={tech} skill={tech} />
                            )
                        )}
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
