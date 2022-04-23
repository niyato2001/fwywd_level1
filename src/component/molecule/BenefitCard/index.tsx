import { Icon, IconProps } from '@/component/atom/Icon';
import { Image, ImageProps } from '@/component/atom/Image';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface BenefitCardProps {
  word: string;
  icon: IconProps;
  title: TitleProps;
  image: ImageProps;
  text1: string;
  text2: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  word,
  icon,
  title,
  image,
  text1,
  text2,
}) => (
  <div className='flex w-[500px] flex-col gap-4 rounded bg-primary-50 py-12 shadow-md shadow-primary-200'>
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
    <div className='mx-auto text-center text-base text-primary-800'>
      <p data-testid='benefitcard-text1'>{text1}</p>
      <p data-testid='benefitcard-text2'>{text2}</p>
    </div>
  </div>
);
