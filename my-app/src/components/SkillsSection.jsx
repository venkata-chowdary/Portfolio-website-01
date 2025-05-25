
import { SectionTitle } from "./SectionTitle";
import { HoverEffect } from "./ui/card-hover-effect";

export function SkillsSecion() {
    return (
        <div className="lg:max-w-6xl mx-auto px-6 py-4">
            <SectionTitle sectionName={'Skills'} customClassName='lg:text-3xl text-xl' />
            <p className="mt-3 lg:text-lg font-medium text-gray-300">From foundational technologies to modern frameworks, I’ve honed a diverse skill set to bring ideas to life.</p>
            <div className="mt-6">
                <HoverEffect items={skills} />
            </div>
        </div>
    )
}



export const skills = [
    // {
    //     title: "HTML",
    //     imageUrl: "/logos/html.png"
    // },
    // {
    //     title: "CSS",
    //     imageUrl: "/logos/css.png"
    // },
    {
        title: "JavaScript",
        imageUrl: "/logos/js.png"
    },
    {
        title: "ReactJS",
        imageUrl: "/logos/react.png"
    },
    {
        title: "NodeJs",
        imageUrl: "/logos/node.png"
    },
    {
        title: "MongoDB",
        imageUrl: "/logos/mongodb.png"
    },
    {
        title: "ExpressJS",
        imageUrl: "/logos/express.png"
    },
    {
        title: "Tailwind",
        imageUrl: "/logos/tailwind.png"
    }, {
        title: "Firebase",
        imageUrl: "/logos/firebase.png"
    },
    {
        title: "NextJS",
        imageUrl: "/logos/nextjs.png"
    }, {
        title: "Appwrite",
        imageUrl: "/logos/appwrite.png"
    }, {
        title: "Prisma",
        imageUrl: "/logos/prisma.png"
    },
    {
        title: "PostgreSQL",
        imageUrl: "/logos/postgresql.png"
    },
    {
        title: "Git",
        imageUrl: "/logos/git.png"
    },
    {
        title: "SQL",
        imageUrl: "/logos/mysql.png"
    }

];

