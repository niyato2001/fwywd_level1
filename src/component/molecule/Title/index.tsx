import React from 'react';

export interface TitleProps {
  type: 'default' | 'default-h3' | 'withbase' | 'withoutborder';
  lg: string;
  base: string;
}

export const Title: React.FC<TitleProps> = ({ type, lg, base }) => {
  const lgTitle = (
    <span
      data-testid='title-lg'
      className={type === 'withoutborder' ? 'text-xl font-bold' : 'highlight text-xl font-bold'}
    >
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
              <span data-testid='title-lg' className='text-xl font-bold'>
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
    case 'withoutborder':
      return <h3>{lgTitle}</h3>;
  }
};
