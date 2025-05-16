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
    <div className={`flex w-full items-start gap-2 text-nowrap ${className}`}>
      {icon && <div className='mr-2'>{icon}</div>}

      <div className='flex-col'>
        <h2 className={`${titleClassName} flex items-center gap-2`} style={{ color: titleColor }}>
          {title}
          {arrowIcon && <span className='ml-2'>{arrowIcon}</span>}
        </h2>
        {subTitle && <p className={`text-[#a0a0a0] ${subTitleClassName}`}>{subTitle}</p>}
      </div>
    </div>
  );
};
