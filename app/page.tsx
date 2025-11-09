import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechStack from "@/components/tech-stack";
import Header from "@/components/ui/header";
import Hero from "@/components/hero";
import TimeLine from "@/components/timeline";
// import Works from "@/components/works";
import { Footer } from "@/components/ui/footer";
import { InfiniteMovingCardsShowcase } from "@/components/infinite-project";
import GitHubProjects from "@/components/github-projects";
import ImpactMetrics from "@/components/impact-metrics";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <Header />
      <main className="mt-[64px]">
        <HeroHighlight containerClassName="w-full">
          {/* Hero Section - Full viewport with CTA */}
          <section id="hero" className="min-h-[85vh] flex items-center justify-center py-12 sm:py-16">
            <div className="w-full">
              <Hero />
            </div>
          </section>

          {/* Impact Metrics - Showcase achievements */}
          <section id="impact" className="w-full py-12 sm:py-16 lg:py-20">
            <div className="px-4 sm:px-10 lg:px-28">
              <ImpactMetrics />
            </div>
          </section>

          {/* Tech Stack Showcase - Infinite scroll */}
          <section id="showcase" className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/50">
            <div className="px-4 sm:px-10 lg:px-28 mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-900 dark:text-white mb-4">
                Portfolio <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
              </h2>
              <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
                Key features and technologies that power this portfolio
              </p>
            </div>
            <InfiniteMovingCardsShowcase />
          </section>

          {/* Tech Stack Grid - All technologies */}
          <section id="tech" className="w-full py-12 sm:py-16 lg:py-24">
            <TechStack />
          </section>

          {/* GitHub Projects - Live work showcase */}
          <section id="projects" className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-transparent via-violet-50/30 to-transparent dark:via-violet-950/20">
            <div className="px-4 sm:px-10 lg:px-28">
              <GitHubProjects />
            </div>
          </section>

          {/* Timeline - Professional journey */}
          <section id="timeline" className="w-full py-12 sm:py-16 lg:py-24">
            <TimeLine />
          </section>

          {/* Footer */}
          <Footer />
        </HeroHighlight>
      </main>
    </div>
  );
}