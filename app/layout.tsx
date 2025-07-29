import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
  description: 'Revolutionary AI-powered marketing automation platform that transforms your campaigns with intelligent insights, personalized content generation, and data-driven optimization.',
  keywords: 'AI marketing, marketing automation, campaign optimization, content generation, marketing analytics',
  authors: [{ name: 'ADmyBRAND AI Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Revolutionary AI-powered marketing automation platform that transforms your campaigns with intelligent insights and personalized content generation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Revolutionary AI-powered marketing automation platform that transforms your campaigns with intelligent insights and personalized content generation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}