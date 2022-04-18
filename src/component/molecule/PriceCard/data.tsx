import { PriceCardProps } from '.';

export const storyList: { [key: string]: PriceCardProps } = {
  white: {
    title: { type: 'withoutborder', lg: 'Lg', base: 'Base' },
    text1: 'Text1',
    text2: 'Text2',
    price1: {
      type: 'default',
      time: '月額',
      price: '3,000',
      currency: '円',
      tax: '税込',
    },
    price2: {
      type: 'detail',
      item: '機材',
      time: '月額',
      price: '3,000',
      currency: '円',
      tax: '税込3,300円',
    },
  },
};
