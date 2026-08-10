"use client";

import { Mail, ArrowRight, Twitter as TwitterIcon, Linkedin as LinkedinIcon, Github as GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-32 px-6 lg:px-20 overflow-hidden mt-20 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          READY TO <span className="italic font-light text-white/50">ELEVATE</span>
          <br /> YOUR BRAND?
        </h2>

        <p className="text-xl text-white/60 mb-12 max-w-xl font-light">
          Давайте обсудим ваш проект. Создадим уникальный визуальный язык или внедрим ИИ-ассистента в ваши бизнес-процессы.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full justify-center">
          <a
            href="mailto:contact@example.com"
            className="group relative px-8 py-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Mail className="text-white/70 group-hover:text-white transition-colors" />
            <span className="font-medium text-lg">Email Me</span>
          </a>

          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-5 bg-white text-black hover:bg-slate-200 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span className="font-medium text-lg">Telegram</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} CHERNIKOV. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><TwitterIcon size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><LinkedinIcon size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><GithubIcon size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
