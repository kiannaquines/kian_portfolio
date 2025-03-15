"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "./ui/primary-button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconUserScan,
} from "@tabler/icons-react";
import Image from "next/image";
import SecondaryButton from "./ui/secondary-button";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const socialLinks = [
    { href: "https://github.com/kiannaquines", icon: <IconBrandGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/kian-jearard-naquines-7406772a8/", icon: <IconBrandLinkedin />, label: "LinkedIn" },
    { href: "https://twitter.com/yourusername", icon: <IconBrandTwitter />, label: "Twitter" },
  ];

  return (
    <div className="w-full sm:px-10 lg:px-28 py-10 lg:py-32 mx-auto">
      <div className="flex flex-col md:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-full md:w-1/2 flex justify-center mb-5 sm:justify-end sm:mb-0"
        >
          <div
            className="relative w-full max-w-[270px] sm:max-w-[400px] aspect-square"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
           <Image
              src="/anime_me.png"
              alt="Kian's anime-style portrait"
              className="rounded-2xl object-cover w-full h-full border-4 border-violet-500 
                        shadow-[0_0_30px_5px_rgba(124,58,237,0.5)] 
                        transition-all duration-300 ease-in-out 
                        rotate-2 scale-105 hover:rotate-4 hover:scale-110 
                        opacity-100 hover:opacity-0"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              priority
            />
            <Image
              src="/kian_hover.jpg"
              alt="Kian's anime-style portrait hover"
              className="absolute inset-0 rounded-2xl object-cover w-full h-full border-4 border-violet-500 
                        shadow-[0_0_30px_5px_rgba(124,58,237,0.5)] 
                        transition-all duration-300 ease-in-out 
                        rotate-4 scale-110 opacity-0 hover:opacity-100"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              priority
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-3xl z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white tracking-wide"
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
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-neutral-800 dark:text-neutral-300"
          >
            I'm Kian, a software developer crafting full-stack web and mobile applications. After hours, I build my own projects with Machine Learning and Artificial Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
          >
            <PrimaryButton title="Resume" className="text-xs sm:text-sm hover:bg-violet-600 hover:text-white transition-colors" />
            <PrimaryButton title="About Me" icon={<IconUserScan />} className="text-xs sm:text-sm hover:bg-violet-600 hover:text-white transition-colors" />
            <SecondaryButton title="Hire Me" className="text-xs sm:text-sm hover:bg-violet-600 hover:text-white transition-colors" />
          </motion.div>

          <div className="mt-6 flex justify-center md:justify-start gap-3">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full hover:bg-violet-600 hover:text-violet-300 transition-colors hover:shadow-[0_0_15px_5px_rgba(124,58,237,0.3)]"
              >
                {React.cloneElement(item.icon, {
                  className: "text-neutral-800 dark:text-neutral-300 hover:text-violet-300",
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
