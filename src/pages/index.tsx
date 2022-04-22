import { Benefit } from '@/component/template/Benefit';
import { Hero } from '@/component/template/Hero';
import { PageFooter } from '@/component/template/PageFooter';
import { PageHeader } from '@/component/template/PageHeader';

const Home: React.FC = () => (
  <>
    <PageHeader />
    <main className='max-w-full'>
      <Hero />
      <Benefit />
    </main>
    <PageFooter />
  </>
);

export default Home;
