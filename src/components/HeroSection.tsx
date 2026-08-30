"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC+3 (MSK)
      const mskTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 3 * 3600000);
      const hours = mskTime.getHours().toString().padStart(2, "0");
      const minutes = mskTime.getMinutes().toString().padStart(2, "0");
      const seconds = mskTime.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds} MSK`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#08080A]">
      {/* Blur Reveal Canvas Container */}
      <BlurReveal
        image={{
          src: "/Man_turning_head_motion_blur_202608052201.jpeg",
          alt: "Creative Direction & AI Engineering Backdrop",
        }}
        size={180}
        rounding={20}
        blur={12}
        ring={true}
        ringOptions={{
          icon: true,
          color: "rgba(255,255,255,0.85)",
        }}
        intro={true}
        introDuration={2}
        className="absolute inset-0 w-full h-full"
      >
        {/* Overlay Darkening Gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

        {/* Top Peripheral UI */}
        <div className="absolute top-8 left-8 z-10 text-xs md:text-sm tracking-[0.2em] font-medium font-mono text-white/80">
          CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING
        </div>
        <div className="absolute top-8 right-8 z-10 text-xs md:text-sm tracking-[0.2em] font-medium font-mono text-white/80">
          AI / FIGMA / 2026
        </div>

        {/* Center Content: AI Creator Manifest & Acceleration Badge */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-4 max-w-3xl"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-[#00FF9D] uppercase">
              TIME-TO-MARKET 3–5X ACCELERATION
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-white uppercase">
              AI CREATOR MANIFESTO
            </h1>
            <p className="font-sans text-base md:text-xl text-white/80 max-w-2xl font-light">
              HIGH-END ART DIRECTION × AI AGENTS & HIGH-SPEED WEB
            </p>
          </motion.div>
        </div>

        {/* Bottom Left UI: Vertical stack tags */}
        <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2 font-mono text-white/70 text-xs md:text-sm tracking-widest pointer-events-auto">
          <div className="hover:text-[#00FF9D] hover:translate-x-2 transition-all cursor-pointer">DESIGN ARCHIVE</div>
          <div className="hover:text-[#00FF9D] hover:translate-x-2 transition-all cursor-pointer">BRAND SYSTEMS</div>
          <div className="hover:text-[#00FF9D] hover:translate-x-2 transition-all cursor-pointer">NEURO-CINEMATICS</div>
          <div className="hover:text-[#00FF9D] hover:translate-x-2 transition-all cursor-pointer">VIBE-CODING</div>
          <div className="hover:text-[#00FF9D] hover:translate-x-2 transition-all cursor-pointer">AI AGENTS</div>
        </div>

        {/* Bottom Right Widget */}
        <div className="absolute bottom-8 right-8 z-10 backdrop-blur-2xl bg-black/40 border border-white/10 shadow-2xl rounded-2xl p-6 flex flex-col gap-3 text-xs font-mono text-white/80 pointer-events-auto">
          <div className="flex flex-col gap-1">
            <span>ST. PETERSBURG: 59.9343° N | 30.3351° E</span>
            <span>BRYANSK: 53.2435° N | 34.3634° E</span>
          </div>
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-[#00FF9D]"
            />
            <span className="font-bold tracking-widest text-white">{time || "00:00:00 MSK"}</span>
          </div>
        </div>
      </BlurReveal>
    </section>
  );
}
