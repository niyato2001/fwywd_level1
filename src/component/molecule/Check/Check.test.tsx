import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { Check } from '.';

describe('component/molecule/Check', () => {
  describe('CheckDark', () => {
    it('チェックアイコンが表示されること', () => {
      render(<Check {...storyList.checkDark} />);
      expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    });
    it('テキストが正しく表示されること', () => {
      render(<Check {...storyList.checkDark} />);
      expect(screen.getByTestId('check-text')).toHaveTextContent(storyList.checkDark.text);
    });
  });
  describe('CheckLight', () => {
    it('チェックアイコンが表示されること', () => {
      render(<Check {...storyList.checkLight} />);
      expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    });
    it('テキストが正しく表示されること', () => {
      render(<Check {...storyList.checkLight} />);
      expect(screen.getByTestId('check-text')).toHaveTextContent(storyList.checkLight.text);
    });
  });
  describe('UncheckDark', () => {
    it('チェックアイコンが表示されること', () => {
      render(<Check {...storyList.uncheckDark} />);
      expect(screen.getByTestId('uncheck-icon')).toBeInTheDocument();
    });
    it('テキストが正しく表示されること', () => {
      render(<Check {...storyList.uncheckDark} />);
      expect(screen.getByTestId('check-text')).toHaveTextContent(storyList.uncheckDark.text);
    });
  });
  describe('UncheckLight', () => {
    it('チェックアイコンが表示されること', () => {
      render(<Check {...storyList.uncheckLight} />);
      expect(screen.getByTestId('uncheck-icon')).toBeInTheDocument();
    });
    it('テキストが正しく表示されること', () => {
      render(<Check {...storyList.uncheckLight} />);
      expect(screen.getByTestId('check-text')).toHaveTextContent(storyList.uncheckLight.text);
    });
  });
});
