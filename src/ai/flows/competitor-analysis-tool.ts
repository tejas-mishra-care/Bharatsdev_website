'use server';

/**
 * @fileOverview An AI-powered competitor analysis tool.
 *
 * - competitorAnalysisTool - A function that analyzes competitors and identifies market opportunities.
 * - CompetitorAnalysisInput - The input type for the competitorAnalysisTool function.
 * - CompetitorAnalysisOutput - The return type for the competitorAnalysisTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CompetitorAnalysisInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A detailed description of your business, including products/services, target audience, and current market position.'),
  competitorNames: z
    .string()
    .describe('A comma-separated list of competitor names to analyze.'),
  desiredInsights: z
    .string()
    .describe('Specific insights you are hoping to gain about the competition, e.g., pricing strategies, marketing tactics, product differentiation.'),
});

export type CompetitorAnalysisInput = z.infer<typeof CompetitorAnalysisInputSchema>;

const CompetitorAnalysisOutputSchema = z.object({
  marketOpportunities: z
    .string()
    .describe('Identified market opportunities based on competitor analysis. Present as a bulleted or numbered list.'),
  competitiveStrategies: z
    .string()
    .describe('Recommended strategies to gain a competitive edge, including product differentiation, marketing tactics, and pricing strategies. Present as a bulleted or numbered list.'),
});

export type CompetitorAnalysisOutput = z.infer<typeof CompetitorAnalysisOutputSchema>;

export async function competitorAnalysisTool(
  input: CompetitorAnalysisInput
): Promise<CompetitorAnalysisOutput> {
  return competitorAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'competitorAnalysisPrompt',
  input: {schema: CompetitorAnalysisInputSchema},
  output: {schema: CompetitorAnalysisOutputSchema},
  prompt: `You are an AI-powered competitor analysis tool designed to identify market opportunities and strategies to gain a competitive edge.

  Analyze the provided business description, competitor names, and desired insights to identify potential opportunities and strategies.

  Business Description: {{{businessDescription}}}
  Competitor Names: {{{competitorNames}}}
  Desired Insights: {{{desiredInsights}}}

  Based on the above information, identify market opportunities and suggest competitive strategies. Provide a comprehensive analysis in the output fields.
  Format your response using markdown for bullet points.
  `,
});

const competitorAnalysisFlow = ai.defineFlow(
  {
    name: 'competitorAnalysisFlow',
    inputSchema: CompetitorAnalysisInputSchema,
    outputSchema: CompetitorAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
