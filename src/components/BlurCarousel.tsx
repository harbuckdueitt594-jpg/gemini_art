"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BlurCarouselProps {
  slides: Array<{ image: { src: string }; title?: string }>;
  movement?: "horizontal" | "vertical"; // "vertical"
  cardWidth?: number; // 500
  cardHeight?: number; // 500
  radius?: number; // 0
  tilt?: number; // 45
  blurAmount?: number; // 40
  arrowInactiveColor?: string; // "#94A3B8"
  arrowColor?: string; // "#0A0D12"
  arrowSize?: number; // 40
  autoplay?: boolean; // false
  transition?: { type?: string; stiffness?: number; damping?: number; mass?: number; duration?: number; delay?: number; ease?: string };
  showTitle?: boolean; // false
  titleFont?: { fontFamily?: string; variant?: string; fontWeight?: number; fontSize?: string; lineHeight?: string; letterSpacing?: string; textAlign?: string };
  titleColor?: string; // "#0A0D12"
  titlePosition?: { position?: string; paddingLeft?: number; paddingRight?: number; paddingTop?: number; paddingBottom?: number };
}

export default function BlurCarousel({
  slides,
  cardWidth = 500,
  cardHeight = 500,
  tilt = 45,
  blurAmount = 40,
  arrowInactiveColor = "#94A3B8",
  arrowColor = "#0A0D12",
  arrowSize = 40,
  showTitle = false,
  titleColor = "#0A0D12",
}: BlurCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveredArrow, setIsHoveredArrow] = useState<"prev" | "next" | null>(null);
  const [isPressing, setIsPressing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Infinite keyboard navigation loop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center p-6 border border-[#E2E7ED] bg-[#FFFFFF] shadow-xs select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Soft Directional Edge Blur on Arrow Hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 z-20 transition-all duration-300"
        style={{
          backdropFilter: isHoveredArrow === "prev" ? `blur(${blurAmount}px)` : "none",
          WebkitBackdropFilter: isHoveredArrow === "prev" ? `blur(${blurAmount}px)` : "none",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-20 transition-all duration-300"
        style={{
          backdropFilter: isHoveredArrow === "next" ? `blur(${blurAmount}px)` : "none",
          WebkitBackdropFilter: isHoveredArrow === "next" ? `blur(${blurAmount}px)` : "none",
        }}
      />

      {/* Main Slide Card with 3D Press-Tilt */}
      <motion.div
        onMouseDown={() => setIsPressing(true)}
        onMouseUp={() => setIsPressing(false)}
        onMouseLeave={() => setIsPressing(false)}
        animate={{
          rotateX: isPressing ? tilt * 0.5 : 0,
          scale: isPressing ? 0.96 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative overflow-hidden border border-[#E2E7ED] bg-[#EDF1F5]"
        style={{ width: "100%", maxWidth: cardWidth, height: cardHeight }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <img
              src={slides[activeIndex]?.image?.src}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover grayscale contrast-110"
            />

            {showTitle && slides[activeIndex]?.title && (
              <div className="absolute inset-x-0 bottom-0 p-4 bg-[#FFFFFF]/90 backdrop-blur-xs">
                <p className="font-display text-xs font-semibold uppercase tracking-wider" style={{ color: titleColor }}>
                  {slides[activeIndex].title}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Vertical Navigation Controls */}
      <div className="flex items-center gap-6 mt-6 z-30">
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsHoveredArrow("prev")}
          onMouseLeave={() => setIsHoveredArrow(null)}
          className="p-2 border border-[#CBD5E1] bg-[#FFFFFF] hover:bg-[#EDF1F5] text-[#0A0D12] transition-colors cursor-pointer"
          style={{ color: isHoveredArrow === "prev" ? arrowColor : arrowInactiveColor }}
        >
          ↑
        </button>
        <span className="font-mono text-xs text-[#94A3B8]">
          0{activeIndex + 1} / 0{slides.length}
        </span>
        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsHoveredArrow("next")}
          onMouseLeave={() => setIsHoveredArrow(null)}
          className="p-2 border border-[#CBD5E1] bg-[#FFFFFF] hover:bg-[#EDF1F5] text-[#0A0D12] transition-colors cursor-pointer"
          style={{ color: isHoveredArrow === "next" ? arrowColor : arrowInactiveColor }}
        >
          ↓
        </button>
      </div>
    </div>
  );
}
