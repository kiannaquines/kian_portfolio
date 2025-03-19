"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="shadow-lg mx-auto w-full max-w-4xl rounded-lg p-6 md:p-10 bg-gray-900 dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-700">
      <h2 className="text-2xl text-center font-bold text-neutral-100 dark:text-neutral-200">
        Want to connect?
      </h2>
      <p className="mt-3 text-center text-sm text-neutral-400 dark:text-neutral-300">
        Fill out the form below and I will get back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-300">First name</Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              className="mt-1 bg-neutral-700 border-neutral-600 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-300">Last name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              type="text"
              className="mt-1 bg-neutral-700 border-neutral-600 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
          <Input
            id="email"
            placeholder="youremail@email.com"
            type="email"
            className="mt-1 bg-neutral-700 border-neutral-600 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message" className="text-neutral-300">Message</Label>
          <Textarea
            placeholder="Message"
            id="message"
            className="mt-1 bg-neutral-700 border-neutral-600 text-neutral-100 focus:border-violet-500 focus:ring-violet-500 h-32"
          />
        </LabelInputContainer>
        
        <button
          className="group/btn relative block h-12 w-full rounded-md bg-violet-600 font-medium text-white shadow-lg hover:bg-violet-700 transition-colors duration-300"
          type="submit"
        >
          Send Email
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};