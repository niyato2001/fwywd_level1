import { Image, ImageProps } from '@/component/atom/Image';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface SympathyCardProps {
  tag?: string;
  title: TitleProps;
  image: ImageProps;
  text1: string;
  text2: string;
}

export const SympathyCard: React.FC<SympathyCardProps> = ({ tag, title, image, text1, text2 }) => (
  <div className='flex max-w-md flex-col gap-3 rounded pb-12 shadow-md shadow-primary-200'>
    {tag ? (
      <span data-testid='sympathycard-tag' className='tag'>
        {tag}
      </span>
    ) : (
      <div className='h-4'></div>
    )}
    <div data-testid='sympathycard-title' className='mx-auto text-primary-800'>
      <Title {...title} />
    </div>
    <div data-testid='sympathycard-image' className='mx-auto'>
      <Image {...image} />
    </div>
    <p data-testid='sympathycard-text1' className='mx-auto text-base text-primary-800'>
      {text1}
    </p>
    <p data-testid='sympathycard-text2' className='mx-auto text-base text-primary-800'>
      {text2}
    </p>
  </div>
);
