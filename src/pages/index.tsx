import axios from 'axios';
import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';
import { Benefit } from '@/component/template/Benefit';
import { Cta } from '@/component/template/Cta';
import { Hero } from '@/component/template/Hero';
import { PageFooter } from '@/component/template/PageFooter';
import { PageHeader } from '@/component/template/PageHeader';
import { Price } from '@/component/template/Price';
import { Sympathy } from '@/component/template/Sympathy';

const Home: React.FC<Props> = (props: Props) => (
  <>
    <PageHeader />
    <main className='max-w-full'>
      <p>{props.num}</p>
      <Hero />
      <Sympathy />
      <Benefit />
      <Price />
      <Cta />
    </main>
    <PageFooter />
  </>
);

export default Home;

interface Props {
  num: number;
  children?: ReactNode;
}

const gssUrl = 'https://api.steinhq.com/v1/storages/624e61c04906bb053738ccf4/sheet1';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(gssUrl);
  const props: Props = {
    num: response.data.length,
  };

  return {
    props: props,
  };
};
