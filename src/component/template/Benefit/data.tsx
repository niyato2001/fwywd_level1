import { BenefitProps } from '.';
import benefitBgImage from '~/img/Benefitbg.png';
import benefitImage1 from '~/img/benefit1.png';
import benefitImage2 from '~/img/benefit2.png';

export const storyList: { [key: string]: BenefitProps } = {
  default: {
    title: 'あながた本気でかわるために必要な2つの条件',
    subtitle: '成果 = モチベーション × 能力',
    image1: { src: benefitBgImage, alt: 'bg1', width: 666, height: 473 },
    image2: { src: benefitBgImage, alt: 'bg2', width: 932, height: 662 },
    benefitCard1: {
      word: '仲間',
      icon: { type: 'arrow', size: 30 },
      title: { type: 'default-h3', lg: 'モチベーション', base: '' },
      image: { src: benefitImage1, alt: 'benefit1', height: 315, width: 315 },
      text1: '熱量の高い',
      text2: '最高の仲間と切磋琢磨',
    },
    benefitCard2: {
      word: '目的',
      icon: { type: 'arrow', size: 30 },
      title: { type: 'default-h3', lg: '能力', base: '' },
      image: { src: benefitImage2, alt: 'benefit2', height: 315, width: 315 },
      text1: 'プロレベルで必要な',
      text2: '技術ロードマップを網羅',
    },
    text1: '良き仲間と目的を持った学びができる環境を提供します。',
    text2: '成果に繋がる学びがここにあります。',
  },
};
