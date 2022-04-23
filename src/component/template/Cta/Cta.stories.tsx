import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { CtaPresenter } from '.';

export default {
  component: CtaPresenter,
} as ComponentMeta<typeof CtaPresenter>;

export const Default: ComponentStoryObj<typeof CtaPresenter> = {
  args: storyList.default,
};
