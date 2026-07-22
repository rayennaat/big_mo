"use client";

import { useLanguage } from "./LanguageProvider";

export default function Ticker() {
  const { language } = useLanguage();
  const words = language === "fr"
    ? ["SMASH FRAIS", "GROS GOUT", "NUITS NEON", "FRITES CRAQUANTES", "SHAKES PRETS", "AUCUNE PETITE BOUCHEE"]
    : ["SMASHED FRESH", "BIG FLAVOR", "NEON NIGHTS", "CRINKLE FRIES", "SHAKES ON DECK", "NO SMALL BITES"];
  const repeated = [...words, ...words];
  return (
    <div className="group overflow-hidden border-y-4 border-moBlack bg-moRed py-4 text-white">
      <div className="marquee-track flex items-center">
        {repeated.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center whitespace-nowrap font-display text-2xl uppercase tracking-wide sm:text-3xl">
            {word}<span className="mx-5 text-moYellow">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
