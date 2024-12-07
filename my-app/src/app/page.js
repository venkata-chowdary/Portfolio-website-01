import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSecion } from "@/components/SkillsSection";


export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <SkillsSecion/>
      <ExperienceSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  );
}
