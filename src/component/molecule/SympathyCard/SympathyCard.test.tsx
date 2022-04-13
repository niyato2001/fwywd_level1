import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { SympathyCard } from '.';

describe('component/molecule/SympathyCard', () => {
  describe('Default', () => {
    it('タグが表示されること', () => {
      render(<SympathyCard {...storyList.default} />);
      expect(screen.getByTestId('sympathycard-tag')).toBeInTheDocument();
    });
    it('タイトルが表示されること', () => {
      render(<SympathyCard {...storyList.default} />);
      expect(screen.getByTestId('sympathycard-title')).toBeInTheDocument();
    });

    it('imageが表示されること', () => {
      render(<SympathyCard {...storyList.default} />);
      expect(screen.getByTestId('sympathycard-image')).toBeInTheDocument();
    });
    it('テキストが表示されること', () => {
      render(<SympathyCard {...storyList.default} />);
      expect(screen.getByTestId('sympathycard-text')).toHaveTextContent(storyList.default.text);
    });
  });
  describe('WithoutTag', () => {
    it('タグが表示されないこと', () => {
      render(<SympathyCard {...storyList.withoutTag} />);
      expect(screen.queryByTestId('sympathycard-tag')).not.toBeInTheDocument();
    });
    it('タイトルが表示されること', () => {
      render(<SympathyCard {...storyList.withoutTag} />);
      expect(screen.getByTestId('sympathycard-title')).toBeInTheDocument();
    });
    it('imageが表示されること', () => {
      render(<SympathyCard {...storyList.withoutTag} />);
      expect(screen.getByTestId('sympathycard-image')).toBeInTheDocument();
    });
    it('テキストが表示されること', () => {
      render(<SympathyCard {...storyList.withoutTag} />);
      expect(screen.getByTestId('sympathycard-text')).toHaveTextContent(storyList.withoutTag.text);
    });
  });
});
