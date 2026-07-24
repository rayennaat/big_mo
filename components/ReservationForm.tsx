"use client";

import { useState } from "react";
import {
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const branches = [
  {
    name: "La Marsa",
    number: "01",
    phoneDisplay: "70 161 928",
    phoneHref: "+21670161928",
    embedUrl:
      "https://www.google.com/maps?q=36.883004,10.3328736&z=17&output=embed",
    mapUrl:
      "https://www.google.com/maps/place/BIG+MO+-+Burger+Shack/@36.8830083,10.3302987,17z/data=!3m1!4b1!4m6!3m5!1s0x12e2b5f84ca2aa9f:0x682529ee7187c7f!8m2!3d36.883004!4d10.3328736!16s%2Fg%2F11tcr1gfwr",
  },
  {
    name: "Menzah 5",
    number: "02",
    phoneDisplay: "70 161 928",
    phoneHref: "+21670161928",
    embedUrl:
      "https://www.google.com/maps?q=36.8487422,10.1804229&z=17&output=embed",
    mapUrl:
      "https://www.google.com/maps/place/BIG+MO+-+Menzah+5/@36.8487422,10.1804229,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd350faf4b8707:0x7e1ea76686e09b83!8m2!3d36.8487422!4d10.1804229!16s%2Fg%2F11z522zj81",
  },
];

export default function ReservationForm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();

  const activeBranch = branches[activeIndex];

  return (
    <div className="min-w-0">
      {/* Branch switcher */}
      <div className="mb-6 flex flex-wrap gap-3">
        {branches.map((branch, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={branch.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`group inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] transition duration-300 ${
                isActive
                  ? "border-moBlack bg-moBlack text-white"
                  : "border-white/40 bg-transparent text-white hover:border-moBlack hover:bg-white hover:text-moBlack"
              }`}
            >
              <span
                className={
                  isActive
                    ? "text-moYellow"
                    : "text-white/55 transition group-hover:text-moBlack"
                }
              >
                {branch.number}
              </span>

              {branch.name}
            </button>
          );
        })}
      </div>

      {/* One shared location stage */}
      <div className="relative">
        {/* Map */}
        <div className="overflow-hidden rounded-[2.5rem] border-4 border-moBlack bg-white shadow-2xl shadow-black/25">
          <iframe
            key={activeBranch.name}
            title={`BIG MO ${activeBranch.name} map`}
            src={activeBranch.embedUrl}
            className="h-[440px] w-full lg:h-[680px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Information panel */}
        <div className="relative z-10 mx-4 -mt-16 overflow-hidden rounded-[2rem] border-4 border-moBlack bg-moCream text-moBlack shadow-2xl sm:mx-7 lg:absolute lg:bottom-8 lg:left-8 lg:mx-0 lg:mt-0 lg:w-[350px]">
          <div className="checkerboard-small h-4" />

          <div className="p-4 sm:p-5">
            <div className="flex items-start gap-4">
              <span className="font-display text-5xl leading-none text-moRed">
                {activeBranch.number}
              </span>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-moRed">
                  {language === "fr" ? "Adresse BIG MO" : "BIG MO location"}
                </p>

                <h2 className="mt-2 font-display text-4xl uppercase leading-none sm:text-4xl">
                  {activeBranch.name}
                </h2>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-moBlack/55">
              <MapPin size={17} className="shrink-0 text-moRed" />
              BIG MO Burger Shack
            </div>

            <div className="mt-7 grid gap-3">
              <a
                href={`tel:${activeBranch.phoneHref}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-moRed px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-moBlack"
              >
                <Phone size={17} />
                {language === "fr" ? "Appeler pour reserver" : "Call to reserve"}
              </a>

              <a
                href={activeBranch.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-moBlack px-6 py-4 text-xs font-black uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-1 hover:bg-moBlack hover:text-white"
              >
                <ExternalLink size={17} />
                {language === "fr" ? "Ouvrir l'itineraire" : "Open in Maps"}
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-[10px] font-black uppercase tracking-[0.23em] text-white/45 lg:text-right">
        {language === "fr" ? "Change d'adresse avec les boutons ci-dessus" : "Switch locations using the buttons above"}
      </p>
    </div>
  );
}
