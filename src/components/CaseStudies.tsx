"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CaseStudies() {
  return (
    <div className="w-full bg-[#08080A] text-text-primary">
      {/* Case 1: SMM & BRAND IDENTITY */}
      <section id="smm-brand" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12">CASE 01 // EIDOS MASSAGE STUDIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="aspect-[4/5] bg-surface-secondary/20 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-surface-secondary/10 flex items-center justify-center font-display text-text-secondary mix-blend-overlay">IMAGE PLACEHOLDER</div>
            </div>
            <div className="flex flex-col justify-center gap-8">
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

      {/* Case 2: NEURO-CINEMATIC */}
      <section id="neuro" className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12">CASE 02 // NEURO-CINEMATIC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02, y: -5 }}
                className="aspect-video bg-[#0a0a0c] rounded-lg border border-white/5 relative overflow-hidden group cursor-pointer"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case 3: E-COMMERCE & PRINT */}
      <section id="ecommerce" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-12">CASE 03 // E-COMMERCE & PRINT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["FORE SUMMER", "MOVE ALZ", "RASTO FREETANK"].map((product, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="aspect-square bg-surface-secondary/10 rounded-lg flex items-center justify-center text-text-secondary/50">PRODUCT</div>
                <div className="text-xs font-mono tracking-widest text-text-primary">{product}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case 4: VIBE-CODING & FAST WEB */}
      <section id="vibe" className="py-32 px-8 bg-gradient-to-b from-[#08080A] via-[#5E646A] to-[#EAECEE] text-[#1A1D20] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-8">CASE 04 // EIDOS-STUDIO.RU</h2>
            <h3 className="text-6xl font-display font-medium tracking-tighter leading-[0.9] mb-8">Vibe-Coding & Fast Web</h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-[#1A1D20]/20 rounded-full text-xs font-mono">7-DAY DELIVERY</span>
              <span className="px-4 py-2 border border-[#1A1D20]/20 rounded-full text-xs font-mono">CLEAN CODE</span>
              <span className="px-4 py-2 border border-[#1A1D20]/20 rounded-full text-xs font-mono">100/100 SPEED</span>
            </div>
          </div>
          <div className="relative h-[400px] perspective-1000">
            <motion.div
              whileHover={{ rotateX: 5, rotateY: -10 }}
              className="absolute right-10 top-0 w-full max-w-4xl aspect-[16/10] bg-[#0A0A0C] rounded-t-3xl border-[8px] border-[#2A2D32] shadow-2xl overflow-hidden flex items-center justify-center text-white"
            >
              Laptop Mockup
            </motion.div>
            <motion.div
              whileHover={{ rotateX: 5, rotateY: 10 }}
              className="w-[300px] aspect-[9/19.5] bg-[#0A0A0C] rounded-[3rem] border-[6px] border-[#2A2D32] shadow-2xl absolute -bottom-10 -right-10 flex items-center justify-center text-white text-xs z-10"
            >
              Mobile
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case 5: AI ARCHITECTURE & AGENTS */}
      <section id="ai" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-12">CASE 05 // K.A.I. INTELLIGENCE</h2>

          <div className="bg-[#0A0A0C] border border-[#2A2D32] rounded-xl shadow-2xl p-6 font-mono text-sm">
            {/* Terminal Header */}
            <div className="px-4 py-2 mb-4 border-b border-[#2A2D32] flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="text-xs text-[#8C9298] flex gap-3">
                <span className="bg-white/5 px-2 py-1 rounded">Llama 3.3</span>
                <span className="bg-white/5 px-2 py-1 rounded">Python</span>
                <span className="bg-white/5 px-2 py-1 rounded">Web Integration</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="h-[300px] flex flex-col gap-4 text-[#F4F4F6]/90">
              <div className="flex gap-4">
                <span className="text-[#00FF9D] opacity-70">➜</span>
                <span className="text-[#8C9298]">~/kai-agent</span>
                <span>./init_agent.sh</span>
              </div>

              <TypewriterText text="[INFO] Initializing K.A.I. Intelligence Core..." delay={500} />
              <TypewriterText text="[INFO] Loading LLM context vectors..." delay={1500} />
              <TypewriterText text="[SUCCESS] Agent ready. Awaiting input." delay={2500} className="text-[#00FF9D]" />

              <div className="flex gap-4 mt-4 opacity-50 animate-pulse">
                <span className="text-[#00FF9D]">█</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TypewriterText({ text, delay, className = "" }: { text: string, delay: number, className?: string }) {
  const [visibleText, setVisibleText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [text, started]);

  if (!started) return null;

  return <div className={className}>{visibleText}</div>;
}
