import { FirebaseClientProvider } from '@/firebase/client-provider';
import type { ReactNode } from 'react';

export default function CertificatesLayout({ children }: { children: ReactNode }) {
  return <FirebaseClientProvider>{children}</FirebaseClientProvider>;
}
