import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Image } from '.';
import benefitImage1 from '~/img/benefit1.png';

export default {
  component: Image,
} as ComponentMeta<typeof Image>;

export const Default: ComponentStoryObj<typeof Image> = {
  args: { src: benefitImage1 },
};

export const Resize: ComponentStoryObj<typeof Image> = {
  args: { src: benefitImage1, width: 100, height: 100 },
};
