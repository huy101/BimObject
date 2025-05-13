import type React from 'react';

interface IconTitleSectionProps {
  icon?: React.ReactNode;
  arrowIcon?: React.ReactNode;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  titleColor?: string;
}

export const TitleSection: React.FC<IconTitleSectionProps> = ({ icon, arrowIcon, title, titleColor, subTitle, className = '', titleClassName = '', subTitleClassName = '' }) => {
  return (
    <div className={`TitleSection ${className}`}>
      {icon && <div className='mr-2'>{icon}</div>}

      <div className='w-full flex-col'>
        <h2 className={`${titleClassName} titleClassName`} style={{ color: titleColor }}>
          {title}
          {arrowIcon && <span className='ml-2'>{arrowIcon}</span>}
        </h2>
        {subTitle && <span className={`text-[#1a4b3b] ${subTitleClassName}`}>{subTitle}</span>}
      </div>
    </div>
  );
};
