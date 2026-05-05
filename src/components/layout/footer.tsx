'use client';

import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const servicesLinks = [
  { href: '/services/strategy-design', label: 'Strategy & Design' },
  { href: '/services/app-development', label: 'App Development' },
  { href: '/services/web-ecommerce', label: 'Website & E-commerce' },
  { href: '/services/enterprise-solutions', label: 'Enterprise Solutions' },
];

const companyLinks = [
  { href: '/student-hub', label: 'Student Hub' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const bottomLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", stiffness: 400, damping: 30
    },
  },
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-[#050505] text-chrome border-t border-[#2A2A2E] relative overflow-hidden pt-24 pb-8">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-[#2563EB]/10 via-[#F97316]/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link href="/" prefetch={true} className="flex items-center gap-2 mb-6 inline-block">
              <span className="text-3xl font-black font-heading text-white tracking-tight">Bharats<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#F97316]">Dev</span></span>
            </Link>
            <p className="max-w-sm mb-8 text-zinc-400 text-sm leading-relaxed font-sans">
              Your complete digital growth engine. We build high-performance, finished digital assets for visionaries and enterprises.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/109890130/', label: 'LinkedIn', color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]' },
                { icon: Twitter, href: 'https://twitter.com/bharatsdev', label: 'Twitter', color: 'hover:bg-white hover:text-black hover:border-white' },
                { icon: Instagram, href: 'https://www.instagram.com/bharatsdev/', label: 'Instagram', color: 'hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:border-transparent' },
                { icon: Youtube, href: 'https://www.youtube.com/@bharatsdev', label: 'YouTube', color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      className={`bg-black text-zinc-400 h-12 w-12 flex items-center justify-center rounded-full border border-[#2A2A2E] transition-all duration-300 hover:text-white ${social.color} shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-xs">Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-sans flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-xs">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-sans flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-0 bg-[#F97316] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-xs">Headquarters</h3>
            <ul className="space-y-5">
              <li>
                <a href="mailto:contact@bharatsdev.com" className="text-zinc-400 hover:text-white transition-colors text-sm font-sans inline-block border-b border-[#2A2A2E] hover:border-white pb-1">
                  contact@bharatsdev.com
                </a>
              </li>
              <li>
                <a href="tel:+917077130651" className="text-zinc-400 hover:text-white transition-colors text-sm font-sans inline-block border-b border-[#2A2A2E] hover:border-white pb-1">
                  +91 70771 30651
                </a>
              </li>
              <li className="text-zinc-500 text-sm font-sans leading-relaxed pt-2 border-t border-[#2A2A2E]">
                Chhatrapati Sambhajinagar, Maharashtra, India.<br />
                Operating Globally.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Huge Background Typography */}
        <div className="w-full overflow-hidden flex justify-center items-center select-none pointer-events-none mb-8 opacity-[0.02]">
          <h2 className="text-[12vw] font-black font-heading tracking-tighter leading-none text-white whitespace-nowrap">
            BHARATSDEV
          </h2>
        </div>

        <motion.div
          className="pt-8 border-t border-[#2A2A2E] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono uppercase tracking-widest"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} BHARATSDEV. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            {bottomLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
