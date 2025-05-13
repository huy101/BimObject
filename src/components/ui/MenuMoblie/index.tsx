'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { ChevronRight } from '../Svg';
interface MenuItemProps {
  title: string;
  hasSubmenu?: boolean;
  url?: string;
  onClick?: () => void;
}

const MenuItem = ({ title, hasSubmenu = false, url, onClick }: MenuItemProps) => {
  return (
    <div className='flex w-full cursor-pointer items-center justify-between border-b border-gray-100 py-5' onClick={onClick}>
      {url ? (
        <Link to={url} className='text-lg font-medium'>
          {title}
        </Link>
      ) : (
        <span className='text-lg font-medium'>{title}</span>
      )}
      {hasSubmenu && <ChevronRight width={10} height={10} />}
    </div>
  );
};

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div
        ref={menuRef}
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div onClick={onClose} className='absolute right-4 top-4 z-50 rounded-full p-2 hover:bg-gray-100 lg:hidden' aria-label='Close menu'>
          <div className='bar-toggle-container w-fit'>
            <div className={`bar-toggle-line ${isOpen ? 'bar-rotate-top' : ''}`} />
            <div className={`bar-toggle-line ${isOpen ? 'bar-hidden' : ''}`} />
            <div className={`bar-toggle-line ${isOpen ? 'bar-rotate-bottom' : ''}`} />
          </div>
        </div>

        <div className='mt-8 flex flex-col'>
          <MenuItem title='Language' hasSubmenu />
          <MenuItem title='Project location' hasSubmenu />
          <MenuItem title='Publish your products' url='/publish' />
        </div>

        <div className='mt-8 flex flex-col gap-4'>
          <Button className='w-full bg-[#0c482f] text-white hover:bg-[#0a3a27]' size='lg'>
            Free sign up
          </Button>
          <Button className='w-full border border-gray-300 bg-white text-black hover:bg-gray-50' size='lg' variant='outline'>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};
