import { PageHeaderProps } from '.';
import logoImage from '~/img/fwywd.png';

export const storyList: { [key: string]: PageHeaderProps } = {
  default: {
    icon: {
      image: { src: logoImage, alt: 'logo', width: 156, height: 60 },
      link: 'https://fwywd.com/',
    },
    navList: [
      { text: 'Top', link: '/' },
      { text: '悩み', link: '/#sympathy' },
      { text: '解決策', link: '/#benefit' },
      { text: '料金', link: '/#price' },
    ],
    button: { text: '資料ダウンロード', link: 'https://forms.gle/SitjQHt4WHShaty6A' },
  },
};
