'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="relative">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-8 md:p-12 glass"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-text-primary">
                Something went wrong
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-text-secondary">
                We apologize for the inconvenience. An unexpected error occurred.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 text-text-muted">
                Please try again or contact our support team if the problem persists.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <Button
                onClick={reset}
                size="lg"
                className="w-full md:w-auto"
              >
                Try Again
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/"
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Go Home
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
