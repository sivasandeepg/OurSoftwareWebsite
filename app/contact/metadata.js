import { siteConfig } from '../../config/siteConfig'

export const metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${siteConfig.name} for your software development needs. Contact us for custom web development, mobile apps, and digital solutions. Let's transform your business together.`,
  keywords: [
    'contact software development company',
    'software development consultation',
    'web development contact',
    'mobile app development contact',
    'custom software contact',
    'software company contact',
    'tech solutions contact',
    'business transformation contact'
  ],
  openGraph: {
    title: `${siteConfig.name} | Contact Us for Software Development`,
    description: `Contact ${siteConfig.name} for professional software development services. Get a consultation for your web, mobile, and custom software needs.`,
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Contact Us`,
      },
    ],
  },
}

// Structured Data for Contact Page
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `${siteConfig.name} | Contact Us`,
  "description": `Get in touch with ${siteConfig.name} for your software development needs. Contact us for custom web development, mobile apps, and digital solutions.`,
  "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/contact`,
  "isPartOf": {
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'
  },
  "mainEntity": {
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Contact page for software development services",
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com',
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-Your-Phone-Number",
        "contactType": "customer service",
        "email": "aventurinetechsolutions@gmail.com",
        "availableLanguage": ["English"]
      }
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
        "name": "Contact",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aventurinetechsolutions.com'}/contact`
      }
    ]
  }
}
