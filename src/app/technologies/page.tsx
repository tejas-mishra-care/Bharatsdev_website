'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Database, Cloud, Code, Smartphone, Palette } from 'lucide-react';
import Link from 'next/link';

const techCategories = {
  frontend: {
    icon: Code,
    title: 'Frontend',
    technologies: [
      { name: 'React', since: '2018', projects: '200+', description: 'Component-based UI library for building interactive interfaces' },
      { name: 'Next.js', since: '2020', projects: '150+', description: 'React framework with SSR, SSG, and optimal performance' },
      { name: 'Vue.js', since: '2019', projects: '50+', description: 'Progressive framework for building user interfaces' },
      { name: 'Angular', since: '2017', projects: '30+', description: 'Platform for building mobile and desktop web applications' }
    ]
  },
  backend: {
    icon: Database,
    title: 'Backend',
    technologies: [
      { name: 'Node.js', since: '2018', projects: '180+', description: 'JavaScript runtime for scalable server-side applications' },
      { name: 'Python', since: '2019', projects: '120+', description: 'Versatile language for AI/ML and web development' },
      { name: 'Django', since: '2020', projects: '40+', description: 'High-level Python web framework' },
      { name: 'FastAPI', since: '2021', projects: '60+', description: 'Modern, fast web framework for building APIs' },
      { name: 'GraphQL', since: '2020', projects: '50+', description: 'Query language for APIs' }
    ]
  },
  mobile: {
    icon: Smartphone,
    title: 'Mobile',
    technologies: [
      { name: 'React Native', since: '2019', projects: '80+', description: 'Cross-platform mobile app development' },
      { name: 'Flutter', since: '2020', projects: '45+', description: 'Google\'s UI toolkit for natively compiled apps' },
      { name: 'Swift', since: '2021', projects: '25+', description: 'Apple\'s programming language for iOS' },
      { name: 'Kotlin', since: '2021', projects: '30+', description: 'Modern language for Android development' }
    ]
  },
  ai: {
    icon: Zap,
    title: 'AI/ML',
    technologies: [
      { name: 'TensorFlow', since: '2020', projects: '35+', description: 'Open-source ML framework' },
      { name: 'PyTorch', since: '2021', projects: '25+', description: 'Deep learning framework' },
      { name: 'OpenAI GPT', since: '2023', projects: '40+', description: 'Large language models for AI applications' },
      { name: 'Hugging Face', since: '2022', projects: '30+', description: 'Transformers and NLP models' },
      { name: 'Scikit-learn', since: '2020', projects: '50+', description: 'Machine learning library for Python' }
    ]
  },
  cloud: {
    icon: Cloud,
    title: 'Cloud',
    technologies: [
      { name: 'AWS', since: '2019', projects: '100+', description: 'Amazon Web Services cloud platform' },
      { name: 'Google Cloud', since: '2020', projects: '40+', description: 'Google\'s cloud computing services' },
      { name: 'Azure', since: '2021', projects: '30+', description: 'Microsoft\'s cloud platform' },
      { name: 'Vercel', since: '2020', projects: '150+', description: 'Platform for frontend frameworks' }
    ]
  },
  database: {
    icon: Database,
    title: 'Database',
    technologies: [
      { name: 'PostgreSQL', since: '2018', projects: '120+', description: 'Advanced open-source relational database' },
      { name: 'MongoDB', since: '2019', projects: '80+', description: 'NoSQL document database' },
      { name: 'Redis', since: '2020', projects: '90+', description: 'In-memory data structure store' },
      { name: 'Firebase', since: '2019', projects: '70+', description: 'Google\'s mobile and web app platform' }
    ]
  },
  devops: {
    icon: Zap,
    title: 'DevOps',
    technologies: [
      { name: 'Docker', since: '2019', projects: '100+', description: 'Containerization platform' },
      { name: 'Kubernetes', since: '2020', projects: '40+', description: 'Container orchestration' },
      { name: 'GitHub Actions', since: '2020', projects: '150+', description: 'CI/CD automation' },
      { name: 'Terraform', since: '2021', projects: '25+', description: 'Infrastructure as code' }
    ]
  },
  design: {
    icon: Palette,
    title: 'Design',
    technologies: [
      { name: 'Figma', since: '2019', projects: '200+', description: 'Collaborative interface design tool' },
      { name: 'Adobe XD', since: '2018', projects: '80+', description: 'UX/UI design and prototyping' },
      { name: 'Sketch', since: '2018', projects: '60+', description: 'Digital design toolkit' },
      { name: 'Framer', since: '2020', projects: '40+', description: 'Interactive design and prototyping' }
    ]
  }
};

const whyNextjs = [
  'Server-side rendering (SEO boost)',
  'Lightning-fast page loads (<1s)',
  'Built-in image optimization',
  'Automatic code splitting',
  'Vercel deployment integration',
  'Best developer experience'
];

export default function TechnologiesPage() {
  const [activeTab, setActiveTab] = useState('frontend');
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
            Our Technology Arsenal
          </h1>
          <p className="large mt-6 text-balance text-xl max-w-3xl mx-auto">
            Best-in-Class. Battle-Tested. Future-Proof.
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We choose technologies that deliver performance, scalability, and maintainability. Every tool in our stack has been proven across hundreds of projects.
          </p>
        </motion.div>
      </section>

      {/* Tech Stack Explorer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Interactive Tech Stack Explorer</h2>
            <p className="text-muted-foreground">
              Click on any category to explore our expertise
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="h-auto bg-background/50 backdrop-blur-sm border-2 flex-wrap">
                {Object.entries(techCategories).map(([key, category]) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="text-sm md:text-base px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {category.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {Object.entries(techCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <CardHeader className="relative z-10">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {tech.name}
                            </CardTitle>
                            <Badge variant="outline" className="text-xs">
                              Since {tech.since}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{tech.projects} Projects</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Next.js Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-primary/50 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Code className="h-8 w-8 text-primary" />
                  Why Next.js?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Next.js is our go-to framework for most web projects. Here's why:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyNextjs.map((reason, index) => (
                    <motion.div
                      key={reason}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Recommender */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Not Sure What Tech Stack You Need?</h2>
            <p className="text-muted-foreground">
              Let us recommend the best technologies for your project
            </p>
          </motion.div>

          <Card className="border-2 border-primary/50 p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Tech Stack Recommender</h3>
                <p className="text-muted-foreground mb-6">
                  Answer a few questions and we'll recommend the optimal technology stack for your project.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    What are you building?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Mobile App', 'Web App', 'E-commerce', 'AI Solution'].map((option) => (
                      <button
                        key={option}
                        className="p-3 border-2 border-border rounded-lg hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Expected user base?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['<1K', '1K-10K', '10K-100K', '100K+'].map((option) => (
                      <button
                        key={option}
                        className="p-3 border-2 border-border rounded-lg hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Budget range?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['<₹5L', '₹5L-15L', '₹15L-50L', '₹50L+'].map((option) => (
                      <button
                        key={option}
                        className="p-3 border-2 border-border rounded-lg hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full group">
                <Link href="/contact">
                  Get Recommendation
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
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
              Ready to Build with Best-in-Class Tech?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss which technologies are right for your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get Tech Consultation
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 group">
                <Link href="/work">
                  View Projects
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
