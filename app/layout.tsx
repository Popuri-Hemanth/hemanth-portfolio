import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GlowCursor } from "@/components/GlowCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Popuri Hemanth Kumar — Embedded & AI Systems Engineer",
  description:
    "Portfolio of Popuri Hemanth Kumar — Embedded Systems Engineer, VLSI Design Enthusiast, and AI Systems Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ParticlesBackground />
        <GlowCursor />
        {children}
      </body>
    </html>
  );
}
