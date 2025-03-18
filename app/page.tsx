import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechStack from "@/components/tech-stack";
import Header from "@/components/ui/header";
import Hero from "@/components/hero";
import TimeLine from "@/components/timeline";
import Works from "@/components/works";
import { ContactForm } from "@/components/ui/contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="mt-[64px]">
        <HeroHighlight className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <section id="hero" className="col-span-1 lg:col-span-3">
              <Hero />
            </section>
            <section id="tech-stack" className="col-span-1 lg:col-span-3">
              <TechStack />
            </section>
            <section id="timeline" className="col-span-1 lg:col-span-3">
              <TimeLine />
            </section>
            <section id="works" className="col-span-1 md:col-span-3">
              <Works />
            </section>
            <section id="contact" className="col-span-1 lg:col-span-3">
              <ContactForm/>
            </section>
          </div>
        </HeroHighlight>
      </main>
    </div>
  );
}