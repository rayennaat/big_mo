import Image from "next/image";
import { Clock3, Music2, Utensils } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Atmosphere() {
  return (
    <section className="bg-moRed px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle light eyebrow="More than a meal" title="Pull up. Turn it up." copy="The red booths, glowing signs and open tables make BIG MO feel like a diner, a night spot and your favorite burger stop at the same time." />
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border-4 border-moBlack lg:col-span-6">
            <Image src="/images/interior.jpg" alt="Red booth seating at BIG MO" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-4xl uppercase leading-none">Your booth is waiting.</p>
          </div>
          <div className="grid gap-5 lg:col-span-5">
            {[
              { icon: Utensils, title: "Fast comfort", copy: "Hot trays, fresh buns and food made to be eaten right away." },
              { icon: Music2, title: "Loud atmosphere", copy: "Neon light, red walls and a room that feels alive from lunch to late night." },
              { icon: Clock3, title: "Easy plans", copy: "Walk in for a quick bite or reserve a booth for the whole crew." },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-[2rem] border-4 border-moBlack bg-moCream p-7 text-moBlack shadow-card">
                <Icon size={30} className="text-moRed" />
                <h3 className="mt-5 font-display text-3xl uppercase">{title}</h3>
                <p className="mt-3 leading-6 text-black/60">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
