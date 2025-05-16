import { Link } from 'react-router-dom';
import { SocialLinks } from '../../components/@core/SocialLink';
import { Container } from '../../components/@core/container';
import { BIMobject, BIMobjectWhite, ChevronDown } from '../../components/ui/Svg';
import { LanguageDropdown } from '@/components/@core/LanguageDropdown';
function Footer() {
  const links = [
    { platform: 'facebook', url: '/' },
    { platform: 'linkedin', url: '/' },
    { platform: 'twitter', url: '/' },
    { platform: 'youtube', url: '/' },
  ];
  return (
    <footer className='bg-black px-4 py-12 text-white'>
      <Container>
        <div className='flex w-full flex-col justify-between'>
          <div className='flex w-full flex-col-reverse justify-between md:flex-row'>
            {/* For Manufacturers */}
            <div className='max-w[900px] flex w-full flex-col justify-between md:flex-row'>
              <div>
                <h3 className='mb-2 text-left text-base text-lg font-bold'>For Manufacturers</h3>
                <ul className='text-left text-base font-normal'>
                  <li>
                    <Link to='#' className='hover:underline'>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      What we do
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      BIM Content
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      What is BIM?
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className='mb-2 text-left text-base text-lg font-bold'>About</h3>
                <ul className='text-left text-base font-normal'>
                  <li>
                    <Link to='#' className='hover:underline'>
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='hover:underline'>
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className='mb-2 text-left text-base text-lg font-bold'>Legal</h3>
                <ul className='text-left text-base font-normal'>
                  <li>
                    <Link to='/' className='hover:underline'>
                      User terms of services
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:underline'>
                      Privacy policy (GDPR)
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:underline'>
                      Privacy notice for
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:underline'>
                      California residents
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:underline'>
                      Code of Conduct
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Language and Location */}
            <div className='flex w-full max-w-[300px] flex-col items-end'>
              <LanguageDropdown />
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='mt-12 flex flex-col-reverse items-center justify-between text-left md:flex-row'>
            <div className='my-6 flex flex-row items-center justify-center gap-2 text-left'>
              <BIMobjectWhite />
              <p className='mb-0 mt-2 flex items-center justify-center text-[13px] text-sm font-normal text-gray-300'>© Copyright 2025. All Rights Reserved.</p>
            </div>

            <SocialLinks
              links={links}
              iconSize={20}
              backgroundColor='white'
              hoverBackgroundColor='gray-200'
              iconColor='black'
              rounded='full'
              padding='2'
              gap='4'
              external={false} // vì đang dùng <Link />
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
