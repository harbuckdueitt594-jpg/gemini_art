"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function CaseStudies() {
  return (
    <div className="w-full bg-[#08080A] text-text-primary">
      {/* Case 1: SMM & BRAND IDENTITY */}
            <section id="smm-brand" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12">CASE 01 // EIDOS MASSAGE STUDIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Collage Grid */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
               <div className="col-span-1 md:col-span-8 aspect-[16/9] bg-surface-secondary/20 rounded-lg overflow-hidden relative group hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center font-display text-text-secondary mix-blend-overlay">HERO IMAGE</div>
               </div>
               <div className="col-span-1 md:col-span-4 aspect-square bg-surface-secondary/20 rounded-lg overflow-hidden relative group hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center font-display text-text-secondary mix-blend-overlay">DETAIL 1</div>
               </div>
               <div className="col-span-1 md:col-span-4 aspect-[3/4] bg-surface-secondary/20 rounded-lg overflow-hidden relative group hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center font-display text-text-secondary mix-blend-overlay">DETAIL 2</div>
               </div>
               <div className="col-span-1 md:col-span-8 aspect-[21/9] bg-surface-secondary/20 rounded-lg overflow-hidden relative group hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center font-display text-text-secondary mix-blend-overlay">LANDSCAPE</div>
               </div>
            </div>

            <div className="md:col-span-12 flex flex-col justify-center gap-8">
              <h3 className="text-5xl font-display font-medium tracking-tighter leading-[0.9]">Magazine Collage Layout</h3>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="text-text-secondary mb-2 font-mono">STRATEGY</h4>
                  <p>Premium aesthetics combined with deep visual metaphor, transforming standard SMM into editorial art.</p>
                </div>
                <div>
                  <h4 className="text-text-secondary mb-2 font-mono">IMPACT</h4>
                  <p>+300% engagement rate across social channels within 2 weeks of launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 02: MAKE-UP ARTIST LEANCA */}
      <section id="beauty-fx" className="py-32 px-8 bg-[#08080A] text-[#F4F4F6] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-12">02 / MAKE-UP ARTIST LEANCA</h2>

          <div className="mb-16">
            <h3 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[0.9] uppercase max-w-3xl">
              УПАКОВКА ПОРТФОЛИО ДЛЯ BEAUTY & FX ИНДУСТРИИ
            </h3>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
             {/* Masonry Items */}
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`bg-surface-secondary/10 rounded-lg overflow-hidden break-inside-avoid group hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-video'}`}>
                   <div className="w-full h-full flex items-center justify-center font-display text-text-secondary/50">SLIDE {i}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case 2: NEURO-CINEMATIC */}
            <section id="neuro" className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12">CASE 03 // NEURO-CINEMATIC</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex-1 aspect-[21/9] bg-[#0a0a0c] rounded-lg border border-white/5 relative overflow-hidden group cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out"
              >
                <div className="absolute top-4 right-4 bg-glass px-3 py-1 rounded text-[10px] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  PROMPT DETAILS
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case 3: E-COMMERCE & PRINT */}
            <section id="ecommerce" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12">CASE 04 // E-COMMERCE & PRINT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="w-full aspect-[1082/722] bg-surface-secondary/10 rounded-lg flex items-center justify-center text-text-secondary/50 group cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out">
                    IMAGE {idx}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case 05: POSTER DESIGN */}
      <section id="posters" className="py-32 px-0 bg-surface">
        <div className="max-w-full">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12 px-8 max-w-7xl mx-auto">CASE 05 // POSTER DESIGN</h2>
          <div className="flex flex-col gap-16 w-full">
            {[1, 2].map((idx) => (
               <div key={idx} className="w-full overflow-hidden">
                  <div className="w-full aspect-[1440/1075] bg-[#1A1D20] flex items-center justify-center text-text-secondary/50 group cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 ease-out">
                     <span className="font-display text-4xl">POSTER FULL BLEED {idx}</span>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case 4: VIBE-CODING & FAST WEB */}
            <section id="vibe" className="py-32 px-8 bg-gradient-to-b from-[#08080A] via-[#5E646A] to-[#EAECEE] text-[#1A1D20] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 items-center text-center">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-8">CASE 06 // EIDOS-STUDIO.RU</h2>
            <h3 className="text-6xl font-display font-medium tracking-tighter leading-[0.9] mb-8">Vibe-Coding & Fast Web</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 border border-[#1A1D20]/20 rounded-full text-xs font-mono">7-DAY DELIVERY</span>
              <span className="px-4 py-2 border border-[#1A1D20]/20 rounded-full text-xs font-mono">CLEAN CODE</span>
              <span className="px-4 py-2 border border-[#1A1D20]/20 rounded-full text-xs font-mono">100/100 SPEED</span>
            </div>
          </div>
          <div className="w-full relative perspective-1000">
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
              }}
              style={{ transition: 'transform 0.1s ease-out' }}
              className="w-full max-w-5xl mx-auto aspect-[16/10] bg-[#0A0A0C] rounded-t-3xl border-[8px] border-[#2A2D32] shadow-2xl overflow-hidden flex items-center justify-center text-white"
            >
              Laptop Mockup
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case 5: AI ARCHITECTURE & AGENTS */}
            <section id="ai" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-12">CASE 07 // K.A.I. INTELLIGENCE</h2>
            <h3 className="text-5xl font-display font-medium tracking-tighter leading-[0.9] mb-6">AI ARCHITECTURE & AGENTS</h3>
            <p className="text-[#1A1D20]/70 max-w-md">Real-time intelligent chat agents integrated directly into the user experience, providing context-aware recommendations and dynamic conversational flows.</p>
          </div>

          <div className="relative w-[320px] shrink-0">
            <PhoneChatSimulation />
          </div>
        </div>
      </section>
    </div>
  );
}

function PhoneChatSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);

  useEffect(() => {
    if (isInView) {
       const sequence = async () => {
          await new Promise(r => setTimeout(r, 500));
          setMessages(m => [...m, { sender: 'user', text: "Часто болит спина после спортзала..." }]);

          await new Promise(r => setTimeout(r, 1500));
          setMessages(m => [...m, { sender: 'ai', text: "Учитывая ваши проблемы... рекомендовал Общий массаж" }]);
       };
       sequence();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="aspect-[9/19.5] w-[320px] rounded-[3rem] border-[8px] border-[#2A2D32] bg-[#F4F4F6] shadow-2xl relative overflow-hidden flex flex-col">
       {/* Notch */}
       <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
          <div className="w-1/3 h-full bg-[#2A2D32] rounded-b-xl"></div>
       </div>

       <div className="flex-1 p-4 pt-12 flex flex-col gap-4 overflow-y-auto">
          {messages.map((msg, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-[#1A1D20] text-[#F4F4F6] self-end rounded-tr-sm' : 'bg-white text-[#1A1D20] shadow-sm self-start rounded-tl-sm'}`}
             >
                {msg.text}
             </motion.div>
          ))}
       </div>
    </div>
  );
}