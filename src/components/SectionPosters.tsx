"use client";

import MagneticCarousel from "@/components/MagneticCarousel";

const posterImages = [
  { src: "/sample-1.jpg" },
  { src: "/sample-2.jpg" },
  { src: "/sample-3.jpg" },
  { src: "/sample-4.jpg" },
  { src: "/sample-5.jpg" },
  { src: "/sample-6.jpg" },
];

export default function SectionPosters() {
  return (
    <section id="posters" className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
            SECTION 04 // NEURO-CINEMATIC POSTER DESIGN
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
            POSTER DESIGN & EDITORIAL PRINT
          </h2>
          <p className="text-lg md:text-2xl font-display text-[#475569]">
            MACOS DOCK-STYLE PROXIMITY MAGNIFICATION
          </p>
        </div>

        {/* MagneticCarousel Component */}
        <div className="border border-[#E2E7ED] bg-[#FFFFFF] p-8 shadow-xs">
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-6 uppercase text-center">
            HOVER TO MAGNIFY // CLICK BAR TO EXPAND (600X600PX)
          </div>
          <MagneticCarousel images={posterImages} />
        </div>
      </div>
    </section>
  );
}
