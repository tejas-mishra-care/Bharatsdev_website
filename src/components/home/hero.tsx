'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden pt-20 border-b border-[#2A2A2E]">
      
      {/* Dynamic Geometric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive Glowing Orb */}
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)] rounded-full blur-[80px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
        />
        
        {/* Secondary Orange Orb */}
        <motion.div 
          className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_60%)] rounded-full blur-[100px]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform' }}
        />

        {/* Rotating Dashed Ring */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-[#2563EB]/20 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-dashed border-[#F97316]/10 opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        />
        
        {/* Floating Geometric Parallax Shapes */}
        <motion.div style={{ y: y1, willChange: 'transform' }} className="absolute top-[20%] left-[10%] w-24 h-24 border-4 border-[#2563EB]/30 rounded-xl rotate-12 backdrop-blur-sm" />
        <motion.div style={{ y: y2, willChange: 'transform' }} className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full border border-[#F97316]/40 backdrop-blur-md" />
        
        {/* Architect Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto text-center relative z-10 px-4">

        {/* H1 rendered immediately — no JS-gated opacity for instant LCP */}
        <h1
          className="text-balance mb-8 text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-black font-heading tracking-tighter leading-[0.9]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">ARCHITECT</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#F97316] relative">
            THE FUTURE
            <div className="absolute -bottom-4 left-0 w-full h-[6px] bg-[#F97316] rounded-full blur-[2px] opacity-70" />
          </span>
        </h1>

        {/* Secondary elements animate in after LCP */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
          className="flex flex-col items-center"
        >
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{ willChange: 'opacity, transform' }}
            className="max-w-3xl mx-auto mb-12 text-balance text-xl md:text-2xl text-zinc-400 leading-relaxed font-sans font-medium"
          >
            Finished assets. No retainers. Elite execution built for speed and scale. 
            Delivering highly complex enterprise tools in under 48 hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} style={{ willChange: 'opacity, transform' }} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springTransition} style={{ willChange: 'transform' }}>
              <Button asChild size="lg" className="h-16 px-10 bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.4)] border-2 border-[#2563EB]/50 transition-all text-lg">
                <Link href="/contact" className="flex items-center gap-3">
                  Start a Project <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springTransition} style={{ willChange: 'transform' }}>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 font-bold border-2 border-[#2A2A2E] hover:border-white/20 rounded-xl transition-all text-lg">
                <Link href="/work">
                  View the Standard
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fade out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
    </section>
  );
}
