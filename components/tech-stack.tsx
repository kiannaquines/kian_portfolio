"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiDocker, SiPostgresql, SiGraphql, SiCplusplus, SiPhp, SiBootstrap, SiFlutter, SiDart, SiLaravel, SiMysql, SiJavascript, SiGo, SiDjango, SiFlask, SiFastapi, SiGithub, SiComposer, SiHeroku, SiJquery, SiFilezilla, SiNginx, SiSqlalchemy, SiSqlite, SiMongodb, SiScikitlearn, SiTensorflow, SiPandas, SiLinux, SiNpm, SiUbuntu, SiGitforwindows, SiDebian, SiCss3 } from "react-icons/si";

const technologies = [
    { name: "React", icon: <FaReact className="text-6xl text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-6xl text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-6xl text-yellow-500" /> },
    { name: "Docker", icon: <SiDocker className="text-6xl text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-6xl text-blue-700" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-6xl text-pink-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-6xl text-blue-400" /> },
    { name: "PHP", icon: <SiPhp className="text-6xl text-purple-600" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-6xl text-violet-700" /> },
    { name: "Flutter", icon: <SiFlutter className="text-6xl text-blue-600" /> },
    { name: "Dart", icon: <SiDart className="text-6xl text-red-600" /> },
    { name: "Laravel", icon: <SiLaravel className="text-6xl text-red-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-6xl text-blue-700" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-6xl text-yellow-500" /> },
    { name: "Go", icon: <SiGo className="text-6xl text-blue-700" /> },
    { name: "Django", icon: <SiDjango className="text-6xl text-green-600" /> },
    { name: "Flask", icon: <SiFlask className="text-6xl text-blue-700" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-6xl text-green-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-6xl text-black dark:text-white" /> },
    { name: "Composer", icon: <SiComposer className="text-6xl text-blue-700" /> },
    { name: "Heroku", icon: <SiHeroku className="text-6xl text-violet-700" /> },
    { name: "jQuery", icon: <SiJquery className="text-6xl text-blue-600" /> },
    { name: "Filezilla", icon: <SiFilezilla className="text-6xl text-red-700" /> },
    { name: "Nginx", icon: <SiNginx className="text-6xl text-green-700" /> },
    { name: "SQLAlchemy", icon: <SiSqlalchemy className="text-6xl text-blue-700" /> },
    { name: "SQLite", icon: <SiSqlite className="text-6xl text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-6xl text-green-700" /> },
    { name: "scikit-learn", icon: <SiScikitlearn className="text-6xl text-blue-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-6xl text-orange-500" /> },
    { name: "Pandas", icon: <SiPandas className="text-6xl text-blue-700" /> },
    { name: "Linux", icon: <SiLinux className="text-6xl text-white" /> },
    { name: "NPM", icon: <SiNpm className="text-6xl text-red-700" /> },
    { name: "Ubuntu", icon: <SiUbuntu className="text-6xl text-orange-700" /> },
    { name: "Git", icon: <SiGitforwindows className="text-6xl text-orange-700" /> },
    { name: "Debian", icon: <SiDebian className="text-6xl text-red-700" /> },
    { name: "CSS3", icon: <SiCss3 className="text-6xl text-blue-400" /> },
];

const TechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const columnVariants = {
        hidden: (direction: string) => ({
            opacity: 0,
            x: direction === "right" ? -50 : 50,
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-4">
                    Technology Stack
                </h2>
                <p className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                    Technologies I've repeat & refined throughout the years of developing my skills.
                </p>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md"
                            variants={columnVariants}
                            custom={index % 2 === 0 ? "right" : "left"}
                        >
                            {tech.icon}
                            <span className="mt-4 text-[15px] text-center font-medium text-neutral-900 dark:text-white">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;