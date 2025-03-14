"use client"

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { TypeAnimation } from "react-type-animation";

export default function Works() {
    return (
        <div className="w-full px-[150px]">

            <div className="mx-auto">
                <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-4 pt-9">
                    My <TypeAnimation
                        className="text-violet-500"
                        sequence={[
                            "Project",
                            2000,
                            "Repositiory",
                            2000,
                            "Builds",
                            2000,
                        ]}
                        speed={30}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </h2>
                <p className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                    My projects I personally love to developed and spent time.
                </p>
                <BentoGrid className="grid grid-cols-4 gap-4">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}

const items = [
    {
        title: "Crowd Monitoring Software",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Radio Station Log Visualization",
        description: "Dive into the transformative power of technology.",
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Financial Management System",
        description: "Discover the beauty of thoughtful and functional design.",
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web Application Firewall",
        description:
            "Understand the impact of effective communication in our lives.",
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Domain Driven Design Inspired",
        description:
            "Understand the impact of effective communication in our lives.",
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Artificial Inteligence Chatbot",
        description: "Discover the beauty of thoughtful and functional design.",
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
];
