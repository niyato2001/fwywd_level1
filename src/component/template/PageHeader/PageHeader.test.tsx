import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { PageHeaderPresenter } from '.';

describe('component/template/PageHeader', () => {
  describe('Default', () => {
    it('ロゴが表示されること', () => {
      render(<PageHeaderPresenter {...storyList.default} />);
      expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
    });
    it('ロゴのリンクが正しいこと', () => {
      render(<PageHeaderPresenter {...storyList.default} />);
      expect(screen.getByRole('link', { name: 'logo' })).toHaveAttribute(
        'href',
        storyList.default.icon.link,
      );
    });
    storyList.default.navList.forEach((nav, index) => {
      it(`ナビ${index}のテキストが正しく表示されること`, () => {
        render(<PageHeaderPresenter {...storyList.default} />);
        expect(screen.getByTestId(`pageheader-nav-${index}`)).toHaveTextContent(nav.text);
      });
      it(`ナビ${index}のリンクが正しく機能すること`, () => {
        render(<PageHeaderPresenter {...storyList.default} />);
        expect(screen.getByTestId(`pageheader-nav-${index}`)).toHaveAttribute('href', nav.link);
      });
    });
    it('ボタンのテキストが表示されること', () => {
      render(<PageHeaderPresenter {...storyList.default} />);
      expect(screen.getByTestId('pageheader-button')).toHaveTextContent(
        storyList.default.button.text,
      );
    });
    it('ボタンのリンクが正しいこと', () => {
      render(<PageHeaderPresenter {...storyList.default} />);
      expect(screen.getByTestId('pageheader-button')).toHaveAttribute(
        'href',
        storyList.default.button.link,
      );
    });
  });
});
