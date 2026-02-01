'use client';

import { trustLogos } from '@/lib/data';
import Image from 'next/image';
import { Clock, Headset, Star, Zap } from 'lucide-react';
import { motion, useInView, useReducedMotion, type Easing } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const stats = [
  {
    icon: Zap,
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: Clock,
    value: 48,
    suffix: 'hrs',
    label: 'Avg. Delivery Time',
  },
  {
    icon: Star,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    icon: Headset,
    valueText: '24/7',
    label: 'Support Available',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 0.6,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
  hover: {
    opacity: 1,
    scale: 1.1,
    filter: 'grayscale(0%)',
    transition: {
      duration: 0.3,
    },
  },
};

function AnimatedNumber({ to, start }: { to: number; start: boolean }) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(() => (reduceMotion ? to : 0));

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const durationMs = 900;
    const startTs = performance.now();
    let raf = 0;

    const tick = (ts: number) => {
      const progress = Math.min(1, (ts - startTs) / durationMs);
      setValue(Math.round(to * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, start, to]);

  return <>{value}</>;
}

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const track = useMemo(() => [...trustLogos, ...trustLogos], []);

  return (
    <section className="bg-secondary/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl bg-background/60 backdrop-blur-xl border border-border/60 p-6 text-center"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 border border-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  {'valueText' in s ? (
                    s.valueText
                  ) : (
                    <>
                      <AnimatedNumber to={s.value} start={isInView} />
                      <span className="text-primary">{s.suffix}</span>
                    </>
                  )}
                </div>
                <div className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          className="border-t border-border/50 my-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            TRUSTED BY INDUSTRY LEADERS & INNOVATORS
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex w-max gap-10 items-center py-2 hover:[animation-play-state:paused]" style={{ animation: 'marquee 40s linear infinite' }}>
            {track.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                custom={index}
                variants={logoVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative h-10 w-36 grayscale transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  fill
                  sizes="144px"
                  className="object-contain"
                  data-ai-hint={logo.imageHint}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
