import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { Title } from '.';

describe('component/molecule/Title', () => {
  describe('Default', () => {
    it('Lgテキストが表示されること', () => {
      render(<Title {...storyList.default} />);
      expect(screen.getByTestId('title-lg')).toHaveTextContent(storyList.default.lg);
    });
    it('Lgテキストのサイズが正しく表示されること', () => {
      render(<Title {...storyList.default} />);
      expect(screen.getByTestId('title-lg')).toHaveClass('text-xl');
    });
    it('Baseテキストが表示されないこと', () => {
      render(<Title {...storyList.default} />);
      expect(screen.queryByTestId('title-base')).not.toBeInTheDocument();
    });

    it('下線が表示されること', () => {
      render(<Title {...storyList.default} />);
      expect(screen.getByTestId('title-lg')).toHaveClass('highlight');
    });
  });
  describe('DefaultH3', () => {
    it('Lgテキストが表示されること', () => {
      render(<Title {...storyList.defaultH3} />);
      expect(screen.getByTestId('title-lg')).toHaveTextContent(storyList.default.lg);
    });
    it('Lgテキストのサイズが正しく表示されること', () => {
      render(<Title {...storyList.defaultH3} />);
      expect(screen.getByTestId('title-lg')).toHaveClass('text-xl');
    });
    it('Baseテキストが表示されないこと', () => {
      render(<Title {...storyList.defaultH3} />);
      expect(screen.queryByTestId('title-base')).not.toBeInTheDocument();
    });

    it('下線が表示されること', () => {
      render(<Title {...storyList.defaultH3} />);
      expect(screen.getByTestId('title-lg')).toHaveClass('highlight');
    });
  });
  describe('WithBase', () => {
    it('Lgテキストが表示されること', () => {
      render(<Title {...storyList.withBase} />);
      expect(screen.getByTestId('title-lg')).toHaveTextContent(storyList.withBase.lg);
    });
    it('Lgテキストのサイズが正しく表示されること', () => {
      render(<Title {...storyList.withBase} />);
      expect(screen.getByTestId('title-lg')).toHaveClass('text-xl');
    });
    it('Baseテキストが表示されること', () => {
      render(<Title {...storyList.withBase} />);
      expect(screen.getByTestId('title-base')).toHaveTextContent(storyList.withBase.base);
    });
    it('Baseテキストのサイズが正しく表示されること', () => {
      render(<Title {...storyList.withBase} />);
      expect(screen.getByTestId('title-base')).toHaveClass('text-base');
    });
    it('下線が表示されること', () => {
      render(<Title {...storyList.withBase} />);
      expect(screen.getByTestId('title-border')).toHaveClass('highlight');
    });
  });
});
