import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Icon } from '.';
import benefitImage1 from '~/img/benefit1.png';

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStoryObj<typeof Icon> = {
  args: { src: benefitImage1 },
};

export const Resize: ComponentStoryObj<typeof Icon> = {
  args: { src: benefitImage1, width: 100, height: 100 },
};
