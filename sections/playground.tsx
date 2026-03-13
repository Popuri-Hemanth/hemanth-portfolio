"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stages = [
  { id: "IF", label: "Fetch" },
  { id: "ID", label: "Decode" },
  { id: "EX", label: "Execute" },
  { id: "MEM", label: "Memory" },
  { id: "WB", label: "Writeback" },
];

const nocNodes = [
  [0, 0], [1, 0], [2, 0],
  [0, 1], [1, 1], [2, 1],
  [0, 2], [1, 2], [2, 2],
];

export function PlaygroundSection() {
  return (
    <section id="playground" className="scroll-snap-section section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-14 lg:space-y-16"
        >
          <div>
            <div className="section-heading">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
              Engineering Playground
            </div>
            <h2 className="section-title">
              Visualizing how <span className="accent-gradient-text">instructions, signals, and data</span> move.
            </h2>
            <p className="section-subtitle">
              Animated diagrams • RISC-V pipeline • Network-on-Chip • AI matrix engine.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* RISC-V Pipeline — animated flow */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">RISC-V Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs text-slate-300/90">
                    IF → ID → EX → MEM → WB • Hover for highlight.
                  </p>
                  <div className="flex items-center justify-between gap-0">
                    {stages.map((stage, index) => (
                      <div key={stage.id} className="flex flex-1 items-center">
                        <motion.div
                          whileHover={{ scale: 1.08, y: -4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="flex flex-1 flex-col items-center"
                        >
                          <div className="playground-stage flex h-14 w-full max-w-[64px] items-center justify-center rounded-xl border border-cyan-400/50 bg-cyan-500/10 text-sm font-bold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                            {stage.id}
                          </div>
                          <span className="mt-2 text-[10px] text-slate-400">{stage.label}</span>
                        </motion.div>
                        {index < stages.length - 1 && (
                          <div className="flex flex-1 items-center px-0.5">
                            <div className="playground-arrow h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400/70 to-cyan-400/30" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Network-on-Chip — animated topology */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <Card className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Network-on-Chip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs text-slate-300/90">
                    Node topology • Animated routing paths.
                  </p>
                  <div className="relative mx-auto aspect-square w-full max-w-[220px]">
                    <svg viewBox="-0.5 -0.5 3 3" className="h-full w-full">
                      <defs>
                        <linearGradient id="nocGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(168,85,247,0.3)" />
                          <stop offset="100%" stopColor="rgba(56,189,248,0.5)" />
                        </linearGradient>
                      </defs>
                      {nocNodes.map((_, i) => {
                        const row = Math.floor(i / 3);
                        const col = i % 3;
                        const x = col + 0.5;
                        const y = row + 0.5;
                        return (
                          <g key={i}>
                            {col < 2 && (
                              <line
                                x1={x}
                                y1={y}
                                x2={x + 1}
                                y2={y}
                                stroke="url(#nocGrad)"
                                strokeWidth="0.08"
                                className="noc-link"
                              />
                            )}
                            {row < 2 && (
                              <line
                                x1={x}
                                y1={y}
                                x2={x}
                                y2={y + 1}
                                stroke="url(#nocGrad)"
                                strokeWidth="0.08"
                                className="noc-link noc-link-vert"
                              />
                            )}
                            <motion.circle
                              cx={x}
                              cy={y}
                              r="0.22"
                              fill="rgba(168,85,247,0.7)"
                              className="noc-node"
                              whileHover={{ r: 0.32 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Matrix Engine — animated MAC grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <Card className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">AI Matrix Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs text-slate-300/90">
                    MAC grid (4×4) • Multiply-accumulate units.
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="matrix-cell aspect-square rounded-lg border border-amber-400/30 bg-amber-500/20"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: (i % 4) * 0.1 + Math.floor(i / 4) * 0.08 }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] text-slate-400">Systolic array • data reuse</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
