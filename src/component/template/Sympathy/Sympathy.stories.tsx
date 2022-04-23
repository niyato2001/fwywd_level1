import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { SympathyPresenter } from '.';

export default {
  component: SympathyPresenter,
} as ComponentMeta<typeof SympathyPresenter>;

export const Default: ComponentStoryObj<typeof SympathyPresenter> = {
  args: storyList.default,
};
