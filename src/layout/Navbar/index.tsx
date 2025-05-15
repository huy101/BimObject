import { Button } from '../../components/ui/Button/index';
import { Link } from 'react-router-dom';
import { MenuMobile } from '../../components/ui/MenuMoblie';
import { BIMobject, BIMobjectMobile, ChevronDown, Magnifying } from '../../components/ui/Svg';
import React, { useState } from 'react';
import { LanguageDropdown } from '@/components/@core/LanguageDropdown';
import { DropdownMenuDemo } from '@/components/@core/DropdownMenuDemo';
import { SelectSoftware } from '@/components/@core/SelectSoftware';
import { Command, CommandInput } from '@/components/ui/command';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // Lấy phần tử cuối cùng trong tên và lấy chữ cái đầu tiên

  return (
    <>
      {/* Top bar - not sticky */}
      <div className='hidden bg-[#0c482f] lg:block'>
        <div className='mb-2 flex h-full max-h-9 w-full max-w-[1440px] items-center justify-end px-4 py-2 sm:mx-auto md:mx-auto md:flex-nowrap lg:mx-auto xl:mx-auto'>
          {/* <Image src='../../assets/image/globe-solid.svg' className='h-4 w-4' aspectRatio='auto' objectFit='contain' /> */}
          <LanguageDropdown />
        </div>
      </div>
      {/* {isOpenLanguage && (
        <div className='bg-red relative bottom-3 z-50 mt-2 w-40 rounded-md shadow-lg'>
          <ul className='py-2 text-black'>
            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>English</li>
            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>Tiếng Việt</li>
            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>Français</li>
          </ul>
        </div>
      )} */}
      {/* Main navbar - sticky */}
      <header className='sticky top-0 z-[1] h-auto w-full border-b border-solid border-[#eee] bg-white'>
        <div className='mx-2 flex max-w-[1440px] items-center justify-between gap-3 p-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto'>
          {/* <Image src='../../assets/image/BIMobject-logo-black.svg' className='relative hidden h-6 w-36 lg:block' /> */}
          <BIMobject className='relative hidden h-6 w-36 lg:block' />
          {/* Logo cho màn hình nhỏ */}
          <div className='block h-6 w-6 lg:hidden'>
            <BIMobjectMobile />
          </div>
          {/* <Image src='../../assets/image/logo-b-black-background.svg'/> */}
          {/* Search bar */}
          <div className='relative flex h-9 flex-1 flex-row items-center justify-between rounded-full bg-[#f6f6f6] pl-4'>
            <div className='h-full items-center gap-2 rounded-l-full bg-[#f6f6f6] px-2 md:block md:flex'>
              {/* <Image objectFit='contain' className='h-3 w-3' src='/chevron-down-solid.svg' /> */}
              <SelectSoftware />
            </div>

            <Command>
              <CommandInput className='h-full flex-1 bg-[#f6f6f6] text-[14px] font-semibold text-black outline-none' placeholder='Type a command or search...' />
            </Command>
            <a className='flex h-full flex-row items-center gap-1 rounded-r-full bg-black px-4 transition-colors'>
              <Magnifying width={14} height={14} />

              <span className='search'>Search</span>
            </a>
          </div>{' '}
          {/* <div className='bim-menu-icon'>
          <div className='bar first'></div>
          <div className='bar middle'></div>
          <div className='bar last'></div>
        </div> */}
          <div className='flex items-center'>
            <DropdownMenuDemo />
            <div onClick={toggleMenu} className='bar-toggle-container'>
              <div className={`bar-toggle-line ${isOpen ? 'bar-rotate-top' : ''}`} />
              <div className={`bar-toggle-line ${isOpen ? 'bar-rotate-bottom' : ''}`} />
            </div>
          </div>
          <MenuMobile isOpen={isOpen} onClose={() => setIsOpen(false)} />
          {/* Buttons */}
          <div className='signin-login-container'>
            <Link to='/login'>
              <Button variant='white' className='login'>
                Login
              </Button>
            </Link>
            <Link to='/register'>
              <Button className='login'>Free sign up</Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
