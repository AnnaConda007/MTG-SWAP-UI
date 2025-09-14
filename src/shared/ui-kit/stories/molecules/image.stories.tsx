import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from '../../atoms/image';
import cardImg from '../mock/assets/card.jpg';

const meta = {
  title: 'Molecules/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: cardImg,
    alt: 'alt',
    size: 'md',
  },
};
