import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projectsData } from "@/lib/projectsData";

export const metadata = {
  title: "Projects | Venkata Chowdary",
};

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="lg:max-w-6xl mx-auto px-6 pt-28 pb-12 lg:pt-36 lg:pb-20">
        <SectionTitle sectionName="All Projects" customClassName="lg:text-3xl text-xl" />
        <p className="mt-3 lg:text-lg font-medium text-gray-300">
          A complete list of my featured projects.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 items-stretch">
          {projectsData.map((project, ind) => {
            return <ProjectCard project={project} key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
}
