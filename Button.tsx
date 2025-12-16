import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', fullWidth = false, ...props }) => {
  return (
    <button
      className={`
        relative group overflow-hidden rounded-full p-[1px]
        transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Gradient Border Background */}
      <div className="absolute inset-0 bg-white/20 rounded-full" />
      
      {/* Inner Button */}
      <div className="relative bg-green-btn rounded-full px-8 py-4 flex items-center justify-center">
        <span className="font-bold text-black text-lg tracking-wide uppercase font-sans">
          {children}
        </span>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
    </button>
  );
};
