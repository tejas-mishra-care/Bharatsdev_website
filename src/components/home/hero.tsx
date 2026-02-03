'use client';

import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion, LazyMotion, domAnimation, type Easing } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { ParticleSystem } from './particle-system';
import { HeroScene } from './HeroScene';
import { useState, useEffect } from 'react';

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: { scale: 0.95 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = shouldReduceMotion ? useTransform(scrollY, () => 0) : useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = shouldReduceMotion ? useTransform(scrollY, () => 1) : useTransform(scrollY, [0, 300], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const enableAmbientMotion = !shouldReduceMotion && !isMobile;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <LazyMotion features={domAnimation}>
        <div className="absolute inset-0 z-0">
          <HeroScene className="h-full w-full" />
        </div>
        {enableAmbientMotion && <ParticleSystem />}

        <motion.div className="absolute inset-0 gradient-mesh opacity-60" style={{ y, willChange: 'transform' }} />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217,89%,61%,0.18),transparent_70%)]"
          style={{ opacity, willChange: 'opacity' }}
        />

        <motion.div
          className="container mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 backdrop-blur-xl border-2 border-primary/30 mb-8 shadow-lg"
            whileHover={enableAmbientMotion ? { scale: 1.03, boxShadow: '0 0 30px hsl(217,89%,61%,0.5)' } : undefined}
          >
            <Zap className="h-5 w-5 text-primary" />
            <p className="font-bold text-primary uppercase tracking-wider text-sm">Your Complete Digital Growth Engine</p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance mb-8 text-5xl sm:text-6xl md:text-8xl font-black leading-tight"
            style={{
              textShadow: '0 0 60px rgba(74, 144, 226, 0.22)',
              filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.12))',
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-foreground dark:text-white"
            >
              We Don't Build Websites.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block mt-2 text-gradient"
            >
              We Architect Digital Ecosystems.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mt-6 mb-12 text-balance text-xl md:text-2xl font-medium leading-relaxed text-foreground/80 dark:text-white/80"
            style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.18)' }}
          >
            Finished assets. No retainers. No overhead. Direct access to our Founder/CTO on every project.
          </motion.p>

          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden text-lg px-8 py-6 w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white border-0 shadow-[0_0_30px_rgba(74,144,226,0.5)] hover:shadow-[0_0_50px_rgba(74,144,226,0.8)]"
              >
                <Link href="/contact" prefetch={true}>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Zap className="h-5 w-5" />
                    Start a Project
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group text-lg px-8 py-6 w-full sm:w-auto bg-background/30 backdrop-blur-xl border-2 border-border/60 text-foreground hover:bg-background/50 hover:border-border/80 dark:bg-white/10 dark:border-white/30 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/50"
              >
                <Link href="/work" prefetch={true}>
                  View Our Work
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={enableAmbientMotion ? { y: [0, 10, 0] } : undefined}
            transition={enableAmbientMotion ? { duration: 2, repeat: Infinity } : undefined}
          >
            <button
              type="button"
              aria-label="Scroll to next section"
              onClick={() => {
                if (typeof window === 'undefined') return;
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 border-foreground/30 dark:border-white/50"
            >
              <motion.div
                className="w-1 h-3 rounded-full bg-foreground/70 dark:bg-white"
                animate={enableAmbientMotion ? { y: [0, 12, 0] } : undefined}
                transition={enableAmbientMotion ? { duration: 2, repeat: Infinity } : undefined}
              />
            </button>
          </motion.div>
        </motion.div>
      </LazyMotion>
    </section>
  );
}
