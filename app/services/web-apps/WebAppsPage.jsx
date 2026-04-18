'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { siteConfig } from '../../../config/siteConfig'

export default function WebApps() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: "Custom Web Applications",
      description: "Build tailored web applications that solve your specific business challenges.",
      features: ["React/Next.js Apps", "Vue.js Applications", "Angular Solutions", "Progressive Web Apps"]
    },
    {
      title: "E-commerce Platforms",
      description: "Create powerful online stores with advanced features and seamless user experience.",
      features: ["Shopify Development", "Custom E-commerce", "Payment Integration", "Inventory Management"]
    },
    {
      title: "Enterprise Web Solutions",
      description: "Develop scalable enterprise-grade web applications for complex business operations.",
      features: ["ERP Systems", "CRM Solutions", "Business Intelligence", "Workflow Automation"]
    },
    {
      title: "API Development",
      description: "Design and develop robust APIs that power your web applications and integrations.",
      features: ["RESTful APIs", "GraphQL APIs", "API Documentation", "Third-party Integrations"]
    }
  ]

  const techStack = [
    "React", "Next.js", "Node.js", "Python", ".NET", "PostgreSQL", "MongoDB", "Redis"
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
              Web Application Development
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              Create powerful, scalable, and user-friendly web applications that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Tech Stack Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Our Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    'bg-secondary/20 text-secondary'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <span className="font-bold">1</span>
                </div>
                <h3 className={`font-heading text-sm font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Discovery
                </h3>
                <p className={`text-xs ${
                  'text-muted'
                }`}>
                  Understanding your requirements and goals
                </p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <span className="font-bold">2</span>
                </div>
                <h3 className={`font-heading text-sm font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Design
                </h3>
                <p className={`text-xs ${
                  'text-muted'
                }`}>
                  Creating wireframes and UI/UX designs
                </p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <span className="font-bold">3</span>
                </div>
                <h3 className={`font-heading text-sm font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Development
                </h3>
                <p className={`text-xs ${
                  'text-muted'
                }`}>
                  Building your application with agile methodology
                </p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <span className="font-bold">4</span>
                </div>
                <h3 className={`font-heading text-sm font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Launch
                </h3>
                <p className={`text-xs ${
                  'text-muted'
                }`}>
                  Deployment and ongoing support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
