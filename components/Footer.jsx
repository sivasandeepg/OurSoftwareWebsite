'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'

const Footer = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo + Tagline + Social Icons */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-primary">
                {siteConfig.name}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {siteConfig.tagline}
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
                            <motion.a
                href={siteConfig.social.linkedin}
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 text-text-muted hover:text-text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href={siteConfig.social.twitter}
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 text-text-muted hover:text-text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a
                href={siteConfig.social.instagram}
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 text-text-muted hover:text-text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-inter text-text-primary">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
                          </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-semibold font-inter text-text-primary">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="/services/web-apps" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300">
                  Web Apps
                </a>
              </li>
              <li>
                <a href="/services/cloud" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300">
                  Cloud
                </a>
              </li>
              <li>
                <a href="/services/consulting" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300">
                  Consulting
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold font-inter text-text-primary">
              Contact
            </h4>
            <div className="space-y-3">
              <a href={`mailto:hello@${siteConfig.name.toLowerCase().replace(/\s+/g, '')}.com`} className="text-sm font-normal hover:opacity-80 transition-opacity">
               aventurinetechsolutions@gmail.com
              </a> 
              <a href="/contact" className="inline-block btn-outline text-sm">
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-[13px] text-text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
