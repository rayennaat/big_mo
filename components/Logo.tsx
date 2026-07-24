import Image from "next/image";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="BIG MO home"
      className="group inline-flex items-center gap-3"
    >
      <span className="relative h-14 w-14 shrink-0 rounded-full border-2 border-white bg-moRed shadow-neon transition duration-300 group-hover:rotate-3 group-hover:scale-105">
        <Image
          src="/images/logo2.png"
          alt=""
          fill
          priority
          sizes="64px"
          className="object-contain p-0.5 -translate-y-0.5"
        />
      </span>

      <span className={`${archivoBlack.className} text-2xl uppercase tracking-[0.06em] text-white`}>
        BIG MO
      </span>
    </Link>
  );
}
