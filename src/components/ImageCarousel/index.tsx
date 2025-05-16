'use client';

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CarouselApi } from '@/components/ui/carousel';

export interface ProductImage {
  src: string;
  alt: string;
  has3DView?: boolean;
}

interface ProductCarouselProps {
  images: ProductImage[];
  title?: string;
  specifications?: { label: string; value: string }[];
  features?: string[];
  className?: string;
}

export default function ProductCarousel({ images = [], title, specifications, features, className }: ProductCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [is3DViewActive, setIs3DViewActive] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // If no images are provided, show a placeholder
  if (images.length === 0) {
    images = [
      {
        src: '/placeholder.svg?height=600&width=800',
        alt: 'No image available',
      },
    ];
  }

  return (
    <div className={cn('mx-auto max-w-4xl p-4', className)}>
      <div className='relative overflow-hidden rounded-lg bg-white shadow-md'>
        <Carousel
          setApi={setApi}
          className='w-full'
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className='border-none'>
                  <CardContent className='flex aspect-[4/3] items-center justify-center p-0'>
                    <div className='relative h-full w-full'>
                      <img src={image.src || '/placeholder.svg'} alt={image.alt} fill className='object-contain' priority={index === 0} />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button variant='outline' size='sm' className='absolute bottom-4 right-4 bg-white/80 hover:bg-white' onClick={() => setIs3DViewActive(!is3DViewActive)}>
            <Maximize className='mr-2 h-4 w-4' />
            3D View
          </Button>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='flex items-center justify-center gap-2 py-4'>
        {Array.from({ length: count }).map((_, index) => (
          <Button
            size='none'
            font='normal'
            rounded='full'
            key={index}
            className={cn('h-4 w-4 p-0', current === index ? 'bg-black' : 'bg-gray-300')}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* {(title || specifications || features) && (
        <div className='mt-6 rounded-lg bg-white p-4 shadow-md'>
          {title && <h2 className='mb-2 text-xl font-semibold'>{title}</h2>}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {specifications && specifications.length > 0 && (
              <div>
                <h3 className='mb-2 text-lg font-medium'>Specifications</h3>
                <ul className='space-y-1 text-sm'>
                  {specifications.map((spec, index) => (
                    <li key={index} className='flex justify-between'>
                      <span className='text-gray-600'>{spec.label}:</span>
                      <span className='font-medium'>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {features && features.length > 0 && (
              <div>
                <h3 className='mb-2 text-lg font-medium'>Features</h3>
                <ul className='space-y-1 text-sm'>
                  {features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
}
