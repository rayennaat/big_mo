"use client";

import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "./LanguageProvider";
import Logo from "./Logo";

const labels = {
  en: {
    links: [
      { href: "/", label: "Home" },
      { href: "/menu", label: "Menu" },
      { href: "/gallery", label: "Gallery" },
      { href: "/story", label: "Our story" },
    ],
    languageButton: "Change language",
    mobileLanguage: "Français",
    reservations: "Book a table",
  },
  fr: {
    links: [
      { href: "/", label: "Accueil" },
      { href: "/menu", label: "Menu" },
      { href: "/gallery", label: "Galerie" },
      { href: "/story", label: "Notre histoire" },
    ],
    languageButton: "Changer la langue",
    mobileLanguage: "English",
    reservations: "Reserver une table",
  },
} as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const copy = labels[language];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-moBlack/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-7">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {copy.links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-black uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "text-moRed"
                    : "text-white hover:text-moRed"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {/* Translation button — functionality can be added later */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.languageButton}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-white transition hover:border-moRed hover:bg-moRed"
          >
            <Languages size={19} />
            <span className="text-[10px] font-black uppercase tracking-[0.16em]">
              {language === "en" ? "FR" : "EN"}
            </span>
          </button>

          <Link
            href="/reservations"
            className="inline-flex rounded-full bg-moRed px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-moBlack"
          >
            {copy.reservations}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-moBlack px-5 py-5 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {copy.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/10 hover:text-moRed"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={toggleLanguage}
              className="mt-2 flex items-center gap-3 rounded-xl px-4 py-4 font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/10 hover:text-moRed"
            >
              <Languages size={19} />
              {copy.mobileLanguage}
            </button>

            <Link
              href="/reservations"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-moRed px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-white"
            >
              {copy.reservations}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
