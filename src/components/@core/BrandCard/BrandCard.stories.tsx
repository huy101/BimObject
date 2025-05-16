import type { Meta, StoryObj } from '@storybook/react';
import { BrandCard } from './index';

const meta: Meta<typeof BrandCard> = {
  title: 'Components/BrandCard',
  component: BrandCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BrandCard>;

export const Default: Story = {
  args: {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    description: 'Innovative technology and premium design.',
    url: '#',
  },
};
