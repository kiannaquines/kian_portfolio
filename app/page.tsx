import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechStack from "@/components/tech-stack";
import Header from "@/components/ui/header";
import Hero from "@/components/hero";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-press-start)]">
      {/* Main Highlight*/}
      <HeroHighlight>
        {/* Header */}
        <Header />
        {/* Hero */}
        <Hero />
      </HeroHighlight>
      {/* About Timeline */}
      <TimeLine />
      {/* Tech Stack */}
      <TechStack />
    </main>
  );
}