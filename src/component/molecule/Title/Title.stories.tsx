import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { Title } from '.';

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStoryObj<typeof Title> = {
  args: storyList.default,
};

export const DefaultH3: ComponentStoryObj<typeof Title> = {
  args: storyList.defaultH3,
};

export const WithBase: ComponentStoryObj<typeof Title> = {
  args: storyList.withBase,
};
