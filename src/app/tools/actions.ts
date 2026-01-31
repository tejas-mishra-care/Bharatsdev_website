'use server';

import { z } from 'zod';
import { getPersonalBrandingFeedback, PersonalBrandingOutput } from '@/ai/flows/personal-branding-assistant';
import { competitorAnalysisTool, CompetitorAnalysisOutput } from '@/ai/flows/competitor-analysis-tool';

// Personal Branding Assistant
const brandingSchema = z.object({
  brandDescription: z.string().min(20, 'Please provide a more detailed brand description (at least 20 characters).'),
  targetAudience: z.string().min(10, 'Please describe your target audience (at least 10 characters).'),
  goals: z.string().min(10, 'Please describe your brand goals (at least 10 characters).'),
});

export type BrandingFormState = {
  message: string;
  fields?: Record<string, string>;
  errors?: {
    brandDescription?: string[];
    targetAudience?: string[];
    goals?: string[];
  };
  output?: PersonalBrandingOutput;
};

export async function personalBrandingAction(
  prevState: BrandingFormState,
  formData: FormData
): Promise<BrandingFormState> {
  const validated = brandingSchema.safeParse(Object.fromEntries(formData));

  if (!validated.success) {
    const fields = Object.fromEntries(formData) as Record<string, string>;
    return {
      message: 'Please correct the errors below.',
      fields,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getPersonalBrandingFeedback(validated.data);
    return {
      message: 'Analysis successful!',
      output: result,
      errors: {},
      fields: {},
    };
  } catch (e) {
    return {
      message: 'An error occurred during analysis. Please try again.',
      fields: validated.data,
    };
  }
}

// Competitor Analysis Tool
const competitorSchema = z.object({
  businessDescription: z.string().min(20, 'Please provide a more detailed business description (at least 20 characters).'),
  competitorNames: z.string().min(3, 'Please list at least one competitor.'),
  desiredInsights: z.string().min(10, 'Please describe the insights you are looking for (at least 10 characters).'),
});

export type CompetitorFormState = {
  message: string;
  fields?: Record<string, string>;
  errors?: {
    businessDescription?: string[];
    competitorNames?: string[];
    desiredInsights?: string[];
  };
  output?: CompetitorAnalysisOutput;
};

export async function competitorAnalysisAction(
  prevState: CompetitorFormState,
  formData: FormData
): Promise<CompetitorFormState> {
  const validated = competitorSchema.safeParse(Object.fromEntries(formData));

  if (!validated.success) {
    const fields = Object.fromEntries(formData) as Record<string, string>;
    return {
      message: 'Please correct the errors below.',
      fields,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await competitorAnalysisTool(validated.data);
    return {
      message: 'Analysis successful!',
      output: result,
      errors: {},
      fields: {},
    };
  } catch (e) {
    return {
      message: 'An error occurred during analysis. Please try again.',
      fields: validated.data,
    };
  }
}
