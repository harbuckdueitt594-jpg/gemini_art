"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export interface CoverflowGalleryProps {
  slides: Array<{ image: { src: string }; title: string }>;
  cardWidth?: number; // 400
  cardHeight?: number; // 400
  radius?: number; // 3
  tilt?: number; // 12
  sideTilt?: number; // 8
  gap?: number; // 8
  opacity?: number; // 60
  autoplay?: boolean; // false
  autoplayDirection?: "rightToLeft" | "leftToRight";
  transition?: { type: string; stiffness: number; damping: number; mass: number; duration: number; delay: number; ease: number[] };
  showTitle?: boolean; // true
  titleFont?: { fontFamily?: string; variant?: string; fontWeight?: number; fontSize?: string; lineHeight?: string; letterSpacing?: string; textAlign?: "left" | "center" };
  titleColor?: string; // "#FFFFFF" inside slide overlay
  titlePosition?: { position?: string; paddingLeft?: number; paddingRight?: number; paddingTop?: number; paddingBottom?: number };
}

export default function CoverflowGallery({
  slides,
  cardWidth = 400,
  cardHeight = 400,
  sideTilt = 8,
  gap = 8,
  opacity = 60,
  showTitle = true,
  titleColor = "#FFFFFF",
}: CoverflowGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(slides.length / 2));
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-12 flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ perspective: "1200px" }}
    >
      <div className="relative flex items-center justify-center w-full h-[450px]">
        {slides.map((slide, idx) => {
          const offset = idx - activeIndex;
          const absOffset = Math.abs(offset);
          const isCenter = idx === activeIndex;

          if (absOffset > 3) return null; // Only render close neighbors

          const translateX = offset * (cardWidth * 0.45 + gap * 4);
          const rotateY = isCenter ? 0 : offset < 0 ? sideTilt : -sideTilt;
          const translateZ = isCenter ? 0 : -absOffset * 150;
          const cardOpacity = isCenter ? 1 : (opacity / 100) ** absOffset;

          return (
            <motion.div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="absolute cursor-pointer rounded-none border border-[#E2E7ED] bg-[#FFFFFF] shadow-lg overflow-hidden"
              style={{
                width: cardWidth,
                height: cardHeight,
                zIndex: 50 - absOffset,
              }}
              animate={{
                x: translateX,
                z: translateZ,
                rotateY: rotateY,
                opacity: cardOpacity,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="relative w-full h-full bg-[#EDF1F5] flex items-center justify-center">
                <img
                  src={slide.image.src}
                  alt={slide.title}
                  className="w-full h-full object-cover grayscale contrast-110"
                />

                {showTitle && (
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-[#0A0D12]/80 backdrop-blur-xs text-[#FFFFFF]">
                    <h4 className="font-display text-sm font-semibold tracking-wider uppercase" style={{ color: titleColor }}>
                      {slide.title}
                    </h4>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="px-4 py-2 border border-[#CBD5E1] bg-[#FFFFFF] hover:bg-[#EDF1F5] text-[#0A0D12] font-mono text-xs tracking-widest transition-colors cursor-pointer"
        >
          PREV
        </button>
        <span className="font-mono text-xs text-[#94A3B8]">
          0{activeIndex + 1} / 0{slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="px-4 py-2 border border-[#CBD5E1] bg-[#FFFFFF] hover:bg-[#EDF1F5] text-[#0A0D12] font-mono text-xs tracking-widest transition-colors cursor-pointer"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
