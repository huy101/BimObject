import type React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'green' | 'greenLight' | 'primary' | 'gray' | 'Beige' | 'greenTint';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'white' }) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-[#d5e5e0]',
    green: 'bg-[#b7cec7]',
    greenLight: 'bg-[#d5e5e0]',
    greenTint: 'bg-[#eff5f3]',
    primary: 'bg-primary text-primary-foreground',
    Beige: 'bg-[#fdf8f2]',
  };

  return (
    <section id={id} className={`section ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
};
