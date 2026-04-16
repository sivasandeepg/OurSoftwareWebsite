import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '../config/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: `Software Development Company Kavali | Web & App Development Nellore`,
    template: `%s | Aventurine Tech Solutions`
  },
  description: `Aventurine Tech Solutions: Leading software company in Kavali, Nellore District. Expert in web development, mobile apps, .NET software & AI agents. Transform your business today!`,
  keywords: [
    'software company Kavali',
    'software company Nellore',
    'web development Kavali',
    'mobile app development Nellore',
    '.NET software development Andhra Pradesh',
    'AI solutions Kavali'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
    title: `Software Development Company Kavali | Web & App Development Nellore`,
    description: `Professional software development company specializing in web development, mobile apps, and digital solutions. Transform your business with cutting-edge technology.`,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Software Development`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Software Development Company Kavali | Web & App Development Nellore`,
    description: `Professional software development company specializing in web development, mobile apps, and digital solutions.`,
    images: ['/og-image.jpg'],
    creator: '@aventurine_tech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
          <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.name,
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/logo.png`,
              "description": "Professional software development company specializing in web development, mobile apps, and digital solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kavali",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "524201",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "email": "aventurinetechsolutions@gmail.com"
              },
              "sameAs": [
                siteConfig.social.linkedin,
                siteConfig.social.twitter,
                siteConfig.social.github,
                siteConfig.social.instagram
              ],
              "foundingDate": "2015",
              "numberOfEmployees": "25+",
              "areaServed": "Worldwide"
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": siteConfig.name,
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
              "description": "Professional software development company specializing in web development, mobile apps, and digital solutions.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": siteConfig.name
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
