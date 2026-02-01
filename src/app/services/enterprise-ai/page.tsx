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
import { Bot, Brain, Eye, MessageSquare, Zap, ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const aiCapabilities = [
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Custom ChatGPT integrations, AI chatbots for customer support, virtual assistants, and multi-lingual support bots.',
    tech: ['OpenAI', 'Anthropic', 'Azure AI'],
    features: [
      'Custom ChatGPT integrations',
      'AI chatbots for customer support',
      'Virtual assistants',
      'Multi-lingual support bots',
      'Voice AI (speech-to-text, text-to-speech)'
    ]
  },
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Predictive analytics, recommendation engines, demand forecasting, fraud detection, and customer churn prediction.',
    tech: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    features: [
      'Predictive analytics',
      'Recommendation engines',
      'Demand forecasting',
      'Fraud detection',
      'Customer churn prediction'
    ]
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, OCR, quality inspection automation, and facial recognition.',
    tech: ['OpenCV', 'TensorFlow', 'PyTorch'],
    features: [
      'Image recognition & classification',
      'Object detection',
      'OCR (Optical Character Recognition)',
      'Quality inspection automation',
      'Facial recognition'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Sentiment analysis, text summarization, document classification, entity extraction, and language translation.',
    tech: ['Hugging Face', 'spaCy', 'NLTK'],
    features: [
      'Sentiment analysis',
      'Text summarization',
      'Document classification',
      'Entity extraction',
      'Language translation'
    ]
  },
  {
    icon: Zap,
    title: 'Process Automation (RPA + AI)',
    description: 'Intelligent document processing, workflow automation, data entry automation, email automation, and report generation.',
    tech: ['UiPath', 'Automation Anywhere', 'Custom'],
    features: [
      'Intelligent document processing',
      'Workflow automation',
      'Data entry automation',
      'Email automation',
      'Report generation'
    ]
  }
];

const industrySolutions = [
  {
    industry: 'E-commerce',
    solutions: [
      'Smart product recommendations',
      'Dynamic pricing optimization',
      'Visual search',
      'Inventory prediction'
    ]
  },
  {
    industry: 'Healthcare',
    solutions: [
      'Diagnostic assistance',
      'Patient data analysis',
      'Appointment scheduling AI',
      'Medical image analysis'
    ]
  },
  {
    industry: 'Finance',
    solutions: [
      'Fraud detection',
      'Credit risk assessment',
      'Algorithmic trading',
      'Customer service automation'
    ]
  },
  {
    industry: 'Manufacturing',
    solutions: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Production planning AI'
    ]
  }
];

const processSteps = [
  {
    title: 'Problem Definition',
    duration: 'Week 1',
    items: [
      'Business objective clarification',
      'Data assessment',
      'Feasibility study',
      'Success metrics definition'
    ]
  },
  {
    title: 'Data Preparation',
    duration: 'Week 2-3',
    items: [
      'Data collection & cleaning',
      'Feature engineering',
      'Data labeling (if required)',
      'Train/test split'
    ]
  },
  {
    title: 'Model Development',
    duration: 'Week 4-6',
    items: [
      'Algorithm selection',
      'Model training',
      'Hyperparameter tuning',
      'Cross-validation'
    ]
  },
  {
    title: 'Integration',
    duration: 'Week 7-8',
    items: [
      'API development',
      'System integration',
      'User interface',
      'Performance optimization'
    ]
  },
  {
    title: 'Deployment & Monitoring',
    duration: 'Week 9+',
    items: [
      'Cloud deployment (AWS/Azure/GCP)',
      'Monitoring dashboard',
      'Continuous learning setup',
      'Documentation & training'
    ]
  }
];

const faqs = [
  {
    question: 'How do you ensure AI model accuracy?',
    answer: 'We use rigorous testing methodologies including cross-validation, A/B testing, and continuous monitoring. Our models typically achieve 85-95% accuracy depending on the use case, and we provide detailed performance metrics.'
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. We build AI solutions that integrate seamlessly with your existing infrastructure through APIs, webhooks, and custom connectors. We work with all major platforms and databases.'
  },
  {
    question: 'What data do you need to get started?',
    answer: 'We start with a data assessment to understand what you have available. For supervised learning, we need labeled data. For other approaches, we can work with unstructured data. We also help with data collection strategies if needed.'
  },
  {
    question: 'How long does it take to deploy an AI solution?',
    answer: 'Timeline varies by complexity. A simple chatbot can be deployed in 4-6 weeks, while a custom ML model may take 8-12 weeks. Enterprise AI platforms typically take 12-24 weeks. We provide detailed timelines in our proposal.'
  },
  {
    question: 'Do you provide ongoing model maintenance?',
    answer: 'Yes, all AI solutions include 30 days of free support. We offer extended maintenance plans for model retraining, performance monitoring, and continuous improvement. AI models need regular updates to maintain accuracy.'
  }
];

export default function EnterpriseAIPage() {
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
              Enterprise AI Solutions
            </h1>
            <p className="large mt-6 text-balance text-xl">
              Automate. Predict. Scale. With Intelligence.
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Custom AI models, ChatGPT integrations, automation workflows, and intelligent systems that transform businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get AI Consultation
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/work">
                  View AI Projects
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">AI Capabilities</h2>
            <p className="large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
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
                        {capability.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{capability.description}</p>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {capability.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="border border-border/60 bg-background/40 text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Features:</p>
                        <ul className="space-y-1">
                          {capability.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
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

      {/* Industry-Specific Solutions */}
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
            <h2 className="text-foreground mb-4">Industry-Specific AI Solutions</h2>
            <p className="text-muted-foreground">
              Tailored AI solutions for your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    {solution.industry}
                  </h3>
                  <ul className="space-y-2">
                    {solution.solutions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <BarChart3 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-2xl p-8 md:p-12 relative overflow-hidden group shadow-glow hover:shadow-glow-lg hover:border-primary/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Badge className="mb-4">Case Study Highlight</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  E-commerce Platform (50K+ products)
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solution: AI-powered recommendation engine
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl">
                    <div className="text-3xl font-bold gradient-text">240%</div>
                    <div className="text-sm text-muted-foreground">Conversion Increase</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl">
                    <div className="text-3xl font-bold gradient-text">35%</div>
                    <div className="text-sm text-muted-foreground">AOV Increase</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl">
                    <div className="text-3xl font-bold gradient-text">4.2x</div>
                    <div className="text-sm text-muted-foreground">ROI (6 months)</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>AWS SageMaker</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our AI Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to building intelligent systems
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  <p className="text-lg font-semibold text-foreground mb-2">AI Chatbot</p>
                  <p className="text-2xl font-bold gradient-text">₹2,00,000 - ₹8,00,000</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">Custom ML Model</p>
                  <p className="text-2xl font-bold gradient-text">₹5,00,000 - ₹25,00,000</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">Enterprise AI Platform</p>
                  <p className="text-2xl font-bold gradient-text">₹15,00,000+</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  All projects include 30 days of free support and model monitoring
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
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-balance mb-6 text-3xl md:text-4xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how AI can automate, predict, and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get AI Consultation
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/work">
                  View AI Projects
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
