import { Benefit } from '@/component/template/Benefit';
import { Hero } from '@/component/template/Hero';
import { PageFooter } from '@/component/template/PageFooter';
import { PageHeader } from '@/component/template/PageHeader';
import { Price } from '@/component/template/Price';
import { Sympathy } from '@/component/template/Sympathy';

const Home: React.FC = () => (
  <>
    <PageHeader />
    <main className='max-w-full'>
      <Hero />
      <Sympathy />
      <Benefit />
      <Price />
    </main>
    <PageFooter />
  </>
);

export default Home;
