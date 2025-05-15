import { Button } from '../../components/ui/Button';
import { useState, useEffect, useRef } from 'react';
import { Image } from '../../components/ui/Image';
import { SocialLinks } from '../../components/ui/SocialLink';
import { ArrowRightIcon, Union } from '../../components/ui/Svg';
import { Container } from '../../layout/container';
import Footer from '../../layout/Footer/index';
import Navbar from '../../layout/Navbar';
import { Section } from '../../layout/section';
import { TitleSection } from '../../components/ui/TitleSectionProps';
const BrandDetail = () => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

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
    <div>
      <Navbar />
      <Section>
        <Container>
          <div className='w-full'>
            <ul className='flex text-black'>
              <li>Home/</li>
              <li>Home/</li>
              <li>Home/</li>
            </ul>
            {/* Banner Image */}
            <Image src='/src/assets/image/brandDetail .png' className='relative h-[303px] w-full rounded-lg object-cover' />
            <div className='relative mx-2 mb-14 mt-[-16px] flex flex-col gap-6 rounded-xl bg-[#fdf8f2] p-4 md:flex-row'>
              <div className='flex flex-col lg:flex-row'>
                {/* Left: Logo + Title + Description */}
                <div className=''>
                  <img src='/src/assets/image/roca.webp' alt='Roca logo' className='h-auto w-24' />
                  <div className='mt-4'>
                    <Button rounded='full' className='follow' variant='follow' icon={<Union />} iconPosition='left'>
                      Follow
                    </Button>
                  </div>
                </div>
                <div className='flex flex-1 flex-col gap-2'>
                  <h1 className='text-2xl font-bold'>Roca</h1>

                  {/* span chứa description, với clamp & overflow-hidden */}
                  <span
                    ref={spanRef}
                    className={`overflow-hidden text-sm text-gray-700 transition-[max-height] duration-300 ease-in-out ${!expanded ? 'max-h-[6rem]' : 'max-h-none'} /* ~4 dòng */`}
                  >
                    Roca is a company dedicated to the design, manufacturing and sale of bathroom products for architecture, construction and interior design. Founded in 1917, it
                    combines tradition and knowledge with a passion for innovation and respect for the environment, in order to meet the demands of customers and contribute to
                    improving the well-being of society. With sustainability as a key element in all its manufacturing processes and a commitment to ensure a better planet for
                    future generations, Roca has implemented this philosophy in the 170 countries in which it operates and in its 76 factories, transmitting this daily to its more
                    than 21.000 employees. This family business is a market leader in Europe, Latin America and India. It also has a significant presence in China and the rest of
                    Asia, the Middle East, Australia and Africa. As a result, it is a world leader in its sector.
                  </span>

                  {/* Show more / less */}
                  {showToggle && (
                    <button onClick={() => setExpanded((prev) => !prev)} className='mt-1 self-start text-sm text-blue-600 underline'>
                      {expanded ? 'Show less' : 'Show more'}
                    </button>
                  )}

                  {/* Follow Button tách biệt */}
                </div>

                {/* Right: Info & Social Links */}
              </div>
              <div className='flex-1 space-y-2 bg-[#fdf8f2] text-sm text-black'>
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

            {/* YouTube Embed */}
            <div className='aspect-video w-full'>
              <iframe
                src='https://www.youtube.com/embed/XR5N8ghc6-k'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Roca Introduction'
                className='h-full w-full rounded-lg'
              />
            </div>

            {/* Latest products section */}
            <TitleSection arrowIcon={<ArrowRightIcon />} title='Latest products' subTitle='Browse all building product categories' className='mb-6' />
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default BrandDetail;
