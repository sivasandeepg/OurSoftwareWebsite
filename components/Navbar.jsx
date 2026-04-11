'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { siteConfig } from '../config/siteConfig'
import ThemeToggle from './ThemeToggle'

// Nav item icons
const navIcons = {
  '/': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  '/about': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  '/services': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  '/contact': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

// Social icons
const socialIcons = {
  github: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Check if we're on homepage (has hero image) vs other pages
  const isHomePage = pathname === '/'

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)
    }

    if (isHomePage && window.scrollY <= 100) {
      setScrolled(false)
    } else {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Prevent hydration mismatch - don't render until client is ready
  if (!mounted) return null

  // Smart classes based on theme, scroll position, and page type
  const navLinkClass = isDark
    ? 'text-white hover:text-accent'
    : isHomePage
      ? scrolled
        ? 'text-slate-700 hover:text-primary font-medium'
        : 'text-white drop-shadow-md hover:text-yellow-200 font-medium'
      : 'text-slate-700 hover:text-primary font-medium'

  // Divider color between nav items (the border-r)
  const navDividerClass = isDark
    ? 'border-white/20'
    : isHomePage
      ? scrolled ? 'border-slate-300' : 'border-white/25'
      : 'border-slate-300'

  const navBgClass = isDark
    ? scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    : isHomePage
      ? scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent'
      : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'

  const logoClass = isDark
    ? 'text-white'
    : isHomePage
      ? scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'
      : 'text-slate-900'

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <>
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? `${navBgClass} h-16` : `${navBgClass} h-20`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9l-1-1-8h-3v8h3l-1 1-6.74-6.26L12 2z"/>
              </svg>
            </motion.div>

            <div className="flex flex-col">
              <h1 className={`text-2xl font-heading font-bold ${
                mounted && isDark
                  ? 'text-white'
                  : mounted
                    ? logoClass
                    : isHomePage
                      ? 'text-white drop-shadow-md'
                      : 'text-slate-900'
              }`}>
                {siteConfig.name}
              </h1>
              <p className={`text-xs tracking-wide hidden sm:block ${
                mounted && isDark
                  ? 'text-white/70'
                  : mounted
                    ? (isDark ? 'text-white/70' : isHomePage && !scrolled ? 'text-white/80 drop-shadow-md' : 'text-slate-500')
                    : isHomePage
                      ? 'text-white/70 drop-shadow-md'
                      : 'text-slate-500'
              }`}>
                {siteConfig.tagline}
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-0">
              {siteConfig.navItems.map((item, index) => (
                <div key={item.href} className="relative flex items-center">
                  <motion.a
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 border-r ${
                      pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '')
                        ? `${navDividerClass} ${isDark ? 'text-accent bg-white/5' : '!text-accent'}`
                        : mounted ? `${navLinkClass} ${navDividerClass}` : (
                            isDark
                              ? 'text-white hover:text-accent border-white/20'
                              : isHomePage
                                ? 'text-white drop-shadow-md hover:text-yellow-200 border-white/25'
                                : 'text-slate-700 hover:text-primary border-slate-300'
                          )
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </div>
              ))}

              <div className="ml-4 pl-4 border-l border-white/20 flex items-center space-x-3">
                <ThemeToggle />
                <motion.a
                  href={siteConfig.hero.ctaHref}
                  className="px-6 py-2 bg-gradient-to-r from-accent to-secondary text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {siteConfig.hero.ctaText}
                </motion.a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 ${
                mounted && isDark
                  ? 'text-white bg-white/10 border border-white/10'
                  : isHomePage && !scrolled
                    ? 'text-white bg-white/15 border border-white/20 drop-shadow-md'
                    : 'text-slate-700 bg-slate-100 border border-slate-200'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

      </div>
    </motion.nav>

    {/* ==================== MOBILE SIDEBAR (Portal) ==================== */}
    {mounted && createPortal(
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] z-[99999] md:hidden flex flex-col overflow-hidden ${
                isDark
                  ? 'bg-gray-950 border-l border-white/10'
                  : 'bg-white border-l border-slate-200'
              }`}
              style={{
                boxShadow: isDark
                  ? '-20px 0 60px rgba(0,0,0,0.5)'
                  : '-20px 0 60px rgba(0,0,0,0.15)'
              }}
            >
              {/* Accent gradient bar at top */}
              <div className="h-1 w-full bg-gradient-to-r from-accent via-primary to-secondary flex-shrink-0" />

              {/* Header */}
              <div className={`px-5 py-4 flex items-center justify-between flex-shrink-0 ${
                isDark ? 'border-b border-white/5' : 'border-b border-slate-100'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/20">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-1-1-8h-3v8h3l-1 1-6.74-6.26L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className={`text-base font-heading font-bold leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {siteConfig.name}
                    </h2>
                    <p className={`text-[10px] tracking-wider uppercase ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      {siteConfig.tagline}
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={() => setIsOpen(false)}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl transition-colors ${
                    isDark
                      ? 'text-white/60 hover:text-white hover:bg-white/10'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <p className={`text-[10px] uppercase tracking-[0.15em] font-semibold px-3 mb-3 ${
                  isDark ? 'text-white/30' : 'text-slate-400'
                }`}>
                  Menu
                </p>
                <div className="space-y-1">
                  {siteConfig.navItems.map((item, index) => {
                    const isActive = pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '')
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group relative flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? isDark
                              ? 'bg-accent/15 text-accent'
                              : 'bg-accent/10 text-accent'
                            : isDark
                              ? 'text-white/70 hover:text-white hover:bg-white/5'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, type: 'spring', damping: 25 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Active indicator bar */}
                        {isActive && (
                          <motion.div
                            layoutId="sidebar-active"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-full"
                            transition={{ type: 'spring', damping: 25 }}
                          />
                        )}

                        <span className={`flex-shrink-0 ${
                          isActive
                            ? 'text-accent'
                            : isDark ? 'text-white/40 group-hover:text-white/70' : 'text-slate-400 group-hover:text-slate-600'
                        }`}>
                          {navIcons[item.href] || navIcons['/']}
                        </span>
                        <span>{item.label}</span>

                        {/* Arrow on hover */}
                        <svg className={`w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ${
                          isDark ? 'text-white/30' : 'text-slate-300'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className={`my-5 mx-3 h-px ${
                  isDark ? 'bg-white/5' : 'bg-slate-100'
                }`} />

                {/* CTA Button */}
                <motion.a
                  href={siteConfig.hero.ctaHref}
                  onClick={() => setIsOpen(false)}
                  className="block text-center mx-1 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-shadow"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {siteConfig.hero.ctaText}
                </motion.a>
              </div>

              {/* Bottom section */}
              <div className={`flex-shrink-0 px-5 py-4 border-t ${
                isDark ? 'border-white/5 bg-white/[0.02]' : 'border-slate-100 bg-slate-50/50'
              }`}>
                {/* Social links */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  {['github', 'twitter', 'instagram'].map((social, index) => (
                    <motion.a
                      key={social}
                      href={siteConfig.social[social]}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                        isDark
                          ? 'text-white/40 hover:text-white hover:bg-white/10'
                          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {socialIcons[social]}
                    </motion.a>
                  ))}
                </div>
                <p className={`text-[10px] text-center ${
                  isDark ? 'text-white/20' : 'text-slate-400'
                }`}>
                  {siteConfig.footer}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}

export default Navbar
