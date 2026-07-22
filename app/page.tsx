import Atmosphere from "@/components/Atmosphere";
import FeaturedMenu from "@/components/FeaturedMenu";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ReservationCTA from "@/components/ReservationCTA";
import StoryPreview from "@/components/StoryPreview";
import Ticker from "@/components/Ticker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <FeaturedMenu />
      <StoryPreview />
      <Atmosphere />
      <Gallery />
      <ReservationCTA />
    </>
  );
}
