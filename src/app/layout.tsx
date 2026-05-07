import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatsdev.com"),
  title: "BharatsDev | High-Performance Digital Growth Engine",
  description:
    "We engineer high-performance, intelligent digital systems that drive lasting impact. No retainers. We build it, we hand over the keys, and you own the asset.",
  keywords: [
    "BharatsDev",
    "Digital Growth Engine",
    "Custom Enterprise Solutions",
    "App Development",
    "AI Systems",
    "Next.js Development",
    "Software Agency",
  ],
  authors: [{ name: "Tejas Mishra" }],
  openGraph: {
    title: "BharatsDev | High-Performance Digital Growth Engine",
    description:
      "Engineering high-performance, intelligent digital systems that drive lasting impact. We build it, you own it.",
    url: "https://bharatsdev.com",
    siteName: "BharatsDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BharatsDev Digital Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BharatsDev | High-Performance Engineering",
    description:
      "We act as your Complete Digital Growth Engine. Death to retainers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased flex flex-col",
          inter.variable,
          spaceGrotesk.variable,
          instrumentSerif.variable,
        )}
      >
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
