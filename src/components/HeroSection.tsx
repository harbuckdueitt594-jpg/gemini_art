"use client";

import { useEffect, useState } from "react";
import BlurReveal from "@/components/BlurReveal";

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC+3 (MSK)
      const mskTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 3 * 3600000);
      const hours = mskTime.getHours().toString().padStart(2, "0");
      const minutes = mskTime.getMinutes().toString().padStart(2, "0");
      const seconds = mskTime.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds} MSK`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between border-b border-[#E2E7ED] bg-[#F6F8FA] overflow-hidden">
      {/* 16:9 Hero Container with BlurReveal */}
      <div className="absolute inset-0 w-full h-full z-0">
        <BlurReveal
          image={{
            src: "/Man_turning_head_motion_blur_202608052201.jpeg",
            alt: "Chernikov Digital Portfolio Hero",
          }}
          size={160}
          rounding={0}
          blur={8}
          ring={true}
          ringOptions={{ icon: true, color: "rgba(10,13,18,0.9)" }}
          intro={true}
          introDuration={2.0}
        />
      </div>

      {/* Root Navigation Header & Metadata */}
      <header className="relative z-10 w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs md:text-sm font-mono tracking-widest text-[#0A0D12] border-b border-[#E2E7ED]/50 bg-[#F6F8FA]/80 backdrop-blur-md">
        <div className="font-bold uppercase tracking-wider">
          CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING
        </div>
        <div className="flex items-center gap-6 text-[#475569]">
          <span>TIME-TO-MARKET REDUCTION 3–5X</span>
          <span className="hidden md:inline">|</span>
          <span className="text-[#0A0D12] font-semibold">ST. PETERSBURG / BRYANSK</span>
        </div>
      </header>

      {/* Center Content Placeholder */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none p-8">
        <div className="text-center max-w-2xl bg-[#FFFFFF]/80 backdrop-blur-md border border-[#E2E7ED] p-6 md:p-8 rounded-none shadow-sm pointer-events-auto">
          <p className="text-xs font-mono tracking-widest text-[#94A3B8] mb-2 uppercase">AI CREATOR MANIFESTO SUMMARY</p>
          <h1 className="font-display text-2xl md:text-4xl font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9]">
            SYNTHESIZING HIGH-FASHION ART DIRECTION WITH AUTONOMOUS AI SYSTEMS
          </h1>
        </div>
      </div>

      {/* Bottom Footer Metadata */}
      <footer className="relative z-10 w-full p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#0A0D12] border-t border-[#E2E7ED]/50 bg-[#F6F8FA]/80 backdrop-blur-md items-center">
        {/* Coordinates */}
        <div className="flex flex-col gap-1 text-[#475569]">
          <div>ST. PETERSBURG: 59.9343° N | 30.3351° E</div>
          <div>BRYANSK: 53.2435° N | 34.3634° E</div>
        </div>

        {/* Categories / Archive Tags */}
        <div className="flex flex-wrap gap-3 justify-start md:justify-center text-[#475569]">
          <span className="hover:text-[#0A0D12] cursor-pointer transition-colors">DESIGN ARCHIVE</span>
          <span>•</span>
          <span className="hover:text-[#0A0D12] cursor-pointer transition-colors">BRAND SYSTEMS</span>
          <span>•</span>
          <span className="hover:text-[#0A0D12] cursor-pointer transition-colors">NEURO-CINEMATICS</span>
          <span>•</span>
          <span className="hover:text-[#0A0D12] cursor-pointer transition-colors">AI AGENTS</span>
        </div>

        {/* Live Status & Clock */}
        <div className="flex items-center justify-start md:justify-end gap-4">
          <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#E2E7ED] px-3 py-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0A0D12] animate-pulse" />
            <span className="font-bold tracking-widest text-[#0A0D12]">{time || "21:43:45 MSK"}</span>
          </div>
          <div className="bg-[#EDF1F5] border border-[#E2E7ED] px-3 py-1.5 text-[#475569] font-medium">
            AVAILABLE FOR Q2/Q3
          </div>
        </div>
      </footer>
    </section>
  );
}
