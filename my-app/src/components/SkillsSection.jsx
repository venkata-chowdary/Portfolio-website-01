import { SectionTitle } from "./SectionTitle";
import { HoverEffect } from "./ui/card-hover-effect";

export function SkillsSecion() {
    return (
        <div className="lg:max-w-6xl mx-auto px-6 py-4">
            <SectionTitle sectionName={'Skills'} customClassName='lg:text-3xl text-xl' />
            <p className="mt-3 lg:text-lg font-medium text-gray-300">AI-first full-stack skills across application development, backend systems, and GenAI workflow automation.</p>
            <div className="mt-6">
                <HoverEffect items={skills} />
            </div>
        </div>
    )
}

export const skills = [
    { title: "Python", imageUrl: "/logos/python.png" },
    { title: "TypeScript", imageUrl: "/logos/typescript.svg" },
    { title: "JavaScript", imageUrl: "/logos/js.png" },
    { title: "React.js", imageUrl: "/logos/react.png" },
    { title: "Next.js", imageUrl: "/logos/nextjs.png" },
    { title: "Node.js", imageUrl: "/logos/node.png" },
    { title: "Express.js", imageUrl: "/logos/express.png" },
    { title: "FastAPI", imageUrl: "/logos/fastapi.svg" },
    { title: "Flask", imageUrl: "/logos/flask.png" },
    { title: "LangChain", imageUrl: "/logos/langchain.png" },
    { title: "LangGraph", imageUrl: "/logos/langgraph.svg" },
    { title: "MCP Server", imageUrl: "/logos/mcp.png" },
    { title: "PostgreSQL", imageUrl: "/logos/postgresql.png" },
    { title: "MongoDB", imageUrl: "/logos/mongodb.png" },
    { title: "Redis", imageUrl: "/logos/redis.png" },
    { title: "Prisma", imageUrl: "/logos/prisma.png" },
    { title: "Tailwind CSS", imageUrl: "/logos/tailwind.png" },
    { title: "Git", imageUrl: "/logos/git.png" },
    { title: "GitHub", imageUrl: "/logos/github.svg" },
    { title: "Postman", imageUrl: "/logos/postman.svg" },
    { title: "n8n", imageUrl: "/logos/n8n.svg" }
];
