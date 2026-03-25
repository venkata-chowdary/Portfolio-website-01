"use client"

import Link from "next/link"
import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "./SectionTitle"
import { projectsData } from "@/lib/projectsData"

export function ProjectSection() {
    const topProjects = projectsData.slice(0, 4)

    return (
        <div className="lg:max-w-6xl mx-auto px-6 py-4 mb-6 mt-12 lg:my-24">
            <div className="flex items-center justify-between gap-4">
                <SectionTitle sectionName="Projects" customClassName="lg:text-3xl text-xl" />
                <Link
                    href="/projects"
                    className="text-sm lg:text-base text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                    Show all projects
                </Link>
            </div>
            <p className="mt-3 lg:text-lg font-medium  text-gray-300">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. <br></br> Here are a few of my favorites.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 items-stretch">
                {topProjects.map((project, ind) => {
                    return <ProjectCard project={project} key={ind} />
                })}
            </div>
        </div>
    )
}
