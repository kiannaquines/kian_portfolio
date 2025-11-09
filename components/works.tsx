"use client";

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
    <div className="w-full px-4 sm:px-10 lg:px-28 pt-10 mb-10 lg:pt-20 lg:pb-16 mx-auto">
            <div className="mx-auto">
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neutral-900 dark:text-white mb-4">
                    My <TypeAnimation
                        className="text-violet-500"
                        sequence={["Projects", 2000, "Repositories", 2000, "Builds", 2000]}
                        speed={30}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </h2>
                <p className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto p-2 sm:p-0 md:p-0 lg:p-0">
                    My projects I personally love to develop and spend time on.
                </p>
                <BentoGrid className="px-2 sm:px-0">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            icon={item.icon}
                            videoUrl={item.videoUrl}
                            repoLink={item.repoLink}
                            tags={item.tags}
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
        description: "Real-time analytics for crowd movement and density with Machine Learning.",
        className: "",
        icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
        videoUrl: "https://www.youtube.com/watch?v=dyW3UKlLV3U",
        repoLink: "https://github.com/yourusername/crowd-monitoring",
        tags: ["NextJS", "Real-Time", "Database", "MYSQL", "MQTT", "Microservices", "Python", "FastAPI"],
    },
    {
        title: "TaraLibrary API",
        description: "API for managing digital library resources efficiently with crowd monitoring software.",
        className: "",
        icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
        videoUrl: "https://www.youtube.com/watch?v=dyW3UKlLV3U",
        repoLink: "https://github.com/yourusername/tara-library-api",
        tags: ["API", "Library", "Database", "MYSQL", "MQTT", "Microservices", "Python", "FastAPI"],
    },
    {
        title: "Web Application Firewall",
        description: "A custom implementation of a web application firewall with machine learning.",
        className: "",
        icon: <IconTableColumn className="h-5 w-5 text-neutral-500" />,
        videoUrl: "https://www.youtube.com/watch?v=dyW3UKlLV3U",
        repoLink: "https://github.com/yourusername/web-application-firewall",
        tags: ["Cybersecurity", "Networking", "Security", "Machine Learning", "Python", "Logistic Regression", "Random Forest"],
    },
    {
        title: "Domain Driven Design Inspired",
        description: "Learn about structured software architecture.",
        className: "",
        icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
        videoUrl: "https://www.youtube.com/watch?v=dyW3UKlLV3U",
        repoLink: "https://github.com/yourusername/domain-driven-design",
        tags: ["Software Architecture", "DDD", "Backend"],
    },
    {
        title: "Artificial Intelligence Chatbot",
        description: "An AI-powered chatbot with NLP capabilities.",
        className: "",
        icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
        videoUrl: "https://www.youtube.com/watch?v=dyW3UKlLV3U",
        repoLink: "https://github.com/yourusername/ai-chatbot",
        tags: ["AI", "Chatbot", "NLP"],
    },
    {
        title: "HTTP Status Code API",
        description: "A simple API for retrieving HTTP status codes.",
        className: "",
        icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
        videoUrl: "https://www.youtube.com/watch?v=dyW3UKlLV3U",
        repoLink: "https://github.com/yourusername/http-status-api",
        tags: ["API", "Web", "HTTP"],
    },
];
