import Hero from "@/components/home/Hero";
import ProfileIntro from "@/components/home/ProfileIntro";
import TechnicalArsenal from "@/components/home/TechnicalArsenal";
import WhatIDo from "@/components/home/WhatIDo";
import AboutFounder from "@/components/home/AboutFounder";
import CareerTimeline from "@/components/home/CareerTimeline";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import ContactCTA from "@/components/layout/ContactCTA";
import Certifications from "@/components/home/Certifications";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <Hero />

      {/* Pure presentational sections – SSR SAFE */}
      <ProfileIntro />
      <TechnicalArsenal />
      <WhatIDo />
      <AboutFounder />
      <CareerTimeline />
      <Certifications />
      <ProjectsShowcase />
      <ContactCTA />
    </main>
  );
}
