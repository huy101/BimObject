import { CollectionCard } from '../components/ui/Colection';
import { ArrowRightIcon, Collections } from '../components/ui/Svg';
import { TitleSection } from '../components/ui/TitleSectionProps';
import { Container } from '../layout/container';
import { Section } from '../layout/section';

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
        <div className='w-full flex-col'>
          <TitleSection arrowIcon={<ArrowRightIcon />} title='Collections' subTitle='Browse curated content for your project' className='mb-6' icon={<Collections />} />
          <div className='flex justify-between gap-4'>
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
