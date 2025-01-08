import React from 'react';

interface SecondaryButtonProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title, className, icon, onClick }) => {
  return (
    <button
      className={`p-[3px] relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg ${className}`}
      onClick={onClick}
    >
      <div className="px-8 py-2 bg-black/5 rounded-[6px] relative group transition duration-200 hover:bg-transparent text-white flex items-center justify-center gap-2">
        {title} {icon}
      </div>
    </button>
  );
};

export default SecondaryButton;