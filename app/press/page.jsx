'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { siteConfig } from '../../config/siteConfig'

export default function Press() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const pressReleases = [
    {
      title: "{siteConfig.name} Launches AI-Powered Development Platform",
      date: "March 1, 2024",
      excerpt: "Revolutionary platform accelerates software development with advanced AI capabilities and automated testing.",
      category: "Product Launch"
    },
    {
      title: "{siteConfig.name} Secures $10M Series A Funding",
      date: "February 15, 2024",
      excerpt: "Leading venture capital firms invest in {siteConfig.name}'s vision for democratizing enterprise software development.",
      category: "Funding"
    },
    {
      title: "{siteConfig.name} Named Top Software Development Company 2024",
      date: "January 20, 2024",
      excerpt: "Recognized for innovation and excellence in custom software solutions by Tech Review Magazine.",
      category: "Awards"
    },
    {
      title: "Partnership with Major Cloud Provider Announced",
      date: "December 10, 2023",
      excerpt: "Strategic collaboration to deliver enhanced cloud migration and optimization services to enterprise clients.",
      category: "Partnership"
    },
    {
      title: "{siteConfig.name} Expands to European Market",
      date: "November 5, 2023",
      excerpt: "New office opening in London to serve growing demand for software development services across Europe.",
      category: "Expansion"
    },
    {
      title: "Open Source Initiative: {siteConfig.name} Contributes to Major Framework",
      date: "October 15, 2023",
      excerpt: "Company commits resources to support open source development community with significant code contributions.",
      category: "Community"
    }
  ]

  const mediaCoverage = [
    {
      publication: "TechCrunch",
      title: "How {siteConfig.name} is Transforming Enterprise Software Development",
      date: "February 28, 2024",
      link: "#"
    },
    {
      publication: "Forbes",
      title: "The Rise of AI in Software Development: {siteConfig.name}'s Success Story",
      date: "February 20, 2024",
      link: "#"
    },
    {
      publication: "Wired",
      title: "Inside {siteConfig.name}'s Mission to Democratize Software Development",
      date: "February 10, 2024",
      link: "#"
    },
    {
      publication: "Business Insider",
      title: "Why Investors Are Betting Big on {siteConfig.name}",
      date: "February 5, 2024",
      link: "#"
    }
  ]

  const pressKit = [
    {
      title: "Company Overview",
      description: "Comprehensive information about {siteConfig.name}'s mission, vision, and achievements.",
      download: "#"
    },
    {
      title: "Executive Biographies",
      description: "Detailed profiles of our leadership team and key executives.",
      download: "#"
    },
    {
      title: "Product Information",
      description: "Technical specifications and feature details for our software solutions.",
      download: "#"
    },
    {
      title: "Media Assets",
      description: "Logo files, product images, and brand guidelines for media use.",
      download: "#"
    }
  ]

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              'text-text-primary'
            }`}>
              Press & Media
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              Stay updated with the latest news, announcements, and media coverage about {siteConfig.name}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-6 md:p-8 ${
              'glass'
            }`}
          >
            <h2 className={`font-heading text-2xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Media Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className={`text-sm font-medium mb-1 ${
                  'text-muted'
                }`}>
                  For press inquiries:
                </p>
                <p className={`font-semibold ${
                  'text-text-primary'
                }`}>
                  press@{siteConfig.name.toLowerCase().replace(/\s+/g, '')}.com
                </p>
              </div>
              <div>
                <p className={`text-sm font-medium mb-1 ${
                  'text-muted'
                }`}>
                  General media contact:
                </p>
                <p className={`font-semibold ${
                  'text-text-primary'
                }`}>
                  media@{siteConfig.name.toLowerCase().replace(/\s+/g, '')}.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Press Releases
            </h2>
            <p className={`text-lg ${
              'text-muted'
            }`}>
              Official announcements and company news.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 hover-glow ${
                  'glass hover-glow'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {release.category}
                      </span>
                      <span className={`text-sm ${
                        'text-muted'
                      }`}>
                        {release.date}
                      </span>
                    </div>
                    <h3 className={`font-heading text-xl font-semibold mb-3 ${
                      'text-text-primary'
                    }`}>
                      {release.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      'text-muted'
                    }`}>
                      {release.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button href="#" variant="outline">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Media Coverage
            </h2>
            <p className={`text-lg ${
              'text-muted'
            }`}>
              What the media is saying about {siteConfig.name}.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaCoverage.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 hover-glow ${
                  'glass hover-glow'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    'bg-secondary/20 text-secondary'
                  }`}>
                    {coverage.publication}
                  </span>
                  <span className={`text-sm ${
                    'text-muted'
                  }`}>
                    {coverage.date}
                  </span>
                </div>
                <h3 className={`font-heading text-lg font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  {coverage.title}
                </h3>
                <Button href={coverage.link} variant="outline" size="sm">
                  Read Article
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Press Kit
            </h2>
            <p className={`text-lg ${
              'text-muted'
            }`}>
              Download official company assets and information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressKit.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 hover-glow ${
                  'glass hover-glow'
                }`}
              >
                <h3 className={`font-heading text-lg font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed mb-4 ${
                  'text-muted'
                }`}>
                  {item.description}
                </p>
                <Button href={item.download} variant="outline" size="sm">
                  Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
