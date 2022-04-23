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
    <div className=' pl-12 hover:opacity-75'>
      <Link href={icon.link}>
        <a data-testid='pageheader-logo' className='flex items-center'>
          <Image {...icon.image} />
        </a>
      </Link>
    </div>
    <nav>
      <ul className='mr-[250px] flex h-[100px] flex-row'>
        {navList.map((nav, i) => (
          <li
            key={i}
            className='flex w-[150px] items-center justify-center text-base hover:border-b-4 hover:border-b-primary-100 hover:bg-primary-600'
          >
            <a href={nav.link} data-testid={`pageheader-nav-${i}`}>
              {nav.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className='btn my-3 mr-12 flex items-center'>
      <a href={button.link} data-testid='pageheader-button'>
        {button.text}
      </a>
    </div>
  </header>
);
