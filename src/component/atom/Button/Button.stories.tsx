import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Button } from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: { children: <button className='btn'>button</button> },
};
