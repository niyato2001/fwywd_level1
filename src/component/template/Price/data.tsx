import { PriceProps } from '.';

export const storyList: { [key: string]: PriceProps } = {
  default: {
    title: '料金',
    subtitle: '学びのスタイルに合わせた3つのプランを用意',
    text: 'おすすめ',
    priceCardList: [
      {
        type: 'white',
        title: { type: 'withoutborder', lg: '起業挑戦', base: 'プラン' },
        text1: 'これから起業する人を',
        text2: '全力で支援するプラン',
        price1: {
          type: 'default',
          time: '月額',
          price: '3,000',
          currency: '円',
          tax: '（税抜）',
        },
        price2: [
          {
            type: 'detail',
            item: '会費',
            time: '月額',
            price: ' 0 ',
            currency: '円',
            tax: '税込 0 円',
          },
          {
            type: 'detail',
            item: 'ツール利用料',
            time: '月額',
            price: ' 3,000 ',
            currency: '円',
            tax: '税込 3,300 円',
          },
        ],
        check1: [
          { icon: { type: 'check', size: 36 }, text: '仲間との学び', color: '800' },
          { icon: { type: 'check', size: 36 }, text: 'コース課題と解答集', color: '800' },
          { icon: { type: 'check', size: 36 }, text: 'イベント参加', color: '800' },
          {
            icon: { type: 'checkcircle', size: 24 },
            text: '運営側の質問対応',
            color: '200',
          },
        ],
        check2: [
          {
            icon: { type: 'check', size: 36 },
            text: '入学試験',
            color: '800',
          },
          {
            icon: { type: 'check', size: 36 },
            text: 'Web 面接',
            color: '800',
          },
        ],
      },
      {
        type: 'green',
        title: { type: 'withoutborder', lg: 'スタンダード', base: 'プラン' },
        text1: '仕事と学びを両立したい人に',
        text2: 'おすすめのプラン',
        price1: {
          type: 'default',
          time: '月額',
          price: ' 13,000 ',
          currency: '円',
          tax: '（税抜）',
        },
        price2: [
          {
            type: 'detail',
            item: '会費',
            time: '月額',
            price: ' 10,000 ',
            currency: '円',
            tax: '税込 11,000 円',
          },
          {
            type: 'detail',
            item: 'ツール利用料',
            time: '月額',
            price: ' 3,000 ',
            currency: '円',
            tax: '税込 3,300 円',
          },
        ],
        check1: [
          {
            icon: { type: 'check', size: 36 },
            text: '仲間との学び',
            color: 'white',
          },
          {
            icon: { type: 'check', size: 36 },
            text: 'コース課題と解答集',
            color: 'white',
          },
          {
            icon: { type: 'check', size: 36 },
            text: 'イベント参加',
            color: 'white',
          },
          {
            icon: { type: 'checkdarkcircle', size: 24 },
            text: '運営側の質問対応',
            color: '600',
          },
        ],
        check2: [
          {
            icon: { type: 'check', size: 36 },
            text: '入学試験',
            color: 'white',
          },
          {
            icon: { type: 'checkdarkcircle', size: 24 },
            text: 'Web 面接',
            color: '600',
          },
        ],
      },
      {
        type: 'white',
        title: { type: 'withoutborder', lg: 'フルサポート', base: 'プラン' },
        text1: '標準プランに加えて運営側からの',
        text2: 'フォロー希望の方向け',
        price1: {
          type: 'default',
          time: '月額',
          price: ' 63,000 ',
          currency: '円',
          tax: '（税抜）',
        },
        price2: [
          {
            type: 'detail',
            item: '会費',
            time: '月額',
            price: ' 60,000 ',
            currency: '円',
            tax: '税込 63,000 円',
          },
          {
            type: 'detail',
            item: 'ツール利用料',
            time: '月額',
            price: ' 3,000 ',
            currency: '円',
            tax: '税込 3,300 円',
          },
        ],
        check1: [
          { icon: { type: 'check', size: 36 }, text: '仲間との学び', color: '800' },
          { icon: { type: 'check', size: 36 }, text: 'コース課題と解答集', color: '800' },
          { icon: { type: 'check', size: 36 }, text: 'イベント参加', color: '800' },
          {
            icon: { type: 'check', size: 36 },
            text: '運営側の質問対応',
            color: '800',
          },
        ],
        check2: [
          {
            icon: { type: 'check', size: 36 },
            text: '入学試験',
            color: '800',
          },
          {
            icon: { type: 'checkcircle', size: 24 },
            text: 'Web 面接',
            color: '200',
          },
        ],
      },
    ],
    checkList: [
      {
        icon: { type: 'check', size: 36 },
        text: '基本的には同じプランの方とチームになりますが、集まっている人数によって変動します。',
        color: '800',
      },
      {
        icon: { type: 'check', size: 36 },
        text: '起業挑戦プランは Web 面談にてビジネスプランのプレゼンテーションで審査いたします。',
        color: '800',
      },
      {
        icon: { type: 'check', size: 36 },
        text: '起業挑戦プランの方が初年度以降を継続希望の場合は月額 10,000 円の標準プランへと自動的に移行します。',
        color: '800',
      },
    ],
  },
};
