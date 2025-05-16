import React from 'react';
import { Section } from '../layout/section';
import { Container } from '../layout/container';
import { TitleSection } from '../components/ui/TitleSectionProps';
import { ProductCard } from '../components/ui/ProductCard';
import type { ProductCardProps } from '../components/ui/ProductCard';
import { ArrowRightIcon } from '../components/ui/Svg';

interface TrendingProductsSectionProps {
  products: ProductCardProps[];
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
        <div className='h-full w-full flex-col'>
          <TitleSection arrowIcon={<ArrowRightIcon />} title={title} subTitle={subTitle} />
          <div className={`relative flex h-full w-full justify-between gap-[20px] overflow-x-auto px-4 ${className}`}>
            {products.map((ProductCardProps) => (
              <ProductCard
                key={ProductCardProps.id}
                id={ProductCardProps.id}
                brand={ProductCardProps.brand}
                name={ProductCardProps.name}
                image={ProductCardProps.image}
                rating={ProductCardProps.rating}
                url={ProductCardProps.url}
                onAddToCart={ProductCardProps.onAddToCart}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
