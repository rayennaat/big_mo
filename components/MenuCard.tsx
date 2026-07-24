"use client";

import type { MenuItem } from "@/data/menu";
import { useLanguage } from "./LanguageProvider";

type Props = {
  item: MenuItem;
  index?: number;
};

export default function MenuCard({ item, index = 0 }: Props) {
  const { language } = useLanguage();
  const categoryLabels = language === "fr"
    ? {
        Burgers: "Burgers",
        Shawarma: "Shawarma",
        Sides: "Accompagnements",
        Kids: "Enfants",
        Drinks: "Boissons",
        Desserts: "Desserts",
      }
    : {
        Burgers: "Burgers",
        Shawarma: "Shawarma",
        Sides: "Sides",
        Kids: "Kids",
        Drinks: "Drinks",
        Desserts: "Desserts",
      };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-moBlack bg-[#fff8ec] shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="checkerboard-small h-3" />

      <div className="flex items-center justify-between border-b-2 border-moBlack px-6 py-4">
        <span className="text-[10px] font-black uppercase tracking-[.22em] text-moRed">
          {categoryLabels[item.category]}
        </span>

        {item.tag && (
          <span className="rounded-full bg-moYellow px-3 py-1.5 text-[9px] font-black uppercase tracking-[.18em] text-moBlack">
            {language === "fr" && item.tag === "New" ? "Nouveau" : item.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          <span className="font-display text-4xl leading-none text-moRed">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="pt-1">
            <h3 className="font-display text-3xl uppercase leading-[.95] text-moBlack">
              {item.name}
            </h3>

            {item.description && (
              <p className="mt-4 text-sm leading-6 text-black/60">
                {item.description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto space-y-2 pt-7">
          {item.prices.map((price, priceIndex) => (
            <div
              key={`${item.name}-${price.label ?? priceIndex}`}
              className="flex items-end justify-between gap-4 rounded-xl bg-moBlack px-4 py-3 text-white"
            >
              <span className="text-[10px] font-black uppercase tracking-[.18em] text-white/60">
                {price.label ?? (language === "fr" ? "Prix" : "Price")}
              </span>

              <span className="font-display text-2xl leading-none text-moYellow">
                {price.value}
                <span className="ml-1 text-xs">DT</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
