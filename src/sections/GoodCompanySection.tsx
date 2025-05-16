import { Button } from '../components/ui/Button';
import { Image } from '../components/ui/Image';
import { TitleSection } from '../components/@core/TitleSectionProps';
import { Container } from '../components/@core/container';
import { Section } from '../components/@core/Section';

export default function GoodCompanySection() {
  return (
    <Section background='greenLight'>
      <Container>
        <div className='flex w-full flex-col-reverse justify-around gap-8 py-24 lg:flex-row'>
          <div className='mb-6 flex max-w-[470px] flex-col items-center'>
            <TitleSection
              title={
                <>
                  You are in good <br />
                  company.
                </>
              }
              titleClassName='pb-[20px] text-[42px] text-[#1a4b3b] items-center  '
              subTitle='Have questions? Get straight answers from manufacturers with just a click.'
              className='flex w-full items-center justify-center'
            />
            <Button className='mt-6 w-full' size='lg'>
              Free sign up
            </Button>
          </div>
          <div className='max-w-[470px]'>
            <Image src='/src/assets/image/good-company-desktop.webp' className='' />
          </div>
        </div>
      </Container>
    </Section>
  );
}
