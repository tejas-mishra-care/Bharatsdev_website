'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

function StatCounter({ value, suffix = '+', prefix = '', duration = 2, label }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCounter value={500} suffix="+" label="Projects Delivered" />
          <StatCounter value={200} suffix="+" label="Happy Clients" />
          <StatCounter value={50} suffix="+" label="AI Integrations" />
          <StatCounter value={99} suffix="%" label="Success Rate" />
        </div>
      </div>
    </section>
  );
}
