"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/data/menu";
import { useLanguage } from "./LanguageProvider";
import MenuCard from "./MenuCard";
import SectionTitle from "./SectionTitle";

export default function FeaturedMenu() {
  const { language } = useLanguage();
  const copy = language === "fr"
    ? {
        eyebrow: "Les gros classiques",
        title: "Fait pour se salir",
        description: "Un menu compact autour de buns croustillants, fromage fondu et sauces qui refusent de rester dans le pain.",
        cta: "Menu complet",
      }
    : {
        eyebrow: "The heavy hitters",
        title: "Made to get messy",
        description: "A compact menu built around crisp edges, melted cheese and sauces that refuse to stay inside the bun.",
        cta: "Full menu",
      };
  return (
    <section className="relative overflow-hidden bg-moCream px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border-[28px] border-moRed/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle eyebrow={copy.eyebrow} title={copy.title} copy={copy.description} />
          <Link href="/menu" className="group inline-flex w-fit items-center gap-3 rounded-full border-2 border-moBlack px-6 py-4 text-sm font-black uppercase tracking-[.14em] transition hover:bg-moBlack hover:text-white">
            {copy.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.slice(0, 3).map((item, index) => <MenuCard key={item.name} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}
