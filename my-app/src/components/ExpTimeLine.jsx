import { Timeline } from "@/components/ui/timeline";
import { Skill } from "./Skill";

export function ExpTimeLine() {
    const data = [
        {
            title: "Apr 2025 - Dec 2025",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                            Software Engineer (Founding Engineer, Early Team Member)
                        </h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">
                            Inagent, <span>Bengaluru, India</span>
                        </h3>
                    </div>
                    <ul className="list-disc leading-loose ml-5 text-sm lg:text-base text-gray-300 space-y-2">
                        <li>
                            Led end-to-end development of an AI-powered B2B sales automation platform, owning backend systems, AI integrations, and production deployments.
                        </li>
                        <li>
                            Architected multi-agent workflows using LangChain, LangGraph, and MCP patterns for lead qualification, personalized outreach generation, and follow-up automation.
                        </li>
                        <li>
                            Built FastAPI AI services with Gemini 2.5 Pro (Vertex AI), LinkedIn enrichment pipelines, and background workers for scheduling, CRM sync, and webhook processing.
                        </li>
                        <li>
                            Improved response efficiency with Redis caching, integrated Gmail/HubSpot/Calendly/CRMs, and deployed containerized services using Docker and Kubernetes (Rancher).
                        </li>
                        <li>
                            Used LangSmith to trace and refine agent workflows and collaborated with sales, design, QA, and interns to ship customer-driven features.
                        </li>
                    </ul>
                    <div className="flex flex-wrap mt-1">
                        {[
                            "Python",
                            "FastAPI",
                            "LangChain",
                            "LangGraph",
                            "MCP",
                            "Gemini 2.5 Pro",
                            "Redis",
                            "Docker",
                            "Kubernetes",
                            "HubSpot",
                            "Gmail API",
                            "LangSmith",
                        ].map((tech) => (
                            <Skill key={tech} skill={tech} />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Nov 2024 - Apr 2025",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                            Software Developer Intern
                        </h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">
                            Inagent, <span>Visakhapatnam, India</span>
                        </h3>
                    </div>
                    <ul className="list-disc leading-loose ml-5 text-sm lg:text-base text-gray-300 space-y-2">
                        <li>
                            Contributed to foundational SaaS architecture using React.js, Node.js, Express.js, and MongoDB, delivering core product features.
                        </li>
                        <li>
                            Integrated REST APIs to establish reliable frontend-backend communication and maintain modular system design.
                        </li>
                        <li>
                            Experimented with early LLM integrations and agent workflows using Flowise while building platform features.
                        </li>
                        <li>
                            Prototyped automation flows and prompt-based classification for lead analysis and email drafting in collaboration with the CTO.
                        </li>
                    </ul>
                    <div className="flex flex-wrap mt-1">
                        {[
                            "React.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "REST APIs",
                            "Flowise",
                            "Prompt Engineering",
                        ].map((tech) => (
                            <Skill key={tech} skill={tech} />
                        ))}
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
