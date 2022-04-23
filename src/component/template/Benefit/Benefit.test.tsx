import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { BenefitPresenter } from '.';

describe('component/template/Benefit', () => {
  describe('Default', () => {
    it('タイトルのテキストが表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByTestId('benefit-title')).toHaveTextContent(storyList.default.title);
    });
    it('サブタイトルのテキストが表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByTestId('benefit-subtitle')).toHaveTextContent(storyList.default.subtitle);
    });
    it('背景画像1が表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByRole('img', { name: 'bg1' })).toBeInTheDocument();
    });
    it('背景画像2が表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByRole('img', { name: 'bg2' })).toBeInTheDocument();
    });
    it('benefitCard1が表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByTestId('benefit-card-1')).toBeInTheDocument();
    });
    it('benefitCard2が表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByTestId('benefit-card-2')).toBeInTheDocument();
    });
    it('テキスト1が表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByTestId('benefit-text1')).toHaveTextContent(storyList.default.text1);
    });
    it('テキスト2が表示されること', () => {
      render(<BenefitPresenter {...storyList.default} />);
      expect(screen.getByTestId('benefit-text2')).toHaveTextContent(storyList.default.text2);
    });
  });
});
