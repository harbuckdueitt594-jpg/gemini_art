"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PhoneMockup from "./PhoneMockup";
import LaptopMockup from "./LaptopMockup";

export default function CaseStudies() {
  return (
    <div className="w-full bg-[#08080A] text-text-primary">
            {/* Case 01: EIDOS MASSAGE STUDIO */}
      <section id="smm-brand" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-4">01 / SMM & BRAND IDENTITY</h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-none uppercase mb-4">
              EIDOS MASSAGE STUDIO
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#1A1D20]/70 max-w-3xl">От комнаты к своему пространству</p>
          </div>

          <div className="flex flex-col gap-16">
            {/* Top Row (3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] bg-[#D8DBDE] rounded-xl overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center font-display text-[#8C9298]">PHOTO 1</div>
              </div>
              <div className="bg-liquid-glass rounded-xl p-8 flex flex-col justify-center shadow-lg">
                <p className="text-lg md:text-xl font-sans text-[#1A1D20] text-left">
                  При масштабировании бизнеса возникла необходимость сменить любительский визуал на премиальную, системную айдентику. Задача — отстроиться от конкурентов с банальными «массажными штампами» (свечи, лотосы, бежевые стоки).
                </p>
              </div>
              <div className="aspect-[3/4] bg-[#D8DBDE] rounded-xl overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center font-display text-[#8C9298]">PHOTO 2</div>
              </div>
            </div>

            {/* Middle Text Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 md:pl-4">
                <h4 className="text-2xl md:text-4xl font-display font-light text-[#1A1D20] text-left">Стратегия и решение:</h4>
              </div>
              <div className="md:col-span-6 md:col-start-6 md:pr-4">
                <p className="text-lg font-sans text-[#1A1D20]/80 text-left">
                  Построение единого визуального языка: от контента в соцсетях до печатных носителей. Чистая эстетика, типографика, фокус на профессиональной реабилитации.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 md:pl-4">
                <h4 className="text-2xl md:text-4xl font-display font-light text-[#1A1D20] text-left">Результат и бизнес-эффект:</h4>
              </div>
              <div className="md:col-span-6 md:col-start-6 md:pr-4">
                <p className="text-lg font-sans text-[#1A1D20]/80 text-left">
                  100% единый стиль во всех точках касания (SMM, печать, веб). Рост вовлеченности и формирование образа премиального пространства.
                </p>
              </div>
            </div>

            {/* Bottom Collage (Masonry of 8 photos) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mt-8">
              {/* Asymmetric 12-column distribution for 8 images */}
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-video md:col-span-7">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 1</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-[3/4] md:col-span-5 md:mt-12">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 2</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-square md:col-span-4">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 3</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-video md:col-span-8">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 4</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-[4/3] md:col-span-6">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 5</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-[3/4] md:col-span-6 md:mt-8">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 6</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-video md:col-span-5 md:-mt-8">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 7</div>
              </div>
              <div className="bg-[#D8DBDE] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-[16/9] md:col-span-7">
                 <div className="w-full h-full flex items-center justify-center font-display text-[#8C9298] object-cover">IMG 8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 02: MAKE-UP ARTIST LEANCA */}
      <section id="beauty-fx" className="py-32 px-8 bg-gradient-to-b from-[#EAECEE] to-[#656A70] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-mono tracking-widest text-[#1A1D20]/70 mb-4">02 / SMM & BRAND IDENTITY</h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-none uppercase mb-4 text-[#1A1D20]">
              MAKE-UP ARTIST
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#1A1D20]/80 max-w-3xl">УПАКОВКА ПОРТФОЛИО ДЛЯ BEAUTY & FX ИНДУСТРИИ</p>
          </div>

          <div className="w-full flex justify-center mb-16">
            <p className="text-lg md:text-xl font-sans text-center max-w-4xl text-[#EAECEE] bg-[#1A1D20]/10 p-8 rounded-2xl backdrop-blur-sm">
              В соцсетях такой сложный крафт нужно продавать через эмоции, детализацию и гордость за ручной труд. Ниже — работы по оформлению слайдов карусели для соцсетей гримера.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
             {/* 6 Vertical Images Asymmetric */}
             <div className="aspect-[3/4] bg-liquid-glass-dark rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer relative shadow-lg md:col-span-5">
                <div className="w-full h-full flex items-center justify-center font-display text-[#EAECEE]/50 object-cover">SLIDE 1</div>
             </div>
             <div className="aspect-[3/4] bg-liquid-glass-dark rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer relative shadow-lg md:col-span-7 md:mt-12">
                <div className="w-full h-full flex items-center justify-center font-display text-[#EAECEE]/50 object-cover">SLIDE 2</div>
             </div>
             <div className="aspect-[3/4] bg-liquid-glass-dark rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer relative shadow-lg md:col-span-4">
                <div className="w-full h-full flex items-center justify-center font-display text-[#EAECEE]/50 object-cover">SLIDE 3</div>
             </div>
             <div className="aspect-[3/4] bg-liquid-glass-dark rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer relative shadow-lg md:col-span-8">
                <div className="w-full h-full flex items-center justify-center font-display text-[#EAECEE]/50 object-cover">SLIDE 4</div>
             </div>
             <div className="aspect-[3/4] bg-liquid-glass-dark rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer relative shadow-lg md:col-span-6 md:mt-8">
                <div className="w-full h-full flex items-center justify-center font-display text-[#EAECEE]/50 object-cover">SLIDE 5</div>
             </div>
             <div className="aspect-[3/4] bg-liquid-glass-dark rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer relative shadow-lg md:col-span-6 md:-mt-8">
                <div className="w-full h-full flex items-center justify-center font-display text-[#EAECEE]/50 object-cover">SLIDE 6</div>
             </div>
          </div>
        </div>
      </section>

            {/* Case 03: NEURO-CINEMATIC & E-COMMERCE */}
      <section id="neuro" className="py-32 px-8 bg-[#656A70] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-mono tracking-widest text-[#EAECEE]/70 mb-4">03 / NEURO-CINEMATIC E-COM & PRINT DESIGN</h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-none uppercase mb-4 text-[#EAECEE]">
              CINEMATIC PRODUCTION
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#EAECEE]/80 max-w-3xl">без миллионных бюджетов на съемки</p>
          </div>

          <div className="w-full mb-16 relative perspective-1000">
            {/* Hero Mockup */}
            <div className="w-full flex justify-center items-center h-auto max-w-5xl mx-auto mb-16 gap-4">
              <PhoneMockup className="w-48 shrink-0 bg-[#EAECEE]">
                 <div className="absolute inset-0 flex items-center justify-center font-display text-[#1A1D20]/50">PHONE</div>
              </PhoneMockup>
              <div className="aspect-square w-24 shrink-0 bg-[#1A1D20] rounded-full flex items-center justify-center text-xs font-mono text-[#EAECEE]">
                CHAIN
              </div>
            </div>

            <div className="flex justify-end w-full mb-24">
              <p className="text-lg md:text-xl font-sans text-right max-w-3xl text-[#EAECEE] pr-4 md:pr-12">
                Пока маркетплейсы и бренды соревнуются в кричащих цветах и визуальном шуме, я создаю сдержанные, глубокие цифровые среды для продуктов. С помощью сложного промпт-инжиниринга я генерирую фотореалистичные сцены (макро, студийный свет, природные локации), заменяя клиентам дорогостоящие предметные фотосессии.
              </p>
            </div>

            {/* Mockup Trio */}
            <div className="flex justify-center items-center gap-8 md:gap-16 mb-32 flex-wrap">
               <PhoneMockup className="w-48 bg-[#1A1D20] transform -rotate-6">
                 <div className="absolute inset-0 flex items-center justify-center font-display text-[#EAECEE]/50">PHONE 1</div>
               </PhoneMockup>
               <PhoneMockup className="w-56 bg-[#EAECEE] z-10 scale-110 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                 <div className="absolute inset-0 flex items-center justify-center font-display text-[#1A1D20]/50">PHONE 2</div>
               </PhoneMockup>
               <PhoneMockup className="w-48 bg-[#1A1D20] transform rotate-6">
                 <div className="absolute inset-0 flex items-center justify-center font-display text-[#EAECEE]/50">PHONE 3</div>
               </PhoneMockup>
            </div>

            {/* E-Commerce Cases */}
            <div className="w-full">
              <h4 className="text-3xl font-display font-medium text-right mb-12 tracking-tighter leading-none">E-COMMERCE CASES</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-full aspect-[1082/717] bg-liquid-glass-dark rounded-xl flex items-center justify-center text-[#EAECEE]/50 group cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-700 ease-out">
                        IMAGE {idx}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case 04: POSTER DESIGN */}
      <section id="posters" className="py-0 px-0 bg-[#656A70]">
        <div className="w-full flex flex-col relative">
          <div className="w-full aspect-video bg-[#1A1D20] flex items-center justify-center text-text-secondary/50 relative overflow-hidden group">
             <div className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 bg-[#111] group-hover:scale-105 transition-transform duration-1000"></div>
             <div className="absolute top-16 md:top-32 left-8 md:left-24 z-10">
                <h2 className="text-sm font-mono tracking-widest text-[#EAECEE]/70 mb-4">04 / NEURO-CINEMATIC E-COM & PRINT DESIGN</h2>
                <h3 className="text-4xl md:text-8xl font-display font-medium tracking-tighter leading-none uppercase mb-4 text-[#EAECEE]">
                  CINEMATIC PRODUCTION
                </h3>
                <p className="text-xl md:text-4xl font-display text-[#EAECEE]/80 max-w-3xl">POSTER DESIGN</p>
             </div>
             <span className="font-display text-2xl z-0 absolute bottom-8 right-8">POSTER FULL BLEED 1</span>
          </div>
          {[2, 3, 4].map((idx) => (
             <div key={idx} className="w-full aspect-video bg-[#1A1D20] border-t border-[#333] flex items-center justify-center text-[#EAECEE]/30 relative overflow-hidden group">
                 <div className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 bg-[#111] group-hover:scale-105 transition-transform duration-1000"></div>
                 <span className="font-display text-2xl z-10 relative">POSTER FULL BLEED {idx}</span>
             </div>
          ))}
        </div>
      </section>

            {/* Case 05: VIBE-CODING & FAST WEB */}
      <section id="vibe" className="py-32 px-8 bg-gradient-to-b from-[#656A70] to-[#EAECEE] text-[#656A70] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center">
            <h2 className="text-sm font-mono tracking-widest text-[#1A1D20]/70 mb-4">05 / VIBE-CODING & RAPID WEB DEVELOPMENT</h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-none uppercase mb-4 text-[#1A1D20]">
              EIDOS-STUDIO.RU
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#1A1D20]/80">Запуск сайта под ключ за 7 дней</p>
          </div>

          <div className="w-full relative perspective-1000 flex flex-col items-center">
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `rotateX(${-y / 40}deg) rotateY(${x / 40}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
              }}
              style={{ transition: 'transform 0.1s ease-out' }}
              className="w-full max-w-5xl mx-auto flex items-center justify-center text-[#EAECEE]"
            >
              <LaptopMockup className="bg-[#1A1D20] w-full">
                <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-[#EAECEE]/30">EIDOS-STUDIO.RU</div>
              </LaptopMockup>
            </motion.div>

            <p className="mt-12 text-xl font-sans text-center max-w-4xl text-[#1A1D20]">
              Сочетание профессиональных знаний дизайн-систем, глубокого понимания ИИ инструментов (LLM промптинг) и базового программирования.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/5] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] rounded-xl overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center font-display text-[#8C9298]">PHOTO</div>
                </div>
                <div className="backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] rounded-xl p-8 flex flex-col justify-center gap-4 text-[#1A1D20]">
                   <h4 className="text-2xl font-display font-medium mb-4">Как был реализован проект:</h4>
                   <ul className="list-disc pl-5 space-y-2 font-sans text-lg">
                      <li>Отказ от раздутых корпоративных процессов в пользу agility.</li>
                      <li>Полное создание UI/UX с помощью ИИ и ручной доводки.</li>
                      <li>Скорость и оптимизация: 100/100 в Lighthouse.</li>
                   </ul>
                </div>
             </div>

             <div className="backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] rounded-xl p-8 w-full text-[#1A1D20]">
                <p className="text-xl font-sans font-medium text-center">
                  Результат: Живой действующий сайт eidos-studio.ru, созданный одним человеком с сокращением Time-to-Market в 3 раза.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Case 06: K.A.I. INTELLIGENCE (LIVE CHAT) */}
      <section id="ai" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-sm font-mono tracking-widest text-[#8C9298] mb-4">06 / AI SYSTEMS & CUSTOM AGENTS</h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-none mb-8">K.A.I. Intelligence</h3>

            <div className="flex flex-col gap-6 text-[#1A1D20]/80 font-sans text-lg">
               <p><strong>Проект:</strong> KAI Автономный ИИ ассистент студии «Эйдос».</p>
               <p><strong>Стек:</strong> Llama 3.3 / Python / Google Apps Script / Web Integration</p>
               <p><em>Кай находится в режиме тестирования.</em></p>
               <p><strong>Бизнес-задача:</strong> Снизить нагрузку на администраторов и увеличить конверсию из посетителя сайта в запись на услугу.</p>
               <p><strong>Решение:</strong> Разработка ИИ-агента, который знает всё об услугах, мастерах и ценах, может проконсультировать по симптомам (в рамках компетенций массажной студии) и предложить оптимальный вариант.</p>
            </div>
          </div>

          <div className="relative w-full max-w-[340px] shrink-0">
            <PhoneChatSimulation />
          </div>
        </div>
      </section>
    </div>
  );
}

function PhoneChatSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);

  useEffect(() => {
    if (isInView) {
       const sequence = async () => {
          // 1. KAI greeting
          await new Promise(r => setTimeout(r, 500));
          setMessages(m => [...m, { sender: 'ai', text: "Здравствуйте. Я — Кай, интеллектуальный консьерж студии «Эйдос». Что вас беспокоит сегодня?" }]);

          // 2. Delay 1500ms
          await new Promise(r => setTimeout(r, 1500));

          // 3. User message
          setMessages(m => [...m, { sender: 'user', text: "Привет, часто болит спина после работы, посоветуй, на какую процедуру и к какому специалисту мне лучше записаться?" }]);

          // 4. Delay 2000ms
          await new Promise(r => setTimeout(r, 2000));

          // 5. KAI response
          setMessages(m => [...m, { sender: 'ai', text: "Мы можем предложить вам несколько вариантов... рекомендовал записаться на **Общий массаж** у мастера **Александра**... Альтернативным вариантом может быть запись на **Мануальную артикуляцию** у мастера **Татьяны**." }]);
       };
       sequence();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
    <PhoneMockup className="bg-[#F4F4F6] w-full flex flex-col">

       <div className="flex-1 p-4 pt-14 flex flex-col gap-4 overflow-y-auto">
          {messages.map((msg, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-[#007AFF] text-white self-end rounded-tr-sm' : 'bg-white text-[#1A1D20] shadow-sm self-start rounded-tl-sm'}`}
             >
                {/* Render strong tags properly if any */}
                <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
             </motion.div>
          ))}
       </div>
    </PhoneMockup>
    </div>
  );
}
