"use client";

import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import LaptopMockup from "./LaptopMockup";
import TerminalMockup from "./TerminalMockup";
import { useEffect, useState, useRef } from "react";

export default function CaseStudies() {
  return (
    <div className="w-full bg-[#EAECEE] text-text-primary">

      {/* Case 01: EIDOS MASSAGE STUDIO */}
      <section id="case-01" className="py-32 px-8 bg-gradient-to-b from-[#EAECEE] to-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
          <div className="sticky top-24 z-40 bg-[#EAECEE]/80 backdrop-blur-md py-4 -mx-8 px-8 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none border-b border-[#1A1D20]/10 mb-8">
            <h2 className="text-sm font-mono tracking-widest text-[#1A1D20]/70 mb-2">01 / SMM & BRAND IDENTITY</h2>
            <h3 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[0.9]">EIDOS MASSAGE STUDIO</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[3/4] bg-[#D8DBDE] rounded-2xl overflow-hidden hover-physics">
              <div className="w-full h-full flex items-center justify-center font-display text-[#1A1D20]/30 object-cover">PHOTO 1</div>
            </div>
            <div className="bg-liquid-glass rounded-2xl p-8 flex flex-col justify-center text-[#1A1D20]">
              <h4 className="text-2xl font-display font-medium mb-4">The Challenge</h4>
              <p className="font-sans text-[#1A1D20]/80">При масштабировании бизнеса возникла необходимость сменить любительский визуал на премиальную, системную айдентику. Задача — отстроиться от конкурентов с банальными «массажными штампами».</p>
            </div>
            <div className="aspect-[3/4] bg-[#D8DBDE] rounded-2xl overflow-hidden hover-physics">
              <div className="w-full h-full flex items-center justify-center font-display text-[#1A1D20]/30 object-cover">PHOTO 2</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-8 auto-rows-[250px] md:auto-rows-[350px]">
             {[
               { span: "md:col-span-8", title: "IMG 1" },
               { span: "md:col-span-4", title: "IMG 2" },
               { span: "md:col-span-4 md:row-span-2", title: "IMG 3" },
               { span: "md:col-span-4", title: "IMG 4" },
               { span: "md:col-span-4", title: "IMG 5" },
               { span: "md:col-span-8", title: "IMG 6" },
               { span: "md:col-span-6", title: "IMG 7" },
               { span: "md:col-span-6", title: "IMG 8" },
             ].map((img, i) => (
               <div key={i} className={`${img.span} bg-[#D8DBDE] rounded-xl overflow-hidden hover-physics relative`}>
                 <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-[#1A1D20]/30 w-full h-full object-cover">{img.title}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case 02: MAKE-UP ARTIST LEANCA */}
      <section id="case-02" className="py-32 px-8 bg-gradient-to-b from-[#EAECEE] to-[#656A70] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
          <div className="sticky top-24 z-40 bg-[#656A70]/80 backdrop-blur-md py-4 -mx-8 px-8 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none border-b border-white/10 mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-mono tracking-widest text-[#EAECEE]/70 mb-4">02 / SMM & CONTENT DIRECTION</h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8">MAKE-UP ARTIST LEANCA</h3>
            <p className="font-sans text-xl text-[#EAECEE]/80">Разработка визуальной концепции профиля, создание высококонверсионного контента и Reels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1,2,3,4,5,6].map((idx) => (
                <div key={idx} className="aspect-[3/4] bg-[#484D53] rounded-xl overflow-hidden flex items-center justify-center font-display text-[#EAECEE]/30 hover-physics">
                   POST {idx}
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case 03: NEURO-CINEMATIC (E-commerce Phones) */}
      <section id="case-03" className="py-32 px-8 bg-[#656A70] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1 w-full max-w-md mx-auto relative group">
              <PhoneMockup className="hover-physics">
                 <div className="absolute inset-0 bg-[#484D53] flex items-center justify-center text-3xl font-display text-[#EAECEE]/50">HERO PHONE</div>
              </PhoneMockup>
              {/* Overlapping Phones */}
              <div className="absolute -bottom-10 -right-20 w-48 hidden md:block">
                 <PhoneMockup className="transform rotate-12 hover-physics shadow-2xl">
                    <div className="absolute inset-0 bg-[#333] flex items-center justify-center font-display text-[#EAECEE]/30">PHONE 2</div>
                 </PhoneMockup>
              </div>
              <div className="absolute top-20 -left-16 w-40 hidden md:block z-[-1]">
                 <PhoneMockup className="transform -rotate-6 hover-physics opacity-50 shadow-lg">
                    <div className="absolute inset-0 bg-[#222] flex items-center justify-center font-display text-[#EAECEE]/20">PHONE 3</div>
                 </PhoneMockup>
              </div>
           </div>
           <div className="flex-1 flex flex-col gap-6 sticky top-24 z-40">
              <h2 className="text-sm font-mono tracking-widest text-[#EAECEE]/70 mb-2">03 / E-COMMERCE</h2>
              <h3 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[0.9]">MOBILE EXPERIENCES</h3>
              <p className="font-sans text-xl text-[#EAECEE]/80">Конверсионные интерфейсы для мобильных платформ.</p>
           </div>
        </div>
      </section>

      {/* Case 04: POSTER DESIGN */}
      <section id="case-04" className="py-0 px-0 bg-[#656A70]">
        <div className="w-full flex flex-col relative sticky top-0">
          {[1, 2, 3, 4].map((idx) => (
             <PosterParallax key={idx} idx={idx} />
          ))}
        </div>
      </section>

      {/* Case 05: VIBE-CODING & FAST WEB */}
      <section id="case-05" className="py-32 px-8 bg-gradient-to-b from-[#656A70] to-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
          <div className="text-center sticky top-24 z-40 bg-[#EAECEE]/80 backdrop-blur-md py-4 -mx-8 px-8 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none border-b border-[#1A1D20]/10 mb-8">
            <h2 className="text-sm font-mono tracking-widest text-[#1A1D20]/70 mb-4">05 / VIBE-CODING & RAPID WEB DEVELOPMENT</h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#1A1D20]">
              EIDOS-STUDIO.RU
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#1A1D20]/80">Запуск сайта под ключ за 7 дней</p>
          </div>

          <div className="w-full relative flex flex-col items-center">
            <LaptopMockup className="w-full max-w-5xl mx-auto hover-physics">
              <div className="absolute inset-0 bg-[#1A1D20] flex items-center justify-center font-display text-4xl text-[#EAECEE]/30">EIDOS-STUDIO.RU</div>
            </LaptopMockup>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/5] bg-liquid-glass rounded-xl overflow-hidden shadow-lg hover-physics relative">
                   <div className="absolute inset-0 flex items-center justify-center font-display text-[#8C9298]">PHOTO</div>
                </div>
                <div className="bg-liquid-glass rounded-xl p-8 shadow-lg flex flex-col justify-center gap-4 text-[#1A1D20]">
                   <h4 className="text-2xl font-display font-medium mb-4">Реализация:</h4>
                   <ul className="list-disc pl-5 space-y-2 font-sans text-lg">
                      <li>Полное создание UI/UX с помощью ИИ и ручной доводки.</li>
                      <li>Скорость и оптимизация: 100/100 в Lighthouse.</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Case 06: K.A.I. INTELLIGENCE (LIVE CHAT) */}
      <section id="case-06" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 sticky top-24 z-40">
            <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-4">06 / AI SYSTEMS & CUSTOM AGENTS</h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8">K.A.I. Intelligence</h3>
            <div className="flex flex-col gap-6 text-[#1A1D20]/80 font-sans text-lg">
               <p><strong>Проект:</strong> Автономный ИИ ассистент студии.</p>
               <p><strong>Стек:</strong> Llama 3.3 / Python / Web Integration</p>
            </div>
          </div>
          <div className="w-full max-w-[400px]">
             <KAISimulation />
          </div>
        </div>
      </section>
    </div>
  );
}

function PosterParallax({ idx }: { idx: number }) {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  // Provide subtle parallax if motion is not reduced
  const yOffset = useTransform(scrollY, (v) => shouldReduceMotion ? 0 : (v * 0.15) % 100);

  return (
     <div className="w-full aspect-video bg-[#1A1D20] border-t border-[#333] flex items-center justify-center text-[#EAECEE]/30 relative overflow-hidden">
        <motion.div
           className="absolute inset-0"
           style={{ y: yOffset }}
        >
           <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#222] opacity-50 mix-blend-overlay"></div>
        </motion.div>

        {idx === 1 && (
           <div className="absolute top-16 md:top-32 left-8 md:left-24 z-10 sticky top-24">
              <h2 className="text-sm font-mono tracking-widest text-[#EAECEE]/70 mb-4">04 / NEURO-CINEMATIC E-COM & PRINT DESIGN</h2>
              <h3 className="text-4xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#EAECEE]">
                CINEMATIC PRODUCTION
              </h3>
           </div>
        )}
        <span className="font-display text-2xl z-0 absolute bottom-8 right-8">POSTER FULL BLEED {idx}</span>
     </div>
  );
}

function KAISimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);

  useEffect(() => {
    if (isInView) {
       const sequence = async () => {
          await new Promise(r => setTimeout(r, 500));
          setMessages(m => [...m, { sender: 'ai', text: "Здравствуйте. Я — Кай, интеллектуальный консьерж студии «Эйдос». Что вас беспокоит сегодня?" }]);

          await new Promise(r => setTimeout(r, 1500));
          setMessages(m => [...m, { sender: 'user', text: "Привет, часто болит спина после работы, посоветуй, на какую процедуру и к какому специалисту мне лучше записаться?" }]);

          await new Promise(r => setTimeout(r, 2000));
          setMessages(m => [...m, { sender: 'ai', text: "Мы можем предложить вам несколько вариантов... рекомендовал записаться на **Общий массаж** у мастера **Александра**." }]);
       };
       sequence();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full">
       <TerminalMockup className="h-[400px]">
          <div className="flex flex-col gap-4 overflow-y-auto pb-4 h-full">
            {messages.map((msg, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className={`max-w-[90%] p-3 rounded-lg text-sm font-mono ${msg.sender === 'user' ? 'text-[#00FF9D] self-end text-right' : 'text-[#EAECEE]/80 self-start text-left'}`}
               >
                  <span dangerouslySetInnerHTML={{ __html: msg.sender === 'user' ? `> ${msg.text}` : msg.text.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }} />
               </motion.div>
            ))}
          </div>
       </TerminalMockup>
    </div>
  );
}
