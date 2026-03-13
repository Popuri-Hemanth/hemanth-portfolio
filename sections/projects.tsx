"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, type Project } from "@/lib/projects";

const featuredSlugs = ["riscv-pipeline", "ai-rummy-scoring", "agri-charging-robot"];
const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug));
const otherProjects = projects.filter((p) => !featuredSlugs.includes(p.slug));

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const cardBase =
  "rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 ";
const cardHover =
  "hover:scale-[1.03] hover:-translate-y-1 hover:border-blue-400/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]";
const cardClass = cardBase + cardHover;

function KeyConcepts({ concepts }: { concepts?: string }) {
  if (!concepts) return null;
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Key Concepts</p>
      <p className="mt-1 text-sm text-slate-200">{concepts}</p>
    </div>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full ${cardClass} border-blue-400/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]`}>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-slate-50">{project.title}</CardTitle>
          <CardDescription className="mt-2 text-sm text-slate-300/90">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <KeyConcepts concepts={project.keyConcepts} />
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
            >
              View Code →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function OtherCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className={`h-full ${cardClass} p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-slate-50">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-xs text-slate-400">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
                {tech}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
            >
              View Code →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-snap-section section-spacing">
      <div className="section-shell">
        <motion.div {...fadeIn} className="space-y-16">
          <div>
            <div className="section-heading">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
              Projects
            </div>
            <h2 className="section-title">
              Real systems that <span className="accent-gradient-text">ship bits and move atoms</span>.
            </h2>
            <p className="section-subtitle">
              A selection of hardware, firmware, and AI projects • RISC-V microarchitectures •
              intelligent robots • perception systems.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Featured Projects
            </h3>
            <div className="grid gap-12 lg:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <FeaturedCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Other Projects
            </h3>
            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, i) => (
                <OtherCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
