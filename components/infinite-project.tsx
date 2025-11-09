"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = false,
    className,
}: {
    items: {
        icon: string;
        name: string;
        description: string;
        category: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                        <li
                        className="relative w-[200px] sm:w-[220px] md:w-[260px] lg:w-[300px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-zinc-700"
                        key={item.name}
                    >
                        <div className="flex flex-col gap-3">
                            <div className="text-3xl">{item.icon}</div>
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                {item.name}
                            </h3>
                            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                {item.description}
                            </p>
                            <div className="mt-2">
                                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export function InfiniteMovingCardsShowcase() {
    return (
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-10">
            <InfiniteMovingCards
                items={techStackList}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const techStackList = [
    {
        icon: "⚡",
        name: "High Performance",
        description: "Built with Next.js 14 and React Server Components for lightning-fast load times and optimal SEO.",
        category: "Performance",
    },
    {
        icon: "🎨",
        name: "Modern Design",
        description: "Crafted with Tailwind CSS and Framer Motion for stunning animations and responsive layouts.",
        category: "UI/UX",
    },
    {
        icon: "🔒",
        name: "Type Safety",
        description: "Developed with TypeScript to ensure robust code quality and catch errors before runtime.",
        category: "Development",
    },
    {
        icon: "🚀",
        name: "Cloud Deployment",
        description: "Deployed on Vercel with automatic CI/CD, edge functions, and global CDN distribution.",
        category: "Infrastructure",
    },
    {
        icon: "📊",
        name: "Real-time Data",
        description: "Integrates with GitHub API to dynamically showcase live project statistics and repositories.",
        category: "Integration",
    },
    {
        icon: "🌓",
        name: "Dark Mode",
        description: "Full dark mode support with seamless theme switching and system preference detection.",
        category: "Accessibility",
    },
    {
        icon: "📱",
        name: "Mobile First",
        description: "Responsive design that looks perfect on any device, from smartphones to ultrawide monitors.",
        category: "Responsive",
    },
    {
        icon: "🎯",
        name: "SEO Optimized",
        description: "Meta tags, Open Graph, and structured data for maximum visibility on search engines.",
        category: "Marketing",
    },
    {
        icon: "⚙️",
        name: "Best Practices",
        description: "Following industry standards with clean code architecture, component reusability, and maintainability.",
        category: "Code Quality",
    },
];
