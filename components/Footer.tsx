"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Logo from "./Logo";

export default function Footer() {
  const { language } = useLanguage();
  const copy =
    language === "fr"
      ? {
          description:
            "Un site de restaurant audacieux inspire par BIG MO, ses banquettes rouges, son damier et sa lumiere neon.",
          explore: "Explorer",
          story: "Notre histoire",
          reservations: "Reservations",
          details: "Infos",
          rights: "Tous droits reserves.",
          built: "Cree avec Next.js + Tailwind CSS",
        }
      : {
          description:
            "A bold, frontend-only restaurant website template inspired by BIG MO's red booths, checker tiles and neon glow.",
          explore: "Explore",
          story: "Our story",
          reservations: "Reservations",
          details: "Details",
          rights: "All rights reserved.",
          built: "Built with Next.js + Tailwind CSS",
        };

  return (
    <footer className="bg-moBlack px-5 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md leading-7 text-white/55">{copy.description}</p>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[.25em] text-moRed">{copy.explore}</h3>
            <div className="mt-5 grid gap-3 text-sm font-bold uppercase tracking-[.12em] text-white/70">
              <Link href="/menu" className="hover:text-white">Menu</Link>
              <Link href="/story" className="hover:text-white">{copy.story}</Link>
              <Link href="/reservations" className="hover:text-white">{copy.reservations}</Link>
            </div>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-[.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BIG MO. {copy.rights}</p>
          <p>{copy.built}</p>
        </div>
      </div>
    </footer>
  );
}
