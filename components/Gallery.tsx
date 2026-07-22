"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const images = [
  { src: "/images/signature-burger.jpg", alt: "BIG MO burger and fries", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/neon-logo.jpg", alt: "BIG MO neon sign", span: "" },
  { src: "/images/guest.jpg", alt: "Guest eating at BIG MO", span: "" },
  { src: "/images/tray.jpg", alt: "Burger tray and shake", span: "md:col-span-2" },
];

export default function Gallery() {
  const { language } = useLanguage();
  return (
    <section className="bg-moCream px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-5xl uppercase leading-none sm:text-7xl">{language === "fr" ? "Vu chez " : "Seen at "}<span className="text-moRed">BIG MO</span></h2>
          <Link
            href="/gallery"
            className="group inline-flex max-w-sm items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-black/50 transition hover:text-moRed"
          >
            {language === "fr" ? "Voir toute la galerie" : "View full gallery"}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {images.map((image) => (
            <div key={image.src + image.alt} className={`group relative overflow-hidden rounded-[2rem] border-2 border-moBlack ${image.span}`}>
              <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 border-[10px] border-transparent transition group-hover:border-white/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
