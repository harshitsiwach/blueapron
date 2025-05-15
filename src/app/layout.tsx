import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'The Blue Apron - Authentic Flavors',
  description: 'Experience the taste of tradition at The Blue Apron. Serving delicious meals crafted with passion.',
  keywords: 'restaurant, food, dining, indian cuisine, the blue apron, online order',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        geistSans.variable, 
        playfairDisplay.variable, 
        "font-sans antialiased flex flex-col min-h-screen"
        )}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
