'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CaseStudies = () => {
  const [mounted, setMounted] = useState(false)
  const [activeCase, setActiveCase] = useState(null)

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
      description: "Built a comprehensive e-commerce platform with advanced inventory management and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["Real-time inventory", "Secure payments", "Admin dashboard", "Mobile responsive"],
      results: {
        metric: "Revenue Increase",
        value: "250%",
        period: "6 months"
      },
      testimonial: "The platform transformed our online business completely. Sales increased by 250% within 6 months."
    },
    {
      id: 5,
      title: "Healthcare Management System",
      client: "Apollo Hospitals",
      category: "Software Solutions",
      src: "/images/case-studies/healthcare-system.jpg",
      description: "Developed a comprehensive hospital management system with patient records and appointment scheduling.",
      technologies: [".NET", "SQL Server", "React", "Azure"],
      features: ["Patient records", "Appointment scheduling", "Billing system", "Telemedicine"],
      results: {
        metric: "Efficiency Improvement",
        value: "40%",
        period: "3 months"
      },
      testimonial: "The new system reduced patient wait times by 60% and improved staff productivity significantly."
    },
    {
      id: 6,
      title: "Educational Platform",
      client: "Delhi Public School",
      category: "Mobile App Development",
      src: "/images/case-studies/educational-platform.jpg",
      description: "Created a mobile-first educational platform with online classes and progress tracking.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      features: ["Video streaming", "Progress tracking", "Online assessments", "Parent portal"],
      results: {
        metric: "Student Engagement",
        value: "300%",
        period: "4 months"
      },
      testimonial: "Student engagement increased dramatically. Parents love the real-time progress updates."
    },
    {
      id: 7,
      title: "Enterprise ERP System",
      client: "Global Manufacturing Corp",
      category: "Enterprise Software",
      src: "/images/case-studies/enterprise-erp.jpg",
      description: "Developed a comprehensive ERP system integrating supply chain, finance, HR, and production management modules.",
      technologies: [".NET Core", "Angular", "SQL Server", "Docker", "Azure DevOps"],
      features: ["Supply chain management", "Financial accounting", "HR management", "Production planning", "Real-time reporting", "Mobile dashboard"],
      results: {
        metric: "Operational Efficiency",
        value: "70%",
        period: "8 months"
      },
      testimonial: "The ERP system transformed our entire business operations. We've seen 70% improvement in overall efficiency and significant cost reductions."
    },
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
    <section className="py-[120px] px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-inter text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image - Static placeholder to prevent crashes */}
              <div className="relative h-36 overflow-hidden bg-surface flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto mb-2 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-text-muted">Project Preview</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold font-inter text-sm text-text-primary mb-2 line-clamp-1">
                  {caseStudy.title}
                </h3>
                <p className="text-xs text-text-muted mb-3 leading-relaxed line-clamp-2">
                  {caseStudy.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {caseStudy.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-1.5 py-0.5 text-xs rounded-full bg-surface text-text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.technologies.length > 3 && (
                    <span className="text-xs text-text-muted">
                      +{caseStudy.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-3">
                  <h4 className="font-semibold text-xs text-text-primary mb-1.5">
                    Key Features
                  </h4>
                  <ul className="space-y-0.5">
                    {caseStudy.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-text-muted">
                        <svg className="w-3 h-3 text-primary mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010-1.414 1.414l-8 8a1 1 0 01-1.414 1.414L8.586 10H7a1 1 0 00-.707.293l5.414 5.414a1 1 0 001.414-1.414l-5-5z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="rounded-lg p-3 bg-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-text-primary">
                        {caseStudy.results.value}
                      </div>
                      <div className="text-xs text-text-muted">
                        {caseStudy.results.metric}
                      </div>
                    </div>
                    <div className="text-xs text-text-muted">
                      in {caseStudy.results.period}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-t border-border">
                  <p className="text-xs italic mt-2 line-clamp-2 text-text-muted">
                    "{caseStudy.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
