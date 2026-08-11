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
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-between p-8 overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 28%, var(--color-radial-light) 0%, var(--color-main) 40%, var(--color-radial-dark) 100%)",
        }}
      />

      {/* Top Peripheral UI */}
      <div className="relative z-10 flex justify-between items-start text-xs font-mono tracking-widest text-text-primary/70">
        <div>CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING</div>
        <div>AI / FIGMA /</div>
      </div>

      {/* Center Content (if any, keeping it minimalistic as requested) */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
        {/* We can leave this empty or add a central element later if needed */}
      </div>

      {/* Bottom UI */}
      <div className="relative z-10 flex justify-between items-end">
        {/* Bottom Left UI: Vertical stack tags */}
        <div className="flex flex-col gap-2 text-xs font-mono tracking-widest text-text-primary/70">
          <div>DESIGN ARCHIVE</div>
          <div>BRAND SYSTEMS</div>
          <div>NEURO-CINEMATICS</div>
          <div>VIBE-CODING</div>
          <div>AI AGENTS</div>
        </div>

        {/* Bottom Right Widget */}
        <div className="bg-glass rounded-2xl p-4 flex flex-col gap-3 text-xs font-mono text-text-primary/80">
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
      </div>
    </section>
  );
}
