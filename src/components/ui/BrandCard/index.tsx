import type React from 'react';
import { Button } from '../Button';
import { Union } from '../Svg';
import { Image } from '../Image';
interface BrandCardProps {
  name: string;
  logo: string;
  description?: string;
  url?: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({ name, logo, description, url }) => {
  const CardContent = () => (
    <div className='brandCard'>
      <div className='mb-4 w-full rounded-lg bg-white p-1 shadow-[0_0_12px_#eab57280]'>
        <Image src={logo} />
      </div>
      <Button rounded='full' className='follow' variant='follow' icon={<Union width={8} height={8} />} iconPosition='left'>
        Follow
      </Button>
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
