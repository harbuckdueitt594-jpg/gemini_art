"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const text = "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, быстрый веб и кастомных ИИ-агентов, сокращая Time-to-Market в 3–5 раз без потери качества.";

  return (
    <section className="relative w-full py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: 3D Image Card */}
        <div className="lg:col-span-5 relative perspective-1000">
          <motion.div
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full aspect-[3/4] bg-[#D8DBDE] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between p-6"
          >
            <div className="text-xs font-mono tracking-widest text-[#8C9298]">FASHION / 01</div>

            {/* SVG placeholder for aesthetic frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="98" stroke="#1A1D20" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                <circle cx="100" cy="100" r="80" stroke="#1A1D20" strokeWidth="0.5" opacity="0.1"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right: Typography */}
        <div className="lg:col-span-7" ref={containerRef}>
          <h2 className="font-display text-4xl lg:text-6xl leading-tight font-medium tracking-tight">
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
