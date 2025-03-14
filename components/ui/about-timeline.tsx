"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface AboutTimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: AboutTimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
      <>
      <div className="w-full sm:px-10 lg:px-28 pb-10 lg:pb-32" ref={containerRef}>
      <h2 className="text-3xl sm:text-4xl text-center text-neutral-900 dark:text-white font-bold max-w-full">
        My journey as a
        <br />
        <TypeAnimation
          className="text-violet-500"
          sequence={["developer", 2000, "student", 2000, "freelancer", 2000]}
          speed={30}
          repeat={Infinity}
          wrapper="span" />
      </h2>
    </div><div ref={ref} className="relative max-w-7xl pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs md:max-w-sm w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center bg-transparent">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 bg-transparent" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-violet-500 dark:text-white mr-10">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-12 md:pl-4 pr-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 mr-10">
                {item.title}
              </h3>
              {item.content}
            </div>
          </motion.div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-4 sm:left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-white via-white to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
      </>
  );
};
