import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2" aria-label="BIG MO home">
      <span className="relative grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-moRed text-[10px] font-black leading-none text-white shadow-neon transition-transform group-hover:rotate-3 group-hover:scale-105">
        <span className="absolute left-2 right-2 top-2 h-[2px] rounded-full bg-white" />
        BIG
        <span className="block">MO</span>
        <span className="absolute bottom-2 left-2 right-2 h-[2px] rounded-full bg-white" />
      </span>
      <span className="font-display text-xl uppercase tracking-[.14em] text-white">Big Mo</span>
    </Link>
  );
}
