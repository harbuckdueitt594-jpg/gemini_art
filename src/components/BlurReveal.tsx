"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

export interface BlurRevealProps {
  image?: {
    src: string;
    alt: string;
  };
  size?: number; // edge length of the lens (default 160)
  rounding?: number; // 0 to 20
  blur?: number; // blur radius in px (default 8)
  ring?: boolean; // draws outline around lens (default true)
  ringOptions?: {
    icon?: boolean;
    color?: string;
  };
  intro?: boolean; // when on, starts wider than frame and shrinks (default true)
  introDuration?: number; // duration in seconds (default 2)
  children?: React.ReactNode;
  className?: string;
}

export default function BlurReveal({
  image = {
    src: "/Man_turning_head_motion_blur_202608052201.jpeg",
    alt: "Background Creative Direction",
  },
  size = 160,
  rounding = 0,
  blur = 8,
  ring = true,
  ringOptions = {
    icon: true,
    color: "rgba(255,255,255,0.95)",
  },
  intro = true,
  introDuration = 2,
  children,
  className = "",
}: BlurRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pointer & Motion State
  const pointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isPointerInside = useRef<boolean>(false);
  const targetPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Intro progress state (0 to 1)
  const introProgress = useRef<number>(intro ? 0 : 1);
  const startTimeRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Render State for React
  const [lensStyle, setLensStyle] = useState<React.CSSProperties>({});
  const [sharpContentStyle, setSharpContentStyle] = useState<React.CSSProperties>({});
  const [blurAmount, setBlurAmount] = useState<number>(intro ? 0 : blur);

  const updateFrame = useCallback(
    (timestamp: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Handle frame-time delta clamped to 50ms (for background tabs)
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
        startTimeRef.current = timestamp;
      }
      const rawDelta = (timestamp - lastTimeRef.current) / 1000;
      const delta = Math.min(rawDelta, 0.05); // clamp to 50ms
      lastTimeRef.current = timestamp;

      // Update Intro progress if intro is true
      if (intro && introProgress.current < 1) {
        const elapsed = (timestamp - (startTimeRef.current || timestamp)) / 1000;
        const progress = Math.min(elapsed / introDuration, 1);
        // Cubic ease out curve
        introProgress.current = 1 - Math.pow(1 - progress, 3);
        setBlurAmount(blur * introProgress.current);
      } else {
        setBlurAmount(blur);
      }

      // Calculate target position (pointer or smooth ease back to center)
      if (isPointerInside.current) {
        targetPos.current = { ...pointerPos.current };
      } else {
        // Ease back to center
        targetPos.current = { x: centerX, y: centerY };
      }

      // Lens sits directly on target or smoothly transitions when easing back
      const lerpSpeed = isPointerInside.current ? 1 : Math.min(10 * delta, 1);
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpSpeed;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpSpeed;

      // Calculate Lens Size based on intro progress
      // On first paint, starts wider than frame diagonal
      const frameDiagonal = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
      const startSize = frameDiagonal * 1.2;
      const currentSize = startSize + (size - startSize) * introProgress.current;

      // Calculate Corner Radius (stored as fraction of half the lens, top of range 20 = true circle)
      const maxRounding = currentSize / 2;
      const currentRadius = (Math.min(rounding, 20) / 20) * maxRounding;

      const posX = currentPos.current.x;
      const posY = currentPos.current.y;

      setLensStyle({
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        transform: `translate3d(${posX - currentSize / 2}px, ${posY - currentSize / 2}px, 0)`,
        borderRadius: `${currentRadius}px`,
      });

      // Counter-translate sharp content inside lens so it registers exactly with background
      setSharpContentStyle({
        transform: `translate3d(${-posX + currentSize / 2}px, ${-posY + currentSize / 2}px, 0)`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });
    },
    [blur, intro, introDuration, rounding, size]
  );

  useEffect(() => {
    let animId: number;

    const loop = (timestamp: number) => {
      updateFrame(timestamp);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [updateFrame]);

  // Handle Mouse Events
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    pointerPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isPointerInside.current = true;
  };

  const handleMouseLeave = () => {
    isPointerInside.current = false;
  };

  const ringColor = ringOptions?.color || "rgba(255,255,255,0.95)";
  const showIcon = ring && ringOptions?.icon !== false;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
    >
      {/* 1. Blurred Backdrop Layer (drawn at 108% and centered to avoid edge seam) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          width: "108%",
          height: "108%",
          top: "-4%",
          left: "-4%",
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${blurAmount}px)`,
          transform: "scale(1)",
        }}
      />

      {/* Backdrop Content Overlay (blurred children if any) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          filter: `blur(${blurAmount}px)`,
        }}
      >
        {children}
      </div>

      {/* 2. Lens Layer (holds sharp image and sharp content) */}
      <div
        className="absolute top-0 left-0 z-20 overflow-hidden pointer-events-none"
        style={{
          ...lensStyle,
          boxShadow: ring ? `0 0 0 1px ${ringColor}` : "none",
        }}
      >
        {/* Sharp Background Layer Counter-Translated */}
        <div
          className="absolute top-0 left-0"
          style={{
            ...sharpContentStyle,
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Sharp Children Content Counter-Translated */}
        <div className="absolute top-0 left-0" style={sharpContentStyle}>
          {children}
        </div>

        {/* Center Plus Icon if ring and icon are enabled */}
        {showIcon && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="6" y1="0" x2="6" y2="12" stroke={ringColor} strokeWidth="1.5" />
              <line x1="0" y1="6" x2="12" y2="6" stroke={ringColor} strokeWidth="1.5" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
