import React from 'react';
import { storyList } from './data';
import { Image, ImageProps } from '@/component/atom/Image';
import { BenefitCard, BenefitCardProps } from '@/component/molecule/BenefitCard';

export interface BenefitProps {
  title: string;
  subtitle: string;
  image1: ImageProps;
  image2: ImageProps;
  benefitCard1: BenefitCardProps;
  benefitCard2: BenefitCardProps;
  text1: string;
  text2: string;
}

export const Benefit: React.FC = () => {
  const data = storyList.default;
  return <BenefitPresenter {...data} />;
};

export const BenefitPresenter: React.FC<BenefitProps> = ({
  title,
  subtitle,
  image1,
  image2,
  benefitCard1,
  benefitCard2,
  text1,
  text2,
}) => (
  <div className='relative flex max-w-full justify-center bg-white font-bold text-primary-800'>
    <div className='absolute top-36 left-0 flex items-center opacity-10'>
      <Image {...image1} />
    </div>
    <div className='absolute bottom-28 right-0  flex items-center opacity-10'>
      <Image {...image2} />
    </div>
    <div className='z-10 my-44 flex w-full flex-col gap-12'>
      <div className='mx-auto flex flex-col gap-12 text-center'>
        <h1 className='highlight text-xl' data-testid='benefit-title'>
          {title}
        </h1>
        <h2 className='text-2xl' data-testid='benefit-subtitle'>
          {subtitle}
        </h2>
      </div>
      <div className='mx-auto flex gap-24'>
        <div data-testid='benefit-card-1'>
          <BenefitCard {...benefitCard1} />
        </div>
        <div data-testid='benefit-card-2'>
          <BenefitCard {...benefitCard2} />
        </div>
      </div>
      <div className='mx-auto text-center text-xl'>
        <p className='' data-testid='benefit-text1'>
          {text1}
        </p>
        <p className='' data-testid='benefit-text2'>
          {text2}
        </p>
      </div>
    </div>
  </div>
);
