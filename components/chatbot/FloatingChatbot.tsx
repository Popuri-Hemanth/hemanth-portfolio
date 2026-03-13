"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const seedMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi, I'm Hemanth's engineering assistant. Ask me about his skills, projects, or research.",
  },
];

function getReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("embedded") || text.includes("firmware")) {
    return "Hemanth has hands-on experience with ESP32, STM32, Arduino, bare‑metal Embedded C, and communication protocols like UART, SPI, and I2C. He's comfortable taking a system from schematics and PCB to firmware and field testing.";
  }
  if (text.includes("vlsi") || text.includes("rtl") || text.includes("risc")) {
    return "On the VLSI side, Hemanth has designed RISC‑V cores, pipelined processors, and NoC routers in Verilog with attention to RTL quality, timing closure, and clean module boundaries.";
  }
  if (text.includes("ai") || text.includes("computer vision") || text.includes("opencv")) {
    return "For AI and computer vision, Hemanth works with OpenCV, YOLO, and dataset curation tools like Roboflow—deploying models into real systems such as driver fatigue detection and card recognition for rummy tables.";
  }
  if (text.includes("project") || text.includes("experience")) {
    return "Notable projects include a RISC‑V 5‑stage pipelined processor, a Network‑on‑Chip router, an AI Tensor Processing Unit, a smart agricultural charging robot, a fatigue detection system, and multiple AI‑enabled rummy platforms.";
  }
  if (text.includes("research") || text.includes("patent") || text.includes("publication")) {
    return "Hemanth is an inventor on the patent 'Autonomous Artificial Intelligence Driven Multi Modal Surveillance System for Precision Agriculture' and has published 'Fatigue Prevention System' in the International Journal of Engineering Research & Technology.";
  }
  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return "You can reach Hemanth at popuri.hemanthkumar@gmail.com or on LinkedIn at linkedin.com/in/hemanth-popuri.";
  }
  return "Hemanth is an Embedded Systems Engineer, VLSI design enthusiast, and AI systems developer who enjoys building full‑stack intelligent hardware/software systems. Ask about specific skills, a project name, or his research for more details.";
}

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(seedMessages);
  const [input, setInput] = useState("");

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const nextId = messages[messages.length - 1]?.id + 1 || 1;
    const userMessage: ChatMessage = {
      id: nextId,
      role: "user",
      content: trimmed,
    };
    const assistantMessage: ChatMessage = {
      id: nextId + 1,
      role: "assistant",
      content: getReply(trimmed),
    };
    setMessages((m) => [...m, userMessage, assistantMessage]);
    setInput("");
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="fixed bottom-24 right-4 z-40 w-80 max-w-[90vw]"
          >
            <div className="glass-panel rounded-3xl border border-slate-700/80 p-3 text-xs text-slate-100">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Engineering Assistant
                  </p>
                  <p className="text-xs text-slate-200">
                    Ask about skills, projects, or research.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-slate-900/80 p-1 text-slate-300 hover:bg-slate-800"
                  aria-label="Close assistant"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <div className="mb-2 max-h-56 space-y-2 overflow-y-auto pr-1">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-2xl px-3 py-1.5 ${
                      m.role === "assistant"
                        ? "bg-slate-900/90 text-slate-100"
                        : "ml-auto bg-sky-500/20 text-sky-100"
                    }`}
                  >
                    {m.content}
                  </div>
                ))}
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="Ask about skills, a project, or research..."
                  className="h-8 flex-1 rounded-full border border-slate-700/70 bg-slate-950/80 px-3 text-[11px] text-slate-100 outline-none placeholder:text-slate-500"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="h-8 border-cyan-400/70 bg-slate-950/80 text-[11px] text-sky-100 hover:bg-cyan-500/10"
                  onClick={handleSend}
                >
                  Send
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        type="button"
        size="lg"
        glow
        className="fixed bottom-6 right-4 z-40 rounded-full bg-sky-500/90 px-4 py-2 text-xs shadow-[0_18px_60px_rgba(56,189,248,0.85)] hover:bg-sky-400"
        onClick={() => setOpen((v) => !v)}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Ask Hemanth&apos;s Assistant
      </Button>
    </>
  );
}

