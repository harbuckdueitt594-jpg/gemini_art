"use client";

import ScrambleText from "@/components/ScrambleText";
import ScrollTextHighlight from "@/components/ScrollTextHighlight";
import CoverflowGallery from "@/components/CoverflowGallery";

const eidosSlides = [
  { image: { src: "/sample-1.jpg" }, title: "EIDOS BRAND SYSTEM 01" },
  { image: { src: "/sample-2.jpg" }, title: "EIDOS BRAND SYSTEM 02" },
  { image: { src: "/sample-3.jpg" }, title: "EIDOS BRAND SYSTEM 03" },
  { image: { src: "/sample-4.jpg" }, title: "EIDOS BRAND SYSTEM 04" },
  { image: { src: "/sample-5.jpg" }, title: "EIDOS BRAND SYSTEM 05" },
];

export default function SectionEidos() {
  const leadStatement =
    "При масштабировании бизнеса возникла необходимость сменить любительский визуал на премиальную, системную айдентику. Задача - отстроиться от конкурентов с банальными «массажными штампами» (свечи, лотосы, бежевые стоки).";

  const col1Text =
    "Построение единого визуального языка: от контента в соцсетях до печатных носителей. Чистая эстетика, типографика, фокус на профессиональной реабилитации.";

  const col2Text =
    "100% единый стиль во всех точках касания (SMM, печать, веб). Рост вовлеченности и формирование образа премиального пространства.";

  return (
    <section id="smm-brand" className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Header Metadata */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
            SECTION 01 // SMM & BRAND IDENTITY
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
            EIDOS MASSAGE STUDIO
          </h2>
          <p className="text-lg md:text-2xl font-display text-[#475569]">
            ОТ КОМНАТЫ К СВОЕМУ ПРЕМИАЛЬНОМУ ПРОСТРАНСТВУ
          </p>
        </div>

        {/* Lead Statement with ScrambleText */}
        <div className="p-8 md:p-12 border border-[#E2E7ED] bg-[#FFFFFF] shadow-xs">
          <ScrambleText
            words={leadStatement}
            tag="h3"
            font={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              lineHeight: "1.3",
              textAlign: "left",
            }}
            hoverAnimation={{
              type: "diffusion",
              radius: 2,
            }}
            color="#0A0D12"
          />
        </div>

        {/* Editorial Two-Column Grid with ScrollTextHighlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12 border border-[#E2E7ED] bg-[#FFFFFF]">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 border-b md:border-b-0 md:border-r border-[#E2E7ED] pb-8 md:pb-0 md:pr-12">
            <h4 className="font-display text-xl font-bold text-[#0A0D12] uppercase tracking-tight">
              Стратегия и решение:
            </h4>
            <ScrollTextHighlight
              text={col1Text}
              dimColor="#94A3B8"
              highlightColor="#0A0D12"
              splitBy="words"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl font-bold text-[#0A0D12] uppercase tracking-tight">
              Результат и бизнес-эффект:
            </h4>
            <ScrollTextHighlight
              text={col2Text}
              dimColor="#94A3B8"
              highlightColor="#0A0D12"
              splitBy="words"
            />
          </div>
        </div>

        {/* Media Component: CoverflowGallery */}
        <div className="border border-[#E2E7ED] bg-[#FFFFFF] p-6 shadow-xs">
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-6 uppercase">
            BRAND SYSTEM VISUAL ARCHIVE
          </div>
          <CoverflowGallery slides={eidosSlides} cardWidth={380} cardHeight={380} />
        </div>
      </div>
    </section>
  );
}
