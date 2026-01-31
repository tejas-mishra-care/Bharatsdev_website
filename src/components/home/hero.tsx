'use client';

import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Hero3D } from './hero-3d';

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
      ease: [0.22, 1, 0.36, 1],
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
      ease: [0.22, 1, 0.36, 1],
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
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <motion.div
        className="container mx-auto text-center px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <p className="font-semibold text-primary uppercase tracking-wider text-sm">
            Your Complete Digital Growth Engine
          </p>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-foreground text-balance mb-6 gradient-text text-5xl md:text-7xl font-bold"
        >
          We Don't Build Websites.<br />
          We Architect Digital Ecosystems.
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="large max-w-3xl mx-auto mt-6 mb-10 text-balance text-xl"
        >
          Finished assets. No retainers. No overhead. Direct access to our Founder/CTO on every project.
        </motion.p>
        
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/work">
                View Our Work
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
