'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const springTransition = { type: "spring", stiffness: 300, damping: 25 };

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', timeline: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send data to backend
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.1),transparent_50%)] pointer-events-none blur-[100px]" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Copy */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={springTransition}>
            <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-white mb-6">
              INITIALIZE <br/>
              <span className="text-[#2563EB]">THE PROTOCOL.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-sans mb-12 max-w-md">
              We protect our engineers' time. Fill out the project scope to see if we are a mutual fit.
            </p>

            <div className="bg-[#111113] border border-[#2A2A2E] rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 font-heading">HQ & Operations</h3>
              <div className="space-y-4 text-zinc-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#F97316]" />
                  <span>Headquartered in Maharashtra</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#2563EB]" />
                  <span>Operating Globally</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Multi-Step Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={springTransition} className="bg-[#0A0A0A] border border-[#2A2A2E] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2A2A2E]">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#F97316]"
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">
              Step 0{step} of 04
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                </div>
                <h3 className="text-3xl font-black font-heading text-white mb-4">Transmission Received</h3>
                <p className="text-zinc-400">Shristi will review your scope and contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={submitForm}>
                <AnimatePresence mode="wait">
                  
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">What do you need?</h3>
                      {['App Development', 'Web / E-commerce', 'Custom Enterprise Tool'].map(opt => (
                        <div 
                          key={opt}
                          onClick={() => setFormData({...formData, service: opt})}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${formData.service === opt ? 'bg-[#2563EB]/10 border-[#2563EB] text-[#2563EB]' : 'bg-black border-[#2A2A2E] text-zinc-400 hover:border-zinc-600'}`}
                        >
                          <span className="font-bold">{opt}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">What is the timeline?</h3>
                      {['Standard (4-8 Weeks)', '48-Hour Rush (Enterprise Only)'].map(opt => (
                        <div 
                          key={opt}
                          onClick={() => setFormData({...formData, timeline: opt})}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${formData.timeline === opt ? 'bg-[#F97316]/10 border-[#F97316] text-[#F97316]' : 'bg-black border-[#2A2A2E] text-zinc-400 hover:border-zinc-600'}`}
                        >
                          <span className="font-bold">{opt}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">What is your budget range?</h3>
                      {['$5k - $10k', '$10k - $25k', '$25k+ Enterprise'].map(opt => (
                        <div 
                          key={opt}
                          onClick={() => setFormData({...formData, budget: opt})}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${formData.budget === opt ? 'bg-white/10 border-white text-white' : 'bg-black border-[#2A2A2E] text-zinc-400 hover:border-zinc-600'}`}
                        >
                          <span className="font-bold">{opt}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">Final Details</h3>
                      <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black border border-[#2A2A2E] rounded-xl p-4 text-white focus:outline-none focus:border-[#2563EB]" />
                      <input type="email" placeholder="Work Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black border border-[#2A2A2E] rounded-xl p-4 text-white focus:outline-none focus:border-[#2563EB]" />
                      <textarea placeholder="Briefly describe the project..." required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-black border border-[#2A2A2E] rounded-xl p-4 text-white min-h-[120px] resize-none focus:outline-none focus:border-[#2563EB]" />
                    </motion.div>
                  )}

                </AnimatePresence>

                <div className="flex items-center justify-between mt-10 pt-8 border-t border-[#2A2A2E]">
                  {step > 1 ? (
                    <Button type="button" variant="ghost" onClick={handlePrev} className="text-zinc-400 hover:text-white">
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                  ) : <div></div>}
                  
                  {step < 4 ? (
                    <Button type="button" onClick={handleNext} disabled={(step === 1 && !formData.service) || (step === 2 && !formData.timeline) || (step === 3 && !formData.budget)} className="bg-white text-black hover:bg-zinc-200 font-bold px-8">
                      Next Step <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold px-8 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                      Submit Scope <Send className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
