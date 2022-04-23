import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { PageFooterPresenter } from '.';

describe('component/template/PageFooter', () => {
  describe('Default', () => {
    it('ロゴが表示されること', () => {
      render(<PageFooterPresenter {...storyList.default} />);
      expect(screen.getByTestId('pagefooter-logo')).toBeInTheDocument();
    });
    it('ロゴのリンクが正しいこと', () => {
      render(<PageFooterPresenter {...storyList.default} />);
      expect(screen.getByTestId('pagefooter-logo')).toHaveAttribute(
        'href',
        storyList.default.logo.link,
      );
    });
    it('テキスト1が正しく表示されること', () => {
      render(<PageFooterPresenter {...storyList.default} />);
      expect(screen.getByTestId('pagefooter-text1')).toHaveTextContent(storyList.default.text1);
    });
    it('snsのテキストが正しく表示されること', () => {
      render(<PageFooterPresenter {...storyList.default} />);
      expect(screen.getByTestId('pagefooter-sns-text')).toHaveTextContent(
        storyList.default.sns.text,
      );
    });
    it('snsブロックが正しく表示されること', () => {
      render(<PageFooterPresenter {...storyList.default} />);
      expect(screen.getByTestId('pagefooter-sns')).toBeInTheDocument();
    });
    storyList.default.footerList.forEach((list, index) => {
      const name = `pagefooter-list-${index}`;
      //二重のforEachに対応
      it(`リスト${index}のタイトルが正しく表示されること`, () => {
        render(<PageFooterPresenter {...storyList.default} />);
        expect(screen.getByTestId(name)).toHaveTextContent(list.title);
      });
      list.textLinkList.forEach((textLink, index) => {
        it(`テキストリンク${index}のテキストが正しく表示されること`, () => {
          render(<PageFooterPresenter {...storyList.default} />);
          expect(screen.getByTestId(`${name}-textlink-${index}`)).toHaveTextContent(textLink.text);
        });
        it(`テキストリンク${index}のリンクが正しく機能すること`, () => {
          render(<PageFooterPresenter {...storyList.default} />);
          expect(screen.getByTestId(`${name}-textlink-${index}`)).toHaveAttribute(
            'href',
            textLink.link,
          );
        });
      });
    });
    it('テキスト2が正しく表示されること', () => {
      render(<PageFooterPresenter {...storyList.default} />);
      expect(screen.getByTestId('pagefooter-text2')).toHaveTextContent(storyList.default.text2);
    });
  });
});
