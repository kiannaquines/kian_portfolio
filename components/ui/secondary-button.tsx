import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SecondaryButtonProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
  title, 
  className = '', 
  icon, 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg group ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
    >

      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-lg"
        animate={{
          backgroundPosition: isHovered ? '100% 50%' : '0% 50%',
          opacity: isHovered ? 1 : 0.8,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div className={`
        relative px-6 py-3 bg-neutral-900/90 rounded-lg
        text-white flex items-center justify-center gap-3
        text-base font-medium tracking-wide
        transition-all duration-300
      `}>
        {icon && (
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 10, -5, 10, 0] : 0
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.2, 0.5, 0.8, 1]
            }}
          >
            {icon}
          </motion.div>
        )}
        <span>{title}</span>
      </div>
      
      <motion.div
        className="absolute inset-0 rounded-lg bg-violet-500/20 blur-md -z-10"
        animate={{
          opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 rounded-lg bg-white opacity-0"
        whileTap={{ opacity: 0.2, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default SecondaryButton;
