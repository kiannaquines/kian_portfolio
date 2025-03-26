"use client";

import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const socialLinks = [
    { href: "https://github.com/kiannaquines", icon: <IconBrandGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/kian-jearard-naquines-7406772a8/", icon: <IconBrandLinkedin />, label: "LinkedIn" },
    { href: "https://twitter.com/yourusername", icon: <IconBrandTwitter />, label: "Twitter" },
  ];

  const contactInfo = [
    { icon: <IconMail size={20} />, text: "kjgnaquines@gmail.com" },
    { icon: <IconPhone size={20} />, text: "+63 9013630647" },
    { icon: <IconMapPin size={20} />, text: "North Cotabato, 9401, Philippines" }
  ];

  return (
    <footer className="w-full px-5 bg-neutral-900 text-neutral-100 py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-bold mb-4">
          Want to <span className="text-violet-400">connect?</span>
        </h1>
        <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
          Fill out the form below or reach out directly through my contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="space-y-4">
              <p className="text-neutral-400">
                I'm Kian Naquines, a full-stack developer with expertise in modern web technologies and a passion for creating efficient, scalable solutions.
              </p>
              <p className="text-neutral-400">
                My specialties include React, Node.js, Python, and machine learning. I enjoy solving complex problems and building intuitive user experiences.
              </p>
              <p className="text-neutral-400">
                Currently open to new opportunities and collaborations on interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-neutral-400 hover:text-neutral-300 transition-colors">
                    <span className="text-violet-400">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
              <div className="flex space-x-3">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="p-3 bg-neutral-800 rounded-full hover:bg-violet-700 transition-colors"
                  >
                    {React.cloneElement(item.icon, {
                      className: "text-neutral-300 hover:text-white w-5 h-5",
                    })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-neutral-300">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Juan"
                  type="text"
                  className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className="text-neutral-300">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Dela Cruz"
                  type="text"
                  className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
              <Input
                id="email"
                placeholder="juandelacruz@gmail.com"
                type="email"
                className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message" className="text-neutral-300">Message</Label>
              <Textarea
                placeholder="Your message here..."
                id="message"
                className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500 h-40"
                rows={5}
              />
            </LabelInputContainer>
            <button
              className="w-full py-3.5 bg-violet-700 text-white rounded-md hover:bg-violet-600 transition-colors font-medium"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 pt-6 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Kian Naquines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};