"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
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
      outModes: { default: "out" },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: { onHover: { enable: false }, onClick: { enable: false } },
  },
};

export function TechBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      {/* Subtle tech grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {init && (
        <div className="absolute inset-0 opacity-60">
          <Particles
            id="tech-particles"
            particlesLoaded={particlesLoaded}
            options={particlesOptions}
            className="h-full w-full"
          />
        </div>
      )}
    </div>
  );
}
