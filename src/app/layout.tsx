import type { Metadata } from 'next'
import { Oswald, Inter, Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _oswald = Oswald({ subsets: ["latin"], weight: '700', variable: '--font-display' });
const _inter = Inter({ subsets: ["latin"], weight: ['300', '400', '600'], variable: '--font-sans' });
const _newsreader = Newsreader({ subsets: ["latin"], style: 'italic', variable: '--font-accent' });

export const metadata: Metadata = {
  title: 'Wheelie Wheelers | The Mountains Do Not Care About You',
  description: 'Raw, unpolished motorcycle expeditions in Ladakh. Not a vacation. An awakening.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

import { CustomCursor } from '@/components/core/CustomCursor'
import { SmoothScroll } from '@/components/core/SmoothScroll'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_oswald.variable} ${_inter.variable} ${_newsreader.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-accent selection:text-white overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
