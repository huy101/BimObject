import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar/index';
import AdditionalContentSection from '../sections/AdditionalContentSection';
import { BrandsSection } from '../sections/BrandList';
import CollectionSection from '../sections/CollectionSection';
import GoodCompanySection from '../sections/GoodCompanySection';
import HeroSection from '../sections/HeroSection';
import PopularCategoriesSection from '../sections/PopularCategoriesSection';
import { TrendingProductsSection } from '../sections/TrendingProduct';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card/card';
import { Download, FolderPlus, Package } from 'lucide-react';
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
      <TrendingProductsSection products={products} />

      <AdditionalContentSection />
      <GoodCompanySection />
      <Footer />
      <div className='min-h-screen bg-[#f0f5f3]'>
        <div className='container mx-auto px-4 py-12'>
          <Card className='grid grid-cols-1 gap-6 border-0 bg-white p-6 shadow-sm md:grid-cols-3'>
            {/* Left: Product Images */}
            <div className='overflow-hidden rounded-lg border border-gray-100 bg-white'>
              <div className='grid grid-cols-2 gap-1'>
                <div className='col-span-2'>
                  <div className='relative h-[200px] bg-[#f9f9f9]'>
                    <img src='/placeholder.svg?height=200&width=400' alt='Plant stand with potted plants' className='object-contain p-4' />
                  </div>
                </div>
                <div className='relative h-[100px] bg-[#f9f9f9]'>
                  <img src='/placeholder.svg?height=100&width=200' alt='Black pendant lamp' className='object-contain p-2' />
                </div>
                <div className='relative h-[100px] bg-[#f9f9f9]'>
                  <img src='/placeholder.svg?height=100&width=200' alt='Wooden bed frame' className='object-contain p-2' />
                </div>
              </div>
            </div>

            {/* Middle: Description */}
            <div className='flex flex-col justify-between md:col-span-2'>
              <div>
                <div className='mb-3 flex items-center gap-2'>
                  <div className='rounded bg-[#e6f3ed] p-1.5 text-[#0f5132]'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <rect x='3' y='3' width='7' height='7' rx='1' stroke='#0f5132' strokeWidth='2' />
                      <rect x='14' y='3' width='7' height='7' rx='1' stroke='#0f5132' strokeWidth='2' />
                      <rect x='3' y='14' width='7' height='7' rx='1' stroke='#0f5132' strokeWidth='2' />
                      <rect x='14' y='14' width='7' height='7' rx='1' stroke='#0f5132' strokeWidth='2' />
                    </svg>
                  </div>
                  <h1 className='text-2xl font-bold text-[#0f5132]'>Beach House</h1>
                </div>
                <p className='mb-6 leading-relaxed text-[#2d6a4f]'>
                  Download and search for beach house products. Browse through BIMobject's curated library of manufacturer-specific content to research and select which products to
                  use in your beach house project. Whether you're looking for something for a particular market, BIM software, or brand you can find it here. Filter for file types
                  including Revit families and BIM data such as objects, certifications, and specifications.
                </p>
              </div>

              {/* Right sidebar on mobile */}
              <div className='mt-6 rounded-lg bg-[#e6f3ed] p-4 md:hidden'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Package className='h-5 w-5 text-[#0f5132]' />
                    <span className='font-medium'>Collection contains</span>
                  </div>
                  <span className='font-semibold'>37 products</span>
                </div>
                <Button className='mb-3 w-full bg-[#0f5132] hover:bg-[#0a3f27]'>
                  <Download className='mr-2 h-4 w-4' /> Download collection
                </Button>
                <Button variant='outline' className='w-full border-[#0f5132] text-[#0f5132] hover:bg-[#e6f3ed]/80'>
                  <FolderPlus className='mr-2 h-4 w-4' /> Add to a project
                </Button>
              </div>
            </div>
          </Card>

          {/* Right sidebar on desktop */}
          <div className='ml-auto mt-6 hidden w-full max-w-xs md:block'>
            <div className='rounded-lg bg-[#e6f3ed] p-6'>
              <div className='mb-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Package className='h-5 w-5 text-[#0f5132]' />
                  <span className='font-medium'>Collection contains</span>
                </div>
                <span className='font-semibold'>37 products</span>
              </div>
              <Button className='mb-3 w-full bg-[#0f5132] hover:bg-[#0a3f27]'>
                <Download className='mr-2 h-4 w-4' /> Download collection
              </Button>
              <Button variant='outline' className='w-full border-[#0f5132] text-[#0f5132] hover:bg-[#e6f3ed]/80'>
                <FolderPlus className='mr-2 h-4 w-4' /> Add to a project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
