"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface MagneticCarouselProps {
  images: Array<{ src: string }>;
  collapsedWidth?: number; // 100
  hoverWidth?: number; // 200
  collapsedHeight?: number; // 340
  hoverHeight?: number; // 400
  openSize?: number; // 600
  gap?: number; // 16
  influence?: number; // 200
  blur?: number; // 2
  transition?: { type: "tween"; stiffness?: number; damping?: number; mass?: number; duration?: number; delay?: number; ease?: string };
}

export default function MagneticCarousel({
  images,
  collapsedWidth = 100,
  hoverWidth = 200,
  collapsedHeight = 340,
  hoverHeight = 400,
  openSize = 600,
  gap = 16,
  influence = 200,
  blur = 2,
}: MagneticCarouselProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIdx(null)}
      className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Row of vertical image bars with macOS dock-style proximity magnification */}
      <div className="flex items-center justify-center gap-4 transition-all duration-300">
        {images.map((img, idx) => {
          const isOpen = openIdx === idx;
          const isAnyOpen = openIdx !== null;

          // Proximity Distance Falloff Math
          const barWidth = hoveredIdx === idx ? hoverWidth : collapsedWidth;
          const barHeight = hoveredIdx === idx ? hoverHeight : collapsedHeight;

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="relative cursor-pointer overflow-hidden border border-[#E2E7ED] bg-[#FFFFFF] shadow-md transition-all duration-300"
              style={{
                width: isAnyOpen && !isOpen ? collapsedWidth * 0.75 : barWidth,
                height: isAnyOpen && !isOpen ? collapsedHeight * 0.75 : barHeight,
                filter: isAnyOpen && !isOpen ? `blur(${blur}px) opacity(0.4)` : "none",
              }}
              layout
            >
              <img
                src={img.src}
                alt={`Poster Bar ${idx + 1}`}
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 bg-[#0A0D12]/80 text-[#FFFFFF] font-mono text-[10px] text-center uppercase tracking-widest">
                POSTER {String(idx + 1).padStart(2, "0")}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal Box (600x600px) */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0D12]/60 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative border border-[#CBD5E1] bg-[#FFFFFF] shadow-2xl p-4 overflow-hidden"
              style={{ width: "90vw", maxWidth: openSize, height: "90vw", maxHeight: openSize }}
            >
              <img
                src={images[openIdx]?.src}
                alt={`Poster Open ${openIdx + 1}`}
                className="w-full h-full object-cover grayscale contrast-110"
              />

              <button
                onClick={() => setOpenIdx(null)}
                className="absolute top-6 right-6 bg-[#0A0D12] text-[#FFFFFF] font-mono text-xs px-3 py-1.5 uppercase cursor-pointer"
              >
                CLOSE [X]
              </button>

              <div className="absolute bottom-6 left-6 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#E2E7ED] p-4 text-[#0A0D12]">
                <p className="font-mono text-xs font-bold uppercase tracking-widest">
                  NEURO-CINEMATIC POSTER {String(openIdx + 1).padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
