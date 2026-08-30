"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FooterSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const headline = "READY TO ELEVATE YOUR BRAND?";

  const [toast, setToast] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setToast(`COPIED ${type} TO CLIPBOARD`);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <footer className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-t border-[#E2E7ED] relative overflow-hidden">
      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: toast ? 1 : 0, y: toast ? 0 : 50 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#0A0D12] text-[#FFFFFF] px-6 py-3 border border-[#E2E7ED] font-mono text-xs font-bold tracking-widest shadow-2xl"
      >
        {toast}
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 md:gap-20 relative z-10" ref={containerRef}>
        {/* Animated Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-center tracking-tighter text-[#0A0D12] leading-[0.9] uppercase">
          {headline.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.05, delay: index * 0.03 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        {/* High-Contrast Editorial Contact Module */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl border border-[#E2E7ED] bg-[#FFFFFF] p-8 md:p-10 shadow-xs">
          <div
            onClick={() => copyToClipboard("@shivvie", "TELEGRAM")}
            className="flex flex-col gap-2 cursor-pointer group"
          >
            <span className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase group-hover:text-[#0A0D12] transition-colors">
              TELEGRAM
            </span>
            <span className="text-xl font-display font-bold text-[#0A0D12] group-hover:translate-x-1 transition-transform">
              @shivvie
            </span>
          </div>

          <div
            onClick={() => copyToClipboard("edenpearce15@gmail.com", "EMAIL")}
            className="flex flex-col gap-2 cursor-pointer group border-t md:border-t-0 md:border-l border-[#E2E7ED] pt-6 md:pt-0 md:pl-8"
          >
            <span className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase group-hover:text-[#0A0D12] transition-colors">
              EMAIL
            </span>
            <span className="text-xl font-display font-bold text-[#0A0D12] group-hover:translate-x-1 transition-transform">
              edenpearce15@gmail.com
            </span>
          </div>
        </div>

        {/* Minimal Footer Credits */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs font-mono tracking-widest text-[#94A3B8] border-t border-[#E2E7ED] pt-8 gap-4 uppercase">
          <div>2026 OLEG CHERNIKOV</div>
          <div>STRICTLY HIGH-END</div>
        </div>
      </div>
    </footer>
  );
}
