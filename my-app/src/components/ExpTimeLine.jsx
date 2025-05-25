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
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">Full Stack Intern</h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">TopNotch Software Solutions, <span>Visakhapatnam</span></h3>
                    </div>
                    <p className="text-sm lg:text-base text-gray-300 ">During my internship at Top Notch Software Solutions, I developed a Library Management System using HTML, CSS, Django, and SQL. I focused on creating an intuitive user interface and efficient database interactions for seamless library operations. This experience enhanced my skills in full-stack development and collaborative problem-solving.</p>
                    <div className="flex flex-wrap mt-1">
                        {["HTML", "CSS", "Javascript", "Django", "SQL"].map((tech) => (
                            <Skill key={tech} skill={tech} />
                        ))}
                    </div>
                </div>
            ),
        }, {
            title: "December 2024 - April 2025",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">Software Developer Intern</h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">Revidd, <span>Visakhapatnam</span></h3>
                    </div>
                    <p className="text-sm lg:text-base text-gray-300 ">Worked closely with the CTO to build an AI-powered SaaS product from the ground up. Contributed to both frontend and backend development using React, Node.js, and Express. Integrated Generative AI workflows with Flowise, participated in product discussions, conducted code reviews, and handled deployments using Rancher. The tool was successfully adopted internally for marketing operations.</p>
                    <div className="flex flex-wrap mt-1">
                        {["ReactJS", "NodeJs", "ExpressJS", "Flowise", "MongoDB", "GitLab"].map((tech) => (
                            <Skill key={tech} skill={tech} />
                        ))}
                    </div>
                </div>
            )
        }

    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
