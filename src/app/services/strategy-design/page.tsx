'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Palette, Target, TrendingUp, ArrowRight, CheckCircle2, Users, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Target,
    title: 'Digital Strategy',
    description: 'Market research & analysis, competitive intelligence, customer journey mapping, digital transformation consulting, technology roadmap creation, growth marketing strategy.',
    deliverables: [
      'Market research reports',
      'Competitive analysis',
      'Customer personas',
      'Technology roadmap',
      'Growth strategy plan'
    ]
  },
  {
    icon: Palette,
    title: 'UX/UI Design',
    description: 'User research & personas, information architecture, wireframing & prototyping, visual design, interaction design, usability testing.',
    tools: ['Figma', 'Adobe XD', 'Sketch'],
    deliverables: [
      'User research reports',
      'Wireframes (low & high fidelity)',
      'Interactive prototypes',
      'Final UI designs (all screen sizes)',
      'Design system documentation'
    ]
  },
  {
    icon: Zap,
    title: 'Brand Identity',
    description: 'Logo design, brand guidelines, visual identity systems, typography & color systems, marketing collateral.',
    deliverables: [
      'Logo design (multiple variations)',
      'Brand guidelines document',
      'Visual identity system',
      'Typography & color palette',
      'Marketing collateral templates'
    ]
  },
  {
    icon: BarChart3,
    title: 'Design Systems',
    description: 'Component library creation, design tokens, documentation, accessibility guidelines, handoff to development.',
    deliverables: [
      'Component library',
      'Design tokens',
      'Comprehensive documentation',
      'Accessibility guidelines',
      'Development handoff package'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Conversion Rate Optimization',
    description: 'Analytics audit, A/B testing strategy, landing page optimization, funnel analysis, heatmap analysis.',
    deliverables: [
      'Analytics audit report',
      'A/B testing plan',
      'Optimized landing pages',
      'Funnel analysis',
      'Heatmap insights'
    ]
  }
];

const designPrinciples = [
  'User-centered thinking',
  'Data-driven decisions',
  'Accessibility-first (WCAG 2.1 AA)',
  'Mobile-first approach',
  'Performance-optimized',
  'Conversion-focused'
];

const deliverables = [
  'Research reports & personas',
  'User journey maps',
  'Wireframes (low & high fidelity)',
  'Interactive prototypes',
  'Design system documentation',
  'Final UI designs (all screen sizes)',
  'Design-to-development handoff',
  'Post-launch analysis'
];

const pricing = [
  { service: 'UX Research', range: '₹75,000 - ₹2,00,000' },
  { service: 'UI Design (Website)', range: '₹1,00,000 - ₹5,00,000' },
  { service: 'UI Design (App)', range: '₹1,50,000 - ₹8,00,000' },
  { service: 'Brand Identity', range: '₹50,000 - ₹3,00,000' },
  { service: 'Design System', range: '₹2,00,000 - ₹10,00,000' }
];

const faqs = [
  {
    question: 'Do you work with existing brands or create new ones?',
    answer: 'Both! We can create a complete new brand identity from scratch, or refresh and modernize your existing brand while maintaining brand recognition and equity.'
  },
  {
    question: 'What design tools do you use?',
    answer: 'We primarily use Figma for UI/UX design, Adobe Creative Suite for brand identity work, and Sketch for wireframing. All designs are delivered in formats compatible with your development team.'
  },
  {
    question: 'How many design revisions are included?',
    answer: 'Our standard package includes 2 rounds of revisions for each major deliverable. Additional revisions can be added as needed. We work iteratively to ensure you\'re happy with the final result.'
  },
  {
    question: 'Do you provide design handoff to developers?',
    answer: 'Yes! All design projects include comprehensive handoff documentation with specifications, assets, and design system components. We also offer developer collaboration sessions to ensure smooth implementation.'
  },
  {
    question: 'Can you help with ongoing design needs?',
    answer: 'While we focus on project-based work, we offer design retainer packages for ongoing needs like marketing materials, social media graphics, and design system updates.'
  }
];

export default function StrategyDesignPage() {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-balance mb-6">
              Strategy & Design
            </h1>
            <p className="large mt-6 text-balance text-xl">
              Where Business Goals Meet Beautiful Execution
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              UX/UI research, brand identity, digital strategy, and design systems. We create experiences that convert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start Design Project
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/work">
                  View Design Portfolio
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Services</h2>
            <p className="large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design and strategy services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10">
                      <div className="p-3 bg-primary/10 rounded-2xl w-fit border border-primary/20 group-hover:border-primary transition-colors mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-4">
                      {service.tools && (
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-2">Tools:</p>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool) => (
                              <Badge key={tool} variant="secondary" className="text-xs border border-border/60 bg-background/40 text-foreground/80">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Deliverables:</p>
                        <ul className="space-y-1">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Principles */}
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
            <h2 className="text-foreground mb-4">Our Design Principles</h2>
            <p className="text-muted-foreground">
              The foundation of every design decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{principle}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">What You'll Receive</h2>
            <p className="text-muted-foreground">
              Complete design packages with all assets and documentation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-foreground mb-4">Transparent Pricing</h2>
            <Card className="p-8 md:p-12 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-all duration-500 shadow-2xl shadow-primary/5">
              <div className="space-y-6">
                {pricing.map((item, index) => (
                  <motion.div
                    key={item.service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl"
                  >
                    <p className="font-semibold text-foreground">{item.service}</p>
                    <p className="text-lg font-bold gradient-text">{item.range}</p>
                  </motion.div>
                ))}
                <p className="text-muted-foreground text-sm text-center pt-4 border-t">
                  All projects include 2 rounds of revisions and design system documentation
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground">Frequently Asked Questions</h2>
          </motion.div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-colors">
                  <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
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
              Ready to Transform Your Brand?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's create a design system that converts visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Start Design Project
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/work">
                  View Design Portfolio
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
