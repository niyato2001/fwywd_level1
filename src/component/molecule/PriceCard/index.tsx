import { Check, CheckProps } from '../Check';
import { PriceTitle, PriceTitleProps } from '../PriceTitle';
import { Title, TitleProps } from '@/component/molecule/Title';

export interface PriceCardProps {
  type: 'white' | 'green';
  title: TitleProps;
  text1: string;
  text2: string;
  price1: PriceTitleProps;
  price2: PriceTitleProps[];
  check1: CheckProps[];
  check2: CheckProps[];
}

export const PriceCard: React.FC<PriceCardProps> = ({
  type,
  title,
  text1,
  text2,
  price1,
  price2,
  check1,
  check2,
}) => {
  switch (type) {
    case 'white':
      return (
        <div className='flex max-w-[420px] flex-col divide-y-2 divide-primary-200 rounded bg-white px-7 py-12 text-primary-800 shadow-md shadow-primary-200'>
          <div className='flex flex-col gap-3 pb-8'>
            <div data-testid='pricecard-title' className='mx-auto'>
              <Title {...title} />
            </div>
            <div className='mx-auto text-center text-base font-bold'>
              <p data-testid='pricecard-text1'>{text1}</p>
              <p data-testid='pricecard-text2'>{text2}</p>
            </div>
            <div data-testid='pricecard-price1'>
              <PriceTitle {...price1} />
            </div>
            <div data-testid='pricecard-price2' className='flex flex-col gap-5 pt-6'>
              {price2.map((price, i) => (
                <PriceTitle {...price} key={i} />
              ))}
            </div>
          </div>
          <div data-testid='pricecard-check1' className='flex w-full flex-col gap-2 px-10 py-8'>
            {check1.map((check, i) => (
              <Check {...check} key={i} />
            ))}
          </div>
          <div
            data-testid='pricecard-check2'
            className='mx-auto flex w-full flex-col gap-2 px-20 pt-8'
          >
            {check2.map((check, i) => (
              <Check {...check} key={i} />
            ))}
          </div>
        </div>
      );
    case 'green':
      return (
        <div className='flex max-w-[420px] flex-col divide-y-2 divide-primary-200 rounded bg-primary-800 py-12 px-7 text-white shadow-md shadow-primary-200'>
          <div className='flex flex-col gap-3 pb-8'>
            <div data-testid='pricecard-title' className='mx-auto'>
              <Title {...title} />
            </div>
            <div className='mx-auto text-center text-base font-bold'>
              <p data-testid='pricecard-text1'>{text1}</p>
              <p data-testid='pricecard-text2'>{text2}</p>
            </div>
            <div data-testid='pricecard-price1'>
              <PriceTitle {...price1} />
            </div>
            <div data-testid='pricecard-price2' className='flex flex-col gap-5 pt-6'>
              {price2.map((price, i) => (
                <PriceTitle {...price} key={i} />
              ))}
            </div>
          </div>
          <div data-testid='pricecard-check1' className='flex w-full flex-col gap-2 px-10 py-8'>
            {check1.map((check, i) => (
              <Check {...check} key={i} />
            ))}
          </div>
          <div
            data-testid='pricecard-check2'
            className='mx-auto flex w-full flex-col gap-2 px-20 pt-8'
          >
            {check2.map((check, i) => (
              <Check {...check} key={i} />
            ))}
          </div>
        </div>
      );
  }
};
