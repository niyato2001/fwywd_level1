import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { BenefitPresenter } from '.';

export default {
  component: BenefitPresenter,
} as ComponentMeta<typeof BenefitPresenter>;

export const Default: ComponentStoryObj<typeof BenefitPresenter> = {
  args: storyList.default,
};
