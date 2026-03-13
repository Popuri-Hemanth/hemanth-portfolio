"use client";

import dynamic from "next/dynamic";

/* Full-page particle network; rendered only on client */

const particlesOptions = {
  background: { color: "transparent" },
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 45 },
    color: { value: ["#38bdf8", "#a855f7", "#22d3ee"] },
    opacity: { value: { min: 0.2, max: 0.5 } },
    size: { value: { min: 0.5, max: 1.5 } },
    links: {
      enable: true,
      color: "rgba(56, 189, 248, 0.25)",
      distance: 140,
      opacity: 0.4,
    },
    move: {
      enable: true,
      speed: 0.4,
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

export function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden opacity-70">
      <Particles id="particles-bg" options={particlesOptions} className="h-full w-full" />
    </div>
  );
}
