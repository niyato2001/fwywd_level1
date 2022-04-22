import React from 'react';
import { storyList } from './data';
import { Check, CheckProps } from '@/component/molecule/Check';
import { SympathyCard, SympathyCardProps } from '@/component/molecule/SympathyCard';

export interface SympathyProps {
  title: string;
  checkList: CheckProps[];
  sympathyCard1: SympathyCardProps;
  sympathyCard2: SympathyCardProps;
}

export const Sympathy: React.FC = () => {
  const data = storyList.default;
  return <SympathyPresenter {...data} />;
};

export const SympathyPresenter: React.FC<SympathyProps> = ({
  title,
  checkList,
  sympathyCard1,
  sympathyCard2,
}) => (
  <div className='flex max-w-full flex-col justify-center bg-white font-bold text-primary-800'>
    <div className='z-10 my-44 flex w-full flex-col gap-12'>
      <div className='mx-auto flex flex-col gap-12 text-center'>
        <h1 className='highlight text-xl' data-testid='sympathy-title'>
          {title}
        </h1>
        {checkList.map((check, index) => (
          <div key={index} data-testid={`sympathy-check-${index}`}>
            <Check {...check} />
          </div>
        ))}
      </div>
      <div className='mx-auto flex gap-24'>
        <div data-testid='sympathy-card-1'>
          <SympathyCard {...sympathyCard1} />
        </div>
        <div data-testid='sympathy-card-2'>
          <SympathyCard {...sympathyCard2} />
        </div>
      </div>
    </div>
  </div>
);
