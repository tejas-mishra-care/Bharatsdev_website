'use client';

import { portfolio } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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

export function MoreProof() {
    const projectsToShow = portfolio.featured.slice(1, 4);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            
            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-foreground text-balance">Built for Impact</h2>
                    <p className="large text-muted-foreground mt-4 mb-12 max-w-2xl mx-auto text-balance">
                        A selection of our recent work.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projectsToShow.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="text-left overflow-hidden group h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-500 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {project.image && (
                                    <div className="aspect-video overflow-hidden relative">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={project.image.imageUrl}
                                                alt={project.image.description}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </motion.div>
                                    </div>
                                )}
                                
                                <CardContent className="p-6 space-y-3 flex-grow relative z-10">
                                    <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.techStack?.split(', ').map(tech => (
                                            <Badge key={tech} variant="secondary" className="group-hover/badge:bg-primary/10 group-hover/badge:text-primary transition-colors">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                
                                <div className="p-6 pt-0 relative z-10">
                                    <Button asChild variant="link" className="p-0 font-semibold group/link">
                                        <Link href={`/work/${project.id}`}>
                                            View Project
                                            <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Button asChild size="lg" className="group">
                        <Link href="/work">
                            View All Projects
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
