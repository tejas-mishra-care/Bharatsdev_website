// src/ai/flows/inquiry-sentiment-analysis.ts
'use server';

/**
 * @fileOverview Analyzes the sentiment of customer inquiries to prioritize responses.
 *
 * - analyzeInquirySentiment - Analyzes the sentiment of customer inquiries.
 * - InquirySentimentInput - The input type for the analyzeInquirySentiment function.
 * - InquirySentimentOutput - The return type for the analyzeInquirySentiment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InquirySentimentInputSchema = z.object({
  inquiryText: z
    .string()
    .describe('The text content of the customer inquiry.'),
});
export type InquirySentimentInput = z.infer<typeof InquirySentimentInputSchema>;

const InquirySentimentOutputSchema = z.object({
  sentiment: z
    .string()
    .describe(
      'The sentiment of the inquiry, e.g., positive, negative, or neutral.'
    ),
  urgency: z
    .string()
    .describe(
      'The urgency level of the inquiry, e.g., high, medium, or low, based on the sentiment and content.'
    ),
  reason: z.string().optional().describe('The reason behind the sentiment.'),
});
export type InquirySentimentOutput = z.infer<typeof InquirySentimentOutputSchema>;

export async function analyzeInquirySentiment(
  input: InquirySentimentInput
): Promise<InquirySentimentOutput> {
  return inquirySentimentAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'inquirySentimentPrompt',
  input: {schema: InquirySentimentInputSchema},
  output: {schema: InquirySentimentOutputSchema},
  prompt: `You are an AI assistant specialized in analyzing customer inquiry sentiment and determining urgency.

  Analyze the following customer inquiry and determine its sentiment (positive, negative, or neutral) and urgency (high, medium, or low).
  Also, provide a brief reason for your assessment.

  Inquiry: {{{inquiryText}}}

  Respond in a JSON format.
  `,
});

const inquirySentimentAnalysisFlow = ai.defineFlow(
  {
    name: 'inquirySentimentAnalysisFlow',
    inputSchema: InquirySentimentInputSchema,
    outputSchema: InquirySentimentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
