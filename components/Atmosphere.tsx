"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Music2,
  Sparkles,
  Utensils,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";

const features = [
  {
    icon: Utensils,
    number: "01",
    title: "Fresh comfort",
    copy: "Hot trays, buttery buns and burgers prepared for that first perfect bite.",
  },
  {
    icon: Music2,
    number: "02",
    title: "Big energy",
    copy: "Glowing neon, red booths and an atmosphere that stays alive into the night.",
  },
  {
    icon: Clock3,
    number: "03",
    title: "Easy plans",
    copy: "Drop in for a quick meal or bring the whole crew and claim your booth.",
  },
];

export default function Atmosphere() {
  const { language } = useLanguage();
  const copy = language === "fr"
    ? {
        eyebrow: "Plus qu'un repas",
        title: "Installe-toi. Laisse monter l'ambiance.",
        description: "Banquettes rouges, enseignes lumineuses et energie de fin de soiree font de BIG MO bien plus qu'une simple adresse a burgers.",
        intro: "Viens avec faim. Reste un peu.",
        heading: "Ta table t'attend.",
        reserve: "Reserver une table",
        footnote: "Deux adresses, une seule ambiance BIG",
        features: [
          { title: "Confort gourmand", copy: "Plateaux chauds, buns dores et burgers prepares pour cette premiere bouchee parfaite." },
          { title: "Grosse ambiance", copy: "Neon, banquettes rouges et une salle qui reste vivante jusque tard dans la nuit." },
          { title: "Plans faciles", copy: "Passe pour un repas rapide ou viens avec toute l'equipe pour prendre ta table." },
        ],
      }
    : {
        eyebrow: "More than a meal",
        title: "Pull up. Turn it up.",
        description: "Red booths, glowing signs and late-night energy make BIG MO more than another burger stop.",
        intro: "Come hungry. Stay awhile.",
        heading: "Your table is waiting.",
        reserve: "Reserve a table",
        footnote: "Two locations, one BIG atmosphere",
        features,
      };

  return (
    <section className="relative overflow-hidden bg-moRed px-5 py-24 text-white lg:px-8 lg:py-32">
      {/* Background decoration */}
      <div className="grid-wall pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="pointer-events-none absolute -right-44 -top-44 h-[520px] w-[520px] rounded-full border-[90px] border-white/[0.05]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up">
          <SectionTitle
            light
            eyebrow={copy.eyebrow}
            title={copy.title}
            copy={copy.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Main image */}
          <Reveal variant="left" className="relative min-h-[560px] lg:col-span-7 lg:h-full lg:min-h-[680px]">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] border-4 border-moBlack bg-moBlack lg:h-full lg:min-h-[680px]">
            <Image
              src="/images/interior.jpg"
              alt="Red booth seating and dining area inside BIG MO"
              fill
              className="object-cover object-center transition duration-1000 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/15" />
            
            {/* Image caption */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-moYellow">
                  {copy.intro}
                </p>

                <h3 className="mt-3 font-display text-4xl uppercase leading-[0.9] sm:text-6xl">
                  {copy.heading}
                </h3>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/reservations"
                    className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-moRed px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-moBlack"
                  >
                    {copy.reserve}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/55">
                    {copy.footnote}
                  </span>
                </div>
              </div>
            </div>

            <div className="checkerboard-small absolute inset-x-0 bottom-0 h-3" />
          </div>
          </Reveal>

          {/* Feature side */}
          <div className="grid gap-5 lg:col-span-5 lg:grid-rows-3">
            {copy.features.map(({ title, copy }, index) => {
              const Icon = features[index].icon;
              const number = features[index].number;
              return (
                <Reveal key={title} delay={index * 120 + 120} variant="right" className="h-full">
                  <article
                    className="group relative h-full overflow-hidden rounded-[2rem] border-4 border-moBlack bg-moCream p-6 text-moBlack shadow-card transition duration-300 hover:-translate-y-1 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-moRed text-white">
                        <Icon size={22} />
                      </span>

                      <span className="font-display text-4xl leading-none text-moRed/40">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-3xl uppercase leading-none sm:text-4xl">
                      {title}
                    </h3>

                    <p className="mt-4 max-w-md leading-7 text-black/60">
                      {copy}
                    </p>

                    <div className="mt-7 h-px origin-left scale-x-0 bg-moRed transition duration-500 group-hover:scale-x-100" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
