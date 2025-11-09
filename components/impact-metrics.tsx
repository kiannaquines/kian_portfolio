"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "events/min", value: "5K+", color: "from-blue-500 to-cyan-500" },
  { label: "model accuracy", value: "98%", color: "from-purple-500 to-pink-500" },
  { label: "systems shipped", value: "12+", color: "from-orange-500 to-red-500" },
  { label: "faster deploys", value: "40%", color: "from-green-500 to-emerald-500" },
];

export default function ImpactMetrics() {
  return (
    <section aria-label="impact metrics" className="w-full mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, index) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Gradient background glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              
              {/* Card */}
              <div className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r ${m.color} opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-300`} />
                
                {/* Value */}
                <div className={`text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br ${m.color} bg-clip-text text-transparent tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {m.value}
                </div>
                
                {/* Label */}
                <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
