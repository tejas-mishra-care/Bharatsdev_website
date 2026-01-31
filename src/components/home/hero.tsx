'use client';

import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { ParticleSystem } from './particle-system';
import { useState, useEffect } from 'react';

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
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = shouldReduceMotion ? useTransform(scrollY, () => 0) : useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = shouldReduceMotion ? useTransform(scrollY, () => 1) : useTransform(scrollY, [0, 300], [1, 0]);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Disable particle system on mobile for performance
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <LazyMotion features={domAnimation}>
        {/* Particle System - disabled on mobile */}
        {!isMobile && <ParticleSystem />}
      
      {/* Animated gradient overlays */}
      <motion.div 
        className="absolute inset-0 gradient-mesh opacity-60"
        style={{ y }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217,89%,61%,0.2),transparent_70%)]"
        style={{ opacity }}
      />
      
      {/* Floating particles effect - reduced for performance */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                y: [null, Math.random() * windowSize.height],
                x: [null, Math.random() * windowSize.width],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}
      
      <motion.div
        className="container mx-auto text-center px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
      >
        <motion.div 
          variants={itemVariants} 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 backdrop-blur-xl border-2 border-primary/30 mb-8 shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(217,89%,61%,0.5)' }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Zap className="h-5 w-5 text-primary" />
          </motion.div>
          <p className="font-bold text-primary uppercase tracking-wider text-sm">
            Your Complete Digital Growth Engine
          </p>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-white text-balance mb-8 gradient-text text-6xl md:text-8xl font-black leading-tight drop-shadow-2xl"
          style={{
            textShadow: '0 0 60px rgba(74, 144, 226, 0.6), 0 0 100px rgba(74, 144, 226, 0.3)',
            filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We Don't Build Websites.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block mt-2"
          >
            We Architect Digital Ecosystems.
          </motion.span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-white max-w-3xl mx-auto mt-6 mb-12 text-balance text-xl md:text-2xl font-medium leading-relaxed drop-shadow-lg"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          Finished assets. No retainers. No overhead. Direct access to our Founder/CTO on every project.
        </motion.p>
        
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <MagneticButton>
            <Button asChild size="lg" className="group relative overflow-hidden text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent text-white border-0 shadow-[0_0_30px_rgba(74,144,226,0.5)] hover:shadow-[0_0_50px_rgba(74,144,226,0.8)]">
              <Link href="/contact" prefetch={true}>
                <span className="relative z-10 flex items-center gap-3">
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
            <Button asChild size="lg" variant="outline" className="group text-lg px-8 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              <Link href="/work" prefetch={true}>
                View Our Work
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
      </LazyMotion>
    </section>
  );
}
