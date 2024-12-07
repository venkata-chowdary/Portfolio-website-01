import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
                </div>
            ),
        },

    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
