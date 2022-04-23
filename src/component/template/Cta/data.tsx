import { CtaProps } from '.';
import ctaImage from '~/img/cta.png';

export const storyList: { [key: string]: CtaProps } = {
  default: {
    title1: { lg: '良き仲間', base: 'との出会いは' },
    title2: { lg: '人生最大', base: 'の' },
    title3: { lg: '財産', base: 'である' },
    image: { src: ctaImage, alt: 'cta', width: 600, height: 600 },
    button: { text: '資料ダウンロード', link: 'https://forms.gle/SitjQHt4WHShaty6A' },
  },
};
