"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring, useReducedMotion } from "framer-motion";

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

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const shouldReduceMotion = useReducedMotion();

  // Combine base scroll with velocity for kinetic effect
  const baseX = useTransform(scrollY, (value) => {
    if (shouldReduceMotion) return 0;
    // We add the velocityFactor (using its raw get() value for simplicity in a calculation, or just rely on scroll)
    return -(value * (0.5 + Math.abs(velocityFactor.get()))) % 100;
  });

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="relative w-full flex-1 flex flex-col justify-between p-8">
        {/* Background radial gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 30%, #484D53 0%, #08080A 60%)',
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-[url('/Man_turning_head_motion_blur_202608052201.jpeg')] bg-cover bg-center mix-blend-luminosity opacity-40"
        />

        {/* Top Peripheral UI */}
        <div className="absolute top-8 left-8 z-10 text-sm md:text-base tracking-[0.2em] font-medium font-mono text-text-primary/70">
          CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING
        </div>
        <div className="absolute top-8 right-8 z-10 text-sm md:text-base tracking-[0.2em] font-medium font-mono text-text-primary/70">
          AI / FIGMA /
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
        </div>

        {/* Bottom Left UI */}
        <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2 font-mono text-text-primary/70 text-sm md:text-base tracking-widest">
          <div className="hover:text-white hover:translate-x-2 transition-all cursor-pointer">DESIGN ARCHIVE</div>
          <div className="hover:text-white hover:translate-x-2 transition-all cursor-pointer">BRAND SYSTEMS</div>
          <div className="hover:text-white hover:translate-x-2 transition-all cursor-pointer">NEURO-CINEMATICS</div>
          <div className="hover:text-white hover:translate-x-2 transition-all cursor-pointer">VIBE-CODING</div>
          <div className="hover:text-white hover:translate-x-2 transition-all cursor-pointer">AI AGENTS</div>
        </div>

        {/* Bottom Right Widget */}
        <div className="absolute bottom-8 right-8 z-10 backdrop-blur-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-2xl p-6 flex flex-col gap-3 text-sm font-mono text-text-primary/80">
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

      {/* Kinetic Marquee below Hero */}
      <div className="w-full bg-[#1A1D20] border-y border-white/10 py-4 flex items-center overflow-hidden z-20 sticky top-0">
        <motion.div
          className="flex whitespace-nowrap font-display text-4xl md:text-6xl tracking-tighter uppercase text-[#EAECEE]"
          style={{ x: baseX }}
        >
          <span className="mr-8">FASHION : BEAUTY : FEED : </span>
          <span className="mr-8">FASHION : BEAUTY : FEED : </span>
          <span className="mr-8">FASHION : BEAUTY : FEED : </span>
          <span className="mr-8">FASHION : BEAUTY : FEED : </span>
        </motion.div>
      </div>
    </section>
  );
}
