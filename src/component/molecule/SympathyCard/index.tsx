import { Image, ImageProps } from '@/component/atom/Image';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface SympathyCardProps {
  tag?: string;
  title: TitleProps;
  image: ImageProps;
  text: string;
}

export const SympathyCard: React.FC<SympathyCardProps> = ({ tag, title, image, text }) => (
  <div className='flex max-w-md flex-col gap-3 rounded pb-12 shadow-md shadow-primary-200'>
    <div data-testid='sympathycard-tag' className=''>
      <span className='tag'>{tag}</span>
    </div>
    <div data-testid='sympathycard-title' className='mx-auto text-primary-800'>
      <Title {...title} />
    </div>
    <div data-testid='sympathycard-image' className='mx-auto'>
      <Image {...image} />
    </div>
    <p data-testid='sympathycard-text' className='mx-auto text-base text-primary-800'>
      {text}
    </p>
  </div>
);
