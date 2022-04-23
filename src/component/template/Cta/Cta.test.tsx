import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { CtaPresenter } from '.';

describe('component/template/Cta', () => {
  describe('Default', () => {
    it('タイトルが表示されること', () => {
      render(<CtaPresenter {...storyList.default} />);
      expect(screen.getByTestId('cta-title')).toBeInTheDocument();
    });
    it('Ctaイメージが表示されること', () => {
      render(<CtaPresenter {...storyList.default} />);
      expect(screen.getByRole('img', { name: 'cta' })).toBeInTheDocument();
    });
    it('ボタンのテキストが表示されること', () => {
      render(<CtaPresenter {...storyList.default} />);
      expect(screen.getByTestId('cta-button')).toHaveTextContent(storyList.default.button.text);
    });
    it('ボタンのリンクが正しいこと', () => {
      render(<CtaPresenter {...storyList.default} />);
      expect(screen.getByRole('link', { name: '資料ダウンロード' })).toHaveAttribute(
        'href',
        storyList.default.button.link,
      );
    });
  });
});
