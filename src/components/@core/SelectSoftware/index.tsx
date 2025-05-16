'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { Label } from '@/components/ui/Label/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover/popover';
import { Switch } from '@/components/ui/Switch/switch';
import { ArchicadIcon, AutoCADIcon, Max3dsIcon, MicroStationIcon, RevitIcon, RhinoIcon, SketchUpIcon } from '@/components/ui/Svg';

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
    { id: 'revit', name: 'Revit', icon: <RevitIcon className='h-5 w-5 fill-blue-600' /> },
    { id: 'archicad', name: 'Archicad', icon: <ArchicadIcon className='h-5 w-5' /> },
    { id: 'sketchup', name: 'SketchUp', icon: <SketchUpIcon className='h-5 w-5 fill-orange-500' /> },
    { id: 'autocad', name: 'AutoCAD', icon: <AutoCADIcon className='h-5 w-5 fill-red-600' /> },
    { id: '3dsmax', name: '3ds Max', icon: <Max3dsIcon className='h-5 w-5 fill-green-600' /> },
    { id: 'MicroStationIcon', name: 'MicroStation', icon: <MicroStationIcon className='h-5 w-5 fill-teal-700' /> },
    { id: 'rhino', name: 'Rhino', icon: <RhinoIcon className='h-5 w-5' /> },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className='absolute left-[-44px] top-[52px] mt-2 flex h-7 w-7 items-center justify-between gap-0 bg-[#f6f6f6] py-0 pt-2 text-[10px] font-semibold text-[#484848] md:static md:w-full md:p-0 md:text-sm'>
        {softwareOptions.find((s) => s.id === selectedSoftware)?.name || 'Software'}
        <ChevronDown width={20} height={20} className={`ml-[6px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </PopoverTrigger>

      <PopoverContent className='shadow-[0 0 10px #0003] max-h-[355px] bg-white p-4'>
        <div className='space-y-6'>
          <div className='flex flex-wrap gap-[6px]'>
            {softwareOptions.map((software) => {
              const isSelected = selectedSoftware === software.id;

              return (
                <button
                  key={software.id}
                  type='button'
                  onClick={() => setSelectedSoftware(isSelected ? '' : software.id)}
                  className={`flex w-fit items-center gap-2 rounded-full border px-4 py-2 transition-colors ${
                    isSelected ? 'border-teal-700 bg-teal-50 text-teal-700' : 'border-gray-200 bg-white text-black hover:border-gray-300'
                  }`}
                >
                  {software.icon}
                  <span className='font-medium'>{software.name}</span>
                </button>
              );
            })}
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
