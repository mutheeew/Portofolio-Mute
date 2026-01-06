import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { SummarySection } from "@/components/sections/summary-section";
import { ContactSection } from "@/components/sections/contact-section";
import ProfileSection from "@/components/sections/profile-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ProfileSection />
      <SkillsShowcase />
      <ProjectsSection />
      <SummarySection />
      <ContactSection />
    </main>
  );
}
