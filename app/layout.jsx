import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '../config/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Aventurine Tech Solutions | Software Company Kavali, Nellore AP',
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
  },
  alternates: {
    canonical: 'https://www.aventurinetechsolutions.com',
  },
  verification: {
    google: 'QTKmtYBex_Aas0-og88iESyZ0gQ1_EnJT1diF6v5DCw',
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
              "@type": ["LocalBusiness", "SoftwareCompany"],
              "name": siteConfig.name,
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aventurinetechsolutions.com',
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aventurinetechsolutions.com'}/logo.png`,
              "description": "Professional software development company specializing in web development, mobile apps, and digital solutions.",
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
                siteConfig.social.linkedin,
                siteConfig.social.twitter,
                siteConfig.social.github,
                siteConfig.social.instagram
              ],
              "foundingDate": "2015",
              "numberOfEmployees": "15",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 09:00-18:00",
              "areaServed": ["Kavali", "Nellore", "Nellore District", "Andhra Pradesh", "India"]
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
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aventurinetechsolutions.com',
              "description": "Professional software development company specializing in web development, mobile apps, and digital solutions.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aventurinetechsolutions.com'}/search?q={search_term_string}`,
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
