"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "smm-brand", title: "SMM & BRAND IDENTITY" },
  { id: "beauty-fx", title: "MAKE-UP & BEAUTY FX" },
  { id: "neuro", title: "NEURO-CINEMATICS" },
  { id: "posters", title: "POSTER DESIGN" },
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
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED] min-h-[80vh] flex flex-col justify-center">
      {/* Corner Tags */}
      <div className="absolute top-8 left-8 text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
        03 // CONTENT ARCHIVE
      </div>
      <div className="absolute top-8 right-8 text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
        SWISS MODULAR INDEX
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col divide-y divide-[#E2E7ED]">
        {categories.map((cat, idx) => {
          const isHovered = hoveredIndex === idx;
          const isFaded = hoveredIndex !== null && hoveredIndex !== idx;

          return (
            <motion.div
              key={cat.id}
              className="group flex items-center justify-between py-6 md:py-8 cursor-pointer select-none"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(cat.id)}
              animate={{
                opacity: isFaded ? 0.35 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-[#94A3B8]">0{idx + 1}</span>
                <h3
                  className={`font-display text-2xl sm:text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-300 uppercase ${
                    isHovered ? "text-[#0A0D12] translate-x-3" : "text-[#475569]"
                  }`}
                >
                  {cat.title}
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -15 }}
                className="text-[#0A0D12]"
              >
                <ArrowUpRight size={40} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-8 text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
        STRICTLY HIGH-END
      </div>
      <div className="absolute bottom-8 right-8 text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
        © 2026 OLEG CHERNIKOV
      </div>
    </section>
  );
}
