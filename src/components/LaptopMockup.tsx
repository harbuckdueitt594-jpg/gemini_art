import React from 'react';

export default function LaptopMockup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-4xl flex flex-col items-center ${className}`}>
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[2rem] border-[10px] border-[#18181b] bg-black shadow-2xl">
        {children}
      </div>
      <div className="h-4 w-[105%] rounded-b-2xl bg-[#27272a] shadow-xl z-10 -mt-1"></div>
    </div>
  );
}
