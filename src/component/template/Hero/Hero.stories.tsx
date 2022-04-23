import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { HeroPresenter } from '.';

export default {
  component: HeroPresenter,
} as ComponentMeta<typeof HeroPresenter>;

export const Default: ComponentStoryObj<typeof HeroPresenter> = {
  args: storyList.default,
};
