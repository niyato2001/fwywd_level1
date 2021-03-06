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
  <div className='flex w-[500px] flex-col gap-8 rounded bg-white pb-12 shadow-md shadow-primary-200'>
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
    <div className='mx-auto text-center text-base text-primary-800'>
      <p data-testid='sympathycard-text1'>{text1}</p>
      <p data-testid='sympathycard-text2'>{text2}</p>
    </div>
  </div>
);
