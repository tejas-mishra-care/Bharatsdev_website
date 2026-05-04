'use server'

import { z } from 'zod'
import { analyzeInquirySentiment } from '@/ai/flows/inquiry-sentiment-analysis';
import { collection, addDoc } from 'firebase/firestore'
import { getSdks } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/firebase/config';
import { Resend } from 'resend';

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

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  message: string;
  sentiment?: string;
  urgency?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — skipping email notification.');
    return;
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #2a2a2e;">
      <h1 style="color: #2563EB; font-size: 24px; margin-bottom: 4px;">🚀 New Project Inquiry</h1>
      <p style="color: #888; font-size: 13px; margin-top: 0; margin-bottom: 24px;">BharatsDev Contact Form • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; width: 130px; font-size: 13px;">Name</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px; font-weight: bold;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; font-size: 13px;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; font-size: 14px;"><a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a></td>
        </tr>
        ${data.company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; font-size: 13px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px;">${data.company}</td></tr>` : ''}
        ${data.phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #222; font-size: 14px;"><a href="tel:${data.phone}" style="color: #2563EB;">${data.phone}</a></td></tr>` : ''}
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; font-size: 13px;">Project Type</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px;">${data.projectType}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; font-size: 13px;">Budget</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #F97316; font-size: 14px; font-weight: bold;">${data.budget}</td>
        </tr>
        ${data.sentiment ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; font-size: 13px;">AI Sentiment</td><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #10B981; font-size: 14px;">${data.sentiment} • Urgency: ${data.urgency}</td></tr>` : ''}
      </table>

      <div style="margin-top: 24px; padding: 16px; background: #111113; border-left: 3px solid #2563EB; border-radius: 4px;">
        <p style="color: #aaa; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Project Details</p>
        <p style="color: #fff; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
      </div>

      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${data.email}" style="display: inline-block; background: #2563EB; color: #fff; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: bold; font-size: 14px;">Reply to ${data.name}</a>
      </div>

      <p style="color: #555; font-size: 11px; text-align: center; margin-top: 24px;">BharatsDev • bharatsdev.com</p>
    </div>
  `;

  await resend.emails.send({
    from: 'BharatsDev Inquiries <onboarding@resend.dev>',
    to: ['contact@bharatsdev.com'],
    subject: `🚀 New Inquiry from ${data.name} — ${data.projectType}`,
    html,
    replyTo: data.email,
  });
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

    // 3. Await sentiment
    const sentimentResult = await sentimentPromise;
    console.log('--- New Inquiry Received ---');
    console.log('Inquiry Data:', validatedFields.data);
    console.log('Sentiment Analysis:', {
      sentiment: sentimentResult.sentiment,
      urgency: sentimentResult.urgency,
      reason: sentimentResult.reason,
    });
    console.log('--------------------------');

    // 4. Send email notification to Tejas
    await sendNotificationEmail({
      ...leadData,
      message,
      sentiment: sentimentResult.sentiment,
      urgency: sentimentResult.urgency,
    });

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
