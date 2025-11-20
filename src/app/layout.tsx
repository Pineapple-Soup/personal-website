import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PineappleSoup',
    template: '%s | PineappleSoup',
  },
  description: "Adithya Iyer's personal website",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pineapplesoup.net'),
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pineapplesoup.net' },
  openGraph: {
    title: 'PineappleSoup',
    description: "Adithya Iyer's personal website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pineapplesoup.net',
    siteName: 'PineappleSoup',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Adithya Iyer — PineappleSoup',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className="lg:w-3/4 lg:mx-auto">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
