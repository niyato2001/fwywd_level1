import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PageFooterPresenter } from '.';

export default {
  component: PageFooterPresenter,
} as ComponentMeta<typeof PageFooterPresenter>;

export const Default: ComponentStoryObj<typeof PageFooterPresenter> = {
  args: storyList.default,
};
