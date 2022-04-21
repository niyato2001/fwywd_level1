import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { Hero } from '.';

export default {
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStoryObj<typeof Hero> = {
  args: storyList.default,
};
