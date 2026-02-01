'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { coreServices, howWeWork } from '@/lib/data';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { motion, useInView, type Easing } from 'framer-motion';
import { useRef } from 'react';

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 text-center bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
            ref={heroRef}
            className="container mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance">
            Complete Digital Solutions.
            <br />
            Delivered Once. Done Right.
          </h1>
          <p className="large max-w-3xl mx-auto mt-6 text-balance">
            We don't just build features, we engineer the systems that power your business growth. From strategy and design to deployment and handover, we deliver finished digital assets.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-foreground">Our Service Philosophy</h2>
                <motion.div
                    className="mt-8"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 md:p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl text-left shadow-2xl shadow-primary/5">
                    <CardContent className="p-0">
                      <p className="large text-foreground/90 text-balance">
                        We don&apos;t offer "services." We deliver <strong className="font-semibold text-foreground">complete, finished digital assets</strong>. Every engagement is scoped, architected, built, tested, and handed over—with full documentation and training. No retainers. No ongoing dependencies. Just exceptional work that you own completely.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
            </motion.div>
        </div>
      </section>

       <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-foreground">Our Core Services</h2>
                <p className="large max-w-2xl mx-auto mt-4 text-balance">The four pillars of your digital growth engine.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {coreServices.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <Card className="flex flex-col h-full border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <CardHeader className="flex-row items-center gap-4 relative z-10">
                                <motion.div
                                    className="p-3 bg-background/60 backdrop-blur-xl rounded-2xl border border-primary/20 group-hover:border-primary group-hover:shadow-lg transition-all duration-300"
                                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <service.icon className="w-8 h-8 text-primary" />
                                </motion.div>
                                <div>
                                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4 relative z-10">
                                <p className="font-semibold leading-relaxed">{service.description}</p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {service.includes.map((item, idx) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.1 + idx * 0.05, duration: 0.4 }}
                                            className="flex items-center gap-2 group/item"
                                        >
                                            <Check className="h-4 w-4 text-primary group-hover/item:scale-125 transition-transform" />
                                            <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="relative z-10">
                                <Button asChild variant="outline" className="w-full group/btn">
                                    <Link href={service.href}>
                                        Explore {service.title}
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
       </section>

       <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <div className="container mx-auto relative z-10">
          <motion.h2
              className="text-center mb-12 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
              How We Work: The 5-Step Process
          </motion.h2>
           <div className="relative max-w-2xl mx-auto">
            <motion.div
                className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE_OUT }}
            />
            <div className="space-y-12">
              {howWeWork.map((step, index) => (
                <motion.div
                    key={index}
                    className="relative flex items-center md:pl-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                  >
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg border-2 border-primary/20">
                        {index + 1}
                    </div>
                  </motion.div>
                  <div className={`w-full pl-8 md:pl-12`}>
                    <Card className="p-4 md:p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                      </h3>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">
                          {step.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
            className="container mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-balance mb-6">
            Ready to Build Your Growth Engine?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Schedule a Discovery Call
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </Button>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" variant="outline" className="group">
                  <Link href="/work">
                    View Our Work
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
