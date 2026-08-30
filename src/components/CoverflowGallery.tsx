"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CoverflowSlide {
  image: { src: string };
  title: string;
}

export interface CoverflowGalleryProps {
  slides?: CoverflowSlide[];
  cardWidth?: number; // default 400
  cardHeight?: number; // default 400
  radius?: number; // default 3 (rounded-xl)
  tilt?: number; // default 12 deg
  sideTilt?: number; // default 8 deg
  gap?: number; // default 8
  opacity?: number; // default 60 (60% inactive opacity)
  autoplay?: boolean;
  showTitle?: boolean;
  titleColor?: string;
  className?: string;
}

const DEFAULT_SLIDES: CoverflowSlide[] = [
  { image: { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80" }, title: "Eidos Interior & Reception" },
  { image: { src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=80" }, title: "Manual Therapy Suite" },
  { image: { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop&q=80" }, title: "Rehabilitation Room" },
  { image: { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80" }, title: "Premium SMM Identity" },
  { image: { src: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?w=800&auto=format&fit=crop&q=80" }, title: "Print & Socials System" },
];

export default function CoverflowGallery({
  slides = DEFAULT_SLIDES,
  cardWidth = 400,
  cardHeight = 400,
  radius = 16,
  tilt = 12,
  sideTilt = 8,
  gap = 16,
  opacity = 60,
  autoplay = false,
  showTitle = true,
  titleColor = "#FFFFFF",
  className = "",
}: CoverflowGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(slides.length / 2));

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplay, slides.length]);

  return (
    <div className={`relative w-full flex flex-col items-center justify-center overflow-hidden py-10 ${className}`}>
      <div className="relative w-full flex items-center justify-center min-h-[480px] perspective-1000">
        {slides.map((slide, index) => {
          const offset = index - activeIndex;
          const isActive = index === activeIndex;

          // Calculate transforms based on offset
          const xTranslate = offset * (cardWidth * 0.55 + gap);
          const rotateY = offset === 0 ? 0 : offset < 0 ? tilt : -tilt;
          const zIndex = slides.length - Math.abs(offset);
          const cardOpacity = isActive ? 1 : opacity / 100;
          const scale = isActive ? 1.05 : Math.max(0.75, 1 - Math.abs(offset) * 0.15);

          return (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              animate={{
                x: xTranslate,
                rotateY: rotateY,
                scale: scale,
                opacity: cardOpacity,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              style={{
                width: cardWidth,
                height: cardHeight,
                borderRadius: radius,
                zIndex: zIndex,
                position: "absolute",
              }}
              className="cursor-pointer overflow-hidden shadow-2xl border border-white/20 bg-[#1A1D20] group select-none"
            >
              <img
                src={slide.image.src}
                alt={slide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {showTitle && isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end"
                >
                  <h4 className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: titleColor }}>
                    {slide.title}
                  </h4>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Indicators */}
      <div className="flex gap-2 mt-8 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#00FF9D] w-8" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
