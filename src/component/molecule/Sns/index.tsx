import { Icon, IconProps } from '@/component/atom/Icon';

export interface SnsProps {
  facebook: IconProps;
  twitter: IconProps;
  line: IconProps;
  b: IconProps;
  pinterest: IconProps;
}

export const Sns: React.FC<SnsProps> = ({ facebook, twitter, line, b, pinterest }) => (
  <div className='flex gap-3'>
    <button className='rounded' data-testid='sns-facebook'>
      <Icon {...facebook} />
    </button>
    <button className='rounded' data-testid='sns-twitter'>
      <Icon {...twitter} />
    </button>
    <button className='rounded' data-testid='sns-line'>
      <Icon {...line} />
    </button>
    <button className='rounded' data-testid='sns-b'>
      <Icon {...b} />
    </button>
    <button className='rounded' data-testid='sns-pinterest'>
      <Icon {...pinterest} />
    </button>
  </div>
);
