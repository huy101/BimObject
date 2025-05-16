// components/sections/PopularCategoriesSection.jsx
import MultipleItems from '../components/ui/slide'; // Giả sử bạn đã có một component MultipleItems
import { ArrowRightIcon, Category } from '../components/ui/Svg';
import { TitleSection } from '../components/@core/TitleSectionProps';
import { Container } from '../components/@core/container';
import { Section } from '../components/@core/Section';

export default function PopularCategoriesSection() {
  return (
    <Section background='gray'>
      <Container>
        <div className='w-full flex-col'>
          <TitleSection icon={<Category />} arrowIcon={<ArrowRightIcon />} title='Popular categories' subTitle='Browse all building product categories' />
          <MultipleItems />
        </div>
      </Container>
    </Section>
  );
}
