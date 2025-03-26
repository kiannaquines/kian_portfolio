"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiDocker, SiPostgresql, SiGraphql, 
  SiCplusplus, SiPhp, SiBootstrap, SiFlutter, SiDart, SiLaravel, SiMysql, 
  SiJavascript, SiGo, SiDjango, SiFlask, SiFastapi, SiGithub, SiComposer, 
  SiHeroku, SiJquery, SiFilezilla, SiNginx, SiSqlalchemy, SiSqlite, SiMongodb, 
  SiScikitlearn, SiTensorflow, SiPandas, SiLinux, SiNpm, SiUbuntu, SiGitforwindows, 
  SiDebian, SiCss3, SiNotion, SiGoogle, SiGooglecolab
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="w-10 h-10 text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-green-600" /> },
  { name: "Python", icon: <FaPython className="w-10 h-10 text-yellow-500" /> },
  { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-700" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-10 h-10 text-pink-600" /> },
  { name: "C++", icon: <SiCplusplus className="w-10 h-10 text-blue-400" /> },
  { name: "PHP", icon: <SiPhp className="w-10 h-10 text-purple-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-violet-700" /> },
  { name: "Flutter", icon: <SiFlutter className="w-10 h-10 text-blue-600" /> },
  { name: "Dart", icon: <SiDart className="w-10 h-10 text-red-600" /> },
  { name: "Laravel", icon: <SiLaravel className="w-10 h-10 text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-blue-700" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-500" /> },
  { name: "Go", icon: <SiGo className="w-10 h-10 text-blue-700" /> },
  { name: "Django", icon: <SiDjango className="w-10 h-10 text-green-600" /> },
  { name: "Flask", icon: <SiFlask className="w-10 h-10 text-blue-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-10 h-10 text-green-600" /> },
  { name: "GitHub", icon: <SiGithub className="w-10 h-10 text-black dark:text-white" /> },
  { name: "Composer", icon: <SiComposer className="w-10 h-10 text-blue-700" /> },
  { name: "Heroku", icon: <SiHeroku className="w-10 h-10 text-violet-700" /> },
  { name: "jQuery", icon: <SiJquery className="w-10 h-10 text-blue-600" /> },
  { name: "Filezilla", icon: <SiFilezilla className="w-10 h-10 text-red-700" /> },
  { name: "Nginx", icon: <SiNginx className="w-10 h-10 text-green-700" /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy className="w-10 h-10 text-blue-700" /> },
  { name: "SQLite", icon: <SiSqlite className="w-10 h-10 text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-700" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="w-10 h-10 text-blue-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="w-10 h-10 text-orange-500" /> },
  { name: "Pandas", icon: <SiPandas className="w-10 h-10 text-blue-700" /> },
  { name: "Linux", icon: <SiLinux className="w-10 h-10 text-white" /> },
  { name: "NPM", icon: <SiNpm className="w-10 h-10 text-red-700" /> },
  { name: "Ubuntu", icon: <SiUbuntu className="w-10 h-10 text-orange-700" /> },
  { name: "Git", icon: <SiGitforwindows className="w-10 h-10 text-orange-700" /> },
  { name: "Debian", icon: <SiDebian className="w-10 h-10 text-red-700" /> },
  { name: "CSS3", icon: <SiCss3 className="w-10 h-10 text-blue-400" /> },
  { name: "Notion", icon: <SiNotion className="w-10 h-10" /> },
  { name: "Google", icon: <SiGoogle className="w-10 h-10" /> },
  { name: "Colab", icon: <SiGooglecolab className="w-10 h-10 text-orange-400" /> },
];

const TechStack = () => {
  return (
    <div className="w-full p-2 sm:px-10 lg:px-28 pt-0 lg:pt-0 mx-auto sm:p-2">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-neutral-900 dark:text-white mb-6
                     md:text-5xl lg:text-6xl"
        >
          My <span className="text-violet-500 bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 text-lg mb-12 mx-auto
                     md:text-xl md:max-w-2xl"
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
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 bg-white dark:bg-neutral-800/80 
                         rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                         border border-neutral-200 dark:border-neutral-700
                         hover:border-violet-400 dark:hover:border-violet-500
                         group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200
                              md:text-base">
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