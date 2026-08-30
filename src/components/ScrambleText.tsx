"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export interface ScrambleTextProps {
  words: string;
  font?: {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: string | number;
    lineHeight?: string;
    letterSpacing?: string;
    textAlign?: "center" | "left" | "right";
  };
  tag?: "h1" | "h2" | "h3" | "p";
  enterAnimation?: {
    mode?: "oneLine" | "multiLine";
    restState?: "solid";
    replay?: boolean;
    position?: "above" | "center";
    scrambleIntensity?: number; // 100
    ease?: { type?: string; stiffness?: number; damping?: number; mass?: number; duration?: number; ease?: string };
  };
  hoverAnimation?: {
    type?: "diffusion" | "wave";
    lines?: "oneLine" | "all";
    radius?: number; // 2
    collapse?: boolean; // false
    collapseTime?: number; // 1
    glitchChars?: string; // "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    glitchShuffle?: boolean; // true
    flickerEnabled?: boolean; // false
    flickerColor?: string; // "#0A0D12"
    flickerIntensity?: number;
    flickerSpeed?: number;
  };
  color?: string; // "#0A0D12"
}

const DEFAULT_GLITCH_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function ScrambleText({
  words,
  font,
  tag = "h2",
  enterAnimation,
  hoverAnimation,
  color = "#0A0D12",
}: ScrambleTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: !enterAnimation?.replay, margin: "-10%" });
  const [displayText, setDisplayText] = useState<string>(words);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const glitchChars = hoverAnimation?.glitchChars || DEFAULT_GLITCH_CHARS;
  const radius = hoverAnimation?.radius ?? 2;

  // Viewport Scramble Reveal
  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    const totalIterations = words.length;

    const interval = setInterval(() => {
      setDisplayText(() =>
        words
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) {
              return words[idx];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );

      iteration += 1.5;

      if (iteration >= totalIterations) {
        setDisplayText(words);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isInView, words, glitchChars]);

  // Hover Diffusion / Scramble Effect
  useEffect(() => {
    if (hoverIndex === null) {
      setDisplayText(words);
      return;
    }

    let frameId: number;
    const animateHover = () => {
      setDisplayText(() =>
        words
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            const dist = Math.abs(idx - hoverIndex);
            if (dist <= radius) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join("")
      );
      frameId = requestAnimationFrame(animateHover);
    };

    frameId = requestAnimationFrame(animateHover);
    return () => cancelAnimationFrame(frameId);
  }, [hoverIndex, words, glitchChars, radius]);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, relativeX / rect.width));
    const charIndex = Math.floor(ratio * words.length);
    setHoverIndex(charIndex);
  };

  const handleMouseLeave = () => setHoverIndex(null);

  const fontStyle: React.CSSProperties = {
    fontFamily: font?.fontFamily || "var(--font-syne), sans-serif",
    fontWeight: font?.fontWeight || 500,
    fontSize: font?.fontSize || "inherit",
    lineHeight: font?.lineHeight || "1.1",
    letterSpacing: font?.letterSpacing || "-0.03em",
    textAlign: font?.textAlign || "center",
    color: color,
  };

  const TagName = tag;

  return (
    <TagName
      ref={containerRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={fontStyle}
      className="cursor-default select-none transition-colors"
    >
      {displayText}
    </TagName>
  );
}
