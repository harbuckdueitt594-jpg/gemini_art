"use client";

import { motion } from "framer-motion";

export default function CaseStudyNeuro() {
  return (
    <section id="case-neuro" className="relative w-full bg-primary-dark text-text-dark py-32 px-6 md:px-12">
      <div className="absolute top-0 left-0 w-full h-32 divider-light-to-dark opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <header className="border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-tighter mb-4 text-accent-neon">
            NEURO-CINEMATIC
          </h2>
          <p className="text-xl md:text-2xl text-text-muted-dark">CINEMATIC PRODUCTION без миллионных бюджетов</p>
        </header>

        {/* Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <motion.div key={item} className="relative aspect-video bg-black glass-panel-dark rounded-xl overflow-hidden group">
              <svg className="w-full h-full text-neutral-900 group-hover:scale-105 transition-transform duration-700 ease-out" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                <rect width="100" height="100" />
              </svg>

              {/* Prompt Badge & Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="border border-accent-neon/30 bg-black/60 backdrop-blur-md p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-mono text-accent-neon uppercase tracking-widest block mb-2">Prompt Details</span>
                  <p className="text-xs text-text-dark/80 font-mono">
                    /imagine prompt: hyper-realistic macro photography, dramatic studio lighting, 8k resolution --ar 16:9 --v 6.0
                  </p>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-white/70">
                SHOT 0{item}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
