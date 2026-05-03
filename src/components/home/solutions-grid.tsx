'use client';

import { coreServices } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import React from 'react';
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

export function SolutionsGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-[#2A2A2E]">
            {/* Unique Background: Architect Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563EB] opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10 px-4">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={springTransition}
                >
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white text-balance">
                        Core Capabilities
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg max-w-2xl text-balance font-sans">
                        From strategy to launch, we deliver complete digital solutions built for scale and performance.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {coreServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="h-full"
                            >
                                <Link href="/services" className="block h-full group">
                                    <motion.div
                                        className="relative flex flex-col h-full p-10 bg-[#111113]/80 backdrop-blur-xl border border-[#2A2A2E] rounded-[2rem] transition-all duration-500 hover:border-[#2563EB]/50 overflow-hidden"
                                        whileHover={{ y: -8 }}
                                        transition={springTransition}
                                    >
                                        {/* Inner Glow Layer */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="p-3 bg-black rounded-md border border-[#222222] text-primary group-hover:text-white group-hover:bg-primary/10 transition-colors duration-300">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-[#222222] group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="text-muted-foreground mb-6 font-sans">
                                            {service.description}
                                        </p>
                                        
                                        <div className="space-y-2 pt-4 border-t border-[#222222] mt-auto">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-chrome mb-3">Key Deliverables</div>
                                            <ul className="space-y-2">
                                                {service.includes.slice(0, 3).map((item) => (
                                                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    className="mt-16 flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ...springTransition, delay: 0.4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={springTransition}
                    >
                        <Button asChild size="lg" className="bg-white text-black hover:bg-chrome font-semibold rounded-md h-12 px-8">
                            <Link href="/services" className="flex items-center gap-2">
                                Explore All Services
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
