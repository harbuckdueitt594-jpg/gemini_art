"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const folders = [
  { id: 1, title: "КЕЙС: Лонгрид по психологии", category: "LONGREAD", slides: 9 },
  { id: 2, title: "КЕЙС: Академическая презентация", category: "PRESENTATION", slides: 9 },
  { id: 3, title: "КЕЙС: Коммерция ('Приемка квартиры')", category: "COMMERCE", slides: 9 },
];

export default function InteractiveFolders() {
  const [activeFolder, setActiveFolder] = useState<number | null>(null);

  const selectedFolder = folders.find((f) => f.id === activeFolder);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#94A3B8] mb-3 uppercase">
            SECTION 07 // OTHER CASES & LONGREADS
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-[#0A0D12] uppercase leading-[0.9] mb-4">
            ПРЕЗЕНТАЦИИ И ЛОНГРИДЫ
          </h2>
          <p className="text-lg md:text-2xl font-display text-[#475569]">
            ОТ КОММЕРЧЕСКИХ ДО АКАДЕМИЧЕСКИХ
          </p>
        </div>

        {/* Clean 3-Column Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => setActiveFolder(folder.id)}
              className="p-8 border border-[#E2E7ED] bg-[#FFFFFF] hover:border-[#CBD5E1] shadow-xs cursor-pointer flex flex-col justify-between gap-8 group transition-all duration-300"
            >
              <div className="flex justify-between items-center text-xs font-mono text-[#94A3B8] uppercase">
                <span>0{folder.id} // {folder.category}</span>
                <span>{folder.slides} SLIDES</span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#0A0D12] uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                {folder.title}
              </h3>

              <div className="border-t border-[#E2E7ED] pt-4 flex justify-between items-center text-xs font-mono font-semibold text-[#0A0D12] uppercase">
                <span>OPEN CASE ARCHIVE</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Viewing Modal */}
      <AnimatePresence>
        {activeFolder && selectedFolder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0D12]/70 backdrop-blur-md p-6 md:p-12 overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
              <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#CBD5E1] p-6 shadow-md">
                <h3 className="font-display text-xl font-bold text-[#0A0D12] uppercase">
                  {selectedFolder.title}
                </h3>
                <button
                  onClick={() => setActiveFolder(null)}
                  className="px-4 py-2 bg-[#0A0D12] text-[#FFFFFF] font-mono text-xs uppercase tracking-widest cursor-pointer"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
                {Array.from({ length: selectedFolder.slides }, (_, i) => i + 1).map((slide) => (
                  <div
                    key={slide}
                    className="aspect-video bg-[#EDF1F5] border border-[#E2E7ED] flex items-center justify-center font-mono text-xs text-[#94A3B8] uppercase shadow-xs"
                  >
                    SLIDE {String(slide).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
