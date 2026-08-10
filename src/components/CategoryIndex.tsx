"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "smm-brand", title: "SMM & BRAND IDENTITY", target: "#case-smm" },
  { id: "neuro-cinematic", title: "NEURO-CINEMATIC", target: "#case-neuro" },
  { id: "ecommerce-print", title: "E-COMMERCE & PRINT", target: "#case-print" },
  { id: "vibe-coding", title: "VIBE-CODING & FAST WEB", target: "#case-vibe" },
  { id: "ai-architecture", title: "AI ARCHITECTURE & AGENTS", target: "#case-ai" },
];

export default function CategoryIndex() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleScroll = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-primary-dark text-text-dark py-24 px-6 md:px-12 flex flex-col">
      {/* Top Gradient Divider from Light to Dark */}
      <div className="absolute top-0 left-0 w-full h-32 divider-light-to-dark opacity-80 pointer-events-none" />

      {/* Corner Metadata Tags */}
      <div className="relative z-10 w-full flex justify-between text-[10px] md:text-xs font-mono text-text-muted-dark uppercase tracking-widest mb-24">
        <span>[ Content ]</span>
        <span>[ AI ]</span>
        <span>[ figma ]</span>
        <span>[ chernikov32design ]</span>
      </div>

      {/* Categories List */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full group">
        {CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => handleScroll(category.target)}
            className="group/item cursor-pointer border-b border-white/5 py-6 md:py-10 first:border-t"
            layout
          >
            <motion.h3
              className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold uppercase tracking-tighter transition-colors duration-500 origin-left"
              animate={{
                color: hoveredIdx === idx ? "#00FF9D" : hoveredIdx !== null ? "#222222" : "#444444",
                scale: hoveredIdx === idx ? 1.05 : 1,
                x: hoveredIdx === idx ? 20 : 0
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {category.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
