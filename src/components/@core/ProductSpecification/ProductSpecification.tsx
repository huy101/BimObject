import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion/accordion';
import { ChevronRight } from 'lucide-react';

interface ProductSpecification {
  uniqueRef: string;
  productFamily: string;
  productGroup: string;
  type: string;
  dateOfPublishing: string;
  editionNumber: string;
  height: string;
  width: string;
  depth: string;
}

interface ProductSpecificationProps {
  product: ProductSpecification;
}

export function ProductSpecification({ product }: ProductSpecificationProps) {
  const { uniqueRef, productFamily, productGroup, type, dateOfPublishing, editionNumber, height, width, depth } = product;

  return (
    <div className='mx-auto max-w-2xl'>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='specification' className='border-b border-t py-1'>
          <AccordionTrigger className='bg-red-500 px-4 py-4 font-medium hover:no-underline'>
            <span>Specification</span>
            <ChevronRight className='ml-auto h-4 w-4 shrink-0 transition-transform duration-200' />
          </AccordionTrigger>
          <AccordionContent>{/* Content for Specification */}</AccordionContent>
        </AccordionItem>

        <AccordionItem value='technical' className='border-b py-1'>
          <AccordionTrigger className='bg-red-500 px-4 py-4 font-medium hover:no-underline'>
            <span>Technical specification</span>
            <ChevronRight className='ml-auto h-4 w-4 shrink-0 transition-transform duration-200' />
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4 pt-2'>
            <div className='border-b pb-4'>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Unique ref.</span>
                <span>{uniqueRef}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Product family</span>
                <span>{productFamily}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Product group</span>
                <span>{productGroup}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Type</span>
                <span>{type}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Date of publishing</span>
                <span>{dateOfPublishing}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Edition number</span>
                <span>{editionNumber}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Height (mm)</span>
                <span>{height}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Width (mm)</span>
                <span>{width}</span>
              </div>
              <div className='grid grid-cols-2 py-1'>
                <span className='font-medium'>Depth (mm)</span>
                <span>{depth}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='links' className='border-b py-1'>
          <AccordionTrigger className='bg-red-500 px-4 py-4 font-medium hover:no-underline'>
            <span>Links</span>
            <ChevronRight className='ml-auto h-4 w-4 shrink-0 transition-transform duration-200' />
          </AccordionTrigger>
          <AccordionContent>{/* Content for Links */}</AccordionContent>
        </AccordionItem>

        <AccordionItem value='related' className='border-b py-1'>
          <AccordionTrigger className='bg-red-500 px-4 py-4 font-medium hover:no-underline'>
            <span>Related</span>
            <ChevronRight className='ml-auto h-4 w-4 shrink-0 transition-transform duration-200' />
          </AccordionTrigger>
          <AccordionContent>{/* Content for Related */}</AccordionContent>
        </AccordionItem>

        <AccordionItem value='classification' className='border-b py-1'>
          <AccordionTrigger className='bg-red-500 px-4 py-4 font-medium hover:no-underline'>
            <span>Classification</span>
            <ChevronRight className='ml-auto h-4 w-4 shrink-0 transition-transform duration-200' />
          </AccordionTrigger>
          <AccordionContent>{/* Content for Classification */}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
