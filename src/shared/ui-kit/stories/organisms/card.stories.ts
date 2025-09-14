import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../../organisms/card';

const meta = {
  title: 'Organisms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
