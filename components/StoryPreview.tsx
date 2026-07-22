import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDot, Sparkles } from "lucide-react";

export default function StoryPreview() {
  return (
    <section className="overflow-hidden bg-moBlack px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="relative min-h-[560px]">
          <div className="absolute left-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-[2.5rem] border-4 border-white/10">
            <Image src="/images/crew.jpg" alt="BIG MO restaurant interior" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 40vw" />
          </div>
          <div className="absolute bottom-0 right-0 h-[48%] w-[58%] overflow-hidden rounded-[2rem] border-2 border-moBlack shadow-2xl">
            <Image src="/images/bigmo55.jpg" alt="BIG MO neon burger sign" fill className="object-cover" sizes="(max-width: 1024px) 60vw, 28vw" />
          </div>
          <div className="float-slow absolute right-[4%] top-[8%] grid h-28 w-28 place-items-center rounded-full border-2 border-moYellow bg-moRed text-center font-display text-lg uppercase leading-none text-white shadow-neon">
            Big<br />since<br />day one
          </div>
        </div>
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.3em] text-moYellow"><Sparkles size={15} /> Our story</p>
          <h2 className="font-display text-5xl uppercase leading-[.9] sm:text-6xl lg:text-8xl">A burger shack with <span className="text-moRed neon-text">main character</span> energy.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">BIG MO mixes old-school diner comfort with neon, street energy and a menu that keeps one promise: every bite should feel bigger than expected.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Freshly smashed patties",
              "Sauces mixed in-house",
              "Bold red diner atmosphere",
              "Fast, friendly service",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-black uppercase tracking-[.12em] text-white/85">
                <CircleDot size={16} className="text-moRed" /> {feature}
              </div>
            ))}
          </div>
          <Link href="/story" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[.14em] text-moBlack transition hover:-translate-y-1 hover:bg-moRed hover:text-white">
            Read the full story <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
