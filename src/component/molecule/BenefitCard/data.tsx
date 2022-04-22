import { BenefitCardProps } from '.';
import benefitImage1 from '~/img/benefit1.png';

export const storyList: { [key: string]: BenefitCardProps } = {
  default: {
    word: 'Word',
    icon: { type: 'arrow', size: 30 },
    title: { type: 'default-h3', lg: 'Lg', base: '' },
    image: { src: benefitImage1, alt: '', height: 315, width: 315 },
    text1: 'Text1',
    text2: 'Text2',
  },
};
