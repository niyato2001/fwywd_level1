import { PriceTitleProps } from '../PriceTitle';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface PriceCardProps {
  title: TitleProps;
  text1: string;
  text2: string;
  price1: PriceTitleProps;
  price2: PriceTitleProps;
}

export const PriceCard: React.FC<PriceCardProps> = ({ word, icon, title, image, text }) => (
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
