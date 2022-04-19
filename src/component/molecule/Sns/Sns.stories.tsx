import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { Sns } from '.';

export default {
  component: Sns,
} as ComponentMeta<typeof Sns>;

export const Default: ComponentStoryObj<typeof Sns> = {
  args: storyList.default,
};
