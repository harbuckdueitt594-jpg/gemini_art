import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import React from "react";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHERNIKOV | AI-CREATOR & DESIGN PORTFOLIO",
  description: "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#0A0D12] selection:text-[#F6F8FA] font-sans bg-[#F6F8FA] text-[#0A0D12]">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
