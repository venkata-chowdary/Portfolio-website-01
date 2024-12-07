
import { SectionTitle } from "./SectionTitle";
import { HoverEffect } from "./ui/card-hover-effect";

export function SkillsSecion() {
    return (
        <div className="lg:max-w-6xl mx-auto px-6 py-4 my-4">
            <SectionTitle sectionName={'Skills'} customClassName='lg:text-3xl text-xl' />
            <p className="mt-3 lg:text-lg font-medium text-gray-300">From foundational technologies to modern frameworks, I’ve honed a diverse skill set to bring ideas to life.</p>

            <div className="mt-6">
                <HoverEffect items={skills} />
            </div>
        </div>
    )
}



export const skills = [
    {
        title: "HTML",
        imageUrl: "/logos/html.png"
    },
    {
        title: "CSS",
        imageUrl: "/logos/css.png"
    },
    {
        title: "JavaScript",
        imageUrl: "/logos/js.png"
    },
    {
        title: "React",
        imageUrl: "/logos/react.png"
    },
    {
        title: "Node.js",
        imageUrl: "/logos/node.png"
    },
    {
        title: "MongoDB",
        imageUrl: "/logos/mongodb.png"
    },
    {
        title: "Express",
        imageUrl: "/logos/express.png"
    },
    {
        title: "Tailwind",
        imageUrl: "/logos/tailwind.png"
    }, {
        title: "Firebase",
        imageUrl: "/logos/firebase.png"
    },
];

