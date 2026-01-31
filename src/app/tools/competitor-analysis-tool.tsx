'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { competitorAnalysisAction, CompetitorFormState } from './actions';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...
        </>
      ) : (
        'Analyze Competition'
      )}
    </Button>
  );
}

export function CompetitorAnalysisTool() {
  const initialState: CompetitorFormState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(competitorAnalysisAction, initialState);
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
            <Label htmlFor="businessDescription" className="text-foreground font-semibold">Your Business Description*</Label>
            <Textarea
              id="businessDescription"
              name="businessDescription"
              placeholder="e.g., We are a D2C coffee brand selling premium single-origin beans sourced from India."
              rows={3}
              aria-describedby="businessDescription-error"
            />
            {state.errors?.businessDescription && <p id="businessDescription-error" className="text-sm text-destructive pt-1">{state.errors.businessDescription[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="competitorNames" className="text-foreground font-semibold">Competitor Names*</Label>
            <Input
              id="competitorNames"
              name="competitorNames"
              placeholder="e.g., Blue Tokai, Third Wave Coffee, Sleepy Owl"
              aria-describedby="competitorNames-error"
            />
            {state.errors?.competitorNames && <p id="competitorNames-error" className="text-sm text-destructive pt-1">{state.errors.competitorNames[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="desiredInsights" className="text-foreground font-semibold">Desired Insights*</Label>
            <Input
              id="desiredInsights"
              name="desiredInsights"
              placeholder="e.g., Pricing strategies, marketing channels, product gaps"
              aria-describedby="desiredInsights-error"
            />
            {state.errors?.desiredInsights && <p id="desiredInsights-error" className="text-sm text-destructive pt-1">{state.errors.desiredInsights[0]}</p>}
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
            <AlertTitle className="text-2xl font-bold mb-6 text-primary">Analysis Complete!</AlertTitle>
            <AlertDescription className="space-y-6 text-foreground">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Market Opportunities</h3>
                <div className="text-muted-foreground prose prose-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(state.output.marketOpportunities) }} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Competitive Strategies</h3>
                <div className="text-muted-foreground prose prose-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(state.output.competitiveStrategies) }} />
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
