import React from 'react';

interface LaptopMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function LaptopMockup({ children, className = "" }: LaptopMockupProps) {
  return (
    <div
      className={`laptop-mockup relative overflow-hidden will-change-transform transform-translate-z-0 ${className}`}
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      {/* Top camera/sensor area (subtle) */}
      <div className="absolute top-1 inset-x-0 h-4 flex justify-center z-50">
        <div className="w-2 h-2 rounded-full bg-[#222]" />
      </div>

      <div
        className="w-full h-full relative"
        style={{
          maskImage: 'linear-gradient(white, white)',
          WebkitMaskImage: 'linear-gradient(white, white)',
          borderTopLeftRadius: 'calc(1.5rem - 8px)',
          borderTopRightRadius: 'calc(1.5rem - 8px)'
        }}
      >
        {children}
      </div>
    </div>
  );
}
