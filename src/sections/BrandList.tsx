import { Section } from '../layout/section';
import { Container } from '../layout/container';
import { TitleSection } from '../components/ui/TitleSectionProps';
import { BrandCard } from '../components/ui/BrandCard';
import { ArrowRightIcon } from '../components/ui/Svg';

interface BrandCardProps {
  name: string;
  logo: React.ReactNode;
  description?: string;
  url?: string;
}

interface BrandsSectionProps {
  brands: BrandCardProps[];
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ brands }) => {
  return (
    <Section background='Beige'>
      <Container>
        <div className='h-full w-full flex-col'>
          <TitleSection arrowIcon={<ArrowRightIcon />} title='Brands' subTitle='Browse all building product brands' className='mb-6' />
          <div className='productList'>
            {brands.map((brand, i) => (
              <BrandCard key={i} name={brand.name} logo={brand.logo} description={brand.description} url={brand.url} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
