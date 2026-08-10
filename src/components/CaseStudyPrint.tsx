"use client";

import { motion } from "framer-motion";

export default function CaseStudyPrint() {
  const cards = [
    { id: 1, title: "FORE SUMMER", tag: "POSTER" },
    { id: 2, title: "MOVE ALZ", tag: "PRINT CAMPAIGN" },
    { id: 3, title: "RASTO FREETANK", tag: "PACKAGING" },
  ];

  return (
    <section id="case-print" className="relative w-full bg-primary-light text-text-light py-32 px-6 md:px-12">
      <div className="absolute top-0 left-0 w-full h-32 divider-dark-to-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <header className="border-b border-black/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-tighter mb-4">
              E-COMMERCE & PRINT
            </h2>
            <p className="text-xl md:text-2xl text-text-muted-light">Minimalist Cinematic Production</p>
          </div>
          <span className="text-xs font-mono tracking-widest text-text-muted-light uppercase">[ 3 PROJECTS ]</span>
        </header>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="flex flex-col gap-4 group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] bg-neutral-200 glass-panel-light rounded-sm overflow-hidden relative">
                <svg className="w-full h-full text-neutral-300 group-hover:scale-105 transition-transform duration-700 ease-out" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                  <rect width="100" height="100" />
                </svg>
              </div>
              <div className="flex justify-between items-center border-t border-black/10 pt-4">
                <h3 className="font-syne font-bold tracking-tight">{card.title}</h3>
                <span className="text-[10px] font-mono text-text-muted-light bg-black/5 px-2 py-1 rounded-full">{card.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
