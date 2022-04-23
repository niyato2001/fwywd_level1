import React from 'react';
import { Icon, IconProps } from '@/component/atom/Icon';

export interface CheckProps {
  icon: IconProps;
  text: string;
  color: '800' | '600' | '200' | 'white';
}

export const Check: React.FC<CheckProps> = ({ icon, text, color }) => (
  <div className='flex max-w-full items-center gap-4 font-bold'>
    {icon.type === 'check' ? (
      <div className='flex items-center' data-testid='check-icon'>
        <Icon {...icon} />
      </div>
    ) : (
      <div className='flex h-9 w-9 items-center pl-1' data-testid='uncheck-icon'>
        <Icon {...icon} />
      </div>
    )}
    <span
      className={color === 'white' ? 'text-base text-white' : `text-base text-primary-${color}`}
      data-testid='check-text'
    >
      {text}
    </span>
  </div>
);
