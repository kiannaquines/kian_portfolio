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
    <section 
      id="hero-section" 
      className="w-full px-4 sm:px-32 md:px-10 lg:px-32 sm:py-20 lg:py-32 mx-auto sm:mt-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-evenly max-w-6xl mx-auto mt-32 sm:mt-0 gap-12 lg:gap-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-2xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white"
          >
            <span>Software Developer</span>
            <br />
            <TypeAnimation
              className="text-violet-500"
              sequence={[
                "Cloud Nerd",
                2000,
                "Designer",
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
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-neutral-800 dark:text-neutral-300"
          >
            I'm Kian, a software developer crafting full-stack web and mobile applications. After hours, I build my own projects with ML.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
          >
            <PrimaryButton title="Resume" className="text-xs sm:text-sm hover:bg-violet-600 hover:text-white transition-colors" />
            <PrimaryButton title="About Me" icon={<IconUserScan />} className="text-xs sm:text-sm hover:bg-violet-600 hover:text-white  transition-colors" />
            <PrimaryButton title="Hire Me" className="text-xs sm:text-sm hover:bg-violet-600 hover:text-white  transition-colors" />
          </motion.div>

          <div className="mt-6 flex justify-center md:justify-start gap-3">
            {[
              { href: "https://github.com/kiannaquines", icon: <IconBrandGithub /> },
              { href: "https://www.linkedin.com/in/kian-jearard-naquines-7406772a8/", icon: <IconBrandLinkedin /> },
              { href: "https://twitter.com/yourusername", icon: <IconBrandTwitter /> },
            ].map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full hover:bg-violet-600 hover:text-white transition-colors hover:shadow-[0_0_15px_5px_rgba(124,58,237,0.3)]">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-full md:w-1/2 flex justify-center sm:justify-end"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-square">
            <Image
              src="/anime_me.png"
              alt="Me"
              className="rounded-full object-contain w-full h-full border-4 border-violet-500 shadow-[0_0_20px_10px_rgba(124,58,237,0.3)]"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;