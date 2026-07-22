import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function ReservationCTA() {
  return (
    <section className="checkerboard px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border-4 border-moBlack bg-moBlack px-6 py-14 text-center text-white shadow-2xl sm:px-10 lg:py-20">
        <Users className="mx-auto text-moYellow" size={34} />
        <p className="mt-5 text-xs font-black uppercase tracking-[.3em] text-moRed">Bring the whole crew</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl uppercase leading-[.9] sm:text-7xl lg:text-8xl">The only thing better than one burger is a table full of them.</h2>
        <Link href="/reservations" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-moRed px-8 py-4 text-sm font-black uppercase tracking-[.16em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-moBlack">
          Reserve your table <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
