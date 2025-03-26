"use client";

import React from 'react';
import { Timeline } from './ui/about-timeline';

const TimeLine = () => {
    const data = [
        {
            title: "2025",
            subtitle: "Advanced Specialization in Software, AI, and Mobile Development",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Key Achievements</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Mastered advanced programming paradigms and software development architecture.</li>
                            <li>Implemented microservices and CI/CD pipelines for scalable applications using Docker and Github.</li>
                            <li>Enrolled in <b>Introduction to Front-End Development</b>.</li>
                            <li>Enrolled in <b>Introduction to Back-End Development</b>.</li>
                            <li>Implemented Domain Driven Design Architecture for Laravel Application.</li>
                            <li>Developed my portfolio using NextJS, ReactJS, Shadcn/UI, AceternityUI.</li>
                        </ul>

                        <div className="space-y-2">
                            <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Docker</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Python</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Go</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Domain Driven Design</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Laravel</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">NextJS</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">React</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Shadcn/UI</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">AceternityUI</span>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">AI Development</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Developed transformer-based NLP models for complex language tasks using GROQ API.</li>
                            <li>Developed a web application firewall using Machine Learning Algorithms.</li>
                        </ul>

                        <div className="space-y-2">
                            <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Python</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Scikit-learn</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Pandas</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Matplotlib</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Plotly</span>
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Scipy</span>
                            </div>
                        </div>
                    </div>

                </div>
            ),
        },
        {
            title: "2024",
            subtitle: "IoT-Based Crowd Monitoring System",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Key Achievements</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Developed privacy-conscious crowd detection using WiFi probe requests</li>
                            <li>Created real-time visualization dashboards with WebSockets</li>
                            <li>Deployed scalable IoT infrastructure using Docker containers</li>
                            <li>Enrolled in <b>Agile Project Management</b>. </li>
                            <li>Enrolled in <b>Google AI Essentials</b>. </li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Projects</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Crowd Monitoring with Artificial Intelligence</li>
                            <li>Radio Station Log Management Software</li>
                            <li>Financial Management Software</li>
                            <li>Tourism Management Software</li>
                            <li>Hospital Management Software</li>
                            <li>Seaoil Management Software</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">MQTT</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Event-Driven Architecture</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Docker</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Machine Learning</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">React</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">NextJS</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Python</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">FastAPI</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Go</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Client Feedback</h3>
                        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            "You're a life saver."
                        </blockquote>

                        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            "Definitely recommendable."
                        </blockquote>

                        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            "Easy to work with."
                        </blockquote>

                        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            "Greate design."
                        </blockquote>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            subtitle: "Software Development & Data Science & Machine Learning Breakthrough",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Projects</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Heart Disease Prediction Model (Accuracy: 98%)</li>
                            <li>Dormitory Management Software</li>
                            <li>Irrigation Management Software</li>
                            <li>Argiculture Buy & Sell Management Software</li>
                            <li>Seaoil Management Software</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Skills Developed</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Business Logic</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Logical Thinking</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Problem Solving</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Data Analysis</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Algorithms</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Python</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Django</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">API</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Object Oriented Programming</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            subtitle: "Freelance Development Growth",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Projects Delivered</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Inventory Management System for Retail Chain</li>
                            <li>E-commerce Platform with Payment Integration</li>
                        </ul>
                    </div>


                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Projects</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Barangay Management Software</li>
                            <li>Video Conferencing Software</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Client Feedback</h3>
                        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            "Delivered beyond expectations with excellent communication throughout the project lifecycle."
                        </blockquote>
                    </div>
                </div>
            ),
        },
        {
            title: "2021",
            subtitle: "Algorithms & Data Structures Mastery",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Key Learnings</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Implemented complex data structures in Python and Java.</li>
                            <li>Solved 30+ Codewars problems.</li>
                            <li>Mastered BST, Stack, Queue, Bubble Sort, Quicksort, Mergesort, Recursion.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Focus Areas</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Data Structure</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Algorithms</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Recursion</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2020",
            subtitle: "First Professional Project",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Student Management System</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Developed for Pamantasan ng Lungsod ng Pasig</li>
                            <li>Features: Enrollment, Grading, Attendance Tracking</li>
                            <li>Automated report generation</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">PHP</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">MySQL</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">JavaScript</span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs sm:text-sm">Bootstrap</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2019",
            subtitle: "Backend Development Foundations",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Skills Acquired</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Full CRUD operations with PHP/MySQL</li>
                            <li>Basic authentication systems</li>
                            <li>Form validation and server-side processing</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Projects</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Blog System with User Accounts</li>
                            <li>Task Management Application</li>
                            <li>Simple E-commerce Prototype</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "2018",
            subtitle: "Programming Journey Begins",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">First Steps</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>Learned HTML/CSS fundamentals</li>
                            <li>Built first static websites</li>
                            <li>Discovered PHP for dynamic content</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Milestones</h3>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                            <li>First interactive web form</li>
                            <li>First database-connected application</li>
                            <li>First complete website deployment</li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="timeline-section" className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:pt-20 md:pt-28 lg:pt-20 mx-auto">
            <Timeline data={data} />
        </section>
    );
};

export default TimeLine;