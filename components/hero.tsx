"use client";

import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "./ui/primary-button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconUserScan,
} from "@tabler/icons-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero-section" className="px-6 lg:px-[150px] py-[150px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl md:text-5xl font-bold dark:text-white"
          >
            <span>Software Developer</span>
            <br />
            <TypeAnimation
              className="text-violet-500"
              sequence={[
                "Cloud Nerd",
                2000,
                "UI Designer",
                2000,
                "Freelancer",
                2000,
                "DevOps",
                2000,
                "Full Stack",
                2000,
              ]}
              speed={30}
              repeat={Infinity}
              wrapper="span"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.2,
            }}
            className="mt-6 text-md text-neutral-800 dark:text-neutral-300"
          >
            I'm Kian, a software developer crafting full-stack web and mobile
            applications. After hours, I build my own projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.4,
            }}
            className="mt-8 flex flex-wrap justify-start gap-4"
          >
            <PrimaryButton
              title="Resume"
              className="text-sm hover:bg-violet-600 transition-colors"
            />
            <PrimaryButton
              title="About Me"
              icon={<IconUserScan />}
              className="text-sm hover:bg-violet-600 transition-colors"
            />
          </motion.div>

          <div className="mt-8 flex justify-start gap-4">
            <a
              href="https://github.com/kiannaquines"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full hover:bg-violet-500 transition-colors hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]">
                <IconBrandGithub className="text-2xl text-neutral-700 dark:text-neutral-300 hover:text-white transition-colors" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kian-jearard-naquines-7406772a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full hover:bg-violet-500 transition-colors hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]">
                <IconBrandLinkedin className="text-2xl text-neutral-700 dark:text-neutral-300 hover:text-white transition-colors" />
              </div>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full hover:bg-violet-500 transition-colors hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]">
                <IconBrandTwitter className="text-2xl text-neutral-700 dark:text-neutral-300 hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="mt-8 md:mt-0 z-10"
        >
          <Image
            src="/anime_me.png"
            alt="Me"
            className="rounded-md object-cover cursor-pointer border-4 border-violet-500 shadow-[0_0_20px_10px_rgba(124,58,237,0.3)]"
            width={390}
            height={270}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
