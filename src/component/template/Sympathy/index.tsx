import React from 'react';
import { storyList } from './data';
import { Image, ImageProps } from '@/component/atom/Image';
import { SympathyCard, SympathyCardProps } from '@/component/molecule/SympathyCard';

export interface SympathyProps {
  title: string;
  subtitle: string;
  image1: ImageProps;
  image2: ImageProps;
  sympathyCard1: SympathyCardProps;
  sympathyCard2: SympathyCardProps;
  text1: string;
  text2: string;
}

export const Sympathy: React.FC = () => {
  const data = storyList.default;
  return <SympathyPresenter {...data} />;
};

export const SympathyPresenter: React.FC<SympathyProps> = ({
  title,
  subtitle,
  image1,
  image2,
  sympathyCard1,
  sympathyCard2,
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
        <h1 className='highlight text-xl' data-testid='sympathy-title'>
          {title}
        </h1>
        <h2 className='text-2xl' data-testid='sympathy-subtitle'>
          {subtitle}
        </h2>
      </div>
      <div className='mx-auto flex gap-24'>
        <div data-testid='sympathy-card-1'>
          <SympathyCard {...sympathyCard1} />
        </div>
        <div data-testid='sympathy-card-2'>
          <SympathyCard {...sympathyCard2} />
        </div>
      </div>
      <div className='mx-auto text-center text-xl'>
        <p className='' data-testid='sympathy-text1'>
          {text1}
        </p>
        <p className='' data-testid='sympathy-text2'>
          {text2}
        </p>
      </div>
    </div>
  </div>
);
