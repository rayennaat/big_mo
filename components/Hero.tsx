import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-moBlack pt-20 text-white lg:min-h-screen">
      <Image
        src="/images/back7.png"
        alt="BIG MO neon sign inside the restaurant"
        fill
        priority
        className="object-cover object-center opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.62)_48%,rgba(0,0,0,.35)_100%)]" />
      <div className="absolute inset-0 grid-wall opacity-30" />
      <div className="relative mx-auto pb-5 flex min-h-[680px] max-w-7xl items-center px-5 py-20 lg:min-h-[calc(100vh-80px)] lg:px-8">
        <div className="max-w-4xl reveal-up">
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] uppercase leading-[.78] tracking-[-.06em]">
            Big <span className="neon-text text-moRed">Mo</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">
            Big flavor, neon nights and unapologetically messy burgers. Welcome to the shack built for serious cravings.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/menu" className="group inline-flex items-center justify-center gap-3 rounded-full bg-moRed px-7 py-4 text-sm font-black uppercase tracking-[.16em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-moBlack">
              See the menu
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/reservations" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-black/25 px-7 py-4 text-sm font-black uppercase tracking-[.16em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-moBlack">
              Reserve a booth
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-black uppercase tracking-[.2em] text-white/65">
            <span className="inline-flex items-center gap-2"><Star size={15} fill="currentColor" className="text-moYellow" /> Signature smash burgers</span>
            <span>Fresh every day</span>
            <span>Big energy</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-5 checkerboard-small" />
    </section>
  );
}
