import { PriceTitleProps } from '.';

export const storyList: { [key: string]: PriceTitleProps } = {
  default: {
    type: 'default',
    item: '',
    time: '月額',
    price: '3,000',
    currency: '円',
    tax: '（税込）',
  },
  //TitlePropsでbase?:としてbaseがない場合の設定をおこなうとtestでbaseがある場合の型がRegexpとundefinedで合わなくなってしまう問題！（解決できず。。。）
  detail: {
    type: 'detail',
    item: 'Item',
    time: '月額',
    price: '3,000',
    currency: '円',
    tax: '税込3,300円',
  },
};
