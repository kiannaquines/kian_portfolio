import React from 'react';

interface PrimaryButtonProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, className, icon, onClick }) => {
  return (
    <button
      className={`
        relative overflow-hidden
        shadow-[0_0_0_3px_#000000_inset] 
        px-4 bg-transparent border border-black 
        dark:border-white dark:text-white text-black 
        rounded-lg flex gap-2 font-bold 
        transform hover:-translate-y-1 p-1 
        transition-all duration-300 items-center justify-center 
        group ${className}
        
        /* Shine effect */
        before:content-[''] before:absolute before:inset-0 
        before:rounded-[inherit] 
        before:bg-[linear-gradient(110deg,transparent_10%,rgba(255,255,255,0.3)_45%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.3)_55%,transparent_90%)]
        dark:before:bg-[linear-gradient(110deg,transparent_10%,rgba(255,255,255,0.4)_45%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0.4)_55%,transparent_90%)]
        before:bg-[length:250%_250%] 
        before:bg-[position:200%_0] 
        before:bg-no-repeat 
        before:opacity-0
        before:transition-all before:duration-1000
        hover:before:opacity-100
        hover:before:bg-[position:-50%_0]
      `}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {title} {icon}
      </span>
    </button>
  );
};

export default PrimaryButton;