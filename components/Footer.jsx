'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { siteConfig } from '../config/siteConfig'
import Button from './Button'

const Footer = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  const getThemeClass = (darkClass, lightClass) => {
    if (!mounted) return darkClass
    return isDark ? darkClass : lightClass
  }
  
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
    <footer className={`border-t border-gradient-to-r from-accent/50 ${
              mounted && isDark 
                ? 'via-white/10 to-accent/50 bg-black/30 backdrop-blur-xl'
                : mounted
                  ? 'via-black/10 to-accent/50 bg-white/80 backdrop-blur-xl'
                  : 'via-white/10 to-accent/50 bg-black/30 backdrop-blur-xl'
            }`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="space-y-4">
            <h3 className={`font-heading text-2xl font-bold ${getThemeClass('text-white', 'text-gray-900')}`}>
              {siteConfig.name}
            </h3>
            <p className={`leading-relaxed ${getThemeClass('text-white/70', 'text-gray-600')}`}>
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className={`font-heading text-lg font-semibold ${getThemeClass('text-white', 'text-gray-900')}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.quickLinks.map((item, index) => (
                <li key={`quick-${index}`}>
                  <motion.a
                    href={item.href}
                    className={`${getThemeClass('text-white/70', 'text-gray-600')} hover:${getThemeClass('text-white', 'text-accent')} transition-colors duration-200`}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className={`font-heading text-lg font-semibold ${getThemeClass('text-white', 'text-gray-900')}`}>
              Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.services.map((item, index) => (
                <li key={`services-${index}`}>
                  <motion.a
                    href={item.href}
                    className={`${getThemeClass('text-white/70', 'text-gray-600')} hover:${getThemeClass('text-white', 'text-accent')} transition-colors duration-200`}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className={`font-heading text-lg font-semibold ${getThemeClass('text-white', 'text-gray-900')}`}>
              Get In Touch
            </h4>
            <p className={`${getThemeClass('text-white/70', 'text-gray-600')}`}>
              Have questions? We'd love to hear from you.
            </p>
            <Button href="/contact" size="sm">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Newsletter Row */}
        <div className={`border-t mt-8 pt-8 ${mounted && isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <div className="text-center">
            <h4 className={`font-heading text-lg font-semibold mb-4 ${getThemeClass('text-white', 'text-gray-900')}`}>
              Stay Updated
            </h4>
            <p className={`mb-6 ${getThemeClass('text-white/70', 'text-gray-600')}`}>
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg focus:outline-none focus:border-accent ${getThemeClass(
                  'bg-white/10 border border-white/20 text-white placeholder-white/50',
                  'bg-white border border-black/20 text-gray-900 placeholder-gray-500'
                )}`}
              />
              <Button size="sm" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href={siteConfig.social.github}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              getThemeClass('bg-white/10 text-white hover:bg-accent/20', 'bg-slate-100 text-slate-700 hover:bg-slate-200')
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a
            href={siteConfig.social.twitter}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              getThemeClass('bg-white/10 text-white hover:bg-accent/20', 'bg-slate-100 text-slate-700 hover:bg-slate-200')
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </motion.a>
          <motion.a
            href={siteConfig.social.linkedin}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              getThemeClass('bg-white/10 text-white hover:bg-accent/20', 'bg-slate-100 text-slate-700 hover:bg-slate-200')
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <motion.a
            href={siteConfig.social.instagram}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              getThemeClass('bg-white/10 text-white hover:bg-accent/20', 'bg-slate-100 text-slate-700 hover:bg-slate-200')
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
          </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t mt-8 pt-8 ${mounted && isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${getThemeClass('text-white/60', 'text-gray-500')}`}>
              {siteConfig.footer.replace('2025', currentYear)}
            </p>
            <p className={`text-sm ${getThemeClass('text-white/60', 'text-gray-500')}`}>
              Made with in India
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
