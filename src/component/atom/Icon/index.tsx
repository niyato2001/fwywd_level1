import { Image } from '@/component/atom/Image';
import arrow from '~/icon/Arrow.png';
import b from '~/icon/B.png';
import check from '~/icon/Check.png';
import checkcircle from '~/icon/Checkcircle.png';
import checkdarkcircle from '~/icon/Checkdarkcircle.png';
import facebook from '~/icon/Facebook.png';
import line from '~/icon/Line.png';
import pinterest from '~/icon/Pinterest.png';
import twitter from '~/icon/Twitter.png';

export interface IconProps {
  type:
    | 'facebook'
    | 'twitter'
    | 'line'
    | 'b'
    | 'pinterest'
    | 'check'
    | 'checkcircle'
    | 'checkdarkcircle'
    | 'arrow';
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ type, size = 30 }) => {
  switch (type) {
    case 'facebook':
      return <Image src={facebook} alt={type} width={size} height={size} />;
    case 'twitter':
      return <Image src={twitter} alt={type} width={size} height={size} />;
    case 'line':
      return <Image src={line} alt={type} width={size} height={size} />;
    case 'b':
      return <Image src={b} alt={type} width={size} height={size} />;
    case 'pinterest':
      return <Image src={pinterest} alt={type} width={size} height={size} />;
    case 'check':
      return <Image src={check} alt={type} width={size} height={size} />;
    case 'checkcircle':
      return <Image src={checkcircle} alt={type} width={size} height={size} />;
    case 'checkdarkcircle':
      return <Image src={checkdarkcircle} alt={type} width={size} height={size} />;
    case 'arrow':
      return <Image src={arrow} alt={type} width={size} height={size} />;
  }
};
