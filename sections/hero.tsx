"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/HeroBackground";
import { ResumeModal } from "@/components/ResumeModal";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
  },
};
const itemDelayed = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  return (
    <>
    <ResumeModal open={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    <section
      id="hero"
      className="scroll-snap-section relative flex min-h-screen items-center overflow-hidden pb-28 pt-24"
    >
      {/* Subtle tech grid overlay behind hero */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <HeroBackground />

      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={item}
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              Popuri{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hemanth Kumar
              </span>
            </motion.h1>
            <motion.p
              variants={itemDelayed}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/90"
            >
              Embedded Systems Engineer • VLSI Design Enthusiast • AI Systems Developer
              crafting intelligent hardware-software systems that push silicon to its limits.
            </motion.p>
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300/80">
              <span className="pill">Embedded Systems</span>
              <span className="pill">RISC-V & Digital Design</span>
              <span className="pill">AI for Edge Devices</span>
              <span className="pill">Computer Vision</span>
            </motion.div>
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" glow className="group">
                <a href="#projects">
                  <Play className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  View Projects
                </a>
              </Button>
              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </button>
              <div className="flex gap-2">
                <Button asChild variant="ghost" size="icon" className="text-slate-300 hover:text-cyan-300">
                  <a href="https://github.com/Popuri-Hemanth" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="text-slate-300 hover:text-sky-300">
                  <a href="https://www.linkedin.com/in/hemanth-popuri" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <button
                  type="button"
                  onClick={() => { window.location.href = "mailto:popuri.hemanthkumar@gmail.com"; }}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-slate-300 transition hover:text-blue-400"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="card-premium rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
              <div className="mb-6 flex items-center justify-between text-sm text-slate-300/90">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  Realtime System Telemetry
                </span>
                <span className="text-xs text-slate-400">AI + Embedded + VLSI</span>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Latency</p>
                  <p className="mt-1 text-xl font-semibold text-sky-300">3.2 ns</p>
                  <p className="mt-1 text-xs text-emerald-400/90">RISC-V 5-stage pipeline</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Throughput</p>
                  <p className="mt-1 text-xl font-semibold text-purple-300">1.8x</p>
                  <p className="mt-1 text-xs text-purple-300/90">Custom AI tensor cores</p>
                </div>
                <div className="col-span-2 rounded-xl border border-white/5 bg-white/5 p-4 sm:col-span-1">
                  <p className="text-xs text-slate-400">Deployment</p>
                  <p className="mt-1 text-xl font-semibold text-cyan-300">Edge + Cloud</p>
                  <p className="mt-1 text-xs text-cyan-300/90">Robotics • Vision • IoT</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-white/5 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-cyan-500/10 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-sky-300/90">Current Focus</p>
                <p className="mt-2 text-sm text-slate-200">
                  Designing intelligent compute fabrics where{" "}
                  <span className="accent-gradient-text">embedded control, digital logic, and AI</span>{" "}
                  collaborate in real time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
