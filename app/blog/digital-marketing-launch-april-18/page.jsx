'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { cardStyles } from '../../../lib/styles'

export default function DigitalMarketingPost() {
  return (
    <main className="relative">
      <Navbar />
      
      <article className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`font-medium px-3 py-1 rounded-full bg-secondary/20 text-secondary`}>
                  Services
                </span>
                <span className="text-muted">April 18, 2026</span>
                <span className="text-muted">4 min read</span>
              </div>
              
              <h1 className="font-bold text-4xl md:text-5xl mb-6 text-text-primary">
                Digital Marketing Services Launched - April 18
              </h1>
              
              <p className="text-xl text-muted leading-relaxed">
                Expanding our service portfolio, we're excited to announce the launch of our comprehensive digital marketing services to help businesses grow their online presence.
              </p>
            </div>

            {/* Content */}
            <div className={`rounded-2xl p-8 md:p-12 card ${cardStyles}`}>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-text-primary">Beyond Software Development</h2>
                
                <p className="mb-6 text-muted leading-relaxed">
                  Just two days after our founding, we're already expanding our horizons! Aventurine Tech Solutions is proud to 
                  announce the launch of our digital marketing services, complementing our core software development offerings.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Why Digital Marketing?</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  In today's digital world, having great software is only half the battle. Businesses need to be discovered, 
                  engaged with, and converted. Our team recognized that many of our clients needed more than just technical solutions 
                  - they needed comprehensive digital strategies to succeed online.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">What We Offer</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  Our digital marketing services include:
                </p>
                <ul className="mb-6 text-muted leading-relaxed list-disc list-inside">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing</li>
                  <li>Content Marketing Strategy</li>
                  <li>Pay-Per-Click Advertising</li>
                  <li>Email Marketing Campaigns</li>
                  <li>Website Analytics & Reporting</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Our Approach</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  What sets us apart is our technical background. We understand the digital landscape from both the development 
                  and marketing perspectives. This allows us to create marketing strategies that are not only effective but also 
                  technically sound and data-driven.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Perfect Synergy</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  The combination of software development and digital marketing creates a powerful synergy. We can now offer 
                  end-to-end solutions - from building your website or application to helping you reach your target audience 
                  and achieve your business goals.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Get Started</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  Whether you're looking to improve your online presence, drive more traffic to your website, or create a 
                  comprehensive digital strategy, we're here to help. Our team is ready to take on new challenges and help 
                  your business grow in the digital space.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-text-primary">
                    Ready to Grow Your Online Presence?
                  </h3>
                  <p className="text-muted mb-6">
                    Let's discuss how our digital marketing services can help your business succeed.
                  </p>
                  <Button href="/contact" size="lg">
                    Start Your Digital Journey
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
