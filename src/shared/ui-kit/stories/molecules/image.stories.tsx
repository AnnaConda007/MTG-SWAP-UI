import type { Meta, StoryObj } from '@storybook/react-vite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Image } from '../../molecules/image';
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
    innerIcons: [
      {
        Icon: AccountBalanceIcon,
        handleIcon: () => {},
        iconColor: 'text-primary',
        iconColorHover: 'text-primary-hover',
      },
    ],
  },
};
