"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Skill } from "./Skill";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

export function ProjectCard({ project }) {
    console.log(project)

    return (
        (<CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="lg:w-full">
                    <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="lg:h-60 h-36 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <CardItem translateZ="50" className="w-full mt-4 text-xl font-bold text-neutral-600 dark:text-white">
                    {project.title}
                </CardItem>

                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm lg:mt-2 mt-1 dark:text-neutral-400 ">
                    {project.description}
                </CardItem>
                <CardItem className="flex flex-row flex-wrap lg:mt-4 mt-3" translateZ="60">
                    {project.technologies.map((skill, ind) => {
                        return <Skill key={ind} skill={skill} />
                    })}

                </CardItem>
                <CardItem translateZ="50" className="flex justify-start items-center gap-4 w-full lg:mt-4 mt-3">
                    <Link href={project.liveLink} target="_blank" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300">
                        <IconLink
                            size={24}
                            className=""
                            aria-label="Live Site"
                            title="View Live Site"
                        />
                        <span className="text-sm font-medium">Live Demo</span>
                    </Link>
                    <Link href={project.repoLink} target="_blank" className="flex items-center text-gray-600 hover:text-gray-400 transition-colors duration-300">
                        <IconBrandGithub
                            size={24}
                            className=""
                            aria-label="GitHub Repository"
                            title="View on GitHub"
                        />
                        <span className="text-sm font-medium">GitHub</span>
                    </Link>

                </CardItem>
            </CardBody>
        </CardContainer>)
    );
}
