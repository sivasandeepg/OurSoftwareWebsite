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
                href={siteConfig.social.github}
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 text-text-muted hover:text-text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
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
              <li>
                <a href="/press" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300">
                  Press
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
            © {currentYear} TechCorp. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
