import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '../config/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
