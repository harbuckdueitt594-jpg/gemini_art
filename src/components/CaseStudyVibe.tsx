"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }} className="w-full h-full relative">
        {children}
      </div>
    </motion.div>
  );
}

export default function CaseStudyVibe() {
  return (
    <section id="case-vibe" className="relative w-full bg-primary-dark text-text-dark py-32 px-6 md:px-12 perspective-[2000px]">
      <div className="absolute top-0 left-0 w-full h-32 divider-light-to-dark opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <header className="border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-tighter mb-4 text-accent-neon">
            VIBE-CODING & FAST WEB
          </h2>
          <p className="text-xl md:text-2xl text-text-muted-dark">EIDOS-STUDIO.RU — Запуск сайта под ключ за 7 дней</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Key Highlights Badge */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="glass-panel-dark p-6 rounded-2xl border-accent-neon/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-neon/10 blur-3xl rounded-full" />
              <div className="flex flex-col gap-4 relative z-10">
                <span className="text-5xl font-syne font-bold text-accent-neon">7</span>
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted-dark border-b border-white/10 pb-4">Days Delivery</span>

                <ul className="text-sm font-inter flex flex-col gap-3">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Next.js 14 App Router</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Framer Motion Physics</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> 100/100 Lighthouse Score</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Mockups */}
          <div className="lg:w-2/3 w-full flex justify-center items-center h-[500px]">
            <TiltCard className="w-full max-w-2xl aspect-[16/10] bg-[#111111] rounded-lg border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Desktop Mockup Content */}
                <div className="absolute top-0 w-full h-8 bg-[#222] border-b border-white/10 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="absolute top-8 bottom-0 w-full bg-[#0a0a0a] flex items-center justify-center p-8">
                   <svg className="w-full h-full text-white/5" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                     <rect width="100" height="100" />
                   </svg>
                   <div className="absolute font-syne text-3xl font-bold opacity-20 tracking-tighter">EIDOS STUDIO</div>
                </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
