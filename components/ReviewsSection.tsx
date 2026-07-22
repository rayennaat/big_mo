"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const reviews = [
  {
    quote:
      "Great burger, good atmosphere inside, and if you add the really affordable prices for the quality, this place has everything going for it.",
    author: "Nassim Kefi",
  },
  {
    quote:
      "Very clean restaurant, really delicious burgers, and a nice decor reminiscent of Five Guys. The prices are very competitive compared to what's on the market. Excellent value for money, I highly recommend it.",
    author: "Ben Tbourbi",
  },
  {
    quote:
      "Honestly, it's one of the best burgers I've ever tasted. Succulent, exquisite, and generous, a real treat. I recommend it without hesitation.",
    author: "Yosr Berrais",
  },
  {
    quote:
      "Clean and fun environment, staff is so friendly, and the food is great. The buns are especially tasty. This feels like an In-N-Out Burger or Five Guys that we have in the US. They have a pretty simple menu, but they make them well.",
    author: "Christina Hazel",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const { language } = useLanguage();

  const goToReview = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const showPrevious = () => {
    setDirection(-1);
    setCurrent((value) => (value - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setDirection(1);
    setCurrent((value) => (value + 1) % reviews.length);
  };

  return (
    <section className="w-full bg-moBlack">
      <div className="grid min-h-[760px] lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src="/images/mo2.jpg"
            alt="BIG MO burger and restaurant detail"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
          <div className="w-full">
            <p className="text-xs font-black uppercase tracking-[.32em] text-moYellow">{language === "fr" ? "Avis" : "Reviews"}</p>
            <div className="relative mt-10 min-h-[400px] overflow-hidden">
              {reviews.map((review, index) => {
                const isActive = index === current;
                const offsetClass = isActive
                  ? "translate-x-0 opacity-100"
                  : direction === 1
                    ? "translate-x-12 opacity-0"
                    : "-translate-x-12 opacity-0";

                return (
                  <article
                    key={review.author}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${offsetClass}`}
                  >
                    <span className="font-display text-7xl leading-none text-moRed sm:text-8xl">“</span>
                    <div className="mt-6 flex gap-1 text-moYellow">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="mt-8 max-w-2xl text-2xl leading-[1.45] text-moCream sm:text-3xl lg:text-[2rem]">
                      {review.quote}
                    </p>
                    <p className="mt-8 text-sm font-black uppercase tracking-[.28em] text-white/72">{review.author}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={language === "fr" ? "Avis precedent" : "Previous review"}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/18 text-moCream transition hover:border-moRed hover:text-moRed"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={language === "fr" ? "Avis suivant" : "Next review"}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/18 text-moCream transition hover:border-moRed hover:text-moRed"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {reviews.map((review, index) => (
                  <button
                    key={review.author}
                    type="button"
                    onClick={() => goToReview(index)}
                    aria-label={language === "fr" ? `Aller a l'avis ${index + 1}` : `Go to review ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === current ? "w-8 bg-moRed" : "w-2.5 bg-white/25 hover:bg-white/45"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
