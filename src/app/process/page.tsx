'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Search, 
  Palette, 
  Code, 
  CheckCircle2, 
  Rocket, 
  Headphones,
  ArrowRight,
  Clock,
  Users,
  FileText,
  Zap,
  Shield
} from 'lucide-react';
import Link from 'next/link';

const phases = [
  {
    number: 1,
    icon: Search,
    title: 'Discovery & Strategy',
    duration: '1-2 weeks',
    color: 'from-blue-500 to-cyan-500',
    whatWeDo: [
      'Kick-off meeting & requirement gathering',
      'Stakeholder interviews',
      'Market & competitive research',
      'User persona development',
      'Technical feasibility study',
      'Project scope definition',
      'Technology stack recommendation'
    ],
    deliverables: [
      'Project brief document',
      'Technical architecture proposal',
      'Timeline & milestone plan',
      'Detailed cost estimate',
      'Risk assessment report'
    ],
    yourInvolvement: [
      '2-3 meetings (4-6 hours total)',
      'Provide business requirements',
      'Share existing assets/brand guidelines'
    ]
  },
  {
    number: 2,
    icon: Palette,
    title: 'Design & Prototyping',
    duration: '2-4 weeks',
    color: 'from-purple-500 to-pink-500',
    whatWeDo: [
      'Information architecture',
      'Low-fidelity wireframes',
      'High-fidelity mockups',
      'Interactive prototype (Figma/Framer)',
      'Design system creation',
      'Usability testing with real users',
      'Design iterations based on feedback'
    ],
    deliverables: [
      'Complete UI/UX designs (all screens)',
      'Interactive prototype',
      'Design system documentation',
      'Asset library (icons, images, fonts)',
      'Responsive design specs (mobile/tablet)'
    ],
    yourInvolvement: [
      'Weekly design review meetings',
      'Feedback on mockups (2 revision rounds)',
      'Final design approval'
    ]
  },
  {
    number: 3,
    icon: Code,
    title: 'Development',
    duration: '4-12 weeks',
    color: 'from-green-500 to-emerald-500',
    whatWeDo: [
      'Sprint planning (2-week sprints)',
      'Frontend development (pixel-perfect)',
      'Backend & API development',
      'Database design & optimization',
      'Third-party integrations',
      'Admin panel development',
      'Daily standups & weekly demos',
      'Code reviews & quality checks'
    ],
    practices: [
      'Clean code principles (SOLID)',
      'Git version control (feature branches)',
      'Code documentation',
      'Security best practices',
      'Performance optimization',
      'Accessibility compliance (WCAG 2.1)'
    ],
    deliverables: [
      'Fully functional product',
      'Source code (GitHub repository)',
      'API documentation',
      'Admin dashboard access'
    ],
    yourInvolvement: [
      'Access to staging environment',
      'Bi-weekly sprint reviews',
      'Real-time progress tracking (Jira/Notion)',
      'Feedback on features as they\'re built'
    ]
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: 'Testing & QA',
    duration: '1-2 weeks',
    color: 'from-orange-500 to-red-500',
    whatWeDo: [
      'Functional testing (all features)',
      'Cross-browser testing (Chrome, Safari...)',
      'Device testing (iOS, Android, tablets)',
      'Performance testing (load, stress)',
      'Security testing (penetration, OWASP)',
      'Accessibility testing (screen readers)',
      'User acceptance testing (UAT)',
      'Bug fixing & optimization'
    ],
    tools: [
      'Automated: Jest, Playwright, Cypress',
      'Manual: Real devices (10+ tested)',
      'Performance: Lighthouse, GTmetrix',
      'Security: OWASP ZAP, Snyk'
    ],
    deliverables: [
      'QA test report',
      'Bug tracking & resolution log',
      'Performance audit results',
      'Security audit certificate'
    ],
    yourInvolvement: [
      'UAT participation',
      'Final review & sign-off'
    ]
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Deployment & Launch',
    duration: '1 week',
    color: 'from-indigo-500 to-purple-500',
    whatWeDo: [
      'Production environment setup',
      'Domain & DNS configuration',
      'SSL certificate installation',
      'Database migration (if applicable)',
      'CDN setup (Cloudflare)',
      'Analytics integration (GA4)',
      'Error monitoring (Sentry)',
      'Backup systems configuration',
      'App Store submission (for mobile apps)',
      'SEO setup (meta tags, sitemap, robots)'
    ],
    checklist: [
      'Final smoke tests on production',
      'Performance verification (<2s load)',
      'All integrations working',
      'Backup restoration test',
      'Monitoring alerts configured'
    ],
    deliverables: [
      'Live product URL',
      'Admin credentials & documentation',
      'Hosting & infrastructure details',
      'Ownership transfer documents',
      'Training session recording'
    ],
    yourInvolvement: [
      'Final approval',
      'Team training session',
      'Marketing materials preparation'
    ]
  },
  {
    number: 6,
    icon: Headphones,
    title: 'Support & Optimization',
    duration: 'Ongoing',
    color: 'from-teal-500 to-cyan-500',
    whatWeProvide: [
      'Bug fixes (within 30 days)',
      'Performance monitoring',
      'Security updates',
      'Analytics review & insights',
      'Feature enhancement recommendations',
      'Scaling support (if needed)',
      'Priority email & phone support'
    ],
    responseTimes: [
      'Critical bugs: 2-4 hours',
      'Minor issues: 24 hours',
      'Feature requests: Quoted separately'
    ],
    supportOptions: [
      'Monthly retainer: ₹25,000 - ₹2,00,000',
      'Annual maintenance: 15-20% of project',
      'On-demand: ₹5,000/hour'
    ],
    yourInvolvement: [
      'Monthly performance review calls',
      'Feedback on new feature ideas'
    ]
  }
];

