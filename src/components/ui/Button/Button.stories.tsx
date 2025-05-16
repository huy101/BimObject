import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
    font: 'semibold',
    fullWidth: false,
    rounded: 'md',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Follow',
    variant: 'follow',
    icon: <span>🔔</span>,
    iconPosition: 'left',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Go to Google',
    as: 'a',
    href: 'https://www.google.com',
    variant: 'white',
  },
};
