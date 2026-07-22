"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

import type {
  GalleryCategory,
  GalleryImage,
} from "@/data/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
};

type GalleryFilter = "all" | GalleryCategory;

const filters: {
  label: string;
  value: GalleryFilter;
}[] = [
  { label: "All shots", value: "all" },
  { label: "Food", value: "food" },
  { label: "Interior", value: "interior" },
  { label: "People", value: "people" },
  { label: "Brand", value: "brand" },
  { label: "Moments", value: "moments" },
];

const categoryLabels: Record<GalleryCategory, string> = {
  food: "Food",
  interior: "Interior",
  people: "People",
  brand: "Brand",
  moments: "Moments",
};

export default function GalleryGrid({
  images,
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] =
    useState<GalleryFilter>("all");

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") {
      return images;
    }

    return images.filter(
      (image) => image.category === activeFilter,
    );
  }, [activeFilter, images]);

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;

  function showPrevious() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (
        (currentIndex - 1 + filteredImages.length) %
        filteredImages.length
      );
    });
  }

  function showNext() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % filteredImages.length;
    });
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return (
            (currentIndex - 1 + filteredImages.length) %
            filteredImages.length
          );
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return (
            (currentIndex + 1) %
            filteredImages.length
          );
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredImages.length, selectedIndex]);

  return (
    <>
      {/* Filters */}
      <div className="sticky top-20 z-30 -mx-5 mb-10 border-y border-white/10 bg-moBlack/90 px-5 py-4 backdrop-blur-xl lg:mx-0 lg:rounded-full lg:border">
        <div className="flex items-center gap-2 overflow-x-auto lg:justify-center">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => {
                  setActiveFilter(filter.value);
                  setSelectedIndex(null);
                }}
                className={[
                  "shrink-0 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300",
                  isActive
                    ? "bg-moRed text-white shadow-lg shadow-moRed/20"
                    : "border border-white/10 bg-white/[0.03] text-white/55 hover:border-white/30 hover:bg-white/[0.08] hover:text-white",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result information */}
      <div className="mb-7 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          {filteredImages.length}{" "}
          {filteredImages.length === 1 ? "photograph" : "photographs"}
        </p>

        <p className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/30 sm:block">
          Select an image to expand
        </p>
      </div>

      {/* Masonry gallery */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {filteredImages.map((image, index) => (
          <button
            key={`${image.alt}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open ${image.alt}`}
            className={[
              "group mb-4 block w-full break-inside-avoid text-left",
              index % 7 === 0 ? "lg:mb-7" : "",
            ].join(" ")}
          >
            <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition duration-500 group-hover:-translate-y-1 group-hover:border-moRed/50 group-hover:shadow-2xl group-hover:shadow-moRed/10">
              <Image
                src={image.src}
                alt={image.alt}
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.24em] text-moYellow">
                    {categoryLabels[image.category]}
                  </p>

                  <p className="mt-2 line-clamp-2 max-w-[220px] text-sm font-bold leading-5 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                    {image.alt}
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 scale-90 items-center justify-center rounded-full border border-white/20 bg-black/45 opacity-0 backdrop-blur-md transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Maximize2 size={16} />
                </span>
              </div>

              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[9px] font-black tracking-[0.2em] text-white/70 backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </div>
            </article>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}
        >
          <div className="grid-wall pointer-events-none absolute inset-0 opacity-10" />

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:rotate-90 hover:bg-moRed"
          >
            <X size={21} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:border-moRed hover:bg-moRed sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:border-moRed hover:bg-moRed sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative z-10 flex h-full w-full max-w-[1500px] flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[72vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 flex w-full max-w-3xl items-start justify-between gap-6 border-t border-white/10 pt-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-moYellow">
                  {categoryLabels[selectedImage.category]}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
                  {selectedImage.alt}
                </p>
              </div>

              <p className="shrink-0 font-display text-2xl text-white/45">
                {String(selectedIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-moRed">/</span>
                {String(filteredImages.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}