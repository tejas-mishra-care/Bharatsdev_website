

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { insights } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const featuredInsight = insights.find(i => i.isFeatured);
const otherInsights = insights;

export default function InsightsPage() {
  if (!featuredInsight) return null;

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-balance">
            Insights from Our Founder
          </h1>
          <p className="large max-w-3xl mx-auto mt-6 text-balance">
            Technical strategy, project post-mortems, and industry analysis from the front lines of digital engineering.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <Link href={`/insights/${featuredInsight.slug}`}>
                <Card className="grid md:grid-cols-2 items-center overflow-hidden border-2 border-primary shadow-2xl group hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-video md:aspect-auto md:h-full">
                        {featuredInsight.image && (
                            <Image
                                src={featuredInsight.image.imageUrl}
                                alt={featuredInsight.image.description}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        )}
                    </div>
                    <div className="p-8 md:p-12 lg:p-16">
                        <p className="text-primary font-semibold uppercase tracking-wider mb-2">Featured Insight</p>
                        <h2 className="text-foreground mb-4 text-balance">{featuredInsight.title}</h2>
                        <p className="text-muted-foreground mb-6">{featuredInsight.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{featuredInsight.date}</span>
                            <span>&bull;</span>
                            <span>{featuredInsight.readTime}</span>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-foreground">All Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherInsights.map((insight) => (
                    <Card key={insight.slug} className="group overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1">
                        <Link href={`/insights/${insight.slug}`} className="flex flex-col h-full">
                           {insight.image && (
                                <div className="aspect-video overflow-hidden">
                                     <Image
                                        src={insight.image.imageUrl}
                                        alt={insight.image.description}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                           )}
                           <CardContent className="p-6 space-y-3 flex-grow">
                                <p className="text-sm text-primary font-semibold">{insight.readTime}</p>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{insight.title}</h3>
                                <p className="text-sm text-muted-foreground">{insight.excerpt}</p>
                           </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <section className="py-20 bg-background">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-foreground text-balance mb-6">
            Ready to Build Your Growth Engine?
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
