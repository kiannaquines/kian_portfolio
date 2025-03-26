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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-4xl z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="font-bold dark:text-white tracking-wide"
          >
            <span className="text-[50px] tracking-wider sm:text-5xl md:text-5xl lg:text-6xl lg:inline-block lg:ml-0">Software <span className="text-violet-400">Engineer</span> </span>
            <br />
            <TypeAnimation
              className="text-violet-500 text-[40px] sm:text-lg md:text-xl lg:text-6xl font-bold dark:text-violet-400 hidden lg:inline-block"
              sequence={["Frontend Dev", 2000, "UI Designer", 2000, "Backend Dev", 2000, "Frontend Dev", 2000, "Mobile Dev", 2000, "DevOps", 2000]}
              speed={30}
              repeat={Infinity}
              wrapper="span"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
            className="mt-6 text-lg p-2 text-neutral-800 dark:text-neutral-300"
          >
            I'm Kian, a software developer crafting full-stack web and mobile applications. After hours, I build my own projects with Machine Learning and Artificial Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
          >
            <PrimaryButton title="Resume" className="min-w-[120px] text-base sm:text-sm hover:bg-violet-600 hover:text-white transition-colors p-3 lg:p-0" />
            <PrimaryButton title="About Me" icon={<IconUserScan />} className="min-w-[120px] text-base sm:text-sm hover:bg-violet-600 hover:text-white transition-colors" />
            <SecondaryButton onClick={() => window.location.href = 'mailto:kjgnaquines@gmail.com'} title="Hire Me" className="min-w-[120px] text-base sm:text-sm hover:bg-violet-600 hover:text-white transition-colors" />
          </motion.div>

          <div className="flex space-x-4 mt-8">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2 bg-neutral-800 rounded-full hover:bg-violet-700 transition-colors"
              >
                {React.cloneElement(item.icon, { className: "text-neutral-300 hover:text-white" })}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-full flex justify-center md:justify-end"
        >
          <div
            className="relative w-full max-w-[220px] sm:max-w-[390px] aspect-square hidden sm:inline-block md:inline-block lg:inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src="/anime_me.png"
              alt="Kian's anime-style portrait"
              className="rounded-2xl object-cover w-full h-full border-4 border-violet-500 
                        shadow-[0_0_30px_5px_rgba(124,58,237,0.5)] 
                        transition-all duration-300 ease-in-out 
                        hover:rotate-4 hover:scale-105 
                        sm:mb-2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
              priority
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
