import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Windpark de Boldijk',
  description: 'Windenergie door lokale inwoners van Daarle en Daarlerveen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className='bg-gray-50'>
        <Header />
        
        {children}

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
