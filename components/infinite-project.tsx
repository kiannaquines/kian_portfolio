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
        feedback: string;
        name: string;
        title: string;
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
                        className="relative w-[250px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-6 py-4 md:w-[300px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                        key={item.name}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm leading-[1.4] font-normal text-neutral-800 dark:text-gray-100">
                                {item.feedback}
                            </span>
                            <div className="relative z-20 mt-4 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-xs leading-[1.4] font-normal text-neutral-500 dark:text-gray-400">
                                        {item.name}
                                    </span>
                                    <span className="text-xs leading-[1.4] font-normal text-neutral-500 dark:text-gray-400">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export function InfiniteMovingCardsFeedback() {
    return (
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-10">
            <InfiniteMovingCards
                items={feedbackList}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const feedbackList = [
    {
        feedback: "Your work is amazing! The interface is clean, intuitive, and very easy to use. Great job!",
        name: "Jennifer P. Escote",
        title: "Financial Management Project",
    },
    {
        feedback: "You did an excellent job optimizing the system! It's fast and runs smoothly, even on mobile.",
        name: "Irish Mae V. Bianson",
        title: "Sta. Catalina Automated Booking Software",
    },
    {
        feedback: "I really appreciate the attention to detail in your design! The UI is modern and visually appealing.",
        name: "Shiela Mae Bernabe",
        title: "Radio Station Log Management Software",
    },
    {
        feedback: "Your development skills are impressive! Everything is well-structured and easy to navigate.",
        name: "Kevin Aldabon",
        title: "Tourism Management Software",
    },
    {
        feedback: "Great work on making file uploads seamless! The process is smooth and hassle-free.",
        name: "Catherine Maglinte",
        title: "Financial Management Software",
    },
    {
        feedback: "The features you implemented are incredibly useful! They make management tasks so much easier.",
        name: "Nikie Otanes",
        title: "Irrigation Management Software",
    },
    {
        feedback: "Your coding skills are top-notch! The system is user-friendly and very reliable.",
        name: "Lyndawn Ayagan",
        title: "Dormitory Management Software",
    },
    {
        feedback: "Fantastic job on the system’s performance! Everything runs efficiently without any issues.",
        name: "Cristine Irlandez",
        title: "Lition's Agri Buy & Sale Software",
    },
    {
        feedback: "You built an amazing system! It has greatly improved our workflow and productivity.",
        name: "Karen Abayon",
        title: "Seaoil Management Software",
    },
];
