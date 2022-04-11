import NextImage from 'next/image';

export interface ImageProps {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
}

export const Image: React.FC<ImageProps> = ({ src, alt = '', width, height }) => (
  <NextImage src={src} alt={alt} width={width} height={height} />
);
