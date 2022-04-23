import { SympathyCardProps } from '.';
import sympathyImage1 from '~/img/sympathy1.png';

export const storyList: { [key: string]: SympathyCardProps } = {
  default: {
    tag: 'Tag',
    title: { type: 'withbase', lg: 'Lg', base: 'Base' },
    image: { src: sympathyImage1, alt: '', height: 315, width: 316 },
    text1: 'Text1',
    text2: 'Text2',
  },
  withoutTag: {
    title: { type: 'withbase', lg: 'Lg', base: 'Base' },
    image: { src: sympathyImage1, alt: '', height: 315, width: 316 },
    text1: 'Text1',
    text2: 'Text2',
  },
};
