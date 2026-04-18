import { siteConfig } from '../../config/siteConfig'

export const metadata = {
  title: 'Software Development Company Kavali | Web & App Development Nellore',
  description: `Aventurine Tech Solutions: Leading software company in Kavali, Nellore. Expert in web development, mobile apps, .NET software & AI agents. Transform your business today!`,
  keywords: [
    'software company Kavali',
    'software company in Nellore',
    'web development Kavali',
    'app development Nellore district',
    'IT company Kavali',
    '.NET software company Andhra Pradesh',
    'AI agent company Kavali',
    'custom software development Nellore',
    'mobile app development Kavali',
    'website design Nellore district',
    'software solutions Andhra Pradesh',
    'tech company Kavali',
    'affordable web development Kavali',
    'professional app development Nellore',
    'enterprise software solutions Andhra Pradesh',
    'local IT support Kavali',
    'custom software for SMEs Nellore district'
  ],
  openGraph: {
    title: `Software Development Company Kavali | Web & App Development Nellore`,
    description: `Aventurine Tech Solutions: Leading software company in Kavali, Nellore District. Expert in web development, mobile apps, .NET software & AI agents for local businesses.`,
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: `Aventurine Tech Solutions - Software Development Company Kavali, Nellore District`,
      },
    ],
  },
}

// Comprehensive Local SEO Structured Data for Home Page
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Aventurine Tech Solutions",
      "description": "Leading software company in Kavali specializing in web development, mobile apps, .NET software, and AI agents",
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
      "telephone": siteConfig.location.phone,
      "email": siteConfig.location.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Kavali",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "524201",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.location.coordinates.lat,
        "longitude": siteConfig.location.coordinates.lng
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "INR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "INR",
      "areaServed": siteConfig.location.serviceAreas,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Website Development Kavali",
            "description": "Professional website development services for Kavali businesses"
          },
          {
            "@type": "Offer",
            "name": "Mobile App Development Nellore",
            "description": "Custom mobile app development for Nellore district businesses"
          },
          {
            "@type": "Offer",
            "name": ".NET Software Solutions",
            "description": "Enterprise .NET desktop and system software development"
          },
          {
            "@type": "Offer",
            "name": "AI Agent Development",
            "description": "AI-powered automation solutions for local businesses"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "name": "Aventurine Tech Solutions",
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
      "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/logo.png`,
      "description": "Premier software development company serving Kavali, Nellore District, and across Andhra Pradesh",
      "foundingDate": "2015",
      "numberOfEmployees": "15",
      "areaServed": "Kavali, Nellore District, Andhra Pradesh",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kavali",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "524201",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": siteConfig.location.phone,
        "contactType": "customer service",
        "email": siteConfig.location.email,
        "availableLanguage": ["English", "Telugu", "Hindi"]
      },
      "sameAs": [
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
        siteConfig.social.instagram
      ]
    },
    {
      "@type": "WebPage",
      "name": "Software Development Company Kavali | Web & App Development Nellore",
      "description": "Aventurine Tech Solutions: Leading software company in Kavali, Nellore. Expert in web development, mobile apps, .NET software & AI agents.",
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
      "isPartOf": {
        "@type": "WebSite",
        "name": siteConfig.name,
        "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
      },
      "about": {
        "@type": "Thing",
        "name": "Software Development Services in Kavali, Nellore"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
          }
        ]
      }
    }
  ]
}
