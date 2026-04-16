import { siteConfig } from '../../config/siteConfig'

export const metadata = {
  title: 'Our Services',
  description: `Comprehensive software development services at ${siteConfig.name}. We offer web development, mobile app development, custom software solutions, UI/UX design, and digital marketing services.`,
  keywords: [
    'software development services',
    'web development services',
    'mobile app development services',
    'custom software solutions',
    'UI/UX design services',
    'digital marketing services',
    'enterprise software development',
    'cloud solutions',
    'API development',
    'database design services'
  ],
  openGraph: {
    title: `${siteConfig.name} | Professional Software Development Services`,
    description: `Explore our comprehensive software development services including web development, mobile apps, custom software, and digital solutions.`,
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Development Services`,
      },
    ],
  },
}

// Structured Data for Services Page
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `${siteConfig.name} | Our Services`,
  "description": `Comprehensive software development services at ${siteConfig.name}. We offer web development, mobile app development, custom software solutions, UI/UX design, and digital marketing services.`,
  "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/services`,
  "isPartOf": {
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Software Development Services",
    "description": "Professional software development services including web development, mobile apps, and digital solutions",
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Web Development",
          "description": "Custom web application development using modern frameworks"
        },
        {
          "@type": "Offer", 
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile application development"
        },
        {
          "@type": "Offer",
          "name": "Software Solutions",
          "description": "Enterprise-grade software and microservices development"
        },
        {
          "@type": "Offer",
          "name": "UI/UX Design",
          "description": "User interface and user experience design services"
        },
        {
          "@type": "Offer",
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing and SEO services"
        }
      ]
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/services`
      }
    ]
  }
}
