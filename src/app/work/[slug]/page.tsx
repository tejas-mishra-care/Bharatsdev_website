
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolio } from '@/lib/data';
import { Check, Clock, Code, Users, Briefcase, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';


export async function generateStaticParams() {
  return portfolio.all.map((project) => ({
    slug: project.id,
  }));
}

const processSteps = [
    { title: 'Discovery & Strategy', description: 'Defined core requirements and user flows in a 2-hour kick-off call.' },
    { title: 'Architecture & Planning', description: 'Architected a scalable backend with secure data models and built a component library.' },
    { title: 'Development & Build', description: 'Executed parallel development of the frontend and backend with direct CTO oversight.' },
    { title: 'QA & Testing', description: 'Conducted rigorous end-to-end testing, including security checks and user acceptance testing.' },
    { title: 'Launch & Handover', description: 'Deployed the complete solution and handed over full source code and documentation.' }
]

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = portfolio.all.find(p => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolio.all.filter(p => p.id !== params.slug).slice(0, 3);
  
  const stats = [
    { label: 'Client', value: project.title.split(' - ')[0], icon: Briefcase },
    { label: 'Category', value: project.category, icon: Code },
  ];
  if (project.id === 'ultratech-shashwat') {
    stats.unshift({ label: 'Timeline', value: '48 Hours', icon: Clock });
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        {project.image && (
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <Link href="/work" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>All Projects</span>
          </Link>
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">{project.tag || project.category}</p>
          <h1 className="text-white text-balance">{project.title}</h1>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
            
          {/* Overview */}
          <section className="mb-16 md:mb-20">
            <div className="grid md:grid-cols-5 gap-12">
                <div className="md:col-span-3">
                    <h2 className="text-foreground mb-4">The Project</h2>
                    <p className="large text-muted-foreground">{project.description}</p>
                </div>
                <div className="md:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Project Info</h3>
                    {stats.map(stat => (
                      <div key={stat.label} className="flex items-center gap-3 text-muted-foreground">
                        <stat.icon className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm">{stat.label}</p>
                            <p className="font-semibold text-foreground">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                    {project.techStack && (
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Code className="w-5 h-5 text-primary mt-1" />
                             <div>
                                <p className="text-sm">Tech Stack</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {project.techStack.split(', ').map(tech => (
                                        <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </section>

          {/* The Process */}
          <section className="mb-16 md:mb-20">
             <h2 className="text-center mb-12 text-foreground">Our Process</h2>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative flex items-center md:pl-8">
                      <div className="relative z-10">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{index + 1}</div>
                      </div>
                      <div className={`w-full pl-8 md:pl-12`}>
                        <Card className={`p-6 hover:shadow-xl hover:-translate-y-1`}>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground mt-2">{step.description}</p>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </section>

          {/* The Solution */}
          <section className="mb-16 md:mb-20 space-y-8">
            <h2 className="text-center mb-12 text-foreground">The Solution</h2>
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                     {project.image && <Image src={project.image.imageUrl} alt="Dashboard screenshot" width={1200} height={800} className="w-full"/>}
                </CardContent>
            </Card>
          </section>

          {/* Next Steps CTA */}
          <section className="text-center py-10">
            <h2 className="text-foreground text-balance">Have a Similar Challenge?</h2>
            <p className="large mt-4 mb-8 text-balance">Let&apos;s architect and deliver your mission-critical solution with speed and precision.</p>
            <Button asChild size="lg">
                <Link href="/contact">Let&apos;s Build Your Solution</Link>
            </Button>
          </section>
        </div>
      </main>

       {/* Other Projects */}
       <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-foreground">Explore Other Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {otherProjects.map((item) => (
                    <Link key={item.id} href={`/work/${item.id}`} className="block group">
                        <Card className="text-left overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {item.image && (
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={item.image.imageUrl}
                                        alt={item.image.description}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        data-ai-hint={item.image.imageHint}
                                    />
                                </div>
                            )}
                            <CardContent className="p-6 space-y-2 flex-grow">
                                <Badge variant="secondary">{item.category}</Badge>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <span className="font-semibold text-primary">View Case Study →</span>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
       </section>

    </div>
  );
}
