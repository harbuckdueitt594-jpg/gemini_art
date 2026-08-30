"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export interface HoverImageRevealProps {
  items: Record<string, { text: string; image: { src: string }; link?: string }>;
  font?: {
    fontFamily?: string;
    variant?: string;
    fontWeight?: number;
    fontSize?: number; // 61
    lineHeight?: string; // "0.9em"
    letterSpacing?: string; // "-0.05em"
    textAlign?: "left" | "center" | "right"; // "center"
  };
  textColor?: string; // "#0A0D12"
  dimColor?: string; // "#94A3B8"
  align?: "left" | "center" | "right"; // "center"
  rowGap?: number; // 30
  imageWidth?: number; // 300
  imageHeight?: number; // 400
  rounded?: number; // 16
  offsetX?: number; // 200
  offsetY?: number; // 0
  followStrength?: number; // 0.15
  transition?: { type: "spring"; stiffness: number; damping: number; mass: number };
  backgroundColor?: string; // "transparent"
}

export default function HoverImageReveal({
  items,
  font = {
    fontFamily: "var(--font-syne), sans-serif",
    fontWeight: 700,
    fontSize: 61,
    lineHeight: "0.9em",
    letterSpacing: "-0.05em",
    textAlign: "center",
  },
  textColor = "#0A0D12",
  dimColor = "#94A3B8",
  imageWidth = 300,
  imageHeight = 400,
  followStrength = 0.15,
}: HoverImageRevealProps) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating Image Spring Motion
  const mouseX = useSpring(0, { stiffness: 400, damping: 40, mass: 1 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 40, mass: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x - imageWidth / 2);
    mouseY.set(y - imageHeight / 2);
  };

  const itemKeys = Object.keys(items);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredKey(null)}
      className="relative w-full py-12 select-none overflow-hidden"
    >
      {/* Editorial Row List */}
      <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
        {itemKeys.map((key) => {
          const item = items[key];
          const isHovered = hoveredKey === key;
          const isAnyHovered = hoveredKey !== null;

          return (
            <motion.div
              key={key}
              onMouseEnter={() => setHoveredKey(key)}
              className="cursor-pointer transition-all duration-300 py-3 px-6"
              style={{
                color: isHovered ? textColor : isAnyHovered ? dimColor : textColor,
              }}
            >
              <h3
                style={{
                  fontFamily: font.fontFamily,
                  fontWeight: font.fontWeight,
                  fontSize: `clamp(2rem, 5vw, ${font.fontSize}px)`,
                  lineHeight: font.lineHeight,
                  letterSpacing: font.letterSpacing,
                  textAlign: font.textAlign,
                }}
                className="uppercase tracking-tighter transition-transform duration-300"
              >
                {item.text}
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Cursor-Following Floating Image Reel */}
      {hoveredKey && items[hoveredKey] && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            width: imageWidth,
            height: imageHeight,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 40, mass: 1 }}
          className="pointer-events-none absolute top-0 left-0 z-30 overflow-hidden border border-[#E2E7ED] bg-[#FFFFFF] shadow-2xl"
        >
          <img
            src={items[hoveredKey].image.src}
            alt={items[hoveredKey].text}
            className="w-full h-full object-cover grayscale contrast-110"
          />
        </motion.div>
      )}
    </div>
  );
}
