import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PriceTitle } from '.';

export default {
  component: PriceTitle,
} as ComponentMeta<typeof PriceTitle>;

export const Default: ComponentStoryObj<typeof PriceTitle> = {
  args: storyList.default,
};

export const Detail: ComponentStoryObj<typeof PriceTitle> = {
  args: storyList.detail,
};
