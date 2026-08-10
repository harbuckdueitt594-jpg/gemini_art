"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function CaseStudyAI() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowResponse(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="case-ai" className="relative w-full bg-primary-light text-text-light py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 divider-dark-to-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <header className="border-b border-black/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-tighter mb-4">
              AI ARCHITECTURE
            </h2>
            <p className="text-xl md:text-2xl text-text-muted-light">K.A.I. INTELLIGENCE — Автономный ИИ-ассистент</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Llama 3.3', 'Python', 'Google Apps Script', 'Web Integration'].map(tech => (
              <span key={tech} className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-black/20 rounded-full text-black/70">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="flex justify-center" ref={containerRef}>
          {/* AI Chat UI Mockup */}
          <div className="w-full max-w-3xl glass-panel-light bg-white/50 border-black/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* User Message */}
            <motion.div
              className="self-end max-w-[80%] bg-black text-white p-4 rounded-2xl rounded-tr-sm text-sm font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Создай структуру презентации для инвесторов стартапа K.A.I., выдели ключевые метрики автономности агентов.
            </motion.div>

            {/* Typing indicator / Response */}
            <div className="self-start max-w-[85%] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                <span className="text-white font-syne font-bold text-xs">K</span>
              </div>

              {!showResponse ? (
                <motion.div
                  className="bg-black/5 border border-black/10 p-4 rounded-2xl rounded-tl-sm flex gap-1 items-center h-[52px]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </motion.div>
              ) : (
                <motion.div
                  className="bg-white border border-black/10 shadow-sm p-5 rounded-2xl rounded-tl-sm text-sm font-inter leading-relaxed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-bold mb-3">Структура Pitch Deck K.A.I. Intelligence:</p>
                  <ul className="list-disc pl-4 flex flex-col gap-2 text-text-muted-light">
                    <li><strong className="text-black">Проблема:</strong> Затраты времени на рутину (до 60% рабочего времени).</li>
                    <li><strong className="text-black">Решение:</strong> Автономные агенты на базе Llama 3.3 с интеграцией в бизнес-процессы.</li>
                    <li><strong className="text-black">Тракция:</strong> Снижение TTM в 3 раза, рост конверсии обработки лидов на 40%.</li>
                    <li><strong className="text-black">Архитектура:</strong> Безопасный on-premise контур + Python/FastAPI бэкенд.</li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
