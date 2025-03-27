"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate, animate } from "framer-motion";
import React, { useEffect } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const glowIntensity = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    animate(radius, 250, { duration: 0.3, ease: "easeOut" });
    animate(glowIntensity, 0.5, { duration: 0.2, ease: "easeOut" });
  };

  const handleMouseLeave = () => {
    animate(radius, 0, { duration: 0.4, ease: "easeIn" });
    animate(glowIntensity, 0, { duration: 0.3, ease: "easeIn" });
  };

  useEffect(() => {
    const pulse = () => {
      animate(glowIntensity, 0.2, {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      });
    };
    pulse();
  }, []);

  return (
    <div
      className={cn(
        "relative w-full min-h-screen overflow-x-hidden",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      <div className="absolute inset-0 h-full bg-dot-thick-neutral-600/30 dark:bg-dot-thick-neutral-200/30 pointer-events-none" />

      <motion.div
        className="pointer-events-none absolute inset-0 h-full"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)
          `,
          maskImage: useMotionTemplate`
            radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)
          `,
          opacity: glowIntensity,
        }}
      >
        <div className="absolute inset-0 h-full bg-dot-thick-violet-500 dark:bg-dot-thick-violet-400" />
        <motion.div 
          className="absolute inset-0 h-full bg-violet-500/10 dark:bg-violet-400/10"
          style={{
            boxShadow: useMotionTemplate`0 0 150px 40px rgba(139, 92, 246, ${glowIntensity})`,
          }}
        />
      </motion.div>

      <motion.div 
        className="pointer-events-none absolute inset-0 h-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.2), transparent 80%)
          `,
        }}
      />

      {/* Content */}
      <div className={cn("relative z-10 h-full w-full", className)}>
        {children}
      </div>
    </div>
  );
};
