'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Users, Target, Shield } from 'lucide-react';
import Image from 'next/image';

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const team = [
    {
      name: "Tejas Mishra",
      role: "Founder, CEO & CTO",
      desc: "Leading technical strategy, system architecture, and rigorous quality assurance. Engineering digital systems built for extreme speed and scale.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" // High quality placeholder
    },
    {
      name: "Shristi Mishra",
      role: "Project Manager",
      desc: "Leading client success, operational flow, and project tracking to ensure seamless, uncompromising delivery of every asset.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" // High quality placeholder
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-[#2A2A2E]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 backdrop-blur-md mb-8">
              <Terminal className="w-4 h-4 text-[#2563EB]" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Our Protocol</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-heading tracking-tighter text-white mb-8 drop-shadow-2xl">
              DEATH TO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#F97316]">
                RETAINERS.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The Origin & Mission */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="bg-[#111113]/80 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-[#2A2A2E] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F97316] opacity-10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#1A1A1D] border border-[#2A2A2E] flex items-center justify-center mb-10 shadow-xl">
                <Target className="w-8 h-8 text-[#F97316]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-white mb-8">
                The Origin & Mission
              </h2>
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-sans font-medium">
                BharatsDev was founded to eliminate the bloat and endless retainers of the traditional agency model. Our mission is simple: We act as your <strong className="text-white">Complete Digital Growth Engine</strong>, engineering high-performance, intelligent digital systems that drive lasting impact. 
              </p>
              <div className="mt-10 inline-block px-6 py-3 bg-[#F97316]/10 border border-[#F97316]/30 rounded-lg text-[#F97316] font-bold tracking-widest uppercase text-sm">
                We build it. We hand over the keys. You own the asset.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Leadership Team */}
      <section className="py-32 bg-[#0A0A0A] border-t border-[#2A2A2E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
              THE ARCHITECTS
            </h2>
            <div className="w-24 h-2 bg-[#2563EB] mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group [perspective:2000px] h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, ...springTransition }}
              >
                <div className="bg-[#111113] border border-[#2A2A2E] rounded-[2rem] p-8 h-full relative [transform-style:preserve-3d] transition-all duration-500 hover:border-[#2563EB]/50 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 blur-[50px] group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  
                  <div className="relative z-10 [transform:translateZ(40px)]">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-[#2A2A2E] group-hover:border-[#2563EB] transition-colors relative">
                      <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    
                    <h3 className="text-3xl font-black font-heading text-white mb-2">{member.name}</h3>
                    <p className="text-[#2563EB] font-bold uppercase tracking-widest text-sm mb-6">{member.role}</p>
                    <p className="text-zinc-400 text-lg leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
