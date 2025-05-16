import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard, type ProductCardProps } from './index';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'], // giúp tạo tự động trong docs
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'Minimalist Wooden Chair',
    brand: 'Woodify',
    image: 'src/assets/image/858a5779-5744-4e52-8e68-877977e6d894.webp',
    rating: 4.5,
    url: '#',
    onAddToCart: () => alert('Added to cart'),
  },
};
