import React from 'react';
import { storyList } from './data';
import { Image, ImageProps } from '@/component/atom/Image';
import { Sns, SnsProps } from '@/component/molecule/Sns';

export interface PageFooterProps {
  logo: {
    image: ImageProps;
    link: string;
  };
  text1: string;
  sns: { text: string; icon: SnsProps };
  footerList: {
    title: string;
    textLinkList: { text: string; link: string }[];
  }[];
  text2: string;
}

export const PageFooter: React.FC = () => {
  const data = storyList.default;
  return <PageFooterPresenter {...data} />;
};

export const PageFooterPresenter: React.FC<PageFooterProps> = ({
  logo,
  text1,
  sns,
  footerList,
  text2,
}) => (
  <footer className='flex max-w-full flex-col gap-12 bg-primary-800 p-12 text-base text-white'>
    <div className='flex items-end justify-between border-b border-b-white py-2'>
      <div>
        <a href={logo.link} data-testid='pagefooter-logo' className='flex items-center'>
          <Image {...logo.image} />
        </a>
      </div>
      <p className='font-bold' data-testid='pagefooter-text1'>
        {text1}
      </p>
      <div>
        <p className='text-center' data-testid='pagefooter-sns-text'>
          {sns.text}
        </p>
        <div className='flex items-center' data-testid='pagefooter-sns'>
          <Sns {...sns.icon} />
        </div>
      </div>
    </div>
    <div className='my-12 flex w-full justify-start gap-12'>
      {footerList.map((list, i) => {
        const name = `pagefooter-list-${i}`;
        //二重mapに対応するために定義
        return (
          <ul key={i}>
            <li data-testid={name} className='mb-4 font-bold'>
              {list.title}
            </li>
            {list.textLinkList.map((textLink, i) => (
              <li key={i}>
                <a href={textLink.link} data-testid={`${name}-textlink-${i}`}>
                  {textLink.text}
                </a>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
    <div className='mx-auto mt-12'>
      <p data-testid='pagefooter-text2'>{text2}</p>
    </div>
  </footer>
);
