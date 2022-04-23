import Link from 'next/link';
import React from 'react';
import { storyList } from './data';
import { Image, ImageProps } from '@/component/atom/Image';

export interface PageHeaderProps {
  icon: {
    image: ImageProps;
    link: string;
  };
  navList: {
    text: string;
    link: string;
  }[];
  button: { text: string; link: string };
}

export const PageHeader: React.FC = () => {
  const data = storyList.default;
  return <PageHeaderPresenter {...data} />;
};

export const PageHeaderPresenter: React.FC<PageHeaderProps> = ({ icon, navList, button }) => (
  <header className='flex max-w-full items-center justify-between bg-primary-800 font-bold text-white'>
    <div className='flex items-center gap-24'>
      <div className=' pl-12 hover:opacity-75'>
        <Link href={icon.link}>
          <a data-testid='pageheader-logo' className='flex items-center'>
            <Image {...icon.image} />
          </a>
        </Link>
      </div>
      <nav>
        <ul className='table h-[100px] max-w-4xl flex-auto '>
          {navList.map((nav, i) => (
            <li
              key={i}
              className='table-cell w-[150px] text-center text-base hover:border-b-4 hover:border-b-primary-100 hover:bg-primary-600'
            >
              <Link href={nav.link}>
                <a
                  className='block h-full w-full py-8 text-center'
                  data-testid={`pageheader-nav-${i}`}
                >
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className='my-3 mr-12 flex items-center'>
      <Link href={button.link}>
        <a className='btn' data-testid='pageheader-button'>
          {button.text}
        </a>
      </Link>
    </div>
  </header>
);
