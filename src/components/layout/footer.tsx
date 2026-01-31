'use client';

import { Linkedin, Phone, Twitter, Github } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const servicesLinks = [
  { href: '/services/strategy-design', label: 'Strategy & Design' },
  { href: '/services/app-development', label: 'App Development' },
  { href: '/services/web-ecommerce', label: 'Website & E-commerce' },
  { href: '/services/enterprise-solutions', label: 'Enterprise Solutions' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const bottomLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
]

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
      duration: 0.5,
    },
  },
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-foreground text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <motion.div
          ref={ref}
          className="container mx-auto px-4 py-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <Link href="/" prefetch={true} className="flex items-center gap-3 mb-4">
                <Logo className="h-10 w-10" />
                <span className="text-xl font-bold text-white">Bharats<span className="text-primary">Dev</span></span>
              </Link>
            </motion.div>
            <p className="max-w-md mb-6 text-gray-400 text-sm leading-relaxed">
              Your complete digital growth engine. We build high-performance, finished digital assets.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                  >
                    <Link
                        href={social.href}
                        aria-label={social.label}
                        className="bg-gray-700/50 backdrop-blur-sm text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary border border-gray-600 hover:border-primary transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                >
                  <Link
                      href={link.href}
                      prefetch={true}
                      className="text-gray-400 hover:text-white transition-colors text-base group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                >
                  <Link
                      href={link.href}
                      prefetch={true}
                      className="text-gray-400 hover:text-white transition-colors text-base group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">Contact</h3>
             <ul className="space-y-3">
                <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <a href="mailto:hello@bharatsdev.com" className="text-gray-400 hover:text-white transition-colors text-base group flex items-center gap-2">
                    <span className="group-hover:translate-x-1 transition-transform">hello@bharatsdev.com</span>
                  </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-base group flex items-center gap-2">
                    <span className="group-hover:translate-x-1 transition-transform">+91 [phone number]</span>
                  </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-gray-500 text-base"
                >
                  Chhatrapati Sambhajinagar, India. Serving globally.
                </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
            className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BharatsDev. All rights reserved.
          </p>
          <div className="flex space-x-6">
             {bottomLinks.map((link, index) => (
                <motion.div
                    key={link.label}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                  <Link href={link.href} className="text-gray-500 hover:text-white transition-colors">
                      {link.label}
                  </Link>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
