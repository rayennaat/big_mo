"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";

export default function StoryPage() {
  const { language } = useLanguage();
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-moBlack pt-20 text-white">
        <Image src="/images/neon-logo.jpg" alt="BIG MO neon logo" fill priority className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-5 pb-16 lg:px-8">
          <Reveal variant="up" className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">{language === "fr" ? "L'esprit BIG MO" : "The BIG MO spirit"}</p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[.82] sm:text-8xl lg:text-[9rem]">{language === "fr" ? "L'histoire BIG MO" : "The BIG MO story"}</h1>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 checkerboard-small" />
      </section>

      <section className="bg-moCream px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <p className="text-xs font-black uppercase tracking-[.3em] text-moRed">{language === "fr" ? "Tout commence par une envie" : "It starts with a craving"}</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[.92] sm:text-7xl">{language === "fr" ? "Cuisine simple. Caractere bien assume." : "Simple food. Serious character."}</h2>
            <p className="mt-7 text-lg leading-8 text-black/65">{language === "fr" ? "BIG MO est ne d'une envie simple: servir des burgers genereux dans un lieu qui a autant de personnalite que l'assiette. Ici, le gout compte, mais l'ambiance aussi." : "BIG MO started with a simple idea: serve generous burgers in a space with as much personality as the food. The flavor matters here, but so does the atmosphere."}</p>
            <p className="mt-5 text-lg leading-8 text-black/65">{language === "fr" ? "Entre les banquettes rouges, les touches neon et l'energie du service, tout est pense pour donner envie de rester un peu plus longtemps." : "From the red booths to the neon glow and the fast, friendly service, every detail is built to make people want to stay a little longer."}</p>
          </Reveal>
          <Reveal variant="right" delay={120} className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-moBlack shadow-card">
            <Image src="/images/mo.jpg" alt="Guest enjoying a meal at BIG MO" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>
        </div>
      </section>

      <section className="bg-moBlack px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal variant="up">
            <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">{language === "fr" ? "Ce que BIG MO represente" : "What BIG MO stands for"}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              language === "fr"
                ? { icon: Flame, title: "Servi bien chaud", copy: "Les burgers sont smash, montes et servis a leur meilleur moment, sans attente inutile." }
                : { icon: Flame, title: "Fresh heat", copy: "Burgers are smashed, stacked and served at their best, not left waiting." },
              language === "fr"
                ? { icon: Heart, title: "Vraie hospitalite", copy: "La salle est pleine d'energie, mais l'accueil reste simple, chaleureux et attentionne." }
                : { icon: Heart, title: "Real hospitality", copy: "The room feels energetic, but the welcome stays warm and easy." },
              language === "fr"
                ? { icon: Zap, title: "Aucune bouchee banale", copy: "Chaque sauce, accompagnement et detail visuel est pense pour laisser une impression durable." }
                : { icon: Zap, title: "No boring bites", copy: "Every visual, sauce and side is designed to leave an impression." },
            ].map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} delay={index * 120} variant="up">
                <article className="rounded-[2rem] border border-white/15 bg-white/5 p-8">
                  <Icon size={32} className="text-moRed" />
                  <h2 className="mt-6 font-display text-4xl uppercase">{title}</h2>
                  <p className="mt-4 leading-7 text-white/60">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="checkerboard px-5 py-20 lg:px-8 lg:py-28">
        <Reveal variant="up" className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[2.5rem] border-4 border-moBlack bg-moRed p-8 text-white sm:p-12 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-display text-5xl uppercase leading-[.9] sm:text-7xl">{language === "fr" ? "Maintenant, viens gouter l'esprit BIG MO." : "Now come taste the BIG MO spirit."}</h2>
          <Link href="/menu" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[.14em] text-moBlack transition hover:-translate-y-1 hover:bg-moBlack hover:text-white">{language === "fr" ? "Explorer le menu" : "Explore the menu"} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>
        </Reveal>
      </section>
    </>
  );
}
