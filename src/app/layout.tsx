import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase/client-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Bharat's Dev - Your Complete Digital Growth Engine",
  description: 'We build high-performance, intelligent digital systems. No retainers. Just finished, high-value assets.',
  icons: {
    icon: '/bdlogo.png',
    shortcut: '/bdlogo.png',
    apple: '/bdlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn('min-h-screen bg-background font-body antialiased flex flex-col', inter.variable)}
      >
        <FirebaseClientProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
