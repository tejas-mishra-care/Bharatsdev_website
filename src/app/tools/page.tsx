
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonalBrandingAssistant } from '@/app/tools/personal-branding-assistant';
import { CompetitorAnalysisTool } from '@/app/tools/competitor-analysis-tool';
import { useUser } from '@/firebase';
import { Bot, Loader2 } from 'lucide-react';
import { initiateAnonymousSignIn, useAuth } from '@/firebase';
import { useEffect } from 'react';

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();

  useEffect(() => {
    if (!isUserLoading && !user) {
      initiateAnonymousSignIn(auth);
    }
  }, [isUserLoading, user, auth]);

  if (isUserLoading || !user) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center min-h-[300px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Securing Connection...</h3>
        <p className="text-muted-foreground">Please wait while we initialize the AI tools.</p>
      </div>
    );
  }

  return <>{children}</>;
}


export default function ToolsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 text-center bg-secondary">
        <div className="container mx-auto px-4">
           <p className="font-semibold text-primary uppercase tracking-wider mb-4">BHARATSDEV AI</p>
          <h1 className="text-balance">
            AI-Powered Growth Tools
          </h1>
          <p className="large max-w-3xl mx-auto mt-6 text-balance">
            Leverage our custom-built AI to sharpen your strategy, brand, and competitive edge. These tools are powered by the same models we use for our enterprise clients.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthGuard>
            <Tabs defaultValue="branding" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-muted h-16 rounded-xl p-2.5">
                <TabsTrigger value="branding" className="text-base h-full data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md rounded-lg">Personal Branding Assistant</TabsTrigger>
                <TabsTrigger value="competitor" className="text-base h-full data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md rounded-lg">Competitor Analysis Tool</TabsTrigger>
              </TabsList>
              <TabsContent value="branding" className="mt-6">
                <Card className="border shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-lg border w-fit">
                            <Bot className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl text-foreground">Personal Branding Assistant</CardTitle>
                            <CardDescription className="text-muted-foreground pt-1">
                            Get AI-powered feedback on your personal brand to become the only choice in your market.
                            </CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <PersonalBrandingAssistant />
                </Card>
              </TabsContent>
              <TabsContent value="competitor" className="mt-6">
                <Card className="border shadow-lg">
                  <CardHeader>
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-lg border w-fit">
                            <Bot className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl text-foreground">Competitor Analysis Tool</CardTitle>
                            <CardDescription className="text-muted-foreground pt-1">
                            Analyze your competitors and identify market opportunities to gain a strategic advantage.
                            </CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <CompetitorAnalysisTool />
                </Card>
              </TabsContent>
            </Tabs>
          </AuthGuard>
        </div>
      </section>
    </div>
  );
}
