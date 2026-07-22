type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, copy, light = false }: Props) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-3 text-xs font-black uppercase tracking-[.3em] ${light ? "text-moYellow" : "text-moRed"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl uppercase leading-[.92] sm:text-5xl lg:text-7xl ${light ? "text-white" : "text-moBlack"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-white/70" : "text-black/65"}`}>{copy}</p>}
    </div>
  );
}
