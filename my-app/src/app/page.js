import { ContactSection } from "@/components/ContactSection";
import { ActivitySection } from "./components/ActivitySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSecion } from "@/components/SkillsSection";


export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSecion />
      <ActivitySection />
      <ContactSection />
    </div>
  );
}
