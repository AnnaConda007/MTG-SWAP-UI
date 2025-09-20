import type { Meta, StoryObj } from '@storybook/react-vite';
import { mock } from '../mock/mocks';
import { SwiperImg } from '../../molecules/swiper';
import { Image } from '../../molecules/image';
import cardImg from '../mock/assets/card.jpg';

const img = <Image src={cardImg} alt="" size="md" />;
const elementsList = [img, img, img, img, img, img];
const meta = {
  title: 'Molecules/Swiper',
  component: SwiperImg,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SwiperImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elementsList: elementsList,
    elementAmount: 4,
  },
  render: (args) => <SwiperImg {...args} />,
};

export const DefaultOne: Story = {
  args: {
    elementsList: elementsList,
    elementAmount: 1,
  },
  render: (args) => <SwiperImg {...args} />,
};
