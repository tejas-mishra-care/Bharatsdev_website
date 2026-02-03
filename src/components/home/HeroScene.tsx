'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type HeroSceneProps = {
  className?: string;
  src?: string;
};

export function HeroScene({
  className,
  src = 'https://my.spline.design/connectingcard-Rvl4fbSrjn8FGQ6cbBnn2hxy/',
}: HeroSceneProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('absolute inset-0 z-0', className)} aria-hidden="true">
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <iframe
          src={src}
          title="Spline 3D Scene"
          frameBorder={0}
          width="100%"
          height="100%"
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          className="h-full w-full pointer-events-none"
        />
      </div>

      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300',
          loaded ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,hsl(217,89%,61%,0.14),transparent_70%)]" />
      </div>
    </div>
  );
}
