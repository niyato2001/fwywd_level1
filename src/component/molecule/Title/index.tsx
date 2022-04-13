import React from 'react';

export interface TitleProps {
  type: 'default' | 'default-h3' | 'withbase';
  lg: string;
  base: string;
}

export const Title: React.FC<TitleProps> = ({ type, lg, base }) => {
  const lgTitle = (
    <span data-testid='title-lg' className='highlight text-xl'>
      {lg}
    </span>
  );
  switch (type) {
    case 'default':
      return <h2>{lgTitle}</h2>;
    case 'default-h3':
      return <h3>{lgTitle}</h3>;
    case 'withbase':
      if (base) {
        return (
          <h3>
            <span data-testid='title-border' className='highlight'>
              <span data-testid='title-lg' className='text-xl'>
                {lg}
              </span>
              <span data-testid='title-base' className='text-base'>
                {base}
              </span>
            </span>
          </h3>
        );
      }
      return null;
  }
};