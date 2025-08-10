import type { Metadata } from 'next';
// Removed Google font imports to use Helvetica system stack
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// No font variables; Tailwind `font-sans` now maps to Helvetica

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
