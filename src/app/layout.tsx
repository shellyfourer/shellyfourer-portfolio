import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { CustomCursor } from '@/components/shared/CustomCursor'
import { GrainOverlay } from '@/components/shared/GrainOverlay'
import { Analytics } from '@vercel/analytics/next'
import React from 'react'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const BASE_URL = 'https://shellyfourer.com'

export const viewport: Viewport = {
  themeColor: '#0b001a',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Shelly Fourer - Software Engineer & Creative',
    template: '%s | Shelly Fourer',
  },
  description:
    'Software Engineering student and creative developer. I work across three ecosystems: TypeScript/Next.js for web and agency work, Java/Spring Boot for backend systems, and C++ for fundamentals and systems programming. Also an artist.',
  keywords: [
    'software engineer',
    'software engineering student',
    'creative developer',
    'full-stack developer',
    'frontend engineer',
    'backend developer',
    'web developer',
    'Shopify developer',
    'WordPress developer',
    'Next.js',
    'React',
    'TypeScript',
    'Java',
    'Spring Boot',
    'C++',
    'systems programming',
    'PostgreSQL',
    'Docker',
    'Shelly Fourer',
    'portfolio',
    'Lithuania',
  ],
  authors: [{ name: 'Shelly Fourer', url: BASE_URL }],
  creator: 'Shelly Fourer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Shelly Fourer',
    title: 'Shelly Fourer - Software Engineer & Creative',
    description:
      'Software Engineering student and creative developer. TypeScript/Next.js, Java/Spring Boot, C++ - and an artist. Thinking in code, feeling in color.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shelly Fourer - Software Engineer & Creative',
    description:
      'Software Engineering student and creative developer. TypeScript/Next.js, Java/Spring Boot, C++ - and an artist. Thinking in code, feeling in color.',
    creator: '@byshellyfourer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${bricolageGrotesque.variable} antialiased bg-background flex flex-col min-h-svh`}
      >
        <CustomCursor />
        <GrainOverlay />
        <Header />
        <main className="relative z-0 flex-1 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
