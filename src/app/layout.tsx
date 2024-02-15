import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

// Metadata
export const metadata: Metadata = {
  title: 'Simplified Amazon Seller Dashboard',
  description:
    'Streamline your Amazon sales with our comprehensive tool. Manage sales, inventory, and analytics in one place. Uncover insights to grow your sales on Amazon.',
  keywords:
    'Amazon, Seller Dashboard, Sales Management, Inventory Management, Business Analytics, Pricing Optimization, Business Insights',
  authors: [{ name: 'Moira' }],
  creator: 'Moira',
  themeColor: 'white',
  colorScheme: 'light',
  openGraph: {
    title: 'Simplified Amazon Seller Dashboard',
    description:
      'Streamline your Amazon sales with our comprehensive tool. Manage sales, inventory, and analytics in one place. Uncover insights to grow your sales on Amazon.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/icon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen', inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
