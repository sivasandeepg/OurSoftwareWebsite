'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import TechStack from '../../components/TechStack'
import { siteConfig } from '../../config/siteConfig'

export default function Services() {
  // TODO: connect to CMS (Sanity/Contentful) for dynamic content
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies to deliver exceptional user experiences.",
      features: ["React/Next.js", "Node.js Backend", "PHP Development", "E-commerce Solutions"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for Android and iOS using React Native and native technologies.",
      features: ["React Native", "Native Android", "Native iOS", "App Store Deployment"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Software Solutions",
      description: "Enterprise-grade software and microservices built with .NET, Node.js, and modern backend architectures.",
      features: [".NET Development", "Microservices", "API Development", "Database Design"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, social media, and content marketing to grow your business.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Stunning user interfaces and experiences designed with modern tools and best practices for maximum engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "24/7 Support & Maintenance",
      description: "Dedicated technical support and maintenance services to ensure your applications run smoothly around the clock.",
      features: ["Technical Support", "Bug Fixes", "Performance Optimization", "Security Updates"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

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
              Our Software Development Services
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              Discover comprehensive software development solutions we offer at {siteConfig.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className={`rounded-xl p-6 hover-glow h-full flex flex-col ${
                  'glass hover-glow'
                }`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <div>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
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

                {/* Features */}
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
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-12 bg-white border border-slate-200 shadow-md"
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Why Choose Our Software Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Cutting-Edge Technology
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  We leverage the latest technologies and frameworks to build scalable, secure, and high-performance software solutions tailored to your business needs.
                </p>
              </div>
              
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Expert Development Team
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  Our skilled developers and designers bring years of experience in delivering innovative software solutions across various industries.
                </p>
              </div>
              
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Agile Development Process
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  We follow agile methodologies to ensure transparent communication, rapid iteration, and delivery of solutions that meet your exact requirements.
                </p>
              </div>
              
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Proven Track Record
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  With 500+ successful projects delivered, we have a proven track record of creating software that drives business growth and innovation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      <Footer />
    </main>
  )
}
