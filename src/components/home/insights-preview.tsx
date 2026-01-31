'use client';

import { insights } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function InsightsPreview() {
    const featuredInsight = insights.find(i => i.isFeatured);
    const otherInsights = insights.filter(i => !i.isFeatured).slice(0, 2);

    if (!featuredInsight) return null;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 px-4 bg-background relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-30" />
            
            <div className="container mx-auto relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-foreground text-balance">Insights from Our Founder</h2>
                    <p className="large text-muted-foreground mt-4 max-w-2xl mx-auto text-balance">
                        Technical strategy, project post-mortems, and industry analysis.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid lg:grid-cols-2 gap-8 items-start"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Featured Article */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                    >
                        <Card className="group overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-500 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                        <Link href={`/insights/${featuredInsight.slug}`} prefetch={true}>
                            {featuredInsight.image && (
                                    <div className="aspect-video overflow-hidden relative">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative w-full h-full"
                                        >
                                     <Image
                                        src={featuredInsight.image.imageUrl}
                                        alt={featuredInsight.image.description}
                                        width={800}
                                        height={450}
                                                className="w-full h-full object-cover"
                                    />
                                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </motion.div>
                                </div>
                            )}
                                <CardContent className="p-6 space-y-3 relative z-10">
                                <p className="text-sm text-primary font-semibold">{featuredInsight.readTime}</p>
                                <h3 className="text-2xl text-foreground group-hover:text-primary transition-colors">{featuredInsight.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{featuredInsight.excerpt}</p>
                            </CardContent>
                        </Link>
                    </Card>
                    </motion.div>

                    {/* Other Articles */}
                    <div className="space-y-8">
                        {otherInsights.map((insight, index) => (
                            <motion.div
                                key={insight.slug}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.01 }}
                            >
                                <Card className="group flex flex-col sm:flex-row overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <Link href={`/insights/${insight.slug}`} prefetch={true} className="flex flex-col sm:flex-row w-full relative z-10">
                                    {insight.image && (
                                        <div className="sm:w-1/3 aspect-video sm:aspect-square overflow-hidden">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="relative w-full h-full"
                                                >
                                            <Image
                                                src={insight.image.imageUrl}
                                                alt={insight.image.description}
                                                width={400}
                                                height={400}
                                                        className="w-full h-full object-cover"
                                            />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </motion.div>
                                        </div>
                                    )}
                                    <CardContent className="p-6 space-y-2 flex flex-col justify-center sm:w-2/3">
                                        <p className="text-sm text-primary font-semibold">{insight.readTime}</p>
                                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{insight.title}</h4>
                                    </CardContent>
                                </Link>
                            </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Button asChild size="lg" variant="outline" className="group">
                        <Link href="/insights" prefetch={true}>
                            Read More Insights
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
