"use client";

import dynamic from "next/dynamic";

const particlesOptions = {
  background: { color: "transparent" },
  fullScreen: { enable: false },
  particles: {
    number: { value: 35 },
    color: { value: ["#38bdf8", "#a855f7", "#22d3ee"] },
    opacity: { value: 0.35 },
    size: { value: { min: 0.5, max: 1.5 } },
    move: {
      enable: true,
      speed: 0.4,
    },
  },
};

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.default),
  { ssr: false }
);

export function HeroParticles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-50">
      <Particles
        id="hero-particles"
        options={particlesOptions}
        className="h-full w-full"
      />
    </div>
  );
}
