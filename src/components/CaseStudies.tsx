"use client";

import ScrambleText from "./ScrambleText";
import ScrollTextHighlight from "./ScrollTextHighlight";
import CoverflowGallery from "./CoverflowGallery";
import BlurCarousel from "./BlurCarousel";
import HoverImageReveal from "./HoverImageReveal";
import MagneticCarousel from "./MagneticCarousel";

export default function CaseStudies() {
  return (
    <div className="w-full bg-[#08080A] text-text-primary">

      {/* ==========================================
          CASE 01: EIDOS MASSAGE STUDIO
      ========================================== */}
      <section id="smm-brand" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="mb-4">
            <h2 className="text-xs font-mono tracking-widest text-[#8C9298] mb-3 uppercase">
              01 / SMM & BRAND IDENTITY (Eidos Massage Studio)
            </h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#1A1D20]">
              EIDOS MASSAGE STUDIO
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#1A1D20]/70 max-w-3xl">
              От локального пространства к премиальной экосистеме
            </p>
          </div>

          {/* Large Scramble Text Header */}
          <div className="w-full bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-black/5 shadow-sm">
            <ScrambleText
              words="При масштабировании бизнеса возникла необходимость сменить любительский визуал на премиальную, системную айдентику. Задача — отстроиться от конкурентов с банальными «массажными штампами» (свечи, лотосы, бежевые стоки)."
              tag="p"
              className="font-display text-xl md:text-3xl font-medium tracking-tight text-[#1A1D20]"
              color="#1A1D20"
              scrambleSpeed={25}
              hoverEffect="diffusion"
            />
          </div>

          {/* Editorial 2-Column Section with ScrollTextHighlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-t border-b border-black/10">
            {/* Column 1: Strategy */}
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-display font-bold text-[#1A1D20] uppercase tracking-tight">
                Стратегия и решение:
              </h4>
              <ScrollTextHighlight
                text="Построение единого визуального языка: от контента в соцсетях до печатных носителей. Чистая эстетика, типографика, фокус на профессиональной реабилитации."
                dimColor="#8C9298"
                highlightColor="#1A1D20"
                splitBy="word"
                className="font-sans text-lg md:text-xl font-normal"
              />
            </div>

            {/* Column 2: Result */}
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-display font-bold text-[#1A1D20] uppercase tracking-tight">
                Результат и бизнес-эффект:
              </h4>
              <ScrollTextHighlight
                text="100% единый стиль во всех точках касания (SMM, печать, веб). Рост вовлеченности и формирование образа премиального пространства."
                dimColor="#8C9298"
                highlightColor="#1A1D20"
                splitBy="word"
                className="font-sans text-lg md:text-xl font-normal"
              />
            </div>
          </div>

          {/* Coverflow Gallery Showcase */}
          <div className="w-full flex flex-col items-center mt-8">
            <div className="text-xs font-mono tracking-widest text-[#8C9298] mb-4 uppercase">
              3D COVERFLOW BRAND GALLERY
            </div>
            <CoverflowGallery
              slides={[
                { image: { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80" }, title: "Eidos Studio Interior" },
                { image: { src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=80" }, title: "Rehabilitation Suite" },
                { image: { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop&q=80" }, title: "Massage Equipment" },
                { image: { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80" }, title: "SMM & Brand Book" },
                { image: { src: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?w=800&auto=format&fit=crop&q=80" }, title: "Printed Collaterals" },
              ]}
              cardWidth={380}
              cardHeight={380}
              radius={16}
              tilt={12}
              autoplay={true}
              showTitle={true}
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          CASE 02: MAKE-UP & FX ARTIST (Leanca)
      ========================================== */}
      <section id="beauty-fx" className="py-32 px-8 bg-gradient-to-b from-[#EAECEE] to-[#656A70] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-[#1A1D20]/70 mb-3 uppercase">
              02 / SMM & BRAND IDENTITY (Make-Up & FX Artist)
            </h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#1A1D20]">
              MAKE-UP & FX ARTIST LEANCA
            </h3>
          </div>

          {/* Large Highlighted Text */}
          <div className="w-full bg-[#1A1D20]/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <ScrollTextHighlight
              text="В соцсетях такой сложный крафт нужно продавать через эмоции, детализацию и гордость за ручной труд. Ниже — работы по оформлению слайдов карусели для соцсетей гримера."
              dimColor="rgba(234, 236, 238, 0.4)"
              highlightColor="#EAECEE"
              splitBy="word"
              className="font-display text-2xl md:text-4xl font-medium tracking-tight"
            />
          </div>

          {/* 3 Blur Carousels (3, 7, and 3 photos) */}
          <div className="flex flex-col gap-20 items-center">
            {/* Component 1: 3 Photos */}
            <div className="w-full flex flex-col items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-[#EAECEE]/60 uppercase">
                SERIES A // BEAUTY CRAFT (3 SLIDES)
              </span>
              <BlurCarousel
                slides={[
                  { image: { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80" }, title: "Editorial Beauty 01" },
                  { image: { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80" }, title: "Glow & Texture 02" },
                  { image: { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80" }, title: "Cinematic Accent 03" },
                ]}
                cardWidth={450}
                cardHeight={550}
                radius={20}
                blurAmount={35}
              />
            </div>

            {/* Component 2: 7 Photos */}
            <div className="w-full flex flex-col items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-[#EAECEE]/60 uppercase">
                SERIES B // SPECIAL FX & CINEMATIC (7 SLIDES)
              </span>
              <BlurCarousel
                slides={[
                  { image: { src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80" }, title: "Prosthetic Sculpt" },
                  { image: { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=80" }, title: "Character Design" },
                  { image: { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80" }, title: "Film FX Details" },
                  { image: { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=80" }, title: "Creature FX" },
                  { image: { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80" }, title: "Avante Garde" },
                  { image: { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80" }, title: "Stage Lighting" },
                  { image: { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80" }, title: "High-Fashion FX" },
                ]}
                cardWidth={480}
                cardHeight={580}
                radius={20}
                blurAmount={40}
              />
            </div>

            {/* Component 3: 3 Photos */}
            <div className="w-full flex flex-col items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-[#EAECEE]/60 uppercase">
                SERIES C // BACKSTAGE & PROCESS (3 SLIDES)
              </span>
              <BlurCarousel
                slides={[
                  { image: { src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80" }, title: "Handcrafted Pigments" },
                  { image: { src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80" }, title: "Precision Brushes" },
                  { image: { src: "https://images.unsplash.com/photo-1500840218059-b1d012394d4d?w=800&auto=format&fit=crop&q=80" }, title: "Studio Lighting" },
                ]}
                cardWidth={450}
                cardHeight={550}
                radius={20}
                blurAmount={35}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CASE 03: NEURO-CINEMATIC E-COM
      ========================================== */}
      <section id="neuro" className="py-32 px-8 bg-[#656A70] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-[#EAECEE]/70 mb-3 uppercase">
              03 / NEURO-CINEMATIC E-COM & PRINT DESIGN
            </h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#EAECEE]">
              CINEMATIC PRODUCTION
            </h3>
          </div>

          {/* Large Highlighted Paragraph */}
          <div className="w-full bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <ScrollTextHighlight
              text="Пока маркетплейсы и бренды соревнуются в кричащих цветах и визуальном шуме, я создаю сдержанные, глубокие цифровые среды для продуктов. С помощью сложного промпт-инжиниринга я генерирую фотореалистичные сцены (макро, студийный свет, природные локации), заменяя клиентам дорогостоящие предметные фотосессии."
              dimColor="rgba(234, 236, 238, 0.4)"
              highlightColor="#EAECEE"
              splitBy="word"
              className="font-display text-xl md:text-3xl font-medium tracking-tight"
            />
          </div>

          {/* Hover Image Reveal Component */}
          <div className="w-full mt-8">
            <div className="text-xs font-mono tracking-widest text-[#EAECEE]/70 mb-6 uppercase text-center">
              INTERACTIVE REEL MENU // CURSOR IMAGE REVEAL
            </div>
            <HoverImageReveal
              items={[
                { text: "NEW SEASON DROP", image: { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80" } },
                { text: "ESSENTIAL COLLECTION", image: { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80" } },
                { text: "SUMMER EDITION", image: { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop&q=80" } },
                { text: "STREET ICONS", image: { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80" } },
                { text: "PREMIUM DENIM", image: { src: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80" } },
                { text: "ARCHIVE PIECES", image: { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80" } },
              ]}
              textColor="#FFFFFF"
              dimColor="#8C9298"
              imageWidth={320}
              imageHeight={420}
              rounded={20}
              backgroundColor="transparent"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          CASE 04: POSTER DESIGN (Magnetic Carousel)
      ========================================== */}
      <section id="posters" className="py-32 px-8 bg-[#1A1D20] text-[#EAECEE]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-[#00FF9D] mb-3 uppercase">
              04 / NEURO-CINEMATIC E-COM & PRINT DESIGN
            </h2>
            <h3 className="text-4xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#EAECEE]">
              CINEMATIC PRODUCTION
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#EAECEE]/70">POSTER DESIGN</p>
          </div>

          {/* Magnetic Carousel component */}
          <div className="w-full">
            <div className="text-xs font-mono tracking-widest text-[#EAECEE]/60 mb-6 uppercase text-center">
              MACOS DOCK STYLE // MAGNETIC PROXIMITY CAROUSEL
            </div>
            <MagneticCarousel
              images={[
                { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80", title: "POSTER 01 // EIDOS" },
                { src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80", title: "POSTER 02 // CINEMA" },
                { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80", title: "POSTER 03 // NEURO" },
                { src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80", title: "POSTER 04 // AI LAB" },
                { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80", title: "POSTER 05 // ECOSYSTEM" },
                { src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&auto=format&fit=crop&q=80", title: "POSTER 06 // FUTURE" },
              ]}
              collapsedWidth={120}
              hoverWidth={220}
              collapsedHeight={360}
              hoverHeight={420}
              openSize={580}
              gap={16}
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          CASE 05: VIBE-CODING & FAST WEB (Eidos-Studio.ru)
      ========================================== */}
      <section id="vibe" className="py-32 px-8 bg-gradient-to-b from-[#1A1D20] to-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center">
            <h2 className="text-xs font-mono tracking-widest text-[#00FF9D] mb-3 uppercase">
              05 / VIBE-CODING & FAST WEB — EIDOS-STUDIO.RU
            </h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] uppercase mb-4 text-[#1A1D20]">
              EIDOS-STUDIO.RU
            </h3>
            <p className="text-xl md:text-3xl font-display text-[#1A1D20]/80">Кейс запуска под ключ за 7 дней</p>
          </div>

          <div className="w-full flex flex-col items-center gap-8">
            <div className="laptop-mockup w-full max-w-4xl mx-auto bg-[#1A1D20] flex items-center justify-center text-[#EAECEE]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                alt="Eidos Studio Website"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl font-sans text-center max-w-4xl text-[#1A1D20] font-medium leading-relaxed">
              Сочетание профессиональных знаний дизайн-систем, глубокого понимания ИИ-инструментов (LLM промптинг) и чистого стека. Lighthouse score: 100/100, сокращение сроков разработки в 3 раза.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          CASE 06: AI SYSTEMS & CUSTOM AGENTS (K.A.I.)
      ========================================== */}
      <section id="ai" className="py-32 px-8 bg-[#EAECEE] text-[#1A1D20]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-xs font-mono tracking-widest text-[#8C9298] uppercase">
              06 / AI SYSTEMS & CUSTOM AGENTS
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9]">
              K.A.I. Intelligence
            </h3>

            <div className="flex flex-col gap-4 text-[#1A1D20]/80 font-sans text-base md:text-lg leading-relaxed">
              <p><strong>Проект:</strong> KAI Автономный ИИ-ассистент студии «Эйдос».</p>
              <p><strong>Стек:</strong> Llama 3.3, Python, Google Apps Script, Web Integration.</p>
              <p className="text-sm font-mono text-[#8C9298]"><em>[Статус: Активное бета-тестирование]</em></p>
              <p><strong>Бизнес-задача:</strong> Снизить нагрузку на администраторов и увеличить конверсию из посетителя сайта в запись на услугу.</p>
              <p><strong>Решение:</strong> Разработка ИИ-агента, который знает всё об услугах, мастерах и ценах, может проконсультировать по симптомам и записать на прием.</p>
            </div>
          </div>

          <div className="phone-mockup w-full max-w-[340px] shrink-0 bg-[#F4F4F6] shadow-2xl">
            <div className="phone-notch"><div className="phone-notch-inner" /></div>
            <div className="p-4 pt-14 flex flex-col gap-3 font-sans text-xs">
              <div className="bg-white p-3 rounded-2xl shadow-sm text-[#1A1D20]">
                Здравствуйте! Я — Кай, ИИ-консьерж студии «Эйдос». Чем могу помочь?
              </div>
              <div className="bg-[#007AFF] text-white p-3 rounded-2xl self-end max-w-[85%]">
                Привет! Посоветуй массаж после тяжелой рабочей недели.
              </div>
              <div className="bg-white p-3 rounded-2xl shadow-sm text-[#1A1D20]">
                Рекомендую <strong>Реабилитационный массаж</strong> у мастера <strong>Александра</strong>. Записать вас?
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
