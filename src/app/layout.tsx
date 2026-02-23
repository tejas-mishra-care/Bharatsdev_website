import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { BackToTop } from '@/components/ui/back-to-top';
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/bdlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/bdlogo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'dark' || stored === 'light' ? stored : (systemDark ? 'dark' : 'light');
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  } catch (_) {}
})();`,
          }}
        />
      </head>
      <body
        className={cn('min-h-screen bg-background font-body antialiased flex flex-col', inter.variable)}
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
