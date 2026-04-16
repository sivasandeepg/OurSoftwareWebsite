'use client'

import Head from 'next/head'
import { siteConfig } from '../config/siteConfig'

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  canonical, 
  ogImage = '/og-image.jpg',
  type = 'website',
  structuredData = null
}) => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`
  const fullDescription = description || `Professional software development company specializing in web development, mobile apps, and digital solutions. Transform your business with cutting-edge technology and innovative solutions.`
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  const defaultKeywords = [
    'software development',
    'web development', 
    'mobile app development',
    'digital solutions',
    'custom software',
    'enterprise software',
    'UI/UX design',
    'cloud solutions',
    'API development',
    'database design',
    'software consulting',
    'tech solutions',
    'business transformation'
  ]

  const allKeywords = [...defaultKeywords, ...keywords]

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph Meta */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteConfig.name} - ${fullDescription}`} />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter Card Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:site" content="@aventurine_tech" />
      <meta name="twitter:creator" content="@aventurine_tech" />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={`${siteConfig.name} - ${fullDescription}`} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1a1a2e" />
      <meta name="msapplication-TileColor" content="#1a1a2e" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

export default SEO
