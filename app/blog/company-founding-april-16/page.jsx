'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { cardStyles } from '../../../lib/styles'

export default function CompanyFoundingPost() {
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
                  Company News
                </span>
                <span className="text-muted">April 16, 2026</span>
                <span className="text-muted">3 min read</span>
              </div>
              
              <h1 className="font-bold text-4xl md:text-5xl mb-6 text-text-primary">
                Aventurine Tech Solutions Begins Journey - Founded April 16
              </h1>
              
              <p className="text-xl text-muted leading-relaxed">
                Our software company officially started with 6 experienced professionals, bringing over 5+ years of collective expertise in software development and technology solutions.
              </p>
            </div>

            {/* Content */}
            <div className={`rounded-2xl p-8 md:p-12 card ${cardStyles}`}>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-text-primary">A New Chapter Begins</h2>
                
                <p className="mb-6 text-muted leading-relaxed">
                  Today marks the official founding of Aventurine Tech Solutions. We're a team of six passionate software professionals 
                  who have come together to create something special in the technology landscape.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Our Team's Strength</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  What makes us unique is our collective experience. Each member of our founding team brings over 5+ years of hands-on 
                  experience in software development, having worked on diverse projects across various industries. This depth of experience 
                  allows us to tackle complex challenges with confidence and deliver solutions that truly make a difference.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Our Vision</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  At Aventurine Tech Solutions, we believe in the power of technology to transform businesses and improve lives. 
                  Our mission is to provide innovative software solutions that help our clients achieve their goals more efficiently 
                  and effectively.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">What We Offer</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  While we're just beginning our journey, we're already equipped to handle a wide range of software development 
                  projects. From web applications to mobile solutions, from custom software to system integrations - our team has 
                  the expertise to deliver high-quality results.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Looking Ahead</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  This is just the beginning for Aventurine Tech Solutions. We're excited about the future and the opportunities 
                  to work with amazing clients, solve interesting problems, and grow together as a team. Stay tuned for more updates 
                  as we continue our journey!
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-text-primary">
                    Want to Work With Us?
                  </h3>
                  <p className="text-muted mb-6">
                    We're excited to take on new projects and help bring your ideas to life.
                  </p>
                  <Button href="/contact" size="lg">
                    Get in Touch
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
