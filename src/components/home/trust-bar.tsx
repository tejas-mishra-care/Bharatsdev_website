'use client';

import { trustLogos } from '@/lib/data';
import Image from 'next/image';
import { Zap, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const proofPoints = [
    {
        icon: Zap,
        stat: "48-Hour Delivery",
        description: "for enterprise-grade systems"
    },
    {
        icon: Target,
        stat: "100% Project-Based",
        description: "Zero retainers, just finished assets"
    },
    {
        icon: Users,
        stat: "Direct Founder Access",
        description: "Founder/CTO on every project call"
    }
]

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
      ease: [0.22, 1, 0.36, 1],
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

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-secondary/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-12 text-center items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
            {proofPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.stat}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                    <motion.div
                      className="bg-background p-4 rounded-full border-2 border-primary/20 shadow-lg relative overflow-hidden group"
                      whileHover={{ borderColor: 'hsl(var(--primary))', boxShadow: '0 0 20px hsl(var(--primary)/0.3)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="h-8 w-8 text-primary relative z-10" />
                    </motion.div>
                    <motion.p
                      className="text-2xl md:text-3xl font-bold text-foreground mt-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
                      whileHover={{ scale: 1.05 }}
                    >
                      {point.stat}
                    </motion.p>
                    <p className="text-muted-foreground">{point.description}</p>
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
        
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trustLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              custom={index}
              variants={logoVariants}
              whileHover="hover"
              className="relative h-10 w-36 grayscale transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                fill
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
