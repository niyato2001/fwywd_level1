import { PriceCardProps } from '.';
import check from '~/icon/Check.png';
import checkCircle from '~/icon/Checkcircle.png';
import checkDarkCircle from '~/icon/Checkdarkcircle.png';

export const storyList: { [key: string]: PriceCardProps } = {
  default: {
    title: { type: 'default-h3', lg: 'Lg', base: 'Base' },
    text: 'Text',
  },
};
