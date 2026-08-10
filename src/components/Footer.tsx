"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Copy, Check } from "lucide-react";

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const [copiedTg, setCopiedTg] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const headingText = "READY TO ELEVATE YOUR BRAND?";
  const words = headingText.split(" ");

  const handleCopy = (text: string, type: 'tg' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'tg') {
      setCopiedTg(true);
      setTimeout(() => setCopiedTg(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }

    // Confetti burst for micro-interaction
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00FF9D', '#ffffff']
    });
  };

  return (
    <footer className="relative w-full bg-primary-dark text-text-dark pt-32 pb-16 px-6 md:px-12 overflow-hidden border-t border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">

        {/* Scroll-triggered Typing Effect Heading */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold tracking-tighter uppercase leading-[0.9]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 md:mr-6">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i * 0.1 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        {/* Contact Module */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.div
            className="glass-panel-dark rounded-full px-8 py-4 flex items-center gap-4 cursor-pointer group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCopy("@shivv1e", "tg")}
          >
            <div className="absolute inset-0 bg-accent-neon/0 group-hover:bg-accent-neon/10 transition-colors duration-300" />
            <span className="text-xs font-mono text-text-muted-dark uppercase tracking-widest">Telegram</span>
            <span className="font-bold text-white group-hover:text-accent-neon transition-colors">@shivv1e</span>
            <div className="ml-4 text-text-muted-dark group-hover:text-accent-neon transition-colors">
              {copiedTg ? <Check size={16} /> : <Copy size={16} />}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel-dark rounded-full px-8 py-4 flex items-center gap-4 cursor-pointer group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCopy("edenpearce15@gmail.com", "email")}
          >
             <div className="absolute inset-0 bg-accent-neon/0 group-hover:bg-accent-neon/10 transition-colors duration-300" />
            <span className="text-xs font-mono text-text-muted-dark uppercase tracking-widest">Email</span>
            <span className="font-bold text-white group-hover:text-accent-neon transition-colors">edenpearce15@gmail.com</span>
            <div className="ml-4 text-text-muted-dark group-hover:text-accent-neon transition-colors">
              {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-text-muted-dark uppercase tracking-widest border-t border-white/10 pt-8">
          <span>© {new Date().getFullYear()} Chernikov Design</span>
          <span>St. Petersburg / Bryansk</span>
        </div>
      </div>
    </footer>
  );
}
