import { render, screen } from '@testing-library/react';
import { storyList } from './data';
import { Sns } from '.';

describe('component/molecule/Sns', () => {
  describe('Default', () => {
    it('facebookアイコンが表示されること', () => {
      render(<Sns {...storyList.default} />);
      expect(screen.getByTestId('sns-facebook')).toBeInTheDocument();

      it('twitterアイコンが表示されること', () => {
        render(<Sns {...storyList.default} />);
        expect(screen.getByTestId('sns-twitter')).toBeInTheDocument();
      });

      it('lineアイコンが表示されること', () => {
        render(<Sns {...storyList.default} />);
        expect(screen.getByTestId('sns-line')).toBeInTheDocument();
      });

      it('bアイコンが表示されること', () => {
        render(<Sns {...storyList.default} />);
        expect(screen.getByTestId('sns-b')).toBeInTheDocument();
      });

      it('pinterestアイコンが表示されること', () => {
        render(<Sns {...storyList.default} />);
        expect(screen.getByTestId('sns-pinterest')).toBeInTheDocument();
      });
    });
  });
});
