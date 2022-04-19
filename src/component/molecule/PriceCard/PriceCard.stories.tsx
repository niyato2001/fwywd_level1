import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PriceCard } from '.';

export default {
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>;

export const White: ComponentStoryObj<typeof PriceCard> = {
  args: storyList.white,
};
export const Green: ComponentStoryObj<typeof PriceCard> = {
  args: storyList.green,
};
