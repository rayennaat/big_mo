import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";

export default function ReservationsPage() {
  return (
    <section className="min-h-screen bg-moRed px-5 pb-24 pt-32 lg:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-black uppercase tracking-[.3em] text-moYellow">Save your booth</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[.86] text-white sm:text-8xl">Make it a <span className="neon-text">BIG</span> night.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Choose your branch, call `70161928`, or use the live map below to open directions in a new window.</p>
          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-moBlack lg:aspect-[5/4]">
            <Image
              src="/images/booth2.jpg"
              alt="BIG MO red booth"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>
        <ReservationForm />
      </div>
    </section>
  );
}
