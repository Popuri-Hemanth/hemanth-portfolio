"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-snap-section section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="section-heading justify-center">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
            Contact
          </div>
          <h2 className="section-title">
            Let&apos;s build the next{" "}
            <span className="accent-gradient-text">generation of intelligent systems</span>.
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Open to internships, full-time roles, and research collaborations at the intersection of silicon, systems, and AI.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
              onClick={() => {
                window.location.href =
                  "mailto:popuri.hemanthkumar@gmail.com?subject=Hello%20Hemanth&body=Hi%20Hemanth,%20I%20visited%20your%20portfolio.";
              }}
            >
              <span className="inline-flex items-center gap-2 hover:text-blue-400 transition">
                <Mail className="h-4 w-4" />
                Email
              </span>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
            >
              <a href="https://www.linkedin.com/in/hemanth-popuri" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
            >
              <a href="https://github.com/Popuri-Hemanth" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            popuri.hemanthkumar@gmail.com • +91 9959942133
          </p>
        </motion.div>
      </div>
    </section>
  );
}
