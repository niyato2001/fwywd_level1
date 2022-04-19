import { PriceCardProps } from '.';

export const storyList: { [key: string]: PriceCardProps } = {
  white: {
    type: 'white',
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
    price2: [
      {
        type: 'detail',
        item: '機材',
        time: '月額',
        price: '3,000',
        currency: '円',
        tax: '税込3,300円',
      },
      {
        type: 'detail',
        item: '機材',
        time: '月額',
        price: '3,000',
        currency: '円',
        tax: '税込3,300円',
      },
    ],
    check1: [
      { icon: { type: 'check', size: 36 }, text: 'Text', color: '800' },
      { icon: { type: 'check', size: 36 }, text: 'Text', color: '800' },
      { icon: { type: 'check', size: 36 }, text: 'Text', color: '800' },
      {
        icon: { type: 'checkcircle', size: 24 },
        text: 'Text',
        color: '200',
      },
    ],
    check2: [
      {
        icon: { type: 'check', size: 36 },
        text: 'Text',
        color: '800',
      },
      {
        icon: { type: 'check', size: 36 },
        text: 'Text',
        color: '800',
      },
    ],
  },
  green: {
    type: 'green',
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
    price2: [
      {
        type: 'detail',
        item: '機材',
        time: '月額',
        price: '3,000',
        currency: '円',
        tax: '税込3,300円',
      },
    ],
    check1: [
      {
        icon: { type: 'check', size: 36 },
        text: 'Text',
        color: 'white',
      },
      {
        icon: { type: 'check', size: 36 },
        text: 'Text',
        color: 'white',
      },
      {
        icon: { type: 'check', size: 36 },
        text: 'Text',
        color: 'white',
      },
      {
        icon: { type: 'checkdarkcircle', size: 24 },
        text: 'Text',
        color: '600',
      },
    ],
    check2: [
      {
        icon: { type: 'check', size: 36 },
        text: 'Text',
        color: 'white',
      },
      {
        icon: { type: 'checkdarkcircle', size: 24 },
        text: 'Text',
        color: '600',
      },
    ],
  },
};
