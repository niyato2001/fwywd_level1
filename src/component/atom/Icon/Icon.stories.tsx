import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Icon } from '.';

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Facebook: ComponentStoryObj<typeof Icon> = {
  args: { type: 'facebook' },
};

export const Resize: ComponentStoryObj<typeof Icon> = {
  args: { type: 'facebook', size: 30 },
};

export const Twitter: ComponentStoryObj<typeof Icon> = {
  args: { type: 'twitter' },
};

export const Line: ComponentStoryObj<typeof Icon> = {
  args: { type: 'line' },
};
export const B: ComponentStoryObj<typeof Icon> = {
  args: { type: 'b' },
};
export const Pinterest: ComponentStoryObj<typeof Icon> = {
  args: { type: 'pinterest' },
};

export const Check: ComponentStoryObj<typeof Icon> = {
  args: { type: 'check' },
};
export const CheckCircle: ComponentStoryObj<typeof Icon> = {
  args: { type: 'checkcircle' },
};
export const CheckDarkCircle: ComponentStoryObj<typeof Icon> = {
  args: { type: 'checkdarkcircle' },
};
