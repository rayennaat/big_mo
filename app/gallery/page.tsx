import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Camera } from "lucide-react";

import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

import signatureBurger from "@/public/images/signature-burger.jpg";
import neonLogo from "@/public/images/neon-logo.jpg";

export const metadata: Metadata = {
  title: "Gallery | BIG MO",
  description:
    "Explore BIG MO burgers, neon signs, restaurant interiors, guests and atmosphere.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-moBlack text-white">
      {/* Gallery collection */}
      <section
        id="gallery"
        className="relative scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,0,.08),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-moYellow">
                The complete collection
              </p>

              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                Pick a mood.
                <span className="block text-moRed">Open a frame.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/55">
              Select a category or open any photograph to explore the restaurant
              in fullscreen.
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  );
}