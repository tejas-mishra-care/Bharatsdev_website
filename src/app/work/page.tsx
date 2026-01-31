
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { portfolio } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

const featuredProject = portfolio.featured[0];
const otherProjects = portfolio.all;

const uniqueCategories = [
  'All',
  ...Array.from(new Set(otherProjects.map(p => p.category))),
];

const ProjectCard = ({ project, index }: { project: typeof otherProjects[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <Link href={`/work/${project.id}`} className="group block h-full">
                <Card className="text-left overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-500 relative">
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
                                    data-ai-hint={project.image.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </div>
                    )}
                    <CardContent className="p-6 space-y-3 flex-grow relative z-10">
                        <Badge variant="secondary" className="mb-2 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                         <div className="flex flex-wrap gap-2 pt-2">
                            {project.techStack?.split(', ').map(tech => (
                                <Badge key={tech} variant="outline" className="group-hover/badge:border-primary/50 group-hover/badge:text-primary transition-colors">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                    <div className="p-6 pt-0 relative z-10">
                        <span className="font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                            View Case Study
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
};

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  
  const sortedProjects = useMemo(() => {
    const projects = activeTab === 'All' 
      ? otherProjects 
      : otherProjects.filter(p => p.category === activeTab);
    
    // Simple sort - in real app, implement actual sorting logic
    return projects;
  }, [activeTab]);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 text-center bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
            ref={heroRef}
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance">Proof Over Promises</h1>
          <p className="large max-w-3xl mx-auto mt-6 text-balance">
            We don't sell services, we deliver finished assets. Every project is a testament to our speed, quality, and technical precision.
          </p>
        </motion.div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <Card className="grid md:grid-cols-2 items-center overflow-hidden border-2 border-primary/50 shadow-2xl hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                        className="relative aspect-[4/3] md:aspect-auto md:h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        {featuredProject.image && (
                             <Image
                                src={featuredProject.image.imageUrl}
                                alt={featuredProject.image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={featuredProject.image.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <div className="p-8 md:p-12 lg:p-16 relative z-10">
                        <p className="text-primary font-semibold uppercase tracking-wider mb-2">Featured Project</p>
                        <h2 className="text-foreground mb-4 text-balance group-hover:text-primary transition-colors">
                            {featuredProject.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{featuredProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <Badge className="group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                Timeline: 48 Hours
                            </Badge>
                            <Badge className="group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                Type: Enterprise Portal
                            </Badge>
                        </div>
                        <Button asChild size="lg" className="group/btn">
                            <Link href={`/work/${featuredProject.id}`}>
                                Read Full Story
                                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            </motion.div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                  <TabsList className="h-auto bg-background/50 backdrop-blur-sm border-2">
                      {uniqueCategories.map((category) => (
                          <TabsTrigger
                              key={category}
                              value={category}
                              className="text-sm md:text-base px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                          >
                              {category}
                          </TabsTrigger>
                      ))}
                  </TabsList>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-1.5 rounded-lg border-2 border-border bg-background text-sm focus:border-primary focus:outline-none"
                    >
                      <option value="Latest">Latest</option>
                      <option value="Popular">Most Popular</option>
                      <option value="Industry">Industry</option>
                    </select>
                  </div>
              </div>
              
              <TabsContent value="All" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {sortedProjects.map((project, index) => (
                          <ProjectCard key={project.id} project={project} index={index} />
                      ))}
                  </div>
              </TabsContent>

              {uniqueCategories.filter(c => c !== 'All').map(category => (
                   <TabsContent key={category} value={category} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {otherProjects.filter(p => p.category === category).map((project, index) => (
                              <ProjectCard key={project.id} project={project} index={index} />
                          ))}
                      </div>
                  </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
