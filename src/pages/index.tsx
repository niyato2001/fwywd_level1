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
      <Hero number={props.num} />
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

interface GssProps {
  タイムスタンプ?: string;
  お名前?: string;
  メールアドレス: string;
  電話番号?: string;
  プライバシーポリシーへの同意?: string;
}

const gssUrl = 'https://api.steinhq.com/v1/storages/624e61c04906bb053738ccf4/sheet1';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(gssUrl);
  const list = response.data.map((data: GssProps) => data['メールアドレス']);
  //ユニーク数にするため、メールアドレスの重複を削除したuniqueListを作成
  const set = new Set(list);
  const uniqueList = Array.from(set);
  const props: Props = {
    num: uniqueList.length,
  };
  return {
    props: props,
  };
};
