'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Rocket, BookOpen, Laptop, Home, DollarSign, Heart, Users, CheckCircle2, Clock, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    icon: Rocket,
    title: 'Work on Real Impact',
    description: 'Build products used by millions. Your code matters from day one.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: '₹50,000/year learning budget per person. Courses, conferences, certifications—on us.'
  },
  {
    icon: Laptop,
    title: 'Latest Tech Stack',
    description: 'Next.js, React Native, TensorFlow, AWS... Work with technologies you actually want on your resume.'
  },
  {
    icon: Home,
    title: 'Remote-First',
    description: 'Work from anywhere in India. Flexible hours. Office in Nagpur for those who want it.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Market-leading salaries + performance bonuses + equity (for early team members).'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Health insurance (employee + family), mental health support, parental leave.'
  }
];

const benefits = [
  'Health insurance (employee + family)',
  'MacBook Pro + accessories',
  'Co-working space allowance',
  'Unlimited coffee & snacks (office)',
  'Team outings quarterly',
  'Work-from-anywhere policy (30 days/year)',
  'Parental leave',
  'Mental health support'
];

const openPositions = [
  {
    title: 'Senior Full-Stack Engineer (Next.js)',
    location: 'Remote / Nagpur',
    salary: '₹8L - ₹15L',
    type: 'Full-time',
    requirements: [
      '4+ years React/Next.js experience',
      'Strong TypeScript skills',
      'Experience with Node.js, PostgreSQL',
      'Understanding of system design'
    ]
  },
  {
    title: 'Mobile Developer (React Native/Flutter)',
    location: 'Remote / Nagpur',
    salary: '₹6L - ₹12L',
    type: 'Full-time',
    requirements: [
      '3+ years mobile development',
      'Published apps on App Store/Play Store',
      'Strong understanding of mobile UX',
      'Experience with native modules'
    ]
  },
  {
    title: 'AI/ML Engineer',
    location: 'Remote / Nagpur',
    salary: '₹10L - ₹18L',
    type: 'Full-time',
    requirements: [
      '3+ years ML/AI experience',
      'Strong Python (TensorFlow/PyTorch)',
      'Experience deploying models to production',
      'Understanding of MLOps'
    ]
  },
  {
    title: 'Senior UI/UX Designer',
    location: 'Remote / Nagpur',
    salary: '₹6L - ₹12L',
    type: 'Full-time',
    requirements: [
      '4+ years product design experience',
      'Strong portfolio (web & mobile)',
      'Figma expert',
      'Understanding of design systems'
    ]
  }
];

const hiringProcess = [
  { step: 1, title: 'Application Review', duration: '2-3 days', description: 'We review your resume & portfolio' },
  { step: 2, title: 'Intro Call', duration: '30 mins', description: 'Get to know each other, discuss role' },
  { step: 3, title: 'Technical Assessment', duration: '2-3 hours', description: 'Real-world coding challenge or design task' },
  { step: 4, title: 'Team Interview', duration: '1 hour', description: 'Deep-dive technical discussion' },
  { step: 5, title: 'Culture Fit Chat', duration: '30 mins', description: 'Casual conversation with founders' },
  { step: 6, title: 'Offer', duration: 'Same day', description: 'Typically within 7-10 days of application' }
];

export default function CareersPage() {
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
            Join the Future Builders
          </h1>
          <p className="large mt-6 text-balance text-xl max-w-3xl mx-auto">
            Work on cutting-edge projects. Learn from the best. Grow exponentially.
          </p>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Why BharatsDev?</h2>
            <p className="text-muted-foreground">What makes us different</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full p-6 border-2 hover:border-primary/50 transition-all duration-500 group">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {perk.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{perk.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Perks & Benefits</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Join our growing team</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 p-6 flex flex-col">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl mb-3">{position.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {position.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {position.salary}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {position.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href="/contact">View Details</Link>
                      </Button>
                      <Button asChild size="sm" className="flex-1 group">
                        <Link href="/contact">
                          Apply Now
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Not seeing your role?</p>
            <Button asChild variant="outline">
              <Link href="/contact">Send Open Application</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Hiring Process</h2>
            <p className="text-muted-foreground">What to expect at each stage</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {hiringProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full p-6 border-2 hover:border-primary/50 transition-all duration-500 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{process.title}</h3>
                    <Badge variant="outline" className="mb-2 text-xs">{process.duration}</Badge>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cta text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-balance mb-6 text-3xl md:text-4xl">
              Ready to Build the Future?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Join a team that's obsessed with building exceptional digital products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  View All Openings
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/contact">
                  Send Open Application
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
