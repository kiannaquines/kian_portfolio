"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql,
  SiPhp, SiBootstrap, SiFlutter, SiLaravel, SiMysql,
  SiJavascript, SiGo, SiDjango, SiFlask, SiFastapi, SiJquery, SiSqlalchemy, SiMongodb,
  SiScikitlearn, SiTensorflow, SiPandas, SiCss3
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="w-10 h-10 text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-green-600" /> },
  { name: "Python", icon: <FaPython className="w-10 h-10 text-yellow-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-700" /> },
  { name: "PHP", icon: <SiPhp className="w-10 h-10 text-purple-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-violet-700" /> },
  { name: "Flutter", icon: <SiFlutter className="w-10 h-10 text-blue-600" /> },
  { name: "Laravel", icon: <SiLaravel className="w-10 h-10 text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-blue-700" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-500" /> },
  { name: "Go", icon: <SiGo className="w-10 h-10 text-blue-700" /> },
  { name: "Django", icon: <SiDjango className="w-10 h-10 text-green-600" /> },
  { name: "Flask", icon: <SiFlask className="w-10 h-10 text-blue-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-10 h-10 text-green-600" /> },
  { name: "jQuery", icon: <SiJquery className="w-10 h-10 text-blue-600" /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy className="w-10 h-10 text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-700" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="w-10 h-10 text-blue-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="w-10 h-10 text-orange-500" /> },
  { name: "Pandas", icon: <SiPandas className="w-10 h-10 text-blue-700" /> },
  { name: "CSS3", icon: <SiCss3 className="w-10 h-10 text-blue-400" /> },
];

const TechStack = () => {
  return (
    <div className="w-full p-2 sm:px-10 lg:px-28 pt-0 lg:pt-20 mx-auto sm:p-2">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
        >
          My <span className="text-violet-400 bg-clip-text text-transparent">Technologies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto p-2 sm:p-0 md:p-0 lg:p-0"
        >
          Technologies I've mastered and refined throughout my journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mx-auto
                     sm:grid-cols-3 sm:gap-5 
                     md:grid-cols-4 lg:grid-cols-5 
                     xl:grid-cols-6
                     max-w-screen-2xl"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{
                duration: 0.3,
                delay: 0.05 * index,
                hover: { duration: 0.2 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/20 dark:from-neutral-900/90 dark:to-neutral-800/50
               shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]
               border border-neutral-100 dark:border-neutral-700/80
               backdrop-blur-sm hover:border-violet-400/50 dark:hover:border-violet-500/50
               group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-violet-100/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="w-14 h-14 mb-4 flex items-center justify-center mx-auto relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-violet-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="text-3xl text-violet-600 dark:text-violet-400 relative z-10">
                  {tech.icon}
                </div>
              </motion.div>

              <motion.span
                className="block text-center font-medium text-neutral-700 dark:text-neutral-300 text-lg
                bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-900 dark:from-neutral-300 dark:to-neutral-100
                relative"
                whileHover={{
                  backgroundImage: "linear-gradient(to right, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {tech.name}
              </motion.span>

              <div className="absolute inset-0 rounded-2xl border border-violet-400/20 dark:border-violet-500/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;