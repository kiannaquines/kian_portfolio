"use client";

import LearnMoreButton from "@/components/ui/button";
import { FloatingNavigation } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <HeroHighlight>
        <FloatingNavigation navItems={navItems} />
        <section id="hero-section" className="px-44 py-44">
          <div className="flex flex-col justify-items-start align-center px-4">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-4xl md:text-6xl font-bold text-black dark:text-white"
            >
              Software Developer <br />& <Highlight>Enthusiast</Highlight>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.2,
              }}
              className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl"
            >
              I'm Kian, a software developer, where I craft fullstack
              applications. After hours, I build my own projects.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.4,
              }}
              className="mt-8"
            >
              <LearnMoreButton title="About Me" onClick={() => alert('Learn more about me!')} className="mb-4" />
            </motion.div>
          </div>
        </section>
      </HeroHighlight>
    </main>
  );
}