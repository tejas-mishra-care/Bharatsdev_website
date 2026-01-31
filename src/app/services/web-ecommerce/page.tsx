import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ShoppingCart, LayoutTemplate, Zap } from 'lucide-react';
import Link from 'next/link';

const includedItems = [
    {
        title: "Custom Website Development",
        description: "We build pixel-perfect websites from the ground up, engineered for your specific business goals, ensuring a unique brand experience that stands out.",
        whyItMatters: "A custom website gives you ultimate flexibility, better performance, and a distinct competitive advantage over template-based sites."
    },
    {
        title: "E-commerce Development (Shopify, WooCommerce, Custom)",
        description: "Whether you're a startup or an established brand, we build secure, scalable, and high-converting e-commerce platforms that turn visitors into loyal customers.",
        whyItMatters: "A well-architected e-commerce site directly translates to higher average order value, better customer retention, and increased revenue."
    },
    {
        title: "CMS Development & Integration",
        description: "Take control of your content. We build on and integrate with powerful Content Management Systems (CMS) that make it easy for your team to update your site without needing a developer.",
        whyItMatters: "A flexible CMS empowers your marketing team to be agile, publishing content quickly and keeping your site fresh and relevant."
    },
    {
        title: "High-Conversion Landing Pages",
        description: "For marketing campaigns that demand results, we engineer standalone landing pages with a single goal: to convert visitors into leads or customers at the highest possible rate.",
        whyItMatters: "Optimized landing pages are crucial for maximizing your return on ad spend (ROAS) and ensuring your campaign budget isn't wasted."
    }
];

const faqs = [
    {
        question: "Which e-commerce platform is right for my business?",
        answer: "It depends on your scale and complexity. Shopify is excellent for getting started quickly with a robust feature set. WooCommerce offers deep customization for WordPress sites. Custom solutions are for when you need unique features that off-the-shelf platforms can't provide. We'll help you choose during our discovery call."
    },
    {
        question: "Do you also handle website hosting and maintenance?",
        answer: "While we don't host websites directly, we provide expert guidance on the best hosting solutions for your needs and can deploy your site to any provider. We offer separate, project-based packages for ongoing maintenance and security."
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Yes. We can perform a full redesign and migration, focusing on modern UI/UX, improved performance, and better conversion architecture while preserving your existing content and SEO value."
    }
]

export default function WebEcommercePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center md:text-left bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-balance">
                Website & E-commerce
            </h1>
            <p className="large mt-6 text-balance">
                Convert Your Audience. We build websites and online stores engineered for conversion, speed, and search visibility.
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
            <h2 className="text-foreground">Your Website Should Be Your Best Salesperson</h2>
             <div className="border-l-4 border-primary bg-secondary p-6 md:p-8 rounded-lg text-left mt-8">
                <p className="large text-foreground/90 text-balance">
                Most websites are digital brochures—they look nice but do nothing to turn visitors into customers. They are slow, confusing, and fail to communicate value. This leads to wasted ad spend and lost opportunities. <strong className="font-semibold text-foreground">We build conversion engines, not just websites.</strong>
                </p>
            </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-foreground">Our Approach: Conversion Architecture</h2>
                <p className="large max-w-2xl mx-auto mt-4 text-balance">We engineer every pixel to guide users from click to conversion.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                <div className="space-y-4">
                    <LayoutTemplate className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">1. Customer Journey Mapping</h3>
                    <p className="max-w-sm mx-auto">We identify the single most important path a user should take and remove every point of friction along the way.</p>
                </div>
                <div className="space-y-4">
                    <Zap className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">2. Performance-First Build</h3>
                    <p className="max-w-sm mx-auto">We obsess over speed. Our sites load in under 1.5 seconds, ensuring you rank higher on Google and never lose a customer to a slow page.</p>
                </div>
                <div className="space-y-4">
                    <ShoppingCart className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">3. Revenue-Focused Design</h3>
                    <p className="max-w-sm mx-auto">From the copy to the checkout process, every element is A/B tested and optimized for one thing: maximizing your revenue.</p>
                </div>
            </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center mb-12 text-foreground">What&apos;s Included in Your Web Platform</h2>
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
                <p className="text-2xl font-bold text-primary">Website & E-commerce projects typically start at ₹1,00,000.</p>
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
            Ready to Build a Website That Sells?
          </h2>
          <p className="large max-w-2xl mx-auto mb-8 text-balance">
            Let's talk about building a high-performance web platform that becomes the core of your growth engine.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Book Your Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
