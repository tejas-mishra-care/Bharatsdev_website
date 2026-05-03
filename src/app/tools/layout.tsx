'use client';

import { FirebaseClientProvider } from '@/firebase/client-provider';
import type { ReactNode } from 'react';

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return <FirebaseClientProvider>{children}</FirebaseClientProvider>;
}
