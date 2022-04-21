import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PageFooter } from '.';

export default {
  component: PageFooter,
} as ComponentMeta<typeof PageFooter>;

export const Default: ComponentStoryObj<typeof PageFooter> = {
  args: storyList.default,
};
