import { useState } from 'react';
import { Skeleton } from './skeleton';

type Size = 'sm' | 'md' | 'lg';
type Loading = 'lazy' | 'eager';

interface Props {
  src: string;
  alt: string;
  loading?: Loading;
  size: Size;
}

const sizeMap: Record<Size, string> = {
  // 2:3
  sm: 'w-24 h-36',
  md: 'w-36 h-54',
  lg: 'w-48 h-72',
};

export const Image = ({ src, alt, loading = 'lazy', size }: Props) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${sizeMap[size]} `}>
      {!loaded && !error && <Skeleton />}
      {error && <div className="absolute inset-0 flex items-center justify-center">error</div>}
      <img
        decoding="async"
        src={src}
        loading={loading}
        alt={alt}
        className={`rounded-main transition-opacity duration-500 w-full h-full object-contain
          ${loaded && !error ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};
