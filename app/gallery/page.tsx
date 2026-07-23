"use client";

import GalleryGrid from "@/components/GalleryGrid";
import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  const { language } = useLanguage();
  return (
    <main className="min-h-screen overflow-hidden bg-moBlack text-white">
      {/* Gallery collection */}
      <section
        id="gallery"
        className="relative scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,0,.08),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal variant="left">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-moYellow">
                {language === "fr" ? "La collection complete" : "The complete collection"}
              </p>

              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                {language === "fr" ? "Choisis une humeur." : "Pick a mood."}
                <span className="block text-moRed">{language === "fr" ? "Ouvre une image." : "Open a frame."}</span>
              </h2>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <p className="max-w-md text-base leading-7 text-white/55">
                {language === "fr"
                  ? "Choisis une categorie ou ouvre n'importe quelle photo pour explorer le restaurant en plein ecran."
                  : "Select a category or open any photograph to explore the restaurant in fullscreen."}
              </p>
            </Reveal>
          </div>

          <Reveal variant="up">
            <GalleryGrid images={galleryImages} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
