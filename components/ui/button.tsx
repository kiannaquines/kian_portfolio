import React from 'react';

interface LearnMoreButtonProps {
  title: string;
  className: string;
  onClick: () => void;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={`shadow-[0_0_0_3px_#000000_inset] px-8 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default LearnMoreButton;