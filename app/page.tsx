import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechStack from "@/components/tech-stack";
import Header from "@/components/ui/header";
import Hero from "@/components/hero";
import TimeLine from "@/components/timeline";
import Works from "@/components/works";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-[family-name:var(--font-press-start)] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none opacity-50" />
      <HeroHighlight className="relative z-10">
        {/* Header */}
        <Header />
        {/* Hero */}
        <Hero />
        {/* Tech Stack */}
        <TechStack />
        {/* Timeline */}
        <TimeLine />
        {/* Works */}
        <Works />
      </HeroHighlight>
    </main>
  );
}