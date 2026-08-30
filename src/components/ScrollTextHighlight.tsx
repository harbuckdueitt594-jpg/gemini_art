"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ScrollTextHighlightProps {
  text: string;
  dimColor?: string; // "#94A3B8" (cold muted gray)
  highlightColor?: string; // "#0A0D12" (deep black)
  splitBy?: "words" | "characters";
  scrollStart?: string; // "top 80%"
  scrollEnd?: string; // "bottom 40%"
  scrub?: boolean; // true / false
}

export default function ScrollTextHighlight({
  text,
  dimColor = "#94A3B8",
  highlightColor = "#0A0D12",
  splitBy = "words",
}: ScrollTextHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"],
  });

  const units = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <p ref={containerRef} className="flex flex-wrap gap-x-1.5 gap-y-1 font-sans text-lg md:text-xl leading-relaxed">
      {units.map((unit, i) => {
        const start = i / units.length;
        const end = (i + 1) / units.length;

        // Color transition driven by scroll position
        const color = useTransform(scrollYProgress, [start, end], [dimColor, highlightColor]);

        return (
          <motion.span key={i} style={{ color }} className="transition-colors duration-75">
            {unit}
            {splitBy === "words" ? " " : ""}
          </motion.span>
        );
      })}
    </p>
  );
}
