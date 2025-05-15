import { ProductSpecification } from '@/components/@core/ProductSpecification/ProductSpecification';
import ProductCarousel, { type ProductImage } from '@/components/ImageCarousel';

export default function ProductDetail() {
  const washbasinImages: ProductImage[] = [
    {
      src: '/placeholder.svg?height=600&width=800&text=Front+View',
      alt: 'Washbasin technical drawing - front view',
    },
    {
      src: '/placeholder.svg?height=600&width=800&text=Side+View',
      alt: 'Washbasin technical drawing - side view',
    },
    {
      src: '/placeholder.svg?height=600&width=800&text=Top+View',
      alt: 'Washbasin technical drawing - top view',
    },
    {
      src: '/placeholder.svg?height=600&width=800&text=3D+View',
      alt: 'Washbasin technical drawing - 3D view',
      has3DView: true,
    },
  ];
  // Sample product data matching the image
  const productData = {
    uniqueRef: 'PRE080028',
    productFamily: 'Sanitary',
    productGroup: 'Kitchen',
    type: 'Object (single object)',
    dateOfPublishing: '2020-10-14',
    editionNumber: '1',
    height: '237',
    width: '128',
    depth: '286',
  };

  return (
    <main className='min-h-screen p-4 md:p-8'>
      <ProductCarousel images={washbasinImages} title='Double Bardsquare Washbasin' />
      <ProductSpecification product={productData} />
    </main>
  );
}
