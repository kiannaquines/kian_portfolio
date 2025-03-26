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
      whileTap={{ scale: 0.98 }}
    >

      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-lg"
        animate={{
          backgroundPosition: isHovered ? '100% 50%' : '0% 50%'
        }}
        transition={{ duration: 1.5 }}
      />
      
      <div className={`
        relative px-6 py-3 bg-neutral-900/90 rounded-lg
        text-white flex items-center justify-center gap-3
        text-base font-medium tracking-wide
        transition-all duration-300
      `}>
        <span>{title}</span>
        
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
        </motion.div>
        
        {isHovered && (
          <>
            <motion.span 
              className="absolute top-0 left-4 w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, -10],
                x: [0, 5]
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.2
              }}
            />
            <motion.span 
              className="absolute top-1 right-6 w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, -8],
                x: [0, -3]
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.4
              }}
            />
          </>
        )}
      </div>
      
      <motion.div
        className="absolute inset-0 rounded-lg bg-violet-500/20 blur-md -z-10"
        animate={{
          opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default SecondaryButton;