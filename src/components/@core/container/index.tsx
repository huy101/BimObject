import type React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`relative flex max-w-[1440px] flex-wrap overflow-auto px-4 sm:mx-auto sm:w-full md:flex-nowrap lg:w-full xl:flex-nowrap ${className}`}>{children}</div>;
};
