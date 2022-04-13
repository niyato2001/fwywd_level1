import { TitleProps } from '.';

export const storyList: { [key: string]: TitleProps } = {
  default: {
    type: 'default',
    lg: 'Lg',
    base: 'Base',
  },
  //TitlePropsでbase?:としてbaseがない場合の設定をおこなうとtestでbaseがある場合の型がRegexpとundefinedで合わなくなってしまう問題！（解決できず。。。）
  defaultH3: {
    type: 'default-h3',
    lg: 'Lg',
    base: 'Base',
  },

  withBase: {
    type: 'withbase',
    lg: 'Lg',
    base: 'Base',
  },
};
