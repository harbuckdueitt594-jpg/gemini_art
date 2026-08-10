"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);


  const text = "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, быстрый веб и кастомных ИИ-агентов, сокращая Time-to-Market в 3–5 раз без потери качества.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative w-full bg-primary-light text-text-light py-32 px-6 md:px-12 overflow-hidden">
      {/* Top Gradient Divider from Dark to Light */}
      <div className="absolute top-0 left-0 w-full h-32 divider-dark-to-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-24">
        {/* Headers */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold tracking-widest uppercase text-text-muted-light">
            Manifesto
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-bold uppercase tracking-tighter">
            AI-CREATOR /<br /> DESIGN PORTFOLIO
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* Left Floating Image (High Fashion Placeholder) */}
          <motion.div
            style={{ y: y1 }}
            className="md:col-span-4 relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-[3/4] bg-neutral-200 overflow-hidden relative glass-panel-light rounded-sm">
               {/* Image placeholder - SVG */}
               <svg className="w-full h-full text-neutral-300 group-hover:scale-105 transition-transform duration-700 ease-out" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                  <rect width="100" height="100" />
               </svg>
            </div>
          </motion.div>

          {/* Center Text (Text Reveal) */}
          <div className="md:col-span-8">
            <motion.p
              className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-balance"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.015 } },
                hidden: {}
              }}
            >
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-2 md:mr-3 mb-2">
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.p>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Divider to Dark (optional, depends on next section, but we handle it via explicit divider class) */}
    </section>
  );
}
