import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '../config/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'Aventurine Tech Solutions | Software Company Kavali, Nellore AP',
    template: '%s | Aventurine Tech Solutions',
  },
  description: 'Top software development company in Kavali, Nellore District, Andhra Pradesh. We build websites, Android & iOS apps, Node.js & Python backends, AI solutions.',
  keywords: [
    'software company Kavali',
    'web development Nellore',
    'android app development Andhra Pradesh',
    'IT company Kavali',
    'app development Nellore district',
    'Python developer Andhra Pradesh',
    'Node.js backend Nellore',
  ],
  openGraph: {
    title: 'Aventurine Tech Solutions | Software Company Kavali',
    description: 'Custom Web, Android, iOS & AI solutions from Kavali, Nellore, AP.',
    url: 'https://www.aventurinetechsolutions.com',
    siteName: 'Aventurine Tech Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.aventurinetechsolutions.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aventurine Tech Solutions - Software Company Kavali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aventurine Tech Solutions | Software Company Kavali',
    description: 'Custom Web, Android, iOS & AI solutions from Kavali, Nellore, AP.',
    site: '@aventurine_tech',
    images: ['https://www.aventurinetechsolutions.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.aventurinetechsolutions.com/',
  },
  verification: {
    google: 'QTKmtYBex_Aas0-og88iESyZ0gQ1_EnJT1diF6v5DCw',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data for Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "SoftwareCompany"],
            "name": siteConfig.name,
            "url": "https://www.aventurinetechsolutions.com",
            "logo": "https://www.aventurinetechsolutions.com/logo.png",
            "description": "Professional software development company specializing in web development, mobile apps, and digital solutions in Kavali, Nellore District, AP.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near RTC Bus Stand, Kavali",
              "addressLocality": "Kavali",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "524201",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8328227728",
              "contactType": "customer service",
              "email": "aventurinetechsolutions@gmail.com"
            },
            "sameAs": [
              "https://www.linkedin.com/company/aventurine-tech-solutions",
              "https://x.com/aventurine_tech",
              "https://www.instagram.com/aventurinetechsolutions/"
            ],
            "foundingDate": "2015",
            "numberOfEmployees": "15",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-18:00",
            "areaServed": ["Kavali", "Nellore", "Nellore District", "Andhra Pradesh", "India"]
          })}
        </Script>

        {/* Structured Data for Website */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteConfig.name,
            "url": "https://www.aventurinetechsolutions.com",
            "description": "Professional software development company specializing in web development, mobile apps, and digital solutions.",
            "publisher": {
              "@type": "Organization",
              "name": siteConfig.name
            }
          })}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
