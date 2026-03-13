"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Embedded Systems",
    items: ["ESP32", "STM32", "Arduino", "UART", "SPI", "I2C", "Embedded C"],
  },
  {
    title: "VLSI / Digital Design",
    items: ["Verilog", "RTL Design", "FSM", "RISC-V", "Network on Chip", "Timing Analysis"],
  },
  {
    title: "Software Engineering",
    items: ["React.js", "Node.js", "ASP.NET Core", "C#", "JavaScript", "Python"],
  },
  {
    title: "AI / Computer Vision",
    items: ["OpenCV", "YOLO", "Dataset Annotation", "Roboflow"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "SQL Server"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-snap-section section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <div className="section-heading">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
              Skills
            </div>
            <h2 className="section-title">
              A full-stack view of <span className="accent-gradient-text">hardware, firmware, and AI</span>.
            </h2>
            <p className="section-subtitle">
              From register-transfer level design to embedded firmware, data pipelines, and AI models • owning the
              entire stack of an intelligent system.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Card className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-slate-50">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-colors hover:border-blue-400 hover:bg-blue-500/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
