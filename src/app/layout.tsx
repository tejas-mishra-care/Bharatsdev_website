import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { BackToTop } from '@/components/ui/back-to-top';
import { cn } from '@/lib/utils';
import { Inter, Space_Grotesk } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase/client-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Bharat's Dev - Your Complete Digital Growth Engine",
  description: 'Building high-performance, finished digital assets. No retainers. Just finished, high-value AI and web solutions.',
  keywords: ['enterprise ai', 'app development', 'next.js', 'bharatsdev', 'digital growth engine'],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/bdlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/bdlogo.png" />
      </head>
      <body
        className={cn('min-h-screen bg-background text-foreground font-sans antialiased flex flex-col', inter.variable, spaceGrotesk.variable)}
      >
        <FirebaseClientProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
