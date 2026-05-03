'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const technologies = [
  { name: 'React' }, { name: 'Next.js' }, { name: 'Node.js' }, { name: 'Python' },
  { name: 'Flutter' }, { name: 'AWS' }, { name: 'TensorFlow' }, { name: 'MongoDB' },
  { name: 'PostgreSQL' }, { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'TypeScript' }
];

export function TechStackShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-[#2A2A2E] relative overflow-hidden flex flex-col items-center">
      {/* Glowing horizontal scanner line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-50" />
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-[2px] bg-[#06B6D4] blur-[2px]"
        animate={{ x: ["-100%", "300%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-[#06B6D4]" />
            <span className="text-[#06B6D4] text-sm font-bold uppercase tracking-[0.3em]">Engineered With</span>
            <div className="w-8 h-[1px] bg-[#06B6D4]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            Tomorrow's Technology
          </h2>
        </motion.div>

        {/* Infinite Infinite Hexagon Marquee */}
        <div ref={ref} className="relative w-full max-w-7xl mx-auto overflow-hidden py-10">
          
          {/* Left/Right Fades */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 md:gap-10 items-center w-max"
            animate={isInView ? { x: [0, -1920] } : {}}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="relative group w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
              >
                {/* Abstract Hexagon SVG background */}
                <svg className="absolute inset-0 w-full h-full text-[#2A2A2E] group-hover:text-[#06B6D4]/30 transition-colors duration-500" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                
                {/* Glowing inner node */}
                <div className="absolute w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-[#06B6D4] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300" />
                
                <span className="relative z-10 text-zinc-400 group-hover:text-white font-bold tracking-wider font-heading text-lg md:text-xl transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/services" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#2A2A2E] hover:border-[#06B6D4]/50 bg-[#111113] text-zinc-300 hover:text-white transition-all group">
            <span className="text-sm font-bold uppercase tracking-widest">Explore Architecture</span>
            <div className="w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center group-hover:bg-[#06B6D4] transition-colors">
              <svg className="w-3 h-3 text-[#06B6D4] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
