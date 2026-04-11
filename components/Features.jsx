'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { siteConfig } from '../config/siteConfig'

const Features = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])
  
  // TODO: connect to CMS (Sanity/Contentful) for dynamic content
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "Custom web applications built with Node.js, Next.js, React, and PHP to deliver exceptional user experiences."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for Android and iOS using React Native and native technologies."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Software Solutions",
      description: "Enterprise-grade software and microservices built with .NET, Node.js, and modern backend architectures."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, social media, and content marketing to grow your business."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Stunning user interfaces and experiences designed with modern tools and best practices for maximum engagement."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Dedicated technical support and maintenance services to ensure your applications run smoothly around the clock."
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
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      mounted && isDark ? '' : 'bg-gradient-to-br from-[#f8faff] to-[#eef2ff]'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent/70 tracking-widest text-xs uppercase mb-8"
          >
            — Our Strengths —
          </motion.p>
          
          <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            mounted && isDark ? 'text-white' : 'text-[#0f2040]'
          }`}>
            What We Offer
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            mounted && isDark ? 'text-white/80' : 'text-[#4a6080]'
          }`}>
            Discover our comprehensive software development services designed to transform your business ideas into reality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className={`rounded-xl p-6 hover-glow ${
                index === 0 ? 'md:col-span-2' : ''
              } ${
                mounted && isDark
                  ? 'glass'
                  : mounted
                    ? 'bg-white border border-slate-200 shadow-sm'
                    : 'glass'
              }`}
            >
              {/* Number Badge */}
              <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${
                mounted && isDark ? 'bg-white/10 text-white/10' : 'bg-slate-100 text-slate-300'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                mounted && isDark 
                  ? 'bg-gradient-to-br from-accent/30 to-accent/10 text-accent'
                  : 'bg-[#eef2ff] text-[#0f3460]'
              }`}>
                <div>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className={`font-heading text-xl font-semibold mb-3 ${
                mounted && isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${
                mounted && isDark ? 'text-white/70' : 'text-slate-600'
              }`}>
                {feature.description}
              </p>
              
              {/* Learn more link */}
              <motion.a
                href="#"
                className="text-accent text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
        
              </div>
    </section>
  )
}

export default Features
