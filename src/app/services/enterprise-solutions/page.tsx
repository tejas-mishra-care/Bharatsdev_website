import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HardHat, Bot, Database, Blocks } from 'lucide-react';
import Link from 'next/link';

const includedItems = [
    {
        title: "AI-Powered Tools & Integration",
        description: "We build and integrate custom AI solutions—from internal knowledge base search to automated workflows and data analysis tools—that create a tangible competitive advantage for your business.",
        whyItMatters: "AI isn't a buzzword; it's a force multiplier. Custom AI tools can automate complex tasks, uncover hidden insights, and dramatically increase your team's efficiency."
    },
    {
        title: "Custom CRM/ERP Development",
        description: "Off-the-shelf software doesn't fit your unique workflow. We build bespoke Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems from the ground up, tailored to your exact processes.",
        whyItMatters: "A custom CRM/ERP eliminates frustrating workarounds and data silos, creating a single source of truth that aligns your entire operation and scales with you."
    },
    {
        title: "Platform Integrations & Legacy Modernization",
        description: "Your systems need to talk to each other. We specialize in complex API integrations and modernizing legacy platforms, unlocking data and functionality trapped in outdated software.",
        whyItMatters: "Modernization isn't just about a new interface. It's about improving security, performance, and unlocking the business value of your existing data infrastructure."
    },
    {
        title: "Engineering Calculators & Certification Portals",
        description: "We have deep expertise in building specialized, high-stakes tools for technical industries, including complex engineering calculators and secure certification portals like the one we delivered for UltraTech.",
        whyItMatters: "For industries where precision is non-negotiable, our custom-built tools ensure accuracy, security, and reliability for your most critical business functions."
    }
];

const faqs = [
    {
        question: "Is a custom solution more expensive than off-the-shelf software?",
        answer: "Initially, yes, but the long-term ROI is often significantly higher. A custom solution is built for your exact needs, eliminating licensing fees for features you don't use and reducing costs associated with inefficient workflows. It's an asset you own, not a subscription you rent."
    },
    {
        question: "How do you handle sensitive data and security for enterprise apps?",
        answer: "Security is our top priority. We follow industry best practices for data encryption, access control, and secure coding. Every enterprise project undergoes a rigorous security audit before deployment, architected directly by our Founder/CTO."
    },
    {
        question: "Can you build a solution that integrates with our existing software?",
        answer: "Yes. Integration is one of our core strengths. We can connect your new solution with existing databases, third-party APIs, and legacy systems to ensure a seamless flow of data across your entire operation."
    }
]

export default function EnterpriseSolutionsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center md:text-left bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-balance">
                Custom Enterprise Solutions
            </h1>
            <p className="large mt-6 text-balance">
                Modernize Your Operations. We build the high-performance tools, platforms, and systems that enterprises rely on to win.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Get a Custom Quote</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem You're Solving */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-foreground">Your Business Runs on Systems. Are Yours Holding You Back?</h2>
             <div className="border-l-4 border-primary bg-secondary p-6 md:p-8 rounded-lg text-left mt-8">
                <p className="large text-foreground/90 text-balance">
                Off-the-shelf software forces you into a box, legacy systems create data silos, and disconnected tools kill productivity. Your business is unique; your software should be too. <strong className="font-semibold text-foreground">We don't sell software. We engineer operational advantages.</strong>
                </p>
            </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-foreground">Our Approach: Mission-Critical Engineering</h2>
                <p className="large max-w-2xl mx-auto mt-4 text-balance">We build systems designed for reliability, scalability, and impact.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                <div className="space-y-4">
                    <Database className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">1. Workflow Architecture</h3>
                    <p className="max-w-sm mx-auto">We map your entire operational workflow to design a system that eliminates bottlenecks and enhances productivity at every step.</p>
                </div>
                <div className="space-y-4">
                    <Bot className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">2. Scalable & Secure Build</h3>
                    <p className="max-w-sm mx-auto">Our solutions are built on modern, scalable architecture, ensuring they can grow with your business and are secure from day one.</p>
                </div>
                <div className="space-y-4">
                    <Blocks className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">3. Seamless Integration</h3>
                    <p className="max-w-sm mx-auto">We ensure your new system integrates perfectly with your existing tools, creating a unified data ecosystem across your entire organization.</p>
                </div>
            </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center mb-12 text-foreground">What&apos;s Included in Enterprise Solutions</h2>
          <div className="space-y-6">
            {includedItems.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{item.description}</p>
                  <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary/50">
                    <p className="font-semibold text-foreground">Why It Matters:</p>
                    <p className="text-sm">{item.whyItMatters}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Pricing Model */}
       <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-foreground mb-4">Transparent Pricing</h2>
             <div className="bg-background p-8 rounded-2xl shadow-lg border">
                <p className="large text-foreground/90 mb-4 text-balance">
                We price based on scope, not hours. Every project receives a fixed-price proposal after our discovery call. This ensures you have complete budget clarity from day one.
                </p>
                <p className="text-2xl font-bold text-primary">Custom Enterprise Solutions typically start at ₹3,00,000.</p>
            </div>
        </div>
       </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center mb-12 text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-secondary p-4 rounded-lg shadow-sm border">
                <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-foreground text-balance mb-6">
            Ready to Build Your Operational Advantage?
          </h2>
          <p className="large max-w-2xl mx-auto mb-8 text-balance">
            Let's discuss how a custom-engineered solution can solve your most complex operational challenges.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Book Your Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
