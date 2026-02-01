
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Tejas's ability to manage and deliver a complex project under an extreme deadline is remarkable. He is a true technical partner.",
        name: "Dr. Prashant Awsarmal",
        title: "MIT",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzYzMTY5OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        quote: "The quality of work and the speed of delivery were exceptional. BharatsDev is our go-to for critical digital infrastructure.",
        name: "Rajesh Kumar",
        title: "CTO, UltraTech Cement",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBtYW58ZW58MHx8fHwxNzYzNDk1MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        quote: "They transformed our idea into a fully-functional AI platform in weeks, not months. The strategic insights alone were worth the investment.",
        name: "Priya Sharma",
        title: "Founder, CareerCompassAI",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3NjMxOTg3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        quote: "The best agency we've ever worked with. The project was delivered on time, on budget, and exceeded our expectations.",
        name: "Amit Patel",
        title: "CEO, Startup Inc.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2NTI0NDYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
     {
        quote: "A true engineering mindset. They solved problems we didn't even know we had. Highly recommended.",
        name: "Anjali Rao",
        title: "Head of Product, TechCorp",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjUyNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
             <h2 className="text-foreground text-balance">Trusted by Industry Leaders</h2>
             <p className="large text-muted-foreground mt-4 max-w-2xl mx-auto text-balance">
                We don&apos;t just build projects; we build partnerships. Here&apos;s what our clients have to say.
            </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                          <Card className="p-8 text-left border border-border/60 bg-card/60 backdrop-blur-2xl h-full flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/40 relative overflow-hidden rounded-3xl">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              
                              <CardContent className="p-0 flex-grow relative z-10">
                                  <Quote className="h-8 w-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
                                  <p className="text-lg text-foreground mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                            </CardContent>
                              
                              <div className="flex items-center gap-4 mt-auto relative z-10">
                                  <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Avatar className="h-14 w-14 border-2 border-primary/40 group-hover:border-primary transition-colors shadow-lg">
                                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                        <AvatarFallback className="bg-primary text-primary-foreground">
                                          {testimonial.name.charAt(0)}
                                        </AvatarFallback>
                                </Avatar>
                                  </motion.div>
                                <div>
                                      <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                                        {testimonial.name}
                                      </p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
