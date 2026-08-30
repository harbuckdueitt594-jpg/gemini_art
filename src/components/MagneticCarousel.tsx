"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface MagneticImage {
  src: string;
  title?: string;
}

export interface MagneticCarouselProps {
  images: MagneticImage[];
  collapsedWidth?: number; // default 100
  hoverWidth?: number; // default 200
  collapsedHeight?: number; // default 340
  hoverHeight?: number; // default 400
  openSize?: number; // default 600
  gap?: number; // default 16
  influence?: number; // distance in px for dock effect (default 200)
  blur?: number; // blur applied to inactive bars when open (default 2)
  className?: string;
}

export default function MagneticCarousel({
  images,
  collapsedWidth = 100,
  hoverWidth = 200,
  collapsedHeight = 340,
  hoverHeight = 400,
  openSize = 550,
  gap = 16,
  influence = 200,
  blur = 4,
  className = "",
}: MagneticCarouselProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [pointerX, setPointerX] = useState<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setPointerX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setPointerX(null);
  };

  return (
    <div className={`relative w-full flex flex-col items-center justify-center py-12 overflow-hidden ${className}`}>
      {/* Backdrop overlay when a bar is expanded open */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      {/* Bar Row */}
      <div
        ref={rowRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-30 flex items-center justify-center flex-wrap gap-4 md:gap-6 min-h-[420px]"
        style={{ gap }}
      >
        {images.map((img, idx) => {
          const isOpen = openIndex === idx;
          const isOtherOpen = openIndex !== null && !isOpen;

          // Calculate macOS Dock style Proximity Magnification
          let currentWidth = collapsedWidth;
          let currentHeight = collapsedHeight;

          if (pointerX !== null && openIndex === null && rowRef.current) {
            // Calculate center of this bar
            const barWidthWithGap = collapsedWidth + gap;
            const barCenter = idx * barWidthWithGap + collapsedWidth / 2;
            const dist = Math.abs(pointerX - barCenter);

            if (dist < influence) {
              // Smoothstep falloff
              const factor = 1 - dist / influence;
              const smoothFactor = factor * factor * (3 - 2 * factor);
              currentWidth = collapsedWidth + (hoverWidth - collapsedWidth) * smoothFactor;
              currentHeight = collapsedHeight + (hoverHeight - collapsedHeight) * smoothFactor;
            }
          }

          return (
            <motion.div
              key={idx}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              animate={{
                width: isOpen ? openSize : currentWidth,
                height: isOpen ? openSize : currentHeight,
                filter: isOtherOpen ? `blur(${blur}px) brightness(0.5)` : "blur(0px) brightness(1)",
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
              style={{
                borderRadius: isOpen ? 24 : 16,
              }}
              className={`relative overflow-hidden cursor-pointer shadow-2xl border border-white/20 bg-[#1A1D20] group select-none ${
                isOpen ? "fixed z-50 inset-0 m-auto" : "z-10"
              }`}
            >
              <img
                src={img.src}
                alt={img.title || `Poster ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Title Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-display text-sm text-white font-medium">{img.title || `POSTER 0${idx + 1}`}</span>
                <span className="text-[10px] font-mono text-[#00FF9D]">{isOpen ? "CLOSE" : "EXPAND"}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
