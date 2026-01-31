'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { handleContactForm, type FormState } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

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
        <>
        Submit Inquiry
        <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(handleContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-6">
       <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Submit an Inquiry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-semibold text-foreground">Full Name*</Label>
          <Input id="name" name="name" required />
          {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold text-foreground">Email Address*</Label>
          <Input id="email" name="email" type="email" required />
          {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company" className="font-semibold text-foreground">Company</Label>
          <Input id="company" name="company" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="phone" className="font-semibold text-foreground">Phone (Optional)</Label>
            <Input id="phone" name="phone" type="tel" />
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <Label htmlFor="projectType" className="font-semibold text-foreground">Project Type*</Label>
            <Select name="projectType" required>
            <SelectTrigger>
                <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="strategy-design">Strategy & Design</SelectItem>
                <SelectItem value="app-development">App Development</SelectItem>
                <SelectItem value="website-ecommerce">Website/E-commerce</SelectItem>
                <SelectItem value="enterprise-solution">Custom Enterprise Solution</SelectItem>
                <SelectItem value="audit-setup">Technical Audit/Setup</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label htmlFor="budget" className="font-semibold text-foreground">Project Budget*</Label>
            <Select name="budget" required>
            <SelectTrigger>
                <SelectValue placeholder="Select a budget range" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="under-1L">Under ₹1L</SelectItem>
                <SelectItem value="1L-3L">₹1L - ₹3L</SelectItem>
                <SelectItem value="3L-5L">₹3L - ₹5L</SelectItem>
                <SelectItem value="5L-10L">₹5L - ₹10L</SelectItem>
                <SelectItem value="10L-plus">₹10L+</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
            </SelectContent>
            </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-semibold text-foreground">Tell us about your project, goals, and timeline*</Label>
        <Textarea id="message" name="message" rows={5} required />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      <div className="space-y-2 pt-2">
        <div className="flex items-center space-x-3">
            <Checkbox id="agreement" name="agreement" required />
            <Label htmlFor="agreement" className="text-sm font-normal text-muted-foreground">I understand BharatsDev works exclusively on project-based engagements, not retainers.</Label>
        </div>
        {state.errors?.agreement && <p className="text-sm text-destructive mt-2">{state.errors.agreement[0]}</p>}
      </div>
      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
