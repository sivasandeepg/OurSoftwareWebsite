'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { siteConfig } from '../../config/siteConfig'

export default function Careers() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for an experienced full stack developer to join our growing team and help build amazing software solutions."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our design team to create beautiful and intuitive user experiences for our clients' applications."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us build and maintain scalable infrastructure and deployment pipelines for our applications."
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our software projects and ensure successful delivery for our clients."
    },
    {
      title: "Machine Learning Engineer",
      department: "AI/ML",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and deploy machine learning models to solve real-world business problems."
    },
    {
      title: "Junior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "1-2 years",
      description: "Start your career with us and learn modern frontend development technologies."
    }
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages based on experience and skills."
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours and hybrid options."
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, training budgets, and career development programs."
    },
    {
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and support for personal time."
    },
    {
      title: "Modern Tools",
      description: "Latest hardware and software tools to help you do your best work."
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
              Join Our Team
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              Build amazing software with a talented team that values innovation, collaboration, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Why Work at {siteConfig.name}?
            </h2>
            <p className={`text-lg ${
              'text-muted'
            }`}>
              We offer more than just a job – we offer a career with purpose and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  'bg-secondary/20 text-secondary'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`font-heading text-lg font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              'text-text-primary'
            }`}>
              Open Positions
            </h2>
            <p className={`text-lg ${
              'text-muted'
            }`}>
              Find your next opportunity with us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 hover-glow ${
                  'glass hover-glow'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className={`font-heading text-xl font-semibold mb-2 ${
                      'text-text-primary'
                    }`}>
                      {position.title}
                    </h3>
                    <p className={`leading-relaxed mb-3 ${
                      'text-muted'
                    }`}>
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {position.department}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {position.location}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {position.type}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button href="#" variant="outline">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Innovation First
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  We encourage creative thinking and innovative solutions to complex problems.
                </p>
              </div>
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Collaborative Environment
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  We believe in the power of teamwork and open communication.
                </p>
              </div>
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Continuous Learning
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  We support ongoing education and professional development.
                </p>
              </div>
              <div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  Work-Life Harmony
                </h3>
                <p className={`leading-relaxed ${
                  'text-muted'
                }`}>
                  We respect personal time and promote a healthy work-life balance.
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
