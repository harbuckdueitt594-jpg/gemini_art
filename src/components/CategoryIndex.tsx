"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "smm-brand", title: "SMM & BRAND IDENTITY" },
  { id: "neuro", title: "NEURO-CINEMATIC" },
  { id: "ecommerce", title: "E-COMMERCE & PRINT" },
  { id: "vibe", title: "VIBE-CODING & FAST WEB" },
  { id: "ai", title: "AI ARCHITECTURE & AGENTS" },
];

export default function CategoryIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-32 px-8 bg-gradient-to-b from-[#EAECEE] via-[#5E646A] to-[#08080A] text-text-primary min-h-screen flex items-center">
      {/* Corner Tags */}
      <div className="absolute top-8 left-8 text-xs font-mono tracking-widest text-text-secondary">CONTENT</div>
      <div className="absolute top-8 right-8 text-xs font-mono tracking-widest text-text-secondary">AI</div>
      <div className="absolute bottom-8 left-8 text-xs font-mono tracking-widest text-text-secondary">FIGMA</div>
      <div className="absolute bottom-8 right-8 text-xs font-mono tracking-widest text-text-secondary">CHERNIKOV32DESIGN</div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {categories.map((cat, idx) => {
          const isHovered = hoveredIndex === idx;
          const isFaded = hoveredIndex !== null && hoveredIndex !== idx;

          return (
            <motion.div
              key={cat.id}
              className="group flex items-center justify-between py-6 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(cat.id)}
              animate={{
                opacity: isFaded ? 0.3 : 1
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className={`font-display text-6xl font-bold tracking-tighter transition-all duration-500 uppercase ${isHovered ? 'text-[#F4F4F6] translate-x-4' : 'text-gray-700'}`}>
                {cat.title}
              </h3>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                className="text-accent"
              >
                <ArrowUpRight size={48} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
