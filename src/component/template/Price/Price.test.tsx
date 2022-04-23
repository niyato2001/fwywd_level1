import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { PricePresenter } from '.';

describe('component/template/Price', () => {
  describe('Default', () => {
    it('タイトルのテキストが表示されること', () => {
      render(<PricePresenter {...storyList.default} />);
      expect(screen.getByTestId('price-title')).toHaveTextContent(storyList.default.title);
    });
    it('サブタイトルのテキストが表示されること', () => {
      render(<PricePresenter {...storyList.default} />);
      expect(screen.getByTestId('price-subtitle')).toHaveTextContent(storyList.default.subtitle);
    });
    it('textのテキストが表示されること', () => {
      render(<PricePresenter {...storyList.default} />);
      expect(screen.getByTestId('price-text')).toHaveTextContent(storyList.default.text);
    });
    {
      storyList.default.priceCardList.forEach((priceCard, index) => {
        it(`priceCard${index}が表示されること`, () => {
          render(<PricePresenter {...storyList.default} />);
          expect(screen.getByTestId(`price-card-${index}`)).toBeInTheDocument();
        });
      });
      storyList.default.checkList.forEach((check, index) => {
        it(`チェック${index}が表示されること`, () => {
          render(<PricePresenter {...storyList.default} />);
          expect(screen.getByTestId(`price-check-${index}`)).toBeInTheDocument();
        });
      });
    }
  });
});
