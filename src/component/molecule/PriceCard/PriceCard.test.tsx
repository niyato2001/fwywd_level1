import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { PriceCard } from '.';

describe('component/molecule/PriceCard', () => {
  describe('White', () => {
    it('タイトルが表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-title')).toBeInTheDocument();
    });
    it('テキスト1が正しく表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-text1')).toHaveTextContent(storyList.white.text1);
    });
    it('テキスト2が正しく表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-text2')).toHaveTextContent(storyList.white.text2);
    });

    it('値段総額が表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-price1')).toBeInTheDocument();
    });

    it('値段個別が表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-price2')).toBeInTheDocument();
    });
    it('チェック1が表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-check1')).toBeInTheDocument();
    });
    it('チェック2が表示されること', () => {
      render(<PriceCard {...storyList.white} />);
      expect(screen.getByTestId('pricecard-check1')).toBeInTheDocument();
    });
  });
  describe('Green', () => {
    it('タイトルが表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-title')).toBeInTheDocument();
    });
    it('テキスト1が正しく表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-text1')).toHaveTextContent(storyList.green.text1);
    });
    it('テキスト2が正しく表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-text2')).toHaveTextContent(storyList.green.text2);
    });

    it('値段総額が表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-price1')).toBeInTheDocument();
    });

    it('値段個別が表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-price2')).toBeInTheDocument();
    });
    it('チェック1が表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-check1')).toBeInTheDocument();
    });
    it('チェック2が表示されること', () => {
      render(<PriceCard {...storyList.green} />);
      expect(screen.getByTestId('pricecard-check1')).toBeInTheDocument();
    });
  });
});
