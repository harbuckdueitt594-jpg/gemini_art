"use client";

import React, { useRef, useEffect, useState } from "react";

export interface ScrollTextHighlightProps {
  text: string;
  dimColor?: string; // Default dim color before highlight
  highlightColor?: string; // Color when highlighted
  splitBy?: "word" | "character";
  className?: string;
}

export default function ScrollTextHighlight({
  text,
  dimColor = "#8C9298",
  highlightColor = "#1A1D20",
  splitBy = "word",
  className = "",
}: ScrollTextHighlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on scroll position (start at bottom of viewport, end when near center/top)
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;

      const current = rect.top;
      const rawProgress = (start - current) / (start - end);
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <div ref={containerRef} className={`inline-block leading-relaxed ${className}`}>
      {items.map((item, index) => {
        const itemThreshold = index / items.length;
        const isHighlighted = scrollProgress >= itemThreshold;

        return (
          <span
            key={index}
            className="transition-colors duration-300 ease-out inline-block"
            style={{
              color: isHighlighted ? highlightColor : dimColor,
              marginRight: splitBy === "word" ? "0.3em" : "0",
            }}
          >
            {item === " " ? "\u00A0" : item}
          </span>
        );
      })}
    </div>
  );
}
