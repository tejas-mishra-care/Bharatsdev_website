'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { insights } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Search, Clock, Calendar, BookOpen } from 'lucide-react';

const categories = ['All Articles', 'Web Dev', 'Mobile', 'AI/ML', 'Design', 'Case Studies', 'Tutorials', 'Industry Trends'];

const featuredInsight = insights.find(i => i.isFeatured);
const otherInsights = insights.filter(i => !i.isFeatured);

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const filteredInsights = otherInsights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  if (!featuredInsight) return null;

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-b from-secondary/50 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <motion.div
          ref={heroRef}
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance mb-6">
            Insights & Tutorials
          </h1>
          <p className="large mt-6 text-balance text-xl max-w-3xl mx-auto">
            Technical deep-dives. Industry trends. Real talk.
          </p>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/insights/${featuredInsight.slug}`}>
              <Card className="grid md:grid-cols-2 items-center overflow-hidden border-2 border-primary/50 shadow-2xl group hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative aspect-video md:aspect-auto md:h-full">
                  {featuredInsight.image && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={featuredInsight.image.imageUrl}
                        alt={featuredInsight.image.description}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  )}
                </div>
                <div className="p-8 md:p-12 lg:p-16 relative z-10">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Featured Insight
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance group-hover:text-primary transition-colors">
                    {featuredInsight.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{featuredInsight.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredInsight.date}</span>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredInsight.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Read Article
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">All Insights</h2>
            <p className="text-muted-foreground">
              {filteredInsights.length} article{filteredInsights.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>
          
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, index) => (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="group overflow-hidden flex flex-col h-full border-2 hover:border-primary/50 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Link href={`/insights/${insight.slug}`} className="flex flex-col h-full">
                      {insight.image && (
                        <div className="aspect-video overflow-hidden relative">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full"
                          >
                            <Image
                              src={insight.image.imageUrl}
                              alt={insight.image.description}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        </div>
                      )}
                      <CardContent className="p-6 space-y-3 flex-grow relative z-10">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="flex items-center gap-1 text-primary">
                            <Clock className="h-4 w-4" />
                            <span className="font-semibold">{insight.readTime}</span>
                          </div>
                          <span className="text-muted-foreground">&bull;</span>
                          <span className="text-muted-foreground">{insight.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {insight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{insight.excerpt}</p>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:gap-4 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No articles found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 border-2 border-primary/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">Get Weekly Insights</h2>
              <p className="text-muted-foreground mb-6">
                Delivered to your inbox every Friday
              </p>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="group">
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
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
              Ready to Build Your Growth Engine?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help transform your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
