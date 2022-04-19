import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { Check } from '.';

export default {
  component: Check,
} as ComponentMeta<typeof Check>;

export const CheckDark: ComponentStoryObj<typeof Check> = {
  args: storyList.checkDark,
};

export const CheckLight: ComponentStoryObj<typeof Check> = {
  args: storyList.checkLight,
};

export const UncheckDark: ComponentStoryObj<typeof Check> = {
  args: storyList.uncheckDark,
};

export const UnchecLight: ComponentStoryObj<typeof Check> = {
  args: storyList.uncheckLight,
};
