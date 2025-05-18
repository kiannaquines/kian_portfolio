"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate, animate } from "framer-motion";
import React, { useEffect, useCallback } from "react";

type HeroHighlightProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  highlightColor?: string;
  highlightRadius?: number;
  pulseIntensity?: number;
  pulseDuration?: number;
};

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  highlightColor = "violet",
  highlightRadius = 250,
  pulseIntensity = 0.2,
  pulseDuration = 2.5,
}: HeroHighlightProps) => {
  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const glowIntensity = useMotionValue(0);

  // Color variants
  const colorVariants = {
    violet: {
      dot: "bg-dot-thick-violet-500 dark:bg-dot-thick-violet-400",
      glow: "bg-violet-500/10 dark:bg-violet-400/10",
      shadow: "rgba(139, 92, 246, ",
    },
    blue: {
      dot: "bg-dot-thick-blue-500 dark:bg-dot-thick-blue-400",
      glow: "bg-blue-500/10 dark:bg-blue-400/10",
      shadow: "rgba(59, 130, 246, ",
    },
    emerald: {
      dot: "bg-dot-thick-emerald-500 dark:bg-dot-thick-emerald-400",
      glow: "bg-emerald-500/10 dark:bg-emerald-400/10",
      shadow: "rgba(16, 185, 129, ",
    },
  };

  const currentColor = colorVariants[highlightColor as keyof typeof colorVariants] || colorVariants.violet;

  // Event handlers
  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);

      animate(radius, highlightRadius, { duration: 0.3, ease: "easeOut" });
      animate(glowIntensity, 0.5, { duration: 0.2, ease: "easeOut" });
    },
    [mouseX, mouseY, radius, glowIntensity, highlightRadius]
  );

  const handleMouseLeave = useCallback(() => {
    animate(radius, 0, { duration: 0.4, ease: "easeIn" });
    animate(glowIntensity, 0, { duration: 0.3, ease: "easeIn" });
  }, [radius, glowIntensity]);

  // Pulse effect
  useEffect(() => {
    const pulse = () => {
      animate(glowIntensity, pulseIntensity, {
        duration: pulseDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      });
    };
    pulse();

    return () => {
      // Clean up animations on unmount
      glowIntensity.stop();
    };
  }, [glowIntensity, pulseIntensity, pulseDuration]);

  return (
    <div
      className={cn(
        "relative w-full min-screen overflow-x-hidden",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background dots */}
      <div className="absolute inset-0 h-full bg-dot-thick-neutral-600/30 dark:bg-dot-thick-neutral-200/30 pointer-events-none" />

      {/* Highlight effect */}
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
        <div className={cn("absolute inset-0 h-full", currentColor.dot)} />
        <motion.div 
          className={cn("absolute inset-0 h-full", currentColor.glow)}
          style={{
            boxShadow: useMotionTemplate`0 0 150px 40px ${currentColor.shadow}${glowIntensity})`,
          }}
        />
      </motion.div>

      {/* Subtle glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 h-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${currentColor.shadow}0.2), transparent 80%)
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