'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { personalBrandingAction, BrandingFormState } from './actions';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...
        </>
      ) : (
        'Get Feedback'
      )}
    </Button>
  );
}

export function PersonalBrandingAssistant() {
  const initialState: BrandingFormState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(personalBrandingAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.output) {
      formRef.current?.reset();
    }
  }, [state]);

  const renderMarkdown = (text: string) => {
    const html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/(\*|\-)\s/g, '<li>')
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(/\n/g, '<br />')
      .replace(/<br \/><li/g, '<li');
    return `<ul class="list-disc pl-5">${html}</ul>`;
  };

  return (
    <>
      <form ref={formRef} action={dispatch}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="brandDescription" className="text-foreground font-semibold">Brand Description*</Label>
            <Textarea
              id="brandDescription"
              name="brandDescription"
              placeholder="e.g., I am a software developer specializing in AI-driven solutions for the healthcare industry..."
              rows={4}
              aria-describedby="brandDescription-error"
            />
            {state.errors?.brandDescription && <p id="brandDescription-error" className="text-sm text-destructive pt-1">{state.errors.brandDescription[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="targetAudience" className="text-foreground font-semibold">Target Audience*</Label>
            <Input
              id="targetAudience"
              name="targetAudience"
              placeholder="e.g., Tech startups, hospital administrators, healthcare innovators"
              aria-describedby="targetAudience-error"
            />
             {state.errors?.targetAudience && <p id="targetAudience-error" className="text-sm text-destructive pt-1">{state.errors.targetAudience[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="goals" className="text-foreground font-semibold">Goals*</Label>
            <Input 
              id="goals" 
              name="goals" 
              placeholder="e.g., To be seen as a thought leader, attract consulting clients" 
              aria-describedby="goals-error"
            />
             {state.errors?.goals && <p id="goals-error" className="text-sm text-destructive pt-1">{state.errors.goals[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <SubmitButton />
          {state.message && state.errors && Object.keys(state.errors).length > 0 && (
            <p className="text-sm text-destructive">{state.message}</p>
          )}
        </CardFooter>
      </form>
      {state.output && (
        <div className="p-6 pt-0">
          <Alert className="bg-secondary/50 border-border">
            <AlertTitle className="text-2xl font-bold mb-6 text-primary">Branding Analysis Complete!</AlertTitle>
            <AlertDescription className="space-y-6 text-foreground">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Strengths</h3>
                <div className="text-muted-foreground prose prose-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(state.output.strengths) }} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Weaknesses</h3>
                 <div className="text-muted-foreground prose prose-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(state.output.weaknesses) }} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Recommendations</h3>
                 <div className="text-muted-foreground prose prose-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(state.output.recommendations) }} />
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
