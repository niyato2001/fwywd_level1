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
    it('テキスト1が表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-text1')).toHaveTextContent(storyList.default.text1);
    });
    it('テキスト2が表示されること', () => {
      render(<BenefitCard {...storyList.default} />);
      expect(screen.getByTestId('benefitcard-text2')).toHaveTextContent(storyList.default.text2);
    });
  });
});
