import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { SympathyCard } from '.';

export default {
  component: SympathyCard,
} as ComponentMeta<typeof SympathyCard>;

export const Default: ComponentStoryObj<typeof SympathyCard> = {
  args: storyList.default,
};
export const WithoutTag: ComponentStoryObj<typeof SympathyCard> = {
  args: storyList.withoutTag,
};
