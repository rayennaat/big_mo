import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-moBlack px-5 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md leading-7 text-white/55">A bold, frontend-only restaurant website template inspired by BIG MO&apos;s red booths, checker tiles and neon glow.</p>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[.25em] text-moRed">Explore</h3>
            <div className="mt-5 grid gap-3 text-sm font-bold uppercase tracking-[.12em] text-white/70">
              <Link href="/menu" className="hover:text-white">Menu</Link>
              <Link href="/story" className="hover:text-white">Our story</Link>
              <Link href="/reservations" className="hover:text-white">Reservations</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[.25em] text-moRed">Details</h3>
            <div className="mt-5 grid gap-4 text-sm text-white/65">
              <p className="flex gap-3"><MapPin size={18} className="shrink-0 text-moYellow" /> Add the restaurant address here</p>
              <p className="flex gap-3"><Phone size={18} className="shrink-0 text-moYellow" /> +216 XX XXX XXX</p>
              <p className="flex gap-3"><Instagram size={18} className="shrink-0 text-moYellow" /> @bigmo</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-[.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BIG MO. All rights reserved.</p>
          <p>Built with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
