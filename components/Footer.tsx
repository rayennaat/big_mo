"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Logo from "./Logo";
import Reveal from "./Reveal";

export default function Footer() {
  const { language } = useLanguage();
  const copy =
    language === "fr"
      ? {
          description:
            "Des burgers audacieux, des accompagnements genereux et une ambiance qui reste en tete.",
          explore: "Explorer",
          story: "Notre histoire",
          reservations: "Reservations",
          details: "Coordonnees",
          rights: "Tous droits reserves.",
          built: "Site officiel de BIG MO Burger Shack",
        }
      : {
          description:
            "Bold burgers, loaded sides, and a dine-in atmosphere that sticks with you.",
          explore: "Explore",
          story: "Our story",
          reservations: "Reservations",
          details: "Details",
          rights: "All rights reserved.",
          built: "Official website of BIG MO Burger Shack",
        };

  return (
    <footer className="bg-moBlack px-5 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal variant="left" className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md leading-7 text-white/55">{copy.description}</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h3 className="text-xs font-black uppercase tracking-[.25em] text-moRed">{copy.explore}</h3>
            <div className="mt-5 grid gap-3 text-sm font-bold uppercase tracking-[.12em] text-white/70">
              <Link href="/menu" className="hover:text-white">Menu</Link>
              <Link href="/story" className="hover:text-white">{copy.story}</Link>
              <Link href="/reservations" className="hover:text-white">{copy.reservations}</Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={180}>
            <h3 className="text-xs font-black uppercase tracking-[.25em] text-moRed">{copy.details}</h3>
            <div className="mt-5 grid gap-4 text-sm text-white/65">
              <a href="tel:+21670161928" className="flex gap-3 transition hover:text-white">
                <Phone size={18} className="shrink-0 text-moYellow" />
                +216 70 161 928
              </a>
              <a
                href="https://www.instagram.com/bigmo_burgershack/"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <Instagram size={18} className="shrink-0 text-moYellow" />
                @bigmo_burgershack
              </a>
              <a
                href="https://www.facebook.com/BIGMO.BurgerShack/photos"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <Facebook size={18} className="shrink-0 text-moYellow" />
                BIG MO Burger Shack
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal variant="up" delay={120} className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-[.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BIG MO. {copy.rights}</p>
          <p>{copy.built}</p>
        </Reveal>
      </div>
    </footer>
  );
}
