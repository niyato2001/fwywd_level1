import React from 'react';

export interface PriceTitleProps {
  type: 'default' | 'detail';
  item?: string;
  time: string;
  price: string;
  currency: string;
  tax: string;
}

export const PriceTitle: React.FC<PriceTitleProps> = ({
  type,
  item,
  time,
  price,
  currency,
  tax,
}) => {
  switch (type) {
    case 'detail':
      return (
        <div className='max-w-[350px] font-bold'>
          <div className='flex justify-between'>
            <div data-testid='pricetitle-item' className='text-base'>
              {item}
            </div>
            <div>
              <span data-testid='pricetitle-time' className='text-base'>
                {time}
              </span>
              <span data-testid='pricetitle-price' className='text-base'>
                {price}
              </span>
              <span data-testid='pricetitle-currency' className='text-base'>
                {currency}
              </span>
            </div>
          </div>
          <div data-testid='pricetitle-tax' className='text-right text-xs'>
            {tax}
          </div>
        </div>
      );
    case 'default':
      return (
        <div className='max-w-sm text-center font-bold'>
          <span data-testid='pricetitle-time' className='mx-1 text-base'>
            {time}
          </span>
          <span data-testid='pricetitle-price' className='mx-1 text-xl '>
            {price}
          </span>
          <span data-testid='pricetitle-currency' className='mx-1 text-base '>
            {currency}
          </span>
          <span data-testid='pricetitle-tax' className='mx-1 text-2xs '>
            {tax}
          </span>
        </div>
      );
  }
};
