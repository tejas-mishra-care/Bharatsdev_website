
import { insights } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug);

  if (!insight) {
    notFound();
  }

  const otherInsights = insights.filter(i => i.slug !== params.slug).slice(0, 2);

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Insight</p>
            <h1 className="text-balance">{insight.title}</h1>
            <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap mt-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>BharatsDev Team</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{insight.date}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{insight.readTime}</span>
                </div>
            </div>
          </header>

          {insight.image && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-12 shadow-lg border">
              <Image
                src={insight.image.imageUrl}
                alt={insight.image.description}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-muted-foreground leading-relaxed">
             <p className="lead text-xl text-foreground/90 mb-8">{insight.excerpt}</p>
             <p>In the world of enterprise software, speed is often the enemy of quality. Deadlines clash with robust architecture, and the pressure to deliver often results in technical debt. When UltraTech Cement, India’s largest cement manufacturer, approached us with a mission-critical project and a 48-hour timeline, we saw an opportunity to prove that our lean-ops model could deliver both.</p>
             <p>The challenge was immense: build a secure, scalable, enterprise-grade certification portal for their vast network of dealers. This wasn’t just a simple web app; it required complex approval workflows, role-based access control, and real-time data management. Most agencies would quote weeks, if not months. We quoted two days.</p>
             <h3 className="text-foreground">The Architecture of Speed</h3>
             <p>How did we do it? By treating strategy as an engineering discipline. In a 2-hour discovery call, we architected the entire system. We chose a serverless stack—Next.js on the frontend and Firebase for the backend—to eliminate infrastructure overhead. Our Founder/CTO, Tejas Mishra, personally wrote the core logic, eliminating the communication bottlenecks that plague traditional teams.</p>
             <ul className="list-disc pl-6 space-y-2 my-6">
                <li><strong className="font-semibold text-foreground">Day 1 (0-24 Hours):</strong> Backend data models in Firestore were defined and secured with rules. Frontend components were built in parallel. Secure authentication flows were implemented.</li>
                <li><strong className="font-semibold text-foreground">Day 2 (24-48 Hours):</strong> Frontend and backend were integrated. Rigorous end-to-end testing was conducted by our Head of Project Management. The final system was deployed, and full source code and documentation were handed over.</li>
             </ul>
             <p>The result was a fully functional, production-ready system with zero post-launch bugs, delivered on time and on budget. This case study isn't just about speed; it's a testament to our philosophy: with the right model, technical excellence, and direct leadership, you can achieve the seemingly impossible.</p>
          </div>
        </article>
      </div>

       <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-foreground">Read More Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {otherInsights.map((item) => (
                    <Link key={item.slug} href={`/insights/${item.slug}`} className="block group">
                        <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border h-full">
                            <p className="text-sm text-primary font-semibold mb-2">{item.readTime}</p>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mt-3">{item.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
       </section>

    </div>
  );
}
