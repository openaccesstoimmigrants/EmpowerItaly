import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HEADER_LINKS } from './lib/data'

const inter = Inter({ subsets: ['latin'] })

const dataHeader = HEADER_LINKS[1]; //TODO: FIX

export const metadata: Metadata = {
  title: 'Empower Italy',
  description: 'Open access project - UNIBO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header {...dataHeader}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
