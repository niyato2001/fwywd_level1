import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PageHeaderPresenter } from '.';

export default {
  component: PageHeaderPresenter,
} as ComponentMeta<typeof PageHeaderPresenter>;

export const Default: ComponentStoryObj<typeof PageHeaderPresenter> = {
  args: storyList.default,
};
