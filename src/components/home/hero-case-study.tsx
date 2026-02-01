'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Briefcase, Clock, Layers, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { motion, useInView, type Easing } from 'framer-motion';
import { useRef } from 'react';

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const ultratechCaseStudy = PlaceHolderImages.find(p => p.id === 'case-study-ultratech');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export function HeroCaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
            <motion.span
              className="inline-flex items-center gap-2 font-semibold text-primary uppercase tracking-wider px-5 py-2 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              The 48-Hour Standard
            </motion.span>
            <h2 className="mt-4 text-foreground text-balance">
              How We Delivered an Enterprise Certification Portal in 48 Hours
            </h2>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Card className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden p-8 md:p-12 border border-primary/30 bg-card/60 backdrop-blur-2xl shadow-glow hover:shadow-glow-lg hover:border-primary/50 transition-all duration-500 group relative rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div variants={itemVariants} className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 w-fit">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Case Study</span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">UltraTech Shashwat</h3>
                <p className="mt-3 text-muted-foreground">
                  Complete e-commerce platform with custom CMS, inventory management, and payment integration.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl p-4">
                  <div className="text-2xl font-extrabold text-foreground">48</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl p-4">
                  <div className="text-2xl font-extrabold text-foreground">100%</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">On Time</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl p-4">
                  <div className="text-2xl font-extrabold text-foreground">5★</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Rating</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button asChild size="lg" className="group">
                  <Link href="/work/ultratech-shashwat">
                    Read the Full Case Study
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 bg-background/40 backdrop-blur-xl">
                {ultratechCaseStudy && (
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }} className="relative w-full h-full">
                    <Image
                      src={ultratechCaseStudy.imageUrl}
                      alt={ultratechCaseStudy.description}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      data-ai-hint={ultratechCaseStudy.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                  </motion.div>
                )}

                <div className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold shadow-glow">
                  48 Hours
                </div>

                <div className="absolute left-4 bottom-5 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Launch Speed</div>
                  <div className="font-semibold text-foreground">Lightning Fast</div>
                </div>

                <div className="absolute right-4 bottom-16 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Quality</div>
                  <div className="font-semibold text-foreground">Production Ready</div>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
