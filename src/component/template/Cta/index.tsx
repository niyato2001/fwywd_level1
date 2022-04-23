import Link from 'next/link';
import React from 'react';
import { storyList } from './data';
import { Image, ImageProps } from '@/component/atom/Image';

export interface CtaProps {
  title1: { lg: string; base: string };
  title2: { lg: string; base: string };
  title3: { lg: string; base: string };
  image: ImageProps;
  button: { text: string; link: string };
}

export const Cta: React.FC = () => {
  const data = storyList.default;
  return <CtaPresenter {...data} />;
};

export const CtaPresenter: React.FC<CtaProps> = ({ title1, title2, title3, image, button }) => (
  <div className='flex max-w-full items-center justify-center gap-24 bg-gradient-to-tr from-primary-800 to-primary-500 px-20 py-10 font-bold text-white'>
    <div className='flex flex-col gap-20'>
      <div className='max-w-xl'>
        <h1 className='text-3xl' data-testid='cta-title'>
          <div>
            <span className='text-3xl'>{title1.lg}</span>
            <span className='text-2xl'>{title1.base}</span>
          </div>
          <div>
            <span className='text-3xl'>{title2.lg}</span>
            <span className='text-2xl'>{title2.base}</span>
            <span className='text-3xl'>{title3.lg}</span>
            <span className='text-2xl'>{title3.base}</span>
          </div>
        </h1>
      </div>
      <div className='flex max-w-[290px] items-center gap-2'>
        <Link href={button.link}>
          <a className='btn w-full' data-testid='cta-button'>
            {button.text}
          </a>
        </Link>
      </div>
    </div>
    <Image {...image} />
  </div>
);
