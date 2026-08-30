"use client";

import ScrollTextHighlight from "@/components/ScrollTextHighlight";
import BlurCarousel from "@/components/BlurCarousel";

const gallery1 = [
  { image: { src: "/sample-1.jpg" }, title: "MAKE-UP FX SLIDE 01" },
  { image: { src: "/sample-2.jpg" }, title: "MAKE-UP FX SLIDE 02" },
  { image: { src: "/sample-3.jpg" }, title: "MAKE-UP FX SLIDE 03" },
];

const gallery2 = [
  { image: { src: "/sample-4.jpg" }, title: "CAROUSEL EDITORIAL 01" },
  { image: { src: "/sample-5.jpg" }, title: "CAROUSEL EDITORIAL 02" },
  { image: { src: "/sample-6.jpg" }, title: "CAROUSEL EDITORIAL 03" },
  { image: { src: "/sample-7.jpg" }, title: "CAROUSEL EDITORIAL 04" },
  { image: { src: "/sample-8.jpg" }, title: "CAROUSEL EDITORIAL 05" },
  { image: { src: "/sample-9.jpg" }, title: "CAROUSEL EDITORIAL 06" },
  { image: { src: "/sample-10.jpg" }, title: "CAROUSEL EDITORIAL 07" },
];

const gallery3 = [
  { image: { src: "/sample-11.jpg" }, title: "CRAFT DETAILS 01" },
  { image: { src: "/sample-12.jpg" }, title: "CRAFT DETAILS 02" },
  { image: { src: "/sample-13.jpg" }, title: "CRAFT DETAILS 03" },
];

export default function SectionBeautyFX() {
  const leadStatement =
    "В соцсетях такой сложный крафт нужно продавать через эмоции, детализацию и гордость за ручной труд. Ниже — работы по оформлению слайдов карусели для соцсетей гримера.";

  return (
    <section id="beauty-fx" className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
            SECTION 02 // SMM & BRAND IDENTITY
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
            MAKE-UP & BEAUTY FX ARTIST
          </h2>
          <p className="text-lg md:text-2xl font-display text-[#475569]">
            УПАКОВКА ПОРТФОЛИО ДЛЯ BEAUTY & FX ИНДУСТРИИ
          </p>
        </div>

        {/* Lead Statement with ScrollTextHighlight */}
        <div className="p-8 md:p-12 border border-[#E2E7ED] bg-[#FFFFFF]">
          <ScrollTextHighlight
            text={leadStatement}
            dimColor="#94A3B8"
            highlightColor="#0A0D12"
            splitBy="words"
          />
        </div>

        {/* 3x BlurCarousel Instances Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
              GALLERY 01 // 3 SLIDES
            </div>
            <BlurCarousel slides={gallery1} cardWidth={400} cardHeight={480} blurAmount={40} tilt={45} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
              GALLERY 02 // 7 SLIDES
            </div>
            <BlurCarousel slides={gallery2} cardWidth={400} cardHeight={480} blurAmount={40} tilt={45} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase">
              GALLERY 03 // 3 SLIDES
            </div>
            <BlurCarousel slides={gallery3} cardWidth={400} cardHeight={480} blurAmount={40} tilt={45} />
          </div>
        </div>
      </div>
    </section>
  );
}
