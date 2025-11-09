"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface AboutTimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: AboutTimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    return () => window.removeEventListener('resize', calculateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full">
      <div 
        className="w-full p-2 mx-auto sm:p-2" 
        ref={containerRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neutral-900 dark:text-white mb-4">
            My journey as a
            <br />
            <TypeAnimation
              className="text-violet-400"
              sequence={[
                "developer", 2000, 
                "innovator", 2000,
                "freelancer", 2000
              ]}
              speed={30}
              repeat={Infinity}
              wrapper="span"
            />
          </h1>
          <p className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto p-2 sm:p-0 md:p-0 lg:p-0">
            From first lines of code to complex systems
          </p>
        </motion.div>
      </div>

  <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-2 md:pt-0 md:gap-5 mb-10 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs md:max-w-sm w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center bg-transparent">
                <motion.div 
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-violet-400 dark:border-violet-400 group-hover:bg-violet-400 dark:group-hover:bg-violet-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="pl-5 md:pl-20 ml-10">
                <h3 className="hidden md:block text-xl md:text-2xl font-bold text-violet-400">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="hidden md:block text-sm text-neutral-400 dark:text-neutral-400 mt-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-6 sm:pl-12 md:pl-4 pr-4 w-full ml-7 mt-3 sm:ml-0 md:ml-0 lg:ml-0 sm:mt-0 md:mt-0 lg:mt-0">
              <div className="md:hidden block mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 mt-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <motion.div
                className="bg-white/10 dark:bg-neutral-900 backdrop-blur-sm p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-violet-400 to-violet-800 dark:from-violet-400 dark:to-violet-800"
          />
        </div>
      </div>
    </div>
  );
};