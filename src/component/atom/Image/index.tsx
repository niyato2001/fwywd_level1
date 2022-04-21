import NextImage from 'next/image';

export interface ImageProps {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  width,
  height,
  objectFit,
  layout,
}) => (
  <NextImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    objectFit={objectFit}
    layout={layout}
  />
);
