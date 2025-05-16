import { Section } from '../components/@core/Section';
import { Container } from '../components/@core/container';
import { TitleSection } from '../components/@core/TitleSectionProps';
import { BrandCard } from '../components/@core/BrandCard';
import { ArrowRightIcon } from '../components/ui/Svg';

interface BrandCardProps {
  name: string;
  logo: string;
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
        <div className='h-full w-full flex-col overflow-auto'>
          <TitleSection arrowIcon={<ArrowRightIcon />} title='Brands' subTitle='Browse all building product brands' className='' />
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
