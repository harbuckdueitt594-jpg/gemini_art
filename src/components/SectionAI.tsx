"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionAI() {
  return (
    <section id="ai" className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left Side: System Description */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
              SECTION 06 // AI SYSTEMS & CUSTOM AGENTS
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
              K.A.I. INTELLIGENCE
            </h2>
            <p className="text-lg md:text-xl font-display text-[#475569]">
              АВТОНОМНЫЙ ИИ-АССИСТЕНТ СТУДИИ «ЭЙДОС»
            </p>
          </div>

          <div className="p-6 border border-[#E2E7ED] bg-[#FFFFFF] flex flex-col gap-3 font-mono text-xs text-[#475569]">
            <div><strong className="text-[#0A0D12]">ПРОЕКТ:</strong> KAI Autonomous Studio Assistant</div>
            <div><strong className="text-[#0A0D12]">СТЕК:</strong> Llama 3.3 / Python / Google Apps Script / Web Integration</div>
            <div><strong className="text-[#0A0D12]">СТАТУС:</strong> Active Production Testing</div>
          </div>

          <div className="p-6 border border-[#E2E7ED] bg-[#FFFFFF] font-sans text-sm text-[#475569] space-y-3">
            <p>
              <strong className="text-[#0A0D12]">Бизнес-задача:</strong> Снизить нагрузку на администраторов и увеличить конверсию из посетителя сайта в запись на услугу.
            </p>
            <p>
              <strong className="text-[#0A0D12]">Решение:</strong> Разработка ИИ-агента, который знает всё об услугах, мастерах и ценах, консультирует по симптомам и рекомендует подходящего мастера.
            </p>
          </div>
        </div>

        {/* Right Side: Clean Minimalist Terminal Interface */}
        <div className="w-full md:w-[420px] shrink-0">
          <TerminalChatSimulation />
        </div>
      </div>
    </section>
  );
}

function TerminalChatSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        await new Promise((r) => setTimeout(r, 400));
        setMessages((m) => [
          ...m,
          {
            sender: "ai",
            text: "Здравствуйте. Я — Кай, интеллектуальный консьерж студии «Эйдос». Что вас беспокоит сегодня?",
          },
        ]);

        await new Promise((r) => setTimeout(r, 1400));
        setMessages((m) => [
          ...m,
          {
            sender: "user",
            text: "Привет, часто болит спина после работы, посоветуй, на какую процедуру и к какому специалисту мне лучше записаться?",
          },
        ]);

        await new Promise((r) => setTimeout(r, 1800));
        setMessages((m) => [
          ...m,
          {
            sender: "ai",
            text: "Рекомендую записаться на **Общий массаж** у мастера **Александра** или **Мануальную артикуляцию** у мастера **Татьяны**.",
          },
        ]);
      };
      sequence();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="w-full border border-[#CBD5E1] bg-[#FFFFFF] p-6 shadow-md flex flex-col gap-4 min-h-[420px] justify-between font-mono text-xs"
    >
      <div className="border-b border-[#E2E7ED] pb-3 flex justify-between items-center text-[#94A3B8]">
        <span>TERMINAL // K.A.I. AGENT v1.0</span>
        <span className="w-2 h-2 rounded-full bg-[#0A0D12] animate-pulse" />
      </div>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 border ${
              msg.sender === "user"
                ? "bg-[#0A0D12] text-[#FFFFFF] border-[#0A0D12] self-end max-w-[85%]"
                : "bg-[#F1F5F9] text-[#0A0D12] border-[#E2E7ED] self-start max-w-[90%]"
            }`}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong class='text-[#0A0D12] font-semibold'>$1</strong>"),
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="border-t border-[#E2E7ED] pt-3 text-[#94A3B8] flex justify-between items-center">
        <span>STATUS: READY</span>
        <span>LLAMA 3.3 AGENT</span>
      </div>
    </div>
  );
}
