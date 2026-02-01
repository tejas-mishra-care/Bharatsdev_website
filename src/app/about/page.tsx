'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Rocket, Target, Zap, Users, Award, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

const timeline = [
  { year: '2018', event: 'Founded with 3 people', milestone: 'Company Launch' },
  { year: '2019', event: 'First AI integration project', milestone: 'AI Division' },
  { year: '2020', event: 'Expanded to mobile development', milestone: 'Mobile Team' },
  { year: '2021', event: '100 projects milestone', milestone: '100 Projects' },
  { year: '2022', event: 'Opened second office', milestone: 'Expansion' },
  { year: '2023', event: 'Enterprise AI division launched', milestone: 'Enterprise AI' },
  { year: '2024', event: '500+ projects completed', milestone: '500 Projects' },
  { year: '2025', event: 'Leading digital agency in Central India', milestone: 'Market Leader' }
];

const values = [
  {
    icon: Target,
    title: 'Results Over Process',
    description: 'We measure success by outcomes, not hours.'
  },
  {
    icon: Zap,
    title: 'Ship Fast, Iterate Faster',
    description: 'Perfect is the enemy of launched.'
  },
  {
    icon: Rocket,
    title: 'Technology Obsession',
    description: 'We live and breathe the latest tech.'
  },
  {
    icon: Users,
    title: 'Radical Transparency',
    description: 'No hidden costs. No surprises. Ever.'
  }
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Active Clients' },
  { value: '25+', label: 'Team Members' },
  { value: '15+', label: 'Industries Served' },
  { value: '99%', label: 'Client Retention' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '50+', label: 'AI Integrations' },
  { value: '100%', label: 'On-Time Delivery' }
];

const certifications = [
  'Google Partner',
  'AWS Partner',
  'Shopify Partner',
  'Microsoft Partner',
  'ISO 27001',
  'GDPR Compliant'
];

const whyChooseUs = [
  'Direct C-suite access (no account managers)',
  'Fixed-price, milestone-based payments',
  '30-day money-back guarantee',
  'Ownership transfer (you own 100% of code)',
  'Post-launch support included',
  'Transparent progress tracking',
  'No vendor lock-in'
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-b from-secondary/50 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <motion.div
          ref={heroRef}
          className="container mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance mb-6">
            Building Digital Excellence
          </h1>
          <p className="large mt-6 text-balance text-xl max-w-3xl mx-auto">
            Since 2018. 500+ Projects. Zero Compromises.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2018, BharatsDev started with a simple mission: build digital products that actually work—no bloat, no excuses, no retainers.
              </p>
              <p>
                Today, we're a team of 25+ engineers, designers, and strategists who've delivered 500+ projects across 15 industries. From startups to Fortune 500s, we bring the same obsessive attention to detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Milestones that shaped who we are</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 md:w-1/2 md:pr-8 md:pl-0 pl-12">
                      <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <Badge variant="outline" className="font-bold">{item.year}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{item.milestone}</h3>
                        <p className="text-muted-foreground">{item.event}</p>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1 md:w-1/2 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-foreground mb-6">Our Mission</h2>
            <Card className="p-8 md:p-12 border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <p className="text-2xl font-bold text-foreground mb-4">
                Make world-class digital products accessible to businesses of all sizes.
              </p>
              <p className="text-xl text-muted-foreground">
                No gatekeeping. No jargon. Just results.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full p-6 text-center border-2 hover:border-primary/50 transition-all duration-500 group">
                    <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">By The Numbers</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Card className="text-center p-6 border-2 hover:border-primary/50 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4 flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Certifications & Partnerships
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="outline" className="px-6 py-3 text-base border-2 hover:border-primary hover:text-primary transition-colors cursor-default">
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Why Clients Choose Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-secondary rounded-lg border hover:border-primary/50 transition-colors"
              >
                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-6 flex items-center justify-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              Our Office
            </h2>
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500">
              <p className="text-xl font-semibold text-foreground mb-2">
                BharatsDev Digital Solutions
              </p>
              <p className="text-muted-foreground mb-4">
                Nagpur, Maharashtra, India
              </p>
              <p className="text-muted-foreground mb-6">
                Remote-first culture with flexible work options. Serving clients globally.
              </p>
              <Button asChild variant="outline">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cta text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90" />
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-balance mb-6 text-3xl md:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Experience the difference of working with a team that's obsessed with your success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/work">
                  View Our Work
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
