import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
