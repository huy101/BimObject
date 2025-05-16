import type React from 'react';
import { Button } from '../Button';
import { Union } from '../Svg';
import { FollowButton } from '@/components/@core/FollowButton';
interface BrandCardProps {
  name: string;
  logo: string;
  description?: string;
  url?: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({ name, logo, description, url }) => {
  const CardContent = () => (
    <div className='flex w-full max-w-[230px] flex-col items-center justify-center'>
      <img
        src={logo}
        loading='lazy'
        width={162}
        height={162}
        alt=''
        className='min-w-auto m-4 aspect-square h-auto w-full max-w-full rounded-lg bg-white object-contain p-[4px] shadow-[0_0_12px_#eab57280]'
      />
      <div className='flex w-full justify-start'>
        <FollowButton userId='123' initiallyFollowing={false} />
      </div>

      <h3 className='cardTitle'>{name}</h3>
    </div>
  );

  if (url) {
    return (
      <a href={url} className='block'>
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};
