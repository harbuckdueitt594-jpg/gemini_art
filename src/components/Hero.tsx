"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 lg:px-20 pt-32 pb-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase">
              CHERNIKOV | DIRECTION KA ENGINEERING
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                AI-CREATOR
              </span>
              <br />
              <span className="text-white">DESIGN PORTFOLIO</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mt-4 font-light"
          >
            Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, кастомных ИИ-агентов, сокращая Time-to-Market в 3-5 раз без потери качества.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#portfolio"
              className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-out"
            >
              Смотреть кейсы
              <ArrowRight size={18} className="transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 hover:bg-white/[0.05] text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2"
            >
              Связаться
              <Mail size={18} className="opacity-70" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
