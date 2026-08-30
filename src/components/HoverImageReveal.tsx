"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface HoverItem {
  text: string;
  image: { src: string };
  link?: string;
}

export interface HoverImageRevealProps {
  items: HoverItem[];
  textColor?: string;
  dimColor?: string;
  imageWidth?: number; // default 300
  imageHeight?: number; // default 400
  rounded?: number; // default 16
  offsetX?: number; // default 200
  offsetY?: number; // default 0
  backgroundColor?: string;
  className?: string;
}

export default function HoverImageReveal({
  items,
  textColor = "#FFFFFF",
  dimColor = "#51565A",
  imageWidth = 300,
  imageHeight = 400,
  rounded = 16,
  offsetX = 150,
  offsetY = 0,
  backgroundColor = "#08080A",
  className = "",
}: HoverImageRevealProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPointerPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full py-16 px-8 overflow-hidden select-none ${className}`}
      style={{ backgroundColor }}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6 relative z-10">
        {items.map((item, idx) => {
          const isHovered = activeIndex === idx;
          const isDimmed = activeIndex !== null && !isHovered;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className="group flex items-center justify-between py-4 border-b border-white/10 cursor-pointer transition-all duration-300"
            >
              <h3
                className="font-display text-3xl md:text-6xl font-bold tracking-tighter uppercase transition-colors duration-300"
                style={{
                  color: isHovered ? textColor : isDimmed ? dimColor : textColor,
                  opacity: isDimmed ? 0.4 : 1,
                }}
              >
                {item.text}
              </h3>
              <span
                className="font-mono text-sm tracking-widest transition-opacity duration-300"
                style={{ color: isHovered ? "#00FF9D" : dimColor }}
              >
                0{idx + 1}
              </span>
            </div>
          );
        })}
      </div>

      {/* Floating Cursor-Following Image Reel Window */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: pointerPos.x + offsetX,
              y: pointerPos.y + offsetY - imageHeight / 2,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
              mass: 0.8,
            }}
            style={{
              width: imageWidth,
              height: imageHeight,
              borderRadius: rounded,
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
            className="z-30 overflow-hidden shadow-2xl border border-white/20 bg-black/60 backdrop-blur-md"
          >
            {/* Vertical Image Reel */}
            <motion.div
              animate={{ y: -activeIndex * imageHeight }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col w-full"
            >
              {items.map((item, idx) => (
                <div key={idx} style={{ width: imageWidth, height: imageHeight }} className="shrink-0 overflow-hidden">
                  <img src={item.image.src} alt={item.text} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
