'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Compass, Smartphone, Monitor, HardHat, ShieldCheck, Rocket, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

const coreServices = [
  {
    id: "strategy",
    icon: Compass,
    title: "Strategy & Design",
    subtitle: "The Blueprint",
    description: "We provide the one-time blueprint for your project before we build. No guesswork.",
    features: ["Brand Identity & Assets", "UI/UX Prototyping", "Digital Strategy & Audit", "Technology Advisory"],
    colSpan: "lg:col-span-8",
    color: "from-[#2563EB]/20 to-transparent",
    accent: "text-[#2563EB]"
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "App Dev",
    subtitle: "Mobile & Web",
    description: "We engineer high-performance applications from start to finish.",
    features: ["Native iOS & Android", "React Native & Flutter", "Progressive Web Apps"],
    colSpan: "lg:col-span-4",
    color: "from-[#F97316]/20 to-transparent",
    accent: "text-[#F97316]"
  },
  {
    id: "web",
    icon: Monitor,
    title: "Web & E-commerce",
    subtitle: "Conversion First",
    description: "We build high-performance websites focused on conversion and precision.",
    features: ["Custom Web Apps", "Shopify & WooCommerce", "Headless CMS"],
    colSpan: "lg:col-span-4",
    color: "from-[#06B6D4]/20 to-transparent",
    accent: "text-[#06B6D4]"
  },
  {
    id: "enterprise",
    icon: HardHat,
    title: "Custom Enterprise",
    subtitle: "System Architecture",
    description: "We build and modernize the complex tools that run your business at scale.",
    features: ["AI-Powered Tools", "Custom CRM/ERP", "Legacy Modernization", "Certification Portals"],
    colSpan: "lg:col-span-8",
    color: "from-[#10B981]/20 to-transparent",
    accent: "text-[#10B981]"
  }
];

const specializedServices = [
  {
    icon: ShieldCheck,
    title: "Setups & Audits",
    description: "One-time technical services to support, test, and protect your project.",
    features: ["WhatsApp API Setup", "Security Patching", "Load Testing", "Cloud Cost Audit"],
    color: "border-[#2563EB]"
  },
  {
    icon: Rocket,
    title: "Launch & Handover",
    description: "The final step. Everything you need to take ownership of your asset.",
    features: ["AI Media Pack", "Technical SEO", "Analytics Setup", "App Store Deployment"],
    color: "border-[#F97316]"
  }
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  const coreRef = useRef(null);
  const coreInView = useInView(coreRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* 3D Hero Section */}
      <section className="relative pt-40 pb-32 flex items-center justify-center min-h-screen overflow-hidden border-b border-[#2A2A2E]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        
        <motion.div
          className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-[#F97316]" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
              The Official Catalog
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 drop-shadow-2xl">
            DIGITAL<br />WEAPONS.
          </h1>
          
          <p className="text-xl md:text-3xl text-zinc-400 max-w-3xl mx-auto font-sans text-balance leading-relaxed tracking-tight">
            We don't do retainers. We engineer <span className="text-white font-semibold">finished assets</span>.
          </p>
        </motion.div>
      </section>

      {/* High-Fidelity Bento Grid */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tight">
              CORE CAPABILITIES
            </h2>
            <div className="w-24 h-2 bg-[#2563EB] mt-6 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
          </div>

          <motion.div
            ref={coreRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
            initial="hidden"
            animate={coreInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className={`${service.colSpan} relative group [perspective:2000px]`}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: springTransition }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#F97316] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-[2rem]" />
                  
                  <div className={`h-full w-full rounded-[2rem] bg-[#111113] border border-[#2A2A2E] p-8 md:p-12 overflow-hidden relative [transform-style:preserve-3d] transition-all duration-500 ease-out group-hover:[transform:rotateX(2deg)_rotateY(-2deg)] group-hover:border-[#2563EB]/50 group-hover:shadow-2xl`}>
                    
                    {/* Background Graphic */}
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.color} opacity-30 pointer-events-none`} />
                    <Icon className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:text-white/10 transition-colors duration-500 pointer-events-none" />

                    <div className="relative z-10 h-full flex flex-col [transform:translateZ(40px)]">
                      <div className="mb-auto">
                        <div className={`w-14 h-14 rounded-2xl bg-[#1A1A1D] border border-[#2A2A2E] flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className={`w-7 h-7 ${service.accent}`} />
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-black font-heading text-white mb-2 tracking-tight">
                          {service.title}
                        </h3>
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] mb-6 ${service.accent}`}>
                          {service.subtitle}
                        </p>
                        
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 backdrop-blur-md">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Specialized Services - 3D Hover Cards */}
      <section className="py-32 bg-[#141416] border-t border-[#2A2A2E] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
              LAUNCH PROTOCOLS
            </h2>
            <p className="text-xl text-zinc-400">Specialized technical services to test, protect, and deploy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group [perspective:2000px] h-[400px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, ...springTransition }}
                >
                  <div className={`h-full w-full rounded-3xl bg-black border-2 border-[#2A2A2E] group-hover:${service.color} p-10 relative [transform-style:preserve-3d] transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]`}>
                    
                    <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 rounded-3xl" />
                    
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center [transform:translateZ(50px)]">
                      <div className={`w-20 h-20 rounded-full bg-[#1A1A1D] border border-[#2A2A2E] flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-500`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-black font-heading text-white mb-4">{service.title}</h3>
                      <p className="text-zinc-400 mb-8 max-w-sm">{service.description}</p>
                      
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-xs font-bold uppercase tracking-wider text-white/70 bg-white/10 px-3 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center text-center border-t border-[#2A2A2E]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2563EB]/10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-black font-heading text-white tracking-tighter mb-8 drop-shadow-xl">
            BUILD IT ONCE.<br />BUILD IT RIGHT.
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springTransition}>
            <Button asChild size="lg" className="h-16 px-10 bg-[#F97316] hover:bg-[#EA580C] text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] border-2 border-[#F97316]/50 transition-all">
              <Link href="/contact" className="flex items-center gap-3">
                Initialize Project <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
