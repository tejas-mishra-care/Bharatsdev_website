'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2, Info, ArrowRight } from 'lucide-react';
import { handleContactForm, type FormState } from '@/app/contact/actions';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={springTransition}>
            <Button type="submit" disabled={pending} className="w-full h-14 bg-primary text-black hover:bg-primary/90 font-bold rounded-md shadow-[0_0_20px_rgba(67,135,244,0.2)]" size="lg">
                {pending ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Initializing...
                    </>
                ) : (
                    <>Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></>
                )}
            </Button>
        </motion.div>
    );
}

export function FinalCta() {
    const initialState: FormState = { message: '' };
    const [state, dispatch] = useActionState(handleContactForm, initialState);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden border-t border-[#2A2A2E]">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_074327_a4d6275d-82d9-4c83-bfbe-f1fb2213c17c.mp4"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 px-4">
                <motion.div
                    ref={ref}
                    className="grid lg:grid-cols-2 gap-16 items-start"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={springTransition}
                        className="pt-8"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#222222] bg-[#0A0A0A] mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-chrome text-xs font-semibold uppercase tracking-widest">
                                Project Scoping
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white mb-6 text-balance">
                            Ready to Build? Start Your Project.
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 font-sans text-balance">
                            Tell us what you need. Our founder will review your request and get back to you within 24 hours to schedule your strategy call.
                        </p>
                        
                        <div className="bg-[#111113]/80 backdrop-blur-2xl p-8 rounded-3xl border border-[#2A2A2E] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#2563EB]" />
                            <h3 className="text-2xl font-bold font-heading text-white mb-6">The Protocol</h3>
                            <ul className="space-y-4">
                                {[
                                    { text: "Submit your initial project details." },
                                    { text: "We review to ensure it's a mutual fit." },
                                    { text: "Direct 30-min strategy call with Tejas Mishra." },
                                    { text: "Receive a fixed-price proposal & timeline." }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-chrome">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-sm border border-primary/30">
                                            <Check className="h-4 w-4 text-primary" />
                                        </div>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={springTransition}
                        className="bg-black/40 backdrop-blur-3xl p-8 md:p-10 rounded-[2rem] border border-[#2A2A2E] shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <form action={dispatch} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-chrome">Name / Company</Label>
                                    <Input id="name" name="name" required className="bg-black border-[#222222] text-white focus-visible:ring-cyan h-12" />
                                    {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-chrome">Email Address</Label>
                                    <Input id="email" name="email" type="email" required className="bg-black border-[#222222] text-white focus-visible:ring-cyan h-12" />
                                    {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-chrome">Project Scope / Requirements</Label>
                                    <Textarea id="message" name="message" required className="bg-black border-[#222222] text-white focus-visible:ring-cyan min-h-[150px] resize-none" />
                                    {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                                </div>
                                
                                {/* Hidden fields required by action */}
                                <input type="hidden" name="projectType" value="not-sure" />
                                <input type="hidden" name="budget" value="not-sure" />
                                <input type="hidden" name="agreement" value="on" />
                                
                                <div className="pt-4">
                                    <SubmitButton />
                                </div>
                                
                                {state.message && !state.errors && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-primary font-medium flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-md"
                                    >
                                        <Check className="h-5 w-5" /> {state.message}
                                    </motion.div>
                                )}
                                {state.message && state.errors && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-destructive font-medium flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-md"
                                    >
                                        <Info className="h-5 w-5" /> {state.message}
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
