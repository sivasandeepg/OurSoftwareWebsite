'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { cardStyles } from '../../../lib/styles'

export default function ProductLaunchPost() {
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
                  Product Launch
                </span>
                <span className="text-muted">April 20, 2026</span>
                <span className="text-muted">5 min read</span>
              </div>
              
              <h1 className="font-bold text-4xl md:text-5xl mb-6 text-text-primary">
                Our Product Development Journey - Project Start April 20
              </h1>
              
              <p className="text-xl text-muted leading-relaxed">
                Starting development of our first proprietary product - a major milestone marking our entry into product development and innovation. Launch coming soon!
              </p>
            </div>

            {/* Content */}
            <div className={`rounded-2xl p-8 md:p-12 card ${cardStyles}`}>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-text-primary">From Services to Product Development</h2>
                
                <p className="mb-6 text-muted leading-relaxed">
                  Just four days after founding our company, we're achieving another significant milestone. Aventurine Tech Solutions 
                  is proud to announce that we've started development of our first proprietary product - a testament to our team's capability and innovation.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Why Develop Our Own Product?</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  While we love helping clients build their solutions, we've always believed in practicing what we preach. Creating our 
                  own product allows us to experience the full product development lifecycle - from ideation to launch and beyond. 
                  This hands-on experience makes us better consultants and developers for our clients.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Our First Product</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  Without giving away too much (we're saving the big reveal for launch day!), our first product will address 
                  a common pain point we've observed in many businesses. It's a solution that combines our expertise in software 
                  development with our understanding of real-world business challenges.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">The Development Journey Begins</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  What started as an idea during our founding discussions has now evolved into a full-fledged development project. Our team 
                  is working tirelessly, leveraging our collective 5+ years of experience to create something we'll be truly proud of. 
                  The development process will involve:
                </p>
                <ul className="mb-6 text-muted leading-relaxed list-disc list-inside">
                  <li>Market research and validation</li>
                  <li>Product design and user experience planning</li>
                  <li>Agile development sprints</li>
                  <li>Rigorous testing and quality assurance</li>
                  <li>Performance optimization</li>
                  <li>Security implementation</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">What This Means for Our Clients</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  Starting our own product development demonstrates our capability to not just build custom solutions, but also create innovative products 
                  from scratch. This hands-on experience will make us better consultants and developers for our clients as we navigate the complete 
                  product development lifecycle.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Looking Ahead to Launch</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  We're just beginning our product development journey and are excited about bringing this product to market soon. 
                  Our goal is to continue innovating and creating value through technology, both for our clients and through our own products. 
                  Stay tuned for more updates as we progress toward launch day!
                </p>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">Join Us on This Journey</h3>
                <p className="mb-6 text-muted leading-relaxed">
                  We're excited about starting this product development journey and even more excited about the upcoming launch. Whether you're interested in our 
                  upcoming product, need custom development services, or want to partner with us on your own product ideas, we'd love 
                  to hear from you.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-text-primary">
                    Interested in Our Upcoming Product or Services?
                  </h3>
                  <p className="text-muted mb-6">
                    Let's discuss how we can help bring your ideas to life or be among the first to know about our product launch.
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
