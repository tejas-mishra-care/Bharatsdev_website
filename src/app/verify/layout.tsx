import type { Metadata } from 'next';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Verify Certificate — BharatsDev',
  description: 'Verify the authenticity of a BharatsDev certificate using its unique ID.',
};

export default function VerifyLayout({ children }: { children: ReactNode }) {
  return <FirebaseClientProvider>{children}</FirebaseClientProvider>;
}
