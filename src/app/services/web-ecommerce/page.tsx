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
import { ShoppingCart, LayoutTemplate, Zap, ArrowRight, TrendingUp, Globe, Search, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const solutions = [
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description: 'SaaS platforms, customer portals, dashboards & admin panels, Progressive Web Apps (PWA), real-time collaborative tools.',
    tech: ['Next.js 14+', 'React', 'Node.js', 'GraphQL']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Shopify custom development, WooCommerce optimization, headless commerce (Shopify + Next.js), custom marketplaces, B2B e-commerce platforms.',
    tech: ['Shopify', 'WooCommerce', 'Next.js', 'Headless']
  },
  {
    icon: LayoutTemplate,
    title: 'Headless CMS Solutions',
    description: 'Sanity.io integration, Contentful setup, Strapi custom development, WordPress headless (REST/GraphQL).',
    tech: ['Sanity', 'Contentful', 'Strapi', 'WordPress']
  }
];

const ecommerceFeatures = [
  'Product catalog management',
  'Advanced filtering & search (Algolia)',
  'One-click checkout',
  'Multiple payment gateways',
  'Inventory & order management',
  'Customer accounts & wishlists',
  'Email marketing integration',
  'Abandoned cart recovery',
  'Multi-currency & multi-language',
  'SEO optimization',
  'Performance optimization (<2s load)',
  'Analytics & conversion tracking'
];

const conversionOptimization = [
  'A/B testing setup',
  'Heatmap analysis',
  'User session recording',
  'Conversion funnel optimization',
  'Mobile-first design',
  'Speed optimization (Core Web Vitals)'
];

const averageResults = [
  { metric: '150-300%', label: 'Conversion Increase' },
  { metric: '40-60%', label: 'Page Speed Improvement' },
  { metric: '200-500%', label: 'Organic Traffic Boost' },
  { metric: '99.9%', label: 'Uptime Guarantee' }
];

const faqs = [
  {
    question: 'Which e-commerce platform is right for my business?',
    answer: 'It depends on your scale and complexity. Shopify is excellent for getting started quickly with a robust feature set. WooCommerce offers deep customization for WordPress sites. Custom solutions are for when you need unique features that off-the-shelf platforms can\'t provide. We\'ll help you choose during our discovery call.'
  },
  {
    question: 'Do you also handle website hosting and maintenance?',
    answer: 'While we don\'t host websites directly, we provide expert guidance on the best hosting solutions for your needs and can deploy your site to any provider. We offer separate, project-based packages for ongoing maintenance and security.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We can perform a full redesign and migration, focusing on modern UI/UX, improved performance, and better conversion architecture while preserving your existing content and SEO value.'
  },
  {
    question: 'How long does it take to build an e-commerce store?',
    answer: 'Timeline depends on complexity. A simple Shopify store can be ready in 4-6 weeks, while a custom e-commerce platform may take 8-16 weeks. We provide detailed timelines in our proposal after the discovery call.'
  },
  {
    question: 'Do you provide SEO optimization?',
    answer: 'Yes, all our websites include basic SEO setup (meta tags, sitemap, structured data). For advanced SEO strategies, we offer dedicated SEO optimization packages that include keyword research, content optimization, and ongoing monitoring.'
  }
];

export default function WebEcommercePage() {
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
              Web & E-commerce Development
            </h1>
            <p className="large mt-6 text-balance text-xl">
              Lightning-Fast. Conversion-Optimized. Scalable.
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We build websites and e-commerce platforms engineered for conversion, speed, and search visibility.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start Your E-commerce Project
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/work">
                  View Live Stores
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">What We Build</h2>
            <p className="large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
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
                        {solution.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{solution.description}</p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {solution.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="border border-border/60 bg-background/40 text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
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
            <h2 className="text-foreground mb-4">Our E-commerce Features</h2>
            <p className="text-muted-foreground">
              Everything you need to run a successful online store
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {ecommerceFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Optimization */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              Conversion Rate Optimization
            </h2>
            <p className="text-muted-foreground">
              Data-driven optimization to maximize your ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {conversionOptimization.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Average Results */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Average Results</h2>
            <p className="text-muted-foreground">
              Real metrics from our e-commerce projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {averageResults.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {result.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
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
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">Corporate Website</p>
                  <p className="text-2xl font-bold gradient-text">₹1,50,000 - ₹5,00,000</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">E-commerce Store</p>
                  <p className="text-2xl font-bold gradient-text">₹3,00,000 - ₹15,00,000</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">Custom Platform</p>
                  <p className="text-2xl font-bold gradient-text">₹8,00,000+</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  All projects include 30 days of free support and performance optimization
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
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
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-balance mb-6 text-3xl md:text-4xl">
              Ready to Launch Your E-commerce Store?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's build a conversion-optimized platform that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Start Your E-commerce Project
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/work">
                  View Live Stores
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
