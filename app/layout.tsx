import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskFlow - Productivity Dashboard for Freelancers',
  description:
    'TaskFlow is the all-in-one dashboard for freelancers. Manage clients, projects, invoices, and deadlines in one beautiful app. Join 10,000+ freelancers.',
  keywords: [
    'freelance',
    'productivity',
    'project management',
    'invoicing',
    'client management',
  ],
  openGraph: {
    title: 'TaskFlow - Productivity Dashboard for Freelancers',
    description:
      'All-in-one dashboard for freelancers. Stop juggling tools. Start earning more.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaskFlow - Productivity Dashboard for Freelancers',
    description: 'All-in-one dashboard for freelancers',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
