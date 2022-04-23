import { PageFooterProps } from '.';
import logoImage from '~/img/fwywd.png';

export const storyList: { [key: string]: PageFooterProps } = {
  default: {
    logo: {
      image: { src: logoImage, alt: 'logo', width: 156, height: 60 },
      link: 'https://fwywd.com/',
    },
    text1: '良き仲間との出会いは人生最大の財産である',
    sns: {
      text: 'SNSでシェア',
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
        title: 'About',
        textLinkList: [
          { text: '悩み', link: '/#sympathy' },
          { text: '解決策', link: '/#benefit' },
          { text: '料金', link: '/#price' },
        ],
      },
      {
        title: 'Legal',
        textLinkList: [
          { text: '利用規約', link: '' },
          { text: 'プライバシーポリシー', link: '' },
          { text: '特定商取引法に基づく表記', link: '' },
          { text: '運営会社', link: '' },
        ],
      },
      {
        title: 'Links',
        textLinkList: [
          { text: 'メディアキット', link: '' },
          { text: 'サイトマップ', link: '' },
        ],
      },
    ],
    text2: '🄫 2022, KIKAGAKU.Inc., All right reserved',
  },
};
