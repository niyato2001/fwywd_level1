import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PriceCard } from '.';

export default {
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>;

export const Default: ComponentStoryObj<typeof PriceCard> = {
  args: storyList.default,
};
