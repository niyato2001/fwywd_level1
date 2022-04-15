import { Icon, IconProps } from '@/component/atom/Icon';
import { Image, ImageProps } from '@/component/atom/Image';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface BenefitCardProps {
  word: string;
  icon: IconProps;
  title: TitleProps;
  image: ImageProps;
  text: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ word, icon, title, image, text }) => (
  <div className='flex max-w-md flex-col gap-3 rounded py-12 shadow-md shadow-primary-200'>
    <span data-testid='benefitcard-word' className='mx-auto text-base text-primary-800'>
      {word}
    </span>
    <div data-testid='benefitcard-icon' className='mx-auto'>
      <Icon {...icon} />
    </div>
    <div data-testid='benefitcard-title' className='mx-auto text-primary-800'>
      <Title {...title} />
    </div>
    <div data-testid='benefitcard-image' className='mx-auto'>
      <Image {...image} />
    </div>
    <p data-testid='benefitcard-text' className='mx-auto text-base text-primary-800'>
      {text}
    </p>
  </div>
);
