import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { SympathyPresenter } from '.';

describe('component/template/Sympathy', () => {
  describe('Default', () => {
    it('タイトルのテキストが表示されること', () => {
      render(<SympathyPresenter {...storyList.default} />);
      expect(screen.getByTestId('sympathy-title')).toHaveTextContent(storyList.default.title);
    });
    {
      storyList.default.checkList.forEach((check, index) => {
        it(`チェック${index}が表示されること`, () => {
          render(<SympathyPresenter {...storyList.default} />);
          expect(screen.getByTestId(`sympathy-check-${index}`)).toBeInTheDocument();
        });
      });
    }
    it('sympathyCard1が表示されること', () => {
      render(<SympathyPresenter {...storyList.default} />);
      expect(screen.getByTestId('sympathy-card-1')).toBeInTheDocument();
    });
    it('sympathyCard2が表示されること', () => {
      render(<SympathyPresenter {...storyList.default} />);
      expect(screen.getByTestId('sympathy-card-2')).toBeInTheDocument();
    });
  });
});
