import React from 'react'
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Header = () => {

    const navItems = [
        {
            name: "Home",
            link: "#hero",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Works",
            link: "#works",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Education",
            link: "#education",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "#contact",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Tech Stack",
            link: "#tech",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        }
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white/10 dark:bg-black/25 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-lg shadow-sm px-20">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-[12px] font-bold text-gray-900 dark:text-white">
                    &lt;Kian Naquines/&gt;
                </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-4">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="text-[10px] font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>

            <span className="text-[12px] text-gray-700 font-bold dark:text-gray-300 mt-4 md:mt-0">Asia/Manila</span>
        </div>
    )
}

export default Header