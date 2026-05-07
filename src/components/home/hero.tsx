'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const springTransition = {
  type: "spring" as const,
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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse following
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax logic is removed as the geometric orbs are replaced by the video background.
  
  return (
    <section ref={ref} 
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        mouseX.set(moveX);
        mouseY.set(moveY);
      }}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden pt-20 border-b border-[#2A2A2E] cursor-crosshair"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto text-left relative z-10 px-4 md:px-12 w-full max-w-7xl">

        {/* Lusion x Virgil Abloh Typographic layout */}
        <div className="relative mb-16">
          <p className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
            [ BharatsDev ] // "SCALING NOT A SECRET"
          </p>
          <h1 className="text-balance text-5xl sm:text-7xl md:text-[100px] lg:text-[130px] font-black font-heading tracking-tighter leading-[0.85] uppercase">
            <span className="block text-white">Architect</span>
            <span className="block ml-[5%] md:ml-[10%] text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#F97316] relative z-10">
              The System<span className="text-white text-3xl md:text-6xl align-top">©</span>
            </span>
          </h1>
          
          {/* Decorative graphic like Virgil's quotation marks or crossing lines */}
          <div className="absolute top-[30%] right-[10%] opacity-20 pointer-events-none hidden md:block">
             <div className="w-[300px] h-[300px] border border-dashed border-white rounded-full flex items-center justify-center">
               <div className="w-[150px] h-[1px] bg-white rotate-45 absolute" />
               <div className="w-[150px] h-[1px] bg-white -rotate-45 absolute" />
             </div>
          </div>
        </div>

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
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        >
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{ willChange: 'opacity, transform' }}
            className="max-w-md text-balance text-sm md:text-base text-zinc-400 leading-relaxed font-mono uppercase tracking-wide"
          >
            "STOP GUESSING HOW TO GROW. MOST BRANDS DROWN IN MANUAL TRACKING. 
            WE REPLACE THE GUESSWORK WITH HIGH-SPEED INFRASTRUCTURE. 
            SYNC YOUR DATA, AUTOMATE YOUR WORKFLOWS."
          </motion.p>

          {/* CTA Buttons - Using the Antigravity Design System */}
          <motion.div variants={itemVariants} style={{ willChange: 'opacity, transform' }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-20">
            <Link href="/contact" className="group">
              <div className="card-cut layer-3-teal px-8 py-5 flex items-center justify-between min-w-[220px]">
                <span className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-[#00dcc8] transition-colors">Start Project</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="/work" className="group">
              <div className="card-cut layer-2 px-8 py-5 flex items-center justify-between min-w-[220px]">
                <span className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-[#a78bfa] transition-colors">View Standard</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fade out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
    </section>
  );
}
