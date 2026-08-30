"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

export interface BlurCarouselSlide {
  image: { src: string };
  title?: string;
}

export interface BlurCarouselProps {
  slides: BlurCarouselSlide[];
  movement?: "horizontal" | "vertical";
  cardWidth?: number; // default 500
  cardHeight?: number; // default 500
  radius?: number; // default 16
  tilt?: number; // default 45 deg
  blurAmount?: number; // default 40
  arrowColor?: string;
  arrowInactiveColor?: string;
  arrowSize?: number;
  autoplay?: boolean;
  showTitle?: boolean;
  titleColor?: string;
  className?: string;
}

export default function BlurCarousel({
  slides,
  movement = "horizontal",
  cardWidth = 450,
  cardHeight = 550,
  radius = 16,
  tilt = 20,
  blurAmount = 40,
  arrowColor = "#00FF9D",
  arrowInactiveColor = "#FFFFFF",
  arrowSize = 36,
  autoplay = false,
  showTitle = false,
  titleColor = "#FFFFFF",
  className = "",
}: BlurCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);
  const [pressTilt, setPressTilt] = useState({ x: 0, y: 0 });

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    triggerTilt("prev");
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    triggerTilt("next");
  };

  const triggerTilt = (direction: "prev" | "next") => {
    if (movement === "horizontal") {
      setPressTilt({ x: direction === "next" ? tilt : -tilt, y: 0 });
    } else {
      setPressTilt({ x: 0, y: direction === "next" ? tilt : -tilt });
    }
    setTimeout(() => setPressTilt({ x: 0, y: 0 }), 300);
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Container with Press-Tilt Spring */}
      <motion.div
        animate={{
          rotateY: pressTilt.x,
          rotateX: pressTilt.y,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          width: cardWidth,
          height: cardHeight,
          borderRadius: radius,
        }}
        className="relative overflow-hidden bg-[#1A1D20] shadow-2xl border border-white/10 group select-none"
      >
        {/* Edge Blur Creep Overlay on Arrow Hover */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-all duration-500 ease-out"
          style={{
            backdropFilter: hoveredArrow ? `blur(${blurAmount}px)` : "blur(0px)",
            backgroundColor: hoveredArrow ? "rgba(0,0,0,0.2)" : "transparent",
          }}
        />

        {/* Slide Image with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex]?.image.src}
            alt={slides[currentIndex]?.title || `Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Optional Overlaid Title */}
        {showTitle && slides[currentIndex]?.title && (
          <div className="absolute top-6 left-6 z-20 font-display text-2xl font-bold whitespace-pre-line" style={{ color: titleColor }}>
            {slides[currentIndex].title}
          </div>
        )}

        {/* Pagination Indicator */}
        <div className="absolute bottom-6 right-6 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white/80">
          {currentIndex + 1} / {slides.length}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <div className={`absolute z-30 flex ${movement === "horizontal" ? "inset-x-0 justify-between px-4" : "inset-y-0 flex-col justify-between py-4"}`}>
        <button
          onClick={prevSlide}
          onMouseEnter={() => setHoveredArrow("prev")}
          onMouseLeave={() => setHoveredArrow(null)}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95"
        >
          {movement === "horizontal" ? (
            <ChevronLeft size={arrowSize} color={hoveredArrow === "prev" ? arrowColor : arrowInactiveColor} />
          ) : (
            <ChevronUp size={arrowSize} color={hoveredArrow === "prev" ? arrowColor : arrowInactiveColor} />
          )}
        </button>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setHoveredArrow("next")}
          onMouseLeave={() => setHoveredArrow(null)}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95"
        >
          {movement === "horizontal" ? (
            <ChevronRight size={arrowSize} color={hoveredArrow === "next" ? arrowColor : arrowInactiveColor} />
          ) : (
            <ChevronDown size={arrowSize} color={hoveredArrow === "next" ? arrowColor : arrowInactiveColor} />
          )}
        </button>
      </div>
    </div>
  );
}
