"use client";

import { Clock3, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import ReservationForm from "@/components/ReservationForm";

export default function ReservationsPage() {
  const { language } = useLanguage();
  return (
    <main className="min-h-screen overflow-hidden bg-moRed text-white">
      <section className="relative px-5 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        {/* Background decoration */}
        <div className="grid-wall pointer-events-none absolute inset-0 opacity-[0.08]" />

        <div className="pointer-events-none absolute -right-44 top-0 h-[600px] w-[600px] rounded-full border-[100px] border-white/[0.04]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          {/* Intro */}
          <Reveal variant="left" className="lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-moYellow">
              {language === "fr" ? "Choisis ton adresse" : "Choose your branch"}
            </p>

            <h1 className="mt-5 max-w-xl font-display text-6xl uppercase leading-[0.83] sm:text-8xl">
              Make it a
              <span className="neon-text mt-2 block text-white">
                BIG night.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
              {language === "fr"
                ? "Choisis le BIG MO le plus proche, appelle-nous pour reserver ton booth ou ouvre Google Maps pour l'itineraire."
                : "Select your nearest BIG MO location, call us to reserve your booth, or open Google Maps for directions."}
            </p>

            {/* Opening hours shown only once */}
            <div className="mt-10 border-y border-white/25 py-6">
              <div className="flex items-center gap-3">
                <Clock3 size={20} className="text-moYellow" />

                <p className="text-xs font-black uppercase tracking-[0.25em] text-moYellow">
                  {language === "fr" ? "Horaires — les deux adresses" : "Opening hours — both locations"}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-end justify-between gap-5">
                  <span className="text-sm font-black uppercase tracking-[0.12em] text-white/65">
                    {language === "fr" ? "Lundi–Samedi" : "Monday–Saturday"}
                  </span>

                  <span className="font-display text-2xl sm:text-3xl">
                    11:30–00:00
                  </span>
                </div>

                <div className="h-px bg-white/15" />

                <div className="flex items-end justify-between gap-5">
                  <span className="text-sm font-black uppercase tracking-[0.12em] text-white/65">
                    {language === "fr" ? "Dimanche" : "Sunday"}
                  </span>

                  <span className="font-display text-2xl text-moYellow sm:text-3xl">
                    11:30–01:00
                  </span>
                </div>
              </div>
            </div>

            <a
              href="tel:+21670161928"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-moBlack px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-moBlack"
            >
              <Phone size={18} />
              {language === "fr" ? "Appeler 70 161 928" : "Call 70 161 928"}
            </a>
          </Reveal>

          {/* Interactive locations */}
          <Reveal variant="right" delay={120}>
            <ReservationForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
