'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { siteConfig } from '../../../config/siteConfig'

export default function Consulting() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: "Strategic IT Consulting",
      description: "Align your technology strategy with business goals for maximum impact and ROI.",
      features: ["Digital Transformation", "Technology Roadmapping", "IT Governance", "Risk Assessment"]
    },
    {
      title: "Software Architecture Consulting",
      description: "Design scalable, secure, and maintainable software architectures tailored to your needs.",
      features: ["Microservices Design", "Cloud Architecture", "API Strategy", "Performance Optimization"]
    },
    {
      title: "Process Optimization",
      description: "Streamline your development processes and workflows for better efficiency.",
      features: ["Agile Implementation", "DevOps Consulting", "CI/CD Pipeline Setup", "Quality Assurance"]
    }
  ]

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              'text-text-primary'
            }`}>
              IT Consulting Services
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              Expert guidance to transform your business through strategic technology solutions and optimized processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 hover-glow h-full flex flex-col ${
                  'glass hover-glow'
                }`}
              >
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed mb-4 flex-grow ${
                  'text-muted'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm ${
                      'text-muted'
                    }`}>
                      <svg className="w-4 h-4 text-secondary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${
              'text-text-primary'
            }`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`text-lg mb-8 ${
              'text-muted'
            }`}>
              Let's discuss how our consulting services can help you achieve your technology goals.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
