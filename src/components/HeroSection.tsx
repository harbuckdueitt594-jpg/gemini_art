"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC+3 (MSK)
      const mskTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3 * 3600000));
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
    <section className="relative w-full min-h-screen flex flex-col justify-between p-8 overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, #484D53 0%, #08080A 60%)',
        }}
      />

      {/* Top Peripheral UI */}
      <div className="absolute top-8 left-8 z-10 text-xs font-mono tracking-widest text-text-primary/70">
        CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING
      </div>
      <div className="absolute top-8 right-8 z-10 text-xs font-mono tracking-widest text-text-primary/70">
        AI / FIGMA /
      </div>

      {/* Center Content (if any, keeping it minimalistic as requested) */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
        {/* We can leave this empty or add a central element later if needed */}
      </div>

      {/* Bottom Left UI: Vertical stack tags */}
      <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2 text-xs font-mono tracking-widest text-text-primary/70">
        <div>DESIGN ARCHIVE</div>
        <div>BRAND SYSTEMS</div>
        <div>NEURO-CINEMATICS</div>
        <div>VIBE-CODING</div>
        <div>AI AGENTS</div>
      </div>

      {/* Bottom Right Widget */}
      <div className="absolute bottom-8 right-8 z-10 backdrop-blur-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-2xl p-4 flex flex-col gap-3 text-xs font-mono text-text-primary/80">
        <div className="flex flex-col gap-1">
          <span>ST. PETERSBURG: 59.9343° N | 30.3351° E</span>
          <span>BRYANSK: 53.2435° N | 34.3634° E</span>
        </div>
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-accent"
          />
          <span className="font-bold tracking-widest text-text-primary">{time || "00:00:00 MSK"}</span>
        </div>
      </div>
    </section>
  );
}
