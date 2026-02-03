'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type HeroSceneProps = {
  className?: string;
  src?: string;
  posterSrc?: string;
  activateOn?: 'inView' | 'interaction' | 'either';
  inViewRootMargin?: string;
};

export function HeroScene({
  className,
  src = 'https://my.spline.design/connectingcard-Rvl4fbSrjn8FGQ6cbBnn2hxy/',
  posterSrc,
  activateOn = 'either',
  inViewRootMargin = '200px',
}: HeroSceneProps) {
  const [loaded, setLoaded] = useState(false);
  const [activated, setActivated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const shouldActivateOnInView = useMemo(() => activateOn === 'inView' || activateOn === 'either', [activateOn]);
  const shouldActivateOnInteraction = useMemo(
    () => activateOn === 'interaction' || activateOn === 'either',
    [activateOn]
  );

  useEffect(() => {
    if (!shouldActivateOnInteraction) return;
    if (activated) return;

    const onInteract = () => setActivated(true);

    window.addEventListener('pointerdown', onInteract, { passive: true, once: true });
    window.addEventListener('scroll', onInteract, { passive: true, once: true });
    window.addEventListener('touchstart', onInteract, { passive: true, once: true });
    window.addEventListener('mousemove', onInteract, { passive: true, once: true });

    return () => {
      window.removeEventListener('pointerdown', onInteract);
      window.removeEventListener('scroll', onInteract);
      window.removeEventListener('touchstart', onInteract);
      window.removeEventListener('mousemove', onInteract);
    };
  }, [activated, shouldActivateOnInteraction]);

  useEffect(() => {
    if (!shouldActivateOnInView) return;
    if (activated) return;

    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActivated(true);
      },
      { root: null, threshold: 0.15, rootMargin: inViewRootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [activated, inViewRootMargin, shouldActivateOnInView]);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 z-0', className)} aria-hidden="true">
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        {activated ? (
          <iframe
            src={src}
            title="Spline 3D Scene"
            frameBorder={0}
            width="100%"
            height="100%"
            loading="lazy"
            tabIndex={-1}
            onLoad={() => setLoaded(true)}
            className="h-full w-full"
          />
        ) : null}
      </div>

      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300',
          loaded ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        )}
      >
        {posterSrc ? (
          posterSrc.startsWith('http') ? (
            <img
              src={posterSrc}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
              loading="eager"
            />
          ) : (
            <Image
              src={posterSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )
        ) : (
          <>
            <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,hsl(217,89%,61%,0.14),transparent_70%)]" />
          </>
        )}
      </div>
    </div>
  );
}
