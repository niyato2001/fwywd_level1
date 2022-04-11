import NextImage from 'next/image';

export interface IconProps {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
}

export const Icon: React.FC<IconProps> = ({ src, alt = '', width, height }) => (
  <NextImage src={src} alt={alt} width={width} height={height} />
);
