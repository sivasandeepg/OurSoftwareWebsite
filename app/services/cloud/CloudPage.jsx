'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { siteConfig } from '../../../config/siteConfig'

export default function Cloud() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and infrastructure to the cloud with minimal disruption.",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Platform", "Hybrid Cloud Solutions"]
    },
    {
      title: "Cloud Architecture",
      description: "Design and implement scalable, secure, and cost-effective cloud architectures.",
      features: ["Serverless Architecture", "Container Orchestration", "Microservices on Cloud", "Multi-Cloud Strategy"]
    },
    {
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for better performance and cost efficiency.",
      features: ["Cost Management", "Performance Tuning", "Security Hardening", "Auto-scaling Setup"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement robust DevOps practices and CI/CD pipelines for cloud deployments.",
      features: ["Pipeline Automation", "Infrastructure as Code", "Monitoring & Logging", "Security Integration"]
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
            <h1 className={`font-bold mb-6 ${
              'text-text-primary'
            }`}>
              Cloud Solutions
            </h1>
            <p className={`leading-relaxed ${
              'text-muted'
            }`}>
              Harness the power of cloud computing with our comprehensive cloud services and solutions.
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
                <h3 className={`font-semibold mb-3 ${
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
                    <li key={featureIndex} className={`flex items-center ${
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

      {/* Benefits Section */}
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
            <h2 className={`font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Why Choose Our Cloud Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Cost Efficiency
                </h3>
                <p className={`${
                  'text-muted'
                }`}>
                  Reduce infrastructure costs by 40-60% with optimized cloud solutions.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Scalability
                </h3>
                <p className={`${
                  'text-muted'
                }`}>
                  Scale your resources up or down based on demand with auto-scaling.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Security
                </h3>
                <p className={`${
                  'text-muted'
                }`}>
                  Enterprise-grade security with compliance and data protection.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  24/7 Support
                </h3>
                <p className={`${
                  'text-muted'
                }`}>
                  Round-the-clock monitoring and support for your cloud infrastructure.
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
