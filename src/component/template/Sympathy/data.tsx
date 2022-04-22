import { SympathyProps } from '.';
import sympathyImage1 from '~/img/sympathy1.png';
import sympathyImage2 from '~/img/sympathy2.png';

export const storyList: { [key: string]: SympathyProps } = {
  default: {
    title: '夢を叶える仲間が欲しい、あなたへ',
    checkList: [
      {
        icon: { type: 'check', size: 36 },
        text: '新しいことを始めたい気持ちは強い',
        color: '800',
      },
      {
        icon: { type: 'check', size: 36 },
        text: '学びに必要な教材がたくさんあることは知っている',
        color: '800',
      },
      {
        icon: { type: 'check', size: 36 },
        text: '最後のひと押しの勇気が欲しい',
        color: '800',
      },
    ],
    sympathyCard1: {
      tag: '悩み1',
      title: { type: 'withbase', lg: '仲間', base: 'がいない' },
      image: { src: sympathyImage1, alt: '', height: 315, width: 316 },
      text1: '会社の同僚や友人と一緒に',
      text2: '学ぶのは難しい',
    },
    sympathyCard2: {
      tag: '悩み2',
      title: { type: 'withbase', lg: '目的', base: 'があいまい' },
      image: { src: sympathyImage2, alt: '', height: 315, width: 316 },
      text1: 'ゆるい繋がりのコミュニティでは',
      text2: '目的が達成できない',
    },
  },
};
