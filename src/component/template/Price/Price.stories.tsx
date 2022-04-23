import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PricePresenter } from '.';

export default {
  component: PricePresenter,
} as ComponentMeta<typeof PricePresenter>;

export const Default: ComponentStoryObj<typeof PricePresenter> = {
  args: storyList.default,
};
