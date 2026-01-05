
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
    { title: "React.js", imageUrl: "/logos/react.png" },
    { title: "LangChain", imageUrl: "/logos/langchain.png" },
    { title: "CSS", imageUrl: "/logos/css.png" },
    { title: "Prisma", imageUrl: "/logos/prisma.png" },
    { title: "Node.js", imageUrl: "/logos/node.png" },
    { title: "MongoDB", imageUrl: "/logos/mongodb.png" },
    { title: "PostgreSQL", imageUrl: "/logos/postgresql.png" },
    { title: "JavaScript", imageUrl: "/logos/js.png" },
    { title: "Tailwind CSS", imageUrl: "/logos/tailwind.png" },
    { title: "Redis", imageUrl: "/logos/redis.png" },
    { title: "Flask", imageUrl: "/logos/flask.png" },
    { title: "Git", imageUrl: "/logos/git.png" },
    { title: "HTML5", imageUrl: "/logos/html.png" },
    { title: "Redux", imageUrl: "/logos/redux.png" },
    { title: "SQL", imageUrl: "/logos/mysql.png" },
    { title: "Next.js", imageUrl: "/logos/nextjs.png" },
    { title: "Express.js", imageUrl: "/logos/express.png" },
    { title: "Firebase", imageUrl: "/logos/firebase.png" },
    { title: "MCP Server", imageUrl: "/logos/mcp.png" },
    { title: "Appwrite", imageUrl: "/logos/appwrite.png" },
    { title: "Python", imageUrl: "/logos/python.png" }
];

