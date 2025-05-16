import type { Meta, StoryObj } from '@storybook/react';
import { CollectionCard } from './index';

const meta: Meta<typeof CollectionCard> = {
  title: 'Components/CollectionCard',
  component: CollectionCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollectionCard>;

export const Default: Story = {
  args: {
    title: 'Modern Living Room Set',
    url: '#',
    images: ['src/assets/image/colection1-1.png', 'src/assets/image/colection1-2.png', 'src/assets/image/colection1-3.png'],
  },
};
