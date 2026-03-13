"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function ResearchSection() {
  return (
    <section id="research" className="scroll-snap-section section-spacing">
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
              Research
            </div>
            <h2 className="section-title">
              Turning <span className="accent-gradient-text">research and ideas</span> into deployable systems.
            </h2>
            <p className="section-subtitle">
              Bridging academic rigor with practical engineering • AI-driven sensing, perception, and safety-critical systems.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="card-premium h-full border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Patent</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base font-semibold text-slate-100">
                    Autonomous Artificial Intelligence Driven Multi Modal Surveillance System for Precision Agriculture
                  </p>
                  <p className="text-sm text-slate-400">
                    Patent Application No: <span className="font-mono text-cyan-300">202541129931</span>
                  </p>
                  <p className="text-sm text-slate-300/90">
                    Multi-sensor platform combining computer vision, field data, and autonomous robotics to monitor crops at scale with minimal manual intervention.
                  </p>
                  <a
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Patent Status → <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="card-premium h-full border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Publication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base font-semibold text-slate-100">Fatigue Prevention System</p>
                  <p className="text-sm text-slate-400">
                    International Journal of Engineering Research & Technology
                  </p>
                  <p className="text-sm text-slate-300/90">
                    Driver fatigue detection using computer vision and real-time alerts • safety, latency, and robustness to environmental changes.
                  </p>
                  <a
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Patent Status → <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
