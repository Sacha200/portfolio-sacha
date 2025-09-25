import Hero from "@/components/Hero";
import BackgroundGlows from "@/components/BackgroundGlows";

export default function Home() {
  return (
    <>
      <BackgroundGlows key="hero" variant="hero" />
      <Hero />
    </>
  );
}
