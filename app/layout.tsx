import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna R Kulkarni - Portfolio',
  description: 'Computer Science student at RNS Institute of Technology, Samsung Innovation Campus trainee, and AI/ML enthusiast. Passionate about creating innovative solutions with Python, Machine Learning, and cutting-edge technology.',
  keywords: ['portfolio', 'computer science', 'AI/ML', 'python', 'machine learning', 'krishna kulkarni', 'samsung innovation campus'],
  authors: [{ name: 'Krishna R Kulkarni' }],
  creator: 'Krishna R Kulkarni',
  openGraph: {
    title: 'Krishna R Kulkarni - Portfolio',
    description: 'Computer Science student at RNS Institute of Technology, Samsung Innovation Campus trainee, and AI/ML enthusiast. Passionate about creating innovative solutions with Python, Machine Learning, and cutting-edge technology.',
    url: 'https://krishna17.xyz',
    siteName: 'Krishna R Kulkarni Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna R Kulkarni - Portfolio',
    description: 'Computer Science student at RNS Institute of Technology, Samsung Innovation Campus trainee, and AI/ML enthusiast. Passionate about creating innovative solutions with Python, Machine Learning, and cutting-edge technology.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
