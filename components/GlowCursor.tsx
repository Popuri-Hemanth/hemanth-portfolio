"use client";

import { useEffect, useState } from "react";

const SIZE = 320;

export function GlowCursor() {
  const [pos, setPos] = useState({ x: -SIZE, y: -SIZE });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX - SIZE / 2, y: e.clientY - SIZE / 2 });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 hidden md:block"
      aria-hidden
      style={{
        width: SIZE,
        height: SIZE,
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
      }}
    />
  );
}
