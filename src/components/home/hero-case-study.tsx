'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Briefcase, Clock, Layers, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
      ease: [0.22, 1, 0.36, 1],
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
              className="inline-block font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              Featured Project
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
          <Card className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center overflow-hidden p-8 md:p-12 border-2 border-primary/50 shadow-2xl hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-lg overflow-hidden group/image"
            >
              {ultratechCaseStudy && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={ultratechCaseStudy.imageUrl}
                    alt={ultratechCaseStudy.description}
                    fill
                    className="object-cover rounded-lg"
                    data-ai-hint={ultratechCaseStudy.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                </motion.div>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6 relative z-10">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <motion.div
                    className="flex items-center gap-2 font-semibold text-foreground text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                      <Briefcase className="w-6 h-6 text-primary" /> Client: UltraTech
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 font-semibold text-foreground text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                      <Clock className="w-6 h-6 text-primary" /> Timeline: 48 Hours
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 font-semibold text-foreground text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                      <Layers className="w-6 h-6 text-primary" /> Type: Enterprise Portal
                  </motion.div>
              </div>
              
              <div className='space-y-4 text-muted-foreground'>
                <h3 className="text-xl font-bold text-foreground">The Challenge:</h3>
                <p className="leading-relaxed">UltraTech, India's largest cement manufacturer, needed a mission-critical certification portal for its vast dealer network—with an impossible 48-hour deadline.</p>
              </div>
              
              <div className='space-y-4 text-muted-foreground'>
                <h3 className="text-xl font-bold text-foreground">The Solution:</h3>
                <p className="leading-relaxed">Our lean-ops model and direct CTO involvement allowed us to architect and deploy a secure, scalable solution with parallel backend and frontend development, eliminating all communication bottlenecks.</p>
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg" className="group">
                    <Link href="/work/ultratech-shashwat">
                      Read the Full Case Study
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
