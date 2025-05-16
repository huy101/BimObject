import type React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'follow' | 'greenLight' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'none' | 'follow';
  font?: 'normal' | 'medium' | 'semibold' | 'bold';
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  font = 'semibold',
  className = '',
  icon,
  iconPosition = 'left',
  as = 'button',
  rounded = 'md',
  href,
  ...props
}) => {
  const baseStyles = 'button';
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const variantStyles = {
    primary: 'bg-[#0c482f] text-white  ',
    secondary: 'bg-gray-200 text-gray-900 ',
    white: 'bg-white border border-black hover:bg-gray-100',
    outline: 'bg-transparent',
    follow: 'follow',
    greenLight: 'bg-[#d5e5e0] ',
  };

  const fontStyle = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const sizeStyles = {
    sm: ' px-2 ',
    md: ' px-4 py-2',
    lg: ' px-8 py-3',
    none: 'p-0',
    follow: 'px-2 py-[2px]',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const iconContent = icon && <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>{icon}</span>;

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fontStyle[font]} ${widthStyles} ${roundedStyles[rounded]} ${className}`;

  const buttonContent = (
    <>
      {iconPosition === 'left' && iconContent}
      {children}
      {iconPosition === 'right' && iconContent}
    </>
  );

  if (as === 'a') {
    return (
      <a href={href} className={`${combinedClassName} flex items-center`} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={`${combinedClassName} flex items-center`} {...props}>
      {buttonContent}
    </button>
  );
};
