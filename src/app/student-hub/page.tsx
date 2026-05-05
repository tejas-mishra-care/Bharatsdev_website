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
      <section className="relative pt-40 pb-32 flex items-center justify-center min-h-screen overflow-hidden border-b border-[#2A2A2E]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-50 z-10" />
        
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
            
            <div className="flex justify-center gap-4">
              <a 
                href="/admin" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Admin Login →
              </a>
            </div>
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
                  className="card-cut p-8 layer-2"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50" />
                  
                  <div className={`w-16 h-16 rounded-[16px] ${role.bg} ${role.border} border flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${role.color}`} />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-white mb-4">{role.title}</h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed font-sans">{role.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
