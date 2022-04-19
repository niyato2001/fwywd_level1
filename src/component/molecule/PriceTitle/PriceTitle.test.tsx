import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { PriceTitle } from '.';

describe('component/molecule/PriceTitle', () => {
  describe('Default', () => {
    it('itemが表示されないこと', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.queryByTestId('pricetitle-item')).not.toBeInTheDocument();
    });
    it('timeのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-time')).toHaveTextContent(storyList.default.time);
    });
    it('timeのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-time')).toHaveClass('text-base');
    });
    it('priceのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-price')).toHaveTextContent(storyList.default.price);
    });
    it('priceのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-price')).toHaveClass('text-xl');
    });
    it('currencyのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-currency')).toHaveTextContent(
        storyList.default.currency,
      );
    });
    it('currencyのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-currency')).toHaveClass('text-base');
    });
    it('taxのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-tax')).toHaveTextContent(storyList.default.tax);
    });
    it('taxのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.default} />);
      expect(screen.getByTestId('pricetitle-tax')).toHaveClass('text-2xs');
    });
  });
  describe('Detail', () => {
    it('itemのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-item')).toBeInTheDocument();
    });
    it('itemのフォント表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-item')).toHaveClass('text-base');
    });
    it('timeのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-time')).toHaveTextContent(storyList.detail.time);
    });
    it('timeのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-time')).toHaveClass('text-base');
    });
    it('priceのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-price')).toHaveTextContent(storyList.detail.price);
    });
    it('priceのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-price')).toHaveClass('text-base');
    });
    it('currencyのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-currency')).toHaveTextContent(
        storyList.detail.currency,
      );
    });
    it('currencyのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-currency')).toHaveClass('text-base');
    });
    it('taxのテキストが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-tax')).toHaveTextContent(storyList.detail.tax);
    });
    it('taxのフォントが正しく表示されること', () => {
      render(<PriceTitle {...storyList.detail} />);
      expect(screen.getByTestId('pricetitle-tax')).toHaveClass('text-xs');
    });
  });
});
