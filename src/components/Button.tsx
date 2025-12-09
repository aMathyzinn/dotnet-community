import type { ButtonHTMLAttributes } from 'react';
import type { ButtonVariant } from '../types/enums';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6]',
    secondary: 'text-[#00D4FF] border-b-2 border-[#00D4FF] pb-1 hover:text-white hover:border-white px-0 py-0',
    tertiary: 'text-white/70 hover:text-[#00D4FF] px-0 py-0'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};