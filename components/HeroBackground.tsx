"use client";

import { Cpu, Bot, Cloud } from "lucide-react";

/**
 * Hero background: radial glow behind text, floating tech icons (chip, ai, cloud).
 */
export function HeroBackground() {
  const floatIcons = [
    { Icon: Cpu, top: "18%", left: "12%", delay: "0s" },
    { Icon: Bot, top: "70%", left: "8%", delay: "0.8s" },
    { Icon: Cloud, top: "25%", right: "15%", left: "auto", delay: "0.4s" },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Glow behind hero text */}
      <div
        className="hero-glow absolute inset-0 opacity-80"
        style={{
          background: "radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(56, 189, 248, 0.22), transparent 50%), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(168, 85, 247, 0.18), transparent 50%), #020617",
        }}
      />
      <div
        className="absolute -left-24 top-20 h-48 w-48 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-24 top-40 h-56 w-56 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.45) 0%, transparent 70%)" }}
      />
      {/* Floating tech icons — very low opacity */}
      {floatIcons.map(({ Icon, delay, ...pos }) => (
        <div
          key={`${pos.top}-${pos.left ?? pos.right}`}
          className="absolute text-white/[0.06] float-vertical"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            animationDelay: delay,
          }}
        >
          <Icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.2} />
        </div>
      ))}
    </div>
  );
}
