import { PlaceHolderImages as placeholderImages } from '@/lib/placeholder-images';
import { Users2, CheckCircle, Trophy, Handshake, Gauge, Scaling, Eye, Workflow, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tejasPhoto = placeholderImages.find(p => p.id === 'founder-photo');
const shristiPhoto = placeholderImages.find(p => p.id === 'shristi-photo');

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-balance">
            Built by Engineers. Run Like a System.
          </h1>
          <p className="large max-w-3xl mx-auto mt-6 text-balance">
            We&apos;re BharatsDev—a lean, high-performance agency designed for one thing: delivering exceptional digital solutions without the overhead.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-6">
                 <h2 className="text-foreground">
                    Our Story
                </h2>
                <p className="large text-balance">
                    BharatsDev was founded on a simple belief: businesses need finished digital assets, not open-ended retainers. In 2024, Founder Tejas Mishra architected our lean-ops model—a 2-person leadership structure that eliminates bloat and prioritizes speed, quality, and direct client access.
                </p>
                <div className="border-l-4 border-primary bg-secondary p-6 rounded-r-lg text-left max-w-3xl mx-auto">
                    <p className="font-semibold text-foreground text-lg md:text-xl text-balance">
                        Our defining moment came when we delivered the UltraTech Shashwat certification portal—a complex, enterprise-grade system—in under 48 hours. That project became our standard.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-foreground">The Lean-Ops Advantage</h2>
            <p className="large max-w-3xl mx-auto mt-4 text-balance">
              Why We&apos;re Different
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col p-8 text-center items-center">
              {tejasPhoto && <Image src={tejasPhoto.imageUrl} alt="Tejas Mishra" width={128} height={128} className="rounded-full mb-4 w-32 h-32 object-cover" />}
              <CardHeader className="items-center">
                <CardTitle className="text-foreground">The Back-End: Technical Excellence</CardTitle>
                <p className="text-primary font-semibold pt-1">Tejas Mishra - Founder, CEO &amp; CTO</p>
              </CardHeader>
              <CardContent className="text-muted-foreground flex-1">
                <p>Tejas owns every technical and financial aspect of the agency. He scopes every project, manages all technical freelancers, and performs the final QA on every deliverable. When you work with BharatsDev, you&apos;re working directly with our Founder/CTO.</p>
              </CardContent>
              <Button asChild variant="link" className="mt-4">
                <Link href="#">View LinkedIn Profile →</Link>
              </Button>
            </Card>
            <Card className="flex flex-col p-8 text-center items-center">
              {shristiPhoto && <Image src={shristiPhoto.imageUrl} alt="Shristi Mishra" width={128} height={128} className="rounded-full mb-4 w-32 h-32 object-cover" />}
              <CardHeader className="items-center">
                <CardTitle className="text-foreground">The Front-End: Client Partnership</CardTitle>
                <p className="text-primary font-semibold pt-1">Shristi Mishra - Head of Project Management</p>
              </CardHeader>
              <CardContent className="text-muted-foreground flex-1">
                <p>Shristi is your single point of contact throughout your project. She manages communication, timelines, and ensures seamless execution. Our 50/50 profit-split model means she&apos;s as invested in your success as you are.</p>
              </CardContent>
               <Button asChild variant="link" className="mt-4">
                <Link href="#">View LinkedIn Profile →</Link>
              </Button>
            </Card>
            <Card className="flex flex-col p-8 text-center items-center bg-primary text-primary-foreground">
              <div className="p-4 bg-white/10 rounded-full mb-4"><Users2 className="w-16 h-16 text-white" /></div>
              <CardHeader className="items-center">
                <CardTitle className="text-white">The Freelancer Network</CardTitle>
                 <p className="text-white/80 font-semibold pt-1">On-Demand Expertise</p>
              </CardHeader>
              <CardContent className="text-white/90 flex-1">
                <p>We maintain a vetted network of specialist freelancers—developers, designers, and technical experts—who are activated only when needed for your specific project. No bench. No overhead. No paying for idle time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
       <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Our Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="space-y-4">
                <Trophy className="h-10 w-10 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Project-Based is Better</h3>
                <p className="max-w-sm mx-auto">Long-term retainers create misaligned incentives. We believe in defined scope, fixed timelines, and finished deliverables. Your project should have an end date—and you should own the asset.</p>
            </div>
             <div className="space-y-4">
                <Gauge className="h-10 w-10 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Speed Without Sacrifice</h3>
                <p className="max-w-sm mx-auto">Our lean model enables rapid execution without compromising quality. Direct leadership involvement, no bureaucracy, and a culture of ownership mean we can move fast.</p>
            </div>
             <div className="space-y-4">
                <CheckCircle className="h-10 w-10 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Proof Over Promises</h3>
                <p className="max-w-sm mx-auto">We don&apos;t rely on sales decks or marketing speak. Our work—like the UltraTech 48-hour build—speaks for itself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-foreground">How We Work</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
            <div className="space-y-12">
              {[
                { title: 'Discovery & Scoping', description: 'We understand your problem' },
                { title: 'Fixed-Price Proposal', description: 'We define the solution' },
                { title: 'Contract & Kickoff', description: 'We start building' },
                { title: 'Build & QA', description: 'We deliver with precision' },
                { title: 'Launch & Handover', description: 'You own the finished asset' },
              ].map((step, index) => (
                <div key={index} className="relative flex items-center md:pl-8">
                  <div className="relative z-10">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{index + 1}</div>
                  </div>
                  <div className={`w-full pl-8 md:pl-12`}>
                    <Card className={`p-6`}>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-foreground">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <Card className="p-6 border-t-4 border-primary/20 hover:border-primary">
                    <Scaling className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Precision</h3>
                    <p className="mt-2 text-muted-foreground">We engineer, we don&apos;t approximate</p>
                </Card>
                <Card className="p-6 border-t-4 border-primary/20 hover:border-primary">
                    <Eye className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Transparency</h3>
                    <p className="mt-2 text-muted-foreground">Fixed pricing. Clear timelines. No surprises.</p>
                </Card>
                 <Card className="p-6 border-t-4 border-primary/20 hover:border-primary">
                    <Handshake className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Ownership</h3>
                    <p className="mt-2 text-muted-foreground">We treat your project like it&apos;s ours</p>
                </Card>
                 <Card className="p-6 border-t-4 border-primary/20 hover:border-primary">
                    <Workflow className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Efficiency</h3>
                    <p className="mt-2 text-muted-foreground">Lean by design. Fast by default.</p>
                </Card>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-foreground text-balance mb-6">
            Work With Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/contact">Schedule a Discovery Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
