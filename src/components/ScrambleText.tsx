import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface ScrambleTextProps {
  words: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  color?: string;
  dimColor?: string;
  glitchChars?: string;
  scrambleSpeed?: number;
  hoverEffect?: "diffusion" | "wave" | "none";
  radius?: number;
  autoStart?: boolean;
}

const DEFAULT_GLITCH_CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function ScrambleText({
  words,
  className = "",
  tag = "p",
  color = "inherit",
  glitchChars = DEFAULT_GLITCH_CHARS,
  scrambleSpeed = 30,
  hoverEffect = "diffusion",
  radius = 3,
  autoStart = true,
}: ScrambleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const lines = words.split("\n");

  const Tag = tag as any;

  return (
    <div ref={containerRef} className={`inline-block ${className}`} style={{ color }}>
      {lines.map((lineText, lineIdx) => (
        <ScrambleLine
          key={lineIdx}
          lineText={lineText}
          Tag={Tag}
          isInView={isInView && autoStart}
          glitchChars={glitchChars}
          scrambleSpeed={scrambleSpeed}
          hoverEffect={hoverEffect}
          radius={radius}
        />
      ))}
    </div>
  );
}

function ScrambleLine({
  lineText,
  Tag,
  isInView,
  glitchChars,
  scrambleSpeed,
  hoverEffect,
  radius,
}: {
  lineText: string;
  Tag: any;
  isInView: boolean;
  glitchChars: string;
  scrambleSpeed: number;
  hoverEffect: string;
  radius: number;
}) {
  const [displayText, setDisplayText] = useState<string[]>(() =>
    lineText.split("").map((c) => (c === " " ? " " : glitchChars[Math.floor(Math.random() * glitchChars.length)]))
  );

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverGlitches, setHoverGlitches] = useState<Record<number, string>>({});
  const isResolvedRef = useRef(false);

  // Enter animation: reveal character by character
  useEffect(() => {
    if (!isInView) return;

    const chars = lineText.split("");
    const totalChars = chars.length;
    let frame = 0;
    const maxFramesPerChar = 12;
    const totalFrames = totalChars * 2 + maxFramesPerChar;

    const interval = setInterval(() => {
      frame++;
      setDisplayText((prev) => {
        return chars.map((char, idx) => {
          if (char === " ") return " ";
          // Calculate when this character should resolve
          const charResolveFrame = idx * 2 + maxFramesPerChar;
          if (frame >= charResolveFrame) {
            return char;
          }
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        });
      });

      if (frame >= totalFrames) {
        clearInterval(interval);
        isResolvedRef.current = true;
        setDisplayText(lineText.split(""));
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [isInView, lineText, glitchChars, scrambleSpeed]);

  // Hover effect handler
  const handleCharHover = useCallback(
    (charIndex: number) => {
      if (hoverEffect === "none") return;
      setHoveredIndex(charIndex);

      const newGlitches: Record<number, string> = {};
      const chars = lineText.split("");

      chars.forEach((_, idx) => {
        const dist = Math.abs(idx - charIndex);
        if (dist <= radius) {
          if (hoverEffect === "diffusion") {
            const prob = 1 - dist / (radius + 1);
            if (Math.random() < prob) {
              newGlitches[idx] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
          } else if (hoverEffect === "wave") {
            newGlitches[idx] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
        }
      });

      setHoverGlitches(newGlitches);

      setTimeout(() => {
        setHoverGlitches({});
        setHoveredIndex(null);
      }, 300);
    },
    [hoverEffect, radius, lineText, glitchChars]
  );

  return (
    <Tag className="leading-tight tracking-tight">
      {displayText.map((char, idx) => {
        const isHoverGlitched = hoverGlitches[idx] !== undefined;
        const charToRender = isHoverGlitched ? hoverGlitches[idx] : char;

        return (
          <motion.span
            key={idx}
            onMouseEnter={() => handleCharHover(idx)}
            className="inline-block transition-colors duration-150 cursor-default select-none"
            style={{
              color: isHoverGlitched ? "#00FF9D" : "inherit",
              opacity: charToRender === " " ? 1 : 1,
            }}
          >
            {charToRender === " " ? "\u00A0" : charToRender}
          </motion.span>
        );
      })}
    </Tag>
  );
}
