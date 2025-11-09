"use client";

import { motion } from "framer-motion";
import React from "react";
import PrimaryButton from "./ui/primary-button";
import {
  IconCalendar,
  IconFileText,
  IconMail,
  IconTools,
} from "@tabler/icons-react";
import Image from "next/image";
import SecondaryButton from "./ui/secondary-button";

const Hero = () => {
  const handleViewResume = () => {
    window.open(
      "/Kian Jearard G. Naquines - Python Full Stack Developer.pdf",
      "_blank"
    );
  };

  const handleBookIntro = () => {
    window.location.href =
      "mailto:kjgnaquines@gmail.com?subject=Intro%20Call%20with%20Kian&body=Hi%20Kian%2C%0A%0AI'd%20like%20to%20schedule%20a%2015-minute%20intro%20call.%20Here%20are%20some%20times%20that%20work%20for%20me%3A%0A-%20%0A-%20%0A%0ABest%2C%0A";
  };

  const handleEmailMe = () => {
    window.location.href =
      "mailto:kjgnaquines@gmail.com?subject=Hello%20Kian&body=Hi%20Kian%2C%0A%0AI'm%20reaching%20out%20after%20seeing%20your%20portfolio.%20%0A%0AThanks%2C%0A";
  };

  return (
    <div className="w-full px-4 sm:px-10 lg:px-28 py-8 sm:py-12 lg:py-16 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center md:justify-start mb-4 sm:mb-6"
      >
        <div className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 dark:bg-green-500/30 text-green-700 dark:text-green-300">
          <IconTools className="w-4 h-4 mr-2" />
          <span>I'm Open to Work</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 lg:gap-10 items-center">
        {/* Mobile image shown above content */}
        <div className="md:hidden flex justify-center mb-4">
          <div className="relative w-full max-w-[160px] sm:max-w-[180px] aspect-square">
            <Image
              src="/anime_me.png"
              alt="Kian's anime-style portrait"
              className="rounded-2xl object-cover w-full h-full border-4 border-violet-400 shadow-[0_0_20px_4px_rgba(124,58,237,0.4)]"
              fill
              sizes="(max-width: 480px) 160px, (max-width: 768px) 180px"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="font-bold dark:text-white tracking-wide text-center sm:text-left"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
              Full-Stack Engineer
            </span>
            <span className="mt-2 block text-sm sm:text-base md:text-lg lg:text-xl text-violet-600 dark:text-violet-400">
              Artificial Intelligence • Real-Time • Microservices • ML-Integrated Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.2,
            }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-800 dark:text-neutral-300 max-w-[90%] sm:max-w-[700px] text-center sm:text-left mx-auto sm:mx-0 leading-relaxed"
          >
            I design, build, and ship reliable web and mobile systems with an AI-first
            mindset—recent work includes real-time data pipelines, ML-powered product
            features, and tooling that speeds up delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
            className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3"
          >
            <PrimaryButton
              title="View Resume"
              icon={<IconFileText />}
              className="font-semibold min-w-[150px] bg-neutral-800 text-white transition-all duration-300 p-3"
              onClick={handleViewResume}
            />
            <PrimaryButton
              title="Book Intro Call"
              icon={<IconCalendar />}
              className="min-w-[160px] bg-neutral-800 text-white transition-all duration-300 p-3"
              onClick={handleBookIntro}
            />
            <SecondaryButton
              onClick={handleEmailMe}
              title="Email Me"
              icon={<IconMail />}
              className="font-semibold min-w-[130px] bg-transparent border border-violet-00 text-violet-400 hover:bg-violet-400 hover:text-white transition-colors custom-hover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full hidden md:flex justify-end items-center"
        >
          <div className="relative w-full max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] aspect-square">
            <motion.div
              className="absolute inset-0 w-full h-full border-[3px] border-violet-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <Image
              src="/anime_me.png"
              alt="Kian's anime-style portrait"
              className="rounded-2xl object-cover w-full h-full border-4 border-violet-400 shadow-[0_0_30px_5px_rgba(124,58,237,0.5)] transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1"
              fill
              sizes="(max-width: 1024px) 220px, 320px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;