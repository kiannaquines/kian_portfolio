"use client";
import React, { useEffect, useState } from "react";
import { IconHome, IconMessage, IconUser, IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "#hero", icon: <IconHome className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4" /> },
    { name: "Technologies", link: "#tech", icon: <IconMessage className="h-4 w-4" /> },
    { name: "Works", link: "#works", icon: <IconMessage className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <IconMessage className="h-4 w-4" /> },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 flex items-center justify-between py-4 px-5 md:px-5 lg:px-[150px] backdrop-blur-lg transition-all duration-300 ${isScrolled
          ? "bg-white/70 dark:bg-black/70 shadow-md border-b border-white/10 dark:border-gray-800"
          : "bg-white/50 dark:bg-black/50"
        }`}
    >
      <div className="flex items-center space-x-4 md:space-x-6">
        <span className="text-[10px] font-bold text-gray-900 dark:text-white">
          &lt;Kian Naquines/&gt;
        </span>
      </div>

      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-[10px] font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IconMenu2 className="h-6 w-6" />
      </button>

      {/* Mobile Dropdown Menu */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"
          } absolute top-16 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-lg flex-col gap-4 p-6 rounded-lg shadow-lg md:hidden`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-[10px] font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <span className="hidden md:block text-[10px] text-gray-700 font-bold dark:text-gray-300">
        Asia/Manila
      </span>
    </header>
  );
};

export default Header;
