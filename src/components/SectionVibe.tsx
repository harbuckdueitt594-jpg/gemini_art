"use client";

import { motion } from "framer-motion";

export default function SectionVibe() {
  return (
    <section id="vibe" className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        {/* Header */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
            SECTION 05 // VIBE-CODING & RAPID WEB DEVELOPMENT
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
            EIDOS-STUDIO.RU
          </h2>
          <p className="text-lg md:text-2xl font-display text-[#475569]">
            ЗАПУСК САЙТА ПОД КЛЮЧ ЗА 7 ДНЕЙ // TIME-TO-MARKET REDUCTION 3X
          </p>
        </div>

        {/* Laptop Mockup Card */}
        <div className="p-8 md:p-12 border border-[#E2E7ED] bg-[#FFFFFF] shadow-xs flex flex-col items-center">
          <motion.div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `rotateX(${-y / 50}deg) rotateY(${x / 50}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
            }}
            style={{ transition: "transform 0.1s ease-out" }}
            className="laptop-mockup w-full max-w-4xl bg-[#EDF1F5] flex items-center justify-center border border-[#CBD5E1]"
          >
            <div className="font-display text-2xl md:text-4xl font-bold text-[#0A0D12] uppercase tracking-tighter">
              EIDOS-STUDIO.RU
            </div>
          </motion.div>

          {/* Lighthouse 100/100 Metrics Badge */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-[#E2E7ED] pt-6 w-full max-w-4xl">
            <div className="flex items-center gap-2 bg-[#EDF1F5] border border-[#E2E7ED] px-4 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A0D12]" />
              <span className="font-mono text-xs font-bold text-[#0A0D12]">PERFORMANCE: 100/100</span>
            </div>
            <div className="flex items-center gap-2 bg-[#EDF1F5] border border-[#E2E7ED] px-4 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A0D12]" />
              <span className="font-mono text-xs font-bold text-[#0A0D12]">ACCESSIBILITY: 100/100</span>
            </div>
            <div className="flex items-center gap-2 bg-[#EDF1F5] border border-[#E2E7ED] px-4 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A0D12]" />
              <span className="font-mono text-xs font-bold text-[#0A0D12]">SEO: 100/100</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-[#E2E7ED] bg-[#FFFFFF] flex flex-col gap-4">
            <h4 className="font-display text-xl font-bold text-[#0A0D12] uppercase tracking-tight">
              КАК БЫЛ РЕАЛИЗОВАН ПРОЕКТ
            </h4>
            <ul className="list-disc pl-5 space-y-2 font-sans text-base text-[#475569]">
              <li>Отказ от раздутых корпоративных процессов в пользу agility.</li>
              <li>Полное создание UI/UX с помощью ИИ и ручной доводки.</li>
              <li>Скорость и оптимизация: 100/100 в Lighthouse.</li>
            </ul>
          </div>

          <div className="p-8 border border-[#E2E7ED] bg-[#FFFFFF] flex flex-col justify-between gap-4">
            <h4 className="font-display text-xl font-bold text-[#0A0D12] uppercase tracking-tight">
              БИЗНЕС-РЕЗУЛЬТАТ
            </h4>
            <p className="font-sans text-base text-[#475569]">
              Живой действующий сайт eidos-studio.ru, созданный одним человеком с сокращением Time-to-Market в 3 раза.
            </p>
            <div className="font-mono text-xs text-[#94A3B8] uppercase">
              PRODUCTION READY // NEXT.JS + TAILWIND
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
