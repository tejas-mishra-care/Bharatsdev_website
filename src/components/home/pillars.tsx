'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Zap, Box } from 'lucide-react';

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

const processSteps = [
  {
    icon: FileText,
    title: "Scope & Strategy",
    description: "We don't start coding blindly. We define the exact problem, outline the technical blueprint, and lock in the timeline."
  },
  {
    icon: Zap,
    title: "High-Speed Engineering",
    description: "Execution begins immediately. We deploy a lean, elite team to build the asset with zero bloated overhead and constant transparency."
  },
  {
    icon: Box,
    title: "Final Asset Handover",
    description: "We deliver a finished, production-ready product. No open-ended retainers. You receive the keys, the code, and full ownership."
  }
];

export function Pillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[#121214] relative overflow-hidden border-t border-[#2A2A2E]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent z-10" />
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {isInView && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={springTransition}
          className="mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#222222] bg-[#0A0A0A] mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-chrome text-xs font-semibold uppercase tracking-widest">
              The BharatsDev Way
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white text-balance">
            One-Time Project Delivery
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto text-balance font-sans">
            We don't do retainers. We build, we hand over the keys, you own it.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connecting Line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-[#F97316]/30 to-transparent z-0 -translate-y-1/2 -ml-4" />
                )}

                <motion.div
                  className="bg-[#18181B] border border-[#2A2A2E] text-left p-10 h-full relative z-10 group overflow-hidden rounded-[2rem] transition-all duration-500 hover:border-[#F97316]/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)]"
                  transition={springTransition}
                >
                  <div className="absolute -right-4 -bottom-8 text-[180px] font-black text-white/[0.02] group-hover:text-[#F97316]/10 transition-colors duration-500 font-heading pointer-events-none z-0 leading-none">
                    {index + 1}
                  </div>

                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="bg-black border border-[#2A2A2E] p-4 rounded-xl group-hover:border-[#F97316]/50 group-hover:bg-[#F97316]/10 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-[#F97316]" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold font-heading text-white mb-4 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-sans">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
