'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Box, Brain, Calculator, Clock } from 'lucide-react';

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

const caseStudies = [
  {
    title: "UltraTech Shashwat",
    category: "Enterprise Certification Portal",
    icon: Clock,
    color: "from-[#2563EB]",
    border: "group-hover:border-[#2563EB]/50",
    shadow: "hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]",
    description: "An industry-sponsored, enterprise-grade certification portal engineered and deployed in under 48 hours. The ultimate benchmark for speed and high-stress delivery.",
    tech: ["Next.js", "Node.js", "Enterprise Auth", "System Design"]
  },
  {
    title: "CareerCompassAI",
    category: "AI-Powered Navigator",
    icon: Brain,
    color: "from-[#10B981]",
    border: "group-hover:border-[#10B981]/50",
    shadow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    description: "A custom AI-powered tool built to navigate complex datasets, showcasing our capability in integrating intelligent systems into user-friendly platforms.",
    tech: ["OpenAI API", "React", "Vector DB", "Tailwind CSS"]
  },
  {
    title: "SieveLab & GhamelaCalc",
    category: "Industrial Engineering Tools",
    icon: Calculator,
    color: "from-[#F97316]",
    border: "group-hover:border-[#F97316]/50",
    shadow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]",
    description: "Precision custom engineering calculators built for niche industrial applications, proving our ability to translate complex mathematical logic into seamless web applications.",
    tech: ["Complex Math Logic", "TypeScript", "Data Visualization"]
  }
];

export default function WorkPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none blur-[50px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2E] bg-[#111113] mb-8">
              <Box className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">The Portfolio</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter text-white mb-6">
              THE PROOF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300">STANDARD.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-sans text-balance">
              We don't just talk about high-performance engineering. We ship it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative z-10 border-t border-[#2A2A2E] bg-[#050505]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div ref={ref} className="space-y-16">
            {caseStudies.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-[#111113] border border-[#2A2A2E] rounded-[2rem] p-10 md:p-16 overflow-hidden transition-all duration-700 ${project.border} ${project.shadow}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, ...springTransition }}
                >
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${project.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 bg-black rounded-xl border border-[#2A2A2E] group-hover:border-white/20 transition-colors`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                          {project.category}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-black font-heading text-white">
                        {project.title}
                      </h2>
                      
                      <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white backdrop-blur-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#2A2A2E] group-hover:border-white/20 transition-colors flex items-center justify-center">
                       {/* Placeholder for actual image */}
                       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
                       <span className="text-[#2A2A2E] font-black font-heading text-4xl uppercase tracking-widest absolute">UI / UX</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
