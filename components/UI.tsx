
import React from 'react';

interface SketchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  type?: 'button' | 'submit';
}

export const SketchButton: React.FC<SketchButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = 'primary',
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-primary text-white sketch-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
    outline: "bg-transparent border-2 border-[#111c21] dark:border-primary text-[#111c21] dark:text-white hover:bg-primary/5",
    ghost: "bg-transparent text-[#111c21] dark:text-white hover:text-primary"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
}

export const SketchCard: React.FC<SketchCardProps> = ({ children, className = "", rotate = "0deg" }) => {
  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className={`bg-white dark:bg-gray-800 p-8 rounded-xl sketch-border ${className}`}
    >
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="flex flex-col items-center text-center mb-16">
    <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-primary/40 text-4xl">gesture</span>
      <h2 className="text-3xl md:text-4xl font-black">{children}</h2>
      <span className="material-symbols-outlined text-primary/40 text-4xl -scale-x-100">gesture</span>
    </div>
    <div className="w-24 h-1.5 bg-primary rounded-full mb-4"></div>
    {subtitle && <p className="text-lg opacity-70 max-w-xl">{subtitle}</p>}
  </div>
);
