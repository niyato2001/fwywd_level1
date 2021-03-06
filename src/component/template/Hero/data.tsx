import { HeroProps } from '.';
import heroImage from '~/img/Hero.png';

export const storyList: { [key: string]: HeroProps } = {
  default: {
    title: '良心ある自己実現ができる世界へ',
    subtitle: '貢献が正しく評価される仕組みを創る',
    image: { src: heroImage, alt: 'hero', objectFit: 'contain', layout: 'fill' },
    text1: '現在',
    number: 100,
    text2: '名がダウンロード',
    button: { text: '資料ダウンロード', link: 'https://forms.gle/SitjQHt4WHShaty6A' },
  },
};
