import React, { useState } from 'react';
import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from '@/components/ui/DropdownMenu/dropdown-menu';
import { Button } from '@/components/ui/Button';
import { Globe, ChevronDown } from '@/components/ui/Svg';
export type Checked = DropdownMenuCheckboxItemProps['checked'];

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEnglish, setShowEnglish] = useState<Checked>(true);
  const [showVietnamese, setShowVietnamese] = useState<Checked>(false);
  const [showFrench, setShowFrench] = useState<Checked>(false);
  const [lang, setLang] = React.useState('English');
  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center gap-2 p-0'>
          <Globe width={16} height={16} />
          <span className='font-semibold text-white'>English</span>

          <ChevronDown width={10} height={10} className={`transition-transform duration-200 ${isOpen ? 'chevron-rotate' : ''} ml-[6px]`} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='relative mt-2 inline-block w-40 rounded-md bg-white py-2 text-left text-black shadow-lg' sideOffset={4} align='end'>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
          <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Usage in Navbar:
// import { LanguageDropdown } from '@/components/ui/LanguageDropdown';
// ...
// <div className="flex items-center gap-2">
//   <LanguageDropdown />
// </div>
