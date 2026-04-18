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
      title: "E-commerce Platform Transformation",
      client: "Global Retail Corporation",
      industry: "Retail",
      challenge: "Legacy e-commerce platform struggling with scalability and poor user experience, resulting in declining conversion rates.",
      solution: "Built a modern, scalable e-commerce platform using Next.js, Node.js, and microservices architecture with advanced personalization features.",
      results: [
        "150% increase in conversion rates",
        "60% improvement in page load speed",
        "99.9% uptime achieved",
        "40% reduction in operational costs"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS", "Docker"],
      duration: "6 months",
      teamSize: "8 developers"
    },
    {
      title: "AI-Powered Customer Service Platform",
      client: "Fortune 500 Financial Services",
      industry: "Finance",
      challenge: "Manual customer service processes causing long response times and inconsistent service quality across channels.",
      solution: "Developed an AI-powered customer service platform with intelligent chatbots, automated ticket routing, and sentiment analysis.",
      results: [
        "80% reduction in response time",
        "45% decrease in operational costs",
        "92% customer satisfaction rate",
        "24/7 service availability achieved"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Google Cloud AI", "WebSocket"],
      duration: "8 months",
      teamSize: "12 developers"
    },
    {
      title: "Cloud Migration and Modernization",
      client: "Manufacturing Enterprise",
      industry: "Manufacturing",
      challenge: "On-premise infrastructure causing high maintenance costs and inability to scale during peak demand periods.",
      solution: "Comprehensive cloud migration strategy with infrastructure modernization, DevOps implementation, and cost optimization.",
      results: [
        "70% reduction in infrastructure costs",
        "Scalability improved by 300%",
        "Deployment time reduced from weeks to hours",
        "Enhanced security and compliance"
      ],
      technologies: ["AWS", "Terraform", "Kubernetes", "Jenkins", "Docker", "Monitoring Tools"],
      duration: "4 months",
      teamSize: "6 developers"
    },
    {
      title: "Mobile Banking Application",
      client: "Regional Bank",
      industry: "Banking",
      challenge: "Outdated mobile banking app with limited features and poor user adoption rates among younger customers.",
      solution: "Developed a modern mobile banking application with biometric authentication, real-time notifications, and personalized financial insights.",
      results: [
        "200% increase in mobile app adoption",
        "95% user satisfaction rating",
        "50% reduction in support calls",
        "3x increase in digital transactions"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "JWT", "Push Notifications"],
      duration: "5 months",
      teamSize: "7 developers"
    },
    {
      title: "Healthcare Management System",
      client: "Hospital Network",
      industry: "Healthcare",
      challenge: "Disparate systems for patient records, appointments, and billing leading to inefficiencies and data inconsistencies.",
      solution: "Integrated healthcare management system with EMR, appointment scheduling, billing, and telemedicine capabilities.",
      results: [
        "60% improvement in operational efficiency",
        "40% reduction in administrative overhead",
        "HIPAA compliance achieved",
        "Enhanced patient experience"
      ],
      technologies: ["Angular", ".NET Core", "SQL Server", "HL7", "FHIR", "Video Conferencing API"],
      duration: "9 months",
      teamSize: "10 developers"
    },
    {
      title: "Real Estate Analytics Platform",
      client: "Real Estate Investment Firm",
      industry: "Real Estate",
      challenge: "Manual property analysis and market research processes causing delays in investment decisions.",
      solution: "Built an AI-driven analytics platform for property valuation, market trend analysis, and investment opportunity identification.",
      results: [
        "75% faster investment decision making",
        "85% accuracy in property valuations",
        "300% increase in deal flow",
        "Comprehensive market insights"
      ],
      technologies: ["Python", "Machine Learning", "React", "PostgreSQL", "Data Visualization", "API Integration"],
      duration: "7 months",
      teamSize: "9 developers"
    }
  ]

  const industries = ["All", "Retail", "Finance", "Manufacturing", "Banking", "Healthcare", "Real Estate"]
  const [selectedIndustry, setSelectedIndustry] = useState("All")

  const filteredStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)

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
              Case Studies
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${
              'text-muted'
            }`}>
              Discover how we've helped businesses transform their operations and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-secondary text-white'
                    : 'bg-secondary/20 text-secondary hover:bg-secondary/30'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {filteredStudies.map((study, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden hover-glow ${
                  'glass hover-glow'
                }`}
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-2 ${
                        'text-text-primary'
                      }`}>
                        {study.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          'bg-secondary/20 text-secondary'
                        }`}>
                          {study.industry}
                        </span>
                        <span className={`text-sm ${
                          'text-muted'
                        }`}>
                          {study.client}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button href="/contact" variant="outline">
                        View Full Study
                      </Button>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className={`font-heading text-lg font-semibold mb-3 ${
                        'text-text-primary'
                      }`}>
                        The Challenge
                      </h4>
                      <p className={`leading-relaxed ${
                        'text-muted'
                      }`}>
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-heading text-lg font-semibold mb-3 ${
                        'text-text-primary'
                      }`}>
                        Our Solution
                      </h4>
                      <p className={`leading-relaxed ${
                        'text-muted'
                      }`}>
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className={`font-heading text-lg font-semibold mb-3 ${
                      'text-text-primary'
                    }`}>
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm ${
                            'text-text-primary'
                          }`}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Metadata */}
                  <div className="border-t pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className={`font-heading text-sm font-semibold mb-2 ${
                          'text-muted'
                        }`}>
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`text-xs px-2 py-1 rounded ${
                                'bg-secondary/10 text-secondary'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className={`font-heading text-sm font-semibold mb-2 ${
                          'text-muted'
                        }`}>
                          Duration
                        </h5>
                        <p className={`text-sm ${
                          'text-text-primary'
                        }`}>
                          {study.duration}
                        </p>
                      </div>
                      <div>
                        <h5 className={`font-heading text-sm font-semibold mb-2 ${
                          'text-muted'
                        }`}>
                          Team Size
                        </h5>
                        <p className={`text-sm ${
                          'text-text-primary'
                        }`}>
                          {study.teamSize}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
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
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Ready to Achieve Similar Results?
            </h2>
            <p className={`text-lg mb-8 text-center ${
              'text-muted'
            }`}>
              Let's discuss how we can help transform your business with our software solutions.
            </p>
            <div className="text-center">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
