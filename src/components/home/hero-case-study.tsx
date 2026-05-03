'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, Clock, Award, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const springTransition = {
  type: "spring",
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

const ultratechCaseStudy = PlaceHolderImages.find(p => p.id === 'case-study-ultratech');

export function HeroCaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A] border-t border-[#2A2A2E]">
      {/* Animated Hexagon Background & Glows */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDAgTCA0MCAxMCBMIDQwIDMwIEwgMjAgNDAgTCAwIDMwIEwgMCAxMCBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={springTransition}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#222222] bg-[#0A0A0A] mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-chrome text-xs font-semibold uppercase tracking-widest">
              The Proof Standard
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white text-balance">
            The 48-Hour UltraTech Delivery
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="relative grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 bg-[#111113]/80 backdrop-blur-2xl rounded-[2rem] border border-[#2A2A2E] shadow-2xl overflow-hidden group hover:border-[#2563EB]/40 transition-colors duration-500"
          >
            {/* Animated top stripe */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2563EB] via-[#F97316] to-[#2563EB] bg-[length:200%_auto] animate-gradient-x opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold font-heading tracking-tight text-white mb-4">
                  UltraTech Shashwat
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                  A highly complex, industry-sponsored enterprise tool built from scratch. We architected the entire system, integrated the backend logic, and deployed the production-ready portal in under 48 hours.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 border border-[#222222] rounded-md p-4 backdrop-blur-md">
                  <div className="text-primary mb-2"><Clock className="h-5 w-5" /></div>
                  <div className="text-2xl font-black text-white font-heading">48h</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-chrome mt-1">Delivery</div>
                </div>
                <div className="bg-white/5 border border-[#222222] rounded-md p-4 backdrop-blur-md">
                  <div className="text-indigoDeep mb-2"><Award className="h-5 w-5" /></div>
                  <div className="text-2xl font-black text-white font-heading">100%</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-chrome mt-1">Success</div>
                </div>
                <div className="bg-white/5 border border-[#222222] rounded-md p-4 backdrop-blur-md">
                  <div className="text-chrome mb-2"><ShieldCheck className="h-5 w-5" /></div>
                  <div className="text-2xl font-black text-white font-heading">Ent.</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-chrome mt-1">Grade</div>
                </div>
              </div>

              {/* Stack Tags */}
              <div className="space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-chrome">System Architecture</div>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Node.js', 'Enterprise Auth', 'System Design'].map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-[#222222] bg-black px-3 py-1.5 text-xs font-semibold text-white tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
                className="pt-4 inline-block w-full sm:w-auto"
              >
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-chrome font-semibold rounded-md h-12 px-8">
                  <Link href="/work/ultratech-shashwat" className="flex items-center gap-2">
                    View Complete Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants} 
              className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A2A2E] bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(37,99,235,0.2)] transition-shadow duration-500"
            >
              {ultratechCaseStudy ? (
                <Image
                  src={ultratechCaseStudy.imageUrl}
                  alt={ultratechCaseStudy.description}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#0A0A0A]">
                  <span className="text-[#222222] font-heading font-bold text-2xl tracking-widest uppercase">Dashboard UI</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
