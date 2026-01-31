'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, hoverEffect = true, glowEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-2xl border bg-card text-card-foreground shadow-lg transition-all duration-500 ease-out relative overflow-hidden group',
          hoverEffect && 'hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02]',
          glowEffect && 'shadow-glow',
          'before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500',
          'before:bg-gradient-to-br before:from-primary/5 before:to-accent/5',
          'group-hover:before:opacity-100',
          className
        )}
        whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
EnhancedCard.displayName = 'EnhancedCard';

export { EnhancedCard };
