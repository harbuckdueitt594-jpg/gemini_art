"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";

export default function FooterSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [toast, setToast] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setToast(`COPIED ${type} TO CLIPBOARD`);
    setTimeout(() => setToast(null), 2000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer className="w-full py-32 px-8 bg-[#1A1D20] text-[#EAECEE] border-t border-white/10 relative overflow-hidden">
      {/* Glow Effect matching mouse */}
      <div
        className="absolute w-96 h-96 bg-[#00FF9D]/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: toast ? 1 : 0, y: toast ? 0 : 50 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#00FF9D] text-[#1A1D20] px-6 py-3 rounded-full font-mono text-xs font-bold tracking-widest shadow-2xl"
      >
        {toast}
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20 relative z-10" ref={containerRef}>

        {/* Animated Headline with ScrambleText */}
        <div className="text-center cursor-default">
          <ScrambleText
            words="READY TO ELEVATE YOUR BRAND?"
            tag="h2"
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-center tracking-tighter text-[#EAECEE]"
            color="#EAECEE"
            scrambleSpeed={30}
            hoverEffect="wave"
          />
        </div>

        {/* Contact Module */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row gap-8 w-full max-w-2xl justify-between items-center relative overflow-hidden group shadow-2xl">
          <div
            onClick={() => copyToClipboard("@shivv1e", "TELEGRAM")}
            className="flex flex-col gap-2 cursor-pointer group/item relative z-10"
          >
            <span className="text-xs font-mono tracking-widest text-[#8C9298] group-hover/item:text-[#00FF9D] transition-colors">
              TELEGRAM
            </span>
            <span className="text-2xl font-display font-medium text-white group-hover/item:text-[#00FF9D] transition-colors">
              @shivv1e
            </span>
          </div>

          <div className="w-px h-12 bg-white/10 hidden sm:block relative z-10" />

          <div
            onClick={() => copyToClipboard("edenpearce15@gmail.com", "EMAIL")}
            className="flex flex-col gap-2 cursor-pointer group/item items-start sm:items-end relative z-10"
          >
            <span className="text-xs font-mono tracking-widest text-[#8C9298] group-hover/item:text-[#00FF9D] transition-colors">
              EMAIL
            </span>
            <span className="text-2xl font-display font-medium text-white group-hover/item:text-[#00FF9D] transition-colors">
              edenpearce15@gmail.com
            </span>
          </div>
        </div>

        {/* Minimal Footer Credits */}
        <div className="w-full flex justify-between items-center text-xs font-mono tracking-widest text-[#8C9298] border-t border-white/10 pt-8 relative z-10">
          <div>© 2026 OLEG CHERNIKOV</div>
          <div>STRICTLY HIGH-END</div>
        </div>

      </div>
    </footer>
  );
}
