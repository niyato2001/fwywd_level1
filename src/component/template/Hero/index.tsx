import Link from 'next/link';
import React from 'react';
import { storyList } from './data';
import { Image, ImageProps } from '@/component/atom/Image';

export interface HeroProps {
  title: string;
  subtitle: string;
  image: ImageProps;
  text1: string;
  number: number;
  text2: string;
  button: { text: string; link: string };
}

interface Props {
  number: number;
}

export const Hero: React.FC<Props> = (props: Props) => {
  const data = storyList.default;
  data.number = props.number;
  return <HeroPresenter {...data} />;
};

export const HeroPresenter: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  text1,
  number,
  text2,
  button,
}) => (
  <div className='relative flex max-w-full justify-center bg-white font-bold'>
    <Image {...image} />
    <div className='z-10 mt-36 mb-44 mr-72 flex flex-col justify-start gap-24 pr-96'>
      <div className='max-w-xl text-gray-900'>
        <h1 className='text-3xl' data-testid='hero-title'>
          {title}
        </h1>
        <h2 className='text-llg' data-testid='hero-subtitle'>
          {subtitle}
        </h2>
      </div>
      <div className='flex max-w-[290px] flex-col items-center gap-2'>
        <p className='w-full text-center text-yellow-100'>
          <span className='mr-2 text-sm' data-testid='hero-text1'>
            {text1}
          </span>
          <span className='mr-2 text-llg' data-testid='hero-number'>
            {number}
          </span>
          <span className='text-sm' data-testid='hero-text2'>
            {text2}
          </span>
        </p>
        <Link href={button.link}>
          <a className='btn w-full' data-testid='hero-button'>
            {button.text}
          </a>
        </Link>
      </div>
    </div>
  </div>
);
