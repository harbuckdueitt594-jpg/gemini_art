import React from 'react';

export default function PhoneMockup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[9/19.5] w-[300px] overflow-hidden rounded-[3.5rem] border-[12px] border-[#18181b] bg-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_0_0_2px_#3f3f46,inset_0_0_0_8px_#000] ${className}`}>
      <div className="absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-black z-20"></div>
      {children}
    </div>
  );
}
