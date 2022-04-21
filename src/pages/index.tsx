import { Hero } from '@/component/template/Hero';
import { PageFooter } from '@/component/template/PageFooter';
import { PageHeader } from '@/component/template/PageHeader';

const Home: React.FC = () => (
  <>
    <PageHeader />
    <main className='mx-auto max-w-6xl py-6'>
      <h1 className='text-lg font-bold text-primary-800'>
        Welcome to Kikagaku Next.js Starter Kit!!
      </h1>
    </main>
    <PageFooter />
  </>
);

export default Home;
