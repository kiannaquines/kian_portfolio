"use client";

import { motion } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import PrimaryButton from './ui/primary-button'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconFile } from '@tabler/icons-react'
import Image from 'next/image'
import SecondaryButton from './ui/secondary-button'

const Hero = () => {
    return (
        <section id="hero-section" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />

            <div className="text-center md:text-left max-w-2xl z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-5xl md:text-6xl font-bold dark:text-white"
                >
                    <span>Software Developer</span>
                    <br />
                    <TypeAnimation
                        className="text-violet-500"
                        sequence={[
                            "Enthusiast",
                            2000,
                            "Designer",
                            2000,
                            "InfoSys",
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
                    className="mt-6 text-lg text-neutral-800 dark:text-neutral-300 max-w-2xl"
                >
                    I'm Kian, a software developer, where I craft fullstack
                    applications. After hours, I build my own projects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
                    className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
                >
                    <PrimaryButton
                        title="About Me"
                        className="text-sm hover:bg-violet-600 transition-colors"
                    />
                    <PrimaryButton
                        title="GitHub"
                        icon={<IconBrandGithub />}
                        className="text-sm hover:bg-violet-600 transition-colors"
                    />
                    <SecondaryButton
                        title="Resume"
                        icon={<IconFile />}
                        className="text-sm shadow-[0_0_20px_10px_rgba(124,58,237,0.3)] hover:bg-violet-600 transition-colors"
                    />
                </motion.div>

                <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <a href="https://github.com/kiannaquines" target="_blank" rel="noopener noreferrer">
                        <IconBrandGithub className="text-2xl text-neutral-700 dark:text-neutral-300 hover:text-violet-500 dark:hover:text-violet-500 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/kian-jearard-naquines-7406772a8/" target="_blank" rel="noopener noreferrer">
                        <IconBrandLinkedin className="text-2xl text-neutral-700 dark:text-neutral-300 hover:text-violet-500 dark:hover:text-violet-500 transition-colors" />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <IconBrandTwitter className="text-2xl text-neutral-700 dark:text-neutral-300 hover:text-violet-500 dark:hover:text-violet-500 transition-colors" />
                    </a>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                className="mt-8 md:mt-0 z-10"
            >
                <Image
                    src="/anime_me.jpg"
                    alt="Me"
                    className="rounded-full object-cover cursor-pointer border-4 border-violet-500 shadow-[0_0_20px_10px_rgba(124,58,237,0.3)]"
                    width={390}
                    height={280}
                />
            </motion.div>
        </section>
    )
}

export default Hero