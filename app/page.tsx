"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { ProjectsSection } from "@/sections/projects";
import { PlaygroundSection } from "@/sections/playground";
import { ResearchSection } from "@/sections/research";
import { GithubSection } from "@/sections/github-activity";
import { ContactSection } from "@/sections/contact";
import { FloatingChatbot } from "@/components/chatbot/FloatingChatbot";

export default function Home() {
  return (
    <main className="scroll-snap-parent relative min-h-screen bg-transparent pb-20 text-slate-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PlaygroundSection />
      <ResearchSection />
      <GithubSection />
      <ContactSection />
      <FloatingChatbot />
    </main>
  );
}
