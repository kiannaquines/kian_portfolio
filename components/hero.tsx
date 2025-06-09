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
  IconTools,
} from "@tabler/icons-react";
import Image from "next/image";
import SecondaryButton from "./ui/secondary-button";

const Hero = () => {

  const [hovered, setHovered] = useState(false);
  const [environment] = useState('development');

  const socialLinks = [
    { href: "https://github.com/kiannaquines", icon: <IconBrandGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/kian-jearard-naquines-7406772a8/", icon: <IconBrandLinkedin />, label: "LinkedIn" },
    { href: "https://twitter.com/yourusername", icon: <IconBrandTwitter />, label: "Twitter" },
  ];

  return (
    <div className="w-full sm:px-10 lg:px-28 py-10 lg:py-28 mx-auto">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center md:justify-start mb-6"
      >
        <div className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${environment === "development"
          ? "bg-yellow-500/20 dark:bg-yellow-500/30 text-yellow-700 dark:text-yellow-300"
          : "bg-green-500/20 dark:bg-green-500/30 text-green-700 dark:text-green-300"
          }`}>
          <IconTools className="w-4 h-4 mr-2" />
          {environment === "development" ? <span>Under Development | Currently Busy</span> : <span>Production</span>}
        </div>
      </motion.div>


      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="font-bold dark:text-white tracking-wide text-center sm:text-left"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tight">
              Software Developer
            </span>
            <TypeAnimation
              className="block text-xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold text-violet-500 dark:text-violet-400"
              sequence={[
                "Frontend Dev", 3000,
                "UI Designer", 3000,
                "Backend Dev", 3000,
                "Frontend Dev", 3000,
                "Mobile Dev", 3000,
                "DevOps", 3000,
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
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-300 max-w-[90%] sm:max-w-[600px] text-center sm:text-left mx-auto sm:mx-0"
          >
            I'm Kian, an <b className="text-violet-500 dark:text-violet-400 font-semibold">AI-first software developer</b> crafting full-stack web and mobile applications. After hours, I build my own projects with Machine Learning and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
          >
            <PrimaryButton title="Resume" className="font-semibold min-w-[120px] bg-neutral-800 text-white transition-all duration-300 p-3" />
            <PrimaryButton title="About Me" icon={<IconUserScan />} className="min-w-[120px] bg-neutral-800 text-white transition-all duration-300 p-3" />
            <SecondaryButton onClick={() => window.location.href = 'mailto:kjgnaquines@gmail.com'} title="Hire Me" className="font-semibold min-w-[120px] bg-transparent border border-violet-00 text-violet-400 hover:bg-violet-400 hover:text-white transition-colors custom-hover" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex justify-end"
        >
          <div
            className="relative w-full max-w-[220px] sm:max-w-[320px] aspect-square hidden sm:hidden md:inline-block lg:inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >

            <motion.div
              className="absolute inset-0 w-full h-full border-[3px] border-violet-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />

            <Image
              src="/anime_me.png"
              alt="Kian's anime-style portrait"
              className="rounded-2xl object-cover w-full h-full border-4 border-violet-400 
                shadow-[0_0_30px_5px_rgba(124,58,237,0.5)] 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:rotate-1"
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