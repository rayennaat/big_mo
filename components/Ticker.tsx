const words = ["SMASHED FRESH", "BIG FLAVOR", "NEON NIGHTS", "CRINKLE FRIES", "SHAKES ON DECK", "NO SMALL BITES"];

export default function Ticker() {
  const repeated = [...words, ...words];
  return (
    <div className="overflow-hidden border-y-4 border-moBlack bg-moRed py-4 text-white">
      <div className="marquee-track flex items-center">
        {repeated.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center whitespace-nowrap font-display text-2xl uppercase tracking-wide sm:text-3xl">
            {word}<span className="mx-5 text-moYellow">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
