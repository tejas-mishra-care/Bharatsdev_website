'use server';

/**
 * @fileOverview An AI-powered personal branding assistant flow.
 *
 * - getPersonalBrandingFeedback - A function that provides feedback on a personal brand.
 * - PersonalBrandingInput - The input type for the getPersonalBrandingFeedback function.
 * - PersonalBrandingOutput - The return type for the getPersonalBrandingFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalBrandingInputSchema = z.object({
  brandDescription: z
    .string()
    .describe('A description of the personal brand to be assessed.'),
  targetAudience: z
    .string()
    .describe('The target audience for this personal brand.'),
  goals: z.string().describe('The goals of the personal brand.'),
});
export type PersonalBrandingInput = z.infer<typeof PersonalBrandingInputSchema>;

const PersonalBrandingOutputSchema = z.object({
  strengths: z.string().describe('The strengths of the personal brand. Present as a bulleted or numbered list.'),
  weaknesses: z.string().describe('The weaknesses of the personal brand. Present as a bulleted or numbered list.'),
  recommendations: z
    .string()
    .describe('Recommendations for improving the personal brand. Present as a bulleted or numbered list.'),
});
export type PersonalBrandingOutput = z.infer<typeof PersonalBrandingOutputSchema>;

export async function getPersonalBrandingFeedback(
  input: PersonalBrandingInput
): Promise<PersonalBrandingOutput> {
  return personalBrandingAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalBrandingAssistantPrompt',
  input: {schema: PersonalBrandingInputSchema},
  output: {schema: PersonalBrandingOutputSchema},
  prompt: `You are a personal branding expert providing feedback to founders.

  Assess the following personal brand description, considering the target audience and goals.  Provide strengths, weaknesses and recommendations.

  Brand Description: {{{brandDescription}}}
  Target Audience: {{{targetAudience}}}
  Goals: {{{goals}}}

  Format each output field as a concise, well-structured bulleted list using markdown.
  `,
});

const personalBrandingAssistantFlow = ai.defineFlow(
  {
    name: 'personalBrandingAssistantFlow',
    inputSchema: PersonalBrandingInputSchema,
    outputSchema: PersonalBrandingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
