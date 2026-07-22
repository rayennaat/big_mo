"use client";

import { useMemo, useState } from "react";
import { menuItems } from "@/data/menu";
import MenuCard from "./MenuCard";

const categories = ["All", "Burgers", "Chicken", "Sides", "Shakes"] as const;

export default function MenuExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? menuItems : menuItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <>
      <div className="custom-scrollbar mt-10 flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`whitespace-nowrap rounded-full border-2 border-moBlack px-5 py-3 text-xs font-black uppercase tracking-[.16em] transition ${
              active === category ? "bg-moBlack text-white" : "bg-transparent text-moBlack hover:bg-moRed hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => <MenuCard key={item.name} item={item} index={index} />)}
      </div>
    </>
  );
}
