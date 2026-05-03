'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Megaphone, MonitorPlay, Award } from 'lucide-react';

const springTransition = { type: "spring", stiffness: 300, damping: 25 };

export default function StudentHubPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const roles = [
    {
      title: "Campus Ambassadors",
      icon: Users,
      color: "text-[#2563EB]",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/30",
      desc: "Lead generation and networking. Be the bridge between your university and high-performance engineering."
    },
    {
      title: "Social Media Strategists",
      icon: Megaphone,
      color: "text-[#F97316]",
      bg: "bg-[#F97316]/10",
      border: "border-[#F97316]/30",
      desc: "Drive the brand narrative and expand our digital footprint across LinkedIn and Twitter."
    },
    {
      title: "Technical Evangelists",
      icon: MonitorPlay,
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
      border: "border-[#10B981]/30",
      desc: "Demonstrate our enterprise tools (like CareerCompassAI) directly to students and faculties."
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_60%)] pointer-events-none blur-[50px]" />
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F97316]/40 bg-[#F97316]/10 mb-8">
              <Award className="w-4 h-4 text-[#F97316]" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Student Program</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-white mb-6">
              DECENTRALIZED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#2563EB]">
                DIGITAL GROWTH.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-sans text-balance mb-12">
              We are building a decentralized digital growth team on university campuses. Gain high-value agency experience, official Certificates of Excellence, and direct exposure to enterprise tech.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-[#0A0A0A] border-t border-[#2A2A2E] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, ...springTransition }}
                  className={`bg-[#111113] border border-[#2A2A2E] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${role.bg} ${role.border} border flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${role.color}`} />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-white mb-4">{role.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-sans">{role.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
