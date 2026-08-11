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
    <footer className="w-full py-32 px-8 bg-main text-text-primary border-t border-white/5 relative overflow-hidden">
      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: toast ? 1 : 0, y: toast ? 0 : 50 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-accent text-surface px-6 py-3 rounded-full font-mono text-xs font-bold tracking-widest shadow-[0_0_20px_rgba(0,255,157,0.4)]"
      >
        {toast}
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20" ref={containerRef}>

        {/* Animated Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-center tracking-tighter">
          {headline.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </h2>

        {/* Contact Module */}
        <div className="bg-glass rounded-2xl p-8 flex flex-col sm:flex-row gap-8 w-full max-w-2xl justify-between items-center relative z-10 backdrop-blur-xl">

          <div
            onClick={() => copyToClipboard("@shivv1e", "TELEGRAM")}
            className="flex flex-col gap-2 cursor-pointer group"
          >
            <span className="text-xs font-mono tracking-widest text-text-secondary group-hover:text-accent transition-colors">TELEGRAM</span>
            <span className="text-xl font-display font-medium group-hover:text-white transition-colors">@shivv1e</span>
          </div>

          <div className="w-px h-12 bg-white/10 hidden sm:block" />

          <div
            onClick={() => copyToClipboard("edenpearce15@gmail.com", "EMAIL")}
            className="flex flex-col gap-2 cursor-pointer group items-start sm:items-end"
          >
            <span className="text-xs font-mono tracking-widest text-text-secondary group-hover:text-accent transition-colors">EMAIL</span>
            <span className="text-xl font-display font-medium group-hover:text-white transition-colors">edenpearce15@gmail.com</span>
          </div>

        </div>

        {/* Minimal Footer Credits */}
        <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-text-secondary mt-12 border-t border-white/5 pt-8">
          <div>© {new Date().getFullYear()} OLEG CHERNIKOV</div>
          <div>STRICTLY HIGH-END</div>
        </div>

      </div>
    </footer>
  );
}
