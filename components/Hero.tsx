"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";

export default function Hero() {
  const { language } = useLanguage();
  const copy =
    language === "fr"
      ? {
          description:
            "De grandes saveurs, des nuits neon et des burgers sans retenue. Bienvenue dans le shack pense pour les vraies envies.",
          menu: "Voir le menu",
          reserve: "Reserver un booth",
          badges: ["Smash burgers signature", "Frais chaque jour", "Big energy"],
        }
      : {
          description:
            "Big flavor, neon nights and unapologetically messy burgers. Welcome to the shack built for serious cravings.",
          menu: "See the menu",
          reserve: "Reserve a booth",
          badges: ["Signature smash burgers", "Fresh every day", "Big energy"],
        };

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-moBlack pt-20 text-white lg:min-h-screen">
      
      {/* Background image — higher opacity, burger positioned right-center */}
      <Image
        src="/images/back0.png"
        alt="BIG MO signature smash burger"
        fill
        priority
        className="object-cover object-[65%_center] opacity-100"
        sizes="100vw"
      />

      {/* Main gradient — strong left, fades to almost nothing on right */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.95)_0%,rgba(0,0,0,.72)_38%,rgba(0,0,0,.12)_62%,rgba(0,0,0,0)_100%)]" />

      {/* Subtle red atmosphere overlay — gives neon warmth to the whole scene */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(180,0,0,.18)_0%,transparent_65%)]" />

      {/* Bottom vignette to anchor the scene */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-wall opacity-10" />

      <div className="relative mx-auto pb-5 flex min-h-[680px] max-w-7xl items-center px-5 py-20 lg:min-h-[calc(100vh-80px)] lg:px-8">
        <Reveal variant="up" className="max-w-4xl">
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] uppercase leading-[.78] tracking-[-.06em]">
            Big <span className="neon-text text-moRed">Mo</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">
            {copy.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-moRed px-7 py-4 text-sm font-black uppercase tracking-[.16em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-moBlack"
            >
              {copy.menu}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-black/25 px-7 py-4 text-sm font-black uppercase tracking-[.16em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-moBlack"
            >
              {copy.reserve}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-black uppercase tracking-[.2em] text-white/65">
            <span className="inline-flex items-center gap-2">
              <Star size={15} fill="currentColor" className="text-moYellow" />
              {copy.badges[0]}
            </span>
            <span>{copy.badges[1]}</span>
            <span>{copy.badges[2]}</span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-5 checkerboard-small" />
    </section>
  );
}
