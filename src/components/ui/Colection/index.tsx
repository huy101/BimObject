import type React from 'react';
import { Image } from '../Image';
import { Button } from '../Button';
import { Configure } from '../Svg';
interface CollectionCardProps {
  images: string[]; // Expecting 3 images
  title: string;
  url?: string;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ images, title, url }) => {
  if (images.length < 3) return null;

  return (
    <div className='flex flex-col'>
      <div className='shadow-[0 0 12px #0003] flex max-h-[348px] w-full flex-row justify-between rounded-md bg-white'>
        <div className='flex max-h-[230px] gap-3 bg-white'>
          {/* Cột 2 ảnh nhỏ */}
          <div className='flex h-full w-[110px] flex-col justify-between rounded-md bg-white mix-blend-multiply'>
            <div className='bg-[#f7f7f7]'>
              <Image src={images[0]} alt='Image 1' className='aspect-square h-full max-h-[110px] rounded-md object-fill object-center mix-blend-multiply' />
            </div>
            <div className='bg-[#f7f7f7]'>
              <Image src={images[1]} alt='Image 2' className='aspect-square h-full max-h-[110px] rounded-md object-fill object-center mix-blend-multiply' />
            </div>
          </div>

          {/* Ảnh lớn */}
          <div className='h-full w-[230px] rounded-md object-cover'>
            <Image src={images[2]} alt='Image 3' className='aspect-square' />
          </div>
        </div>
        <div className='absolute bottom-[100px] right-[-100px] flex items-center gap-1 rounded-[12px] border-2 border-white bg-[#f7f7f7] px-[6px] py-[2px]'>
          <Configure height={24} />
          <span className='text-black'>36</span>
        </div>
      </div>

      <a href={url} className='mt-3 block py-1 text-[16px] font-bold text-black hover:underline'>
        {title}
      </a>
      <Button variant='greenLight' className='h-9'>
        Add to project
      </Button>
    </div>
  );
};
