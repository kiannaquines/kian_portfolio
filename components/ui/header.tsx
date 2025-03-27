"use client";
import React, { useState } from "react";
import {
  IconHome,
  IconMenu2,
  IconTools,
  IconBriefcase,
  IconMail,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#hero", icon: <IconHome className="h-4 w-4" /> },
    { name: "Technologies", link: "#tech", icon: <IconTools className="h-4 w-4" /> },
    { name: "Journey", link: "#timeline", icon: <IconBriefcase className="h-4 w-4" /> },
    { name: "Works", link: "#works", icon: <IconBriefcase className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <IconMail className="h-4 w-4" /> },
  ];

  return (
    <header
    className={
  `fixed top-0 left-0 w-full z-[100] flex items-center gap-10 justify-between
   py-4 px-10 md:px-10 lg:px-28 backdrop-blur-lg
   transition-all duration-300
   bg-white/30 dark:bg-black/30 shadow-md`
}
    >
      <div className="flex md:hidden lg:inline-block items-center">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
         <Link href="/"> &lt;Kian Naquines/&gt;</Link>
        </span>
      </div>

      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition hover:scale-105"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <button
        className="md:hidden text-gray-700 dark:text-gray-300 ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <IconX className="h-6 w-6" />
        ) : (
          <IconMenu2 className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-white/50 dark:bg-black/50 backdrop-blur-lg flex-col gap-5 p-6 rounded-lg shadow-lg md:hidden m-2"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon} {item.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <span className="hidden md:block text-lg text-gray-700 font-bold dark:text-gray-300">
        Asia/Manila
      </span>
    </header>
  );
};

export default Header;