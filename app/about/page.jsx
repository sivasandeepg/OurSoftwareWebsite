'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { siteConfig } from '../../config/siteConfig'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // TODO: connect to CMS (Sanity/Contentful) for dynamic content
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in software development and digital transformation.",
      image: "/images/team/ceo.jpg"
    },
    {
      name: "Sarah Mitchell",
      role: "CTO",
      bio: "Expert in cloud architecture and scalable software solutions with enterprise experience.",
      image: "/images/team/cto.jpg"
    },
    {
      name: "David Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in React, Node.js, and modern web technologies.",
      image: "/images/team/lead-dev.jpg"
    },
    {
      name: "Emily Thompson",
      role: "Head of Design",
      bio: "Creative director focused on user experience and innovative design solutions.",
      image: "/images/team/design.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
              About {siteConfig.name}
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              {siteConfig.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${
                'text-text-primary'
              }`}>
                Our Story
              </h2>
              <div className={`space-y-4 leading-relaxed ${
                'text-muted'
              }`}>
                <p>
                  Founded with a vision to revolutionize the digital landscape, {siteConfig.name} has been at the forefront of software innovation for over 15 years. Our journey began with a simple mission: to transform businesses through cutting-edge technology solutions.
                </p>
                <p>
                  Today, we stand proud as a leading software development company, having delivered 500+ successful projects that have helped businesses across various industries achieve digital transformation and growth.
                </p>
                <p>
                  Our commitment to innovation, coupled with our dedication to technical excellence and client success, makes us unique in the software development landscape.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className={`rounded-2xl p-8 space-y-6 ${
                'glass'
              }`}
            >
              <div className="text-center">
                <h3 className={`font-heading text-2xl font-bold mb-2 ${
                  'text-text-primary'
                }`}>Our Mission</h3>
                <p className={`${
                  'text-muted'
                }`}>
                  To develop transformative software solutions that empower businesses to innovate, scale, and thrive in the digital age.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className={`font-heading text-2xl font-bold mb-2 ${
                  'text-text-primary'
                }`}>Our Vision</h3>
                <p className={`${
                  'text-muted'
                }`}>
                  To be a globally recognized technology partner that drives digital innovation and helps businesses achieve their full potential through cutting-edge software solutions.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className={`font-heading text-2xl font-bold mb-2 ${
                  'text-text-primary'
                }`}>Our Values</h3>
                <p className={`${
                  'text-muted'
                }`}>
                  Innovation, Excellence, Integrity, Client-Centric Approach, and Technical Mastery guide everything we do at {siteConfig.name}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Meet Our Leadership Team
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              'text-muted'
            }`}>
              Experienced technology leaders and innovators dedicated to your success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className={`rounded-xl p-6 text-center hover-glow ${
                  'glass'
                }`}
              >
                {/* Placeholder Image */}
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                <h3 className={`font-heading text-xl font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  {member.name}
                </h3>
                <p className={`font-medium mb-3 ${
                  'text-secondary'
                }`}>
                  {member.role}
                </p>
                <p className={`text-sm leading-relaxed ${
                  'text-muted'
                }`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 text-center ${
              'glass'
              }`}
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Partner With Us
            </h2>
            <p className={`text-lg mb-8 ${
              'text-muted'
            }`}>
              Discover why {siteConfig.name} is the perfect technology partner for your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button variant="outline" href="/services" size="lg">
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
