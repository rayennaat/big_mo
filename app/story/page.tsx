"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function StoryPage() {
  const { language } = useLanguage();
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-moBlack pt-20 text-white">
        <Image src="/images/neon-logo.jpg" alt="BIG MO neon logo" fill priority className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-5 pb-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">{language === "fr" ? "Comment le shack a pris du volume" : "How the shack got loud"}</p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[.82] sm:text-8xl lg:text-[9rem]">{language === "fr" ? "L'histoire BIG MO" : "The BIG MO story"}</h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 checkerboard-small" />
      </section>

      <section className="bg-moCream px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.3em] text-moRed">{language === "fr" ? "Tout commence par une envie" : "Start with a craving"}</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[.92] sm:text-7xl">{language === "fr" ? "Cuisine simple. Forte personnalite." : "Simple food. Serious personality."}</h2>
            <p className="mt-7 text-lg leading-8 text-black/65">{language === "fr" ? "Cette page contient encore un texte temporaire autour de l'identite visuelle de BIG MO. Remplace-le par la vraie histoire, les personnes derriere BIG MO et ce qui rend le restaurant different." : "This page contains brand-story placeholder copy designed around the visual identity in the restaurant photos. Replace it with the real founding story, the people behind BIG MO and what makes the restaurant different."}</p>
            <p className="mt-5 text-lg leading-8 text-black/65">{language === "fr" ? "La direction est volontaire: materiaux de diner nostalgique, typographie moderne et palette rouge, creme, noir et jaune." : "The direction is intentional: nostalgic diner materials, bold modern typography and the same red, cream, black and yellow palette found inside the space."}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-moBlack shadow-card">
            <Image src="/images/mo.jpg" alt="Guest enjoying a meal at BIG MO" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="bg-moBlack px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">{language === "fr" ? "Ce que BIG MO defend" : "What BIG MO stands for"}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              language === "fr"
                ? { icon: Flame, title: "Chaleur fraiche", copy: "Les burgers sont smash, montes et servis au meilleur moment." }
                : { icon: Flame, title: "Fresh heat", copy: "Burgers are smashed, stacked and served at their best—not left waiting." },
              language === "fr"
                ? { icon: Heart, title: "Vraie hospitalite", copy: "La salle est energique, mais l'accueil reste simple et chaleureux." }
                : { icon: Heart, title: "Real hospitality", copy: "The room feels energetic, but the welcome stays warm and easy." },
              language === "fr"
                ? { icon: Zap, title: "Aucune bouchee banale", copy: "Chaque visuel, sauce et accompagnement est pense pour marquer." }
                : { icon: Zap, title: "No boring bites", copy: "Every visual, sauce and side is designed to leave an impression." },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-[2rem] border border-white/15 bg-white/5 p-8">
                <Icon size={32} className="text-moRed" />
                <h2 className="mt-6 font-display text-4xl uppercase">{title}</h2>
                <p className="mt-4 leading-7 text-white/60">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="checkerboard px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2.5rem] border-4 border-moBlack bg-moRed p-8 text-white sm:p-12 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-display text-5xl uppercase leading-[.9] sm:text-7xl">{language === "fr" ? "Maintenant, viens gouter l'histoire." : "Now come taste the story."}</h2>
          <Link href="/menu" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[.14em] text-moBlack transition hover:-translate-y-1 hover:bg-moBlack hover:text-white">{language === "fr" ? "Explorer le menu" : "Explore the menu"} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </>
  );
}
