import { Image, ImageProps } from '@/component/atom/Image';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface SympathyCardProps {
  tag?: string;
  title: TitleProps;
  image: ImageProps;
  text: string;
}

export const SympathyCard: React.FC<SympathyCardProps> = ({ tag, title, image, text }) => (
  <div className=''>
    <div>{tag}</div>
    <Title {...title} />
    <Image {...image} />
    <div>{text}</div>
  </div>
);
