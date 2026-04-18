'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <main className="relative">
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-8 md:p-12 glass"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">404</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-text-primary">
              Page Not Found
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-text-muted">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="space-y-3">
                <h2 className="font-semibold text-lg text-text-primary">Quick Links</h2>
                <div className="space-y-2">
                  <a href="/" className="block text-sm text-text-muted hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="/services" className="block text-sm text-text-muted hover:text-primary transition-colors">
                    Services
                  </a>
                  <a href="/about" className="block text-sm text-text-muted hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="/blog" className="block text-sm text-text-muted hover:text-primary transition-colors">
                    Blog
                  </a>
                  <a href="/careers" className="block text-sm text-text-muted hover:text-primary transition-colors">
                    Careers
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="font-semibold text-lg text-text-primary">Need Help?</h2>
                <p className="text-sm text-text-muted mb-3">
                  Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
                </p>
                <Button href="/contact" size="lg" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Button href="/" variant="outline" size="lg">
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
