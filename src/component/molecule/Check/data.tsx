import { CheckProps } from '.';

export const storyList: { [key: string]: CheckProps } = {
  checkDark: {
    icon: { type: 'check', size: 36 },
    text: 'Text',
    color: '800',
  },

  checkLight: {
    icon: { type: 'check', size: 36 },
    text: 'Text',
    color: 'white',
  },

  uncheckDark: {
    icon: { type: 'checkdarkcircle', size: 24 },
    text: 'Text',
    color: '600',
  },
  uncheckLight: {
    icon: { type: 'checkcircle', size: 24 },
    text: 'Text',
    color: '200',
  },
};
