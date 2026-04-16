'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { siteConfig } from '../../config/siteConfig'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Auto-redirect to home page after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = '/'
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <main className="relative">
      <Navbar />
      
      {/* Auto-redirect Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-2xl p-8 md:p-12 glass`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0l3.836-3.836a1.5 1.5 0 01-2.121 2.121l-3.836 3.836a4 4 0 01-5.656 0l-3.836 3.836a1.5 1.5 0 01-2.121-2.121l-3.836-3.836a4 4 0 01-5.656 0z" />
                </svg>
              </div>
              
              <h2 className={`text-2xl md:text-3xl font-semibold mb-4`}>
                Page Not Found
              </h2>
              <p className={`text-base md:text-lg leading-relaxed mb-6`}>
                Redirecting you to our home page...
              </p>
              <p className={`text-sm md:text-base leading-relaxed mb-8`}>
                The page you're looking for doesn't exist or has been moved.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className={`font-semibold text-lg mb-3`}>Quick Links</h3>
                <div className="space-y-2">
                  <a href="/" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → Home
                  </a>
                  <a href="/services" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → Services
                  </a>
                  <a href="/about" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → About
                  </a>
                  <a href="/contact" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → Contact
                  </a>
                  <a href="/about" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → Blog
                  </a>
                  <a href="/about" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → Careers
                  </a>
                  <a href="/about" className={`block text-sm hover:text-primary transition-colors duration-200`}>
                    → Press
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className={`font-semibold text-lg mb-3`}>Need Help?</h3>
                <div className="space-y-2">
                  <p className={`text-sm mb-3`}>
                    Can't find what you're looking for? We're here to help.
                  </p>
                  <Button
                    href="/contact"
                    size="lg"
                    className="w-full"
                  >
                    Contact Support
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="max-w-md mx-auto">
                <p className={`text-sm mb-4`}>
                  Or search our website:
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`w-full px-4 py-3 pr-12 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 bg-surface/50 border text-text-primary placeholder-text-muted`}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        window.location.href = `/search?q=${encodeURIComponent(e.target.value)}`
                      }
                    }}
                  />
                  <Button
                    type="button"
                    size="sm"
                    className="absolute right-2 top-2"
                    onClick={() => {
                      const input = document.querySelector('input[placeholder="Search..."]')
                      if (input?.value) {
                        window.location.href = `/search?q=${encodeURIComponent(input.value)}`
                      }
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
