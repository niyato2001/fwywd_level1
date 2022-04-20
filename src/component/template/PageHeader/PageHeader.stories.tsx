import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { storyList } from './data';
import { PageHeader } from '.';

export default {
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

export const Default: ComponentStoryObj<typeof PageHeader> = {
  args: storyList.default,
};
