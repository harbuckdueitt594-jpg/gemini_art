"use client";

import ScrollTextHighlight from "@/components/ScrollTextHighlight";
import HoverImageReveal from "@/components/HoverImageReveal";

const ecomItems = {
  item1: { text: "NEW SEASON DROP", image: { src: "/sample-1.jpg" } },
  item2: { text: "ESSENTIAL COLLECTION", image: { src: "/sample-2.jpg" } },
  item3: { text: "SUMMER EDITION", image: { src: "/sample-3.jpg" } },
  item4: { text: "STREET ICONS", image: { src: "/sample-4.jpg" } },
  item5: { text: "PREMIUM DENIM", image: { src: "/sample-5.jpg" } },
  item6: { text: "ARCHIVE PIECES", image: { src: "/sample-6.jpg" } },
};

export default function SectionNeuroEcom() {
  const leadStatement =
    "Пока маркетплейсы и бренды соревнуются в кричащих цветах и визуальном шуме, я создаю сдержанные, глубокие цифровые среды для продуктов. С помощью сложного промпт-инжиниринга я генерирую фотореалистичные сцены (макро, студийный свет, природные локации), заменяя клиентам дорогостоящие предметные фотосессии.";

  return (
    <section id="neuro" className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
            SECTION 03 // NEURO-CINEMATIC E-COM
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
            CINEMATIC PRODUCTION
          </h2>
          <p className="text-lg md:text-2xl font-display text-[#475569]">
            БЕЗ МИЛЛИОННЫХ БЮДЖЕТОВ НА СЪЕМКИ
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

        {/* Interactive HoverImageReveal */}
        <div className="border border-[#E2E7ED] bg-[#FFFFFF] p-8 md:p-12 shadow-xs">
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-8 uppercase text-center">
            INTERACTIVE REEL // HOVER TO REVEAL SAMPLES
          </div>
          <HoverImageReveal items={ecomItems} />
        </div>
      </div>
    </section>
  );
}
