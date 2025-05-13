import { Button } from '../../components/ui/Button';
import { Image } from '../../components/ui/Image';
import { SocialLinks } from '../../components/ui/SocialLink';
import { ArrowRightIcon, Union } from '../../components/ui/Svg';
import { TitleSection } from '../../components/ui/TitleSectionProps';
import { Container } from '../../layout/container';
import Footer from '../../layout/Footer/index';
import Navbar from '../../layout/Navbar';
import { Section } from '../../layout/section';
const BrandDetail = () => {
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
          <div className='flex flex-col'>
            <div className='flex bg-[#fdf8f2]'>
              <div className='w-full'>
                <Image src='/public/brandDetail.png' objectFit='cover' className='h-[303px] w-full rounded-lg' />
              </div>

              <div>
                <TitleSection
                  icon={'/public/roca.webp'}
                  title={<>Roca</>}
                  subTitleClassName='text-wrap'
                  subTitle={
                    <>
                      Roca is a company dedicated to the design, manufacturing and sale of bathroom products for architecture, construction and interior design. Founded in 1917, it{' '}
                      combines tradition and knowledge with a passion for innovation and respect for the environment, in order to meet the demands of customers and contribute to{' '}
                      improving the well-being of society. With sustainability as a key element in all its manufacturing processes and a commitment to ensure a better planet for{' '}
                      future generations, Roca has implemented this philosophy in the 170 countries in which it operates and in its 76 factories, transmitting this daily to its
                      more than 21.000 employees. This family business is a market leader in Europe, Latin America and India. It also has a significant presence in China and the
                      rest of Asia, the Middle East, Australia and Africa. As a result, it is a world leader in its sector.
                    </>
                  }
                />
                <Button rounded='full' className='follow' variant='follow' icon={<Union />} iconPosition='left'>
                  Follow
                </Button>
              </div>
              <div className='text-black'>
                Website www.roca.com Address Avda. Diagonal, 513 Barcelona 08029 Spain Phone +34 93 366 1200
                <SocialLinks
                  links={links}
                  iconSize={20}
                  backgroundColor='white'
                  hoverBackgroundColor='gray-200'
                  iconColor='black'
                  rounded='full'
                  padding='2'
                  gap='4'
                  external={false} // vì đang dùng <Link />
                />
              </div>
            </div>
            <div className='h-full w-full'>
              <iframe
                src='https://www.youtube.com/embed/XR5N8ghc6-k'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='YouTube video'
              ></iframe>
            </div>
          </div>

          <TitleSection arrowIcon={<ArrowRightIcon />} title='Latest products' subTitle='Browse all building product categories' className='mb-6' />
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default BrandDetail;
