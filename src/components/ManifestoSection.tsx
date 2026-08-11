"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const text = "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, быстрый веб и кастомных ИИ-агентов, сокращая Time-to-Market в 3–5 раз без потери качества.";

  return (
    <section className="relative w-full py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
      <div className="relative w-full max-w-7xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">


        {/* Floating 3D Image Cards - increased width/height by ~40% and made strictly vertical (aspect-[3/4]) */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="absolute -top-10 left-4 md:left-20 w-80 aspect-[3/4] bg-[#D8DBDE] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 z-10"
        >
          <div className="text-xs font-mono tracking-widest text-[#8C9298]">FASHION / 01</div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="98" stroke="#1A1D20" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
              <circle cx="100" cy="100" r="80" stroke="#1A1D20" strokeWidth="0.5" opacity="0.1"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 w-72 aspect-[3/4] bg-[#D8DBDE] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 z-10"
        >
          <div className="text-xs font-mono tracking-widest text-[#8C9298]">BEAUTY / 02</div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="160" height="160" stroke="#1A1D20" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-10 left-10 md:left-40 w-80 aspect-[3/4] bg-[#D8DBDE] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 z-10"
        >
          <div className="text-xs font-mono tracking-widest text-[#8C9298]">TECH / 03</div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="80" x2="110" y2="80" stroke="#1A1D20" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
             </svg>
          </div>
        </motion.div>


        {/* Center: Typography */}
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl z-20 relative" ref={containerRef}>
          <h2 className="font-display text-5xl tracking-tighter font-medium leading-[1.1] text-[#1A1D20]">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.02,
                  delay: index * 0.015,
                  ease: "linear"
                }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>

      </div>
    </section>
  );
}
