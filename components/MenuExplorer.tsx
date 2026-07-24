"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";

import {
  burgerFreeToppings,
  burgerSupplements,
  menuItems,
  shawarmaFreeToppings,
  shawarmaSupplements,
  type MenuCategory,
} from "@/data/menu";

import MenuCard from "./MenuCard";

const categories = [
  "All",
  "Burgers",
  "Shawarma",
  "Sides",
  "Kids",
  "Drinks",
  "Desserts",
] as const;

type ActiveCategory = (typeof categories)[number];

type ExtrasPanelProps = {
  title: string;
  freeItems: string[];
  supplements: {
    name: string;
    price: string;
  }[];
  menuUpgrade?: boolean;
};

function ExtrasPanel({
  title,
  freeItems,
  supplements,
  menuUpgrade = false,
}: ExtrasPanelProps) {
  const { language } = useLanguage();

  return (
    <section className="mt-10 overflow-hidden rounded-[2rem] border-2 border-moBlack bg-moRed text-white">
      <div className="checkerboard-small h-4" />

      <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-9">
        <div>
          <p className="text-xs font-black uppercase tracking-[.25em] text-moYellow">
            {language === "fr" ? "Inclus" : "Included"}
          </p>

          <h3 className="mt-3 font-display text-4xl uppercase">
            {language === "fr" ? `Toppings ${title}` : `${title} toppings`}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {freeItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold"
              >
                {item}
              </span>
            ))}
          </div>

          {menuUpgrade && (
            <div className="mt-6 inline-flex rounded-full bg-moYellow px-5 py-3 text-xs font-black uppercase tracking-[.18em] text-moBlack">
              {language === "fr" ? "Passer en menu +2 DT" : "Upgrade to menu +2 DT"}
            </div>
          )}
        </div>

        <div className="rounded-[1.5rem] bg-[#920012] p-5">
          <p className="text-xs font-black uppercase tracking-[.25em] text-moYellow">
            {language === "fr" ? "Supplements" : "Add-ons"}
          </p>

          <div className="mt-5 space-y-3">
            {supplements.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 border-b border-white/15 pb-3"
              >
                <span className="text-sm font-bold">{item.name}</span>

                <span className="font-display text-xl text-moYellow">
                  {item.price} DT
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MenuExplorer() {
  const { language } = useLanguage();
  const [active, setActive] = useState<ActiveCategory>("All");
  const categoryLabels = language === "fr"
    ? {
        All: "Tout",
        Burgers: "Burgers",
        Shawarma: "Shawarma",
        Sides: "Accompagnements",
        Kids: "Enfants",
        Drinks: "Boissons",
        Desserts: "Desserts",
      }
    : {
        All: "All",
        Burgers: "Burgers",
        Shawarma: "Shawarma",
        Sides: "Sides",
        Kids: "Kids",
        Drinks: "Drinks",
        Desserts: "Desserts",
      };

  const filtered = useMemo(() => {
    if (active === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === (active as MenuCategory),
    );
  }, [active]);

  const showBurgers = active === "All" || active === "Burgers";
  const showShawarma = active === "All" || active === "Shawarma";

  return (
    <>
      <div className="custom-scrollbar mt-10 flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`whitespace-nowrap rounded-full border-2 border-moBlack px-5 py-3 text-xs font-black uppercase tracking-[.16em] transition ${
              active === category
                ? "bg-moBlack text-white"
                : "bg-transparent text-moBlack hover:bg-moRed hover:text-white"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-b-2 border-moBlack/10 pb-5">
        <p className="text-xs font-black uppercase tracking-[.2em] text-black/45">
          {filtered.length} {language === "fr" ? "articles" : "menu items"}
        </p>

        <p className="text-xs font-black uppercase tracking-[.2em] text-moRed">
          {language === "fr" ? "Prix en DT" : "Prices in DT"}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <MenuCard
            key={`${item.category}-${item.name}`}
            item={item}
            index={index}
          />
        ))}
      </div>

      {showBurgers && (
        <ExtrasPanel
          title="Burger"
          freeItems={burgerFreeToppings}
          supplements={burgerSupplements}
          menuUpgrade
        />
      )}

      {showShawarma && (
        <ExtrasPanel
          title="Shawarma"
          freeItems={shawarmaFreeToppings}
          supplements={shawarmaSupplements}
          menuUpgrade
        />
      )}
    </>
  );
}
