"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techBadges = [
  "React.js",
  "Node.js",
  "ASP.NET Core",
  "MongoDB",
  "PostgreSQL",
  "OpenCV",
  "YOLO",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-snap-section section-spacing relative"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="section-stack max-w-[90rem] mx-auto px-8 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16"
        >
          <div className="section-heading">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
            About
          </div>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20">
            <div className="space-y-6">
              <h2 className="section-title max-w-3xl">
                Engineering intelligent systems where{" "}
                <span className="accent-gradient-text">hardware</span> and{" "}
                <span className="accent-gradient-text">AI</span> converge.
              </h2>
              <div className="space-y-5 text-slate-300/90 max-w-3xl text-base leading-relaxed">
                <p>
                  I design and build systems across the full stack: from silicon and firmware to
                  cloud APIs and AI pipelines. My work spans <strong className="text-slate-200">embedded systems</strong> (real-time
                  control, sensor fusion, bare-metal C on ESP32/STM32), <strong className="text-slate-200">VLSI and digital design</strong> (RISC-V
                  cores, NoC, RTL in Verilog), and <strong className="text-slate-200">AI systems</strong> (computer vision with OpenCV
                  and YOLO, edge deployment, dataset pipelines).
                </p>
                <p>
                  On the software side, I ship production-ready applications with <strong className="text-slate-200">React</strong> and
                  <strong className="text-slate-200"> Node.js</strong>, and enterprise backends with <strong className="text-slate-200">ASP.NET Core</strong>. I use
                  <strong className="text-slate-200"> MongoDB</strong>, <strong className="text-slate-200">PostgreSQL</strong>, and <strong className="text-slate-200">Redis</strong> for data and
                  caching. I focus on clean architecture, performance, and systems that run reliably
                  from prototype to deployment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {techBadges.map((name) => (
                  <span key={name} className="chip">
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Badge tone="secondary">Education</Badge>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  B.Tech • Electronics &amp; Communication Engineering
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-100">
                  Sreenidhi Institute of Science and Technology
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  CGPA: <span className="font-semibold text-cyan-300">8.85 / 10</span>
                </p>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  Signal processing • digital design • embedded systems • applied machine learning •
                  production-grade systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
