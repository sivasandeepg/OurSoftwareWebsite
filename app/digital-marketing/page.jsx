'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { cardStyles, cardTitleStyles } from '../../lib/styles'

export default function DigitalMarketingPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility on search engines and drive organic traffic with our comprehensive SEO strategies.",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Content Strategy & Creation",
        "Link Building Campaigns",
        "Local SEO Optimization"
      ],
      icon: "🔍"
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all major social media platforms.",
      features: [
        "Social Media Strategy Development",
        "Content Creation & Management",
        "Community Management",
        "Social Media Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting"
      ],
      icon: "📱"
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic and conversions through strategic paid advertising campaigns.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "LinkedIn Advertising",
        "Campaign Strategy & Planning",
        "A/B Testing & Optimization",
        "ROI Tracking & Reporting"
      ],
      icon: "🎯"
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts, engages, and converts your target audience.",
      features: [
        "Content Strategy & Planning",
        "Blog Writing & Management",
        "Video Content Production",
        "Email Marketing Campaigns",
        "Lead Magnet Creation",
        "Content Distribution Strategy"
      ],
      icon: "📝"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and build customer relationships through targeted email campaigns.",
      features: [
        "Email Campaign Strategy",
        "Newsletter Design & Management",
        "Automated Email Sequences",
        "List Segmentation & Targeting",
        "A/B Testing & Optimization",
        "Performance Analytics"
      ],
      icon: "📧"
    },
    {
      title: "Analytics & Reporting",
      description: "Track, measure, and optimize your digital marketing performance with detailed analytics.",
      features: [
        "Google Analytics Setup",
        "Custom Dashboard Creation",
        "Conversion Tracking",
        "Performance Reporting",
        "Data-Driven Insights",
        "ROI Analysis"
      ],
      icon: "📊"
    }
  ]

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-text-primary">
              Digital Marketing Services
            </h1>
            <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-8">
              Transform your online presence with our comprehensive digital marketing solutions. 
              We help businesses grow through data-driven strategies and creative execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get Started Today
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 card ${cardStyles}`}
          >
            <h2 className="font-bold text-3xl mb-8 text-center text-text-primary">
              Why Choose Our Digital Marketing Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-text-primary">Results-Driven Approach</h3>
                <p className="text-muted">
                  We focus on measurable results and ROI to ensure your marketing investment delivers real business value.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-text-primary">Targeted Strategies</h3>
                <p className="text-muted">
                  Our data-driven approach ensures we reach the right audience with the right message at the right time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-text-primary">Continuous Optimization</h3>
                <p className="text-muted">
                  We constantly monitor and optimize campaigns to improve performance and maximize your marketing results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className={`py-16 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-text-primary">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help your business succeed online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 h-full ${cardStyles}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`font-bold text-xl mb-3 ${cardTitleStyles} text-text-primary`}>
                  {service.title}
                </h3>
                <p className="text-muted mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted">
                      <span className="text-secondary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 card ${cardStyles}`}
          >
            <h2 className="font-bold text-3xl mb-8 text-center text-text-primary">
              Our Digital Marketing Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Discovery & Audit</h3>
                <p className="text-sm text-muted">
                  We analyze your current digital presence and identify opportunities for growth.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Strategy Development</h3>
                <p className="text-sm text-muted">
                  We create a customized digital marketing strategy tailored to your business goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Implementation</h3>
                <p className="text-sm text-muted">
                  Our team executes the strategy with expert campaign management and content creation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-text-primary">Optimization & Reporting</h3>
                <p className="text-sm text-muted">
                  We continuously monitor performance and optimize campaigns for maximum results.
                </p>
              </div>
            </div>
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
            className={`rounded-2xl p-8 md:p-12 card text-center ${cardStyles}`}
          >
            <h2 className="font-bold text-3xl mb-6 text-text-primary">
              Ready to Grow Your Online Presence?
            </h2>
            <p className="text-xl text-muted mb-8">
              Let's discuss how our digital marketing services can help your business succeed in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Schedule a Consultation
              </Button>
              <Button href="/blog/digital-marketing-launch-april-18" variant="outline" size="lg">
                Read About Our Launch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
