import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { BenefitCard } from '.';

describe('component/molecule/BenefitCard', () => {
  describe('Default', () => {
    it('ワードが正しく表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-word')).toHaveTextContent(storyList.default.word);
    });
    it('アイコンが表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-icon')).toBeInTheDocument();
    });
    it('タイトルが表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-title')).toBeInTheDocument();
    });

    it('imageが表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-image')).toBeInTheDocument();
    });
    it('テキストが表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-text')).toHaveTextContent(storyList.default.text);
    });
  });
});
