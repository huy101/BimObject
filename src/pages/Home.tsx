import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar/index';
import AdditionalContentSection from '../sections/AdditionalContentSection';
import { BrandsSection } from '../sections/BrandList';
import CollectionSection from '../sections/CollectionSection';
import GoodCompanySection from '../sections/GoodCompanySection';
import HeroSection from '../sections/HeroSection';
import PopularCategoriesSection from '../sections/PopularCategoriesSection';
import { TrendingProductsSection } from '../sections/TrendingProduct';
export default function Home() {
  const sampleCards = [
    {
      name: 'Nike',
      logo: '/src/assets/image/858a5779-5744-4e52-8e68-877977e6d894.webp',
      description: 'Leading sports brand with high-quality shoes and apparel.',
      url: '/brand',
    },

    {
      name: 'Nike',
      logo: 'src/assets/image/858a5779-5744-4e52-8e68-877977e6d894.webp',
      description: 'Leading sports brand with high-quality shoes and apparel.',
      url: 'https://www.nike.com',
    },

    {
      name: 'Nike',
      logo: 'src/assets/image/858a5779-5744-4e52-8e68-877977e6d894.webp',
      description: 'Leading sports brand with high-quality shoes and apparel.',
      url: 'https://www.nike.com',
    },

    {
      name: 'Nike',
      logo: 'src/assets/image/858a5779-5744-4e52-8e68-877977e6d894.webp',
      description: 'Leading sports brand with high-quality shoes and apparel.',
      url: 'https://www.nike.com',
    },

    {
      name: 'Nike',
      logo: 'src/assets/image/858a5779-5744-4e52-8e68-877977e6d894.webp',
      description: 'Leading sports brand with high-quality shoes and apparel.',
      url: 'https://www.nike.com',
    },

    // ... thêm các brand khác
  ];
  const products = [
    {
      id: '1',
      brand: 'huy',
      name: 'Wooden Chaiac aljcalcsj r',
      image: 'src/assets/image/689463.png',
      rating: 4.3,
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
  const collections = [
    {
      title: 'Add Color',
      images: ['src/assets/image/colection1-1.png', 'src/assets/image/colection1-2.png', 'src/assets/image/colection1-3.png'],
      path: '/add-nature/color', // Đường dẫn riêng cho collection này
    },
    {
      title: 'Add Texture',
      images: ['src/assets/image/colection1-1.png', 'src/assets/image/colection1-2.png', 'src/assets/image/colection1-3.png'],
      path: '/add-nature/texture', // Đường dẫn riêng cho collection này
    },
    {
      title: 'Add Patterns',
      images: ['src/assets/image/colection1-1.png', 'src/assets/image/colection1-2.png', 'src/assets/image/colection1-3.png'],
      path: '/add-nature/patterns', // Đường dẫn riêng cho collection này
    },
    {
      title: 'Add Patterns',
      images: ['src/assets/image/colection1-1.png', 'src/assets/image/colection1-2.png', 'src/assets/image/colection1-3.png'],
      path: '/add-nature/patterns', // Đường dẫn riêng cho collection này
    },
  ];
  return (
    <div className='relative'>
      <Navbar />
      <HeroSection />
      <PopularCategoriesSection />
      <BrandsSection brands={sampleCards} />
      {/* <BrandCardList cards={sampleCards} />; */}
      <TrendingProductsSection products={products} />
      <CollectionSection collections={collections} />
      <AdditionalContentSection />
      <GoodCompanySection />
      <Footer />
    </div>
  );
}
