import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Martino Mark',
  description: 'Personal website of Martino Mark - Portfolio, Projects, and Professional Experience',
  keywords: ['Martino Mark', 'portfolio', 'developer', 'professional', 'projects', 'skills', 'experience'],
  authors: [{ name: 'Martino Mark' }],
  creator: 'Martino Mark',
  publisher: 'Martino Mark',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://martinomark.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Martino Mark',
    description: 'Personal website of Martino Mark - Portfolio, Projects, and Professional Experience',
    url: 'https://martinomark.com',
    siteName: 'Martino Mark',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Martino Mark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martino Mark',
    description: 'Personal website of Martino Mark - Portfolio, Projects, and Professional Experience',
    creator: '@martinomark',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
