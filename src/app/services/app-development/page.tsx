'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Smartphone, Code, Zap, CheckCircle2, ArrowRight, Clock, Layers, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const processSteps = [
  {
    icon: Users,
    title: 'Discovery & Planning',
    duration: 'Week 1-2',
    items: [
      'User research & personas',
      'Competitive analysis',
      'Feature prioritization (MoSCoW)',
      'Technical architecture planning',
      'Cost & timeline estimation'
    ]
  },
  {
    icon: Layers,
    title: 'UX/UI Design',
    duration: 'Week 3-5',
    items: [
      'Wireframing (low to high fidelity)',
      'Interactive prototypes (Figma/Sketch)',
      'User flow mapping',
      'Design system creation',
      'Usability testing'
    ]
  },
  {
    icon: Code,
    title: 'Development',
    duration: 'Week 6-10',
    items: [
      'Agile sprints (2-week cycles)',
      'Clean code practices (SOLID principles)',
      'API development & integration',
      'Real-time features (WebSocket/Firebase)',
      'Push notifications setup'
    ]
  },
  {
    icon: CheckCircle2,
    title: 'QA & Testing',
    duration: 'Week 11-12',
    items: [
      'Unit testing (Jest/XCTest)',
      'Integration testing',
      'UI automation (Appium/Detox)',
      'Performance testing',
      'Security audit'
    ]
  },
  {
    icon: Zap,
    title: 'Deployment',
    duration: 'Week 13',
    items: [
      'App Store optimization (ASO)',
      'Beta testing (TestFlight/Play Console)',
      'App Store submission',
      'Marketing materials',
      'Launch support'
    ]
  },
  {
    icon: Clock,
    title: 'Post-Launch',
    duration: 'Ongoing',
    items: [
      'Analytics monitoring (Firebase/Mixpanel)',
      'Bug fixes & updates',
      'Feature enhancements',
      'Performance optimization',
      'User feedback integration'
    ]
  }
];

const appTypes = [
  'E-commerce & Marketplace Apps',
  'Social Networking Apps',
  'On-Demand Service Apps (Uber-like)',
  'Health & Fitness Apps',
  'Fintech & Banking Apps',
  'Education & E-learning Apps',
  'AR/VR Applications',
  'IoT & Wearable Integration'
];

const techIntegrations = [
  'Payment Gateways (Razorpay, Stripe, PayPal)',
  'Social Media Login (Google, Facebook, Apple)',
  'Maps & Location (Google Maps, Mapbox)',
  'Cloud Storage (AWS S3, Firebase Storage)',
  'Analytics (Firebase, Mixpanel, Amplitude)',
  'Push Notifications (FCM, OneSignal)',
  'In-App Purchases & Subscriptions',
  'Chat & Messaging (Stream, SendBird)'
];

const platforms = [
  {
    title: 'Native iOS',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'HealthKit', 'ARKit'],
    description: 'For the best performance, security, and user experience on Apple devices.'
  },
  {
    title: 'Native Android',
    tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Firebase'],
    description: 'Leveraging the full power of Android with modern development practices.'
  },
  {
    title: 'Cross-Platform',
    tech: ['React Native', 'Flutter', 'Ionic'],
    description: 'One codebase for iOS and Android, reducing development time and cost.'
  }
];

const faqs = [
  {
    question: 'Native or Cross-Platform: Which is right for me?',
    answer: 'It depends on your goals. For performance-critical apps or those needing deep hardware integration, native is best. For most business apps, cross-platform offers a fantastic balance of speed, cost, and performance. We\'ll help you decide during our discovery call.'
  },
  {
    question: 'Do you help with App Store and Play Store submission?',
    answer: 'Yes, our service includes full support for the submission and review process for both Apple\'s App Store and the Google Play Store, ensuring your app meets all guidelines.'
  },
  {
    question: 'Can you build the backend for my existing front-end app?',
    answer: 'Absolutely. We can architect and build a robust, scalable backend API to power your existing application, or help you migrate from an older system.'
  },
  {
    question: 'What\'s included in post-launch support?',
    answer: 'All projects include 30 days of free support for bug fixes. We also provide analytics monitoring, performance optimization recommendations, and can help with feature enhancements on a project basis.'
  },
  {
    question: 'How long does it take to build an app?',
    answer: 'Timeline depends on complexity. A simple MVP can take 8-12 weeks, while a full-featured enterprise app may take 16-24 weeks. We provide detailed timelines in our proposal after the discovery call.'
  }
];

export default function AppDevelopmentPage() {
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
              App Development
            </h1>
            <p className="large mt-6 text-balance text-xl">
              Native Performance. Cross-Platform Reach.
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From native iOS apps to cross-platform solutions, we engineer high-performance applications that users love and businesses depend on.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/work">
                  View App Portfolio
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
              Choose the platform that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {platform.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-muted-foreground">{platform.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="border border-border/60 bg-background/40 text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground mb-4">Our App Development Process</h2>
            <p className="large text-muted-foreground max-w-2xl mx-auto">
              A proven 6-phase approach from concept to launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 group-hover:border-primary transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {index + 1}. {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized App Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Specialized App Types</h2>
            <p className="text-muted-foreground">
              We've built apps across industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {appTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 text-center rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  <p className="text-sm font-medium text-foreground">{type}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Integrations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Tech Integrations</h2>
            <p className="text-muted-foreground">
              Seamless integration with the tools your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {techIntegrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{integration}</span>
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
              <p className="large text-foreground/90 mb-6 text-balance">
                We price based on scope, not hours. Every project receives a fixed-price proposal after our discovery call.
              </p>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Starting from ₹3,50,000 for MVP
              </div>
              <p className="text-muted-foreground">
                Custom quote based on features and complexity
              </p>
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
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-balance mb-6 text-3xl md:text-4xl">
              Ready to Build Your Platform?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how our engineering-first approach can bring your application to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Book Your Discovery Call
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/work">
                  View App Portfolio
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
