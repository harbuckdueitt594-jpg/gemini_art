"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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
    <section className="relative min-h-screen w-full bg-primary-dark text-text-dark overflow-hidden flex flex-col justify-between py-8 px-6 md:px-12">
      {/* Background with subtle gradient vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-dark via-primary-dark to-black opacity-80" />

      {/* Header Layout */}
      <header className="relative z-10 flex justify-between items-start text-xs md:text-sm font-medium tracking-wider text-text-muted-dark uppercase">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          AI / FIGMA /
        </motion.div>
      </header>

      {/* Main Content Area (Optional Hero text can go here) */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-syne font-bold tracking-tighter text-center"
          >
            CHERNIKOV
          </motion.h1>
      </div>

      {/* Footer Layout */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        {/* Bottom Left Tags */}
        <motion.div
          className="flex flex-col gap-2 text-xs md:text-sm font-medium tracking-widest text-text-muted-dark uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {["DESIGN ARCHIVE", "BRAND SYSTEMS", "NEURO-CINEMATICS", "VIBE-CODING", "AI AGENTS"].map((tag, idx) => (
            <span key={idx} className="hover:text-accent-neon transition-colors duration-300 cursor-default">{tag}</span>
          ))}
        </motion.div>

        {/* Bottom Right Glassmorphic Widget */}
        <motion.div
          className="glass-panel-dark p-6 rounded-2xl flex flex-col gap-4 text-xs md:text-sm text-text-muted-dark font-mono shadow-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="flex flex-col gap-1">
            <span>ST. PETERSBURG: 59.9343° N | 30.3351° E</span>
            <span>BRYANSK: 53.2435° N | 34.3634° E</span>
          </div>
          <div className="text-accent-neon font-bold">
            {time || "00:00:00 MSK"}
          </div>
        </motion.div>
      </footer>
    </section>
  );
}
