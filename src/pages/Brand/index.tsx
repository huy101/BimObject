import { useState, useEffect, useRef } from 'react';
import { Image } from '../../components/ui/Image';
import { SocialLinks } from '../../components/ui/SocialLink';
import { ArrowRightIcon, Union } from '../../components/ui/Svg';
import { Container } from '../../layout/container';
import Footer from '../../layout/Footer/index';
import Navbar from '../../layout/Navbar';

import { TrendingProductsSection } from '@/sections/TrendingProduct';
import { BreadcrumbDemo } from '@/components/@core/Breadcumb';
import { FollowButton } from '@/components/@core/FollowButton';
const BrandDetail = () => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const products = [
    {
      id: '1',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/689463.png',
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '2',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/686042.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '3',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/356614.png',
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '4',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/525994.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '4',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/525994.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '4',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/525994.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '4',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/525994.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '4',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/525994.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '5',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/618063.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
    {
      id: '6',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/23254.png',
      rating: 4.3,
      url: '/product/wooden-chair',
      onAddToCart: () => console.log('Added to cart'),
    },
  ];
  // Sau khi render, kiểm tra xem span có overflow không
  useEffect(() => {
    const el = spanRef.current;
    if (el && el.scrollHeight > el.clientHeight) {
      setShowToggle(true);
    }
  }, []); // chỉ chạy 1 lần sau mount

  const links = [
    { platform: 'facebook', url: '/' },
    { platform: 'linkedin', url: '/' },
    { platform: 'twitter', url: '/' },
    { platform: 'youtube', url: '/' },
  ];

  return (
    <>
      <Navbar />

      <Container>
        <div className='w-full'>
          <div className='flex w-full flex-col justify-between'>
            <BreadcrumbDemo />
            {/* Banner Image */}
            <Image src='/src/assets/image/brandDetail .png' className='relative h-[303px] w-full rounded-xl object-cover' />
          </div>
          <div className='relative mb-14 mt-[-16px] flex w-full max-w-[1440px] flex-col gap-6 rounded-xl bg-white md:flex-row md:bg-[#fdf8f2] md:p-4'>
            <div className='flex w-full flex-col justify-start gap-6 rounded-xl bg-[#fdf8f2] p-8 md:max-w-[75%] lg:flex-row'>
              {/* Left: Logo + Title + Description */}
              <div className='min-w-[128px]'>
                <img
                  src='/src/assets/image/roca.webp'
                  alt='Roca logo'
                  className='mb-4 block h-32 w-32 rounded-lg border-2 border-white bg-white object-contain shadow-[0_0_12px_#eab57280]'
                />
                <div className='mt-4'>
                  <FollowButton userId='123' initiallyFollowing={false} />
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <h1 className='pb-0 text-4xl font-bold'>Roca</h1>

                {/* span chứa description, với clamp & overflow-hidden */}
                <span
                  ref={spanRef}
                  className={`overflow-hidden text-sm text-gray-700 transition-[max-height] duration-300 ease-in-out ${!expanded ? 'max-h-[6rem]' : 'max-h-none'} /* ~4 dòng */`}
                >
                  Roca is a company dedicated to the design, manufacturing and sale of bathroom products for architecture, construction and interior design. Founded in 1917, it
                  combines tradition and knowledge with a passion for innovation and respect for the environment, in order to meet the demands of customers and contribute to
                  improving the well-being of society. With sustainability as a key element in all its manufacturing processes and a commitment to ensure a better planet for future
                  generations, Roca has implemented this philosophy in the 170 countries in which it operates and in its 76 factories, transmitting this daily to its more than
                  21.000 employees. This family business is a market leader in Europe, Latin America and India. It also has a significant presence in China and the rest of Asia,
                  the Middle East, Australia and Africa. As a result, it is a world leader in its sector.
                </span>

                {/* Show more / less */}
                {showToggle && (
                  <button onClick={() => setExpanded((prev) => !prev)} className='mt-1 flex w-full items-center justify-center self-start text-sm text-black underline'>
                    {expanded ? 'Show less' : 'Show more'}
                  </button>
                )}

                {/* Follow Button tách biệt */}
              </div>

              {/* Right: Info & Social Links */}
            </div>
            <div className='my-4 w-full flex-1 space-y-2 bg-white px-8 pt-4 text-sm text-black md:min-w-[370px] md:bg-[#fdf8f2] md:pt-[84px]'>
              <div className='grid grid-cols-3 gap-x-4'>
                <div className='col-span-1 font-semibold'>Website</div>
                <div className='col-span-2'>www.roca.com</div>
                <div className='col-span-1 font-semibold'>Address</div>
                <div className='col-span-2'>Avda. Diagonal, 513 Barcelona 08029 Spain</div>
                <div className='col-span-1 font-semibold'>Phone</div>
                <div className='col-span-2'>+34 93 366 1200</div>
              </div>
              <SocialLinks
                className='flex gap-2'
                links={links}
                iconSize={20}
                backgroundColor='#f9ead8'
                hoverBackgroundColor='gray-200'
                iconColor='black'
                rounded='full'
                padding='2'
                gap='4'
                external={false}
              />
            </div>
          </div>
        </div>
      </Container>
      {/* YouTube Embed */}
      <Container>
        <div className='mx-auto flex aspect-video h-[578.48px] w-full max-w-[1033px] flex-col items-center'>
          <iframe
            src='https://www.youtube.com/embed/XR5N8ghc6-k'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Roca Introduction'
            className='h-full w-full rounded-lg'
          />
        </div>
      </Container>

      <TrendingProductsSection products={products} />

      {/* Latest products section */}

      <Footer />
    </>
  );
};

export default BrandDetail;
