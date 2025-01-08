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
      className={`shadow-[0_0_0_3px_#000000_inset] px-4 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg flex gap-2 font-bold transform hover:-translate-y-1 p-2 transition duration-400 items-center justify-center ${className}`}
      onClick={onClick}
    >
      {title} {icon}
    </button>
  );
};

export default PrimaryButton;