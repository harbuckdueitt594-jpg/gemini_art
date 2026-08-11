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
    <section className="relative w-full py-32 px-8 bg-surface text-text-primary min-h-screen flex items-center">
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
              className="group flex items-center justify-between py-6 border-b border-white/10 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(cat.id)}
              animate={{
                scale: isHovered ? 1.05 : 1,
                x: isHovered ? 20 : 0,
                opacity: isFaded ? 0.3 : 1
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className={`font-display text-3xl md:text-5xl lg:text-7xl font-bold uppercase transition-colors duration-300 ${isHovered ? 'text-text-primary' : 'text-text-secondary'}`}>
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
