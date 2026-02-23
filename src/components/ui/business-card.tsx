'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Smartphone, Compass, Monitor, Zap } from 'lucide-react';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';

export function BusinessCard() {
    return (
        <div className="group perspective-1000 w-[350px] h-[500px] mx-auto">
            <motion.div
                className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180"
                whileHover={{ scale: 1.02 }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-border/20 flex flex-col items-center p-8 text-charcoal">
                    {/* Top Decorative Elements */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-[hsl(var(--charcoal))] flex opacity-90">
                        <div className="flex-1 bg-gradient-to-br from-primary to-accent opacity-20" />
                        <div className="w-1/2 bg-[hsl(var(--vibrant-orange))] rounded-bl-[5rem] translate-x-10" />
                    </div>

                    {/* Logo Circle */}
                    <div className="relative z-10 mt-12 mb-6">
                        <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-inner-glow relative overflow-hidden border-4 border-white">
                            <Logo className="w-16 h-16 text-white" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    <div className="text-center z-10">
                        <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">Bharats<span className="text-primary">Dev</span></h2>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">Your Complete Digital Growth Engine</p>

                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] font-bold text-primary border-y border-primary/10 py-2 mb-8 uppercase tracking-tight">
                            <span>App Development</span>
                            <span className="text-muted-foreground">•</span>
                            <span>Strategy & Design</span>
                            <span>Web & E-commerce</span>
                            <span className="text-muted-foreground">•</span>
                            <span>Enterprise AI</span>
                        </div>

                        <div className="space-y-4 text-left w-full pl-4">
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <div className="w-8 h-8 rounded-full border-4 border-vibrant-orange flex items-center justify-center text-vibrant-orange">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+91 70771 30651</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <div className="w-8 h-8 rounded-full border-4 border-vibrant-orange flex items-center justify-center text-vibrant-orange">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+91 92095 12356</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <div className="w-8 h-8 rounded-full border-4 border-vibrant-orange flex items-center justify-center text-vibrant-orange">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>contact@bharatsdev.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <div className="w-8 h-8 rounded-full border-4 border-vibrant-orange flex items-center justify-center text-vibrant-orange">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <span>www.bharatsdev.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-16 flex">
                        <div className="w-2/3 bg-primary rounded-tr-[4rem]" />
                        <div className="w-1/3 bg-[hsl(var(--vibrant-orange))] -translate-y-2 translate-x-2" />
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden bg-[hsl(var(--charcoal))] shadow-2xl border border-white/10 p-8 flex flex-col items-center justify-center text-white">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-vibrant-orange/20 rounded-full blur-[100px]" />
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="relative z-10 w-48 h-48 bg-white p-4 rounded-3xl shadow-glow mb-8 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full border-4 border-primary/20 flex items-center justify-center relative">
                            {/* Simulated QR Pattern */}
                            <div className="grid grid-cols-4 gap-2 opacity-80">
                                <div className="w-8 h-8 bg-primary rounded-lg" />
                                <div className="w-8 h-8 bg-vibrant-orange rounded-lg" />
                                <div className="w-8 h-8 bg-primary rounded-lg" />
                                <div className="w-8 h-8 bg-vibrant-orange rounded-lg" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-primary rounded-full border-4 border-white flex items-center justify-center">
                                    <Logo className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 text-center uppercase">
                        <div className="bg-[#7C3AED] px-10 py-2 rounded-lg mb-6 relative overflow-hidden">
                            <span className="relative z-10 font-black text-2xl tracking-tight">Bharats Dev</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                        </div>

                        <h4 className="text-[hsl(var(--vibrant-orange))] font-black text-2xl tracking-tighter mb-8 italic">SCAN FOR PORTFOLIO</h4>

                        <div className="flex gap-4 text-[10px] font-bold text-white/60 tracking-widest">
                            <span>STRATEGY</span>
                            <span>•</span>
                            <span>APP & WEB</span>
                            <span>•</span>
                            <span>ENTERPRISE AI</span>
                        </div>
                    </div>

                    {/* Design accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -rotate-45 translate-x-12 -translate-y-12" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-vibrant-orange/10 rotate-45 -translate-x-12 translate-y-12" />
                </div>
            </motion.div>
        </div>
    );
}
