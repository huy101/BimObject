// components/sections/PopularCategoriesSection.jsx
import MultipleItems from '../components/ui/slide'; // Giả sử bạn đã có một component MultipleItems
import { ArrowRightIcon, Category } from '../components/ui/Svg';
import { TitleSection } from '../components/ui/TitleSectionProps';
import { Container } from '../layout/container';
import { Section } from '../layout/section';

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
