import { ProductSpecification } from '@/components/@core/ProductSpecification/ProductSpecification';
import ProductCarousel, { type ProductImage } from '@/components/@core/ImageCarousel';
import { Section } from '@/components/@core/Section';
import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';
import { Container } from '@/components/@core/container';
import { BreadcrumbDemo } from '@/components/@core/Breadcumb';
import { TitleSection } from '@/components/@core/TitleSectionProps';
import ActionButtons from '@/components/@core/DownloadAddButton';
import { TrendingProductsSection } from '@/sections/SuggestsProductSection';
import { FollowButton } from '@/components/@core/FollowButton';

export default function ProductDetail() {
  const washbasinImages: ProductImage[] = [
    {
      src: '/src/assets/image/826469.png',
      alt: 'Washbasin technical drawing - front view',
    },
    {
      src: '/placeholder.svg?height=600&width=800&text=Side+View',
      alt: 'Washbasin technical drawing - side view',
    },
    {
      src: '/placeholder.svg?height=600&width=800&text=Top+View',
      alt: 'Washbasin technical drawing - top view',
    },
    {
      src: '/placeholder.svg?height=600&width=800&text=3D+View',
      alt: 'Washbasin technical drawing - 3D view',
      has3DView: true,
    },
  ];
  // Sample product data matching the image
  const productData = {
    uniqueRef: 'PRE080028',
    productFamily: 'Sanitary',
    productGroup: 'Kitchen',
    type: 'Object (single object)',
    dateOfPublishing: '2020-10-14',
    editionNumber: '1',
    height: '237',
    width: '128',
    depth: '286',
  };
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
  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <div className='flex-col'>
            <BreadcrumbDemo />
            <div className='flex max-w-full flex-wrap gap-6'>
              <div className='min-w-[300px] flex-1'>
                <ProductCarousel images={washbasinImages} title='Double Bardsquare Washbasin' />
              </div>

              <div className='min-w-[300px] flex-1'>
                <div className=''>
                  <FollowButton />
                  <h2 className='mb-2 text-2xl font-semibold'>Brands</h2>
                  <p className='text-gray-700'>
                    Single-lever deck-mounted mixer with upward spout. Special bar application with spout under the counter. Swivel spout, projection 250 mm, height under spout 146
                    mm, diameter 22 mm. Ceramic cartridge with flow rate of 20L / min at 3 bar. Anti-limescale star-shaped flow straightener. Supply by PEX flexible hose - G1 / 2
                    '' braid Lg 660 mm, resistant to temperatures up to 90 °C. Integrated NF check valves. Chromed brass body and spout.
                  </p>
                </div>

                <ActionButtons className='flex flex-row-reverse' classNameAddProject='' classNameDownload='' />
                <ProductSpecification product={productData} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <TrendingProductsSection products={products} />

      <Footer />
    </>
  );
}
