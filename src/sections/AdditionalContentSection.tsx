// components/sections/AdditionalContentSection.jsx
import { Image } from '../components/ui/Image';
import { TitleSection } from '../components/ui/TitleSectionProps';
import { Container } from '../layout/container';
import { Section } from '../layout/section';
export default function AdditionalContentSection() {
  return (
    <Section background='Beige'>
      <Container>
        <div className='w-full flex-col'>
          <div className='flex w-full flex-col items-center justify-center gap-6 lg:flex-row'>
            <Image
              src='src/assets/image/additional-content-communication-min.webp'
              className='mx-6 w-full max-w-[324px] pb-6 pt-12 lg:mx-4 lg:max-w-[700px]'
              height='416'
              width='591'
            />

            <TitleSection
              title={
                <>
                  Download free high-quality BIM objects <br /> for any design software. Create your <br /> account today.
                </>
              }
              className='mx-auto w-full max-w-[302px] items-center justify-center lg:mx-12 lg:max-w-[500px]'
              titleColor='#1a4b3b'
            />
          </div>
          <div className='flex w-full flex-col-reverse items-center justify-center gap-6 lg:flex-row'>
            <TitleSection
              title={
                <>
                  Have questions? Get straight answers <br />
                  from manufacturers with just a click.
                </>
              }
              className='mx-auto w-full max-w-[302px] items-center justify-center lg:mx-12 lg:max-w-[500px]'
              titleColor='#1a4b3b'
            />

            <Image
              src='src/assets/image/additional-content-communication-min.webp'
              className='mx-6 w-full max-w-[324px] pb-6 pt-12 lg:mx-4 lg:max-w-[700px]'
              height='416'
              width='591'
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
