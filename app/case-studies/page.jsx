'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { siteConfig } from '../../config/siteConfig'

export default function CaseStudies() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const caseStudies = [
    {
      id: 1,
      title: "FoodTech Platform - Complete Restaurant & Delivery Solution",
      client: "QuickBite Delivery & FoodTech Innovations",
      category: "Full-Stack Platform Development",
      src: "/images/case-studies/ride-sharing-app.jpg",
      description: "Built a comprehensive food technology platform integrating cloud kitchen management, AI-powered delivery system, and real-time order processing like Swiggy and Zomato.",
      technologies: ["Next.js", "React Native", "Node.js", "MongoDB", "PostgreSQL", "Google Maps API", "Socket.io", "TensorFlow", "AWS", "Stripe", "Razorpay", "Twilio"],
      features: ["Cloud kitchen management", "AI inventory forecasting", "Multi-location restaurant support", "Real-time order processing", "AI-powered delivery routing", "Smart driver assignment", "Live GPS tracking", "In-app video calling", "Customer mobile app", "Driver rating system", "Multi-payment integration", "Push notifications", "Advanced analytics dashboard", "Staff scheduling", "Automated billing"],
      results: {
        metric: "Platform Growth",
        value: "300%",
        period: "6 months"
      },
      testimonial: "The integrated food platform transformed our entire business. We've seen 300% growth in orders, 75% improvement in operational efficiency, and 98% customer satisfaction through AI-powered automation."
    },
    {
      id: 3,
      title: "RideShare Pro - Real-time Ride Sharing",
      client: "QuickRide Technologies",
      category: "Mobile App Development",
      src: "/images/case-studies/ride-sharing-app.jpg",
      description: "Built a comprehensive ride-sharing app with real-time tracking, AI-powered contact management, and seamless user experience.",
      technologies: ["React Native", "Express.js", "Socket.io", "TensorFlow", "Google Maps API", "Twilio"],
      features: ["Real-time GPS tracking", "AI contact management", "Video calling", "In-app messaging", "Smart routing", "Payment integration", "Driver rating system"],
      results: {
        metric: "Daily Active Users",
        value: "50,000+",
        period: "6 months"
      },
      testimonial: "The AI-powered contact system reduced response time by 80% and improved customer satisfaction dramatically."
    },
    {
      id: 4,
      title: "E-Commerce Platform Revolution",
      client: "RetailTech Solutions",
      category: "Web Development",
      src: "/images/case-studies/ecommerce-platform.jpg",
      description: "Built a scalable e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard for seamless online shopping experience.",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Redis", "Docker", "AWS", "Google Analytics"],
      features: ["Real-time inventory", "Multi-channel selling", "Advanced search", "Customer segmentation", "Personalized recommendations", "Secure payments", "Mobile optimization"],
      results: {
        metric: "Revenue Increase",
        value: "250%",
        period: "12 months"
      },
      testimonial: "The new platform increased our online sales by 250% and reduced cart abandonment by 60%. Our conversion rates improved significantly across all customer segments."
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-8 md:p-12 glass"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted">
              Discover how {siteConfig.name} transforms businesses through innovative software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="rounded-xl p-6 hover-glow h-full flex flex-col glass"
              >
                {/* Image */}
                <div className="relative mb-6">
                  <img
                    src={caseStudy.src}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-secondary/20 text-secondary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-text-primary">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm font-medium mb-3 text-secondary">
                    {caseStudy.client}
                  </p>
                  <div className="text-right">
                    <span className="text-xs text-muted">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="leading-relaxed mb-4 text-muted">
                  {caseStudy.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-heading text-sm font-semibold mb-2 text-text-primary">
                    Technologies Used
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-center text-sm text-muted">
                        <svg className="w-4 h-4 text-secondary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {caseStudy.results && Object.entries(caseStudy.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {value.value}
                      </div>
                      <div className="text-xs text-muted">
                        {value.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <div className="mt-6 p-4 border border rounded-lg">
                    <p className="text-sm italic text-muted">
                      "{caseStudy.testimonial}"
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-12 text-center glass"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 text-muted">
              Explore our case studies and see how {siteConfig.name} can help your business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" href="/services" size="lg">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
