import { PageHeaderProps } from '.';
import logoImage from '~/img/fwywd.png';

export const storyList: { [key: string]: PageHeaderProps } = {
  default: {
    icon: {
      image: { src: logoImage, alt: 'logo', width: 156, height: 60 },
      link: 'https://fwywd.com/',
    },
    navList: [
      { text: 'Text', link: '' },
      { text: 'Text', link: '' },
      { text: 'Text', link: '' },
      { text: 'Text', link: '' },
    ],
    button: { text: 'Button', link: '' },
  },
};
