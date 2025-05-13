import React from 'react';
import { Section } from '../layout/section';
import { Container } from '../layout/container';
import { TitleSection } from '../components/ui/TitleSectionProps';
import { ProductCard } from '../components/ui/ProductCard';
import { ArrowRightIcon } from '../components/ui/Svg';
export interface Product {
  id: string;
  brand: string;
  name: string;
  image: string;
  rating?: number;
  url: string;
  onAddToCart: () => void;
}

interface TrendingProductsSectionProps {
  products: Product[];
  title?: string;
  subTitle?: string;
  className?: string;
}

export const TrendingProductsSection: React.FC<TrendingProductsSectionProps> = ({
  products,
  title = 'Trending product',
  subTitle = 'Browse all trending products',
  className = '',
}) => {
  return (
    <Section background='white'>
      <Container>
        <div className='w-full flex-col'>
          <TitleSection arrowIcon={<ArrowRightIcon />} title={title} subTitle={subTitle} className='mb-6' />
          <div className={`cardContainer ${className}`}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                brand={product.brand}
                name={product.name}
                image={product.image}
                rating={product.rating}
                url={product.url}
                onAddToCart={product.onAddToCart}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
