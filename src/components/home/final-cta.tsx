
'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2, Info, ArrowRight } from 'lucide-react';
import { handleContactForm, type FormState } from '@/app/contact/actions';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Submitting...
        </>
      ) : (
        'Get Free Consultation →'
      )}
    </Button>
  );
}

export function FinalCta() {
    const initialState: FormState = { message: '' };
    const [state, dispatch] = useActionState(handleContactForm, initialState);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
            ref={ref}
            className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                 <h2 className="text-foreground text-balance mb-4">Ready to Build Your Growth Engine?</h2>
                 <p className="large text-muted-foreground mb-8 text-balance">
                    Submit your project details and our founder will get back to you within 24 hours to schedule your free strategy call.
                 </p>
                 <form action={dispatch} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name*</Label>
                        <Input id="name" name="name" required />
                         {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input id="email" name="email" type="email" required />
                         {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="message">Project Details*</Label>
                        <Textarea id="message" name="message" required />
                         {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                    </div>
                    {/* Hidden fields for the action to work */}
                    <input type="hidden" name="projectType" value="not-sure" />
                    <input type="hidden" name="budget" value="not-sure" />
                    <input type="hidden" name="agreement" value="on" />
                    <div>
                        <SubmitButton />
                    </div>
                     {state.message && !state.errors && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-500 font-medium flex items-center gap-2"
                        >
                            <Check /> {state.message}
                        </motion.div>
                    )}
                    {state.message && state.errors && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-destructive font-medium flex items-center gap-2"
                        >
                            <Info className="h-4 w-4"/> {state.message}
                        </motion.div>
                    )}
                </form>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-background rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-xl relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-6">What You Get</h3>
                    <ul className="space-y-4 text-muted-foreground">
                        {[
                            { text: "A", bold: "free 30-minute strategy call", rest: "to discuss your goals.", key: "call" },
                            { text: "A", bold: "custom project roadmap", rest: "and technical architecture plan.", key: "roadmap" },
                            { text: "A detailed,", bold: "no-obligation project estimate", rest: "and timeline.", key: "estimate" },
                            { text: "A guaranteed response", bold: "within 24 hours", rest: ".", key: "response" },
                        ].map((item, index) => (
                            <motion.li
                                key={item.key}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                                className="flex items-start group/item"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                </motion.div>
                                <span className="group-hover/item:text-foreground transition-colors">
                                    {item.text} <strong className="font-semibold text-foreground">{item.bold}</strong> {item.rest}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                     <p className="text-sm text-muted-foreground mt-6 border-t border-border pt-6">
                        <strong className="text-foreground">Limited slots available for new projects.</strong> Let's build something exceptional together.
                    </p>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