const tools = [
  { category: 'Project Management', tools: ['Jira', 'Notion', 'ClickUp'] },
  { category: 'Code Repository', tools: ['GitHub', 'GitLab'] },
  { category: 'Design', tools: ['Figma (shared access)'] },
  { category: 'Communication', tools: ['Slack', 'Email', 'Google Meet'] },
  { category: 'Time Tracking', tools: ['Transparent hour logs'] }
];

const differentiators = [
  {
    icon: Shield,
    title: 'No Hidden Costs',
    description: 'Fixed price, milestone-based'
  },
  {
    icon: Users,
    title: 'Direct Access',
    description: 'Talk to actual developers, not PMs'
  },
  {
    icon: FileText,
    title: '100% Transparency',
    description: 'See progress in real-time'
  },
  {
    icon: Zap,
    title: 'Code Ownership',
    description: 'You own everything we build'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Guarantee',
    description: '30-day money-back if not satisfied'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '100% track record'
  }
];

export default function ProcessPage() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
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
            How We Build Digital Products
          </h1>
          <p className="large mt-6 text-balance text-xl max-w-3xl mx-auto">
            Transparent. Agile. Collaborative. Results-Driven.
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our proven 6-phase process ensures quality, transparency, and on-time delivery. Every step is designed to minimize risk and maximize value.
          </p>
        </motion.div>
      </section>

      {/* Process Phases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="space-y-8 max-w-6xl mx-auto">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isExpanded = selectedPhase === phase.number;
              
              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`border-2 transition-all duration-500 cursor-pointer ${
                      isExpanded ? 'border-primary shadow-xl' : 'hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPhase(isExpanded ? null : phase.number)}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${phase.color} text-white flex-shrink-0`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-2">
                            <CardTitle className="text-2xl">
                              Phase {phase.number}: {phase.title}
                            </CardTitle>
                            <Badge variant="outline">
                              {phase.duration}
                            </Badge>
                          </div>
                          {!isExpanded && (
                            <p className="text-muted-foreground">
                              Click to see detailed breakdown
                            </p>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    {isExpanded && (
                      <CardContent className="space-y-6 pt-0">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Code className="h-5 w-5 text-primary" />
                              What We Do:
                            </h4>
                            <ul className="space-y-2">
                              {(phase.whatWeDo ?? []).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <FileText className="h-5 w-5 text-primary" />
                              Deliverables:
                            </h4>
                            <ul className="space-y-2">
                              {(phase.deliverables ?? []).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {phase.practices && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-primary" />
                              Our Development Practices:
                            </h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {phase.practices.map((practice, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground p-2 bg-secondary rounded">
                                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{practice}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {phase.tools && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Testing Tools:</h4>
                            <ul className="space-y-1">
                              {phase.tools.map((tool, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">
                                  • {tool}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {phase.checklist && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Post-Launch Checklist:</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {phase.checklist.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground p-2 bg-secondary rounded">
                                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {phase.responseTimes && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Response Times:</h4>
                            <ul className="space-y-1">
                              {phase.responseTimes.map((time, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">
                                  • {time}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {phase.supportOptions && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Extended Support Options:</h4>
                            <ul className="space-y-1">
                              {phase.supportOptions.map((option, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">
                                  • {option}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Your Involvement:
                          </h4>
                          <ul className="space-y-2">
                            {phase.yourInvolvement.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Communication */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Tools & Communication</h2>
            <p className="text-muted-foreground">
              We use industry-standard tools to keep you informed and engaged
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((toolCategory, index) => (
              <motion.div
                key={toolCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 p-6">
                  <h3 className="font-semibold text-foreground mb-3">{toolCategory.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our process is designed around your success, not our convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 p-6 text-center group">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Experience our transparent, results-driven process. Book a free discovery call today.
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
