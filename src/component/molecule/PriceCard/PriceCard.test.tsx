import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { PriceCard } from '.';

describe('component/molecule/PriceCard', () => {
  describe('Default', () => {
    it('ワードが正しく表示されること', () => {
      render(<PriceCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-word')).toHaveTextContent(storyList.default.word);
    });
    it('アイコンが表示されること', () => {
      render(<PriceCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-icon')).toBeInTheDocument();
    });
    it('タイトルが表示されること', () => {
      render(<PriceCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-title')).toBeInTheDocument();
    });

    it('imageが表示されること', () => {
      render(<PriceCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-image')).toBeInTheDocument();
    });
    it('テキストが表示されること', () => {
      render(<PriceCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-text')).toHaveTextContent(storyList.default.text);
    });
  });
});
