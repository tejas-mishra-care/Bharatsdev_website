'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { modelPillars } from "@/lib/data";
import Link from "next/link";
import React from 'react';
import { motion, useInView, type Easing } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export function Pillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
        <h2 className="text-foreground text-balance">
          Built for Speed. Engineered for Quality.
        </h2>
          <p className="large text-muted-foreground mt-4 mb-12 max-w-2xl mx-auto text-balance">
            Our lean-ops model is your competitive advantage.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {modelPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center p-4 md:p-6 h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="items-center relative z-10">
                    <motion.div
                      className="bg-secondary rounded-lg p-4 w-fit border-2 border-primary/20 group-hover:border-primary group-hover:shadow-lg transition-all duration-300"
                      whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                    <Icon className="h-12 w-12 text-primary" />
                    </motion.div>
                </CardHeader>
                  
                  <CardContent className="space-y-2 relative z-10">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {pillar.title}
                    </CardTitle>
                  <p className="text-muted-foreground text-base">{pillar.description}</p>
                </CardContent>
              </Card>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/about">
              Learn About Our Approach
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
