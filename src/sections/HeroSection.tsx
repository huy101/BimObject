import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Container } from '../layout/container';
import { Section } from '../layout/section';

export default function HeroSection() {
  return (
    <Section background='green'>
      <Container className='pt-0'>
        <div className='mx-4 flex w-full max-w-[1364px] flex-col items-center justify-around md:flex-row'>
          <div className='video w-[48%] p-0'>
            <video src='/src/assets/image/hero-2.webm' width={562} height={316} autoPlay muted loop></video>
            <div className='ml-[12%] flex w-[75%] justify-between'>
              <span className='animate-colorChangeArchitect text-center text-[16px] font-bold leading-[24px] text-[#287153] delay-0'>Architecture</span>
              <span className='delay-1 animate-colorChangeArchitect text-center text-[16px] font-bold leading-[24px] text-[#287153]'>Engineering</span>
              <span className='delay-2 animate-colorChangeArchitect text-center text-[16px] font-bold leading-[24px] text-[#287153]'>Construction</span>
            </div>
          </div>
          <div className='flex w-[48%] max-w-[536px] flex-col items-start justify-center'>
            <h1 className='pb-[20px] text-[#1a4b3b]'>
              BIM objects for <br /> everyone.
            </h1>
            <p className='pb-8'>We provide you with the information and inspiration you need to design buildings faster, smarter and greener.</p>
            <Button className='w-full' size='lg'>
              Free sign up
            </Button>
            <div className='mx-auto mt-6 items-center'>
              <Link to='#' className='mt-6 text-sm font-semibold leading-normal text-black'>
                Publish your products
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
