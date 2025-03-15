import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechStack from "@/components/tech-stack";
import Header from "@/components/ui/header";
import Hero from "@/components/hero";
import TimeLine from "@/components/timeline";
import Works from "@/components/works";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-[family-name:var(--font-press-start)] relative overflow-hidden">
      <HeroHighlight className="relative">
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="tech-stack" className="py-10">
          <TechStack />
        </section>
        <section id="timeline" className="py-10">
          <TimeLine />
        </section>
        <section id="works" className="py-10">
          <Works />
        </section>
      </HeroHighlight>
    </main>
  );
}