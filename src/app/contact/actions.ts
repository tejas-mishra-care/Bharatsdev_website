'use server'

import { z } from 'zod'
import { analyzeInquirySentiment } from '@/ai/flows/inquiry-sentiment-analysis';
import { collection, addDoc } from 'firebase/firestore'
import { getSdks } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/firebase/config';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string({ required_error: 'Please select a project type.' }),
  budget: z.string({ required_error: 'Please select a budget range.' }),
  message: z.string().min(10, { message: 'Project details must be at least 10 characters.' }),
  agreement: z.literal('on', {
    errorMap: () => ({ message: "You must agree to our project-based model." }),
  }),
})

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    agreement?: string[];
    projectType?: string[];
    budget?: string[];
  }
}

export async function handleContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse(Object.fromEntries(formData.entries()));
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    }
  }

  const { message, ...leadData } = validatedFields.data;

  try {
    // 1. Analyze sentiment (non-blocking)
    const sentimentPromise = analyzeInquirySentiment({ inquiryText: message });
    
    // 2. Save lead to Firestore
    const { firestore } = getSdks(initializeApp(firebaseConfig));
    const leadsCollection = collection(firestore, 'leads');
    await addDoc(leadsCollection, {
      ...leadData,
      details: message,
      submittedAt: new Date().toISOString(),
    });

    // 3. Log sentiment analysis result (can be awaited or not)
    const sentimentResult = await sentimentPromise;
    console.log('--- New Inquiry Received ---');
    console.log('Inquiry Data:', validatedFields.data);
    console.log('Sentiment Analysis:', {
      sentiment: sentimentResult.sentiment,
      urgency: sentimentResult.urgency,
      reason: sentimentResult.reason,
    });
    console.log('--------------------------');


    return {
      message: 'Thank you! Your inquiry has been submitted. We will respond within 24 hours.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
    }
  }
}
