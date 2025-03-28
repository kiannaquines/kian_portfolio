"use client";

import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() ||
      !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
    <footer id="contact" className="w-full bg-neutral-900 text-neutral-100">
      <div className="w-full max-w-8xl mx-auto px-10 sm:px-6 lg:pl-28 lg:pr-28 lg:pt-10 pt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-bold mb-4">
          Want to <span className="text-violet-500">connect?</span>
        </h1>
        <p className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-10 max-w-2xl mx-auto p-2 sm:p-0 md:p-0 lg:p-0">
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
                Currently open to new opportunities and collaborations on interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-neutral-400 hover:text-neutral-300 transition-colors">
                    <span className="text-violet-500">{item.icon}</span>
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
                    className="p-3 bg-neutral-800 rounded-full hover:bg-violet-700 transition-all duration-300 group"
                  >
                    {React.cloneElement(item.icon, { className: "text-neutral-300 group-hover:text-white w-6 h-6" })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LabelInputContainer>
                <Label htmlFor="firstName" className="text-neutral-300">First name</Label>
                <Input
                  id="firstName"
                  placeholder="Juan"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName" className="text-neutral-300">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Dela Cruz"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
              <Input
                id="email"
                placeholder="juandelacruz@gmail.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message" className="text-neutral-300">Message</Label>
              <Textarea
                placeholder="Your message here..."
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-violet-500 focus:ring-violet-500 h-40"
                rows={5}
                required
              />
            </LabelInputContainer>
            <button
              className="w-full py-2 hover:cursor-pointer bg-violet-700 text-white rounded-md hover:bg-violet-600 transition-colors font-medium disabled:bg-gray-600 flex items-center justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-3 text-sm text-green-500 bg-green-500/10 rounded-md">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-md">
                Failed to send message. Please try again later.
              </div>
            )}
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