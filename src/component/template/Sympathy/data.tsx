import { SympathyProps } from '.';
import sympathyImage1 from '~/img/sympathy1.png';
import sympathyImage2 from '~/img/sympathy2.png';

export const storyList: { [key: string]: SympathyProps } = {
  default: {
    title: 'あながた本気でかわるために必要な2つの条件',
    subtitle: '成果 = モチベーション × 能力',
    sympathyCard1: {
      word: '仲間',
      icon: { type: 'arrow', size: 30 },
      title: { type: 'default-h3', lg: 'モチベーション', base: '' },
      image: { src: sympathyImage1, alt: 'sympathy1', height: 315, width: 315 },
      text1: '熱量の高い',
      text2: '最高の仲間と切磋琢磨',
    },
    sympathyCard2: {
      word: '目的',
      icon: { type: 'arrow', size: 30 },
      title: { type: 'default-h3', lg: '能力', base: '' },
      image: { src: sympathyImage2, alt: 'sympathy2', height: 315, width: 315 },
      text1: 'プロレベルで必要な',
      text2: '技術ロードマップを網羅',
    },
    text1: '良き仲間と目的を持った学びができる環境を提供します。',
    text2: '成果に繋がる学びがここにあります。',
  },
};
