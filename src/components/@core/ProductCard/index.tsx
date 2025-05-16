import type React from 'react';
import { Image } from '../../ui/Image/index';
import { Button } from '../../ui/Button';
import { ProjectGreen, Star } from '../../ui/Svg';
import { Dimension } from '../../ui/Svg';
import ActionButtons from '../DownloadAddButton';
export interface ProductCardProps {
  id: string;
  name: string;
  brand?: string;
  image: string;
  rating?: number;
  url: string;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, image, brand, rating, url, onAddToCart }) => {
  return (
    <div className='gap-4'>
      <div className='relative flex h-full flex-col justify-between'>
        <div className='w-full px-2'>
          <div className='relative min-w-[214px] bg-[#f7f7f7]'>
            <div className='absolute right-0 top-2 h-7 rounded px-2 py-1 text-xs font-medium text-white'>
              <Dimension width={24} height={24} />
            </div>
            <Image src={image} alt={name} className='h-full w-full object-contain' />
          </div>

          <div className='flex flex-col'>
            <a href={url} className='relative w-fit'>
              <span className='flex w-full max-w-[230px] flex-col items-center justify-center text-black'>{brand}</span>
            </a>
            <a href={url} className='relative w-fit'>
              <span className='m-0 min-h-[1.875rem] break-words text-sm font-bold leading-[1.4] text-black'>{name}</span>
            </a>

            {rating !== undefined && (
              <div className='my-1 flex items-center'>
                <div className='flex items-center'>
                  <Star />
                </div>
                <span className='ml-1 text-xs text-[#ec972b]'>{rating.toFixed(1)}</span>
              </div>
            )}
            <span>(5)</span>
          </div>
        </div>
        <ActionButtons />
      </div>
    </div>
  );
};
