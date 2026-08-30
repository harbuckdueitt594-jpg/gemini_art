"use client";

import { useEffect, useRef, useState } from "react";

export interface BlurRevealProps {
  image: { src: string; alt: string };
  size?: number; // default: 160
  rounding?: number; // 0 (square) to 20 (circle), default: 0
  blur?: number; // default: 8
  ring?: boolean; // default: true (hairline outline)
  ringOptions?: { icon: boolean; color: string }; // default: { icon: true, color: "rgba(10,13,18,0.9)" }
  intro?: boolean; // default: true
  introDuration?: number; // default: 2.0
}

export default function BlurReveal({
  image,
  size = 160,
  rounding = 0,
  blur = 8,
  ring = true,
  ringOptions = { icon: true, color: "rgba(10,13,18,0.9)" },
  intro = true,
  introDuration = 2.0,
}: BlurRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 }); // relative to container center
  const [containerDim, setContainerDim] = useState({ width: 0, height: 0 });
  const [currentBlur, setCurrentBlur] = useState(intro ? 0 : blur);
  const [currentSize, setCurrentSize] = useState(size);

  const lastTimeRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const targetLensPos = useRef({ x: 0, y: 0 });
  const currentLensPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDim({ width: rect.width, height: rect.height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!containerDim.width || !containerDim.height) return;

    const diag = Math.sqrt(containerDim.width ** 2 + containerDim.height ** 2);
    const initialSize = intro ? diag : size;
    let animFrameId: number;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
        startTimeRef.current = time;
      }

      const rawDelta = time - lastTimeRef.current;
      const delta = Math.min(rawDelta, 50); // Clamp frame-time delta to 50ms for tab throttling
      lastTimeRef.current = time;

      // Handle Intro Sequence
      if (intro && startTimeRef.current !== null) {
        const elapsed = (time - startTimeRef.current) / 1000;
        const progress = Math.min(elapsed / introDuration, 1);
        // cubic easeOut
        const ease = 1 - Math.pow(1 - progress, 3);

        const newSize = initialSize - (initialSize - size) * ease;
        const newBlur = blur * ease;

        setCurrentSize(newSize);
        setCurrentBlur(newBlur);
      } else {
        setCurrentSize(size);
        setCurrentBlur(blur);
      }

      // Smooth return to center when not hovered, zero lag when hovered
      if (!isHovered) {
        targetLensPos.current = { x: 0, y: 0 };
        const lerpFactor = 1 - Math.exp(-0.01 * delta);
        currentLensPos.current.x += (targetLensPos.current.x - currentLensPos.current.x) * lerpFactor;
        currentLensPos.current.y += (targetLensPos.current.y - currentLensPos.current.y) * lerpFactor;
      } else {
        currentLensPos.current.x = targetLensPos.current.x;
        currentLensPos.current.y = targetLensPos.current.y;
      }

      setLensPos({ x: currentLensPos.current.x, y: currentLensPos.current.y });

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId);
  }, [containerDim, intro, introDuration, size, blur, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    targetLensPos.current = {
      x: mouseX - centerX,
      y: mouseY - centerY,
    };
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Calculate lens absolute pixel coordinates relative to container top-left
  const lensCenterX = containerDim.width / 2 + lensPos.x;
  const lensCenterY = containerDim.height / 2 + lensPos.y;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full overflow-hidden select-none bg-[#F6F8FA]"
    >
      {/* Blurred Backdrop - scaled 108% */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: "scale(1.08)",
          transformOrigin: "center center",
          filter: `blur(${currentBlur}px)`,
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </div>

      {/* Sharp Lens Window */}
      {containerDim.width > 0 && (
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            width: `${currentSize}px`,
            height: `${currentSize}px`,
            left: `${lensCenterX - currentSize / 2}px`,
            top: `${lensCenterY - currentSize / 2}px`,
            borderRadius: `${rounding}%`,
            boxShadow: ring
              ? `0 0 0 1px ${ringOptions?.color || "rgba(10,13,18,0.9)"}, 0 20px 40px rgba(0,0,0,0.15)`
              : "none",
          }}
        >
          {/* Counter-translated image inside lens */}
          <div
            className="absolute"
            style={{
              width: `${containerDim.width}px`,
              height: `${containerDim.height}px`,
              left: `${-(lensCenterX - currentSize / 2)}px`,
              top: `${-(lensCenterY - currentSize / 2)}px`,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover contrast-100"
            />
          </div>

          {/* Optional lens center icon */}
          {ring && ringOptions?.icon && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full border border-[#0A0D12]/80 bg-[#0A0D12]/20" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
