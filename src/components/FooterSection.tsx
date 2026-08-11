"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function FooterSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const headline = "READY TO ELEVATE YOUR BRAND?";

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
    <footer className="w-full py-32 px-8 bg-[#656A70] text-[#EAECEE] border-t border-white/5 relative overflow-hidden">
      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}
      />

      {/* Glow Effect matching mouse */}
      <div
        className="absolute w-96 h-96 bg-[#EAECEE]/5 rounded-full blur-[100px] pointer-events-none transition-transform duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: toast ? 1 : 0, y: toast ? 0 : 50 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#EAECEE] text-[#1A1D20] px-6 py-3 rounded-full font-mono text-xs font-bold tracking-widest shadow-2xl"
      >
        {toast}
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20 relative z-10" ref={containerRef}>

        {/* Animated Headline with Magnetic Hover */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-center tracking-tighter cursor-default"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {headline.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              whileHover={{
                color: "#fff",
                textShadow: "0 0 20px rgba(255,255,255,0.5)",
                y: -5
              }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Contact Module */}
        <div className="bg-liquid-glass-dark rounded-2xl p-8 flex flex-col sm:flex-row gap-8 w-full max-w-2xl justify-between items-center relative overflow-hidden group">
          {/* Internal moving glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

          <div
            onClick={() => copyToClipboard("@shivv1e", "TELEGRAM")}
            className="flex flex-col gap-2 cursor-pointer group/item relative z-10"
          >
            <span className="text-xs font-mono tracking-widest text-[#EAECEE]/60 group-hover/item:text-[#EAECEE] transition-colors">TELEGRAM</span>
            <span className="text-xl font-display font-medium group-hover/item:text-white transition-colors">@shivv1e</span>
          </div>

          <div className="w-px h-12 bg-white/10 hidden sm:block relative z-10" />

          <div
            onClick={() => copyToClipboard("edenpearce15@gmail.com", "EMAIL")}
            className="flex flex-col gap-2 cursor-pointer group/item items-start sm:items-end relative z-10"
          >
            <span className="text-xs font-mono tracking-widest text-[#EAECEE]/60 group-hover/item:text-[#EAECEE] transition-colors">EMAIL</span>
            <span className="text-xl font-display font-medium group-hover/item:text-white transition-colors">edenpearce15@gmail.com</span>
          </div>

        </div>

        {/* Minimal Footer Credits */}
        <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-[#EAECEE]/50 mt-12 border-t border-white/5 pt-8 relative z-10">
          <div>© {new Date().getFullYear()} OLEG CHERNIKOV</div>
          <div>STRICTLY HIGH-END</div>
        </div>

      </div>
    </footer>
  );
}
