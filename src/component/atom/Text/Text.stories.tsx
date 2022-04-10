import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Text } from '.';

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

export const Green: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-primary-800'>text-primary-800</span> },
};

export const White: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-white'>text-white</span> },
};

export const Yellow: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-yellow-100'>text-yellow-100</span> },
};

export const Black: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-gray-900'>text-gray-900</span> },
};

export const Bold: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='font-bold'>font-bold</span> },
};

export const Highlight: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='highlight'>highlight</span> },
};

export const ExtraSmall: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-xs'>text-xs</span> },
};
export const Small: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-sm'>text-sm</span> },
};
export const Base: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-base'>text-base</span> },
};
export const Large: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-lg'>text-lg</span> },
};
export const ExtraLarge: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-xl'>text-xl</span> },
};
export const ExtraLarge2: ComponentStoryObj<typeof Text> = {
  args: { children: <span className='text-2xl'>text-2xl</span> },
};
