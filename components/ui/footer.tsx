"use client";

import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

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

  return (
    <footer className="w-full bg-neutral-900 text-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold mb-4">
          Want to <span className="text-violet-700">connect?</span>
        </h1>
        <p className="text-center text-neutral-400 mb-12">
          Fill out the form below and I will get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-neutral-400">
              I'm Kian, a software developer passionate about building full-stack web and mobile applications. I also love working on Machine Learning and AI projects in my free time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2 bg-neutral-800 rounded-full hover:bg-violet-700 transition-colors relative"
                >
                  {React.cloneElement(item.icon, {
                    className: "text-neutral-300 hover:text-white",
                  })}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-neutral-300">First name</Label>
                <Input
                  id="firstname"
                  placeholder="John"
                  type="text"
                  className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className="text-neutral-300">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Doe"
                  type="text"
                  className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
              <Input
                id="email"
                placeholder="youremail@email.com"
                type="email"
                className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message" className="text-neutral-300">Message</Label>
              <Textarea
                placeholder="Message"
                id="message"
                className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500 h-32"
              />
            </LabelInputContainer>
            <button
              className="w-full py-3 bg-violet-700 text-white rounded-md hover:bg-violet-800 transition-colors relative"
              type="submit"
            >
              Send Email
            </button>
          </form>
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