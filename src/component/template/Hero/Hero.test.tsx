import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { Hero } from '.';

describe('component/template/Hero', () => {
  describe('Default', () => {
    it('タイトルのテキストが表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByTestId('hero-title')).toHaveTextContent(storyList.default.title);
    });
    it('サブタイトルのテキストが表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByTestId('hero-subtitle')).toHaveTextContent(storyList.default.subtitle);
    });
    it('Heroイメージが表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByRole('img', { name: 'hero' })).toBeInTheDocument();
    });
    it('ボタンの上の前テキストが表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByTestId('hero-text1')).toHaveTextContent(storyList.default.text1);
    });
    it('ボタンの上の数字が表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByTestId('hero-number')).toBeInTheDocument();
    });
    it('ボタンの上の後テキストが表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByTestId('hero-text2')).toHaveTextContent(storyList.default.text2);
    });
    it('ボタンのテキストが表示されること', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByTestId('hero-button')).toHaveTextContent(storyList.default.button.text);
    });
    it('ボタンのリンクが正しいこと', () => {
      render(<Hero {...storyList.default} />);
      expect(screen.getByRole('link', { name: '資料ダウンロード' })).toHaveAttribute(
        'href',
        storyList.default.button.link,
      );
    });
  });
});
