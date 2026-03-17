import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AOSInitializer from '@/components/aos-initializer'

const _geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#003566',
}

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full stack development expertise, projects, and experience',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.example.com',
    title: 'Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full stack development expertise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full stack development expertise',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_geistMono.variable}`}>
      <body className="font-sans antialiased">
        <AOSInitializer />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
