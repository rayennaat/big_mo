import { ExternalLink, Phone } from "lucide-react";

const branches = [
  {
    name: "La Marsa",
    phone: "70161928",
    embedUrl: "https://www.google.com/maps?q=36.883004,10.3328736&z=17&output=embed",
    mapUrl:
      "https://www.google.com/maps/place/BIG+MO+-+Burger+Shack/@36.8830083,10.3302987,17z/data=!3m1!4b1!4m6!3m5!1s0x12e2b5f84ca2aa9f:0x682529ee7187c7f!8m2!3d36.883004!4d10.3328736!16s%2Fg%2F11tcr1gfwr?hl=en-tn&entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Menzah 5",
    phone: "70161928",
    embedUrl: "https://www.google.com/maps?q=36.8487422,10.1804229&z=17&output=embed",
    mapUrl:
      "https://www.google.com/maps/place/BIG+MO+-+Menzah+5/@36.8487422,10.1804229,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd350faf4b8707:0x7e1ea76686e09b83!8m2!3d36.8487422!4d10.1804229!16s%2Fg%2F11z522zj81?hl=en-tn&entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function ReservationForm() {
  return (
    <div className="grid gap-8">
      {branches.map((branch) => (
        <article key={branch.name}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">{branch.name}</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[.92] text-white sm:text-5xl">
                BIG MO {branch.name}
              </h2>
              <a
                href={`tel:${branch.phone}`}
                className="mt-3 inline-flex items-center gap-3 text-lg font-black uppercase tracking-[.12em] text-white/85 transition hover:text-moYellow"
              >
                <Phone size={18} />
                {branch.phone}
              </a>
            </div>
            <div>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-moBlack bg-moCream px-6 py-4 text-sm font-black uppercase tracking-[.16em] text-moBlack transition hover:-translate-y-1 hover:bg-moBlack hover:text-white"
              >
                <ExternalLink size={18} />
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[2rem] border-4 border-moBlack bg-white shadow-card">
            <iframe
              title={`BIG MO ${branch.name} map`}
              src={branch.embedUrl}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
