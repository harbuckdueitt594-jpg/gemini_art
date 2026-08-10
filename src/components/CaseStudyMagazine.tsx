"use client";

import { motion } from "framer-motion";

export default function CaseStudyMagazine() {
  return (
    <section id="case-smm" className="relative w-full bg-primary-light text-text-light py-32 px-6 md:px-12">
      <div className="absolute top-0 left-0 w-full h-32 divider-dark-to-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <header className="border-b border-black/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-tighter mb-4">
            EIDOS MASSAGE STUDIO
          </h2>
          <p className="text-xl md:text-2xl text-text-muted-light">От комнаты к своему пространству</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Editorial Columns */}
          <div className="md:col-span-5 flex flex-col gap-12 font-inter text-sm md:text-base leading-relaxed">
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Strategy & Solution</h4>
              <p>Построение единого визуального языка для студии массажа. Разработка айдентики, отражающей философию заботы о себе через минимализм и чистоту форм.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Results & Impact</h4>
              <p>100% единый стиль во всех точках контакта. Повышение узнаваемости бренда и рост доверия аудитории за счет премиального визуального позиционирования.</p>
            </div>
          </div>

          {/* Magazine Grid Collage */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <motion.div className="col-span-2 aspect-[16/9] bg-neutral-200 glass-panel-light overflow-hidden rounded-sm relative group">
              <svg className="w-full h-full text-neutral-300 group-hover:scale-105 transition-transform duration-700 ease-out" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                <rect width="100" height="100" />
              </svg>
            </motion.div>
            <motion.div className="aspect-[3/4] bg-neutral-200 glass-panel-light overflow-hidden rounded-sm relative group">
              <svg className="w-full h-full text-neutral-300 group-hover:scale-105 transition-transform duration-700 ease-out" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                <rect width="100" height="100" />
              </svg>
            </motion.div>
            <motion.div className="aspect-[3/4] bg-neutral-200 glass-panel-light overflow-hidden rounded-sm relative group">
              <svg className="w-full h-full text-neutral-300 group-hover:scale-105 transition-transform duration-700 ease-out" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                <rect width="100" height="100" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
