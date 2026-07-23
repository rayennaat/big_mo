"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDot, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";

export default function StoryPreview() {
  const { language } = useLanguage();
  const copy = language === "fr"
    ? {
        eyebrow: "Notre histoire",
        title: "Un burger shack avec une energie de personnage principal.",
        description: "BIG MO melange le confort d'un diner old-school, le neon, l'energie urbaine et un menu avec une promesse simple: chaque bouchee doit paraitre plus grande que prevu.",
        features: ["Steaks smash frais", "Sauces faites maison", "Ambiance diner rouge", "Service rapide et sympa"],
        cta: "Lire toute l'histoire",
      }
    : {
        eyebrow: "Our story",
        title: "A burger shack with main character energy.",
        description: "BIG MO mixes old-school diner comfort with neon, street energy and a menu that keeps one promise: every bite should feel bigger than expected.",
        features: ["Freshly smashed patties", "Sauces mixed in-house", "Bold red diner atmosphere", "Fast, friendly service"],
        cta: "Read the full story",
      };
  return (
    <section className="overflow-hidden bg-moBlack px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="relative min-h-[560px]">
          <Reveal variant="zoom" className="absolute left-0 top-0 h-[78%] w-[78%]" delay={0}>
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-white/10">
              <Image src="/images/crew.jpg" alt="BIG MO restaurant interior" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 40vw" />
            </div>
          </Reveal>
          <Reveal variant="zoom" className="absolute bottom-0 right-0 h-[48%] w-[58%]" delay={180}>
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-2 border-moBlack shadow-2xl">
              <Image src="/images/bigmo55.jpg" alt="BIG MO neon burger sign" fill className="object-cover" sizes="(max-width: 1024px) 60vw, 28vw" />
            </div>
          </Reveal>
          <Reveal variant="zoom" className="absolute right-[4%] top-[8%]" delay={320}>
            <div className="float-slow grid h-28 w-28 place-items-center rounded-full border-2 border-moYellow bg-moRed text-center font-display text-lg uppercase leading-none text-white shadow-neon">
              Big<br />since<br />day one
            </div>
          </Reveal>
        </div>
        <Reveal variant="right" delay={120}>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.3em] text-moYellow"><Sparkles size={15} /> {copy.eyebrow}</p>
          <h2 className="font-display text-5xl uppercase leading-[.9] sm:text-6xl lg:text-8xl">{copy.title}</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">{copy.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {copy.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-black uppercase tracking-[.12em] text-white/85">
                <CircleDot size={16} className="text-moRed" /> {feature}
              </div>
            ))}
          </div>
          <Link href="/story" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[.14em] text-moBlack transition hover:-translate-y-1 hover:bg-moRed hover:text-white">
            {copy.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
