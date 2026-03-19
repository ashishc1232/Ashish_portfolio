import type { Metadata, Viewport } from 'next'
import {  Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AOSInitializer from '@/components/aos-initializer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#003566',
}

export const metadata: Metadata = {
  title: 'Ashish Portfolio',
  description: 'Professional portfolio showcasing full stack development expertise, projects, and experience',
  keywords: ['Full Stack Developer', 'React','Express.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
  authors: [{ name: 'Ashish Portfolio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashish-portfolio-pi-wine.vercel.app/',
    title: 'Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full stack development expertise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full stack development expertise',
  },
  icons: {
    icon: '/favicon.ico', // <-- single favicon
    apple: '/favicon.ico', // <-- for iOS
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        <AOSInitializer />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
