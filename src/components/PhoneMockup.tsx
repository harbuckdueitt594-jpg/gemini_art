import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`phone-mockup relative overflow-hidden will-change-transform transform-translate-z-0 ${className}`}
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      <div className="phone-notch">
        <div className="phone-notch-inner relative">
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 border border-white/10" />
        </div>
      </div>
      <div
        className="w-full h-full relative"
        style={{
          maskImage: 'linear-gradient(white, white)',
          WebkitMaskImage: 'linear-gradient(white, white)',
          borderRadius: 'calc(3rem - 10px)' // Slightly less than outer border radius
        }}
      >
        {children}
      </div>
    </div>
  );
}
