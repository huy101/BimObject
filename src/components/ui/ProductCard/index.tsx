import type React from 'react';
import { Image } from '../Image/index';
import { Button } from '../Button';
import { Star } from '../Svg';
import { Dimension } from '../../ui/Svg';

interface ProductCardProps {
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
    <div className='productCard'>
      <div className='bg-[#f7f7f7] px-2'>
        <div className='absolute right-1 top-1 h-7 w-7 rounded px-2 py-1 text-xs font-medium text-white'>
          <Dimension width={24} height={24} />
        </div>
        <Image src={image} alt={name} width={148} height={148} />
      </div>

      <div className='flex flex-col'>
        <a href={url} className='relative w-fit'>
          <span className='brand'>{brand}</span>
        </a>
        <a href={url} className='relative w-fit'>
          <span className='productTitle'>{name}</span>
        </a>

        {rating !== undefined && (
          <div className='my-1 flex items-center'>
            <div className='flex items-center'>
              <Star />
            </div>
            <span className='ml-1 text-xs text-gray-500'>{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      <Button variant='greenLight' fullWidth onClick={onAddToCart}>
        Download
      </Button>
    </div>
  );
};
