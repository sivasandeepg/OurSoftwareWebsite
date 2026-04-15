'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import StatsStrip from '../components/StatsStrip'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative min-h-screen bg-background">
        <div className="animate-pulse text-center py-20">
          <div className="text-text-primary">Loading...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <Features />
      <StatsStrip />
      <CaseStudies />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-[120px] px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card p-8 md:p-12">
            <h2 className="font-bold font-inter text-3xl md:text-4xl text-text-primary mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Let's build intelligent software solutions that scale with your ambition. Contact us today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="rounded-md px-7 py-3 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="/case-studies"
                className="rounded-md px-7 py-3 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
