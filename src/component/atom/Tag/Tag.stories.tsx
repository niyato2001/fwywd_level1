import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Tag } from '.';

export default {
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStoryObj<typeof Tag> = {
  args: { children: <span className='tag'>tag</span> },
};
