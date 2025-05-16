import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu/dropdown-menu';
import { useState } from 'react';
import { AvatarProfile, ChevronDown, Dowwnload, Preferences, Signout } from '../../ui/Svg';

export function DropdownMenuUser() {
  const name = 'Huy';
  const [isOpen, setIsOpen] = useState(false);
  const getInitial = (name) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    const lastName = parts[parts.length - 1];
    return lastName.charAt(0).toUpperCase();
  };
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='p-0' asChild>
        <Button variant='outline' className='p-0'>
          {' '}
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white'>{getInitial(name)}</div>
          <div onClick={toggleMenu} className='bar-toggle-container'>
            <div className={`bar-toggle-line ${isOpen ? 'bar-rotate-top' : ''}`} />
            <div className={`bar-toggle-line ${isOpen ? 'bar-hidden' : ''}`} />
            <div className={`bar-toggle-line ${isOpen ? 'bar-rotate-bottom' : ''}`} />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-white text-black'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Dowwnload />
            <span> Download history </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Preferences />
            <span> Preferences </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <AvatarProfile />
            <span> Profile settings </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Signout />
            <span> Sign out </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem disabled>
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
