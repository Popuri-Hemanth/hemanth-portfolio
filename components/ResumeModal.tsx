"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const options = [
  { href: "/resume/software.pdf", label: "Software Engineering Resume" },
  { href: "/resume/embedded.pdf", label: "Embedded Systems Resume" },
  { href: "/resume/vlsi.pdf", label: "VLSI Design Resume" },
];

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="resume-modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="pr-8 text-lg font-semibold text-slate-100">
                Select Resume Type
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Choose a version to download.
              </p>
              <div className="mt-6 space-y-3">
                {options.map((opt) => (
                  <a
                    key={opt.href}
                    href={opt.href}
                    download
                    className="block rounded-xl border border-white/10 bg-white/10 p-4 text-left text-slate-100 transition hover:border-blue-400 hover:bg-white/15"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
