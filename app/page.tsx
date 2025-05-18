import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechStack from "@/components/tech-stack";
import Header from "@/components/ui/header";
import Hero from "@/components/hero";
import TimeLine from "@/components/timeline";
import Works from "@/components/works";
import { Footer } from "@/components/ui/footer";
import { InfiniteMovingCardsFeedback } from "@/components/infinite-project";

export default function Home() {
  return (
    <div className="grid grid-rows-1 h-screen w-full">
      <Header />
      <main className="mt-[64px]">
        <HeroHighlight containerClassName="min-h-height min-w-width" >
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10">
            <section id="hero" className="col-span-1 lg:col-span-1">
              <Hero />
              <InfiniteMovingCardsFeedback />
            </section>
            <section id="tech" className="col-span-1 lg:col-span-1">
              <TechStack />
            </section>
            <section id="timeline" className="col-span-1 lg:col-span-1">
              <TimeLine />
            </section>
            <section id="works" className="col-span-1 md:col-span-1">
              <Works />
            </section>
          </div>
          <Footer />
        </HeroHighlight>
      </main>
    </div>
  );
}