'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';

type Software = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export function SelectSoftware() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState<string>('microstation');
  const [onlyNativeFormats, setOnlyNativeFormats] = useState<boolean>(false);

  const softwareOptions: Software[] = [
    {
      id: 'revit',
      name: 'Revit',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5 fill-blue-600'>
          <path d='M19.5,11.5V11h-2v1h1v2h-2v-5h3v-1h-4v7h4v-3.5ZM12.5,8h-1v7h1Zm-4,0h-1v7h1Zm-3,7h1V8h-1Zm-2-7v7h1V8Z' />
        </svg>
      ),
    },
    {
      id: 'archicad',
      name: 'Archicad',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5'>
          <path d='M12,2L1,12L12,22L23,12L12,2M12,5.5L18.5,12L12,18.5L5.5,12L12,5.5Z' />
        </svg>
      ),
    },
    {
      id: 'sketchup',
      name: 'SketchUp',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5 fill-orange-500'>
          <path d='M19.6,2.8L21,4.2L12.4,12.8L18,18.4L16.6,19.8L9.4,12.8L19.6,2.8M8.3,10.2L10.1,12L2.3,19.8L0.5,18L8.3,10.2Z' />
        </svg>
      ),
    },
    {
      id: 'autocad',
      name: 'AutoCAD',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5 fill-red-600'>
          <path d='M21.1,7.9L12,3.4L2.9,7.9L12,12.4L21.1,7.9M12,2L0,8L12,14L24,8L12,2M12,15L2.9,10.5L0,12L12,18L24,12L21.1,10.5L12,15Z' />
        </svg>
      ),
    },
    {
      id: '3dsmax',
      name: '3ds Max',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5 fill-green-600'>
          <path d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z' />
        </svg>
      ),
    },
    {
      id: 'microstation',
      name: 'MicroStation',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5 fill-teal-700'>
          <path d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' />
        </svg>
      ),
    },
    {
      id: 'rhino',
      name: 'Rhino',
      icon: (
        <svg viewBox='0 0 24 24' className='h-5 w-5'>
          <path d='M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z' />
        </svg>
      ),
    },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className='software flex items-center'>
        Software
        <ChevronDown width={20} height={20} className={`ml-[6px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </PopoverTrigger>

      <PopoverContent className='w-[305px] p-4'>
        <div className='space-y-6'>
          <div className='grid grid-cols-2 gap-3'>
            {softwareOptions.map((software) => (
              <button
                key={software.id}
                type='button'
                onClick={() => setSelectedSoftware(software.id)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-colors ${
                  selectedSoftware === software.id ? 'border-teal-700 bg-teal-50 text-teal-700' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {software.icon}
                <span className='font-medium'>{software.name}</span>
              </button>
            ))}
          </div>

          <div className='border-t border-gray-200 pt-4'>
            <div className='flex items-center justify-between'>
              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                  <Switch id='native-formats' checked={onlyNativeFormats} onCheckedChange={setOnlyNativeFormats} className='data-[state=checked]:bg-teal-700' />
                  <Label htmlFor='native-formats' className='font-medium'>
                    Only native file formats
                  </Label>
                </div>
                <p className='text-sm text-gray-500'>Example: rfa, pla, skp, dwg, 3dm, dgn, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
