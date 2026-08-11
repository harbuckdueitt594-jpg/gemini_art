"use client";

import React, { useState, useEffect } from 'react';


interface TerminalMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function TerminalMockup({ children, className = "" }: TerminalMockupProps) {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`backdrop-blur-[12px] bg-[#1A1D20]/80 border border-white/10 rounded-2xl shadow-2xl font-mono text-sm overflow-hidden flex flex-col ${className}`}>
      {/* Top Bar */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_4px_rgba(255,95,86,0.3)]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_4px_rgba(255,189,46,0.3)]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_4px_rgba(39,201,63,0.3)]" />
        <div className="mx-auto text-xs font-semibold text-white/40 tracking-wider">
          kai_agent — bash
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 relative flex-1 text-[#EAECEE]">
        {children}
        <span
          className="inline-block w-2 h-4 bg-[#00FF9D] ml-1 align-middle opacity-80"
          style={{ opacity: cursorVisible ? 0.8 : 0 }}
        />
      </div>
    </div>
  );
}
