"use client";

import dynamic from "next/dynamic";

const particlesOptions = {
  background: { color: "transparent" },
  fullScreen: { enable: false },
  fpsLimit: 45,
  particles: {
    number: { value: 50 },
    color: { value: ["#38bdf8", "#22d3ee", "#a855f7"] },
    opacity: { value: { min: 0.25, max: 0.5 } },
    size: { value: { min: 0.4, max: 1.2 } },
    links: {
      enable: true,
      color: "rgba(56, 189, 248, 0.2)",
      distance: 120,
      opacity: 0.25,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 0.25,
      direction: "none",
      random: true,
      outModes: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false } },
  },
};

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.default),
  { ssr: false }
);

export function TechBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Faint animated circuit-style grid */}
      <div
        className="tech-grid absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glowing particles + network lines */}
      <div className="absolute inset-0 opacity-60">
        <Particles
          id="tech-particles"
          options={particlesOptions}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
