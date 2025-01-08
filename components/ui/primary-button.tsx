import React from 'react';

interface PrimaryButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, className, onClick }) => {
  return (
    <button className={`shadow-[0_0_0_3px_#000000_inset] px-4 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 p-2 transition duration-400 ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default PrimaryButton;