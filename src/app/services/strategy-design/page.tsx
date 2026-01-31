import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Compass, Eye, Users } from 'lucide-react';
import Link from 'next/link';

const includedItems = [
    {
        title: "Brand Identity & Asset Packages",
        description: "We don't just create a logo; we build a complete brand system—logo suite, color palette, typography, and usage guidelines—that ensures consistency everywhere.",
        whyItMatters: "A strong brand identity builds trust and recognition, making you memorable in a crowded market."
    },
    {
        title: "UI/UX Design",
        description: "Our design process is rooted in user psychology. We create interfaces that are not only beautiful but also intuitive, guiding users effortlessly toward your goals.",
        whyItMatters: "Great UI/UX reduces friction, increases user engagement and retention, and directly impacts your conversion rates."
    },
    {
        title: "Digital Strategy Audits",
        description: "We perform a deep-dive analysis of your existing digital ecosystem to identify weaknesses, untapped opportunities, and strategic pivots for growth.",
        whyItMatters: "You can't fix what you don't measure. An audit gives you a clear, data-backed roadmap for improvement."
    },
    {
        title: "Technology Advisory",
        description: "Leverage our CTO-level expertise to choose the right technology stack for your project, ensuring scalability, security, and performance from day one.",
        whyItMatters: "Choosing the wrong tech can cost you millions in the long run. We help you make the right decision, the first time."
    }
];

const faqs = [
    {
        question: "Is this service required for every project?",
        answer: "Highly recommended. A solid blueprint is the single best investment you can make to de-risk your project and ensure the final product meets your business goals."
    },
    {
        question: "What's the output of a 'Digital Strategy Audit'?",
        answer: "You receive a comprehensive report detailing our findings, data analysis, and a prioritized list of actionable recommendations to improve your digital presence and performance."
    },
    {
        question: "How long does the Strategy & Design phase take?",
        answer: "Typically 1-3 weeks, depending on the complexity of the project. This initial investment in time saves months of development and rework later on."
    }
]

export default function StrategyDesignPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center md:text-left bg-secondary">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl">
                <h1 className="text-balance">
                    Strategy & Design
                </h1>
                <p className="large mt-6 text-balance">
                    Blueprint Your Success. Before we write a single line of code, we build the strategic foundation for your digital engine.
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
            <h2 className="text-foreground">The Cost of No Strategy</h2>
            <div className="border-l-4 border-primary bg-secondary p-6 md:p-8 rounded-lg text-left mt-8">
                <p className="large text-foreground/90 text-balance">
                You have a great idea, but launching a product without a blueprint is like building a skyscraper on sand. Most agencies jump straight into coding, leading to bloated budgets, missed deadlines, and a final product that doesn't solve the core business problem. <strong className="font-semibold text-foreground">We&apos;re different. We are architects first, then builders.</strong>
                </p>
            </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-foreground">Our Approach: Engineer the Plan</h2>
                <p className="large max-w-2xl mx-auto mt-4 text-balance">We treat strategy as an engineering discipline.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                <div className="space-y-4">
                    <Compass className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">1. Deep Discovery</h3>
                    <p className="max-w-sm mx-auto">We immerse ourselves in your business, market, and user psychology to understand the real problem we need to solve.</p>
                </div>
                <div className="space-y-4">
                    <Eye className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">2. User-Centric Design</h3>
                    <p className="max-w-sm mx-auto">We map user journeys and create wireframes and prototypes focused on intuition and conversion, not just aesthetics.</p>
                </div>
                <div className="space-y-4">
                    <Users className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">3. Stakeholder Alignment</h3>
                    <p className="max-w-sm mx-auto">We ensure all stakeholders are aligned on the vision, scope, and success metrics before development begins.</p>
                </div>
            </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center mb-12 text-foreground">What&apos;s Included in Your Blueprint</h2>
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
                <p className="text-2xl font-bold text-primary">Strategy & Design projects typically start at ₹75,000.</p>
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
            Ready to Build on a Rock-Solid Foundation?
          </h2>
          <p className="large max-w-2xl mx-auto mb-8 text-balance">
            Invest in a strategic blueprint today to save time and money tomorrow.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Book Your Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
