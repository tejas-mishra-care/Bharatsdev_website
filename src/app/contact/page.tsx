import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Check } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './contact-form';
import { SocialGrid } from '@/components/ui/social-grid';
import { UiverseCard } from '@/components/ui/uiverse-card';
import { motion } from 'framer-motion';

const contactFaqs = [
  {
    question: "Do you work with clients outside India?",
    answer: "Yes, we work with clients globally. Our remote-first model allows us to collaborate seamlessly across different time zones.",
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines depend on project scope, but we are built for speed. Simple websites can be delivered in 1-2 weeks, while complex enterprise solutions may take 4-12 weeks. We are famous for our 48-hour rapid delivery on critical projects.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, for larger projects, we typically structure payments around project milestones. This will be detailed in your fixed-price proposal."
  },
  {
    question: "Can I hire you for ongoing support?",
    answer: "No. Our core model is delivering finished, project-based assets. We do not offer open-ended retainers for ongoing support, which allows us to focus on delivering high-quality, complete products."
  },
  {
    question: "How do I get started?",
    answer: "The best way to start is by filling out the form on this page. Provide as much detail as possible, and our team will get in touch to schedule your discovery call with our founder."
  }
]

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 text-center bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="container mx-auto relative z-10">
          <h1 className="text-balance">
            Let&apos;s Build Something Great
          </h1>
          <p className="large max-w-3xl mx-auto mt-6 text-balance">
            Free consultation. No obligations. Quick response within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-15" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-primary/5">
                <ContactForm />
              </Card>
            </div>
            <div className="space-y-8 lg:sticky lg:top-32 self-start">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                  <li>We&apos;ll review your inquiry within 24 hours.</li>
                  <li>If it&apos;s a fit, our team will schedule a discovery call.</li>
                  <li>On the call, you&apos;ll speak directly with Tejas.</li>
                  <li>We&apos;ll follow up with a detailed proposal &amp; timeline.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Good Fit Checklist</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>You have a <strong className="font-semibold text-foreground">defined project</strong> or problem.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>You&apos;re looking for a <strong className="font-semibold text-foreground">finished solution</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>You value <strong className="font-semibold text-foreground">quality &amp; direct leadership</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>You prefer <strong className="font-semibold text-foreground">project-based work</strong> over retainers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground">More Ways to Reach Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <Card className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For general inquiries.</p>
              <Button asChild variant="link">
                <a href="mailto:contact@bharatsdev.com">contact@bharatsdev.com</a>
              </Button>
            </Card>
            <Card className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Call/WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Sales: +91 70771 30651<br />Support: +91 92095 12356</p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="link" size="sm">
                  <a href="tel:+917077130651">+91 70771 30651</a>
                </Button>
                <Button asChild variant="link" size="sm">
                  <a href="tel:+919209512356">+91 92095 12356</a>
                </Button>
              </div>
            </Card>
            <Card className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-2xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect with Us</h3>
              <SocialGrid />
              <p className="text-muted-foreground mt-6 text-sm">Follow our journey across platforms.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-15" />
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-center lg:text-left mb-12 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-2xl shadow-sm">
                    <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:no-underline px-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pt-2 px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <motion.div
              className="lg:block hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <UiverseCard />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto space-y-4 text-center">
          <h3 className="text-2xl font-bold text-foreground">Our Office</h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-balance mb-4">
            BharatsDev Digital Solutions<br />
            Chhatrapati Sambhajinagar, Maharashtra, India<br />
            Serving clients globally
          </p>
          <Button asChild variant="outline">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
