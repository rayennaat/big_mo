import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "@/data/menu";

type Props = { item: MenuItem; index?: number };

export default function MenuCard({ item, index = 0 }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border-2 border-moBlack bg-white shadow-card transition duration-300 hover:-translate-y-2 hover:rotate-[.4deg]">
      <div className="relative aspect-[4/3] overflow-hidden bg-moBlack">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-moYellow px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-moBlack">
          {item.tag}
        </span>
        <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-moRed text-white shadow-neon">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-display text-4xl text-moRed">0{index + 1}</span>
          <span className="h-[2px] flex-1 bg-moBlack/15" />
          <span className="text-[10px] font-black uppercase tracking-[.2em] text-black/45">{item.category}</span>
        </div>
        <h3 className="font-display text-3xl uppercase leading-none">{item.name}</h3>
        <p className="mt-4 leading-6 text-black/60">{item.description}</p>
      </div>
    </article>
  );
}
