"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
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
      outModes: { default: "out" },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: { onHover: { enable: false }, onClick: { enable: false } },
  },
};

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div
      className="overflow-hidden opacity-70"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -20,
      }}
    >
      {init && (
        <Particles
          id="particles-bg"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="h-full w-full"
        />
      )}
    </div>
  );
}
