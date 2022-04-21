import { PageFooterProps } from '.';
import logoImage from '~/img/fwywd.png';

export const storyList: { [key: string]: PageFooterProps } = {
  default: {
    logo: {
      image: { src: logoImage, alt: 'logo', width: 156, height: 60 },
      link: 'https://fwywd.com/',
    },
    text1: 'Text1',
    sns: {
      text: 'Text',
      icon: {
        facebook: { type: 'facebook', size: 60 },
        twitter: { type: 'twitter', size: 60 },
        line: { type: 'line', size: 60 },
        b: { type: 'b', size: 60 },
        pinterest: { type: 'pinterest', size: 60 },
      },
    },
    footerList: [
      {
        title: 'Title',
        textLinkList: [
          { text: 'Text1', link: '' },
          { text: 'Text2', link: '' },
          { text: 'Text3', link: '' },
        ],
      },
      {
        title: 'Title',
        textLinkList: [
          { text: 'Text1', link: '' },
          { text: 'Text2', link: '' },
          { text: 'Text3', link: '' },
        ],
      },
      {
        title: 'Title',
        textLinkList: [
          { text: 'Text1', link: '' },
          { text: 'Text2', link: '' },
          { text: 'Text3', link: '' },
        ],
      },
    ],
    text2: 'Text2',
  },
};
