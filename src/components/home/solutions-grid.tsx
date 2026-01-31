'use client';

import { coreServices } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Check } from "lucide-react";
import React from 'react';
import { Badge } from "../ui/badge";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SolutionsGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            
            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                <h2 className="text-foreground text-balance">We Build the Systems That Drive Growth</h2>
                <p className="large text-muted-foreground mt-4 mb-12 max-w-2xl mx-auto text-balance">
                    From strategy to launch, we deliver complete digital solutions.
                </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {coreServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="flex flex-col h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <CardHeader className="relative z-10">
                                    <motion.div
                                        className="p-3 bg-secondary rounded-lg w-fit border-2 border-primary/20 group-hover:border-primary group-hover:shadow-lg transition-all duration-300 mb-4"
                                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                    <service.icon className="w-16 h-16 text-primary" />
                                    </motion.div>
                                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                            </CardHeader>
                                
                                <CardContent className="flex-grow space-y-4 relative z-10">
                                <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                                
                                <div className="space-y-2 pt-2">
                                    <p className="font-semibold text-foreground">What's Included:</p>
                                    <ul className="space-y-2">
                                            {service.includes.map((item, idx) => (
                                                <motion.li
                                                    key={item}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                    transition={{ delay: 0.4 + index * 0.15 + idx * 0.05, duration: 0.4 }}
                                                    className="flex items-center gap-2 text-muted-foreground text-sm group/item"
                                                >
                                                    <Check className="h-4 w-4 text-green-500 group-hover/item:scale-125 transition-transform" />
                                                    <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                                                </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4">
                                        <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold text-base group/link">
                                        <Link href={service.href}>
                                                Explore {service.title}
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Button asChild size="lg" variant="outline" className="group">
                        <Link href="/services">
                            Explore All Services
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
