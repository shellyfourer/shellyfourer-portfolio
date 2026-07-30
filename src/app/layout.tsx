import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Shelly Fourer',
  description: 'Web Developer and Artist',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} antialiased bg-background flex flex-col min-h-svh`}
      >
        <CustomCursor />
        <GrainOverlay />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
