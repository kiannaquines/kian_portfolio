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
  { name: "React", icon: <FaReact className="text-5xl text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-5xl text-yellow-500" /> },
  { name: "Docker", icon: <SiDocker className="text-5xl text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-blue-700" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-5xl text-pink-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-5xl text-blue-400" /> },
  { name: "PHP", icon: <SiPhp className="text-5xl text-purple-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-5xl text-violet-700" /> },
  { name: "Flutter", icon: <SiFlutter className="text-5xl text-blue-600" /> },
  { name: "Dart", icon: <SiDart className="text-5xl text-red-600" /> },
  { name: "Laravel", icon: <SiLaravel className="text-5xl text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-700" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-5xl text-yellow-500" /> },
  { name: "Go", icon: <SiGo className="text-5xl text-blue-700" /> },
  { name: "Django", icon: <SiDjango className="text-5xl text-green-600" /> },
  { name: "Flask", icon: <SiFlask className="text-5xl text-blue-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-5xl text-green-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-5xl text-black dark:text-white" /> },
  { name: "Composer", icon: <SiComposer className="text-5xl text-blue-700" /> },
  { name: "Heroku", icon: <SiHeroku className="text-5xl text-violet-700" /> },
  { name: "jQuery", icon: <SiJquery className="text-5xl text-blue-600" /> },
  { name: "Filezilla", icon: <SiFilezilla className="text-5xl text-red-700" /> },
  { name: "Nginx", icon: <SiNginx className="text-5xl text-green-700" /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy className="text-5xl text-blue-700" /> },
  { name: "SQLite", icon: <SiSqlite className="text-5xl text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-700" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="text-5xl text-blue-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-5xl text-orange-500" /> },
  { name: "Pandas", icon: <SiPandas className="text-5xl text-blue-700" /> },
  { name: "Linux", icon: <SiLinux className="text-5xl text-white" /> },
  { name: "NPM", icon: <SiNpm className="text-5xl text-red-700" /> },
  { name: "Ubuntu", icon: <SiUbuntu className="text-5xl text-orange-700" /> },
  { name: "Git", icon: <SiGitforwindows className="text-5xl text-orange-700" /> },
  { name: "Debian", icon: <SiDebian className="text-5xl text-red-700" /> },
  { name: "CSS3", icon: <SiCss3 className="text-5xl text-blue-400" /> },
  { name: "Notion", icon: <SiNotion className="text-5xl" /> },
  { name: "Google", icon: <SiGoogle className="text-5xl" /> },
  { name: "Colab", icon: <SiGooglecolab className="text-5xl text-orange-400" /> },
];

const TechStack = () => {
  return (
    <div className="w-full sm:px-10 lg:px-28 pt-10 lg:pt-32 mx-auto sm:p-2">
      <div className="mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-neutral-900 dark:text-white mb-4"
        >
          My <span className="text-violet-500">Technologies</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto"
        >
          Technologies I've repeated & refined throughout the years.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-screen-xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg border-neutral-700 dark:border-neutral-700 transition-shadow"
            >
              {tech.icon}
              <span className="mt-4 text-lg text-center font-medium text-neutral-900 dark:text-white">
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