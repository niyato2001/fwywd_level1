import React from 'react';
import { storyList } from './data';
import { Check, CheckProps } from '@/component/molecule/Check';
import { PriceCard, PriceCardProps } from '@/component/molecule/PriceCard';

export interface PriceProps {
  title: string;
  subtitle: string;
  text: string;
  priceCardList: PriceCardProps[];
  checkList: CheckProps[];
}

export const Price: React.FC = () => {
  const data = storyList.default;
  return <PricePresenter {...data} />;
};

export const PricePresenter: React.FC<PriceProps> = ({
  title,
  subtitle,
  text,
  priceCardList,
  checkList,
}) => (
  <div className='flex max-w-full flex-col justify-center bg-primary-50 font-bold text-primary-800'>
    <div className='my-24 flex w-full flex-col gap-12'>
      <div className='mx-auto flex flex-col gap-12 text-center'>
        <h1 className='text-2xl' data-testid='price-title'>
          {title}
        </h1>
        <p className='text-base' data-testid='price-subtitle'>
          {subtitle}
        </p>
      </div>
      <div>
        <p className='text-center text-base' data-testid='price-text'>
          {text}
        </p>
        <div className='mx-auto flex justify-center gap-8'>
          {priceCardList.map((priceCard, index) => (
            <div key={index} data-testid={`price-card-${index}`}>
              <PriceCard {...priceCard} />
            </div>
          ))}
        </div>
      </div>
      <ul className='mx-auto flex flex-col gap-2'>
        {checkList.map((check, index) => (
          <li key={index} data-testid={`price-check-${index}`}>
            <Check {...check} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
