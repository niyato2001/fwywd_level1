import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { BenefitCard } from '.';

export default {
  component: BenefitCard,
} as ComponentMeta<typeof BenefitCard>;

export const Default: ComponentStoryObj<typeof BenefitCard> = {
  args: storyList.default,
};
