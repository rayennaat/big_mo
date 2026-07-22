"use client";

import Image from "next/image";
import MenuExplorer from "@/components/MenuExplorer";
import { useLanguage } from "@/components/LanguageProvider";

export default function MenuPage() {
  const { language } = useLanguage();
  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-moBlack pt-20 text-white">
        <Image src="/images/signature-burger.jpg" alt="BIG MO signature burger" fill priority className="object-cover object-center opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="absolute inset-0 grid-wall opacity-25" />
        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-end px-5 pb-16 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">{language === "fr" ? "Choisis ton probleme" : "Pick your problem"}</p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[.82] sm:text-8xl lg:text-[9rem]">{language === "fr" ? "Le " : "The "}<span className="text-moRed neon-text">menu</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{language === "fr" ? "Burgers signature, chicken croustillant, accompagnements charges et shakes bien froids." : "Signature burgers, crispy chicken, loaded sides and cold shakes. Replace the sample items with BIG MO's real menu in one data file."}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 checkerboard-small" />
      </section>
      <section className="bg-moCream px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <MenuExplorer />
        </div>
      </section>
    </>
  );
}
