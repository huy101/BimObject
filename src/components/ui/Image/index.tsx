import type React from 'react';
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | '16:9' | '4:3' | 'auto';
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export const Image: React.FC<ImageProps> = ({ src, alt = '', aspectRatio = 'auto', className = '', ...props }) => {
  const aspectRatioStyles = {
    square: 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    auto: '',
  };

  const combinedClassName = `${aspectRatioStyles[aspectRatio]}  ${className}`;

  return <img src={src} alt={alt} className={combinedClassName} {...props} />;
};
