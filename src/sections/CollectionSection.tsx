import { CollectionCard } from '../components/@core/Colection';
import { ArrowRightIcon, Collections } from '../components/ui/Svg';
import { TitleSection } from '../components/@core/TitleSectionProps';
import { Container } from '../components/@core/container';
import { Section } from '../components/@core/Section';

interface Collection {
  title: string;
  images: string[];
  path: string;
}

interface CollectionSectionProps {
  collections: Collection[]; // Nhận một mảng các collection
}

export default function CollectionSection({ collections }: CollectionSectionProps) {
  return (
    <Section background='greenTint'>
      <Container>
        <div className='w-full flex-col p-0'>
          <TitleSection arrowIcon={<ArrowRightIcon />} title='Collections' subTitle='Browse curated content for your project' icon={<Collections />} />
          <div className='flex justify-between gap-4 p-4'>
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                title={collection.title}
                images={collection.images}
                // Truyền đường dẫn cho mỗi card
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
