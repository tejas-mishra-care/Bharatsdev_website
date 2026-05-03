'use client';

import { Linkedin, Twitter, Instagram } from 'lucide-react';
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
    <footer className="bg-black text-chrome border-t border-[#222222] relative overflow-hidden">
      <div
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" prefetch={true} className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black font-heading text-white tracking-tight">Bharats<span className="text-primary">Dev</span></span>
            </Link>
            <p className="max-w-md mb-8 text-chrome text-sm leading-relaxed font-sans">
              Your complete digital growth engine. We build high-performance, finished digital assets.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      className="bg-[#0A0A0A] text-chrome h-10 w-10 flex items-center justify-center rounded-md border border-[#222222] hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-chrome hover:text-primary transition-colors text-sm font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-chrome hover:text-primary transition-colors text-sm font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@bharatsdev.com" className="text-chrome hover:text-primary transition-colors text-sm font-sans">
                  contact@bharatsdev.com
                </a>
              </li>
              <li>
                <a href="tel:+917077130651" className="text-chrome hover:text-primary transition-colors text-sm font-sans">
                  +91 70771 30651
                </a>
              </li>
              <li className="text-chrome text-sm font-sans">
                Chhatrapati Sambhajinagar, India. Serving globally.
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center text-xs text-chrome"
          variants={itemVariants}
        >
          <p className="mb-4 md:mb-0 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} BharatsDev. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {bottomLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors uppercase tracking-widest">
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
